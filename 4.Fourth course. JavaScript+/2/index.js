module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */
function Collection() {
    this.collection = [];
}

// Методы коллекции

//Добавляет массив или элемент в коллекцию
Collection.prototype.append = function(){
    if (arguments[0] instanceof Array){
        for (var i = 0; i < arguments[0].length; i++){
            this.collection.push(arguments[0][i]);
        }
    }else if(arguments[0] instanceof Collection) {
        for (var i = 0; i < arguments[0].values().length; i++){
            this.collection.push(arguments[0].values()[i]);
        }
    }
    else{
        this.collection.push(arguments[0]);
    }
};

//Возвращает массив элементов коллекциии
Collection.prototype.values = function () {
    return this.collection;
};

//Возвращает элемент с опредленного индекса
Collection.prototype.at = function(index) {
    index -= 1;
    if (0 <= index
        && index < this.collection.length){
        return this.collection[index];
    }else return null;
};

//Возвращает количество элементов в коллекции
Collection.prototype.count = function() {
    return this.collection.length;
};

//Удаляет элемент с опредленной позиции
Collection.prototype.removeAt = function(index) {
    index -= 1;
    if (0 <= index && index < this.collection.length){
        this.collection.splice(index, 1);
        return true;
    }else return false;
};
// другие методы


/**
 * Создание коллекции из массива значений
 */
Collection.from = function () {
    var collection = new Collection();
    collection.append(arguments[0]);
    return collection
};
