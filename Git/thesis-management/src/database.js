const databaseURI = "https://db.thesis.digitaltransformation.bayern/";

async function requestDatabase(method, path, body = {}) {
    let response;
    if (method === "GET" || method === "HEAD") {
        response = await fetch(databaseURI + path, {
            method: method,
            credentials: "include"
        });
    } else {
        response = await fetch(databaseURI + path, {
            method: method,
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(body)
        });
    }
    const message = await response.json();
    return {
        response: response,
        message: message
    };
}

async function login(user, pass) {
    if (!user || !pass || user === "" || pass === "")
        return new Error("No credentials provided");
    const credentials = {
        name: user,
        password: pass
    };
    let result;
    try {
        result = await requestDatabase("POST", "_session", credentials);
    } catch (e) {
        return new Error(e.message);
    }
    return result;
}

async function getUser() {
    const result = await requestDatabase("GET", "_session");
    if (!result.message.hasOwnProperty("userCtx"))
        return null;
    return result.message.userCtx.name;
}

async function logout() {
    await requestDatabase("DELETE", "_session");
    location.href = "../../"
}
