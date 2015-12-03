'use strict';

/**
 * @ngdoc service
 * @name bikramAltApp.studiodb
 * @description
 * # studiodb
 * Factory in the bikramAltApp.
 */
angular.module('bikramAltApp')
  .factory('studiodb', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://mighty-scrubland-5742.herokuapp.com/?location=:location', {}, {
      query: {
        method:'GET',
        params:{
          location: 'Seattle' // Default location
        },
        isArray: true
      }
    });
  });
