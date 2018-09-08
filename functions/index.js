const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const entries = require("lodash/entries");



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.updateimage = functions.https.onRequest((req, res) => {
  return admin
    .database()
    .ref("/Images")
    .once("value")
    .then(snapshot => {
      var arr = entries(snapshot.val()).map(([key, value]) => ({
        key,
        value
      }));
      const random = Math.floor(Math.random() * arr.length);
      return admin
        .database()
        .ref(`current`)
        .set({ name: arr[random].key, url: arr[random].value }, () => {
          res.send("Image Update");
        });
    });
});
