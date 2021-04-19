// ex. 7
let btn7 = document.getElementById('7')
let title = true
btn7.onclick = function() {
    if(title){
        document.getElementById('shop_title').innerText = 'New Shop Title'
    } else {
        document.getElementById('shop_title').innerText = 'Everything You Can Find Shop'
    }
    title = !title
}

// ex. 8
let btn8 = document.getElementById('8')
let bg = true
btn8.onclick = function() {
    if(bg){
        document.getElementsByTagName('body')[0].style.backgroundColor = 'yellow'
    } else {
        document.getElementsByTagName('body')[0].style.backgroundColor = 'white'
    }
    bg = !bg
}

// ex. 9
let btn9 = document.getElementById('9')
let footerName = true
btn9.onclick = function() {
    if(footerName){
        document.querySelectorAll('footer p')[1].innerText = 'Stefano Casasola'
    } else {
        document.querySelectorAll('footer p')[1].innerText = 'Viljams Carevs'
    }
    footerName = !footerName
}

// ex. 10
let btn10 = document.getElementById('10')
let classAdded = true
btn10.onclick = function() {
    let links = document.getElementsByTagName('a')
    if(classAdded){
        for(link of links) {
            link.classList.add('new-class')
        }
    } else {
        for(link of links) {
            link.classList.remove('new-class')
        }
    }
    classAdded = !classAdded
}

// ex. 11
let btn11 = document.getElementById('11')
let imgVisible = true
btn11.onclick = function() {
    let imgs = document.getElementsByTagName('img')
    if(imgVisible){
        for(img of imgs) {
            img.classList.add('img-invisible')
        }
    } else {
        for(img of imgs) {
            img.classList.remove('img-invisible')
        }
    }
    imgVisible = !imgVisible
}

// ex. 12
let btn12 = document.getElementById('12')
let colors = ['blue', 'red', 'green', 'yellow', 'purple', 'white']
btn12.onclick = function() {
    let prices = document.getElementsByClassName('price')
    for(price of prices) {
        price.style.color = colors[Math.floor(Math.random()*colors.length)]
    }
}