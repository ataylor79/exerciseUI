routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('user', {
      url: '/',
      template: require('./userList.html'),
      controller: 'UserController',
      controllerAs: 'UserController'
    });
}