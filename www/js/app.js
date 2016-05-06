// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngResource'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      // javascript error otherwise when run as cordova sim ....endless events
      logger.useConsole(false);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html"
      }
    }
  })
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent': {
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('app.todolists', {
      url: "/todolists",
      views: {
        'menuContent': {
          templateUrl: "templates/todolists.html",
          controller: 'TodolistCtrl'
        }
      }
    })

    .state('app.todos', {
      url: "/todos/:listid",
      views: {
        'menuContent': {
          templateUrl: "templates/todosperlist.html",
          controller: 'TodosCtrl'
        }
      }
    })
    
    .state('app.tasks', {
      url: "/tasks/:todoid",
      views: {
        'menuContent': {
          templateUrl: "templates/taskspertodo.html",
          controller: 'TaskCtrl'
        }
      }
    })
    
  .state('app.task', {
    url: "/tasks/:taskid/edit",
    views: {
      'menuContent': {
        templateUrl: "templates/taskedit.html",
        controller: 'TaskSelectedCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/todolists');
});
