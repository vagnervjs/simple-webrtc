module.exports = function(grunt) {
	'use strict';
	var gruntConfig = {
		pkg: grunt.file.readJSON('package.json'),
		min: {
			dist: {
				src: ['src/js/main.js'],
				dest: 'src/js/all.min.js'
			}
		},
		// cssmin: {
		// 	dist: {
		// 		src: ['src/css/main.css'],
		// 		dest: 'src/css/all.min.css'
		// 	}
		// },
		rsync: {
			dist: {
				src: './src/',
				dest: './dist',
				recursive: true,
				syncDest: true,
				exclude: ['main.*']
			},
			deploy: {
				src: './dist/',
				dest: '/var/www/webrtc',
				host: 'root@vagnersantana.com',
				recursive: true,
				syncDest: true
			}
		}
	};
	grunt.initConfig(gruntConfig);

	var keys = Object.keys(gruntConfig);
	var tasks = [];

	for(var i = 1, l = keys.length; i < l; i++) {
		tasks.push(keys[i]);
	}

	grunt.loadNpmTasks('grunt-yui-compressor');
	grunt.loadNpmTasks('grunt-rsync');
	grunt.registerTask('default', tasks);
};