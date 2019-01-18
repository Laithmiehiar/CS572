const http = require('http')
const { fork } = require('child_process')
const url = require('url');
const path = require('path')

http.createServer().on('request', (req,res) => {
    const filePath = url.parse(req.url, true).query.url;

    var childProcess = fork(path.join(__dirname,'readFileChild.js'),[filePath],{silent:true, execArgv:['--inspect']});
    childProcess.stdout.on('data', data => {
        console.log(data)
        res.write(data.toString());
    });

    childProcess.stderr.on('error', error => {
        console.log('Error: '+error)
        res.end(error.toString());
    });

    childProcess.on('exit', err => {
        console.log(`Child exited with code ${err}`);
        res.end();
    });
}).listen(3000);


