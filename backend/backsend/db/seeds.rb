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
  name: "John Doe",
  image: "https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg"
})

food1 = Food.create({
    name: "Hamburger",
    description: "A sandwich with beef patty, tomato, lettuce, and bread.",
    ingredients: "Beef, Spices, Lettuce, Tomato, Bread",
    user_id: 1,
    origin_id: 3
 })

