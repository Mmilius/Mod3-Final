Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
resources "foods"
resources "origins"
resources "users"
get "/user", to: "foods#user"
get "/origin", to: "foods#origin"
end
