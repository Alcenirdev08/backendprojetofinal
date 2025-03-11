"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDespesaUseCase = void 0;
class CreateDespesaUseCase {
    private despesaRepository: any;
    constructor(despesaRepository: any) {
        this.despesaRepository = despesaRepository;
    }
    async execute(params: any) {
        const despesa = Object.assign({}, params);
        await this.despesaRepository.save(despesa);
        return despesa;
    }
}
exports.CreateDespesaUseCase = CreateDespesaUseCase;