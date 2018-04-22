var firebase = require('firebase').initializeApp({
  serviceAccount: "./Andre-Gome-Pets-service-account.json",
  databaseURL: "https://andre-gome-pets.firebaseio.com"
});
//File to change values for count in plex and study-hall
var ref = firebase.database().ref('boston-college');

setInterval(updateplexcount, 4000);
setInterval(updatestudycount, 5000);

function updateplexcount(){
  var pcountref = firebase.database().ref('boston-college/plex/-LAhX7eirGoyYABLogb6/count');//this code will change
  var randint = Math.floor(Math.random() * 11) - 5;
  pcountref.transaction(function(i){
    var newVal = (i + randint);
    if (newVal < 0){
      return -newVal;
    }
    else if (newVal > 50){
      return  newVal - 2*randint;
    }
    return newVal;
  });
};

function updatestudycount(){
  var scountref = firebase.database().ref('boston-college/study-hall/-LAhX7f2j18S_4DaV31n/count');
  var randint = Math.floor(Math.random() * 7) - 3;
  scountref.transaction(function(i){
    var newVal = (i + randint);
    if (newVal < 0){
      return -newVal;
    }
    else if (newVal > 30){
      return  newVal - 2*randint;
    }
    return newVal;
  });
};
