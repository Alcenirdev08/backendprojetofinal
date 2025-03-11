"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDespesasByUserUseCase = void 0;
const DespesaRepository = require('../repositories/despesa-repository');
class GetDespesasByUserUseCase {
    private despesaRepository: typeof DespesaRepository;

    constructor(despesaRepository: typeof DespesaRepository) {
        this.despesaRepository = despesaRepository;
    }
    async execute(userId: string) {
        const allDespesas = await this.despesaRepository.findAll();
        const despesasByUser = allDespesas.filter((despesa: any) => despesa.userId === userId);
        return despesasByUser;
    }
}
exports.GetDespesasByUserUseCase = GetDespesasByUserUseCase;