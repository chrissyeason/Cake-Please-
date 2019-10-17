class RecipesController < ApplicationController
    before_action :set_recipe, only: [:show, :update, :destroy]
    
    # GET /recipes
    def index 
        @recipes = Recipe.all
        render json: @recipes
    end
  
    #GET /recipes/1
    def show
        @recipes = Recipe.find(params[:id])
        render json: @recipes
    end

    #POST /recipes
    def create 
        # @current_user = session[:user_id]
        @recipes = Recipe.new(recipe_params)
        
        if @recipes.save
            render json: @recipes, status: :created, location: @recipes
        else
            render json: @recipes.errors, status: :unprocessable_entity
        end
    end

    # PATCH/PUT /recipes/1
    def update
        if @recipes.update(recipe_params)
            render json: @recipes, status: :ok
        else
            render json: @recipes.errors, status: :unprocessable_entity
        end
    end

    # DELETE /recipes/1
    def destroy
        if @recipes.destroy
            render json: {status: 200}
        else
            render json: @recipes.errors
        end
    end

    private
    # use callbacks to share common setup or contraints between actions
    def set_recipe
        @recipes = Recipe.find(params[:id])
    end

    # only allow a trusted parameter "white list" through
    def recipe_params
        params.require(:recipe).permit(:id, :user_id, :title, :image, :description, :ingredients, :instructions)
    end
end
