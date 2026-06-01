// 10) Modern JavaScript Features
const out = document.getElementById('out');

let events = [
  { name: 'Workshop on Baking', category: 'workshop', date: '2099-08-01', seats: 2 },
  { name: 'Music in the Park', category: 'music', date: '2099-08-10', seats: 0 },
  { name: 'Trail Cleanup', category: 'outdoor', date: '2099-08-20', seats: 5 }
];

// default parameter in functions + destructuring + spread clone
function formatEventCard({ name, date, seats }, prefix = '') {
  return `${prefix}${name} — ${date} — Seats: ${seats}`;
}

function filterByCategory(category = 'music', list = []) {
  // spread operator to clone event list before filtering
  const cloned = [...list];
  return cloned.filter(({ category: c }) => c === category);
}

const musicEvents = filterByCategory('music', events);
const workshopEvents = filterByCategory('workshop', events);

const lines = [
  '--- Modern JS demo ---',
  'Destructuring + template literals:',
  ...musicEvents.map((ev) => formatEventCard(ev)),
  '',
  'Default parameter example:',
  ...workshopEvents.map((ev) => formatEventCard(ev, 'Workshop: '))
];

out.textContent = lines.join('\n');
console.log('Modern JS output:', lines);

