json.extract! @review, :id, :rating, :review_text, :activity_date, :hike_id, :user_id
json.reviewer do 
    json.partial! "/api/users/user", user: @review.reviewer
end 
