// Function to create a game object with a given title
function createGame(title) {
  return {
    // Assign the provided title to the 'title' property of the game object
    title,

    // Method to simulate playing the game, with a placeholder implementation
    play() {
      throw new Error('Abstract method play must be implemented');
    },
  };
}

// Create an instance of a game named "Super Mario Bros" using the createGame function
const superMarioBros = createGame('Super Mario Bros');

// Override the 'play' method for the specific 'superMarioBros' instance
superMarioBros.play = function () {
  // Log a message indicating playing "Super Mario Bros."
  console.log(
    'Playing "Super Mario Bros." - Jumping through pipes and collecting coins'
  );
};

// Call the overridden 'play' method of the 'superMarioBros' instance
superMarioBros.play();
