routing.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider', '$mdThemingProvider'];

export default function routing($urlRouterProvider, $locationProvider, $stateProvider, $mdThemingProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('progress', {
      url: '/progress',
      template: require('./pages/progress.html')
    })
    .state('profile', {
      url: '/profile',
      template: require('./pages/user.html')
    });

  $mdThemingProvider.theme('default')
    .primaryPalette('light-green');
}  