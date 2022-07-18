'use strict';
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    console.log('current class name: ' + className);
    if(className === "light-theme") {
        console.log('current class name: ' + 1);
        this.textContent ="Dark";
    } else {
        this.textContent = "Light";
        console.log('current class name: ' + 1);
    }
    console.log('current class name: ' + className);
});