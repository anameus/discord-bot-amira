exports.run = (client, message, args) => {
    message.channel.send("You rolled a d10 die " + args + " times!").catch(console.error);
    let diceType = 10; // edit for any other dice (d20, d12 etc)
    let diceNum = args; //number of dice to roll
    let diceArr = []; //array to store rolled die
    for (let i = 0; i < diceNum; i++) {
        let rolled = Math.floor(Math.random() * Math.floor(diceType + 1)); //diceType plus 1 to make rolling a 10 possible
        if (rolled > 0) {
            diceArr.push(rolled); //no zeros allowed...sorry
        }
        else {
            diceNum++; //roll again
        }
    }
    diceArr.sort(function (a, b) { return b - a; }); //sorts the rolled dice
    let successNum = 0; //var to represent success value
    let successArr = []; //array to store success values
    let failArr = []; //array to store critical fail values (sum of all 1's IF there are no 10,9,8 rolled)
    for (let k = 0; k < diceArr.length; k++) {
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
            case 1:
                failArr.push(1);
                break;
            default:
                succesNum = 0;
        }
    }
    //sum those points!
    let totalSuccessPoints = 0;
    successArr.forEach(function(num){
        totalSuccessPoints += num; //sum or total of success points
    })
    let totalFailPoints = 0;
    failArr.forEach(function(num){
        totalFailPoints -= num; //sum or total of fail points (should show negative 2 if total is 2)
    })
    //output to channel (send) the outcomes of the roll:
    message.channel.send("Roll outcomes in order: " + diceArr.join(" ")).catch(console.error);
    //show crit fail IF there is one ELSE just the success Points
    if(totalSuccessPoints === 0 && totalFailPoints < 0) {
        message.channel.send("Critical fail! " + totalFailPoints).catch(console.error);
    } else if (totalSuccessPoints > 0) {
        message.channel.send("Success points: " + successArr.join(" ")).catch(console.error);
        message.channel.send("Total success score: " + totalSuccessPoints).catch(console.error);
    }
}