
import async = require("async")

var async = async;

// async.parallel([
//     function(callback){
//         setTimeout(function () {
//           callback(null,console.log(1))  
//         },3000) 
//     },
//     function(callback){
//        setTimeout(function () {
//           callback(null,console.log(2))  
//         },6000) 
//       },
//        function(callback){
//        setTimeout(function () {
//           callback(null,console.log(3))  
//         },9000) 
//       },
//        function(callback){
//        setTimeout(function () {
//           callback(null,console.log(4))  
//         },1000) 
//       }
// ], function (err,result) {
//     console.log(result)
// });

// async.series([
//     function(callback){
//         setTimeout(function () {
//           callback(null,console.log(1))  
//         },3000) 
//     },
//     function(callback){
//        setTimeout(function () {
//           callback(null,console.log(2))  
//         },6000) 
//       },
//        function(callback){
//        setTimeout(function () {
//           callback(null,console.log(3))  
//         },9000) 
//       },
//        function(callback){
//        setTimeout(function () {
//           callback(null,console.log(4))  
//         },1000) 
//       }
// ], function (err,result) {
//     console.log(result)
// });

// async.waterfall([
//     function(callback){
//         setTimeout(function () {
//           callback(null,1)  
//         },3000) 
//     },
//     function(result,callback){
//        setTimeout(function () {
//           callback(null,result + 2)  
//         },6000) 
//       },
//        function(result,callback){
//        setTimeout(function () {
//           callback(null,result + 3)  
//         },9000) 
//       },
//        function(result,callback){
//        setTimeout(function () {
//           callback(null,result +4)  
//         },1000) 
//       }
// ], function (err,result) {
//     console.log(result)
// });
