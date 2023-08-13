import { ParamSchema, Location } from 'express-validator';
import { checkPassword, getUserByEmail } from '../models/user';
import { REGEXP_PASSWORD } from './regexp';

export const VALIDATION_STRING = (where: Location): ParamSchema => ({
  in: [where],
  isString: true,
  notEmpty: true,
});

export const VALIDATION_EMAIL_NOT_EXIST = (where: Location): ParamSchema => ({
  in: [where],
  isString: true,
  notEmpty: true,
  isEmail: true,
  custom: {
    options: async (value: string) => {
      const user = await getUserByEmail(value);
      if (user) throw new Error('Email already exists');
      return true;
    }
  }
});

export const VALIDATION_PASSWORD = (where: Location): ParamSchema => ({
  in: [where],
  isString: true,
  notEmpty: true,
  isLength: {
    errorMessage: 'Password should be at least 8 chars long',
    // Multiple options would be expressed as an array
    options: { min: 8 },
  },
  matches: {
    options: REGEXP_PASSWORD,
    errorMessage: 'Password should be at least one special char, one lowercase, one uppercase, one number',
  },
});

export const VALIDATION_ACCOUNT_TEL = (where: Location): ParamSchema => ({
  in: [where],
  isString: true,
  notEmpty: true,
  isLength: {
    errorMessage: 'Phone number should be at least 10 chars long',
    // Multiple options would be expressed as an array
    options: { min: 10 },
  },
  matches: {
    options: /^[0-9]+$/,
    errorMessage: 'Phone number should be number',
  },
});

export const VALIDATION_EMAIL_EXIST = (where: Location): ParamSchema => ({
  in: [where],
  isString: true,
  notEmpty: true,
  isEmail: true,
  custom: {
    options: async (value: string) => {
      const user = await getUserByEmail(value);
      if (!user) throw new Error('Email does not exist');
      return true;
    }
  }
});

export const VALIDATION_PASSWORD_CHECK = (where: Location, email: string): ParamSchema => ({
  in: [where],
  isString: true,
  notEmpty: true,
  custom: {
    options: async (value: string) => {
      const user = await getUserByEmail(email);
      if (!user) throw new Error('Email does not exist');
      if (!checkPassword(email, value)) throw new Error('Password is incorrect');
      return true;
    }
  }
});

export const VALIDATION_TOKEN = (where: Location): ParamSchema => ({
  in: [where],
  isString: true,
  notEmpty: true,
  isLength: {
    errorMessage: 'Token should be at least 10 chars long',
    // Multiple options would be expressed as an array
    options: { min: 10 },
  },
});

