const url = "http://localhost:9090";

export default async function handleAPI(
  method,
  endpoint = "/todos",
  body = {},
  searchParams = "",
  page,
  sorting = []
) {
  try {
    const request = setRequest(endpoint, page, searchParams, sorting);
    const response = await fetch(request, settings(method, body));
    const data = await response.json();
    if (data.error == null) {
      return data;
    } else {
      throw data.error;
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

function setRequest(endpoint, page, searchParams, sorting) {
  const pageRequest = "?pageNumber=" + page;
  let request = url + endpoint;
  if (page != null) {
    request += pageRequest;
  }
  if (searchParams !== "") {
    request += searchParams;
  }
  if (sorting.length !== 0) {
    let sortingRequest = "";
    sorting.forEach((element) => {
      sortingRequest += "&sort="+ element
    });
    request +=sortingRequest;
  }
  return request;
}

function settings(method, body) {
  if (method === "DELETE" || method === "GET" || body === {})
    return { method: method };

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
