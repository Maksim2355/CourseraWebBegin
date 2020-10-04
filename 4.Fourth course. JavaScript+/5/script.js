'use strict';

function validateForm(classInfo) {
    let form = document.getElementById(classInfo.formId);
    let inputs = Array.from(document.querySelectorAll('#' + classInfo.formId + ' input'));

    form.addEventListener('focus', function (event) {
        let target = event.target;
        target.classList.remove(classInfo.inputErrorClass);
    }, true)

    form.addEventListener('blur', function (event) {
        let target = event.target;
        if (!isValidInput(target)) target.classList.add(classInfo.inputErrorClass);
    }, true)

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        form.classList.remove(classInfo.formValidClass);
        form.classList.remove(classInfo.formInvalidClass);

        let isValidForm = true;
        for(let i = 0; i < inputs.length; i++){
            let input = inputs[i];
            if (!isValidInput(input)){
                input.classList.add(classInfo.inputErrorClass);
                isValidForm = false;
            }
        }
        if (isValidForm) {
            form.classList.add(classInfo.formValidClass);
        }
        else {
            form.classList.add(classInfo.formInvalidClass);
        }
    }, true)

}

//Проверяет, корректный ли ввод пользователя
function isValidInput(input) {
    let value = input.value;
    let dataset = input.dataset;
    //если поле обязательно к заполнению и оно пустое
    if (dataset.hasOwnProperty('required') && !value) return false;

    return isValidValue(dataset, value)
}

function isValidValue(dataset, value) {

    switch (dataset.validator) {
        case 'letters': {
            return (new RegExp('^[a-zа-яё]+$', 'i')).test(value)
        }case 'number': {
            return isNumber(value, dataset)
        }case 'regexp': {
            return (new RegExp(dataset.validatorPattern)).test(value)
        } default: return false;
    }
}

function isNumber(value, dataset) {
    let min = dataset.validatorMin;
    let max = dataset.validatorMax;

    if (isNaN(value)) {
        return false;
    }
    if (min && parseInt(min) > value) {
        return false;
    }

    if (max && parseInt(max) < value) {
        return false;
    }
    return true;
}
