import { logger } from "firebase-functions/v1";
import { HttpException, badImplementationException } from "../../../src/utils/apiErrorHandler";
import { getUserById, updateUserFields } from "../../../src/models/user";
import { hashPassword } from "../../../src/utils/bcrypt";
import { updateAccount, updatePassword, getAccountInfo } from "../../../src/components/api/account/account.service";

jest.mock("firebase-functions/v1");
jest.mock("../../../utils/apiErrorHandler");
jest.mock("../../../models/user");
jest.mock("../../../utils/bcrypt");

describe('updateAccount', () => {
  it('should expose a function', () => {
		expect(updateAccount).toBeDefined();
	});
  
  it('updateAccount should return expected output', async () => {
    // const retValue = await updateAccount(user_id,name,phone,address);
    expect(false).toBeTruthy();
  });
});
describe('updatePassword', () => {
  it('should expose a function', () => {
		expect(updatePassword).toBeDefined();
	});
  
  it('updatePassword should return expected output', async () => {
    // const retValue = await updatePassword(user_id,password);
    expect(false).toBeTruthy();
  });
});
describe('getAccountInfo', () => {
  it('should expose a function', () => {
		expect(getAccountInfo).toBeDefined();
	});
  
  it('getAccountInfo should return expected output', async () => {
    // const retValue = await getAccountInfo(user_id);
    expect(false).toBeTruthy();
  });
});