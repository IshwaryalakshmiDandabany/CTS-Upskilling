// 7) DOM Manipulation
const cardsEl = document.getElementById('cards');
const resetBtn = document.getElementById('resetBtn');

let events = [
  { name: 'Park Cleanup', date: '2099-06-01', seats: 2, location: 'Riverside Park' },
  { name: 'Food Drive', date: '2099-07-12', seats: 0, location: 'Community Center' },
  { name: 'Library Story Hour', date: '2099-08-02', seats: 3, location: 'Central Library' }
];

function getTemplate(ev) {
  return `
    <div><strong>${ev.name}</strong></div>
    <div class="muted">${ev.date} • ${ev.location}</div>
    <div>Seats left: <span data-seats="${ev.name}">${ev.seats}</span></div>
    <div class="row" style="margin-top:.5rem">
      <button type="button" data-action="register" data-name="${ev.name}">Register</button>
      <button type="button" data-action="cancel" data-name="${ev.name}">Cancel</button>
    </div>
  `;
}

function render() {
  cardsEl.innerHTML = '';

  events.forEach((ev) => {
    const card = document.createElement('div'); // createElement()
    card.className = 'card';
    card.innerHTML = getTemplate(ev);

    // append cards
    cardsEl.appendChild(card);
  });

  // Update UI when user registers or cancels
  cardsEl.querySelectorAll('button[data-action]').forEach((btn) => {
    btn.onclick = () => {
      const name = btn.getAttribute('data-name');
      const action = btn.getAttribute('data-action');
      const ev = events.find((e) => e.name === name);

      if (action === 'register') {
        // seats should never go below 0
        if (ev.seats <= 0) return alert('No seats available.');
        ev.seats--; // decrement
      }

      if (action === 'cancel') {
        ev.seats++; // increment
      }

      // Rerender to reflect UI changes
      render();
    };
  });
}

resetBtn.onclick = () => {
  events = [
    { name: 'Park Cleanup', date: '2099-06-01', seats: 2, location: 'Riverside Park' },
    { name: 'Food Drive', date: '2099-07-12', seats: 0, location: 'Community Center' },
    { name: 'Library Story Hour', date: '2099-08-02', seats: 3, location: 'Central Library' }
  ];
  render();
};

render();

