class UserController < ApplicationController

    # get route
    # def index
    #     @user = User.all
    #     render json: @user
    # end

    def index 
        @current_user = User.find_by_id(session[:current_user_id])
    end

    # create route
    def create
        @user = User.new({ "username" => params['username'], "password" => params['password'] })
        
        if @user.save
            puts 'made it to here'
            session[:user_id] = @user.id
            render json: @user
            puts @user.id
        else
            puts "user not found"
        end
    end


    private

    # def user_params
    #     params.require(:user).permit(:username, :password, :password_digest)
    # end
end