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
    character.character_class = "Non existent character_class"

    assert_not character.valid?
    assert_includes character.errors[:character_class], "is not included in the list"
  end
end
