Rails.application.routes.draw do
  devise_for :authors, :controllers => { :registrations => 'registrations' }
  
  resources :articles do
    resources :comment
  end

  resources :comments do
    resources :comments
  end
  
  root to: 'articles#index'
end
