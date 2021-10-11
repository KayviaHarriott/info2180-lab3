//alert("Hello! I am an alert box!");
document.addEventListener('DOMContentLoaded', function() {
    /**Ex. 1-- Adding squares */
    board = document.querySelector("#board"); 
    square = board.querySelectorAll("div"); 
    square.forEach(element => element.setAttribute("class","square")); 

    /**Ex. 2-- Add an X or O to a square when clicked */
    /**Ex. 6-- Disallow cheating (used innerHTML=="") */
    var squares = document.getElementsByClassName("square");
    var prevSquare = null;
    
    for (var i=0; i<square.length;i++){
        square[i].onclick = function(target){                
            if (this.innerHTML=="" && prevSquare!="X" ){
                this.innerHTML = "X";
                prevSquare="X";
                this.setAttribute("class", "square X");
                checkWinner();
            }
            if (this.innerHTML=="" && prevSquare!="O"){
                this.innerHTML = "O";
                prevSquare="O";
                this.setAttribute("class", "square O");
                counter = i;
                //alert(counter);
            }               
            
        }
    }




}, false);

