

    json.thisHike do
        json.extract! @hike, :id, :name, :description, :summary, :lat, :lng, :elevation, :difficulty, :distance, :route_type
        json.coverPhotoURL url_for(@hike.coverPhoto)
        json.parkName @hike.park.name
    end

    json.nearbyHikes do
        json.array! @nearby_hikes do |hike|
                json.extract! hike, :id, :name, :description, :summary, :lat, :lng, :elevation, :difficulty, :distance, :route_type
                json.coverPhotoUrl url_for(hike.coverPhoto)
        end
    end

