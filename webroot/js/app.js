var ircApp = angular.module('ircApp', []);

ircApp.controller('ChatRoomCtrl', function ($scope) {
  $scope.users = [
    {'username': 'markdelf', 'level': 'op' },
    {'username': 'gerrysaid', 'level': 'voice' },
    {'username': 'ra', 'level': '' },
    {'username': 'seth', 'level': '' },
    {'username': 'zeus', 'level': '' },
    {'username': 'osiris', 'level': '' }
  ];

  $scope.chatHistory = [
    {'username': 'markdelf', 'created': '2014-12-09 20:23', 'message': 'Testing 123'},
    {'username': 'gerrysaid', 'created': '2014-12-09 20:24', 'message': 'Received ok'},
  ];

  $scope.onSendMessage = function() {
    var newText = $("#chatMessage").val();
    $("#chatMessage").val('');
    $scope.chatHistory.push({'username': 'markdelf', 'created': '2014-12-09 20:23', 'message': newText});
  }
});

$(function(){
    $("#chatMessage").focus();
});