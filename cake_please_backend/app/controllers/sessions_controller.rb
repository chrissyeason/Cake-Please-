class SessionsController < ApplicationController

    def new
    end

    # def create
    #     @user = User.find_by_id(params[:id])
    #     if @user && @user.authenticate(params[:password])
    #         session[:current_user_id] = @user.id
    #         render json: {user: @user}
    #     else
    #         render "redirecting"
    #     end
    # end
    def create
        @current_user = User.find_by_id(session[:user_id])
        if @current_user && @user.authenticate(params[:password])
            session[:current_user_id] = @user.id
            render json: {user: @user}
        else
            puts 'failed to login'
        end
    end

    def destroy
        session[:user_id] = nil
    end

end