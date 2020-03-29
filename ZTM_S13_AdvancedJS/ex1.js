// Clean the room function: given an input of
// [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20],
// make a function that organizes these into
// individual array that is ordered.
// For example answer(ArrayFromAbove) should return :
// [[1, 1, 1, 1], [2, 2, 2], 4, 5, 10, [20, 20], 391, 392, 591].

// Bonus: Make it so it organizes strings differently
// from number types.i.e.[1, "2", "3", 2] should return
// [ [1, 2], ["2", "3"]]


let arr = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
// [[1, 1, 1, 1], [2, 2, 2], 4, 5, 10, [20, 20], 391, 392, 591]


function sortAscending(a,b) {
    return a - b;
}

function sortArray(arr) {
    arr.sort(sortAscending);

    // [1, 1, 1, 1, 2, 2, 2, 4, 5, 10, 20, 20, 391, 392, 591]

    let counter = 0;
    arr.forEach(function(num, i) {
        if (arr[i] === arr[i+1]) {
            counter++;
            // debugger;
            console.log("i", i, "counter",counter, "num", num);
            
        } 
        
        else if (arr[i] !== arr[i+1] && arr[i] === arr[i-1]) {
            arr[i-counter] = arr.slice(i - counter, i + 1)
            counter = 0;
            // // console.log(arr)
            console.log('elif');
            console.log("i", i, "counter",counter, "num", num);

        }
    });

    console.log("phase 1", arr);


    arr.forEach(function(num, ind) {
        // while arr[ind][0] exists && arr[ind][0] is equal to next number
        while (arr[ind][0] && arr[ind][0] === arr[ind + 1]) {
            // delete next number from 
            arr.splice(ind+1, 1);
            debugger;
            console.log(arr);
        }
    })

    return arr
}

console.log(sortArray(arr));