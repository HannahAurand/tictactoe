//Get the clicked cell id and store it as the "chosen_ID." This will change every time the user clicks on a different cell. Also, track which turn number it is so that you can automatically place an x or an o.

//This is the turn number the game starts out on.
let turn_number = 0;

// This function grabs the reply_click info from the html when each cell is clicked. 
function reply_click(clicked_id) {
    turn_number++;
    if (turn_number % 2 == 0) {
        let turn = 'O';
        document.getElementById(clicked_id).innerText = turn;
        console.log("It is " + turn + "'s turn");
    } else {
        let turn = 'X';
        document.getElementById(clicked_id).innerText = turn;
        console.log("It is " + turn + "'s turn");
    }
}

//Disallow the other player to click on the cell that the other player already clicked on

//track each x or o cell in two separate arrays 

//compare each array to potential winning combinations

//if the cell ids match the winning combos, declare a winner

//if not a match, continue the game







