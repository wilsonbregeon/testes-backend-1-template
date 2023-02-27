import {pratica3} from '../src/pratica3'

describe("Testar o arquivo prática3.ts", () => {
    test("Uma função que recebe dois números e retorna um objeto com duas propriedades: soma e multi", () => {
        const result = pratica3(3, 5)
        const expectResult = {
            soma: 8,
            multi: 15
        }
        expect(result).toEqual(expectResult)
    })
})