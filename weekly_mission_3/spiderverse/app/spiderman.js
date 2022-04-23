class Spiderman {
  constructor(name, age, actor, movies, studio) {
    this.name = name;
    this.age = age;
    this.actor = actor;
    this.movies = movies;
    this.studio = studio;
  }
  getInfo() {
    const hey = `Hey, I'm ${this.actor} from ${this.studio}`;
    return hey;
  }
};

module.exports = Spiderman;