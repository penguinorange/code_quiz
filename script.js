
var timeLeft = 120;

    function changeValue() {
        document.getElementById("timer").innerHTML = --timeLeft;
    } 

    function start() {       
        timerInterval = setInterval(changeValue, 1000);
      
        var body = document.body;

        var h1El = document.createElement("h1");
        var h2El = document.createElement("h2");
        var chooseEl = document.createElement("div");
        var btnA = document.createElement("BUTTON");
        var btnB = document.createElement("BUTTON");
        var btnC = document.createElement("BUTTON");
        var btnD = document.createElement("BUTTON");

        h1El.textContent = "Question 1";
        h2El.textContent = "Who is the oldest historical figure?";
        chooseEl.textContent = "Choose 1 answer";

        body.appendChild(h1El);
        body.appendChild(h2El);
        body.appendChild(chooseEl);
        document.body.appendChild(btnA);
        document.body.appendChild(btnB);
        document.body.appendChild(btnC);
        document.body.appendChild(btnD);
        btnA.innerHTML = "Aristotle";   
        btnB.innerHTML = "Plato"; 
        btnC.innerHTML = "Epicurus";
        btnD.innerHTML = "Socrates"

        h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
        h2El.setAttribute("style", "margin:auto; width:100%; text-align:center;");
        chooseEl.setAttribute("style", "font-size:30px;");

        btnA.addEventListener("click", fnbtna);
            function fnbtna()  { 
                var newTime = timeLeft - 20;
                console.log(newTime);
                document.getElementById("timer").innerHTML = newTime;
            }
            


    }
 



