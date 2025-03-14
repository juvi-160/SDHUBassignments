const url = "https://api.github.com/users";

const profile = document.querySelector(".profile");
const username = document.querySelector(".username");
const email = document.querySelector(".email");
const createdAt = document.querySelector(".createdAt");
const followers = document.querySelector(".followers");
const following = document.querySelector(".following");
const bio = document.querySelector(".bio");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

async function fetchData(user) {
  try {
    const response = await fetch(`${url}/${user}`);
    const data = await response.json();

    if (data.message === "Not Found") {
      alert("User not found! Please try again.");
      return;
    }

    profile.innerHTML = `<img src="${data.avatar_url}" class="h-24 w-24 rounded-full border-2 border-white" alt="">`;
    username.textContent = `Username: ${data.name || "N/A"}`;
    email.textContent = `Email: ${data.email || "N/A"}`;
    createdAt.textContent = `Created At: ${
      new Date(data.created_at).toDateString() || "N/A"
    }`;
    followers.textContent = `Followers: ${data.followers || "N/A"}`;
    following.textContent = `Following: ${data.following || "N/A"}`;
    bio.textContent = `Bio: ${data.bio || "N/A"}`;
  } catch (error) {
    console.error("Error fetching data", error);
    alert("An error occurred while fetching data.");
  }
}

searchBtn.addEventListener("click", () => {
  const user = searchInput.value.trim();
  if (user) fetchData(user);
});

searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    const user = searchInput.value.trim();
    if (user) fetchData(user);
  }
});
