class UI {
  constructor(){}
  async getRandomAD(url){
   const response = await fetch(url)
   const response2 = await response.json()
   return response2
  }
  displayAD(adviceArr){
    const adNO = document.querySelector('#advice-no')
    const adText = document.querySelector('#advice-text')
    adNO.innerHTML = `ADVICE ${adviceArr.id}`
    adText.innerHTML = `${adviceArr.advice}`
  }
}
const ui = new UI()
const Btn = document.querySelector('button')
Btn.addEventListener('click', (e)=>{
  ui.getRandomAD('https://api.adviceslip.com/advice')
  .then((res)=>{
 ui.displayAD(res.slip)
  })
  .catch((e)=>{
   console.log(e.message)
  })
  e.preventDefault()
})