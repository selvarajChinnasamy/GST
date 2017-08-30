var Hapi = require('hapi')

// create new server instance
var server = new Hapi.Server()

// add server’s connection information
server.connection({  
  host: 'localhost',
  port: 3000
})

server.register({  
  register: require('inert')
}, function(err) {
  if (err) throw err



    server.route({  
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
          // reply.file() expects the file path as parameter
          reply.file('dist/index.html')
        }
      })



  server.start(function(err) {
    console.log('Server started at: ' + server.info.uri)
  })
})