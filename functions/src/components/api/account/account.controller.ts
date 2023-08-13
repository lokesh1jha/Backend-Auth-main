import { Request, Response, NextFunction } from 'express';

export const updateAccount = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // TODO
        res.status(200).json({ message: 'OK' });
    } catch (err) {
        next(err);
    }
};

export const updatePassword = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // TODO
        res.status(200).json({ message: 'OK' });
    } catch (err) {
        next(err);
    }
};

export const getAccountInfo = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // TODO
        res.status(200).json({ message: 'OK' });
    } catch (err) {
        next(err);
    }
};
