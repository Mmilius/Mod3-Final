let searchParams = new URLSearchParams(window.location.search)
let query = searchParams.get("id")

const body = document.body



const userStack = document.createElement("div")
    userStack.className = "user-stack"

function userList(users){
    users.forEach(user =>{
        if (user.id == query){
        let userCard = document.createElement("div")
            userCard.className = "user-profile-card"
    
        let profile = document.createElement('img')
             profile.src = user.image

        let userName = document.createElement("h2")
            userName.className="userName"
            userName.innerText = user.name

        let removeUser = document.createElement("button")
            removeUser.innerText = "Delete"
            removeUser.addEventListener("click", () => deleteUser(event, user.id))


        userCard.append(profile, userName, removeUser)
        userStack.append(userCard)
    
    }})
    
    body.append(userStack)
}


const foodStack = document.createElement("div")
    foodStack.className = "foodCards"

function userFoods(foods){
    foods.forEach(food =>{
        if (food.user.id ==query){
        let foodCard = document.createElement("div")
            foodCard.className = "eachFoodCard"

        let flag = document.createElement("IMG")
            flag.className = "foodFlag"

        let name = document.createElement("h2")
            name.className = "name"

        let description = document.createElement("p")
            description.className = "description"

        let ingredients = document.createElement("p")
            ingredients.className = "ingredients"
        
        let author = document.createElement("p")
            author.className = "author"
        
        let removeFood = document.createElement("button")
            removeFood.innerText = "Delete"
            removeFood.addEventListener("click", () => deleteFood(event, food.id))
        
        //let authorPhoto = document.createElement("img")
          //  authorPhoto.className = "food-authorphoto"
      
        name.innerText = `Name: ${food.name}`
        description.innerText = `Description: ${food.description}`
        ingredients.innerText = `Ingredients: ${food.ingredients}`
        flag.src = food.origin.flag
        author.innerText = `Author: ${food.user.name}`
       // authorPhoto.src = food.user.image

        foodCard.append(name, description, ingredients, flag, author, removeFood) //authorPhoto
        foodStack.append(foodCard)
    }})
    
    body.append(foodStack)
}



const deleteUser = (event, id) => {
    event.target.parentNode.remove()
    fetch(`http://localhost:3000/users/${id}`, {
        headers: {"Content-Type": "application/json"},
        method: 'DELETE',
        body: JSON.stringify({id})
    })
}


const deleteFood = (event, id) => {
    event.target.parentNode.remove()
    fetch(`http://localhost:3000/foods/${id}`, {
        headers: {"Content-Type": "application/json"},
        method: 'DELETE',
        body: JSON.stringify({id})
    })
}

fetch("http://localhost:3000/foods")
    .then(response => response.json())
    .then(userFoods)

fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(userList)