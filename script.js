// Hover effect
const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.style.setProperty('--h2-background-color', 'rgb(75, 70, 74)');
  card.style.setProperty('--h2-color', '#fff');
});

// Modal
const modalElement = document.getElementById('customModal');
console.log(modalElement);

function handleModal(action) {
  const currentElement = event.target;
  
  if (currentElement.closest('article')) {
    let cardHeader = currentElement.closest('article').querySelector('h2').textContent;
    modalElement.querySelector('.modal-header').innerHTML = cardHeader + ' Project';
  }  
  
  modalElement.style.display = action ? 'block' : 'none';
}
