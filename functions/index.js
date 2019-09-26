const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const firestore = admin.firestore();

/**
 * create id from email
 */
const createId = email => {
  let pos = email.search("@");
  return email.substring(0, pos);
};
/**
 * Get Authentication
 */

exports.getAuthentication = functions
  .region("asia-northeast1")
  .https.onRequest((req, res) => {
    let requestedId = req.body.deviceId;
    let isAuthenticated = false;
    firestore
      .collection("accounts")
      .listDocuments()
      .then(docrefs => {
        let snapPromises = [];
        for (let docref of docrefs) {
          let snap = docref.get();
          snapPromises.push(snap);
        }
        return Promise.all(snapPromises);
      })
      .then(docsnaps => {
        for (let docsnap of docsnaps) {
          if (requestedId === docsnap.get("DEVICE_ID")) {
            isAuthenticated = true;
            break;
          }
        }
        res.set("Access-Control-Allow-Origin", "*");
        res.set("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
        res.set("Access-Control-Allow-Headers", "Content-Type");
        res.send(isAuthenticated);
      })
      .catch(error => {
        console.log(error);
        res.set("Access-Control-Allow-Origin", "*");
        res.set("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
        res.set("Access-Control-Allow-Headers", "Content-Type");
        res.status(500).send(error);
      });
  });

/**
 * Create User Account - Sign Up
 */
exports.signUp = functions
  .region("asia-northeast1")
  .https.onRequest((req, res) => {
    let name = req.body.name;
    let emailId = req.body.emailId;
    let password = req.body.password;
    let gender = req.body.gender;
    let dob = req.body.dob;
    let id = createId(emailId);
    let docref = firestore.doc(`accounts/${id}`);
    docref
      .set({
        NAME: name,
        EMAIL: emailId,
        GENDER: gender,
        DEVICE_ID: "",
        PASSWORD: password,
        DOB: dob
      })
      .then(createrpromise => {
        res.set("Access-Control-Allow-Origin", "*");
        res.set("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
        res.set("Access-Control-Allow-Headers", "Content-Type");
        res.send(true);
      })
      .catch(error => {
        console.log(error);
        res.set("Access-Control-Allow-Origin", "*");
        res.set("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
        res.set("Access-Control-Allow-Headers", "Content-Type");
        res.send(false);
      });
  });
