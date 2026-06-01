// 12) AJAX & Fetch API
const form = document.getElementById('ajaxForm');
const spinner = document.getElementById('ajaxSpinner');
const messageEl = document.getElementById('ajaxMessage');

// Mock fetch POST endpoint using a function (so the exercise works without a real server)
function mockPost(url, payload) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // simulate random failure for demonstration
      const fail = payload.email.includes('fail');
      if (fail) return reject(new Error('Server rejected registration'));

      resolve({
        ok: true,
        status: 201,
        body: { confirmationId: 'EVT-' + Math.floor(Math.random() * 90000 + 10000) }
      });
    }, 900); // setTimeout to simulate delayed response
  });
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  spinner.style.display = 'block';
  messageEl.style.display = 'none';

  const name = form.elements['name'].value.trim();
  const email = form.elements['email'].value.trim();
  const selectedEvent = form.elements['event'].value;

  const payload = { name, email, event: selectedEvent };

  try {
    // Use fetch() to POST (using a mock fetch-like call)
    const res = await mockPost('mock://register', payload);

    if (!res.ok) throw new Error('POST failed');

    messageEl.className = 'msg ok';
    messageEl.textContent = `Success! Confirmation ID: ${res.body.confirmationId}`;
    messageEl.style.display = 'block';
  } catch (err) {
    console.error('POST error:', err);
    messageEl.className = 'msg bad';
    messageEl.textContent = 'Registration failed: ' + err.message;
    messageEl.style.display = 'block';
  } finally {
    spinner.style.display = 'none';
  }

  console.log('fetch POST payload:', payload);
});

