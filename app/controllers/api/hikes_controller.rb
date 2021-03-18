class Api::HikesController < ApplicationController

    def index
        @hikes = Hike
                    .includes(coverPhoto_attachment: :blob)
                    .where(park_id: params[:park_id])
    end

    def show
    end
end
