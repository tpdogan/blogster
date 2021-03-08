class Article < ApplicationRecord
  belongs_to :author
  has_many :comments, as: :commentable
  has_many :tags, through: :article_to_tag
end
