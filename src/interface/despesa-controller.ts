import { Request, Response } from 'express';
import { CreateDespesaUseCase } from '../application/use-cases/create-despesa-use-case';
import { GetDespesasByUserUseCase } from '../application/use-cases/get-despesas-by-user-use-case';
import { Despesa } from '../domain/despesa';
import { DespesaRepository } from '../infrastructure/repositories/despesa-repository';

export class DespesaController {
    constructor(
        private createDespesaUseCase: CreateDespesaUseCase,
        private getDespesaByUserUseCase: GetDespesasByUserUseCase
    ) {}

    async create(req: Request, res: Response) {
        const params: Despesa = req.body;
        console.log(params);
        const despesa = await this.createDespesaUseCase.execute(params);
        res.status(201).json(despesa);
    }   

    async findAll(req: Request, res: Response) {
        const userId = req.params.userId;
        const despesas = await this.getDespesaByUserUseCase.execute(userId);
        res.status(200).json(despesas);
    }
}