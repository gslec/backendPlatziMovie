const express = require('express');
const { moviesMock } = require('../utils/mocks/movies')
const MoviesService = require('../services/movies')

function moviesApi(app) {

    const router = express.Router();
    app.use('/api/movies', router);

    const moviesService = new MoviesService();

    router.get('/', async function (req, res, nex) {
        const { tags } = req.query;
        try {
            const movies = await moviesService.getMovies({ tags });
            res.status(200).json({
                data: movies,
                message: 'movies listed'
            });

        } catch (err) {
            nex(err);
        }
    })

    router.get('/:movieId', async function (req, res, nex) {
        const { movieId } = req.params;
        try {
            const movies = await moviesService.getMovie({ movieId });
            res.status(200).json({
                data: movies,
                message: 'movie retrive'
            });

        } catch (err) {
            nex(err);
        }
    })

    router.post('/', async function (req, res, nex) {
        const { body: movie } = req;
        try {
            const createdMovieId = await moviesService.createMovie({ movie });
            res.status(201).json({
                data: createdMovieId,
                message: 'movie created'
            });

        } catch (err) {
            nex(err);
        }
    })



    router.put('/:movieId', async function (req, res, nex) {
        const { movieId } = req.params;
        const { body: movie } = req;

        try {
            const updatedMovieId = await moviesService.updateMovie({ movieId, movie });
            res.status(200).json({
                data: updatedMovieId,
                message: 'movie updated'
            });

        } catch (err) {
            nex(err);
        }
    })

    router.delete('/:movieId', async function (req, res, nex) {
        const { movieId } = req.params;
        try {
            const deletedMovieId = await moviesService.deleteMovie({ movieId });
            res.status(200).json({
                data: deletedMovieId,
                message: 'movie deleted'
            });

        } catch (err) {
            nex(err);
        }
    })

    router.patch('/:movieId', async function (req, res, nex) {
        const { movieId } = req.params;
        const { body: movie } = req;
        try {
            const patchedMovieId = await moviesService.patchMovie({ movieId, movie });
            res.status(200).json({
                data: patchedMovieId,
                message: 'movie patched'
            });

        } catch (err) {
            nex(err);
        }
    })


}

module.exports = moviesApi;

