require "test_helper"

class CharacterSkillTest < ActiveSupport::TestCase
  # ------------------------------------------------------------
  # Associação com Character
  # ------------------------------------------------------------

  test "character skill should belong to a character" do
    character = characters(:one)
    skill = skills(:luta)

    character_skill = CharacterSkill.create!(
      character: character,
      skill: skill,
      training_lv: :destreinado
    )

    assert_equal character, character_skill.character
  end

  # ------------------------------------------------------------
  # Associação com Skill
  # ------------------------------------------------------------

  test "character skill should belong to a skill" do
    character = characters(:one)
    skill = skills(:luta)

    character_skill = CharacterSkill.create!(
      character: character,
      skill: skill,
      training_lv: :destreinado
    )

    assert_equal skill, character_skill.skill
  end

  # ------------------------------------------------------------
  # Enum training_lv
  # ------------------------------------------------------------

  test "training level should support destreinado" do
    character = characters(:one)
    skill = skills(:luta)

    character_skill = CharacterSkill.create!(
      character: character,
      skill: skill,
      training_lv: :destreinado
    )

    assert character_skill.destreinado?
    assert_equal 0, character_skill.training_lv_before_type_cast
  end

  test "training level should support trainado" do
    character = characters(:one)
    skill = skills(:luta)

    character_skill = CharacterSkill.create!(
      character: character,
      skill: skill,
      training_lv: :trainado
    )

    assert character_skill.trainado?
    assert_equal 5, character_skill.training_lv_before_type_cast
  end

  test "training level should support veterano" do
    character = characters(:one)
    skill = skills(:luta)

    character_skill = CharacterSkill.create!(
      character: character,
      skill: skill,
      training_lv: :veterano
    )

    assert character_skill.veterano?
    assert_equal 10, character_skill.training_lv_before_type_cast
  end

  test "training level should support expert" do
    character = characters(:one)
    skill = skills(:luta)

    character_skill = CharacterSkill.create!(
      character: character,
      skill: skill,
      training_lv: :expert
    )

    assert character_skill.expert?
    assert_equal 15, character_skill.training_lv_before_type_cast
  end

  # ------------------------------------------------------------
  # Alteração do nível de treinamento
  # ------------------------------------------------------------

  test "training level should be changeable" do
    character = characters(:one)
    skill = skills(:luta)

    character_skill = CharacterSkill.create!(
      character: character,
      skill: skill,
      training_lv: :destreinado
    )

    character_skill.trainado!

    assert character_skill.trainado?

    character_skill.veterano!

    assert character_skill.veterano?

    character_skill.expert!

    assert character_skill.expert?
  end

  # ------------------------------------------------------------
  # Valores do enum
  #
  # Garante que os valores definidos no model não sejam
  # alterados acidentalmente.
  # ------------------------------------------------------------

  test "training level should have the correct values" do
    assert_equal 0, CharacterSkill.training_lvs["destreinado"]
    assert_equal 5, CharacterSkill.training_lvs["trainado"]
    assert_equal 10, CharacterSkill.training_lvs["veterano"]
    assert_equal 15, CharacterSkill.training_lvs["expert"]
  end

  # ------------------------------------------------------------
  # Relação inversa com Character
  # ------------------------------------------------------------

  test "character should include the character skill" do
    character = characters(:one)
    skill = skills(:luta)

    character_skill = CharacterSkill.create!(
      character: character,
      skill: skill,
      training_lv: :destreinado
    )

    assert_includes character.character_skills, character_skill
  end

  # ------------------------------------------------------------
  # Relação inversa com Skill
  # ------------------------------------------------------------

  test "skill should include the character skill" do
    character = characters(:one)
    skill = skills(:luta)

    character_skill = CharacterSkill.create!(
      character: character,
      skill: skill,
      training_lv: :destreinado
    )

    assert_includes skill.character_skills, character_skill
  end

  # ------------------------------------------------------------
  # Uma mesma Skill pode pertencer a vários Characters
  # ------------------------------------------------------------

  test "same skill can belong to different characters" do
    character1 = characters(:one)
    character2 = characters(:two)
    skill = skills(:luta)

    character_skill1 = CharacterSkill.create!(
      character: character1,
      skill: skill,
      training_lv: :trainado
    )

    character_skill2 = CharacterSkill.create!(
      character: character2,
      skill: skill,
      training_lv: :expert
    )

    assert_equal skill, character_skill1.skill
    assert_equal skill, character_skill2.skill

    assert_not_equal(
      character_skill1.training_lv,
      character_skill2.training_lv
    )
  end

  # ------------------------------------------------------------
  # Um Character pode possuir várias Skills
  # ------------------------------------------------------------

  test "character can have different skills" do
    character = characters(:one)

    skill1 = skills(:luta)
    skill2 = skills(:reflexos)

    character_skill1 = CharacterSkill.create!(
      character: character,
      skill: skill1,
      training_lv: :trainado
    )

    character_skill2 = CharacterSkill.create!(
      character: character,
      skill: skill2,
      training_lv: :veterano
    )

    assert_includes character.character_skills, character_skill1
    assert_includes character.character_skills, character_skill2
  end

  # ------------------------------------------------------------
  # Não permitir a mesma combinação Character + Skill
  #
  # Isso depende do índice UNIQUE que criamos na migration:
  #
  # [:character_id, :skill_id]
  # ------------------------------------------------------------

  test "same character should not have the same skill twice" do
    character = characters(:one)
    skill = skills(:luta)

    CharacterSkill.create!(
      character: character,
      skill: skill,
      training_lv: :trainado
    )

    assert_raises(ActiveRecord::RecordNotUnique) do
      CharacterSkill.create!(
        character: character,
        skill: skill,
        training_lv: :expert
      )
    end
  end
end
