// 8) Event Handling
const cardsEl = document.getElementById('cards');
const categoryFilterEl = document.getElementById('categoryFilter');
const nameInputEl = document.getElementById('nameInput');

let events = [
  { name: 'Jazz Night', category: 'music', seats: 2, date: '2099-05-01' },
  { name: 'Baking Basics Workshop', category: 'workshop', seats: 1, date: '2099-06-10' },
  { name: 'Park Yoga', category: 'outdoor', seats: 3, date: '2099-05-20' },
  { name: 'Classical Evening', category: 'music', seats: 0, date: '2099-05-25' }
];

function getFilteredEvents() {
  const category = categoryFilterEl.value;
  const search = nameInputEl.value.trim().toLowerCase();

  return events.filter((ev) => {
    const catOk = category === 'all' ? true : ev.category === category;
    const nameOk = !search ? true : ev.name.toLowerCase().includes(search);
    return catOk && nameOk;
  });
}

function render() {
  cardsEl.innerHTML = '';
  getFilteredEvents().forEach((ev) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <strong>${ev.name}</strong><br/>
      <small>${ev.category} • ${ev.date}</small>
      <div>Seats left: ${ev.seats}</div>
      <button type="button" onclick="registerEvent('${ev.name}')">Register</button>
    `;
    cardsEl.appendChild(card);
  });
}

// onchange handler (connected via HTML attribute)
function onCategoryChange() {
  render();
}

// keydown handler (connected via HTML attribute)
function onNameKeydown(e) {
  if (e.key === 'Enter') render();
}

// onclick for Register buttons (connected via HTML attribute)
function registerEvent(name) {
  const ev = events.find((x) => x.name === name);
  if (!ev) return;
  if (ev.seats <= 0) return alert('No seats available.');
  ev.seats--;
  render();
}

render();

