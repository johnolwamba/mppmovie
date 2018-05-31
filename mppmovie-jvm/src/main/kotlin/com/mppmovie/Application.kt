package com.mppmovie

class Application {
    companion object {
        @JvmStatic
        fun main(args: Array<String>) {
            val releaseDate = Date()
            val movie = Movie("Avengers", releaseDate)
            displayMovie(movie)
        }
    }
}