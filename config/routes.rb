Rails.application.routes.draw do
  devise_for :authors, :controllers => { :registrations => 'registrations' }
  
  resources :articles

  resources :comments
  
  root to: 'articles#index'
end
