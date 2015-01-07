;(function() {

    'use strict';

    angular
        .module('ui.materialize')
        .directive('mzView', mzView);

    /* @inject */
    function mzView() {
        return {
            template: '<main class="mz-view"><ui-view class="mz-body"></ui-view></main>',
            restrict: 'E',
            scope: true,
            replace:true,
            link: link
        };

        ////////////////

        function link(scope, element, attrs) {

            ///////////////////////////////

            /**
             *      toggle
             *      @description
             *      @param  {Object}        description
             *      @return {Object}        description
             */
            function toggle (param) {}

        }
    }

}).call(this);
