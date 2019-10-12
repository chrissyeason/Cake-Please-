class UserController < ApplicationController

    # get route
    def index
        @user = User.all
        render json: @user
    end

    # create route
    def create
        @user = User.new({ "username" => params['username'], "password" => params['password'] }
        )
        puts user_params
        # puts params['username']
        # puts params['password']
        puts 'before user params'
        puts user_params
        if @user.save
            puts 'made it to here'
            session[:user_id] = @user.id
            render json: @user
        else
            puts "user not found"
        end
    end

end