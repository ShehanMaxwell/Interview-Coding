function createHero(name) {
  return {
    name,
    performAction() {
      throw new Error('Abstract method performAction must be implemented ');
    },
  };
}

const superman = createHero('Superman');
superman.performAction = function () {
  console.log('Flying high and saving the day');
};

superman.performAction();
