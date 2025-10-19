import type { Request, Response } from 'express';
import  SeriesModel from '../models/series.model.js';

export const getAllSeries = async (req: Request, res: Response) => {
    try {
        const name = req.body.name as string | undefined;
        const series = await SeriesModel.find({ name });
        res.status(200).json(series);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching series', error });
    }
}; 

export const createSeries = async (req: Request, res: Response) => {
    try {
        const seriesData = req.body;
        const newSeries = new SeriesModel(seriesData);
        const savedSeries = await newSeries.save();
        res.status(201).json(savedSeries);
        
    } catch (error) {
        res.status(500).json({ message: 'Error creating series', error });
    }
};

export const getSeriesById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const series = await SeriesModel.findById(id);
        if (!series) {
            return res.status(404).json({ message: 'Series not found' });
        }
        res.status(200).json(series);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching series', error });
    }
};

export const updateSeries = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const updatedSeries = await SeriesModel.findByIdAndUpdate(id, updatedData, { new: true });
        if (!updatedSeries) {
            return res.status(404).json({ message: 'Series not found' });
        }
        res.status(200).json(updatedSeries);
    } catch (error) {
        res.status(500).json({ message: 'Error updating series', error });
    }
};

export const deleteSeries = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deletedSeries = await SeriesModel.findByIdAndDelete(id);
        if (!deletedSeries) {
            return res.status(404).json({ message: 'Series not found' });
        }
        res.status(200).json({ message: 'Series deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting series', error });
    }
};