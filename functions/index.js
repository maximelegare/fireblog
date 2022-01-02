const functions = require("firebase-functions");

const admin = require("firebase-admin");
admin.initializeApp();

// exports.addAdminRole = functions.https.onCall((data) => {
//   return admin
//     .auth()
//     .getUserByEmail(data.email)
//     .then((user) => {
//       return admin.auth().setCustomUserClaims(user.uid, {
//         admin: true,
//       });
//     })
//     .then(() => {
//       return {
//         message: `Success, ${data.email} has been made an admin!`,
//       };
//     })
//     .catch((err) => {
//       console.log(err);
//     });s
// });

exports.addAdmin = functions.https.onCall((data) => {
  return new Promise((resolve, reject) => {
   return admin
      .auth()
      .getUserByEmail(data.email)
      .then((user) => {
        return admin.auth().setCustomUserClaims(user.uid, {
          admin: true,
        });
      })
      .then(() => {
        return resolve(`Success! ${data.email} is now an admin!`);
      })
      .catch((err) => {
        return reject(err);
          });
      });
});
