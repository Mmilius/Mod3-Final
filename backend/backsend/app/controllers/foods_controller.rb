class FoodsController < ApplicationController

    def index
        @foods = Food.all 
        render json: @foods, include: [:user, :origin]
    end

    def show
        @food = Food.find(params[:id])
        render json: @food
    end

    def create
        @food = Food.create(
            name: params[:name],
            description: params[:description],
            ingredients: params[:ingredients],
            origin_id: params[:origin_id],
            user_id: params[:user_id]
        )
        redirect_to "http://localhost:3001/foods.html"
    end

    def update
        if @food.update(food_params)
            render json: @food
        else
            render json: @food.errors, status: :unprocessable_entity
        end
    end
    

    def destroy 
        @food = Food.find(params[:id])
            if @food.present?
                @food.destroy
            end
    end
    
end
