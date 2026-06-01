const out = document.getElementById('out');
function Event(name, date, seats, category) {
  this.name = name;
  this.date = date;
  this.seats = seats;
  this.category = category;
}

Event.prototype.checkAvailability = function () {
  return this.seats > 0;
};

const ev = new Event('Workshop on Baking', '2099-08-01', 4, 'workshop');

const entries = Object.entries(ev);

out.textContent = [
  'Event instance:',
  JSON.stringify(ev, null, 2),
  '',
  'checkAvailability(): ' + ev.checkAvailability(),
  '',
  'Object.entries():' ,
  entries.map(([k, v]) => `- ${k}: ${v}`).join('\n')
].join('\n');

console.log('keys/values via entries:', entries);

