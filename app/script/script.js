const adviceApi = async ()=> {
     const response  = await fetch('https://api.adviceslip.com/advice')
     const data = await response.json()
     document.getElementById("adviceId").innerHTML = data.slip.id
     document.getElementById("adviceQuote").innerHTML = data.slip.advice
}
const adviceBtn = document.getElementById('adviceBtn')
adviceBtn.addEventListener('click', handleAdvice)
function handleAdvice(){
    adviceApi()
    adviceBtn.classList.add("clicked")
    setTimeout(() => {
        adviceBtn.classList.remove("clicked")
    }, 300);
}