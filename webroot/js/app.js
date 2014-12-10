var ircApp = angular.module('ircApp', []);

ircApp.controller('ChatRoomCtrl', function ($scope) {
  
  $scope.username = "markdelf";

  $scope.windows = [
        {
            name: "malta", type: "chatroom",
            chatHistory: [
                    {'username': 'markdelf', 'created': '2014-12-09 20:23', 'message': 'Testing 123'},
                    {'username': 'gerrysaid', 'created': '2014-12-09 20:24', 'message': 'Received ok'},
            ], 
            users:  [
                {'username': 'markdelf', 'level': 'op' },
                {'username': 'gerrysaid', 'level': 'voice' },
                {'username': 'ra', 'level': '' },
                {'username': 'seth', 'level': '' },
                {'username': 'zeus', 'level': '' },
                {'username': 'osiris', 'level': '' }
            ]
        },
        {name: "osiris", type: "conversation", chatHistory: [{'username': 'osiris', 'created': '2014-12-09 20:23', 'message': 'Hey'}]},
        {name: "school", type: "chatroom", chatHistory: [], users:  [{'username': 'markdelf', 'level': 'op' }]}
  ];

  $scope.activeWindow = 0;

  $scope.onSendMessage = function(form) {
    var newText = $("input.chatMessage:visible").val();
    $("input.chatMessage:visible").val('');
    $scope.windows[$scope.activeWindow].chatHistory.push(
        {
            'username': $scope.username,
            'created': moment().format('YYYY-MM-DD, HH:mm'),
            'message': newText
        }
    );
  }

  $scope.selectWindow = function(index) {
    $scope.activeWindow  = index;
  }

  $scope.closeWindow = function(index) {
    $scope.windows.splice(index, 1);
    if ($scope.activeWindow > index) {
        $scope.activeWindow--;
    }
    if ($scope.activeWindow >= $scope.windows.length) {
        if ($scope.windows.length >= 1) {
            $scope.activeWindow = $scope.windows.length - 1;
        } else {
            $scope.activeWindow = 0;
        }
    }
    console.log($scope.activeWindow);
  }

  $scope.openConversation = function(username) {
    for(var w in $scope.windows) {
        if ($scope.windows[w].type == "conversation" && $scope.windows[w].name == username) {
            $scope.activeWindow  = w;
            return;
        }
    }
    $scope.windows.push({name: username, type: "conversation", chatHistory: []});
    $scope.activeWindow = $scope.windows.length - 1;
  }
});

$(function(){
    $("input.chatMessage:visible").focus();
});