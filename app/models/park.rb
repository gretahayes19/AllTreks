class Park < ApplicationRecord

    validates :name, :description, :contact, presence: true
    validates :park_type, inclusion: { in: ["National", "State", "Regional", "Local"]}
end
