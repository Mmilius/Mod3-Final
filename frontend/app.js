const body = document.body

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
}


fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(userList)