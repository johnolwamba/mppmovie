if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'mppmovie-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'mppmovie-js'.");
}
this['mppmovie-js'] = function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  function Movie(name, releaseDate) {
    this.name = name;
    this.releaseDate = releaseDate;
  }
  Movie.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Movie',
    interfaces: []
  };
  Movie.prototype.component1 = function () {
    return this.name;
  };
  Movie.prototype.component2 = function () {
    return this.releaseDate;
  };
  Movie.prototype.copy_ndhcwu$ = function (name, releaseDate) {
    return new Movie(name === void 0 ? this.name : name, releaseDate === void 0 ? this.releaseDate : releaseDate);
  };
  Movie.prototype.toString = function () {
    return 'Movie(name=' + Kotlin.toString(this.name) + (', releaseDate=' + Kotlin.toString(this.releaseDate)) + ')';
  };
  Movie.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.releaseDate) | 0;
    return result;
  };
  Movie.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.releaseDate, other.releaseDate)))));
  };
  function displayMovie(movie) {
    console.log('JS ' + movie.name + ' added on ' + movie.releaseDate.toString());
  }
  function main(args) {
    var releaseDate = new Date();
    var movie = new Movie('Dead Pool 2', releaseDate);
    displayMovie(movie);
  }
  var package$com = _.com || (_.com = {});
  var package$mppmovie = package$com.mppmovie || (package$com.mppmovie = {});
  package$mppmovie.Movie = Movie;
  package$mppmovie.displayMovie_xkx75a$ = displayMovie;
  package$mppmovie.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('mppmovie-js', _);
  return _;
}(typeof this['mppmovie-js'] === 'undefined' ? {} : this['mppmovie-js'], kotlin);
