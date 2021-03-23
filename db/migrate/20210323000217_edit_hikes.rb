class EditHikes < ActiveRecord::Migration[5.2]
  def change
    add_column :hikes, :summary, :text
    add_column :hikes, :elevation, :integer
  
  end
end
