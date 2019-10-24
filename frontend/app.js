const body = document.body

const modalUser = document.getElementById("userModal")
userBtn = document.getElementById("userBtn")
userSpan = document.getElementsByClassName("user-close")[0]
userBtn.onclick = function (){
    modalUser.style.display = "block"
}

userSpan.onclick = function (){
    modalUser.style.display = "none"
}

window.onclick = function(event){
    if (event.target == modalUser){
        modalUser.style.display = "none"
    }
}


const showUsers = document.querySelector("#returnUser")

const userStack = document.createElement("div")
    userStack.className = "user-stack"

function userList(users){
    users.forEach(user =>{
        let userCard = document.createElement("div")
            userCard.className = "user-profile-card"
    
        let profile = document.createElement('img')
             profile.src = user.image

        let userName = document.createElement("a")
            userName.className="userName"
            userName.href = `users.html?id=${user.id}`
            userName.innerText = user.name

        userCard.append(profile, userName)
        userStack.append(userCard)
    })
    
    body.append(userStack)
    userStack.style.visibility = "hidden"

    showUsers.addEventListener('click', () => {
        userStack.style.visibility = "visible"
    })
}



fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(userList)