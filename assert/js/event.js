const buyBtns = document.querySelectorAll('.js-container-buy')
const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')
function showModal (){
    modal.classList.add('open')
}

function hideModal (){
    modal.classList.remove('open')
}

for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click', showModal)
}
modalClose.addEventListener('click', hideModal)
modal.addEventListener('click',hideModal)
modalContainer.addEventListener('click', function(event){
    event.stopPropagation()
})