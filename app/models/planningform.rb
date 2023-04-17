class Planningform < ApplicationRecord
    validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :phone_number, length: { in: 10..15 }
    validates :phone_number,format: { with: /\A\+?\d{10,15}\z/ }
end
