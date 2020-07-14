


function query(collection) {
    let result = cloneArrayWithObject(collection)
    if (arguments.length === 1) return result;
    let queue = [];
    for (let i = 1; i < arguments.length; i++){
        if (arguments[i].name === 'select') queue.push(arguments[i])
        else queue.unshift(arguments[i])
    }
    for (let i = 0; i < queue.length; i++){
        result = queue[i](result);
    }
    return result;
}

function cloneArrayWithObject(collectionArray) {
    let newArray = [];
    collectionArray.forEach(it => {
        newArray.push(Object.assign({}, it))
    })
    return newArray
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
        return  collection.map((it) => {
            Object.keys(it).forEach((field) => {
                if(!arraySelectField.includes(field)) delete it[field]
            })
            return it
        })
    }
}


//Выполняем фильтрацию. Если свойство содержит одно из значений values, то оставляем его
function filterIn(property, values) {
    return function filterIn(collection) {
        return collection.filter((item) => {
            return values.includes(item[property]);
        })
    }
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
