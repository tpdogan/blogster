class Comment < ApplicationRecord
  belongs_to :author
  belongs_to :commentable, polymorphic: true
  has_many :comments, as: :commentable, dependent: :destroy

  validates :body, presence: true, length: { maximum: 100 }
end
