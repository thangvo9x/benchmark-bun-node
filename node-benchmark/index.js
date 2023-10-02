const express = require('express')
const app = express()
const port = 3001


const header = {
    'x-powered-by': 'benchmark',
    'content-type': 'application/json',
    connection: 'keep-alive',
    'keep-alive': 'timeout=5',
}



app.get('/benchmark/:name', (req, res) => {
  const {name} = req.params;
  const id = req.query.id;

  const response = JSON.stringify({name,id});
  headers['content-length'] = response.length;
  res.writeHead(200, header);
  res.end(response);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})