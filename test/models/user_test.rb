require "test_helper"

class UserTest < ActiveSupport::TestCase
  test "downcases and strips email_address" do
    user = User.new(email_address: " DOWNCASED@EXAMPLE.COM ")
    assert_equal("downcased@example.com", user.email_address)
  end
  test "don't allow a user without username" do
    user = User.new(
      email_address: "teste@email.com",
      password: "12345678",
      password_confirmation: "12345678"
    )

    assert_not user.valid?
    assert_includes user.errors[:username], "can't be blank"
  end

  test "don't allow a user without email" do
    user = User.new(
      username: "teste",
      password: "12345678",
      password_confirmation: "12345678"
    )

    assert_not user.valid?
    assert_includes user.errors[:email_address], "can't be blank"
  end
end
