class CreateSkills < ActiveRecord::Migration[8.1]
  def change
    create_table :skills do |t|
      t.string :name, null: false, default: "skill"
      t.string :atribute, null: false, default: "FOR"
      t.boolean :treined_only, null: false, default: false
      t.boolean :weight_penality, null: false, default: false

      t.timestamps
    end
  end
end
