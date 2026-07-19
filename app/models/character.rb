class Character < ApplicationRecord
  belongs_to :user

  def max_attribute_points
    if nex < 20
      3
    else
      5
    end
  end
end
