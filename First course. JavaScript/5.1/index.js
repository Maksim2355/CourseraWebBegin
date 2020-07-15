let events = []

function getNewSubscriber(currentEvent, subscriber, handler){
    let subscriberWithHandler = {
        subscriber: subscriber,
        handler: handler
    }
    currentEvent.subscribers.push(subscriberWithHandler);
    return currentEvent
}

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
        //Переменная для обозначения события, на которое мы будем подписываться подписчика
        let currentEvent = null;
        //Пробегаемся по списку событий. Если события есть в списке, то работаем с ним
        events.forEach(it => {
            if (it.eventName === event){
                currentEvent = it;
            }
        })
        //Если события нет, то создаем его и добавляем в список
        if (currentEvent === null){
            currentEvent = {
                eventName: event,
                subscribers: []
            }
            events.push(currentEvent);
        }
        //Получаем нового подписчика для события
        currentEvent = getNewSubscriber(currentEvent, subscriber, handler);
        return this
    },


    //Проверяем список событий. Если событие существует и у события есть данный подписчитк, то отписываем.
    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        let currentEvent = null
        events.forEach(it => {
            if (it.eventName === event){
                currentEvent = it;
            }
        })
        if (currentEvent != null){
          currentEvent.subscribers = currentEvent.subscribers.filter(it => it.subscriber !== subscriber)
        }
        return this
    },

    //Находим событие, оповещаем всех подписчиков
    /**
     * @param {String} event
     */
    emit: function (event) {
        let eventUpcoming = null;
        events.forEach(it => {
            if (it.eventName === event){
                eventUpcoming = it;
            }
        })
        //Если событие имеется в списках, берем массив подписчиков и вызываем handler в контексте подписчика
        if (eventUpcoming !== null) {
            eventUpcoming.subscribers.forEach(it => {
                it.handler.call(it.subscriber)
            })
        }
        return this
    }
};

