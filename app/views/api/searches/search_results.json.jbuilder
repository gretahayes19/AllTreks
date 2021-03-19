hikes = json.array! @hikes do |hike| 
    json.extract! hike, :id, :name
    json.category hike.class.name
end

parks = json.array! @parks do |park| 
    json.extract! park, :id, :name
    json.category park.class.name
end

hikes + parks