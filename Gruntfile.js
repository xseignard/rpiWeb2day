module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      all: {
        options: { livereload: true },
        files: ['*.*','**/*.*']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
};