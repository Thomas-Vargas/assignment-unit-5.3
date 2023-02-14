console.log('***** Music Collection *****')

let collection = [];

function addToCollection( title, artist, yearPublished ) {
    let object = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push(object);
    return object;
}

// Test - adding songs to collection
console.log(addToCollection('The Stable Song', 'Gregory Alan Isakov', 2007));
console.log(addToCollection('All There is', 'Gregory Alan Isakov', 2007));
console.log(addToCollection('Big Black Car', 'Gregory Alan Isakov', 2009));
console.log(addToCollection('Tomorrow', 'Shakey Graves', 2013));
console.log(addToCollection('My Own Summer (Shove It)', 'Deftones', 1997));
console.log(addToCollection('Castle Made of Sand', 'Jimi Hendrix', 1967));

// Test - printing collection array
console.log(collection)

function showCollection( array ) {
    console.log(`Total of ${array.length} songs in collection:`);

    for (let i = 0; i < array.length; i++) {
        console.log(`${array[i].title} by ${array[i].artist}, published in year ${array[i].yearPublished}`)
    }
}

showCollection(collection);
