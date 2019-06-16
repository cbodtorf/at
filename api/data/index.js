const { parse } = require('url')
const fs = require('fs')
const path = require("path")
const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, "./at-data.json"), 'utf-8'))

module.exports = (req, res) => {
  const { query } = parse(req.url, true)
  const { type } = query

  function filter(data, type) {
    const TYPE = typeof type !== 'undefined' ? type.toUpperCase() : "ALL"
    return TYPE === "ALL" ? data : data.filter(wp => wp.type === TYPE)
  }

  res.writeHead(200, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Cache-Control': 'no-cache',
  })
  res.end(JSON.stringify({
    data: filter(data, type)
  }))
}