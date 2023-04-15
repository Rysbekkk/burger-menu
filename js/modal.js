
const modalButton = document.querySelector('.modalButton')
const modal = document.querySelector('.modal')
const backdropModal = document.querySelector('.modalBackdrop')
const krestik = document.querySelector('.modalCloseButton')
const apply = document.querySelector('.modalApplyButton')
const thankYou = document.querySelector('.thankYou')
const modalContent = document.querySelector('.modalContent')





let time


modalButton.addEventListener('click', () => {
    backdropModal.classList.add('modalBackdropActive')
    modal.classList.add('modalActive')
    thankYou.innerHTML = ''
    modalContent.classList.remove('hideContent')
})


const removeModalClasses = () => {
    if (time) {
        clearTimeout(time)
    }
    backdropModal.classList.remove('modalBackdropActive')
    modal.classList.remove('modalActive')

}

backdropModal.addEventListener('click', removeModalClasses)

krestik.addEventListener('click', removeModalClasses)

modal.addEventListener('click', (e) => {
    e.stopPropagation()
})

apply.addEventListener('click', () => {
    modalContent.classList.add('hideContent')
    thankYou.innerHTML = `
    <img src = 'ptichka.png' style="height: 100px; display: block; position: relative; margin: auto; top: 0;bottom: 0;left: 0;right: 0;">
    <h2>Thank You</h2>
    <p>Our operator will call you back</p>
    `
    time = setTimeout(removeModalClasses, 3000)
    console.log(time);
})


