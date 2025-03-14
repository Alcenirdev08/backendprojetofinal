import { DespesaRepository } from '../../application/repositores/depesa-repository'
import { Despesa } from '../../domain/despesa';
import { DespesaModel } from './model';

export class RepositoryData implements DespesaRepository {
    async save(despesa: Despesa): Promise<void> {
        const despesaModel = new DespesaModel(despesa);
        await despesaModel.save();
    }

    async findAll(): Promise<Array<Despesa>> {
        const despesas = await DespesaModel.find();
        const translatedDespesas = despesas.map((item: any) => {
            return {
                id: item._id.toString(),
                descricao: item.descricao,
                categoria: item.categoria,
                valor: item.valor,
                tipo: item.tipo,
                data: item.data,
                userId: item.userId
            } 
        }) as Array<Despesa>

        return translatedDespesas;
    }
}