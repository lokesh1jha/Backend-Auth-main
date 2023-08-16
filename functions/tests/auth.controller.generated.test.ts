import { Request, Response, NextFunction } from 'express';
import { logger } from 'firebase-functions/v1';
import { decodeJwt, encodeJwt } from '../src/utils/jwt';
import * as service from '../src/components/api/auth/auth.service';
import { getCurrentJST } from '../src/utils/dayjs';
import {
  badImplementationException,
  dataNotExistException,
  unauthorizedException,
} from '../src/utils/apiErrorHandler';
import { checkPassword, getUser, getUserByEmail, getUserById, updateUserFields } from '../src/models/user';
import { addToken, deleteToken } from '../src/models/token';
import { TokenDocument } from '../src/models/token/token.entity';
import { register, login, logout, forgotPassword, updatePassword, refresh } from '../src/components/api/auth/auth.controller';
import admin from "firebase-admin";
import request from "supertest"
import supertest from 'supertest';
import sinon from 'sinon'
import * as api from "../src/index"

console.log(api, "apoooo")


// jest.mock('express');
// jest.mock('firebase-functions/v1');
// jest.mock('../../../utils/jwt');
// jest.mock('./auth.service');
// jest.mock('../../../utils/dayjs');
// jest.mock('../../../utils/apiErrorHandler');
// jest.mock('../../../models/user');
// jest.mock('../../../models/token');
// jest.mock('../../../models/token/token.entity');

let adminInitStub:sinon.SinonStub<any[], any>, firebaseRequest:  supertest.SuperTest<supertest.Test>;
describe('register', () => {
  beforeAll(() => {
    adminInitStub = sinon.stub(admin, 'initializeApp');
    // @ts-expect-error
    firebaseRequest = supertest(api.app);
  });

  afterAll(() => {
    adminInitStub.restore();
  });

  it('should register a user', async () => {
    console.log(firebaseRequest, "firebaseRequest")
    const response = await firebaseRequest.post('/auth/register').send({
      "password": "Lokesh123@jha",
      "name": "Lokesh Jha",
      "phone": "9768523325",
      "address": "Noida, UP"
    });

    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });

  // You can add more test cases here if needed
});





// describe('register', () => {
//   beforeAll(() => {
//     adminInitStub = sinon.stub(admin, 'initializeApp')
//     // inject with the exports.app methode from the index.js
//     // @ts-expect-error
//     firebaseRequest = supertest(api.app) as request.SuperTest<request.Test>
//     console.log(firebaseRequest, "firebaseRequest")
//   })
//   it('should expose a function', async () => {
//     const result = (await firebaseRequest.post('/auth/register')).body({
//       // "email": "lokesh142jha@gmail.com",
//       "password": "Lokesh123@jha",
//       "name": "Lokesh Jha",
//       "phone": "9768523325",
//       "address": "Noida, UP"
//   })()

//   console.log(result, "result12")

// 		expect(result).toBeDefined();
// 	});
  
//   // it('register should return expected output', async () => {
//   //   // const retValue = await register(req,res,next);
    
//   //   expect(false).toBeTruthy();
//   // });
// });
// describe('login', () => {
//   it('should expose a function', () => {
// 		expect(login).toBeDefined();
// 	});
  
//   it('login should return expected output', async () => {
//     // const retValue = await login(req,res,next);
//     expect(false).toBeTruthy();
//   });
// });
// describe('logout', () => {
//   it('should expose a function', () => {
// 		expect(logout).toBeDefined();
// 	});
  
//   it('logout should return expected output', async () => {
//     // const retValue = await logout(req,res,next);
//     expect(false).toBeTruthy();
//   });
// });
// describe('forgotPassword', () => {
//   it('should expose a function', () => {
// 		expect(forgotPassword).toBeDefined();
// 	});
  
//   it('forgotPassword should return expected output', async () => {
//     // const retValue = await forgotPassword(req,res,next);
//     expect(false).toBeTruthy();
//   });
// });
// describe('updatePassword', () => {
//   it('should expose a function', () => {
// 		expect(updatePassword).toBeDefined();
// 	});
  
//   it('updatePassword should return expected output', async () => {
//     // const retValue = await updatePassword(req,res,next);
//     expect(false).toBeTruthy();
//   });
// });
// describe('refresh', () => {
//   it('should expose a function', () => {
// 		expect(refresh).toBeDefined();
// 	});
  
//   it('refresh should return expected output', async () => {
//     // const retValue = await refresh(req,res,next);
//     expect(false).toBeTruthy();
//   });
// });