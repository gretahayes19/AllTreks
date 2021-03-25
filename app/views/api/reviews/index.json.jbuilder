json.array! @reviews do |review| 
    json.extract! review, :id, :rating, :review_text, :activity_date, :hike_id, :user_id, :reviewer
end