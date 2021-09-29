const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    hoursNumber = document.querySelector('.hours'),
    minutesNumber = document.querySelector('.minutes')

// console.log(hoursNumber);
// console.log(minutesNumber);

// let time = new Date()

// console.log(time);

function clock() {
    /* 
        new Date() - получает время с компьютера
        getHours() - получает часы с ПК
        getSeconds() - получает секунды с ПК
        getMinutes() - получает минуты с ПК
    */

    let time = new Date(),
        second = time.getSeconds() * 6,
        minutes = time.getMinutes() * 6,
        hours = time.getHours() * 30;


    hour.style = `transform: rotate(${hours}deg)`;
    sec.style = `transform: rotate(${second}deg)`;
    min.style = `transform: rotate(${minutes}deg)`;


    hoursNumber.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    minutesNumber.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()


    // Рекурсия - это когда функция вызывается внутри себя

    setTimeout(() => clock(), 1000);
}

clock()


const links = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem');



for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e) {
        e.preventDefault();
        removeActiveClass()
        addActiveClass(this, tabs[i])
    })
}

function removeActiveClass() {
    links.forEach(link => {
        link.classList.remove('active')
    })

    tabs.forEach(tab => {
        tab.classList.remove('active')
    })
}


function addActiveClass(element, arr) {
    element.classList.add('active')
    arr.classList.add('active')
}


const watchBtn = document.querySelector('.stopwatch__btn'),
    watchSeconds = document.querySelector('.stopwatch__seconds'),
    watchMinutes = document.querySelector('.stopwatch__minutes'),
    watchHours = document.querySelector('.stopwatch__hours')


watchBtn.addEventListener('click', function () {
    if (this.innerHTML == 'start') {
        this.innerHTML = 'stop'

        let timer = 0

        setTimeout(() => timerWatch(this, timer), 1000)

    } else if (this.innerHTML == 'stop') {
        this.innerHTML = 'reset'
    } else {
        this.innerHTML = 'start'

        watchSeconds.innerHTML = 0
        watchMinutes.innerHTML = 0
        watchHours.innerHTML = 0
    }
})



function timerWatch(element, i) {
    if(element.innerHTML == 'stop') {
        if(i == 60) {
            i = 0;
            watchSeconds.innerHTML = i
            if(watchMinutes == 59) {
                watchMinutes.innerHTML = 0
                watchHours.innerHTML++
            }else {
                watchMinutes.innerHTML++
            }
        }else {
            i++
            watchSeconds.innerHTML = i
        }

        setTimeout(() => timerWatch(element, i), 1000)
    }
}
