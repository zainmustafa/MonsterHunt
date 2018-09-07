const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.updateimage = functions.https.onRequest((request, response) => {
  admin
  .database()
  .ref(`current`)
  .set({ name: 1, url: 1 },()=>{
    response.send("Data Set")
  })
  
});
