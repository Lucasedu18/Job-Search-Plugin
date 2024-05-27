function run() {
  const input = JSON.parse(Host.inputString());
  const { search, location, remote } = input;

  const params = new URLSearchParams();
  if (search) params.append('search', search);
  if (location) params.append('location', location);
  if (remote) params.append('remote', remote);

  const request = {
    method: "GET",
    url: `https://findwork.dev/api/jobs/?${params.toString()}`,
    headers: {
      "Authorization": "Token your_api_key"
    }
  };

  const response = Http.request(request);

  if (response.status !== 200) {
    throw new Error(`HTTP request failed with status ${response.status}`);
  }

  const jobListings = JSON.parse(response.body);
  const table = [["Role", "Company", "Location", "URL"]];

  for (const job of jobListings.results) {
    table.push([job.role, job.company_name, job.location, job.url]);
  }

  const formattedTable = table.map(row => row.join(" | ")).join("\n");
  Host.outputString(formattedTable);
}

module.exports = { run };