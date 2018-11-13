/*
    FikraCamps Flowers task
    Note: by this code, i used multiple 'forEachs' to print each point separately.
*/ 

var fs = require('fs')

let result = fs.readFile('./flower.txt', (err, data) => {
    if (err) throw err

    let flowers_array = data.toString().split('\n')

    // 1. Count of rows
    console.log("The count of rows: " + flowers_array.length)

    let countWithS = 0;

    // 2. items start with 'S'
    console.log("Items start with 'S':")
    flowers_array.forEach(item => {
        if (item.startsWith('S')) {
            console.log(item)
            countWithS++
        } 
    })

    // 3. The count of items don't start with 'S'
    console.log("The count of items that don't start with 'S': " + (flowers_array.length - countWithS))

    // 4. items that start with the 1st letter of my name (Ali)
    console.log("Items start with 'A':")
    flowers_array.forEach(item => {
        if (item.startsWith('A')) console.log(item) 
    })

    // 5. Finding all items that have a length of 5
    console.log("All items that have a length of 5:")
    flowers_array.forEach(item => {
        if (item.length === 5) console.log(item)
    })
})