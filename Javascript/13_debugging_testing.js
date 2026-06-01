// 13) Debugging and Testing
const form = document.getElementById('debugForm');
const logEl = document.getElementById('debugLog');

function log(line) {
  const stamp = new Date().toLocaleTimeString();
  logEl.textContent += `[${stamp}] ${line}\n`;
  console.log(line);
}

function mockFetch(url, { body }) {
  // Mimic a network request so you can use DevTools Network tab
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ok: true,
        status: 200,
        json: async () => ({ message: 'ok', received: JSON.parse(body) })
      });
    }, 700);
  });
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  log('--- submit clicked ---');

  const name = form.elements['name'].value.trim();
  const email = form.elements['email'].value.trim();
  const event = form.elements['event'].value;

  // Breakpoints: set breakpoint on the next line in DevTools
  // debugger;
  const payload = { name, email, event };

  log('Form values read');
  log('payload = ' + JSON.stringify(payload));

  const body = JSON.stringify(payload);

  try {
    log('Sending request...');

    const res = await mockFetch('mock://register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body
    });

    log('Response status: ' + res.status);

    const data = await res.json();
    log('Response JSON: ' + JSON.stringify(data));

    alert('Debug submit succeeded. Check Console + Network for details.');
  } catch (err) {
    log('Fetch error: ' + err.message);
    alert('Debug submit failed: ' + err.message);
  }

  log('--- submit end ---');
});

