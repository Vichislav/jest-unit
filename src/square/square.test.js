const square = require('./square');


describe('square', () => {
    let mockValue; //можно задать переменную и ипользовать ее в ходе тестирования
    // beforeEach запускается перед каждым тестом
    beforeEach(() => {
        //наприем тут что-то добавили в БД
    })
    // beforeAll запускается один раз перед всеми тестами
    beforeAll(() => {

    })
    test('проверка 1', () => {
        // создаем двойник метода pow, что бы можно было отслеживать его
        const spyMathPow = jest.spyOn(Math,'pow');
        square(2); // мы вызываем функцию square со значением 2
        expect(spyMathPow).toBeCalledTimes(1); // и ожидаем, что метод spyMathPow будет вызван 1 раз
    })
    test('проверка 2', () => {
        const spyMathPow = jest.spyOn(Math,'pow');
        square(1);
        expect(spyMathPow).toBeCalledTimes(0);
    })
    //запускается после каждого теста
    afterEach(() =>{
        jest.clearAllMocks(); // после каждого теста очищаем Mock(и)
    })
    //запускается после всех тестов
    afterAll(() => {})
})
