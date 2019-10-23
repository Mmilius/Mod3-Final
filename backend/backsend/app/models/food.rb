class Food < ApplicationRecord
  belongs_to :origin
  belongs_to :user
end
