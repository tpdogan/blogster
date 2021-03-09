class Article < ApplicationRecord
  belongs_to :author
  has_many :comments, as: :commentable
  
  has_many :article_to_tags
  has_many :tags, through: :article_to_tags

  validates :title, :body, :image, presence: true
  validates :title, uniqueness: true
  validates :body, length: { in: 150..500 }
end
