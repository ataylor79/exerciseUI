import './sass/main.scss';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import materialUI from 'angular-material';
import routing from './app.config';
import userList from './features/user';

angular.module('ExerciseApp', [uiRouter, materialUI, userList])
  .config(routing);