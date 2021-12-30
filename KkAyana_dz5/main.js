// document.title = "Header"
// const header = document.createElement('header')
// header.setAttribute('class', 'header')
//
// const ul= document.createElement("ul")
// // ul.setAttribute('class', 'ul')
//
// const li = document.createElement('li')
//
//
//


// const logo = createA('#', 'logo', 'Logo', 'Logo')
// const main = createA('#', 'main', 'Main', 'Main')
// const aboutUs = createA('#', 'aboutUs', 'About us', 'About us')
// const contacts = createA('#', 'contacts', 'Contacts', 'Contacts')
//
// function createButton(id, type, placeholder) {
//     const button = document.createElement('button')
//     button.setAttribute('id', id)
//     button.setAttribute('type', type)
//     button.setAttribute('placeholder', placeholder)
//     return button
// }
// const logIn = createButton('log_in', 'text', 'Log in')
// header.append(ul)
// ul.append(li)
// header.append(logo)
// li.append(main)
// li.append(aboutUs)
// li.append(contacts)
// li.append(logIn)
// document.body.append(header)
//

//
// createStyles(logo, 'width', '400px')
// createStyles(logo, 'height', '400px')
// createStyles(logo, 'fontSize', '20px')
// createStyles(logo, 'fontFamily', 'sanSerif')
// createStyles(logo, 'fontWeight', 'bold')

document.title = 'Header'
const header = document.createElement('header')

const div = document.createElement('div')
function createA(href, className) {
    const a = document.createElement('a')
    a.setAttribute('href', href)
    a.setAttribute('class', className)
    // a.setAttribute('type', type)
    // a.setAttribute('placeholder', placeholder)
    return a
}

const logo = createA('#', 'Logo')
logo.innerText='Logo'
const main = createA('#', 'Main')
main.innerText='Main'
const about_us = createA('#', 'About us')
about_us.innerText='About us'
const contact = createA('#', 'Contacts')
contact.innerText='Contacts'

div.append(logo)
div.append(main)
div.append(about_us)
div.append(contact)

const button = document.createElement('button')
button.innerText = 'Log in'

header.append(button)
header.append(div)

document.body.append(header)
function createStyles(element, style, value) {
    element.style[style] = value
}
createStyles(header, 'width', '400px')
createStyles(header, ' height', '400px')
createStyles(header, 'margin', '0 auto')
createStyles(header, 'border', ' 2px solid #000')
createStyles(header, 'display', 'flex')
createStyles(header, 'justify-content', 'space-between')
createStyles(header, 'background', '#885')
createStyles(logo, 'color', '#ffffff')
createStyles(logo, 'padding', '15px')
createStyles(main, 'padding', '15px')
createStyles(main, 'color', '#fff')
createStyles(about_us, 'padding', '15px')
createStyles(about_us, 'color', '#fff')
createStyles(contact, 'padding', '10px')
createStyles(contact, 'color', '#fff')
createStyles(button, 'background', '#777')
createStyles(button, 'color', '#000')