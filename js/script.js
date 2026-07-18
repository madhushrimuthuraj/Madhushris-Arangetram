/* =========================================================
   MADHUSHRI'S ARANGETRAM — site behavior
   1) Tab navigation between the 4 pages
   2) 8-page flippable program book
========================================================= */

/* ---------- 1) Tab navigation ---------- */
const tabButtons = document.querySelectorAll('.tab-btn');
const pages = document.querySelectorAll('.page');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.page;

    tabButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    pages.forEach(p => p.classList.remove('active'));
    document.getElementById(target).classList.add('active');
  });
});

/* ---------- 2) Program flipbook ----------
   EDIT ME: put your 8 program page scans/photos in the images
   folder using the file names below (program1.jpg ... program8.jpg),
   or change the paths here to whatever file names you'd like.
*/
const programPages = [
  "images/program1.jpg",
  "images/program2.jpg",
  "images/program3.jpg",
  "images/program4.jpg",
  "images/program5.jpg",
  "images/program6.jpg",
  "images/program7.jpg",
  "images/program8.jpg"
];

let currentPage = 0;

const bookPage = document.getElementById('bookPage');
const pageCounter = document.getElementById('pageCounter');
const prevBtn = document.getElementById('prevPage');
const nextBtn = document.getElementById('nextPage');

function renderPage() {
  const src = programPages[currentPage];
  bookPage.innerHTML = `
    <img src="${src}" alt="Program page ${currentPage + 1}"
         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
    <div class="placeholder">
      <span class="placeholder-title">INSERT IMAGE</span>
      <span class="placeholder-path">${src}</span>
    </div>`;
  pageCounter.textContent = `Page ${currentPage + 1} of ${programPages.length}`;
  prevBtn.disabled = currentPage === 0;
  nextBtn.disabled = currentPage === programPages.length - 1;
}

function flipTo(newIndex, direction) {
  if (newIndex < 0 || newIndex >= programPages.length) return;

  bookPage.classList.add(direction === 'next' ? 'turning-next' : 'turning-prev');

  setTimeout(() => {
    currentPage = newIndex;
    renderPage();
    bookPage.classList.remove('turning-next', 'turning-prev');
  }, 220);
}

prevBtn.addEventListener('click', () => flipTo(currentPage - 1, 'prev'));
nextBtn.addEventListener('click', () => flipTo(currentPage + 1, 'next'));

/* ---------- 3) Live Stream countdown ---------- */
const countdownEl = document.getElementById('countdown');
const countdownMessage = document.getElementById('countdownMessage');

if (countdownEl) {
  const targetDate = new Date(countdownEl.dataset.target);

  const dEl = document.getElementById('cd-days');
  const hEl = document.getElementById('cd-hours');
  const mEl = document.getElementById('cd-minutes');
  const sEl = document.getElementById('cd-seconds');

  function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      countdownEl.style.display = 'none';
      countdownMessage.textContent = "It's time! Welcome to Madhushri's Arangetram.";
      clearInterval(countdownInterval);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    dEl.textContent = String(days).padStart(2, '0');
    hEl.textContent = String(hours).padStart(2, '0');
    mEl.textContent = String(minutes).padStart(2, '0');
    sEl.textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  const countdownInterval = setInterval(updateCountdown, 1000);
}
renderPage();
