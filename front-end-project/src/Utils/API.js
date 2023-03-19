const url = "http://localhost:9090";

export default async function handleAPI(
  method,
  endpoint = "/todos",
  body = {},
  params = "",
  page
) {
  try {
    const request =
      params === ""
        ? url + endpoint + "?pageNumber=" + page
        : url + endpoint + "?pageNumber=" + page + params;
    const response = await fetch(request, settings(method, body));
    console.log(request);
    const data = await response.json();
    if (data.error == null) {
      return data;
    } else {
      const data = {
        content: [],
        number: 0,
        totalPages: 0,
        first: true,
        last: true,
      };
      return data;
    }
  } catch (e) {
    const data = {
      content: [],
      number: 0,
      totalPages: 0,
      first: true,
      last: true,
    };
    return data;
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
