package com.mppmovie

expect class Date() {
    fun getDate(): Int
    fun getMonth(): Int
    fun getFullYear(): Int
    fun getHours(): Int
    fun getMinutes(): Int
    fun getTime(): Number
    override fun toString(): String
}

expect fun displayMovie(movie: Movie)


