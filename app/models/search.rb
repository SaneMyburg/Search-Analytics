class Search < ApplicationRecord
  belongs_to :user

  validates :query, presence: true, length: { minimum: 5 }
end
