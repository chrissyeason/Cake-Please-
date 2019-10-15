Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :recipes
  # resources :sessions, only: [:create]
  # resources :user
   # these routes are for showing users a login form, logging them in, and logging them out.
  #  get '/login' => 'sessions#new'
  #  post '/login' => 'sessions#create'
  #  get '/logout' => 'sessions#destroy'
 
   get '/signup' => 'user#new'
   post '/register' => 'user#create'

  resources :users, param: :_username
  post '/auth/login', to: 'authentication#login'
  get '/*a', to: 'application#not_found'
end
