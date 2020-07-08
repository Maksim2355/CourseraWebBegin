// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var date = require('./index');

var time = date('2015-01-01 00:00')



time.add(5, 'minutes')
    .add(1, 'hours')
    .add(2,'days')
    .add(3, 'months')
    .add(1, 'years')


assert.deepEqual(
    time.value,
    "2016-04-03 01:05",

    'Член"'
);

time.add(24, 'hours')
    .subtract(1, 'months')
    .add(3, 'days')
    .add(15, 'minutes');

assert.deepEqual(
    time.value,
    '2017-04-20 14:00',

    'Если к дате "2017-05-16 13:45" ' +
    'прибавить 24 часа, 3 дня и 15 минут, вычесть 1 месяц, ' +
    'то получится "2017-04-20 14:00"'
);

// assert.throws принимает функцию и
// проверяет, что она выбрасывает исключение определенного типа
assert.throws(
    function () {
        date('2017-05-16 13:45').add(2, 'light-years');
    },
    TypeError,

    'Если попытаться прибавить к дате световой год, ' +
    'то выбросится исключение TypeError'
);

assert.throws(
    function () {
        date('2017-05-16 13:45').add(-2, 'years');
    },
    TypeError,

    'Если попытаться передать в функцию add отрицательное число – выбросится исключение TypeError'
);

console.info('OK!');
