"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ai = void 0;
const genkit_1 = require("genkit");
const googleai_1 = require("@genkit-ai/googleai");
const dotenvConfig = __importDefault(require("dotenv"));
dotenvConfig.default.config();
exports.ai = (0, genkit_1.genkit)({
    plugins: [(0, googleai_1.googleAI)({
            apiKey: process.env.GOOGLE_GENAI_API_KEY,
        })],
    model: googleai_1.gemini20FlashExp
});