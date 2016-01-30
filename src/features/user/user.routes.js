routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('user', {
      url: '/users',
      template: require('./users.html')
    })
    .state('user.list', {
      url: '/list',
      template: require('./userList.html'),
      controller: 'UserController',
      controllerAs: 'UserController'
    })
    .state('user.details', {
      url: '/details',
      template: require('./userDetails.html'),
    });
}