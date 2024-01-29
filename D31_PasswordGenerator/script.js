const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')

const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol

}

//copy paste paswword
clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText

    if (
        !password
    ) {
        return
    }
    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('The password is copied to clipboard')
})

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasSymbol = symbolsEl.checked
    const hasNumber = numbersEl.checked
    console.log("here ", hasLower, hasUpper, hasNumber, hasSymbol)
    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)

})

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].
        filter(item =>
            Object.values(item)[0]
        )
    if (typesCount === 0) {
        return ''
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
        })
    }
    const finalPassword = generatedPassword.slice(0, length)
    return finalPassword

}
function getRandomLower() {
    //static String.fromCharCode() method returns a string created from the specified sequence of UTF-16 code units

    return String.fromCharCode(Math.floor(Math.random() * 26) + 97) //a is 97

}

function getRandomUpper() {
    //static String.fromCharCode() method returns a string created from the specified sequence of UTF-16 code units

    return String.fromCharCode(Math.floor(Math.random() * 26) + 65) //A is 65

}

function getRandomNumber() {
    //static String.fromCharCode() method returns a string created from the specified sequence of UTF-16 code units

    return String.fromCharCode(Math.floor(Math.random() * 26) + 48) //0 is 48

}
function getRandomSymbol() {
    //static String.fromCharCode() method returns a string created from the specified sequence of UTF-16 code units
    const symbols = '!@#$%^&*()_+'
    return symbols[Math.floor(Math.random() * symbols.length)]

}
console.log(getRandomLower())