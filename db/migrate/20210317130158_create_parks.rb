class CreateParks < ActiveRecord::Migration[5.2]
  def change
    create_table :parks do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.string :contact
      t.string :park_type

      t.timestamps
    end
  end
end
