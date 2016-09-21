// Initialize Firebase
var config = {
    apiKey: "AIzaSyCUWJfCTv_loUrGIEvtLW0KiosUeA0tCQc",
    authDomain: "billing-search.firebaseapp.com",
    databaseURL: "https://billing-search.firebaseio.com",
    storageBucket: "billing-search.appspot.com",
    messagingSenderId: "630166726146"
};
var billingSearch = firebase.initializeApp(config);

var submitHandler = function() {
  send();
  return false;
}

function send() {
  var re = /\d{10}/;
  var str = document.getElementById('bill').value
  if (re.test(str)) {
    searchBillingNumber(str);
  }else {
    document.getElementById('response').innerHTML = "กรุณากรอกตัวเลขให้ถูกต้อง";
  }
}

function searchBillingNumber(billNo) {
  document.getElementById('response').innerHTML = "กรุณารอสักครู่...";
  var recordIdRef = billingSearch.database().ref('invoices/' + billNo);
  recordIdRef.once('value').then(function(snapshot) {
    if (typeof snapshot.val() !== "undefined" && snapshot.val() !== null) {
      console.log("Found Object" + snapshot.val());
      var statusTitle = "<p>หมายเลข " + billNo + " เคยมีการบันทึกไว้แล้ว</p>"
      var quantityTitle = "<p>เคยออกเอกสารไปแล้ว " + snapshot.val().quantity + " ครั้ง</p>";
      var addButton = "<p><a href=\"javascript:addQuantity(\'" + billNo + "\', " + snapshot.val().quantity + ")\">เพิ่มจำนวนการออกเอกสาร</a></p>";
      var delButton = "<p><a href=\"javascript:removeQuantity(\'" + billNo + "\', " + snapshot.val().quantity + ")\">ลดจำนวนการออกเอกสาร</a></p>";

      document.getElementById('response').innerHTML = statusTitle + quantityTitle + addButton + delButton;
    }else {
      console.log("Not Found");
      document.getElementById('response').innerHTML = "<p>ไม่พบหมายเลข " + billNo + "</p><p><a href=\"javascript:searchAndAddNewRecord(\'" + billNo + "\')\">เพิ่มในฐานข้อมูล</a></p>";
    }
  });

}

function addQuantity(billNo, quantity) {
  var updatedAt = Math.round(new Date().getTime()/1000)
 var updates = {
   updatedAt: updatedAt,
   quantity: quantity + 1
 }
 var recordRef = billingSearch.database().ref('invoices/' + billNo)
 recordRef.update(updates).then(function() {
   document.getElementById('response').innerHTML = "แก้ไขข้อมูลของหมายเลข " + billNo + " สำเร็จ";
 })
 .catch(function(error) {
   document.getElementById('response').innerHTML = "แก้ไขข้อมูลของหมายเลข " + billNo + " ล้มเหลว กรุณาลองใหม่อีกครั้ง";
 });
}

function removeQuantity(billNo, quantity) {
  var updatedAt = Math.round(new Date().getTime()/1000)
  var updates = {
   updatedAt: updatedAt,
   quantity: quantity - 1
  }
  var recordRef = billingSearch.database().ref('invoices/' + billNo)
  recordRef.update(updates).then(function() {
    document.getElementById('response').innerHTML = "แก้ไขข้อมูลของหมายเลข " + billNo + " สำเร็จ";
  })
  .catch(function(error) {
    document.getElementById('response').innerHTML = "แก้ไขข้อมูลของหมายเลข " + billNo + " ล้มเหลว กรุณาลองใหม่อีกครั้ง";
  });
}

function searchAndAddNewRecord(billNo) {
  document.getElementById('response').innerHTML = "กรุณารอสักครู่...";
  var recordIdRef = billingSearch.database().ref('invoices/' + billNo);
  recordIdRef.once('value').then(function(snapshot) {
    if (typeof snapshot.val() !== "undefined" && snapshot.val() !== null) {
      console.log("Dubplicated Data" + snapshot.val());
      document.getElementById('response').innerHTML = "หมายเลข " + billNo + " เคยมีการบันทึกไว้แล้ว";
    }else {
      addNewRecord(billNo);
    }
  });
}

function addNewRecord(billNo) {
  var createdAt = Math.round(new Date().getTime()/1000)
  pushNewRecord(billNo, createdAt, createdAt, 1)
}

function pushNewRecord(billNo, createdAt, updatedAt, quantity) {
  billingSearch.database().ref('invoices/' + billNo).set({
    createdAt: createdAt,
    updatedAt: updatedAt,
    quantity: quantity
  }).then(function() {
    document.getElementById('response').innerHTML = "บันทึกหมายเลข " + billNo + " สำเร็จ";
  })
  .catch(function(error) {
    document.getElementById('response').innerHTML = "บันทึกหมายเลข " + billNo + " ล้มเหลว กรุณาลองใหม่อีกครั้ง";
  });
}
