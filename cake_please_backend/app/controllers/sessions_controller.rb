class SessionsController < ApplicationController

    def new
    end

    def create
        user = User.find_by_id(params[:id])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
        else
            render "redirecting"
    end

    def destroy
        session[:user_id] = nil
    end

end