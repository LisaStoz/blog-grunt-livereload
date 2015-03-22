...
watch: {
  dev: {
    options: {
      livereload: true // livereaload option added!
    },
    files: 'app/index.html'
  }
},
connect: {
  dev: {
    options: {
      port: 8083,
      base: 'app',
      keepalive: true,
      hostname: '127.0.0.1',
      livereload: true // livereload option added!
    }
  }

}
...
