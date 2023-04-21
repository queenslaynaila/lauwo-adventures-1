# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_04_13_163243) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admins", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_admins_on_email", unique: true
    t.index ["reset_password_token"], name: "index_admins_on_reset_password_token", unique: true
  end

  create_table "adventures", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "blogs", force: :cascade do |t|
    t.string "image_url"
    t.string "title"
    t.text "content"
    t.string "author"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "bookings", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "phone_number"
    t.string "country"
    t.string "travel_period"
    t.integer "no_of_travellers"
    t.string "additional_info"
    t.integer "no_of_adults"
    t.integer "no_of_children", default: 0
    t.integer "no_of_small_children", default: 0
    t.string "bookable_type"
    t.bigint "bookable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["bookable_type", "bookable_id"], name: "index_bookings_on_bookable"
  end

  create_table "cultural_tours", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "location"
    t.string "price"
    t.string "image_url"
    t.text "itinerary"
    t.text "inclusions"
    t.text "exclusions"
    t.bigint "adventure_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["adventure_id"], name: "index_cultural_tours_on_adventure_id"
  end

  create_table "day_trips", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.text "itinerary"
    t.string "price"
    t.string "image_url"
    t.text "inclusions"
    t.text "exclusions"
    t.bigint "adventure_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["adventure_id"], name: "index_day_trips_on_adventure_id"
  end

  create_table "inquiries", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.text "message"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "itineries", force: :cascade do |t|
    t.integer "route_duration_id"
    t.string "day_no"
    t.string "title"
    t.text "description"
    t.string "hiking_time"
    t.string "distance"
    t.string "max_altitude"
    t.string "vegatation"
    t.string "meals"
    t.string "accomodation"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "jwt_denylist", force: :cascade do |t|
    t.string "jti", null: false
    t.datetime "exp", null: false
    t.index ["jti"], name: "index_jwt_denylist_on_jti"
  end

  create_table "mountains", force: :cascade do |t|
    t.string "mountain_name"
    t.text "description"
    t.string "overview"
    t.string "image_url"
    t.bigint "adventure_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["adventure_id"], name: "index_mountains_on_adventure_id"
  end

  create_table "planningforms", force: :cascade do |t|
    t.string "adventure"
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "phone_number"
    t.string "country_of_residence"
    t.string "tour_duration_in_days"
    t.string "budget"
    t.string "when_to_travel"
    t.string "how_many_travelers"
    t.string "no_of_adults"
    t.string "no_of_children"
    t.string "extra_info"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "route_durations", force: :cascade do |t|
    t.integer "route_id"
    t.string "title"
    t.integer "duration_days"
    t.integer "standard_price"
    t.integer "premium_price"
    t.text "standard_inclusive"
    t.text "standard_exclusive"
    t.text "premium_inclusive"
    t.text "premium_exclusive"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "routes", force: :cascade do |t|
    t.string "route_name"
    t.integer "mountain_id"
    t.text "description"
    t.string "image_URL"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "safari_itineries", force: :cascade do |t|
    t.integer "day"
    t.string "title"
    t.string "description"
    t.string "mealplan"
    t.string "image_url"
    t.integer "safari_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "distance"
  end

  create_table "safaris", force: :cascade do |t|
    t.string "name"
    t.string "duration"
    t.string "image_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "cultural_tours", "adventures"
  add_foreign_key "day_trips", "adventures"
  add_foreign_key "mountains", "adventures"
end
