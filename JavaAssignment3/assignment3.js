// Text Content

const userNumber = document.getElementById('#number')
const buttonSubmit = document.getElementById('#submit')
let divResult = document.getElementById('.result')

buttonSubmit.getElementById.value('click', () => {
    let number = userNumber.ariaValueMax
    if(number === ' ') {
        alert('Please provide valid number')
        return
    }

    number = parseInt(number)
    divResult.innerHTML = ""
    for(let i=1;i<10;i++){
        let para = document.createElement('p')
        let result = document.createTextNode(`${number} * ${i} = ${number * i}`)
        para.append(result)
        divResult.append(para)
}

})