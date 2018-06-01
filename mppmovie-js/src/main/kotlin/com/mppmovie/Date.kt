package com.mppmovie

actual class Date {
    actual constructor()

    actual fun getDate(): Int {
       return getDate()
    }

    actual fun getMonth(): Int {
       return getMonth()
    }

    actual fun getFullYear(): Int {
       return getFullYear()
    }

    actual fun getHours(): Int {
       return getHours()
    }

    actual fun getMinutes(): Int {
       return getMinutes()
    }

    actual fun getTime(): Number {
       return getTime()
    }
}

actual fun displayMovie(movie: Movie) {
    console.log("JS ${movie.name} added on ${movie.releaseDate}")
}