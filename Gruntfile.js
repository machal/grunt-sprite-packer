/*
 * grunt-sprite-packer
 * https://github.com/karfcz/grunt-sprite-packer
 *
 * Copyright (c) 2013 Karel Fučík
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/*.js',
				'<%= nodeunit.tests %>',
			],
			options: {
				jshintrc: '.jshintrc',
			},
		},

		// Before generating any new files, remove any previously-created files.
		clean: {
			tests: ['tmp'],
		},

		// Configuration to be run (and then tested).
		spritepacker: {
			default_options: {
				options: {
					template: 'test/fixtures/sprites.css.tpl',
					destCss: 'tmp/sprites.css',
					baseUrl: '../img/',
					padding: 2
				},
				files: {
					'tmp/sprites.png': ['test/fixtures/img/*.png']
				}
			},
			svg: {
				options: {
					template: 'test/fixtures/sprites.css.tpl',
					destCss: 'tmp/sprites-svg.css',
					baseUrl: '../img/',
					padding: 2,
					svg: true
				},
				files: {
					'tmp/sprites.svg': ['test/fixtures/svg/*.svg']
				}
			}
		},

		// svg2png: {
		//     fallback: {
		//     	options: {},
		//      	files: [{
		// 	        src: ["tmp/sprites.svg"]
		// 	    }]
		//     }
		// },

		// Unit tests.
		nodeunit: {
			tests: ['test/*_test.js'],
		},

	});

	// Actually load this plugin's task(s).
	grunt.loadTasks('tasks');

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	// grunt.loadNpmTasks('grunt-svg2png');

	// Whenever the "test" task is run, first clean the "tmp" dir, then run this
	// plugin's task(s), then test the result.
	grunt.registerTask('test', ['spritepacker', 'nodeunit']);

	// By default, lint and run all tests.
	grunt.registerTask('default', ['spritepacker']);

};
