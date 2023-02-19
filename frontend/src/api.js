const BASE_URL = "http://localhost:8000";

async function getNonprofits() {
  const path = "/nonprofit/all";
  const url = BASE_URL + path;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {
    return {
      "nonprofits": []
    };
  }
}

export { getNonprofits };
