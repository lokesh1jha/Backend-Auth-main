import { Schema } from 'express-validator';
import { VALIDATION_EMAIL_NOT_EXIST, VALIDATION_PASSWORD } from '../../../constants/validation';

export const ACCOUNT_SCHEMA: Schema = {
    email: VALIDATION_EMAIL_NOT_EXIST('body'),
    password: VALIDATION_PASSWORD('body')
};

export const ACCOUNT_PASSWORD_SCHEMA: Schema = {
    password: VALIDATION_PASSWORD('body'),
};
