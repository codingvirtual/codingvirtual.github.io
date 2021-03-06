/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
 "grunt" alone creates a new, completed images directory
 "grunt clean" removes the images directory
 "grunt responsive_images" re-processes images without removing the old ones
 */

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [
            //{
            //  width: 1600,
            //  suffix: '_large_2x',
            //  quality: 30
            //},
            //{
            //  width: 800,
            //  suffix: '_large_1x',
            //  quality: 30
            //},
            //
            //{
            //  width: 600,
            //  suffix: '_medium',
            //  quality: 25,
            //},
            {
              width: 400,
              suffix: '_small',
              quality: 60
            }
          ]
        },

        /*
         You don't need to change this part if you don't change
         the directory structure.
         */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images-src/',
          dest: 'images/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images']
      }
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        }
      }
    },

    csslint: {
      strict: {
        options: {
          import: 2
        },
        src: ['css/*.css']
      },
      lax: {
        options: {
          import: false
        },
        src: ['css/*.css']
      }
    }

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

};
