let white = document.querySelector('.white')
let grey = document.querySelector('.grey')
let w = document.querySelector('.p2')
let img = document.querySelector('.img')
let p3 = document.querySelector('.p3')
let box = document.querySelector('.boxx')
let btn1 = document.querySelector('.btn')
let btn2 = document.querySelector('.btn2')
let bbtn = document.querySelector('.b')
let bbtn2 = document.querySelector('.b2')


//btn white
white.onclick = () => {
    w.innerHTML = 'White'
    box.classList.remove('img1')
    box.classList.add('img')
    bbtn2.classList.remove('click_grey')
    bbtn2.classList.add('btn2')
    bbtn.classList.remove('btn')
    bbtn.classList.add('click_white')
}


//btn grey
grey.onclick = () => {
    w.innerHTML = 'Space Grey'
    box.classList.remove('img')
    box.classList.add('img1')
    bbtn.classList.remove('click_white')
    bbtn.classList.add('btn')
    bbtn2.classList.remove('btn2')
    bbtn2.classList.add('click_grey')
}

//TB    

let m512 = document.querySelector('.m512')
let m1 = document.querySelector('.m1')
let m2 = document.querySelector('.m2')
let m4 = document.querySelector('.m4')

let remove = (div1, div2, div3) => {
    div1.classList.remove('onclick')
    div2.classList.remove('onclick')
    div3.classList.remove('onclick')
}

m512.onclick = () => {
    p3.innerHTML = '$1.999'
    m512.classList.add('onclick')
    remove(m1, m2, m4)
}

m1.onclick = () => {
    p3.innerHTML = '$2.199'
    m1.classList.add('onclick')
    remove(m512, m2, m4)
}

m2.onclick = () => {
    p3.innerHTML = '$2.599'
    m2.classList.add('onclick')
    remove(m512, m1, m4)
}

m4.onclick = () => {
    p3.innerHTML = '$3.199'
    m4.classList.add('onclick')
    remove(m512, m1, m2)
}

//night_mode
let night_mode = document.querySelector('.bt')
let link = document.querySelector('link')
let pp = document.querySelector('.pp')


night_mode.onclick = () => {
    if (link.getAttribute('href') == 'css/style.css') {
        link.setAttribute('href', 'css/style2.css')
        night_mode.style.marginLeft = '69px'
        pp.innerText = 'Lightmode'
    } else {
        link.setAttribute('href', 'css/style.css')
        night_mode.style.marginLeft = '15px'
        pp.innerText = 'Nightmode'
    }
}

//header
let a1 = document.querySelector('#a1')
let head = document.querySelector('.head')
let head_h = head.clientHeight

function header(event) {
    event.preventDefault()
    window.scrollTo({
        top: head,
        left: 0,
        behavior: 'smooth',
    })
}

a1.addEventListener('click', header)

//section1
let a2 = document.querySelector('#a2')
let s1 = document.querySelector('.sec1')
let section_h = s1.clientHeight

function sectoion1(event) {
    event.preventDefault()
    s1.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
    })
}

a2.addEventListener('click', sectoion1)

//section2
let a3 = document.querySelector('#a3')
let s2 = document.querySelector('.sec2')
let section2_h = s2.clientHeight

function sectoion2(event) {
    event.preventDefault()
    s2.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
    })
}

a3.addEventListener('click', sectoion2)