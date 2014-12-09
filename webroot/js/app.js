var ircApp = angular.module('ircApp', []);

ircApp.controller('ChatRoomCtrl', function ($scope) {
  $scope.users = [
    {'name': 'markdelf', 'level': 'op' },
    {'name': 'gerrysaid', 'level': 'voice' },
    {'name': 'ra', 'level': '' },
    {'name': 'seth', 'level': '' },
    {'name': 'zeus', 'level': '' },
    {'name': 'osiris', 'level': '' }
  ];
});