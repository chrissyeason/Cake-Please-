class RecipesController < ApplicationController
    before_action :set_recipe, only: [:show, :update, :destroy]
    
    # GET /recipes
    def index 
        @recipes = Recipe.all
        render json: @recipes
    end
  
    #GET /recipes/1
    def show
        # @recipes = Recipe.find(params[:id])
        render json: @recipes
    end

    #POST /recipes
    def create 
        # @current_user = session[:user_id]
        @recipes = Recipe.new(recipe_params)
        #     'title' => params['title'],
        #     'image' => params['image'],
        #     'description' => params['description'],
        #     'ingredients' => params['ingredients'],
        #     'instructions' => params['instructions'],
        #     'id' => params['id'], 
        #     'user_id' => params['user_id']
        # })
        if @recipes.save
            render json: @recipes, status: :created, location: @recipes
        else
            render json: @recipes.errors, status: :unprocessable_entity
        end
    end

    # PATCH/PUT /recipes/1
    def update
        if @recipes.update(recipe_params)
            render json: @recipes
        else
            render json: @recipes.errors, status: :unprocessable_entity
        end
    end

    # DELETE /recipes/1
    def destroy
        @recipes.destroy
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
