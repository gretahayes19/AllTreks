class Api::HikesController < ApplicationController

    def index
        @hikes = Hike
                    .includes(coverPhoto_attachment: :blob)
                    .joins(:reviews).group('hikes.id')
                    .select("hikes.*, AVG(reviews.rating) as avg_rating, COUNT(reviews.id) as num_reviews")
                    .where(park_id: params[:park_id])


        render :index
    end

    def show
        @hike = Hike.includes(:reviews, :reviewers, :park, coverPhoto_attachment: :blob).find_by(id: params[:id]);
        @nearby_hikes = Hike
                        .where(park_id: @hike.park_id)  
                        .includes(coverPhoto_attachment: :blob)
                        .where.not(id: @hike.id)
                        .joins(:reviews).group('hikes.id')
                        .select("hikes.*, AVG(reviews.rating) as avg_rating, COUNT(reviews.id) as num_reviews")

                        
        render :show
    end


end
