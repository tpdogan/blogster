Rails.application.routes.draw do
  devise_for :authors
  
  resources :articles do
    resources :comment
  end

  resources :comments do
    resources :comments
  end
  
  root to: 'articles#index'
end
