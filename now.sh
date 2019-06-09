{
  "version": 2,
  "alias": "at.now.sh",
  "builds": [
    { "src": "api/data/index.js", "use": "@now/node" },
    { "src": "index.html", "use": "@now/static" }
  ]
}