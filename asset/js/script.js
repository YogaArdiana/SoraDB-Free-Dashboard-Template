document.querySelectorAll('.dropdown').forEach(element =>{
    element.addEventListener('click', ()=>{
        let roateAble = element.querySelector('.js-rotate');
        roateAble.classList.toggle('rotate-180')
    })
})
