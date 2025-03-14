const url = "https://api.github.com/users"

const profile = document.querySelector('.profile');
const username = document.querySelector('.username');
const email = document.querySelector('.email');
const createdAt = document.querySelector('.createdAt');
const followers = document.querySelector('.followers');
const following = document.querySelector('.following');
const bio = document.querySelector('.bio');


async function fetchData() {
    try{
        const response = await fetch(`${url}/juvi-160`);
        const data = await response.json();
        console.log([data.name, data.email, data.created_at, data.bio, data.followers, data.following, data.avatar_url]);

        //updating html elements with fetched data
        profile.innerHTML = `<img src="${data.avatar_url}" class=" h-25 w-25 rounded-full " alt="">` || "n/a";
        username.textContent = `Username: ${data.name}`|| "N/A";
        email.textContent = `Email: ${data.email}`|| "na"; // Email is often null due to privacy settings
        createdAt.textContent = `Created At: ${new Date(data.created_at).toDateString()}`|| "na";
        followers.textContent = `Followers: ${data.followers}` || "na";
        following.textContent = `Following: ${data.following}` || "na";
        bio.textContent = `Bio: ${data.bio}` || "na";;

    } catch(error){
        console.error("Error fetching data",error);
    }
    
}

fetchData();
