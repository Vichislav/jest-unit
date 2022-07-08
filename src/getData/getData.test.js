const getData = require('./getData');
const axios = require('axios');

jest.mock('axios')
describe('getData', () => {
    let response;
    beforeEach(() => {
        response = {
            data: [ // схема того что нам должен вернуть бэкенд
                {
                    "id": 1,
                    "name": "Leanne Graham",
                    "username": "Bret",
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                    "username": "Antonette",
                },
                {
                    "id": 3,
                    "name": "Clementine Bauch",
                    "username": "Samantha",
                },
            ]
        }
    })
    test('Корректное значение', async () => {
        axios.get.mockReturnValue(response); //согласуем схему того, что нам дает бэкенд с методом axios.get
        const data = await getData()
        //формируем наши ожидания
        expect(axios.get).toBeCalledTimes(1); //что метод axios.get будет вызван 1 раз
        expect(data).toEqual(['1', '2', '3']) // что в метод вернет нам массив преобразованный в строку
    })
})
