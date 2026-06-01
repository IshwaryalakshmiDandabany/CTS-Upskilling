// 9) Async JS, Promises, Async/Await
const loadBtn = document.getElementById('loadBtn');
const spinner = document.getElementById('spinner');
const cardsEl = document.getElementById('cards');

const mockEndpoint = 'mock://events';

function mockFetch(url) {
  // Simulate a remote endpoint with Promise + setTimeout
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url !== mockEndpoint) return reject(new Error('Network error: bad endpoint'));

      resolve({
        ok: true,
        json: async () => [
          { name: 'Community Meetup', date: '2099-10-01', seats: 4, category: 'community', location: 'Town Hall' },
          { name: 'Outdoor Movie Night', date: '2099-10-12', seats: 6, category: 'outdoor', location: 'Main Park' }
        ]
      });
    }, 900);
  });
}

async function loadEventsAsyncAwait() {
  spinner.style.display = 'block';
  cardsEl.innerHTML = '';

  try {
    // Rewrite using async/await
    const res = await mockFetch(mockEndpoint);

    if (!res.ok) throw new Error('Response not OK');

    const data = await res.json();
    render(data);

  } catch (err) {
    console.error('Failed to load events:', err);
    alert('Failed to load events: ' + err.message);
  } finally {
    spinner.style.display = 'none';
  }
}

function render(events) {
  events.forEach((ev) => {
    const div = document.createElement('div');
    div.className = 'card';
    div.textContent = `${ev.name} • ${ev.date} • Seats: ${ev.seats} • ${ev.location}`;
    cardsEl.appendChild(div);
  });
}

// Also demonstrate .then() and .catch() (briefly)
function loadEventsThenCatchDemo() {
  spinner.style.display = 'block';
  cardsEl.innerHTML = '';

  mockFetch(mockEndpoint)
    .then((res) => res.json())
    .then((data) => render(data))
    .catch((err) => {
      console.error(err);
      alert('Error: ' + err.message);
    })
    .finally(() => {
      spinner.style.display = 'none';
    });
}

loadBtn.onclick = () => loadEventsAsyncAwait();

// Optional: run a .then() demo quickly in console
console.log('then/catch demo: call loadEventsThenCatchDemo() to see it');

