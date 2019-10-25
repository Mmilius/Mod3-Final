class User < ApplicationRecord
    has_many :foods, dependent: :destroy
    has_many :origins, through: :foods
end
