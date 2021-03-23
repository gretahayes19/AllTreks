class Api::HikesController < ApplicationController

    def index
        @hikes = Hike
                    .includes(coverPhoto_attachment: :blob)
                    .where(park_id: params[:park_id])


        render :index
    end

    def show
        @hike = Hike.includes(:park, coverPhoto_attachment: :blob).find_by(id: params[:id]);
        @nearby_hikes = Hike
                        .where(park_id: @hike.park_id)  
                        .includes(coverPhoto_attachment: :blob)
                        .where.not(id: @hike.id)
                        
        render :show
    end
end
