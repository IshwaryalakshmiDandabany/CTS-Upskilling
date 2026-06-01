// 6) Arrays and Methods
const addBtn = document.getElementById('addBtn');
const musicList = document.getElementById('musicList');
const cardsOut = document.getElementById('cardsOut');

let events = [
  { name: 'Jazz Night', category: 'music', date: '2099-05-01' },
  { name: 'Baking Basics Workshop', category: 'workshop', date: '2099-06-10' },
  { name: 'Classical Evening', category: 'music', date: '2099-05-25' }
];

function render() {
  const musicEvents = events.filter((e) => e.category === 'music'); // .filter show only music events

  musicList.innerHTML = '';
  musicEvents.forEach((ev) => {
    const div = document.createElement('div');
    div.className = 'card';
    div.textContent = `${ev.name} (${ev.date})`;
    musicList.appendChild(div);
  });

  // .map to format display cards
  const cards = events.map((ev) => `• ${ev.name} — ${ev.category.toUpperCase()} — ${ev.date}`);
  cardsOut.textContent = cards.join('\n');
}

addBtn.onclick = () => {
  // Add new events using .push()
  events.push({ name: 'Neighborhood Choir', category: 'music', date: '2099-09-12' });
  render();
};

render();

