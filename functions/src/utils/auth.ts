import { Request, Response, NextFunction } from 'express';
import { unauthorizedException } from './apiErrorHandler';
import { logger } from 'firebase-functions/v1';
import { getToken } from '../models/token';
import { decodeJwt } from './jwt';

export const isAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bearer = req.headers['authorization'];
    if (!bearer) throw unauthorizedException('No token provided');

    // TODO
    let decodedToken = decodeJwt(bearer, 'access');
    if(typeof decodedToken === 'string') throw unauthorizedException('Invalid token');
    let getTokenFromDb = await getToken(decodedToken.user_id);
    if(!getTokenFromDb) throw unauthorizedException('Invalid token');
    if(getTokenFromDb.token_id !== bearer) throw unauthorizedException('Invalid token');
    req.user = { user_id: decodedToken.user_id, name: getTokenFromDb.user_type };
    next();
  } catch (err) {
    logger.warn(err);
    next(err);
  }
};
