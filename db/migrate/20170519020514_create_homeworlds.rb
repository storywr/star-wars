class CreateHomeworlds < ActiveRecord::Migration[5.0]
  def change
    create_table :homeworlds do |t|

      t.timestamps
    end
  end
end
