import * as admin from "firebase-admin";

const serviceAccount = require("./firebaseAdmin.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://<your-project-id>.firebaseio.com",
  });
}

export { admin };