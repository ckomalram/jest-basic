const randomData = require('../../index');


// // Para saber si el tipo que se retorna es un strin
// test('Probar funcionalidad', () => { 
//     console.log(randomData());
//     expect(typeof (randomData())).toBe('string');
//  })


describe('Probar Funcionalidades de index', () => {
    // Para saber si el tipo que se retorna es un strin
    test('Probar funcionalidad', () => {
        // console.log(randomData());
        expect(typeof (randomData())).toBe('string');
    })
    
    test('Probar que no existe una city', () => { 
        expect(randomData()).not.toMatch(/veranillo/);        
     })
});