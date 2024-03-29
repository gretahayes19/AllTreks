

    json.thisHike do
        json.extract! @hike, :id, :park_id, :name, :description, :summary, :lat, :lng, :elevation, :difficulty, :distance, :route_type
        json.coverPhotoURL url_for(@hike.coverPhoto)
        json.parkName @hike.park.name
        json.reviews do
            json.array! @hike.reviews do |review| 
                json.extract! review, :id, :review_text, :rating, :activity_date, :hike_id, :user_id
                json.reviewer do 
                    json.partial! "/api/users/user", user: review.reviewer
                end 
            end
        end
    end

    json.nearbyHikes do
        json.array! @nearby_hikes do |hike|
                json.extract! hike, :id, :name, :description, :summary, :lat, :lng, :elevation, :difficulty, :distance, :route_type, :avg_rating, :num_reviews
                json.coverPhotoURL url_for(hike.coverPhoto)
        end
    end




