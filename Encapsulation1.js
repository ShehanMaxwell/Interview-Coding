function createMovie(title) {
  let watched = false;

  return {
    title,
    watch() {
      console.log(`Watching the movie ${title}`);
      watched = true;
    },
    isWatched() {
      return watched;
    },
  };
}

const inception = createMovie('Inception');
inception.watch();
console.log(inception.isWatched());
