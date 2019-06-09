const { parse } = require('url')
const data = require('at-data.json')

module.exports = (req, res) => {
  const { query } = parse(req.url, true)
  const { type } = query
  
  function filter(data, type) {
    const TYPE = type.toUpperCase();
    return TYPE === "ALL" ? data : data.filter(wp => wp.type === TYPE)
  }

  res.writeHead(200, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'no-cache'
  })
  res.end(JSON.stringify({
    data: filter(data, type)
  }))
}