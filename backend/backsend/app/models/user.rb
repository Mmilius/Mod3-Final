class User < ApplicationRecord
    has_many :foods
    has_many :origins, through: :foods
end
