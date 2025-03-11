import { Despesa } from '../../domain/despesa/despesa';

export interface DespesaRepository {
    save(despesa:Despesa): Promise<void>;
    findAll(): Promise<Despesa[]>
}