class CreateHikes < ActiveRecord::Migration[5.2]
  def change
    create_table :hikes do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.string :difficulty, null: false
      t.float :distance, null: false
      t.string :route_type, null: false
      t.integer :park_id, null: false

      t.timestamps
    end

    add_index :hikes, :park_id
    add_index :hikes, :name
  end
end
