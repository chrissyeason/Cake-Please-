class User < ApplicationRecord
    # has_many :recipes
    has_secure_password
    # validates_presence_of :password, :on => :create
    # validates_presence_of :password_digest
    validates :username, presence: true
    validates :password, presence: true

end
