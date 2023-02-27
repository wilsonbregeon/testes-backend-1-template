import { fixacao } from '../src/fixacao'

describe("Teste do arquivo fixacao.ts", () => {
    test("A função divide a palavra 'div' em 3 letras: 'd', 'i', 'v'", () => {
        const palavra = "div"
        const resultadoEsperado = { word: ["d", "i", "v"] }
        const resultadoReal = fixacao(palavra)
        expect(resultadoReal).toEqual(resultadoEsperado)
    })
})