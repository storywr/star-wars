Rails.application.routes.draw do
  resources :starships
  resources :species
  resources :films
  resources :characters
  namespace :api do
    get '/characters/', to: 'characters#characters'
    get '/films/', to: 'films#films'
    post '/species/', to: 'species#species'
    post '/starships/', to: 'starships#starships'
    resources :characters, only: [:index]
    resources :films, only: [:index]
  end
end
