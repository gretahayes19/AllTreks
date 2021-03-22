

    json.thisHike do
        json.extract! @hike, :id, :name, :description, :difficulty, :distance, :route_type
        json.coverPhotoURL url_for(@hike.coverPhoto)
    end

    json.nearbyHikes do
        json.array! @nearby_hikes do |hike|
                json.extract! hike, :id, :name, :description, :difficulty, :distance, :route_type
                json.coverPhotoUrl url_for(hike.coverPhoto)
        end
    end

