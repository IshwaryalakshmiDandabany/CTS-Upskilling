// 2) Syntax, Data Types, and Operators
const out = document.getElementById('out');

const eventName = 'Neighborhood Workshop';
const eventDate = '2026-07-15';
let seats = 3;

function log(message) {
  console.log(message);
  out.textContent += `${message}\n`;
}

log(`Event: ${eventName}`);
log(`Date: ${eventDate}`);
log(`Starting seats: ${seats}`);

// Registration increases seats usage (decrement seats)
seats--; // ++/-- used to manage seat count on registration
log(`After registration (seats--): ${seats}`);

// Cancel registration
seats++; // increment back
log(`After cancellation (seats++): ${seats}`);

log(`Seat status: ${seats > 0 ? 'Available' : 'Sold out'}`);

log(`Full info: ${eventName} on ${eventDate} | Seats left: ${seats}`);

