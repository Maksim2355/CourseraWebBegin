

let events = []


module.exports = {


    /*Выполнение подписки на события. Проверяем список событий, если событие есть, то подписываем
    Если не существует, то добавляем в список
     */
    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {


        return this
    },


    //Проверяем список событий. Если событие существует и у события есть данный подписчитк, то отписываем.
    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {


        return this
    },

    //Находим событие, оповещаем всех подписчиков
    /**
     * @param {String} event
     */
    emit: function (event) {


        return this
    }
};


/*Работа с глобальным списком объектов -событий

 */
[
    {
        eventName: "new notification",
        subscribers: [],

    }


]