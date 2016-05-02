Parse.initialize("hHKsWbXm0dkFPu9ErZpO5wBHoWb0rhgvi5ycHmGx", "5EOOC04BM7OidbiWGJ0Es8yN6cp0IuziEMsVkZmm");

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
  var BillingRecord = Parse.Object.extend("BillingRecord");
  var query = new Parse.Query(BillingRecord);
  query.equalTo("billingNumber", Number(billNo));
  query.find({
    success: function(results) {
      if (results.length > 0) {
        var object = results[0]
        document.getElementById('response').innerHTML = "หมายเลข " + object.get('billingNumber') + " เคยมีการบันทึกไว้แล้ว";
      }else {
        document.getElementById('response').innerHTML = "<p>ไม่พบหมายเลข " + billNo + "</p><p><a href=\"javascript:searchAndAddNewRecord(" + billNo + ")\">เพิ่มในฐานข้อมูล</a></p>";
      }
    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });
}

function searchAndAddNewRecord(billNo) {
  document.getElementById('response').innerHTML = "กรุณารอสักครู่...";
  var BillingRecord = Parse.Object.extend("BillingRecord");
  var query = new Parse.Query(BillingRecord);

  query.equalTo("billingNumber", Number(billNo));
  query.find({
    success: function(results) {
      if (results.length == 0) {
        addNewRecord(billNo);
      }else {
        document.getElementById('response').innerHTML = "หมายเลข " + billNo + " เคยมีการบันทึกไว้แล้ว";
      }
    },
    error: function(error) {
      document.getElementById('response').innerHTML = "พบปัญหาในการเชื่อมต่อกับ server";
    }
  });
}


function addNewRecord(billNo) {
  var BillingRecord = Parse.Object.extend("BillingRecord");
  var billing = new BillingRecord();
  billing.set("billingNumber", Number(billNo));
  billing.set("quantity", 1);
  billing.save(null, {
    success: function(billing) {
      document.getElementById('response').innerHTML = "หมายเลข " + billNo + " ถูกบันทึกเรียบร้อยแล้ว";
    },
    error: function(billing, error) {
      document.getElementById('response').innerHTML = "พบปัญหา: " + error.message;
    }
  });
}
