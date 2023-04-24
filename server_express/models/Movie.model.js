const { Schema, model } = require("mongoose")

const movieSchema = new Schema(
    {
        ID: {
            type: String,
            required: [true, 'Movie/TV show ID is required.'],
            unique: true
        },
        title: {
            type: String,
            required: [true, 'Movie Title is required']
        },
        director: {
            type: String,
            required: [true, 'Movie Author is required']
        },
        rating: {
            type: Number,
            required: [true, 'Movie Rating is required']
        },
        poster: {
            type: String,
            required: [false, 'Movie Poster is not required']
        },
        language: {
            type: String,
            required: [false, 'Movie Original Language is not required']
        },
        overview: {
            type: String,
            required: [false, 'Movie Overview is not required']
        },
        releaseDate: {
            type: String,
            required: [false, 'Movie Release Date is required']
        }
    },
    {
        timestamps: true
    }
)

const Movie = model("Movie", movieSchema)

module.exports = Movie