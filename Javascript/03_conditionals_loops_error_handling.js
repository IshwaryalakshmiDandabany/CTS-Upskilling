// 3) Conditionals, Loops, and Error Handling
const listEl = document.getElementById('eventList');
const btn = document.getElementById('tryRegisterBtn');

// Simulated event dataset
const events = [
  { name: 'Past Event', date: '2020-01-01', seats: 10, location: 'Local' },
  { name: 'Full Event', date: '2099-02-10', seats: 0, location: 'Downtown' },
  { name: 'Upcoming Workshop', date: '2099-03-05', seats: 2, location: 'Community Center' },
  { name: 'Music Night', date: '2099-04-01', seats: 5, location: 'Town Hall' }
];

function isUpcomingAndHasSeats({ date, seats }) {
  const today = new Date();
  const eventDate = new Date(date);
  const upcoming = eventDate.getTime() >= new Date(today.toDateString()).getTime();
  // if-else to hide past/full events
  if (!upcoming) return false;
  if (seats <= 0) return false;
  return true;
}

function render() {
  listEl.innerHTML = '';

  // Loop through the event list and display using forEach()
  events.forEach((event) => {
    if (!isUpcomingAndHasSeats(event)) {
      // Hide past/full events
      return;
    }

    const div = document.createElement('div');
    div.className = 'card';

    div.innerHTML = `
      <strong>${event.name}</strong><br/>
      <small>${event.date} • ${event.location}</small>
      <div>Seats: <span data-seats="${event.name}">${event.seats}</span></div>
    `;

    listEl.appendChild(div);
  });
}

render();

// Wrap registration logic in try-catch to handle errors
btn.addEventListener('click', () => {
  try {
    // Intentionally try to register an invalid event to show error handling
    const selectedEventName = 'Non Existing Event';
    const ev = events.find((e) => e.name === selectedEventName);

    if (!ev) {
      throw new Error('Selected event not found.');
    }

    if (ev.seats <= 0) {
      throw new Error('No seats available.');
    }

    ev.seats--;
    console.log('Registered successfully');
  } catch (err) {
    console.error('Registration failed:', err);
    alert(`Registration failed: ${err.message}`);
  }
});

