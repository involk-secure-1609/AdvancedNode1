// async.series
// series(tasks, [callback])
// Run the functions in the tasks array in series, each one running once the previous 
// function has completed. If any functions in the series pass an error to its callback, 
// no more functions are run, andcallback is immediately called with the value of the error. 
// Otherwise, callback receives an array of results when tasks have completed.

// Note that while many implementations preserve the order of object properties,
//  the ECMAScript Language Specification explicitly states that

// The mechanics and order of enumerating the properties is not specified.

// So if you rely on the order in which your series of functions are executed, and want 
// this to work on all platforms, consider using an array.

// Arguments

// tasks – An array or object containing functions to run, each function is passed a 
// callback(err, result) it must call on completion with an error err (which can be null) 
// and an optionalresult value.
// callback(err, results) – An optional callback to run once all the functions have completed.
//  This function gets a results array (or object) containing all the result arguments passed to the taskcallbacks.
// var async = require('async');
// var GithubApi = require('github');

// var github = new GithubApi({
//     	version: '3.0.0'
// });<br><br>

// async.series([
// 	    function functionOne(callback) {
//         		callback(null, 'RESULT OF FUNCTION ONE');
//     	},
//     	function functionTwo(callback) {
//         		callback(null, 'RESULT OF FUNCTION TWO');
//     	},
//     	function functionThree(callback) {
//         		callback(null, 'RESULT OF FUNCTION Three');
// 	    }
// ], function(err, result) {
// 	    console.log(result);
// })Copy
// async.series will execute a list of functions in order. 
// In the above example, functionOne will be called first, then functionTwo and lastly functionThree.  
// The callback() within each function is invoked each time.  
// If null is passed to the first parameter, it means there was no errors when executing the particular function.

// ], function(err, result) {
// 	    console.log(result);
// })Copy
// The second parameter is the value you want to pass along so it can be caught
//  at the second parameter of async.series, which is the final callback function.  
//  It will contain an array or object of all the values from each function.


//  async.each

// each(coll, iteratee, callbackopt)
// import each from 'async/each';
// Applies the function iteratee to each item in coll, in parallel. The iteratee is called with an item from the list, and a callback for when it has finished. If the iteratee passes an error to its callback, the main callback (for the each function) is immediately called with the error.

// Note, that since this function applies iteratee to each item in parallel, there is no guarantee that the iteratee functions will complete in order.

// // dir1 is a directory that contains file1.txt, file2.txt
// // dir2 is a directory that contains file3.txt, file4.txt
// // dir3 is a directory that contains file5.txt
// // dir4 does not exist

// const fileList = [ 'dir1/file2.txt', 'dir2/file3.txt', 'dir/file5.txt'];
// const withMissingFileList = ['dir1/file1.txt', 'dir4/file2.txt'];

// // asynchronous function that deletes a file
// const deleteFile = function(file, callback) {
//     fs.unlink(file, callback);
// };

// // Using callbacks
// async.each(fileList, deleteFile, function(err) {
//     if( err ) {
//         console.log(err);
//     } else {
//         console.log('All files have been deleted successfully');
//     }
// });

// // Error Handling
// async.each(withMissingFileList, deleteFile, function(err){
//     console.log(err);
//     // [ Error: ENOENT: no such file or directory ]
//     // since dir4/file2.txt does not exist
//     // dir1/file1.txt could have been deleted
// });

// // Using Promises
// async.each(fileList, deleteFile)
// .then( () => {
//     console.log('All files have been deleted successfully');
// }).catch( err => {
//     console.log(err);
// });

// // Error Handling
// async.each(fileList, deleteFile)
// .then( () => {
//     console.log('All files have been deleted successfully');
// }).catch( err => {
//     console.log(err);
//     // [ Error: ENOENT: no such file or directory ]
//     // since dir4/file2.txt does not exist
//     // dir1/file1.txt could have been deleted
// });

// // Using async/await
// async () => {
//     try {
//         await async.each(files, deleteFile);
//     }
//     catch (err) {
//         console.log(err);
//     }
// }

// // Error Handling
// async () => {
//     try {
//         await async.each(withMissingFileList, deleteFile);
//     }
//     catch (err) {
//         console.log(err);
//         // [ Error: ENOENT: no such file or directory ]
//         // since dir4/file2.txt does not exist
//         // dir1/file1.txt could have been deleted
//     }
// }