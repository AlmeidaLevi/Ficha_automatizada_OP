class CreateCharacters < ActiveRecord::Migration[8.1]
  def change
    create_table :characters do |t|
      t.string :name, null: false
      t.string :origin, null: false
      t.string :character_class, null: false
      t.string :archetype, null: false
      t.integer :current_pv, null: false, default: 0
      t.integer :current_pe, null: false, default: 0
      t.integer :current_sanity, null: false, default: 0
      t.integer :nex, null: false, default: 0
      t.string :patent
      t.integer :prestige_points, null: false, default: 0
      t.string :element_affinity
      t.references :user, null: false, foreign_key: true
      t.integer :for, null: false, default: 0
      t.integer :agi, null: false, default: 0
      t.integer :int, null: false, default: 0
      t.integer :pre, null: false, default: 0
      t.integer :vig, null: false, default: 0

      t.timestamps
    end
  end
end
