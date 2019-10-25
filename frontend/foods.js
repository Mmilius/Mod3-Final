const body = document.body

const modal = document.getElementById("myModal")
btn = document.getElementById("myBtn")
span = document.getElementsByClassName("close")[0]
btn.onclick = function (){
    modal.style.display = "block"
}

span.onclick = function () {
    modal.style.display = "none"
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}

const foodStack = document.createElement("div")
    foodStack.className = "foodCards"

function createFoods(foods){
    foods.forEach(food =>{
        let foodCard = document.createElement("div")
            foodCard.className = "eachFoodCard"

        let flag = document.createElement("IMG")
            flag.className = "foodFlag"

        let name = document.createElement("h2")
            name.className = "foodName"

        let image = document.createElement("img")
            image.className = "foodImage"

        let description = document.createElement("p")
            description.className = "foodDescription"

        let ingredients = document.createElement("p")
            ingredients.className = "foodIngredients"
        
        let author = document.createElement("p")
            author.className = "author"
        
        let updateFood = document.createElement("button")
            updateFood.innerText = "Update"
            updateFood.addEventListener("click", () => editFood(event, food.id))
        
        let removeFood = document.createElement("button")
            removeFood.className = "removeFood"
            removeFood.innerText = "Delete"
            removeFood.addEventListener("click", () => deleteFood(event, food.id))
        
        //let authorPhoto = document.createElement("img")
          //  authorPhoto.className = "food-authorphoto"
      
        name.innerText = food.name
        image.src = food.image
        description.innerText = food.description
        ingredients.innerText = `Ingredients: \n ${food.ingredients}`
        flag.src = food.origin.flag
        author.innerText = `Submitted by ${food.user.name}`
       // authorPhoto.src = food.user.image

        foodCard.append(name, image, description, ingredients, flag, author, updateFood, removeFood) //authorPhoto
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
    let originDropdown = document.getElementById("food-origin-dropdown")
        origins.forEach(origin => {
            let option = document.createElement("option")
                option.innerText = origin.name
                option.value = origin.id 
                originDropdown.append(option)
        })
}

function createUserOption(users){
    let userDropdown = document.getElementById("food-user-dropdown")
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