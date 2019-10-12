class UserController < ApplicationController

    # get route
    def index
        @user = User.all
        render json: @user
    end

    # create route
    def create
        @user = User.new(user_params)
        if @user.save
            session[:user_id] = user.id
        else
            render "user not found"
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :password)
    end
end