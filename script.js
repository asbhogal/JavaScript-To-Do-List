const currentDate = new Date();
let cDay = currentDate.getDate();
let cMonth = currentDate.getMonth() + 1;
let cYear = currentDate.getFullYear();
const currentDateOutput = cDay + "/" + cMonth + "/" + cYear + "<br>";

const currentTimeOutput = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();

document.getElementById("currentDate").innerHTML = currentDateOutput;
document.getElementById("currentTime").innerHTML = currentTimeOutput;
