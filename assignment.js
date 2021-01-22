
// kilometerToMeter
// function kilometerToMeter(km) {
//     if (km > 0) {
//         var result = km * 1000;
//         return result;
//     } else {
//         return "number is invalid"
//     }
// }
// var x = kilometerToMeter(0);
// console.log(x);

    // // budgetCalculator
    //  function budgetCalculator (watch, phone, laptop){
    //      var watchPrice = watch * 50;
    //      var phonePrice = phone * 100;
    //      var laptopPrice = laptop * 500;
    //      var totalPrice = watchPrice + phonePrice + laptopPrice;
    //      return totalPrice;
    // }
    // var x = budgetCalculator(5,2,1);
    // console.log(x);

    // hotelCost
    // var cost = 0;
    // function hotelCost(days){
    //     if(days <= 10){
    //         cost = days * 100;
    //     }
    //     else if(days <= 20){
    //         var firstTenDays = 10 * 100;
    //         var remainingDays = days - 10;
    //         var secondTenDays = remainingDays * 80;
    //         cost = firstTenDays + secondTenDays;
    //     }
    //     else{
    //         var firstTenDays = 10 * 100;
    //         var secondTenDays = 10 * 80;
    //         var remaining = days - 20;
    //         var remainingDays = remaining * 50;
    //         cost = firstTenDays + secondTenDays + remainingDays;
    //     }
    //     return cost;
    // // }
    // var x = hotelCost(50);
    // console.log(x);


    //  megaFriend
     var friendsName = ["karim", "rahim", "bulbul", "iftekhar"];
     function megaFriend(friend){
         var max = friendsName[0];
         for(var i = 0; i < friendsName.length; i++){
             var element = friendsName[i];
             if(element < max){
                 max = element;
             }
         }
         return max;
     }
var x = megaFriend(friendsName);
console.log(x);
