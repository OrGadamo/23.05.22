function printDate() {
  console.log(Date());
}
// printDate();
function printThisDateObject(newdate) {
  console.log(new Date(newdate));
}
// printThisDateObject("11/16/1998");
function printUserDateObject() {
  console.log(new Date(prompt("enter a date:")));
}
// printUserDateObject();
function getDateMonthFromUser() {
  return new Date(prompt("enter a date:")).getMonth() + 1;
}
// console.log(getDateMonthFromUser());
function getDateHourFromUser() {
  return new Date(prompt("enter a date:")).getHours();
}
// console.log(getDateHourFromUser());
function getDateYearFromUser() {
  return new Date(prompt("enter a date:")).getFullYear();
}
// console.log(getDateYearFromUser());
function getDateMinutesFromUser() {
  return new Date(prompt("enter a date:")).getMinutes();
}
// console.log(getDateMinutesFromUser());
function getEarlyDateFromUser() {
  var Date1 = new Date(prompt("enter a date:"));
  var Date2 = new Date(prompt("enter a date:"));
  if (Date1 < Date2) {
    return Date1;
  }
  return Date2;
}
// console.log(getEarlyDateFromUser());
function getAgeFromUserDate() {
  var userDate = new Date(prompt("enter your birhday:"));
  if (new Date().getMonth() < userDate.getMonth()) {
    return new Date().getFullYear() - userDate.getFullYear() - 1;
  }
  if (new Date().getMonth() > userDate.getMonth()) {
    return new Date().getFullYear() - userDate.getFullYear();
  }
  if (new Date().getMonth() == userDate.getMonth()) {
    if (new Date().getDate() > userDate.getDate()) {
      return new Date().getFullYear() - userDate.getFullYear();
    }
    return new Date().getFullYear() - userDate.getFullYear() - 1;
  }
}
// console.log(getAgeFromUserDate());
function alertUnderAge() {
  if (getAgeFromUserDate() > 18) {
    alert("access is allowed");
  } else {
    alert("acsess is denied");
  }
}
// alertUnderAge();
function getUserLocation() {
  var userDateS = Date();
  var location = "";
  var i = userDateS.indexOf("(") + 1;
  while (userDateS[i] != " ") {
    location += userDateS[i];
    i++;
  }
  return location;
}
// console.log(getUserLocation());
function getRandomDate() {
  var years = Math.floor(Math.random() * 33) + 1990;
  var month;
  var day;
  var randomdate = new Date();
  if (years == 2022) {
    month = 0;
  } else {
    month = Math.floor(Math.random() * 12);
  }
  if (month == 1) {
    day = Math.floor(Math.random() * 28) + 1;
  } else if (month == 3 || month == 5 || month == 8 || month == 10) {
    day = Math.floor(Math.random() * 30) + 1;
  } else {
    day = Math.floor(Math.random() * 31) + 1;
  }
  randomdate.setDate(day);
  randomdate.setFullYear(years);
  randomdate.setMonth(month);
  return randomdate;
}
// console.log(getRandomDate());

function getArrayFromString(str) {
  var arr = [];
  var num = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] != ",") {
      num += str[i];
    } else {
      arr.push(+num);
      num = "";
    }
    if (i == str.length - 1) {
      arr.push(+num);
    }
  }
  return arr;
}
// console.log(getArrayFromString("123,2,344"));
function getMaxLengthValue(str) {
  var maxValue = "";
  var evenValue = "";
  var sumit = false;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == ",") {
      sumit = false;
      if (maxValue.length < evenValue.length) {
        maxValue = evenValue;
      }
      evenValue = "";
    }
    if (sumit) {
      evenValue += str[i];
    }
    if (str[i] == ":") {
      sumit = true;
    }
    if (i == str.length - 1) {
      if (maxValue.length < evenValue.length) {
        maxValue = evenValue;
      }
    }
  }
  return maxValue.length;
}
// console.log(getMaxLengthValue("name:Lior,family:David,city:Rehovot"));
function getKeyValue(str, key) {
  var i = str.indexOf(key);
  var startIndex;
  while (str[i] != "," && str.length > i) {
    if (str[i] == ":") {
      startIndex = i + 1;
    }
    i++;
  }
  return str.substring(startIndex, i);
}
// console.log(getKeyValue("name:Aviel,family:Teka,city:Rehovot", "city"));
