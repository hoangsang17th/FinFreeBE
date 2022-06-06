var admin = require("firebase-admin");

var serviceAccount = require("fintech-17th-firebase-adminsdk.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const database = admin.firestore();

module.exports = { admin, database };