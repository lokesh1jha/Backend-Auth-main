import { logger } from "firebase-functions/v1";
import { HttpException, badImplementationException } from "../../../utils/apiErrorHandler";

export const updateAccount = async () => {
  // TODO
  let error: Error | HttpException | undefined;
  try {
    // TODO
    return Promise.resolve();
  } catch (err) {
    logger.error(err);
    error = err instanceof Error ? err : badImplementationException(err);
    return Promise.reject(error);
  }
};

export const updatePassword = async () => {
  // TODO
  let error: Error | HttpException | undefined;
  try {
    // TODO
    return Promise.resolve();
  } catch (err) {
    logger.error(err);
    error = err instanceof Error ? err : badImplementationException(err);
    return Promise.reject(error);
  }
};
