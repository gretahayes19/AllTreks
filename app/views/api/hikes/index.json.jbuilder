json.array! @hikes do |hike| 
    json.extract! hike, :id, :name, :description, :difficulty, :distance, :route_type, :avg_rating, :num_reviews
    json.coverPhotoURL url_for(hike.coverPhoto)
end