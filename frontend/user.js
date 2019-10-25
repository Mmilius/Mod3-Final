let searchParams = new URLSearchParams(window.location.search)
let query = searchParams.get("id")

const body = document.body



const userStack = document.createElement("div")
    userStack.className = "user-page-stack"

function userList(users){
    users.forEach(user =>{
        if (user.id == query){
        let userCard = document.createElement("div")
            userCard.className = "user-page-profile-card"
    
        let profile = document.createElement('img')
             profile.src = user.image
             profile.className = "user-page-profile"

        let userName = document.createElement("h2")
            userName.className ="user-page-name"
            userName.innerText = `Hi, \n ${user.name}`

        let removeUser = document.createElement("button")
            removeUser.innerText = "Delete"
            removeUser.className = "user-page-delete"
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
            name.className = "userFoodName"

        let description = document.createElement("p")
            description.className = "userFoodDescription"

        let ingredients = document.createElement("p")
            ingredients.className = "userFoodIngredients"
        
        let author = document.createElement("p")
            author.className = "author"
        
        let removeFood = document.createElement("button")
            removeFood.innerText = "Delete"
            removeFood.className = "user-food-delete"
            removeFood.addEventListener("click", () => deleteFood(event, food.id))
        
        //let authorPhoto = document.createElement("img")
          //  authorPhoto.className = "food-authorphoto"
      
        name.innerText = food.name
        description.innerText = food.description
        ingredients.innerText = `Ingredients: \n${food.ingredients}`
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