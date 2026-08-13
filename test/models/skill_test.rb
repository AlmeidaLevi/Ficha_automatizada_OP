require "test_helper"

class SkillTest < ActiveSupport::TestCase
  # ------------------------------------------------------------
  # Existência das skills fixas
  #
  # Como Skill é um catálogo fixo, não criamos novas skills
  # nesses testes. Usamos as skills que já existem no banco
  # através dos fixtures.
  # ------------------------------------------------------------

  test "skills should exist in the database" do
    assert Skill.exists?
  end

  # ------------------------------------------------------------
  # A skill deve possuir os atributos esperados
  # ------------------------------------------------------------

  test "skill should have a name" do
    skill = skills(:luta)

    assert_not_nil skill.name
    assert_not_empty skill.name
  end

  test "skill should have an atribute" do
    skill = skills(:luta)

    assert_not_nil skill.atribute
  end

  # ------------------------------------------------------------
  # Enum de atributo
  #
  # O model define:
  #
  # for -> "for"
  # agi -> "agi"
  # int -> "int"
  # pre -> "pre"
  # vig -> "vig"
  # ------------------------------------------------------------

  test "skill should support all attributes" do
    assert_includes Skill.atributes.keys, "for"
    assert_includes Skill.atributes.keys, "agi"
    assert_includes Skill.atributes.keys, "int"
    assert_includes Skill.atributes.keys, "pre"
    assert_includes Skill.atributes.keys, "vig"
  end

  test "skill should return the correct attribute enum" do
    skill = skills(:luta)

    assert skill.for?
  end

  # ------------------------------------------------------------
  # Valores booleanos
  # ------------------------------------------------------------

  test "skill should have treined_only as boolean" do
    skill = skills(:luta)

    assert_includes [ true, false ], skill.treined_only
  end

  test "skill should have weight_penality as boolean" do
    skill = skills(:luta)

    assert_includes [ true, false ], skill.weight_penality
  end

  # ------------------------------------------------------------
  # Relação com CharacterSkill
  # ------------------------------------------------------------

  test "skill should have many character skills" do
    skill = skills(:luta)

    assert_respond_to skill, :character_skills
  end

  # ------------------------------------------------------------
  # Relação com Character
  # ------------------------------------------------------------

  test "skill should have many characters through character skills" do
    skill = skills(:luta)

    assert_respond_to skill, :characters
  end

  test "skill characters should be obtained through character skills" do
    skill = skills(:luta)
    character = characters(:one)

    CharacterSkill.create!(
      character: character,
      skill: skill,
      training_lv: :destreinado
    )

    assert_includes skill.characters, character
  end

  # ------------------------------------------------------------
  # Exclusão em cascata
  #
  # Mesmo sendo uma Skill fixa, o comportamento da associação
  # continua sendo importante: se uma Skill for removida,
  # suas CharacterSkills também devem ser removidas.
  # ------------------------------------------------------------

  test "destroying a skill should destroy its character skills" do
    skill = skills(:luta)
    character = characters(:one)

    character_skill = CharacterSkill.create!(
      character: character,
      skill: skill,
      training_lv: :destreinado
    )

    assert_difference("CharacterSkill.count", -1) do
      skill.destroy!
    end

    assert_not CharacterSkill.exists?(character_skill.id)
  end
end
