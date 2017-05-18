Rails.application.routes.draw do
  resources :films
  resources :characters
  namespace :api do
    get '/characters/', to: 'characters#characters'
    get '/films/', to: 'films#films'
    resources :characters, only: [:index]
    resources :films, only: [:index]
  end
end
