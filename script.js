// PRELOADER
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.style.opacity = '0';
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 800);
});

// GOOGLE SHEETS
document.addEventListener('DOMContentLoaded', () => {
  const SHEET_ID = '1h81aG47fkyyRUbLSsubxmNm1bda_W52Nu23coUMD69U';
  const API_KEY = 'AIzaSyCE8KBQuO3ZMASwsZtBzwAwLJYnmkcooaY';
  const RANGE = 'Sheet1!A:F';
  const grid = document.getElementById('events-grid');

  grid.innerHTML = '<p class="loading">Cargando eventos...</p>';

  fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`)
    .then(r => r.ok ? r.json() : Promise.reject(`Error ${r.status}`))
    .then(data => {
      grid.innerHTML = '';
      if (!data.values || data.values.length <= 1) {
        grid.innerHTML = '<p style="color:#999; text-align:center; padding:3rem;">No upcoming events.</p>';
        return;
      }

      data.values.slice(1).forEach(row => {
        const [nombre, fecha, lugar, botonTexto, link, foto] = row;
        if (!foto) return;

        const event = document.createElement('div');
        event.className = 'event-item';
        event.innerHTML = `
          <img src="${foto}" alt="${nombre}" class="event-image" onerror="this.src='assets/events/fallback.jpg'">
          <div class="event-info">
            <h3>${nombre}</h3>
            <p><strong>${fecha}</strong></p>
            <p>${lugar}</p>
            <a href="${link}" target="_blank" class="btn">${botonTexto || 'Get Tickets'}</a>
          </div>
        `;

        grid.appendChild(event);
      });
    })
    .catch(err => {
      grid.innerHTML = `<p style="color:#f66; text-align:center; padding:3rem;">Error: ${err}</p>`;
    });
});

// SCROLL SUAVE PARA MENÚ
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
