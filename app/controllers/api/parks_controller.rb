class Api::ParksController < ApplicationController
    def show
        @park = Park.find_by(id: params[:id])
        @hikes = @park.hikes
                    .joins(:reviews)
                    .select("hikes.*, AVG(reviews.rating) as avg_rating, COUNT(reviews.id) as num_reviews, SUM(reviews.rating) as sum_ratings")
        render :show
    end

end
