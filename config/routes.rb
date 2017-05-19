Rails.application.routes.draw do
  resources :homeworlds
  resources :starships
  resources :species
  resources :films
  resources :characters
  namespace :api do
    get '/characters/', to: 'characters#characters'
    get '/films/', to: 'films#films'
    post '/species/', to: 'species#species'
    post '/starships/', to: 'starships#starships'
    post '/homeworlds/', to: 'homeworlds#homeworlds'
    resources :characters, only: [:index]
    resources :films, only: [:index]
  end
end
