exports.run = (client, message, args) => {
    message.channel.send("You rolled a d10 die " + args + " times!").catch(console.error);
    var diceType = 10; // edit for any other dice (d20, d12 etc)
    var diceNum = args; //number of dice to roll
    var diceArr = []; //array to store rolled die
    for (var i = 0; i < diceNum; i++) {
        var rolled = Math.floor(Math.random() * diceType + 1); //diceType plus 1 to make rolling a 10 possible
        if (rolled > 0) {
            diceArr.push(rolled); //no zeros allowed...sorry
        }
        else {
            diceNum++; //roll again
        }
    }
    diceArr.sort(function (a, b) { return b - a; }); //sorts the rolled dice
    var successNum = 0; //var to represent success value
    var successArr = []; //array to store success values
    for (var k = 0; k < diceArr.length; k++) {
         switch (diceArr[k]) { //switch statement to calculate success values
            case 10:
                successNum = 2;
                successArr.push(successNum);
                break;
            case 9:
                successNum = 1;
                successArr.push(successNum);
                break;
            case 8:
                successNum = 1;
                successArr.push(successNum);
                break;
            default:
                succesNum = 0;
        }
    }

    let totalSuccessPoints = 0;
    successArr.forEach(function(num){
        totalSuccessPoints += num; //sum or total of success points
    })
    message.channel.send("Roll outcomes in order: " + diceArr.join(" ")).catch(console.error);
    message.channel.send("Success points: " + successArr.join(" ")).catch(console.error);
    message.channel.send("Total success score: " + totalSuccessPoints).catch(console.error);
}