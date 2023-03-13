const url = "http://localhost:9090";

export default async function handleAPI(
  method,
  endpoint = "/todos",
  body = {}
) {
  try {
    const response = await fetch(url + endpoint, settings(method, body));
    console.log(endpoint)
    const data = await response.json();
    return data;
  } catch (e) {
    return e;
  }
}

function settings(method, body) {
  if (method === "DELETE" || method === "GET") return { method: method };

  if (body === {}) {
    return { method: method };
  }

  const Settings = {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  return Settings;
}
