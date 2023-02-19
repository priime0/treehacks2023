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
      nonprofits: [],
    };
  }
}

function getEmail() {
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("email="))
    ?.split("=")[1];

  if (!cookieValue) {
    return "";
  }

  if (cookieValue === undefined) {
    return "";
  }

  return cookieValue;
}

function setEmail(email) {
  document.cookie = `email=${email}; SameSite=None; secure=false`;
}

function unsetEmail() {
  document.cookie.split(";").forEach(function (c) {
    document.cookie = c
      .replace(/^ +/, "")
      .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
  });
}

async function signup(info) {
  const path = "/user/signup";
  const url = BASE_URL + path;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });
    const result = await response.json();
    if (response.status !== 200) {
      const err = response.statusText;
      return { result: false, msg: err };
    }
    setEmail(result.email);
    return { result: true, msg: "Successfully signed up" };
  } catch (e) {
    return { result: false, msg: e };
  }
}

async function login(info) {
  const path = "/user/login";
  const url = BASE_URL + path;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });
    const result = await response.json();
    if (response.status !== 200) {
      const err = response.statusText;
      return { result: false, msg: err };
    }
    setEmail(result.email);
    return { result: true, msg: "Successfully logged in" };
  } catch (e) {
    console.error(e);
    return { result: false, msg: e };
  }
}

function logout() {
  unsetEmail();
}

async function getUser() {
  const email = getEmail();
  const path = `/user/get/${email}`;
  const url = BASE_URL + path;
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      return {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        donations: [],
      };
    }
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      donations: [],
    };
  }
}

async function getUsers() {
  const path = "/user/all";
  const url = BASE_URL + path;
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      return {};
    }
    const result = await response.json();
    return result;
  } catch (e) {
    return {};
  }
}

async function getNonprofit(uuid) {
  const path = `/nonprofit/get/${uuid}`;
  const url = BASE_URL + path;
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      return null;
    }
    const result = await response.json();
    return result;
  } catch (e) {
    return null;
  }
}

async function donate(email, uuid, amount) {
  const path = "/donate";
  const url = BASE_URL + path;
  const data = {
    email,
    uuid,
    amount,
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  } catch (e) {
    return false;
  }
}

async function match(description) {
  const path = "/match";
  const url = BASE_URL + path;
  const data = {
    description,
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  } catch (e) {
    return null;
  }
}

export {
  getNonprofits,
  getEmail,
  signup,
  login,
  logout,
  getUser,
  getUsers,
  getNonprofit,
  donate,
  match,
};
