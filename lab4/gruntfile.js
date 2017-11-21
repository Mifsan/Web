module.exports = function(grunt) {
 
    grunt.initConfig(
    {
        pkg: grunt.file.readJSON('package.json'),	
        clean: 
	    {			
		    build: ['build/'],
			dist: ['dist/']
	    },
		
		babel: 
		{
			options: 
			{
				plugins: ['transform-react-jsx'],
				presets: ['es2015', 'react']
			},
			target: 
			{
				files: 
				[{
					expand: true,
					cwd: 'src/jsx', // Custom folder
					src: ['app.jsx'],
					dest: 'dist/js', // Custom folder
					ext: '.js'
				}]
			}
		},
		
		tslint: 
		{
			options: 
			{
				configuration: "tslint-config.json",
			},
			files: 
			{
				src: ['src/ts/*.ts']
			}
		},

		ts: 
		{
			target: 
			{
				src: ['src/ts/ishape.ts', 'src/ts/shape.ts', 
				'src/ts/circle.ts', 'src/ts/rectangle.ts', 
				'src/ts/triangle.ts', 'src/ts/main.ts'],
				out: 'dist/js/scripts.js',
				options: {
					noImplicitAny: true,
					removeComments: true,
					preserveConstEnums: true,
					sourceMap: true,
					module: 'system',
					target: 'es5'
				}
			}
		},

		copy: 
	    {
		    css: 
		    {
			    src: 'node_modules/bootstrap/dist/css/bootstrap.min.css',
			    dest: 'build/css/styles.css',
			},
			js: 
			{
				files: 
				[
				  {expand: true, cwd: 'dist/js/', src: '*.js', dest: 'build/js'},
				  {expand: true, cwd: 'src/libs/', src: '*.js', dest: 'build/js'},
				  {expand: true, cwd: 'src/systemjs/', src: '*', dest: 'build/js'}
				]
			},
			html: 
			{
				files: 
				[
				  {expand: true, cwd: 'src/html', src: 'index.html', dest: 'build/'}
				]
			}
		},

		cssmin: 
		{
			target: 
			{
			  src: 'build/css/styles.css',
			  dest: 'build/css/styles.css'
			}
		},

	    connect:
	    {
		    server:
		    {
				options: 
				{
					hostname: 'localhost',
					port: 8080,
					base: 'build',
					open: true,
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
			
			js: 
			{
				files: ['src/ts/*', 'src/jsx/*'], 
				tasks: ['make-scripts', 'copy-hash']
			},

			html: 
			{
				files: 'src/html/index.html',
				tasks: ['copy-hash']
			},

			build: 
			{
				files: 'build/**/*'
			}

		},
		
		hashres: 
		{
			options: 
			{
				fileNameFormat: '${name}.${hash}.${ext}',
				renameFiles: true
			},
			css: 
			{
				src: ['build/css/styles.css'],
				dest: 'build/index.html'
			},
			js: 
			{
				src: ['build/js/*.js'],
				dest: 'build/index.html'
			}
		  },
    });
 
	grunt.registerTask('make-scripts', ['tslint', 'ts', 'babel']);
	grunt.registerTask('make-styles', ['cssmin']);
	grunt.registerTask('copy-hash', ['clean:build', 'copy', 'hashres']);
	grunt.registerTask('default', ['clean', 'make-scripts', 'make-styles', 'copy-hash']);
	grunt.registerTask('serve', ['connect', 'watch']);
	
    grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-hashres');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-ts');
	grunt.loadNpmTasks('grunt-tslint');
};