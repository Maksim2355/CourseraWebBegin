
const YEAR_COMMAND = 'year';
const MONTHS_COMMAND = 'months';
const DAY_COMMAND = 'day';
const HOURS_COMMAND = 'hours'
const MINUTES_COMMAND = 'minutes'

const OPERATION_ADD = '+'
const OPERATION_SUBTRACT = '-'


module.exports = function (date) {
    return {
        date: new Date(date),
        add: function (value, command) {
            operationDate(value, command, OPERATION_ADD, this.date)
        },
        subtract: function (value, command) {
            operationDate(value, command, OPERATION_SUBTRACT, this.date)
        }
    };

};

function operationDate(value, command, operation, currentDate) {
    switch (command) {
        case YEAR_COMMAND:{
            currentDate.setDate();
            break;
        }case MONTHS_COMMAND:{

            break;
        }case DAY_COMMAND:{

            break;
        }
        case HOURS_COMMAND: {

            break;
        }case MINUTES_COMMAND: {
            currentDate.setMinutes()
            break;
        }
    }
}

function changeDate(currentValue, newValue, operation) {
    if(operation === OPERATION_ADD) return newValue + currentValue;
    else return newValue - currentValue
}