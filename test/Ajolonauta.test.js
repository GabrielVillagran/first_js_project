// prueba basica proporcionada por la documentacion de jest
describe("Esto es una suite de pruebas", () => {
    test('Caso de prueba 1', () => {
        // Se realiza el codigo como queremos que se use
        const result = 1 + 2
            // Validacion de resultados esperados
        expect(result).toBe(10);
    });
})