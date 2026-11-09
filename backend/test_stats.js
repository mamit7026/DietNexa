async function test() {
  const loginRes = await fetch('http://127.0.0.1:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'admin@dietnexa.com', password: 'admin123' })
  });
  const { token } = await loginRes.json();
  const statsRes = await fetch('http://127.0.0.1:5000/api/leads/stats', {
    headers: { Authorization: `Bearer ${token}` }
  });
  const data = await statsRes.json();
  console.log('FULL_DATA:', JSON.stringify(data));
}
test();
