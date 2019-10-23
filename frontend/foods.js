const body = document.body

const foodStack = document.createElement("div")
    foodStack.className = "foodCards"

function createFoods(foods){
    foods.forEach(food =>{
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
        
        let updateFood = document.createElement("button")
            updateFood.innerText = "Update"
            updateFood.addEventListener("click", () => editFood(event, food.id))
        
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

        foodCard.append(name, description, ingredients, flag, author, updateFood, removeFood) //authorPhoto
        foodStack.append(foodCard)
    })
    
    body.append(foodStack)
}




const deleteFood = (event, id) => {
    event.target.parentNode.remove()
    fetch(`http://localhost:3000/foods/${id}`, {
        headers: {"Content-Type": "application/json"},
        method: 'DELETE',
        body: JSON.stringify({id})
    })
}


function createOriginOption(origins){
    let originDropdown = document.getElementById("origin-dropdown")
        origins.forEach(origin => {
            let option = document.createElement("option")
                option.innerText = origin.name
                option.value = origin.id 
                originDropdown.append(option)
        })
}

function createUserOption(users){
    let userDropdown = document.getElementById("user-dropdown")
        users.forEach(user => {
            let option = document.createElement("option")
                option.innerText = user.name
                option.value = user.id 
                userDropdown.append(option)
        })
}



fetch("http://localhost:3000/foods")
    .then(response => response.json())
    .then(createFoods)

fetch("http://localhost:3000/origins")
    .then(response => response.json())
    .then(createOriginOption)

fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(createUserOption)