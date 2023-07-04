const joke = document.getElementById('joke')
const jokeBTN = document.getElementById('joke-btn')

const getJoke = () => {
  const xhr = new XMLHttpRequest()
  xhr.open('GET','https://api.chucknorris.io/jokes/random')
  xhr.onreadystatechange = function() {
    if(this.status == 200 && this.readyState == 4) {
      const data = JSON.parse(this.responseText)
      joke.innerText = data.value
      console.log(data);
    }
  }
  
  xhr.send()
}

jokeBTN.addEventListener('click', getJoke)
document.addEventListener('DOMContentLoaded', getJoke);