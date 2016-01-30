import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './user.routes';
import UserController from './user.controller';

export default angular.module('ExerciseApp.userList', [uirouter])
  .config(routing)
  .controller('UserController', UserController)
  .name;