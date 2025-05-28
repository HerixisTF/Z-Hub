const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.game-card');
const modalOverlay = document.getElementById('modalOverlay');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const downloadBtn = document.getElementById('downloadBtn');
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  cards.forEach(card => {
    const title = card.querySelector('h3').innerText.toLowerCase();
    card.style.display = title.includes(query) ? 'flex' : 'none';
  });
});
cards.forEach(card => {
  card.addEventListener('click', () => {
    const title = card.getAttribute('data-title') || '';
    const desc = card.getAttribute('data-desc') || '';
    const imgSrc = card.getAttribute('data-img') || '';
    const downloadLink = card.getAttribute('data-link') || '#';
    const modsLink = card.getAttribute('data-mods-link') || '#';
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modalImg.src = imgSrc;
    modalImg.alt = title;
    downloadBtn.href = downloadLink || '#';
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});
modalCloseBtn.addEventListener('click', () => {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
});
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
});