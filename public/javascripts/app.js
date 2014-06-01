angular.module("bolte-construction", 
        [
        'ngRoute',
        'ngAnimate',
        'ui.bootstrap'
        ]).
config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/home', {
            templateUrl: 'partials/home.tmpl',
        }).
        when('/kitchen', {
            templateUrl: 'partials/images.tmpl',
            controller: 'ImagesController'
        }).
        when('/bathroom', {
            templateUrl: 'partials/images.tmpl',
            controller: 'ImagesController'
        }).
        when('/lower-level', {
            templateUrl: 'partials/images.tmpl',
            controller: 'ImagesController'
        }).
        when('/exterior', {
            templateUrl: 'partials/images.tmpl',
            controller: 'ImagesController'
        }).
        when('/commercial', {
            templateUrl: 'partials/images.tmpl',
            controller: 'ImagesController'
        }).
        when('/testimonials', {
            templateUrl: 'partials/testimonials.tmpl',
            controller: 'TesitmonialsController'
        }).
        when('/contact', {
            templateUrl: 'partials/contact.tmpl',
        }).
        when('/about', {
            templateUrl: 'partials/about.tmpl',
        }).
        otherwise({
            redirectTo: '/home'
        });
}])
.directive('lazyLoad', ['$timeout',
        function($timeout) {
            return {
                restrict: 'C',
                link: function (scope, elm) {
                    $timeout(function() {
                        elm.lazyload({
                            effect          : 'fadeIn',
                            effectspeed     : 500,
                            'skip_invisible': false
                        });
                    }, 0);
                }
        
            }
        }
])
.directive('disableAnimation', ['$animate',
        function($animate){
            return {
                restrict: 'A',
                link: function($scope, $element, $attrs){
                    $attrs.$observe('disableAnimation', function(value){
                        $animate.enabled(!value, $element);
                    });
                }
            }
        }
]);

