import { config } from "dotenv";
config();

const checkEnv = (enVar: string) => {
    const envVariable = process.env[enVar];
    if (!envVariable) {
        throw new Error(`Porfavor definir el nombre de la variable: ${enVar}`);
    }
    return envVariable;
};

export const MONGODB = checkEnv("MONGODB");
export const PORT = checkEnv("PORT");