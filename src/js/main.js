const $ = document.querySelector.bind(document)
const mainContainer = $('.container-main')
const summCredit = $('.inputSummCredit');
const monthCredit  = $('.inputTimeCredit');
const rate  = $('.inputInterest');
const buttonSumm = $('.container__button');
const inputText = $('.inputText')

mainContainer.addEventListener(('click'), (event) => {
    if(event.target.closest('.container__button')) {
       let summ = +summCredit.value
       let month = +monthCredit.value
       let rateItog = +rate.value
       let totalOverpayment = ((summ * rateItog) / 100)
       let monthlyTotal = (totalOverpayment / month).toFixed(2)
       if(summ == "" || month == "" || rateItog == "" ) {
        alert('Введите значение')
        return
    }
       inputText.innerHTML = `<span class = "lastSpan">Общая переплата по процентам: ${totalOverpayment}<br>
       Ежемесячный платеж : ${monthlyTotal }</span>`
     
    }
  
})

