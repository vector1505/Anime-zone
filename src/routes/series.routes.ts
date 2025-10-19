import {Router} from 'express';
import {
    getAllSeries,
    createSeries,
    getSeriesById,
    updateSeries,
    deleteSeries
} from '../controllers/series.controller.js';

const seriesRoutes = Router();

seriesRoutes.get('/', getAllSeries);
seriesRoutes.post('/', createSeries);
seriesRoutes.get('/:id', getSeriesById);
seriesRoutes.put('/:id', updateSeries);
seriesRoutes.delete('/:id', deleteSeries);

export default seriesRoutes;

