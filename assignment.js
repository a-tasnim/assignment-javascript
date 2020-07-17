//feetToMile
function feetToMile(feet) {
    if (feet < 0) {
        return "Please enter a positive number";
    } else {
        var mile = feet / 5280;
        return feet + " feet = " + mile.toFixed(8) + " mile";
    }

}
console.log(feetToMile(20));

//woodCalculator

function woodCalculator(noOfChair, noOfTable, noOfBed) {

    if (noOfChair < 0 || noOfTable < 0 || noOfBed < 0) {
        return "Please enter a valid number";
    } else {
        var totalWood = (noOfChair * 1) + (noOfTable * 3) + (noOfBed * 5); /* 1 chair = 1 cf^3 ,1 table = 3 cf^3, 1 bed = 5 cf^3 */
        return "total wood : " + totalWood + " cubic feet."
    }
}
var noOfChair = 4;
var noOfTable = 1;
var noOfBed = 3;

console.log(woodCalculator(noOfChair, noOfTable, noOfBed));

//brickCalculator
function brickCalculator(noOfFloor) {
    if (noOfFloor < 0) {
        return "Invalid input!!Try again";
    } else {
        var remain = noOfFloor;

        var height = 0;
        if (remain > 20) {
            var temp = remain - 20;
            var tempHight = temp * 10; // if floor---> ( >= 21) ..then per floor 10 feet.
            height += tempHight;
            remain -= temp;

        }
        if (remain >= 11 && remain <= 20) {
            var temp = remain - 10;
            console.log("temp" + temp);
            var tempHight = temp * 12; // if floor--> (11-20) ..then per floor 12 feet.
            height += tempHight;
            remain -= temp;
            console.log("remain" + remain);

        }
        if (remain >= 1 && remain <= 10) {
            var tempHight = remain * 15; // if floor--> (1-10) ..then per floor 15 feet.
            height += tempHight;

        }
        var totalBrick = height * 1000; //Per feet 1000 bricks.
        return totalBrick;

    }


}
var noOfFloor = 50;
console.log("Total no of bricks for a " + noOfFloor + " floor building is :" + brickCalculator(noOfFloor));

//tinyFriend
function tinyFriend(friend) {

    if (friend.length == 0) {
        return "This is an empty array!";
    } else {
        var minIndex = 0;
        for (var i = 0; i < friend.length; i++) {
            if (friend[i].length < friend[minIndex].length) {
                minIndex = i;
            }
        }
        return friend[minIndex];
    }

}

var tinyName = tinyFriend(['Anika', 'Tina', 'Nabita', 'Fahad', 'Rubayet', 'Shorna', 'Mim', 'Tanir']);
console.log(tinyName);