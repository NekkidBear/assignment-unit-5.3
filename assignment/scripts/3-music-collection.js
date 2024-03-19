console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = []; //Create an empty array named `myCollection`.

/**Create a function named `addToCollection`. It should have this basic structure:
  - ```js
      function addToCollection(collection, title, artist, yearPublished) {
        // your code here...
      }
    ```
  - This function should:
    - Take in a `collection` parameter. (This allows the function to be reused to add an album to any array of album objects.)
    - Take in the album's `title`, `artist`, `yearPublished` as parameters.
    - Create a new object having the above properties.
      - *NOTE*: Your object's properties **must** have `title`, `artist`, and `yearPublished` in order for this assignment's automated tests to work correctly!
    - Add the new object to the end of the `collection` array.
    - `return` the newly created object. */

function addToCollection(collection, title, artist, yearPublished){
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  }
  collection.push(album);
  return album
}

/**- Use and Test the `addToCollection` function:
  - Add 6 albums to the `myCollection` array. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
  - `console.log` each album as added using the function's returned value.
  - After all are added, console.log the `myCollection` array. */

console.log("adding album", addToCollection(myCollection, "Yellow Submarine", "Beatles", 1966));
console.log("adding album", addToCollection(myCollection, "Desperado", "Eagles", 1973));
console.log("adding album", addToCollection(myCollection, "Puttin' On The Ritz", "Taco", 1982));
console.log("adding album", addToCollection(myCollection, "Friends in Low Places", "Garth Brooks", 1990));
console.log("adding album", addToCollection(myCollection, "The Sign", "Ace of Base", 1994));
console.log("adding album", addToCollection(myCollection, "Bohemian Rhapsody", "Queen", 1966));
console.log("adding album", addToCollection(myCollection, "Another One Bites the Dust", "Queen", 1980))
console.log("My collection", myCollection);

// - Create a function named `showCollection`. This function should:
//   - Take in a `collection` parameter. (This allows it to be reused to show any array of album objects.)
//   - Loop through the `collection` and `console.log` each album's information formatted **within a single string**, like: `TITLE by ARTIST, published in YEARPUBLISHED`.

// - Test the `showCollection` function.
function showCollection(collection){
  for(let album of collection){
    console.log(`${album.title} by ${album.artist}, pubilshed in ${album.yearPublished}`);
  }
  return false;

}

console.log("Testing showCollection");
showCollection(myCollection);

/**- Add a function named `findByArtist`. This function should:
  - Take in a `collection` parameter. Remember, we want to be able to search any collection!
  - Take in an `artist` (string) parameter.
  - Create an empty array to hold any matching results, if any.
  - Loop through the `collection` and add any album objects with a matching artist to the array.
  - Return the array with the matching results. (If no results are found, an empty array should be returned.) */
  function findByArtist(collection, artist){
    let matches = []
    for (let album of collection){
      if(album.artist === artist){
        matches.push(album);
      } else {
        continue;
      }
    }
    return matches;
  }

/**- Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, 
 * as well as an artist you know is not in your collection. Check that for artists
 *  with multiple matches, all are returned. */

console.log("Albums by Garth Brooks", findByArtist(myCollection, "Garth Brooks"));
console.log("Albums by Queen", findByArtist(myCollection, "Queen"));
console.log("Albums by Michael Jackson", findByArtist(myCollection, "Michael Jackson"));

/**### Stretch Goal

- Create a function called `search` that will allow for searching by `artist` **and** `yearPublished`. This function should:
  - Take in a `collection` parameter.
  - Take in a `searchCriteria` parameter. Create your solution based on a *search object* that has these properties:
    - ```
      { artist: 'Ray Charles', yearPublished: 1957 }
      ```
  - The returned output from `search` should meet these requirements:
    - Return a new array of all items in the `collection` matching **all** of the search criteria.
    - If no results are found, return an empty array.
    - If there is no search object, an empty search object, or missing `artist`/`yearPublished` data provided as input, `return` **all albums** from the `collection` being searched.
*/
let searchCriteria = {
  artist: "",
  yearPublished: undefined
}
function search(collection, searchCriteria){
  let matches = [];
  for(let album of collection){
    if (album.artist === searchCriteria.artist && 
      album.yearPublished === searchCriteria.yearPublished)
      {
      //all criteria matches
        matches.push(album);
        console.log("found a match!");
        continue; 
      } else if (
        typeof searchCriteria === 'undefined' || //check if object exists
        searchCriteria.keys===0 || 
        searchCriteria.artist === '' ||
        searchCriteria.yearPublished=== undefined)
        {
          console.log("Invalid search criteria. Here are the albums in your collection")
          return collection;
      }
  }
  return matches;
}
console.log("Testing search function; Criteria: { artist: 'Ray Charles', yearPublished: 1957 }, expect empty array");
searchCriteria = { artist: 'Ray Charles', yearPublished: 1957 };
console.log("Results: ", search(myCollection, searchCriteria));
console.log("New search criteria: {artist: 'Queen', yearPublished: 1966}, expect 'Bohemian Rhapsody'");
searchCriteria = { artist: 'Queen', yearPublished: 1966 };
console.log("results: ", search(myCollection, searchCriteria));
console.log("Testing blank criteria ({ artist: '', yearPublished: ''}), should return the whole colection.");
searchCriteria = { artist: '', yearPublished: ''};
console.log("Results: ", search(myCollection, searchCriteria));
console.log("Testing incomplete criteria (no year), should return the whole collection");
searchCriteria = { artist: 'Garth Brooks' , year: undefined};
console.log("Results: ", search(myCollection, searchCriteria));
console.log("testing missing artist, should return the whole collection")
searchCriteria = { artist: '', yearPublished: 1966 };
console.log("Results: ", search(myCollection, searchCriteria));





// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
