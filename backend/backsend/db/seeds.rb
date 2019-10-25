# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'rest-client'
require 'json'

Food.destroy_all
User.destroy_all

country = RestClient.get 'https://restcountries.eu/rest/v2/all?fields=name;region;subregion;demonym;flag'
country_data = JSON.parse(country)

country_info = country_data.each do |item, value|
    Origin.create(
          name: item["name"],
          region: item["region"],
          subregion: item["subregion"],
          demonym: item["demonym"],
          flag: item["flag"]
      )
  end


user_1 = User.create({
  name: "Fred Armisen",
  image: "https://img.huffingtonpost.com/asset/5cdc80c924000058007f0258.jpeg?cache=0iyj9nrfzi&ops=scalefit_630_noupscale"
})

user_2 = User.create({
  name: "Anthony Bourdain",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAOPfkidY94pSVXNwUntXX3blTng7tYyEga8-DgU75rIeN7jY7"
})

user_3 = User.create({
  name: "Lesley Knope",
  image: "https://dz7u9q3vpd4eo.cloudfront.net/wp-content/legacy/posts/afb4d3fd-d9d7-4edb-bc21-355367fdee1c.jpeg"
})


food1 = Food.create({
    name: "Hamburger",
    description: "It's a sandwich filled with good things of different textures between two other things.",
    ingredients: "Beef, Spices, Lettuce, Tomato, Bread, Sauce",
    user: user_1,
    origin_id: 240,
    image: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/165384.jpg"
 })

 food2 = Food.create({
   name: "Pad Thai",
   description: "A stir-fried rice noodle dish. Always comforting.",
   ingredients: "Rice Noodles, Eggs, Tofu, Tamarind, Fish Sauce, Shrip, Garlic, Shallots, Chili Pepper, Sugar, Peanuts",
   user: user_2,
   origin_id: 225,
   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRie7_K3JZowT37Us1OaJj4wzStU4oDO-_hf7YY1cyK7tswdInb"
 })

 food3 = Food.create({
  name: "Kabsa",
  description: "A mixed rice dish.",
  ingredients: "Basmati Rice, Chicken, Goat, Lamb, Cardamon, Cinnamon, Almonds, Onions",
  user: user_2,
  origin_id: 198,
  image: "https://4.bp.blogspot.com/-VzeX3C74S0A/WSlYYMUG4pI/AAAAAAAAPUA/PI5FMyC0Pp89z6raOqZHkq5V8e-NiJBggCLcB/s1600/II1A0998-1.jpg"
})

food4 = Food.create({
  name: "Waffles",
  description: "Crispy golden goodness!",
  ingredients: "Flour, Sugar, Butter, Milk, Eggs, Oil",
  user: user_3,
  origin_id: 240,
  image: "https://cookingtv-channel.com/wp-content/uploads/24188000_1864240090256376_1542159590186024960_n.jpg"

})
