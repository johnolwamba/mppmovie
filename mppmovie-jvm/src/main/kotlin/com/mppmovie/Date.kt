package com.mppmovie

import java.util.*

actual class Date actual constructor() {

    val calendar = Calendar.getInstance()

    actual fun getDate(): Int {
        return calendar.get(Calendar.DATE)
    }

    actual fun getMonth(): Int {
        return calendar.get(Calendar.MONTH)
    }

    actual fun getFullYear(): Int {
        return calendar.get(Calendar.YEAR)
    }

    actual fun getHours(): Int {
        return calendar.get(Calendar.HOUR)
    }

    actual fun getMinutes(): Int {
        return calendar.get(Calendar.MINUTE)
    }

    actual fun getTime(): Number {
        return calendar.timeInMillis
    }

    actual override fun toString(): String {
        return calendar.time.toString()
    }
}

actual fun displayMovie(movie: Movie) {
    System.out.println("JVM: ${movie.name} added on ${movie.releaseDate}")
}