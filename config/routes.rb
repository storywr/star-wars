Rails.application.routes.draw do
  resources :species
  resources :films
  resources :characters
  namespace :api do
    get '/characters/', to: 'characters#characters'
    get '/films/', to: 'films#films'
    post '/species/', to: 'species#species'
    resources :characters, only: [:index]
    resources :films, only: [:index]
  end
end
