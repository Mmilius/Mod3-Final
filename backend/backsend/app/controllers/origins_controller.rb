class OriginsController < ApplicationController
    def index
        @origins = Origin.all 
        render json: @origins
    end

    def show
        @origin = Origin.find(params[:id])
        render json: @origin
    end
end
