const passwordToggle = document.getElementById("password-toggle")
const passwordInput = document.getElementById("password")
passwordToggle.addEventListener("click", event => {
    event.preventDefault()
    const type = passwordInput.type === "password" ? "text" : "password"
    passwordInput.type = type


})

function handleLogin(event) {
    event.preventDefault()
    const username = event.target.username.value
    const password = event.target.password.value
    if(username === "rahma" && password === "123") {
        window.location.href = "index.html"
    } else if (username === "marsel" && password ==="12345") {
        window.location.href = "index.html"
    } else {
        const peringatan = document.getElementById("peringatan")
        peringatan.innerHTML = "Password / Username yang anda masukan salah!"
    }
    // localStorage.setItem(username)
    // localStorage.setItem(password)
    console.log(`${username} ${password}`)
    
}

const formLogin = document.querySelector(".form-login")
formLogin.addEventListener("submit", handleLogin)