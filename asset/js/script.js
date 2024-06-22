
const iconRotate = (selector) =>{
    document.querySelectorAll(selector).forEach(element =>{
        element.addEventListener('click', ()=>{
            let roateAble = element.querySelector('.js-rotate');
            roateAble.classList.toggle('rotate-180')
        })
    })
}


iconRotate('.dropdown')
iconRotate('.nav-link')


let sidebar = document.querySelector('.sidebar');

document.querySelectorAll('.menu').forEach(element =>{
    element.addEventListener('click', () => {
        if(sidebar.classList.contains('w-30')){
            sidebar.classList.add('w-0')
            sidebar.classList.add('p-0')
            sidebar.classList.remove('w-30')
        }else{
            sidebar.classList.add('w-30')
            sidebar.classList.remove('w-0')
            sidebar.classList.remove('p-0')
        }
    })
})