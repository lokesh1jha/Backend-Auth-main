import { db } from '../../utils/firebase';
import { UserDocument, USER_COLLECTION_KEY } from './user.entity';



export const addUser = async (user: UserDocument) => {
    try {
        const newUser = db.collection(USER_COLLECTION_KEY).add(user);
        return Promise.resolve(newUser);
    } catch (err) {
        return Promise.reject(err);
    }
}

export const getUserByEmail = async (email: string) => {
    try {
        const userDoc = await db.collection(USER_COLLECTION_KEY).doc(email).get();
        if (userDoc.exists) {
            return userDoc.data() as UserDocument;
        }
        return undefined;
    } catch (err) {
        return Promise.reject(err);
    }
}

export const updateUserFields = async (userId: string, updatedData: Partial<UserDocument>) => {
    try {
        const userDoc = db.collection(USER_COLLECTION_KEY).doc(userId);
        await userDoc.update(updatedData);
        return Promise.resolve();
    } catch (err) {
        return Promise.reject(err);
    }
}

export const deleteUser = async (userId: string) => {
    try {
        const userDoc = db.collection(USER_COLLECTION_KEY).doc(userId);
        await userDoc.update({ is_deleted: true });
        return Promise.resolve();
    } catch (err) {
        return Promise.reject(err);
    }
}
