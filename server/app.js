const express = require('express')
const app = express()

app.get('/',(req, res)=> {

    let html = '<h1>Hello World</h1>';
    html += '<button onClick="clickMe(this)">Click Me</button>';
    html += '<p id="title"></p>';
    script = '<script>';
    script += 'console.log("hello") \n'
    script += `function clickMe(e) {document.getElementById("title").innerHTML =${req.url.toString()}}`;
    script += '</script>';
    res.send(html + script)
})

app.listen(3000)
