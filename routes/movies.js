const express = require('express');
const { moviesMock } = require('../utils/mocks/movies')

function moviesApi(app) {

    const router = express.Router();
    app.use('/api/movies', router);

    router.get('/', async function (req, res, nex) {
        try {
            const movies = await Promise.resolve(moviesMock);
            res.status(200).json({
                data: movies,
                message: 'movies listed'
            });

        } catch (err) {
            nex(err);
        }
    })

    router.get('/:movieId', async function (req, res, nex) {
        try {
            const movies = await Promise.resolve(moviesMock[0]);
            res.status(200).json({
                data: movies,
                message: 'movie retrive'
            });

        } catch (err) {
            nex(err);
        }
    })

    router.post('/', async function (req, res, nex) {
        try {
            const createdMovieId = await Promise.resolve(moviesMock[0].id);
            res.status(201).json({
                data: createdMovieId,
                message: 'movie created'
            });

        } catch (err) {
            nex(err);
        }
    })



    router.put('/:movieID', async function (req, res, nex) {
        try {
            const updatedMovieId = await Promise.resolve(moviesMock[0].id);
            res.status(200).json({
                data: updatedMovieId,
                message: 'movie updated'
            });

        } catch (err) {
            nex(err);
        }
    })

    router.delete('/:movieID', async function (req, res, nex) {
        try {
            const deletedMovieId = await Promise.resolve(moviesMock[0].id);
            res.status(200).json({
                data: deletedMovieId,
                message: 'movie deleted'
            });

        } catch (err) {
            nex(err);
        }
    })
}

module.exports = moviesApi;

