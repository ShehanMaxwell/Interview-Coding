function createGame(title) {
  return {
    title,
    play() {
      throw new Error('Abstract method play must be implemented');
    },
  };
}

const superMarioBros = createGame('Super Mario Bros');
superMarioBros.play = function () {
  console.log(
    'Playing "Super Mario Bros." - Jumping through pipes and collecting coins'
  );
};

superMarioBros.play();
