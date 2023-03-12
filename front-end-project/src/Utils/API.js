const url = "http://localhost:9090";

export default async function handleAPI(method, endpoint = "", body = {}) {
  if (method === "POST") {
    try {
      const response = await fetch(url + endpoint, settings(body));
      const data = await response.json();
      return data;
    } catch (e) {
      return e;
    }
  }
}

function settings(data = {}) {
  const postSettings = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  return postSettings
}
