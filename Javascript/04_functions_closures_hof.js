// 4) Functions, Scope, Closures, Higher-Order Functions
const cardsEl = document.getElementById('cards');
const categorySelect = document.getElementById('categorySelect');
const nameSearch = document.getElementById('nameSearch');
const registerRandomBtn = document.getElementById('registerRandomBtn');
const closureOut = document.getElementById('closureOut');

class Event {
  constructor({ name, date, seats, category, location }) {
    this.name = name;
    this.date = date;
    this.seats = seats;
    this.category = category;
    this.location = location;
  }
  checkAvailability() {
    return this.seats > 0;
  }
}

const events = [];

function addEvent(event) {
  events.push(event);
}

// Closure to track total registrations for a category
function createCategoryRegistrationTracker() {
  const totalsByCategory = {};
  return {
    register(category) {
      totalsByCategory[category] = (totalsByCategory[category] || 0) + 1;
    },
    snapshot() {
      return { ...totalsByCategory };
    }
  };
}

const tracker = createCategoryRegistrationTracker();

function registerUser(event) {
  if (!event.checkAvailability()) throw new Error('Event is full.');
  event.seats--; // seats management
  tracker.register(event.category);
}

// Pass callbacks to filter functions for dynamic search
function filterEventsByCategory(eventsList, category, predicateCallback) {
  return eventsList.filter((ev) => {
    const categoryMatch = category ? ev.category === category : true;
    const predicateMatch = predicateCallback ? predicateCallback(ev) : true;
    return categoryMatch && predicateMatch;
  });
}

// Seed events
addEvent(new Event({ name: 'Jazz Night', date: '2099-05-01', seats: 5, category: 'music', location: 'Town Hall' }));
addEvent(new Event({ name: 'Baking Basics Workshop', date: '2099-06-10', seats: 2, category: 'workshop', location: 'Community Center' }));
addEvent(new Event({ name: 'Park Yoga', date: '2099-05-20', seats: 3, category: 'outdoor', location: 'Riverside Park' }));
addEvent(new Event({ name: 'Classical Evening', date: '2099-05-25', seats: 1, category: 'music', location: 'Auditorium' }));

function render() {
  const category = categorySelect.value;
  const search = nameSearch.value.trim().toLowerCase();

  const filtered = filterEventsByCategory(
    events,
    category,
    (ev) => !search || ev.name.toLowerCase().includes(search)
  );

  cardsEl.innerHTML = '';

  filtered.forEach((ev) => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <strong>${ev.name}</strong><br/>
      <small>${ev.date} • ${ev.location} • ${ev.category}</small>
      <div>Seats left: ${ev.seats}</div>
      <button type="button" data-register="${ev.name}">Register</button>
    `;
    cardsEl.appendChild(div);
  });

  // onclick for Register buttons
  cardsEl.querySelectorAll('button[data-register]').forEach((btn) => {
    btn.onclick = () => {
      const name = btn.getAttribute('data-register');
      const ev = events.find((e) => e.name === name);
      try {
        registerUser(ev);
        render();
        closureOut.textContent = JSON.stringify(tracker.snapshot(), null, 2);
      } catch (e) {
        alert(e.message);
      }
    };
  });
}

categorySelect.onchange = () => render();
nameSearch.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') render();
});

registerRandomBtn.onclick = () => {
  const category = categorySelect.value;
  const search = nameSearch.value.trim().toLowerCase();
  const filtered = filterEventsByCategory(
    events,
    category,
    (ev) => !search || ev.name.toLowerCase().includes(search)
  );

  const first = filtered.find((ev) => ev.checkAvailability());
  if (!first) return alert('No available matching event found.');

  try {
    registerUser(first);
    render();
    closureOut.textContent = JSON.stringify(tracker.snapshot(), null, 2);
  } catch (e) {
    alert(e.message);
  }
};

render();
closureOut.textContent = JSON.stringify(tracker.snapshot(), null, 2);

