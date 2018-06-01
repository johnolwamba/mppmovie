package com.mppmovie

actual external class Date {
    actual constructor()

    actual fun getDate(): Int

    actual fun getMonth(): Int

    actual fun getFullYear(): Int

    actual fun getHours(): Int

    actual fun getMinutes(): Int

    actual fun getTime(): Number
}

actual fun displayMovie(movie: Movie) {
    console.log("JS ${movie.name} added on ${movie.releaseDate.toString()}")
}