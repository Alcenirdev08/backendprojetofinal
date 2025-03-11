"use strict";
var __importDefault: (mod: any) => any = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;

const dotenv = __importDefault(require("dotenv"));
dotenv.default.config();
const mongoose_1 = __importDefault(require("mongoose"));

// Verificação da variável de ambiente
if (!process.env.MONGODB_URI) {
    console.error('Error: MONGODB_URI is not defined in the .env file.');
    process.exit(1);  // Encerra o processo com erro
}

const connectDB = async () => {
    try {
        // Conectar ao MongoDB usando a URL de conexão da variável de ambiente
        await mongoose_1.default.connect(process.env.MONGODB_URI);
        console.log('Connected to database');
    } catch (error) {
        console.error('Error connecting to database', error);
    }
};

exports.connectDB = connectDB;
