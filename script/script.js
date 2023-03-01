// ------- 1-задача
// for (let i = 10; i >= 0; i--) {
//     console.log(i);
// }


// ------- 2-задача
// 1 - вариант
// let n = 25;
// let m = 14;
//     for (let i = m; i <=n; i++) {   
//         if(i % 2 === 0){
//             console.log(i)
//         }    
//     }



// 2 - вариант
// for (let i = m; i <=n; i++) {   
//      if(i % 2 === 0){
//          console.log(i)
//     }    
// }


// ------- 3-задача
// 1 - вариант
// function range(n, m) {
//     let arr = [];
//     if (n < m)  {
//         for (let i = n; i < m; i++) {
//             arr.push(i);
//         } 
//     } else {
//         for (let i = m; i < n; i++) {
//             arr.push(i);
//         } 
//     }  
// for (let i = 0; i < arr.length; i++) {    
//     console.log(arr[i]);
// }
// }
// range(11, 17);

// 2 - вариант
// function range(n, m) {
//     let arr = [];
//     if (n < m)  {
//         for (let i = n; i < m; i++) {
//             arr.push(i);
//         } 
//     } else {
//         for (let i = m; i < n; i++) {
//             arr.push(i);
//         } 
//     }
//        return arr;
// }

// ------- 4-задача
// 1 - Вариант
// const arr = [];
// function handler() {
//     for (let i = 0; i <= 10; i++) {
//         arr.push(i);     
// } 
// const arr1 = arr.filter(function(el){
//     return el != 4
// })
// console.log(arr1);
// }
// handler(); 

// 2 - Вариант
// 
// function handler(arr, num) {
// const arr1 = arr.filter(function(el){
//     return el != num
// })
// return arr1
// }



// ------- 5-задача
// 1 - Вариант
// const arr = [];
// function handler() {
//     for (let i = -5; i <= 5; i++) {
//         arr.push(i);     
// } 
// const arr1 = arr.map(function(el){
//     if(el < 0){
//         return el * (-1)
//     }else{
//         return el
//     }
// })
// console.log(arr1);
// }
// handler(); 

// 2 - Вариант
// function handler(arr) {
// const arr1 = arr.map(function(el){
//     if(el < 0){
//         return el * (-1)
//     }else{
//         return el
//     }
// })
// return arr1
// }



// ------- 6-задача
// function handler(arr) {
// const array = arr.filter(function(el, id) {
//     return arr.indexOf(el) === id
// })
//  return array
// }



// ------- 7-задача
// 1 - Вариант
// function handler(arr) {
// const array = arr.map(function(item){
//         return item.length;
// })
//  return array
// }


// 2 - Вариант
// let lengths = ["Бильбо", "Гэндальф", "Назгул", "Велосипед", "Самокат", "Ролики"]
// .map(item => item.length);
// console.log(lengths);

// ------- 8-задача
// function handler(arr, num) {
// const array = arr.filter(function(el) {
//     return el === "number"
// })   
//     .map(function (el) {
//     return el**num
// })
//     return array
// }
