class CreateMountains < ActiveRecord::Migration[7.0]
  def change
    create_table :mountains do |t|
      t.string :mountain_name
      t.text :description
      t.string :overview
      t.string :image_url
      t.references :adventure, null: false, foreign_key: true
      t.timestamps
    end
  end
end
