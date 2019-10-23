class CreateOrigins < ActiveRecord::Migration[6.0]
  def change
    create_table :origins do |t|
      t.string :name
      t.string :region
      t.string :subregion
      t.string :demonym
      t.string :flag
      t.timestamps
    end
  end
end
