require "test_helper"

class CharacterTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  test "Invalid Origin" do
    character = characters(:one)
    character.origin = "Non existent Origin"

    assert_not character.valid?
    assert_includes character.errors[:origin], "is not included in the list"
  end

  test "Invalid character_class" do
    character = characters(:one)
    assert_raises(ArgumentError) do
      character.archetype = "Non existent character_class"
    end
  end

  test "Invalid archetype raises an error" do
    character = characters(:one)
    assert_raises(ArgumentError) do
      character.archetype = "Non existent archetype"
    end
  end

  test "Archetype not matches Character_class" do
    character = characters(:atirador_de_elite)
    character.archetype = "aniquilador"
    assert_not character.valid?
    assert_includes character.errors[:archetype], "is not valid for #{character.character_class}"
  end

  test "Archetype matches character_class" do
    character = characters(:atirador_de_elite)
    character.archetype = "infiltrador"
    assert character.valid?
  end
end
