class UsersController < ApplicationController
    def index
        @users = User.all 
        render json: @users
    end

    def show
        @user = User.find(params[:id])
        render json: @user
    end

    def create
        @user = User.create({
            name: params[:name],
            image: params[:image]
        })
        redirect_to "http://localhost:3001"
    end

    def destroy 
        @user = User.find(params[:id])
            if @user.present?
                @user.destroy
            end
        redirect_to "http://localhost:3001"
    end
end
