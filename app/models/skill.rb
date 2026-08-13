class Skill < ApplicationRecord
  has_many :character_skills, dependent: :destroy

  has_many :characters, through: :character_skills

  enum :atribute, {
    for: "for",
    agi: "agi",
    int: "int",
    pre: "pre",
    vig: "vig"
  }
end
