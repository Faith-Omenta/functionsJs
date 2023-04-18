// You manage a grocery store and need to keep track of the inventory of various items. 
// You will use arrays to store the data and various functions to manipulate and analyze the data. 

// 1.Create an array containing the names of all items in the inventory maximum of 10.

var grocery = ["Kales","Cucumber","Tomato","Cabbage","Eggplant","Onion","spinach","Broccoli"];
console.log(grocery)
// 2.Create a separate array with the corresponding stock quantities of each item maximum of 10.
let quantity=[{item:"kales",stock:4},{item:"cucumber",stock:7},{item:"tomato",stock:5},{item:"cabbage",stock:3},{item:"eggplant",stock:10},{item:"brocolli",stock:8}]
let quantity1=[3,4,15,36,23,30]
// 3.Write a function to add a new item to the inventory, updating both arrays.
function stock(){
    grocery.push("Banana")
    quantity.push({veg:"banana",stock:13})
}
stock()
console.log(quantity);
console.log(grocery)
// 4.Write a function to update the stock quantity of an existing item.
const Grocery=quantity.map(object=>{
    if(object.veg=="cucumber"){
        object.stock=9;
    }
    return object;
})
console.log(grocery)
// 5.Write a function to calculate the total number of items in the inventory.
function numbers(items){
    return items.stock
}
function sum(a,b){
return a+b
}
console.log(quantity.map(numbers).reduce(sum))
// 6.Write a function to find the item with the lowest stock quantity.
let lowest=Math.min(...quantity.map(item=>item.stock));
console.log(lowest)