Rails.application.routes.draw do
  resources :characters
  namespace :api do
    get '/characters/', to: 'characters#characters'
    resources :characters, only: [:index]
  end
end
