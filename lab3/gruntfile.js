module.exports = function(grunt) {
 
    grunt.initConfig(
    {
        pkg: grunt.file.readJSON('package.json'),	
        clean: 
	    {			
		    js: ['js/built.js'],
		    build: ['build/**'],
            jshash: ['build/*.js'],
            csshash: ['build/*.css']
	    },
		
        concat: 
        {
            options: 
            {
                separator: ';\n'
            }, 
            dist: 
            {        
		        src: 
			    [
				    'js/shape.js',
				    'js/circle.js',
				    'js/triangle.js',
				    'js/rectangle.js',
				    'js/menuHandler.js'
			    ],
                dest: 'js/built.js',
            },
        },

        eslint: 
        {
            target: ['js/built.js']
        },

	    connect:
	    {
		    server:
		    {
			    options:
			    {
				    hostname: 'localhost',
				    port: 2000,
				    base: '',
				    livereload: true
			    }
		    }
	    },
		
	    open:
	    {
		    dev:
		    {
			    path: 'http://localhost:2000/index.html',
			    app: ''
		    }
	    },
		
	    watch: 
	    {
		    options: 
		    {
			    livereload: true
		    },
			
		    index:
		    {
			    files: ['html/index.html'],
                tasks: ['clean', 'copy', 'cacheBust'],
			    options:
			    {
				    livereload: true
			    }
		    },
			
		    scripts: 
		    {
			    files: ['js/*.*'],
			    tasks: ['clean', 'concat', 'eslint', 'copy', 'cacheBust'],
			    options: 
			    {
				    livereload: true
			    }
		    }
	    },
		
	    cacheBust: 
	    {
		    task: 
		    {
			    options: 
			    {						
				    deleteOriginals: true,
				    assets: ['build/bootstrap.min.css', 'build/built.js']
			    },
			    src: ['index.html']
		    }
        },
		
	    copy: 
	    {
		    css: 
		    {
			    src: 'node_modules/bootstrap/dist/css/bootstrap.min.css',
			    dest: 'build/bootstrap.min.css',
		    },
			
		    js:
		    {
			    src: 'js/built.js',
			    dest: 'build/built.js',
		    },

		    index:
		    {
			    src: 'html/index.html',
			    dest: 'index.html',				
		    }
		},	
    });
 
    grunt.registerTask('default', 
        [
            'clean',
	        'concat',
	        'eslint',
	        'copy:js',
	        'copy:css',
            'copy:index',
	        'cacheBust',		
	        'open',	
	        'connect',
	        'watch'
        ]);	
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-copy');	
    grunt.loadNpmTasks('grunt-cache-bust');     
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-open');	
    grunt.loadNpmTasks('grunt-contrib-connect');		
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');  	
};