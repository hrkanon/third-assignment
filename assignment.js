// https://github.com/hrkanon/third-assignment

// kilometerToMeter
function kilometerToMeter(km) {
    if (km > 0) {
        var result = km * 1000;
        return result;
    } else {
        return "number is invalid"
    }
}
var result = kilometerToMeter(-2);


// budgetCalculator
function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || watch < 0 || laptop < 0) {
        return "please inset a valid number"
    }
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var totalPrice = watchPrice + phonePrice + laptopPrice;
    return totalPrice;
}
var result = budgetCalculator(5,5,-2);

// hotelCost
var cost = 0;
function hotelCost(days) {
    if (days < 0) {
        return "not a valid number"
    }
    else if (days <= 10) {
        cost = days * 100;
    }
    else if (days <= 20) {
        var firstTenDays = 10 * 100;
        var remainingDays = days - 10;
        var secondTenDays = remainingDays * 80;
        cost = firstTenDays + secondTenDays;
    }
    else {
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remaining = days - 20;
        var remainingDays = remaining * 50;
        cost = firstTenDays + secondTenDays + remainingDays;
    }
    return cost;
}
 var result = hotelCost(-1);

//  megaFriend
var arr = ["abir", "akash", "ashraful"];
function megaFriend(names) {
    if(names.length < 2){
        return "please input more names"
    }
    var max = [0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > max.length) {
            max = arr[i];
        }
    }
    return max;
}
var result = megaFriend(arr);

