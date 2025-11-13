// ===== PRELOADER =====
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";
  setTimeout(() => preloader.style.display = "none", 800);
});

// ===== EVENTOS DE EJEMPLO (puedes conectar API más adelante) =====
document.addEventListener("DOMContentLoaded", () => {
  const eventsGrid = document.getElementById("events-grid");
  eventsGrid.innerHTML = `
    <div class="event-item">
      <img src="assets/event1.jpg" alt="Event 1" class="event-image">
      <div class="event-info">
        <h3>VIP PLUS - PESK 2026</h3>
        <p>Jueves 12 al 17 de febrero · 9PM</p>
        <p>Coclé, Penonomé</p>
        <a href="#">GET TICKETS</a>
      </div>
    </div>

    <div class="event-item">
      <img src="assets/event2.jpg" alt="Event 2" class="event-image">
      <div class="event-info">
        <h3>SZN IS BACK</h3>
        <p>Date: TBA</p>
        <p>Secret Location</p>
        <a href="#">TICKETS AVAILABLE SOON</a>
      </div>
    </div>

    <div class="event-item">
      <img src="assets/event3.jpg" alt="Event 3" class="event-image">
      <div class="event-info">
        <h3>ROAD TO PESK</h3>
        <p>Date: TBA</p>
        <p>Coclé, Penonomé</p>
        <a href="#">TICKETS AVAILABLE SOON</a>
      </div>
    </div>
  `;
});
