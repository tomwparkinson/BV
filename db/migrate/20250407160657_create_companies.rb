class CreateCompanies < ActiveRecord::Migration[7.2]
  def change
    create_table :companies do |t|
      t.string :name
      t.string :country
      t.string :industry
      t.text :description
      t.string :status

      t.timestamps
    end
  end
end
