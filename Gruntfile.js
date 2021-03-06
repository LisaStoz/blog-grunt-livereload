module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.initConfig({
      watch: {
        dev: {
          options: {
            livereload: true
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
            livereload: true
          }
        }

      },
      concurrent: {
        dev: ['connect:dev', 'watch:dev'] // connect and watch running concurrently!
      }
  });

};
