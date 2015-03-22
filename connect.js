connect: {
  dev: {
    options: {
      port: 8083, // port to run your static file server on
      base: 'app', // directory where you want to server static files
      keepalive: true, // to prevent server from stopping once all files were compiled
      hostname: '127.0.0.1' // hostname to access your static files
    }
  }
}
