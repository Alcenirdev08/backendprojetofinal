import { CreateDespesaUseCase } from "../../application/use-cases/create-despesa-use-case";
import { DespesaRepository } from "../../application/repositores/depesa-repository";

const despesaRepositoryMock = {
    save: jest.fn((despesa) => Promise.resolve()),
    findAll: jest.fn()
};

describe("CreateDespesaUseCase Unit Test", () => {
    const createDespesaUseCase = new CreateDespesaUseCase(despesaRepositoryMock);

    it("The execute function calls the right dependencies' callbacks", () => {
        createDespesaUseCase.execute({
            descricao: "descritiva",
            categoria: "categorica",
            valor: 123,
            tipo: "tipado",
            data: "de hoje"
        })

        expect(despesaRepositoryMock.save).toHaveBeenCalled();
        expect(despesaRepositoryMock.save).toHaveBeenCalledWith({
            descricao: "descritiva",
            categoria: "categorica",
            valor: 123,
            tipo: "tipado",
            data: "de hoje"
        });
    })

    it("Expect a correct result of the execute function", async () => {
        const despesa = await createDespesaUseCase.execute({
            descricao: "descritiva",
            categoria: "categorica",
            valor: 123,
            tipo: "tipado",
            data: "de hoje"
        })

        expect(despesa).toMatchObject({
            descricao: "descritiva",
            categoria: "categorica",
            valor: 123,
            tipo: "tipado",
            data: "de hoje"
        })
    })
})