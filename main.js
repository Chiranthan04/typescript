function addNumbers(a, b) {
    return a + b;
}
// var x:number = 1;
// var z : number =2
// var a = [2,3,4,5]
// for (var index in a){
//     console.log(index);
//     console.log(a[index]);
// }
// document.getElementById("para").innerHTML = for (var index in a){
//     console.log(index);
//     console.log(a[index]);
// };
var num = prompt('Please enter your name.');
var sum = addNumbers(num, 15);
// document.getElementById("para").innerHTML = sum;
console.log('Sum of the two numbers is: ' + sum);
function tabels(tnum) {
    for (var i = 1; i <= 10; ++i) {
        console.log(tnum, " * ", i, " = ", tnum * i);
    }
}
tabels(3);
