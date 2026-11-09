async function testReport() {
  const loginRes = await fetch("http://127.0.0.1:5000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "admin@dietnexa.com", password: "admin123" }),
  });
  const loginData = await loginRes.json();
  const token = loginData.token;

  const res = await fetch("http://127.0.0.1:5000/api/leads/reports?limit=10&page=1", {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await res.json();
  console.log("FULL_REPORT_RESP:", JSON.stringify({
    success: data.success,
    totalDeals: data.deals ? data.deals.length : 0,
    totalCount: data.pagination ? data.pagination.total : null,
    deals: data.deals ? data.deals.map(d => ({ name: d.dealName, company: d.company, stage: d.stage, value: d.expectedValue })) : []
  }));
}
testReport();
