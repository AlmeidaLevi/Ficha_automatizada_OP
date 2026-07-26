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
end
