$(document).ready(function () {

  var crystal = {
    blue:
    {
      name: "Blue",
      value: Math.floor(Math.random() * 10) + 1
    },
    green:
    {
      name: "Green",
      value: Math.floor(Math.random() * 20) + 1
    },
    red:
    {
      name: "Red",
      value: Math.floor(Math.random() * 5) + 1
    },
    yellow:
    {
      name: "Yellow",
      value: Math.floor(Math.random() * 30) + 1
    }
  };


  var randomNumber;
  var userTotal = 0;
  var win = 0;
  var lose = 0;


  function updaterandomNumber() {
    $("#usertotal").html(userTotal);
    randomNumber = Math.floor((Math.random() * 101) + 19);

    $("#numberToBeat").html("Try to Match This Number!  " + randomNumber);

    console.log(randomNumber)

  }


  $("#yellowGem").on("click", function () {
    console.log(crystal.yellow.value)
    userTotal += crystal.yellow.value;
    $("#usertotal").html(userTotal);
    userTotalCheck();

  })

  $("#blueGem").on("click", function () {
    userTotal += crystal.blue.value;
    $("#usertotal").html(userTotal);
    userTotalCheck();

  })

  $("#greyGem").on("click", function () {
    userTotal += crystal.green.value;
    $("#usertotal").html(userTotal);
    userTotalCheck();
  })

  $("#redGem").on("click", function () {
    userTotal += crystal.red.value;
    $("#usertotal").html(userTotal);
    userTotalCheck();

  })

  function userTotalCheck() {
    if (userTotal === randomNumber) {
      alert("winner")
      userTotal = 0;
      win++;
      $("#win").html(win);
      updaterandomNumber();
    } else if (userTotal > randomNumber) {
      alert("loser better luck next time")
      userTotal = 0;
      lose++;
      $("#lose").html(lose);
      updaterandomNumber();
    }

  }
  //Initial function when page loads

  updaterandomNumber()


});