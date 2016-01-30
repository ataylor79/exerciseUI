routing.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];

export default function routing($urlRouterProvider, $locationProvider, $stateProvider) {
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
}