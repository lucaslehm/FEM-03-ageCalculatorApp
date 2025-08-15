// Lugar principal daonde vem os dados

const appData = {
    // Formulario
    form: () => document.querySelector('.age-calc-form'),
    day: () => document.querySelector('#day'),
    month: () => document.querySelector('#month'),
    year: () => document.querySelector('#year'),
    submitButton: () => document.querySelector('#submitButton'),

    // Resultado
    dayResult: () => document.querySelector('#dayResult'),
    monthResult: () => document.querySelector('#monthResult'),
    yearResult: () => document.querySelector('#yearResult'),

    // Labels
    dayLabel: () => document.querySelector('#dayLabel'),
    monthLabel: () => document.querySelector('#monthLabel'),
    yearLabel: () => document.querySelector('#yearLabel'),

    // Mensagens de erro
    dayErrorMessage: () => document.querySelector('#dayErrorMessageText'),
    monthErrorMessage: () => document.querySelector('#monthErrorMessageText'),
    yearErrorMessage: () => document.querySelector('#yearErrorMessageText')
}

// validar o campo dia
function validateDay() {
    const day = Number(appData.day().value)

    // verifica se o campo está vazio
    if (!day) {
        toggleError(
            true,
            appData.dayLabel(),
            appData.day(),
            appData.dayErrorMessage(),
            'Dia deve ser preenchido'
        )
        return
    }
    // dia tem que estar entre 0 e 31
    if (isDayValid(day)) {
        toggleError(
            false,
            appData.dayLabel(),
            appData.day(),
            appData.dayErrorMessage(),
        )
        toggleButtonDisable()
    } else {
        toggleError(
            true,
            appData.dayLabel(),
            appData.day(),
            appData.dayErrorMessage(),
            'Dia tem que estar entre 0 e 31'
        )
    }
}

function validateMonth() {
    const month = Number(appData.month().value)

    if (!month) {
        toggleError(
            true,
            appData.monthLabel(),
            appData.month(),
            appData.monthErrorMessage(),
            'Mês deve ser preenchido'
        )
        return
    }
    // mes tem que estar entre 0 e 12
    if (isMonthValid(month)) {
        toggleError(
            false,
            appData.monthLabel(),
            appData.month(),
            appData.monthErrorMessage(),
        )
        toggleButtonDisable()
    } else {
        toggleError(
            true,
            appData.monthLabel(),
            appData.month(),
            appData.monthErrorMessage(),
            'Mês tem que estar entre 0 e 12'
        )
    }
}


function validateYear() {
    const year = Number(appData.year().value)

    if (!year) {
        toggleError(
            true,
            appData.yearLabel(),
            appData.year(),
            appData.yearErrorMessage(),
            'Ano deve ser preenchido'
        )
        return
    }
    // Ano deve ser menor que 2025
    if (isYearValid(year)) {
        toggleError(
            false,
            appData.yearLabel(),
            appData.year(),
            appData.yearErrorMessage(),
        )
        toggleButtonDisable()
    } else {
        toggleError(
            true,
            appData.yearLabel(),
            appData.year(),
            appData.yearErrorMessage(),
            'Ano não pode ser maior que 2025'
        )
    }
}

function validDate(day, month, year) {

    if (day == '' || month == '' || year == '') {
        return false
    }

    if (validDayForTheMonth(day, month)) {
        return false
    }

    return true

}

function validDayForTheMonth(day, month) {
    if (month === 2) { return day > 28 ? true : false }
    if (month === 4 || month === 6 || month === 9 || month === 11) { return day > 30 ? true : false }
    return false
}

function isDayValid(day) {
    return day >= 1 && day <= 31 ? true : false
}

function isMonthValid(month) {
    return month >= 1 && month <= 12 ? true : false
}

function isYearValid(year) {
    return year <= 2025 ? true : false
}

function toggleButtonDisable() {
    const day = Number(appData.day().value)
    const month = Number(appData.month().value)
    const year = Number(appData.year().value)

    appData.submitButton().disabled = validDate(day, month, year) ? false : true
}


function toggleError(flag, label, input, errorBox, errorMessage = '') {
    if (flag) {
        label.classList.add('label-error')
        input.classList.add('input-error')
        errorBox.innerText = errorMessage
        errorBox.style.display = 'block'
    } else {
        label.classList.remove('label-error')
        input.classList.remove('input-error')
        errorBox.style.display = 'none'
    }
}

function makeResult(userDay, userMonth, userYear) {
    const currentDate = new Date()

    const currentDay = currentDate.getDay()
    const currentMonth = currentDate.getMonth() + 1
    const currentYear = currentDate.getFullYear()

    let yearResult
    let monthResult
    let dayResult

    // se o mes atual >= mesAniversario
    if (currentMonth >= userMonth) {
        yearResult = currentYear - userYear
    } else {
        
    }

}

appData.form().addEventListener('submit', function (e) {
    e.preventDefault()

    const day = Number(appData.day().value)
    const month = Number(appData.month().value)
    const year = Number(appData.year().value)

})
