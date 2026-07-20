require "test_helper"

class CharactersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @character = characters(:one)
    sign_in_as(users(:one))
  end

  test "should get index" do
    get characters_url
    assert_response :success
  end

  test "should get new" do
    get new_character_url
    assert_response :success
  end

  test "should create character" do
    assert_difference("Character.count") do
      post characters_url, params: { character: { agi: @character.agi, archetype: @character.archetype, character_class: @character.character_class, current_pe: @character.current_pe, current_pv: @character.current_pv, current_sanity: @character.current_sanity, element_affinity: @character.element_affinity, for: @character.for, int: @character.int, name: @character.name, nex: @character.nex, origin: @character.origin, patent: @character.patent, pre: @character.pre, prestige_points: @character.prestige_points, user_id: @character.user_id, vig: @character.vig } }
    end

    assert_redirected_to character_url(Character.last)
  end

  test "should get edit" do
    get edit_character_url(@character)
    assert_response :success
  end

  test "should update character" do
    patch character_url(@character), params: { character: { agi: @character.agi, archetype: @character.archetype, character_class: @character.character_class, current_pe: @character.current_pe, current_pv: @character.current_pv, current_sanity: @character.current_sanity, element_affinity: @character.element_affinity, for: @character.for, int: @character.int, name: @character.name, nex: @character.nex, origin: @character.origin, patent: @character.patent, pre: @character.pre, prestige_points: @character.prestige_points, user_id: @character.user_id, vig: @character.vig } }
    assert_redirected_to character_url(@character)
  end

  test "should destroy character" do
    assert_difference("Character.count", -1) do
      delete character_url(@character)
    end

    assert_redirected_to characters_url
  end
end
