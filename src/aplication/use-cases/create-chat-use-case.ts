"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateChatUseCase = void 0;
import { ChatRepository } from '../../repositories/chat-repository'; // Ensure this path is correct or the file exists
// If the path is incorrect, update it to the correct path
// import { ChatRepository } from '../../correct-path/chat-repository';
import { Despesas } from '../../repositories/despesas-repository'; // Ensure this path is correct or the file exists
// If the path is incorrect, update it to the correct path
// import { Despesas } from '../../correct-path/despesas-repository';

class CreateChatUseCase {
    private chatRepository: ChatRepository;
    private despesas: Despesas;

    constructor(chatRepository: ChatRepository, despesas: Despesas) {
        this.chatRepository = chatRepository;
        this.despesas = despesas;
    }
    async execute(uid: string, userMessage: string) {
        const transactions = await this.despesas.findAll();
        const despesasByUser = transactions.filter((despesa: { userId: string }) => despesa.userId === uid);
        return await this.chatRepository.open(despesasByUser, uid, userMessage);
    }
}
exports.CreateChatUseCase = CreateChatUseCase;