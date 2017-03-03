'use strict';

/**
 * @author ankostyuk
 */

var _       = require('lodash'),
    i18n    = require('i18n'),
    angular = require('angular');

//
module.exports = angular.module('utils', [])
    //
    .service('utils', ['$log', function($log) {
        //
        this.translateTemplates = function(templates) {
            _.each(templates, function(template, name) {
                templates[name] = i18n.translateTemplate(template);
            });
        };

        //
        this.requestErrorHandler = function(response) {
            $log.debug(
                'Request error... [',
                _.get(response, 'config.method'),
                _.get(response, 'config.url'),
                '] ->',
                response
            );
        };
    }]);
//
