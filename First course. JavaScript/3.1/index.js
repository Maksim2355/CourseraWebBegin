const YEAR_COMMAND = 'years';
const MONTHS_COMMAND = 'months';
const DAYS_COMMAND = 'days';
const HOURS_COMMAND = 'hours'
const MINUTES_COMMAND = 'minutes'

const arrayCommands = [YEAR_COMMAND, MONTHS_COMMAND, DAYS_COMMAND, HOURS_COMMAND, MINUTES_COMMAND];

const OPERATION_ADD = '+'
const OPERATION_SUBTRACT = '-'


module.exports = function (date) {
    return {
        value: "empty(empty)",
        date: new Date(date),
        get value(){
            //Надеюсь данный геттер покажет все мое презрение к регулярным выржениям
            let year = this.date.getFullYear();
            let month = formatDate(this.date.getMonth() + 1);
            let day = formatDate(this.date.getDate());
            let hours = formatDate(this.date.getHours());
            let minutes = formatDate(this.date.getMinutes());
            this.date.getUTCDate()
            let result = year + '-' + month + '-' + day + " " + hours + ":" + minutes;
            return result;
        },
        add: function (value, command) {
            if(isValidCommand(value, command)) {
                operationDate(value, command, OPERATION_ADD, this.date);
            }
            else throw new TypeError();
            return this;
        },
        subtract: function (value, command) {
            if (isValidCommand(value, command)){
                operationDate(value, command, OPERATION_SUBTRACT, this.date);
            }else throw new TypeError();
            return this;
        }
    };

};

function operationDate(value, command, operation, currentDate) {
    switch (command) {
        case YEAR_COMMAND:{
            let changeYear = changeDate(currentDate.getFullYear(), value, operation);
            currentDate.setFullYear(changeYear);
            break;
        }case MONTHS_COMMAND:{
            let changeMonths = changeDate(currentDate.getMonth(), value, operation);
            currentDate.setMonth(changeMonths);
            break;
        }case DAYS_COMMAND:{
            let changeDays = changeDate(currentDate.getDate(), value, operation);
            currentDate.setDate(changeDays)
            break;
        }
        case HOURS_COMMAND: {
            let changeHours = changeDate(currentDate.getHours(), value, operation);
            currentDate.setHours(changeHours)
            break;
        }case MINUTES_COMMAND: {
            let changeMinutes = changeDate(currentDate.getMinutes(), value, operation)
            currentDate.setMinutes(changeMinutes)
            break;
        }
    }
}

function changeDate(date, newValue, operation) {
    if(operation === OPERATION_ADD) return parseInt(date) + parseInt(newValue);
    else return parseInt(date) - parseInt(newValue);
}


function formatDate(value) {
    if (value < 10) return  "0" + value;
    else return value
}

function isValidCommand(value, command) {
    return (value >= 0) && arrayCommands.includes(command);
}


