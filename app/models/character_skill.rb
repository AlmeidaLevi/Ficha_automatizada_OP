class CharacterSkill < ApplicationRecord
  belongs_to :character
  belongs_to :skill

  enum :training_lv, {
    destreinado: 0,
    trainado: 5,
    veterano: 10,
    expert: 15
  }
end
