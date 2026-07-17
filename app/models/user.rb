class User < ApplicationRecord
  has_secure_password
  has_many :sessions, dependent: :destroy

  validates :username, presence: true
  validates :email_address, uniqueness: true

  normalizes :email_address, with: ->(e) { e.strip.downcase }
end
