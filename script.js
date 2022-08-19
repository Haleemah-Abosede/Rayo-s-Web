// fetching menu
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar' )

//adding eventlistener
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

//making the menu go away when page is scrolled
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}