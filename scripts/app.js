// Objeto principal aonde vao ficar os dados
// Main object where the data will be stored
const appData = {
    // Formulário - Form
    form: () => document.querySelector('.age-calc-form'),
    day: () => document.querySelector('#day'),
    month: () => document.querySelector('#month'),
    year: () => document.querySelector('#year'),
    submitButton: () => document.querySelector('#submitButton'),

    // divs de resultado - results divs
    dayResult: () => document.querySelector('#dayResult'),
    monthResult: () => document.querySelector('#monthResult'),
    yearResult: () => document.querySelector('#yearResult'),

    // Labels
    dayLabel: () => document.querySelector('#dayLabel'),
    monthLabel: () => document.querySelector('#monthLabel'),
    yearLabel: () => document.querySelector('#yearLabel'),

    // Mensagens de erro - Error messages
    dayErrorMessage: () => document.querySelector('#dayErrorMessageText'),
    monthErrorMessage: () => document.querySelector('#monthErrorMessageText'),
    yearErrorMessage: () => document.querySelector('#yearErrorMessageText')
}

// Validar o campo dia - Validate the day field
function validateDay() {
    const day = Number(appData.day().value)

    // Verifica se o campo está vazio - Checks if the field is empty
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
    // dia tem que estar entre 0 e 31 - Day must be between 0 and 31
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

// Validar o campo mês - Validate the month field
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
    // Mes tem que estar entre 0 e 12 - Month must be between 0 and 12
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

// Validar o campo ano - Validate the year field
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
    // Ano deve ser menor que 2025 e maior que 1800
    // Year must be less than 2025 and greater than 1800
    if (isYearValid(year) && year > 1800) {
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
            `Ano deve estar entre ${new Date().getFullYear()} e 1800`
        )
    }
}

// Verifica se é uma data valida - Check if it is a valid date
function validDate(day, month, year) {

    if (day == '' || month == '' || year == '') { return false }

    if (day <= 0 || month <= 0 || year <= 0) { return false }

    if (isInvalidDayForTheMonth(day, month, year)) { return false }

    return true

}

// Verificar se o dia é valido para o mes inserido
// Check if the day is valid for the month entered
function isInvalidDayForTheMonth(day, month, year) {
    if (month === 2 && isLeapYear(year)) { return day > 29 ? true : false }
    if (month === 2) { return day > 28 ? true : false }
    if (month === 4 || month === 6 || month === 9 || month === 11) { return day > 30 ? true : false }
    return false
}

// Valida o dia - Day check
function isDayValid(day) {
    return day >= 1 && day <= 31 ? true : false
}

// Valida o mês - Month check
function isMonthValid(month) {
    return month >= 1 && month <= 12 ? true : false
}

// Valida o ano - Year check
function isYearValid(year) {
    return year <= new Date().getFullYear() ? true : false
}

// Ativa e desativa o botao caso necessario - Activate and deactivate the button if necessary
function toggleButtonDisable() {
    const day = Number(appData.day().value)
    const month = Number(appData.month().value)
    const year = Number(appData.year().value)

    appData.submitButton().disabled = validDate(day, month, year) ? false : true
}

// Lança mensagens de erro - Throws error messages
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

// Funcao que faz o resultado de fato - Function that actually makes the result
function makeResult(userDay, userMonth, userYear) {
    const currentDate = new Date()

    const currentDay = currentDate.getDate()
    const currentMonth = currentDate.getMonth()
    const currentYear = currentDate.getFullYear()

    let yearResult
    let monthResult
    let dayResult

    if (currentMonth > userMonth) { yearResult = currentYear - userYear}

    if (currentMonth === userMonth) {
        if (currentDay >= userDay) {
            yearResult = currentYear - userYear
        } else {
            yearResult = (currentYear - userYear) - 1
        }
    }

    if (currentMonth < userMonth) { yearResult = (currentYear - userYear) - 1 }

    monthResult = currentDay >= userDay ? currentMonth - userMonth + 1 : ((currentMonth - userMonth) - 1) + 1

    if (monthResult < 0) monthResult += 12

    dayResult = currentDay >= userDay ? currentDay - userDay : HowManyDays(currentMonth - 1, currentYear) - (userDay - currentDay)


    const dayResultField = appData.dayResult()
    const monthResultField = appData.monthResult()
    const yearResultField = appData.yearResult()

    animateResult(dayResult, dayResultField)
    animateResult(monthResult, monthResultField)
    animateResult(yearResult, yearResultField)

}

// Funcao que verifica quantos dias teve no mes anterior
// Function that checks how many days you had in the previous month
function HowManyDays(month, year) {
    if (month < 0) return 11
    if (month === 1 && isLeapYear(year)) return 29
    if (month === 1) { return 28 }
    if (month === 3 || month === 5 || month === 8 || month === 10) { return 30 }
    return 31
}

// Funcao par "animar" o resultado - Function to "animate" the result
function animateResult(finalValue, field) {
    let i = 0
    const interval = setInterval(() => {
        field.innerText = i
        i++
        if (i > finalValue) {
            clearInterval(interval)
        }
    }, 50)
}

// Escutador de evento do form para chamar a funcao de resultado
// Form event listener to call the result function
appData.form().addEventListener('submit', function (e) {
    e.preventDefault()

    const day = Number(appData.day().value)
    const month = Number(appData.month().value)
    const year = Number(appData.year().value)

    makeResult(day, month, year)
})

// Funcao para saber se o ano é ou nao bissexto
// Function to know if the year is a leap year or not
const isLeapYear = (year) => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)