let beginModal = document.querySelector('.begin-modal')
let beginModalclose = document.querySelector('.begin-modal__close')
function hideBeginModal(){
    beginModal.classList.add('close')
}
beginModalclose.addEventListener('click', hideBeginModal)