console.log('***** Music Collection *****')

let collection = [];

function addToCollection( title, artist, yearPublished, tracksProvided) {
    let album = {
        title: title,
        artist: artist,
        year: yearPublished, 
        tracks: tracksProvided
    }

    /*for (let i = 0; i < tracksProvided.length; i++) {
        album.tracks.push({
            name: tracks[i].name,
            duration: tracks[i].duration
        })
    } */

    collection.push(album);
    return album;
}

// Test - adding songs to collection
console.log(addToCollection('That Sea the Gambler', 'Gregory Alan Isakov', 2007, [{name: 'The Stable Song', duration: '6:01'}, {name: 'All There Is', duration: '2:23'}]));
console.log(addToCollection('Historian', 'Lucy Dacus', 2018));
console.log(addToCollection('This Empty Northern Hemisphere', 'Gregory Alan Isakov', 2009));
console.log(addToCollection('Roll the Bones', 'Shakey Graves', 2011));
console.log(addToCollection('Around the Fur', 'Deftones', 1997, [
    {
        name: 'My Own Summer (Shove It)',
        duration: '3:46'
    },
    {
        name: 'Around the Fur', 
        duration: '3:47'
    },
    {
        name: 'Be Quiet and Drive (Far Away)',
        duration: '3:31'
    }
]));
console.log(addToCollection('Axis: Bold as Love', 'Jimi Hendrix', 1967));

// Test - printing collection array
console.log(collection)

function showCollection( albums ) {
    console.log(`Total of ${albums.length} albums in collection:`);

    for (let i = 0; i < albums.length; i++) {
        console.log(`${albums[i].title} by ${albums[i].artist}, published in year ${albums[i].year}:`)
        
        if (albums[i].tracks !== undefined) {
            for (let z = 0; z < albums[i].tracks.length; z++) {
            
                console.log(`${z+1}. ${albums[i].tracks[z].name}: ${albums[i].tracks[z].duration}`)
            }
        }
    }
}

// Test - running showCollection to show number of songs in collection and print a string of info for each song
showCollection(collection);

function findByArtist( artist ) {
    let match = [];

    for (let i = 0; i < collection.length; i++) {
        if(collection[i].artist === artist) {
            match.push(collection[i]);
        }
    }
    return match;
}

// Test - test for existing artist
console.log('Should return one match:', findByArtist('Deftones'));

//Test - test for nonexistent artist 
console.log('Should return empty array' ,findByArtist('Slipknot'));

//Test - test for multiple matches 
console.log('Should return two matches:', findByArtist('Gregory Alan Isakov'));

function search( object ){
    let match = [];

    if (object === undefined || Object.keys(object).length === 0) {
        return collection;
    }

    for (let i = 0; i < collection.length; i++) {
        if (collection[i].artist === object.artist && collection[i].year === object.year) {
            match.push(collection[i])
        }
    }
    
    return match
}

// Test - test for no match, should return empty array
console.log('should return empty array:', search({artist: 'Ray Charles', year: 1957}));

//Test - test for no argument provided
console.log('Should return entire collection:', search());

//Test - test for empty object provided
console.log('Should return entire collection:', search([]));

//Test - test for match
console.log('should return one match:', search({artist: 'Gregory Alan Isakov', year: 2007}));