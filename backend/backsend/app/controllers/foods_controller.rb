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
        render json: @food
    end
end
