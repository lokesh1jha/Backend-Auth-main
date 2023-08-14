import { updateAccount, updatePassword, getAccountInfo } from '../../../src/components/api/account/account.service';

jest.mock('express');
jest.mock('./account.service');
jest.mock('../../../utils/apiErrorHandler');
jest.mock('firebase-functions/v1');

describe('updateAccount', () => {
  it('should expose a function', () => {
		expect(updateAccount).toBeDefined();
	});
  
  it('updateAccount should return expected output', async () => {
    // const retValue = await updateAccount(req,res,next);
    expect(false).toBeTruthy();
  });
});
describe('updatePassword', () => {
  it('should expose a function', () => {
		expect(updatePassword).toBeDefined();
	});
  
  it('updatePassword should return expected output', async () => {
    // const retValue = await updatePassword(req,res,next);
    expect(false).toBeTruthy();
  });
});
describe('getAccountInfo', () => {
  it('should expose a function', () => {
		expect(getAccountInfo).toBeDefined();
	});
  
  it('getAccountInfo should return expected output', async () => {
    // const retValue = await getAccountInfo(req,res,next);
    expect(false).toBeTruthy();
  });
});