$(document).ready(function () {

  var crystal = {
    blue:
    {
      name: "Blue",
      value: 5
    },
    green:
    {
      name: "Green",
      value: 7
    },
    red:
    {
      name: "Red",
      value: 3
    },
    yellow:
    {
      name: "Yellow",
      value: 12
    }
  };


  var randomNumber;
  var userTotal = 0;
  var win = 0;
  var lose = 0;


  function updaterandomNumber() {
    $("#usertotal").html(userTotal);
    randomNumber = Math.floor((Math.random() * 101) + 19);

    $("#numberToBeat").html("this is the number to beat " + randomNumber);

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