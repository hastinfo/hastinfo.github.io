 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA4s0xtsYysR6UkCXjVUCuO7D8iGTaxfCA",
    authDomain: "hastkomentarer.firebaseapp.com",
    databaseURL: "https://hastkomentarer.firebaseio.com",
    projectId: "hastkomentarer",
    storageBucket: "hastkomentarer.appspot.com",
    messagingSenderId: "798228366433"
  };
  firebase.initializeApp(config);

  var app = angular.module("app", ["firebase"]);

app.factory("kommentarer", function($firebaseArray) {
    var ref = firebase.database().ref().child("kommentarer");
    return $firebaseArray(ref);
  }
);

// Vi gör så att vi kan komma åt inläggen i kommentarer-fabriken med ng-model
app.controller("KommentarCtrl", function($scope, kommentarer) {
    $scope.kommentarer = kommentarer;

    // Definera en kommentar med tom text och skribent
    $scope.kommentar = {
        text: "",
        skribent: ""
   
   };
 
	 $scope.addComment = function() {
	    // Här lägger vi till vår kommentar ($scope.kommentar) till listan med kommentarer.
	    // Det sparas automatiskt i Firebase-databasen.
	    $scope.kommentarer.$add($scope.kommentar);

	    // Tömmer texten i kommentarfältet
	    $scope.kommentar = {
	        text: "",
	        skribent: ""
	    };
	};
  }
);


