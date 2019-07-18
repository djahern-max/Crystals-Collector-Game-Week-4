$(document).ready(function () {

    var yellowGem = 0;
    var blueGem = 0;
    var greyGem = 0;
    var redGem = 0;
    var randomNumber = "";
    


    $("#randomNumber").on("click", function updaterandomNumber () {

        randomNumber = Math.floor((Math.random() * 101) + 19);
        document.getElementById("numberToBeat").innerHTML = randomNumber;
        // console.log(randomNumber)

    })
    
    
    $("#yellowGem").on("click", function () {

        yellowGem+= 5;

        var totalScore = new Array ();
        totalScore.push(yellowGem);
        totalScore.push(blueGem);
        totalScore.push(greyGem);
        totalScore.push(redGem);
        document.getElementById("myScore").innerHTML = totalScore;
        

        console.log(totalScore)

    })

    $("#blueGem").on("click", function () {

        blueGem += 4;

        // console.log(blueGem)

    })

    $("#greyGem").on("click", function () {

        greyGem += 8;

        // console.log(greyGem)

    })

    $("#redGem").on("click", function () {

        redGem += 3;

        // console.log(redGem)

    })


    $("#yellowGem").append(yellowGem);
    $("#blueGem").append(blueGem);
    $("#greyGem").append(greyGem);
    $("#redGem").append(redGem);
   
    
});
















