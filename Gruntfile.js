module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
			dist: {
				files: {
					'./css/main.css' : './sass/main.scss'
				}
			}
		},
		watch: {
			css: {
				files: ['**/*.scss','*.html'],
				tasks: ['sass']
			}
		}
  });



  grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch')

  // Default task(s).
  grunt.registerTask('default',['watch']);

  // grunt.registerMultiTask('log', 'Log stuff.', function() {
  //   grunt.log.writeln(this.target + ': ' + this.data);
  // });


};
