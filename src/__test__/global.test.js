const text = 'Hola Carlyle'
const fruits = ['Manzana', 'Banana', 'Pera'];
const reverseExample = 'elylrac'
// Texto
test('Debe contener un texto', () => {
    expect(text).toMatch(/Carlyle/);
});

// Arreglo
test('Tenemos una banana', () => {
    expect(fruits).toContain('Banana');
})

//Numeros
test('Mayor que...', () => {
    expect(10).toBeGreaterThan(9);
})

// Booleanos

test('Verdadero...', () => {
    expect(true).toBeTruthy();
})

// Callbacks

//  funcion para convertir al revez el srting
const reverseText = (str , callback) => {
    callback(str.split("").reverse().join(""));
}


test('Probar callback', () => { 
    reverseText('carlyle' , (str) => {
        expect(str).toBe(reverseExample);
    })
 })


 // Promesas
 //  funcion que devuelve una promesa 
const reverseName = (name) => {
    return new Promise((resolve, reject)=>{

        if (!name) {
            reject(Error('Errorson'));
        }

        resolve(name.split("").reverse().join(""));
    });
}

test('Promesa', () => { 
    return reverseName('carlyle')
    .then(name => {
        expect(name).toBe(reverseExample);
    })
    .catch(error => {
        console.log(error);
    })
 })

 // Async  / Await

test('Async/ Await', async () => { 
    const rta = await reverseName('carlyle');

    expect(rta).toBe(reverseExample);
 })

 
 // Estructura para ejecutar cosas antes y despúes de X pruebas
 afterEach(()=> console.log('Despues de cada prueba'));
 afterAll(()=> console.log('Despues de todas las pruebas'));
 beforeEach(()=> console.log('Antes de cada prueba'));
 beforeAll(()=> console.log('Antes de todas las  pruebas'));