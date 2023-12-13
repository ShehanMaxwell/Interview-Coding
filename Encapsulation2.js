// Function to create a movie object with a given title
function createMovie(title) {
  // Variable to track whether the movie has been watched, using closure for encapsulation
  let watched = false;

  return {
    // Assign the provided title to the 'title' property of the movie object
    title,

    // Method to simulate watching the movie and set the 'watched' status to true
    watch() {
      console.log(`Watching the movie "${title}".`);
      watched = true;
    },

    // Method to check if the movie has been watched
    isWatched() {
      return watched;
    },
  };
}

// Create an instance of a movie named "Inception" using the createMovie function
const inception = createMovie('Inception');

// Simulate watching the movie
inception.watch();

// Check and log whether the movie has been watched
console.log(inception.isWatched());
