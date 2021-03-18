class AddParkLatLng < ActiveRecord::Migration[5.2]
  def change
      add_column :parks, :lat, :float
      add_column :parks, :lng, :float
  end
end
