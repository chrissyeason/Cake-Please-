class User < ApplicationRecord::Base
    has_many :recipes
    has_secure_password
end
