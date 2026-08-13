class CreateCharacterSkills < ActiveRecord::Migration[8.1]
  def change
    create_table :character_skills do |t|
      t.references :character, null: false, foreign_key: true
      t.references :skill, null: false, foreign_key: true
      t.integer :training_lv

      t.timestamps
    end

    # Um personagem não pode possuir a mesma skill duas vezes.
    add_index :character_skills,
              [ :character_id, :skill_id ],
              unique: true
  end
end
