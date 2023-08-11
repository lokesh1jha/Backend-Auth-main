import bcrypt from 'bcryptjs';

export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
    return await bcrypt.compare(password, hashedPassword);
}; // TODO

export const hashPassword = (password: string): Promise<String> => {
    return bcrypt.hash(password, 5);
}; // TODO
