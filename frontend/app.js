const body = document.body

const userStack = document.createElement("div")
    userStack.className = "user-stack"

function userList(users){
    let userCard = document.createElement("div")
    userCard.className = "user-profile-card"

    users.forEach(user =>{
        let profile = document.createElement('img')
             profile.src = user.image

        let userName = document.createElement("h3")
            userName.className="userName"
            userName.href = `users.html?id=${user.id}`
            userName.innerText = user.name

        userCard.append(profile, userName)
    })
    userStack.append(userCard)
    body.append(userStack)
}

fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(userList)