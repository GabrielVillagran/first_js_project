// prueba basica proporcionada por la documentacion de jest
const Ajolonauta = require('./..app/Ajolonauta')

describe("Pruebas de unidad de Ajolonauta", () => {
    test('Caso de prueba 1: Creacion de objeto', () => {
        // Se realiza el codigo como queremos que se use
        const woopa = new Ajolonauta("Woopa")
            // Validacion de resultados esperados
        expect(woopa.name).toBe("Woopa");
    });
})