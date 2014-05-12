(function(){
    var validPaths = [
      '/bathroom',
      '/commercial',
      '/exterior',
      '/kitchen',
      '/lower_level'
    ];
 
    var isValidPath = function(path){
      return validPaths.indexOf(path) !== -1;
    };


    angular.module('bolte-construction')
    .controller('ImagesController', ['$scope', '$location', '$http',
        function($scope, $location, $http){
            var path = $location.path();
            
            if(!isValidPath(path)) {
                return $location.path('home');
            }

            $scope.slides = [];
            $scope.carouselInterval = -1;

            var indexPath = '/images' + path + '/index.json';
            $http.get(indexPath).then(function(result){
                $scope.slides = result.data.map(function(image){
                    return {
                        image: '/images' + path + '/' + image
                    };
                });
            });

        }
    ]).
    controller('TesitmonialsController', [ '$scope',
        function($scope) {
            $scope.testimonials = [
                {
                    name: 'John & Debbie Mazzei',
                    city: '',
                    text: 'Working with Bolte Construction was an extremely positive experience! He helped guide us through the entire remodeling experience from design to finish. He is a very knowledgeable and experienced contractor. From the beginning we were able to communicate well with him. He finished our project on time and on budget! Everyone who has seen the finished product has been impressed with the style, workmanship and flow of our kitchen. I would recommend Bill to anyone who expects professionalism, quality and service.'
                },
                {
                    name: 'Dr. and Mrs. Paul J. Gardner',
                    city: 'Omaha, Nebraska',
                    text: 'We have used Bolte Construction for both large and small projects in our home. In our experience, such work has never been completed so smoothly. Bill Bolte listened carefully to our needs, then explained in detail what was involved. Bill and his workers arrived promptly, kept the area as neat and clean as possible, and finished the work on time. Bill never considered \'cutting corners\' to save time. We highly recommend Bolte Construction'
                },
                {
                    name: 'Ron and Diane Fucinaro',
                    city: 'Papillion, Nebraska',
                    text: 'Bolte Construction did an excellent job on our new kitchen addition. The craftsmanship, quality of the work and the finished project exceeded the high standards we set for the project. More importantly, was the professional, ethical and honest standard you brought to this job. We really appreciated the attitude you had, that you would do whatever it took to make sure we were happy with not only the finished product, but also with the process of getting there. We also appreciate your sub-contractors and the work they put into our home, as well as the respect they showed for our home and family. Thank you for making our new kitchen a beautiful addition to our home. We we are ready to finish our basement we only have one contractor to call!'
                },
                {
                    name: 'Deb Neukirk',
                    city: 'Omaha, Nebraska',
                    text: 'I wanted to let you know how much I love my new kitchen. It\'s more than I dreamed it could look like! Kudos to all the guys that work with you, they were always there when you said they would be. I cannot believe how quickly the job was completed. I have been spreading the word on what a fantastic job you did and how great you are to work with. Again, thanks for everything!'
                }
            ];
        }
    ]);
}).call(this);
