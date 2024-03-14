const searchInput = document.querySelector('.search-input');
console.log(searchInput)
const searchBtn = document.querySelector(".search-btn");

const BASE_URL = "https://api.github.com/users/";

const loader = document.querySelector(".loading-text");

const githubProfileDetails = document.querySelector(".github-profile-details")

function showLoader(){
    loader.classList.add("show");
    githubProfileDetails.classList.add("hide");
}

function removeLOader(){
    loader.classList.remove("show");
    githubProfileDetails.classList.remove("hide");
}

async function fetchGithubProfileDetails(){
    showLoader();
    const response = await fetch(`${BASE_URL}${searchInput.value}`)
    const result = await response.json();
    // console.log(result);

    if(result){
        setTimeout(()=>{
            removeLOader();
            displayProfileDetails(result);
            searchInput.value = "";
        }, 3000);
     
    }
}
searchBtn.addEventListener("click", fetchGithubProfileDetails)


function displayProfileDetails(getProfileDetails){
    const {login, avatar_url,public_repos, followers, following} = getProfileDetails;

    githubProfileDetails.innerHTML=`
        <div class="result">
            
            <div>
            <h3>${login}</h3>
                <img src=${avatar_url} alt=${login} height="250px">
                <p>Repos : ${public_repos}</p>
                <p>Followers : ${followers}</p>
                <p>Following : ${following}</p>
            </div>
        </div>
        
    `
}