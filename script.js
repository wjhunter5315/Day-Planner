function startTime() {
    var today = new Date();   //W3 schools clock
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock-box').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

var timeNow = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
console.log(timeNow);
document.getElementById('moment-box').innerHTML = timeNow;
var todoArray = []

$("#submit-btn9").on("click", function() {
  var sched9 = document.querySelector("input").value;
  console.log(sched9);
  localStorage.setItem('todo9', sched9);
  var holder9 = localStorage.getItem('todo9');
  console.log(holder9);
  todoArray.push(holder9);
  console.log(todoArray[0]);
  document.getElementById("9am").innerHTML = localStorage.getItem('todo9');
  
})

$("#submit-btn10").on("click", function() {
  var sched10 = document.querySelector(".form-control10").value;
  console.log(sched10);
  localStorage.setItem('todo10', sched10);
  var holder10 = localStorage.getItem('todo10');
  console.log(holder10);
  todoArray.push(holder10);
  console.log(todoArray[1]);
})

$("#submit-btn11").on("click", function() {
  var sched11 = document.querySelector(".form-control11").value;
  localStorage.setItem('todo11', sched11);
  var holder11 = localStorage.getItem('todo11');
  console.log(holder11);
  todoArray.push(holder11);
  console.log(todoArray);
})

$("#submit-btn12").on("click", function() {
  var sched12 = document.querySelector(".form-control12").value;
  localStorage.setItem('todo12', sched12);
  var holder12 = localStorage.getItem('todo12');
  console.log(holder12);
  todoArray.push(holder12);
  console.log(todoArray);
})

$("#submit-btn1").on("click", function() {
  var sched1 = document.querySelector(".form-control1").value;
  localStorage.setItem('todo1', sched1);
  var holder1 = localStorage.getItem('todo1');
  console.log(holder1);
  todoArray.push(holder1);
  console.log(todoArray);
})

$("#submit-btn2").on("click", function() {
  var sched2 = document.querySelector(".form-control2").value;
  localStorage.setItem('todo2', sched2);
  var holder2 = localStorage.getItem('todo2');
  console.log(holder2);
  todoArray.push(holder2);
  console.log(todoArray);
})

$("#submit-btn3").on("click", function() {
  var sched3 = document.querySelector(".form-control3").value;
  localStorage.setItem('todo3', sched3);
  var holder3 = localStorage.getItem('todo3');
  console.log(holder3);
  todoArray.push(holder3);
  console.log(todoArray);
})

$("#submit-btn4").on("click", function() {
  var sched4 = document.querySelector(".form-control4").value;
  localStorage.setItem('todo4', sched4);
  var holder4 = localStorage.getItem('todo4');
  console.log(holder4);
  todoArray.push(holder4);
  console.log(todoArray);
})

$("#submit-btn5").on("click", function() {
  var sched5 = document.querySelector(".form-control5").value;
  localStorage.setItem('todo5', sched5);
  var holder5 = localStorage.getItem('todo5');
  console.log(holder5);
  todoArray.push(holder5);
  console.log(todoArray);
})

$("#clear-btn9").on("click", function() {
    localStorage.removeItem('todo9');
})

$("#clear-btn10").on("click", function() {
  localStorage.removeItem('todo10');
})

$("#clear-btn11").on("click", function() {
  localStorage.removeItem('todo11');
})

$("#clear-btn12").on("click", function() {
  localStorage.removeItem('todo9');
})

$("#clear-btn1").on("click", function() {
  localStorage.removeItem('todo1');
})

$("#clear-btn2").on("click", function() {
  localStorage.removeItem('todo2');
})

$("#clear-btn3").on("click", function() {
  localStorage.removeItem('todo3');
})

$("#clear-btn4").on("click", function() {
  localStorage.removeItem('todo4');
})

$("#clear-btn5").on("click", function() {
  localStorage.removeItem('todo5');
})

function timePast() {
  if(timeNow > 9) {

  }
}