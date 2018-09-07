const functions = require("firebase-functions");
const schedule = require("node-schedule");
const admin = require("firebase-admin");
admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  schedule.scheduleJob("0 17 ? * 0,4-6", () => {
    console.log("The answer to life, the universe, and everything!");
    admin
      .database()
      .ref(`current`)
      .set({ name: count++, url: cout++ });
  });
});
