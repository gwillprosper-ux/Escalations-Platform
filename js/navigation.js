// ================================
// EZEE SUPPORT HUB NAVIGATION
// Version 1.0
// ================================

// Make sure the user is logged in
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (!currentUser) {
    window.location.href = "index.html";
}

// Build navigation
document.addEventListener("DOMContentLoaded", () => {

    const initials =
        currentUser.first.charAt(0).toUpperCase() +
        currentUser.last.charAt(0).toUpperCase();

    const nav = `
    <header class="topNav">

        <div class="logo">

            <div class="logoTitle">
                EZEE Fiber Support Hub
            </div>

            <div class="logoSub">
                Support Operations Platform
            </div>

        </div>

        <nav>

            <button onclick="goDashboard()">Dashboard</button>

            <button onclick="goEmail()">Generate Email</button>

            <button onclick="goVendors()">Vendor Management</button>

        </nav>

        <div class="profile">

            <div class="profileInfo">

                <div id="profileName">
                    ${currentUser.first} ${currentUser.last}
                </div>

                <div id="profileRole">
                    ${currentUser.role}
                </div>

            </div>

            <div class="profileCircle" onclick="toggleProfileMenu()">
                ${initials}
            </div>

        </div>

    </header>

    <div id="profileMenu" class="profileMenu">

        <div class="menuName">
            ${currentUser.first} ${currentUser.last}
        </div>

        <button onclick="goProfile()">My Profile</button>

        <button onclick="goSettings()">Settings</button>

        <button onclick="logout()">Logout</button>

    </div>
    `;

    document.body.insertAdjacentHTML("afterbegin", nav);

});


// ================================
// Navigation
// ================================

function goDashboard() {
    location.href = "dashboard.html";
}

function goEmail() {
    location.href = "email.html";
}

function goVendors() {
    location.href = "admin.html";
}

function goProfile() {
    location.href = "profile.html";
}

function goSettings() {
    location.href = "settings.html";
}


// ================================
// Profile Menu
// ================================

function toggleProfileMenu() {

    const menu = document.getElementById("profileMenu");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }

}


// ================================
// Logout
// ================================

function logout() {

    localStorage.removeItem("currentUser");

    location.href = "index.html";

}