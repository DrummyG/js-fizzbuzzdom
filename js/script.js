const cont = document.getElementById('container')

for (let i = 1; i <= 100; i++){
    if(i % 15 == 0) {
        cont.innerHTML += `<p class="big">${i} FizzBuzz</p>`
    } else if(i % 5 == 0) {
        cont.innerHTML +=`<p class="medium">${i} Buzz</p>`
    } else if(i % 3 == 0) {
        cont.innerHTML +=`<p class="small">${i} Fizz</p>`
    }
}

