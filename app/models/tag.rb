class Tag < ApplicationRecord
  has_many :article_to_tags
  has_many :articles, through: :article_to_tags

  validates :name, uniqueness: true
end
