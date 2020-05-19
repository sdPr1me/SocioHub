const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const firestore = admin.firestore();

/**
 * create id from email
 */
const createId = (email) => {
  let pos = email.search("@");
  return email.substring(0, pos);
};
/**
 * Get Authentication
 */

exports.signIn = functions
  .region("asia-northeast1")
  .https.onRequest((req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let deviceId = req.body.deviceId;
  });

exports.getAuthentication = functions
  .region("asia-northeast1")
  .https.onRequest((req, res) => {
    console.log(req.body);
    console.log(req.method);
    res.set("Access-Control-Allow-Origin", "*");
    if (req.method === "OPTIONS") {
      res.set("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
      res.set("Access-Control-Allow-Headers", "Content-Type");
      res.set("Access-Control-Max-Age", "3600");
      res.status(204).send("");
    } else {
      let requestedId = req.body.deviceId;
      let resObj = { isAuthenticated: false, userData: {} };

      let colRef = firestore.collection("accounts");
      let queryRef = colRef.where("DEVICE_ID", "==", requestedId);
      queryRef
        .get()
        .then((querySnap) => {
          if (querySnap.empty == false && querySnap.docs.length == 1) {
            let data = querySnap.docs[0].data();
            let id = querySnap.docs[0].id;
            res.set(
              "Access-Control-Allow-Methods",
              "GET,POST,PUT,DELETE,OPTIONS"
            );
            res.set("Access-Control-Allow-Headers", "Content-Type");
            res.set("Content-Type", "application/json");
            resObj.isAuthenticated = true;
            resObj.userData.userId = id;
            resObj.userData.name = data.NAME;
            resObj.userData.emailId = data.EMAIL;
            resObj.userData.dob = data.DOB;
            resObj.userData.gender = data.GENDER;
            res.status(200).send(resObj);
          } else {
            res.set(
              "Access-Control-Allow-Methods",
              "GET,POST,PUT,DELETE,OPTIONS"
            );
            res.set("Access-Control-Allow-Headers", "Content-Type");
            res.set("Content-Type", "application/json");
            res.status(200).send(resObj);
          }
        })
        .catch((error) => {
          res.set(
            "Access-Control-Allow-Methods",
            "GET,POST,PUT,DELETE,OPTIONS"
          );
          res.set("Access-Control-Allow-Headers", "Content-Type");
          res.set("Content-Type", "application/json");
          res.status(500).send(error);
        });
    }
  });

/**
 * Create User Account - Sign Up
 */
exports.signUp = functions
  .region("asia-northeast1")
  .https.onRequest((req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    if (req.method === "OPTIONS") {
      res.set("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
      res.set("Access-Control-Allow-Headers", "Content-Type");
      res.set("Access-Control-Max-Age", "3600");
      res.status(204).send("");
    } else {
      let name = req.body.name;
      let emailId = req.body.emailId;
      let password = req.body.password;
      let gender = req.body.gender;
      let dob = req.body.dob;
      let deviceId = req.body.deviceId;
      let id = createId(emailId);
      let docref = firestore.doc(`accounts/${id}`);
      docref
        .set({
          NAME: name,
          EMAIL: emailId,
          GENDER: gender,
          DEVICE_ID: deviceId,
          PASSWORD: password,
          DOB: dob,
        })
        .then((createrpromise) => {
          res.set(
            "Access-Control-Allow-Methods",
            "GET,POST,PUT,DELETE,OPTIONS"
          );
          res.set("Access-Control-Allow-Headers", "Content-Type");
          res.set("Content-Type", "application/json");
          res.status(200).send(true);
        })
        .catch((error) => {
          console.log(error);
          res.set(
            "Access-Control-Allow-Methods",
            "GET,POST,PUT,DELETE,OPTIONS"
          );
          res.set("Access-Control-Allow-Headers", "Content-Type");
          res.set("Content-Type", "application/json");
          res.status(500).send(false);
        });
    }
  });
