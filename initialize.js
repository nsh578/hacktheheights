var firebase = require('firebase').initializeApp({
  serviceAccount: "./Andre-Gome-Pets-service-account.json",
  databaseURL: "https://andre-gome-pets.firebaseio.com"
});
//File to initialize the initial values for database run only once-
var ref = firebase.database().ref().child('boston-college');//sets root in url: .com/node-client
var plexRef = ref.child('plex');
var macRef = ref.child('mac');
var studyRef = ref.child('study-hall');
var gasRef = ref.child('gasson');
var lowRef = ref.child('lower');
var stokRef = ref.child('stokes');
var fulRef = ref.child('fulton');
var alumRef = ref.child('alumni-stadium');

var pcount = {count: 30};
var menu1 = {
  'breakfast': 'Bacon (3 slices), Bagel w/ Egg and Cheese, Belgian Waffles',
  'lunch': 'Steak Tip Sub, Grilled Chicken Breast & Sides, Buffalo Chicken Wrap',
  'dinner':'Chicken Tortilla Soup, Sirloin Steak & Sides, Chicken w/Crosciut and Fontina',
  'late_night': 'Pepperoni Pizza, Onion Rings, Mozzarella Sticks, Chicken Tenders'
};
var scount = {count: 20};
var event1 = {
  'KSA Meeting': new Date(2018, 4, 22, 18, 30, 0, 0).toString(),
  'Blockchain Info Session': new Date(2018, 4, 22, 16, 0, 0, 0).toString(),
  'Spring Job Fair': new Date(2018, 4, 24, 12, 0, 0, 0).toString()
};
var menu2 = {
  'breakfast': 'Belgian Waffles, Eggs cooked your way, Texas French Toast',
  'lunch': 'Cold Wraps, Sirloin Steak Sandwich, Grilled Portabella Sandwich',
  'dinner':'Carved BBQ Pork Sandwich, Extra Philly Steak Meat, Chicken Castellina',
  'late_night': 'Buffalo Chicken Sub, Macaroni and Cheese, Mozzarella Sticks, French Fries'
};
var event2 = {
  'CSA Teahouse': new Date(2018, 4, 23, 19, 00, 0, 0).toString(),
  'ATC Spring Concert': new Date(2018, 4, 22, 19, 00, 0, 0).toString()
};
var event3 = {
  'UGBC Meeting': new Date(2018, 4, 22, 16, 30, 0, 0).toString(),
  'Investing 101': new Date(2018, 4, 22, 18, 0, 0, 0).toString(),
  'CS Info Session' : new Date(2018, 4, 23, 12, 00, 0, 0).toString()
};
var games = {
  'Basketball': new Date(2018, 4, 22, 15, 00, 0, 0).toString(),
  'Hockey': new Date(2018, 4, 23, 19, 30, 0, 0).toString(),
  'Marching Bands': new Date(2018, 4, 23, 17, 0, 0, 0).toString()
};

plexRef.push(pcount);
macRef.push(menu1);
studyRef.push(scount);
gasRef.push(event1);
lowRef.push(menu2);
stokRef.push(event2);
fulRef.push(event3);
alumRef.push(games);
