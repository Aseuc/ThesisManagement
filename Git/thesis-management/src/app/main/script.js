async function init() {
    document.getElementById("username").innerText = await getUser();
    document.getElementById("logout_button").addEventListener("click", async () => {
        await logout();
    });
}

document.body.onload = init;
