var restify = require('restify');
var server = restify.createServer();
server.get('/docs/current/', restify.plugins.serveStatic({
directory: 'https://localhost/g',
default: 'www.google.com'
}))

server.listen(8090,function(){
console.log('server starting');
})
