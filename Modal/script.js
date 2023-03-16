/* eslint-disable no-console */
const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

console.log(btnOpenModal);


const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const openModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for(let i = 0; i < btnOpenModal.length; i+=1){
    btnOpenModal[i].addEventListener('click', openModal);

     btnCloseModal.addEventListener('click', closeModal);

     overlay.addEventListener('click', closeModal);
}

document.addEventListener('keydown', (e) => {
    console.log(e.key);
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
})