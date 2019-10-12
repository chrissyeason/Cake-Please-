class User < ApplicationRecord
    has_many :recipes
    has_secure_password
    validates_presence_of :password, :on => :create
    # validates: username, presence: true

end
