const admin = require("firebase-admin");

var serviceAccount = require("./admin.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://apna-project-aa0f4-default-rtdb.asia-southeast1.firebasedatabase.app",
  authDomain: "apna-project-aa0f4-default-rtdb.asia-southeast1.firebaseapp.com",
});

var db = admin.database();
var dataRef = db.ref("ABC");

const dataOperation = {
  adddata(obj, res) {
    var onedata = dataRef.child(obj.roll);
    onedata.update(obj, (err) => {
      if (err) {
        res.status(300).json({ msg: "Something went wrong", error: err });
      } else {
        res.status(200).json({ msg: "data created " });
      }
      sucessfully;
    });
  },
  getAllData(res) {
    dataRef.once("value", function (snap) {
      // res.status(200).json({ datas: snap.val() }); //TO SEND JS
      let data = snap.val();
      res.render("content", {
        data,
      });
    });
  },
  getOnedata(obj, res) {
    var dataRefdemo = db.ref("ABC");
    var onedata = dataRefdemo.child(obj.roll);
    onedata.once("value", function (snap) {
      res.status(200).json({ data: snap.val() });
    });
  },
};

module.exports = dataOperation;
