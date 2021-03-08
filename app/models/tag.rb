class Tag < ApplicationRecord
  has_many :articles, through: :article_to_tag
end
