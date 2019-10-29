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

var todoArray = []

$("#submit-btn9").on("click", function() {
  var sched9 = document.querySelector("input").value;
  console.log(sched9);
  localStorage.setItem('todo9', sched9);
})

$("#submit-btn10").on("click", function() {
  var sched10 = document.querySelector(".form-control10").value;
  console.log(sched10);
  localStorage.setItem('todo10', sched10);
})

$("#submit-btn11").on("click", function() {
  var sched11 = document.querySelector(".form-control11").value;
  localStorage.setItem('todo11', sched11);
})

$("#submit-btn12").on("click", function() {
  var sched12 = document.querySelector(".form-control12").value;
  localStorage.setItem('todo12', sched12);
})

$("#submit-btn1").on("click", function() {
  var sched1 = document.querySelector(".form-control1").value;
  localStorage.setItem('todo1', sched1);
})

$("#submit-btn2").on("click", function() {
  var sched2 = document.querySelector(".form-control2").value;
  localStorage.setItem('todo2', sched2);
})

$("#submit-btn3").on("click", function() {
  var sched3 = document.querySelector(".form-control3").value;
  localStorage.setItem('todo3', sched3);
})

$("#submit-btn4").on("click", function() {
  var sched4 = document.querySelector(".form-control4").value;
  localStorage.setItem('todo4', sched4);
})

$("#submit-btn5").on("click", function() {
  var sched5 = document.querySelector(".form-control5").value;
  localStorage.setItem('todo5', sched5);
})

$("#clear-btn9").on("click", function() {
    localStorage.removeItem('todo9');
})