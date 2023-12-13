// Function to create a hero object with a given name
function createHero(name) {
  return {
    // Assign the provided name to the 'name' property of the hero object
    name,
    // Define a method 'performAction' for the hero object
    performAction() {
      // Throw an error indicating that this method must be implemented
      throw new Error('Abstract method performAction must be implemented');
    },
  };
}

// Create an instance of a hero named "Superman" using the createHero function
const superman = createHero('Superman');

// Override the 'performAction' method for the specific 'superman' instance
superman.performAction = function () {
  // Log a message indicating Superman's action
  console.log('Flying high and saving the day');
};

// Call the 'performAction' method of the 'superman' instance
superman.performAction();
