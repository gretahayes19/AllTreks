class AddLatLngtoHikes < ActiveRecord::Migration[5.2]
  def change
      add_column :hikes, :lat, :float
      add_column :hikes, :lng, :float
  end
end
