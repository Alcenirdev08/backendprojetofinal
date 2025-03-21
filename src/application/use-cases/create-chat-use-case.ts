import { ChatRepository } from '../repositories/chat-respository';
import { DespesaRepository } from '../repositories/despesa-repository';

export class CreateChatUseCase {
    constructor(
        private chatRepository: ChatRepository,
        private despesas: DespesaRepository
    ) {}

    async execute(uid: string, messageUser: string): Promise<any> {
        const transactions = await this.despesas.findAll();
        return await this.chatRepository.open(transactions, uid, messageUser);
    }
}