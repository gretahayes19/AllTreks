class Review < ApplicationRecord

    validates :rating, :review_text, :activity_date, presence: true

    belongs_to :reviewer,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :hike
end
