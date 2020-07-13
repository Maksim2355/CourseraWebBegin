


function query(collection) {
    let result = collection.slice();
    let queue = []
    for (let i = 1; i < arguments.length; i++){
        if (arguments[i].name === 'select') queue.push(arguments[i])
        else queue.unshift(arguments[i])
    }
    for (let i = 0; i < queue.length; i++){
        result = queue[i](result);
    }
    return result;
}


/*
Сначала берем все элементы для выборки и сохраняем в массиве.
После возвращаем функцию, которая выполнит преобразованием над коллекцией.
Она будет перебирать каждый ключ в объекте и если он не соответствует действующей выборки, то удаляется
 */
function select() {
    let arraySelectField = []
    if (arguments.length !== 0){
        for(let i = 0; i < arguments.length; i++){
            arraySelectField.push(arguments[i]);
        }
    }
    return function select(collection) {
        var t =  collection.map((it) => {
            Object.keys(it).forEach((field) => {
                if(!arraySelectField.includes(field)) delete it[field]
            })
        })
        console.log(t);
        return t;


    }
}


//Выполняем фильтрацию. Если свойство содержит одно из значений values, то оставляем его
function filterIn(property, values) {
    return function filterIn(collection) {
        return collection.filter(item => values.includes(item[property]))
    }
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
