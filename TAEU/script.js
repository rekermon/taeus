// Función para navegar entre pantallas
function navigateTo(screen) {
  const screens = document.querySelectorAll('.screen');
  screens.forEach(screenElement => {
    screenElement.style.display = 'none';
  });
  document.getElementById(`${screen}-screen`).style.display = 'block';

  // Mostrar el pop-up con la opción actual
  showPopup(`Estás en la sección de ${screen.replace('-', ' ')}`);
}

// Función para mostrar el pop-up
function showPopup(message) {
  const popup = document.getElementById('popup');
  const popupMessage = document.getElementById('popup-message');
  popupMessage.textContent = message;
  popup.style.display = 'block';
}

// Función para cerrar el pop-up
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

// Función para navegar hacia atrás (pantalla de inicio)
function navigateBack() {
  navigateTo('main'); // Regresar siempre a la pantalla de inicio
}

// Cargar vuelos en la pantalla de horarios
const flightData = [
  { code: "SN001", route: "CDMX", time: "06:00 - 07:30", airline: "Aeroméxico", status: "A tiempo" },
  { code: "SN002", route: "Guadalajara", time: "07:00 - 08:30", airline: "Volaris", status: "Retrasado" },
  { code: "SN003", route: "Monterrey", time: "07:30 - 09:00", airline: "Viva Aerobus", status: "A tiempo" },
  { code: "SN004", route: "Tijuana", time: "08:00 - 09:30", airline: "Interjet", status: "A tiempo" },
  { code: "SN005", route: "Cancún", time: "08:30 - 10:00", airline: "Aeroméxico", status: "A tiempo" },
  { code: "SN006", route: "CD Juárez", time: "07:30 - 09:00", airline: "Interjet", status: "A tiempo" },
  { code: "SN007", route: "Guadalajara", time: "08:00 - 09:30", airline: "Aeroméxico", status: "A tiempo" },
  { code: "SN008", route: "Culiacán", time: "08:30 - 10:00", airline: "Volaris", status: "A tiempo" },
  { code: "SN009", route: "Aguascalientes", time: "09:00 - 10:30", airline: "Aeroméxico", status: "A tiempo" },
  { code: "SN010", route: "San Luis Potosí", time: "09:30 - 11:00", airline: "Volaris", status: "A tiempo" },
  { code: "SN011", route: "Mazatlán", time: "10:00 - 11:30", airline: "Viva Aerobus", status: "A tiempo" },
  { code: "SN012", route: "Veracruz", time: "10:30 - 12:00", airline: "Aeroméxico", status: "A tiempo" },
  { code: "SN013", route: "Hermosillo", time: "11:00 - 12:30", airline: "Volaris", status: "A tiempo" },
  { code: "SN014", route: "Los Ángeles", time: "11:30 - 13:00", airline: "American Airlines", status: "A tiempo" },
  { code: "SN015", route: "Houston", time: "12:00 - 13:30", airline: "Viva Aerobus", status: "A tiempo" }
];

// Mostrar los vuelos en la pantalla de horarios
const flightList = document.getElementById('flight-list');
flightData.forEach(flight => {
  const li = document.createElement('li');
  li.textContent = `Vuelo ${flight.code} - ${flight.route} - ${flight.time} - ${flight.airline} - ${flight.status}`;
  flightList.appendChild(li);
});
