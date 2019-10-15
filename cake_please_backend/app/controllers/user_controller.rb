class UserController < ApplicationController
    before_action :authorize_request, except: :create
    before_action :find_user, except: %i[create index]

    # get route
    def index
        @user = User.all
        render json: @user
    end

    # GET /users/{username}
    def show
        render json: @user, status: :ok
    end

    #  POST /users
    def create
        @user = User.new(user_params)
        if @user.save
            render json: @user, status: :created
        else
            render json: { errors: @user.errors.full_messages },
                    status: :unprocessable_entity
        end
    end

    # PUT /users/{username}
    def update
        unless @user.update(user_params)
            render json: { errors: @user.errors.full_messages },
            status: :unprocessable_entity
        end
    end

    # DELETE /users/{username}
    def destroy
        @user.destroy
    end
    # def index 
    #     @current_user = User.find_by_id(session[:current_user_id])
    # end

    # # create route WORKS
    # def create
    #     puts "user create route"
    #     @user = User.new({ "username" => params['username'], "password" => params['password'] })
        
    #     if @user.save
    #         puts 'made it to here'
    #         session[:user_id] = @user.id
    #         render json: @user
    #         # puts @user.id
    #     else
    #         puts "user not found"
    #     end
    # end


    private
    def find_user
        @user = User.find_by_username!(params[:_username])
    rescue ActiveRecord::RecordNotFound
        render json: {errors: 'User not found'}, status: :not_found
    end

    def user_params
        params.permit(
            :username, :password, :password_confirmation
        ) 
    end

    # def user_params
    #     params.require(:user).permit(:username, :password, :password_digest)
    # end
end