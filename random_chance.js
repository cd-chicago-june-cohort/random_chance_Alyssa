/* Returns the updated balance if you win the slot machine
Written as a separate function to prevent slotMachinePlay from stopping upon a return
to allow game play to continue until balance is at 0 or above the leave amount
*/
function slotWinReturn(num){
    console.log("I'm returning" + num);//check that this function ran
    return num;
}

/* Slot Machine Play function - 
    Takes in an initial deposit and leave value
    Leave represents a balance at which point the player will take the money and run
    Continues playing the Slot Machine Game until balance is 0 or greater than/equal to leave
*/
function slotMachinePlay(deposit, leave){
    var balance = deposit;
    if (leave === undefined){
        leave === Infinity;
    }
    while (balance > 0 && balance < leave){ // Checks if you will play the game or not
        balance -= 1; //cost to play the game
        // set the "winning" number between 0 and 99
        var machinesNumber = Math.trunc(Math.random()*100);
        // set your number between 0 and 99
        var yourNumber = Math.trunc(Math.random()*100); 
        // determine if numbers match and you win 
        if (machinesNumber == yourNumber){ 
            var reward = Math.trunc((Math.random()*51))+50; // finds prize value between 50 and 100
            console.log("You won $" + reward); //Line used to test function
            balance += reward;
            slotWinReturn(balance);
            console.log(balance); // Line used to test function
        } else {
            console.log(balance);//to check that it's deducting 1
        };
    if (balance == 0){
        console.log("$" + balance);
        console.log("You ran out of money! :(");
        return 0;
        }
    if (balance >= leave){
        console.log("Congratulations!  You are a winner.  You won $" + balance);
        return balance;
        }
    }   
}


//Testing the function

slotMachinePlay(100, 120);
