class AddParkAcreage < ActiveRecord::Migration[5.2]
  def change
    add_column :parks, :acreage, :integer
    add_column :parks, :about, :text
  end
end
