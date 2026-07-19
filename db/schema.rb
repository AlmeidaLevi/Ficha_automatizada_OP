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

ActiveRecord::Schema[8.1].define(version: 2026_07_17_223349) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_catalog.plpgsql"

  create_table "characters", force: :cascade do |t|
    t.integer "agi", default: 0, null: false
    t.string "archetype", null: false
    t.string "character_class", null: false
    t.datetime "created_at", null: false
    t.integer "current_pe", default: 0, null: false
    t.integer "current_pv", default: 0, null: false
    t.integer "current_sanity", default: 0, null: false
    t.string "element_affinity"
    t.integer "for", default: 0, null: false
    t.integer "int", default: 0, null: false
    t.string "name", null: false
    t.integer "nex", default: 0, null: false
    t.string "origin", null: false
    t.string "patent"
    t.integer "pre", default: 0, null: false
    t.integer "prestige_points", default: 0, null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id", null: false
    t.integer "vig", default: 0, null: false
    t.index ["user_id"], name: "index_characters_on_user_id"
  end

  create_table "sessions", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.string "ip_address"
    t.datetime "updated_at", null: false
    t.string "user_agent"
    t.bigint "user_id", null: false
    t.index ["user_id"], name: "index_sessions_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.string "email_address", null: false
    t.string "password_digest", null: false
    t.datetime "updated_at", null: false
    t.string "username", null: false
    t.index ["email_address"], name: "index_users_on_email_address", unique: true
  end

  add_foreign_key "characters", "users"
  add_foreign_key "sessions", "users"
end
