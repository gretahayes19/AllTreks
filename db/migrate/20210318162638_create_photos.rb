class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.date :photo_date
      t.string :caption
      t.integer :user_id, null: false
      t.integer :hike_id, null: false

      t.timestamps
    end

    add_index :photos, :hike_id
    add_index :photos, :user_id
  end
end
