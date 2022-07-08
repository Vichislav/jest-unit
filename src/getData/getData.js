const axios = require('axios');
const mapArrToString = require('../mapArrToString/mapArrToString');

const getData = async () => {
    try {
        //запрашиваем данные пользователей
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        //преобразуем массив объектов в массив айдишников
        const usersIds = response.data.map(user => user.id)
        //возвращаем преобразованный массив айдишников в массив строк
        return mapArrToString(usersIds)
    } catch (e) {

    }
}
module.exports = getData;
