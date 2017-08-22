module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
    	dist: {
    		options: {
    			style: 'compressed'
    		},
    		files: {
    			'styles.css': 'styles.scss'
    		}
    	}
    },

    svgstore: {
	  options: {
	    prefix : 'shape-', // This will prefix each <g> ID
	    cleanup: false,
	    svg: {
	    	style: "display: none;"
	    }
	  },
	  default : {
	      files: {
	        'images/icons.svg': ['images/icons/*.svg']
	      }
	  }
	}

  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-svgstore');

  // Run tasks
  grunt.registerTask('default', ['sass', 'svgstore']);

};