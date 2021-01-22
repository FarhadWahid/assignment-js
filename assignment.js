//github

//kilometerToMeter/

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}

var meterpass = kilometerToMeter(50);



//budgetCalculator/

function budgetCalculator(watch, mobile, laptop) {

    var watch = watch * 50;
    var mobile = mobile * 100;
    var laptop = laptop * 500;

    var sum = (watch + mobile + laptop);

    return sum;

}

var watchbuy = budgetCalculator(4);
var mobilebuy = budgetCalculator(3);
var laptopbuy = budgetCalculator(2);




//hotelCost/

function hotelCost(day) {

    var day = 100;
    var disday1 = 80;
    var disday2 = 50;

    for (var i = 1; i <= 10; i++) {
        day = day * i;

    }

    if (var i = 1; i <= 20; i++) {
        day = disday2 * i;

    } else(var i = 1; i > 20; i++) {
        day = disday2 * i

    }
    return day;

}

var passday = hotelCost(23);





//megaFriends/

function megaFriend(friend) {
    var list = ["mohammed jamal uddin", "md kamal hossain", "mohammed jamal uddin raju", "md jamal hossain"];

}
console.log(list.length);