class Hike < ApplicationRecord

    validates :name, :difficulty, :description, :route_type, :distance, presence: true
    validates :difficulty, inclusion: { in: ["easy", "moderate", "difficult", "hard"]}
    validates :route_type, inclusion: { in: ["Out & back", "Loop", "Point to point"]}
    
    has_one_attached :coverPhoto

    has_many :reviews

    has_many :reviewers,
        through: :reviews, 
        source: :reviewer


    belongs_to :park


end
