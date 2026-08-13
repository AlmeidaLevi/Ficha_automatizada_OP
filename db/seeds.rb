# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
#

Skill.find_or_create_by!(name: "Adestramento") do |skill|
  skill.atribute = "pre"
  skill.treined_only = true
  skill.weight_penality = false
end

Skill.find_or_create_by!(name: "Artes") do |skill|
  skill.atribute = "pre"
  skill.treined_only = true
  skill.weight_penality = false
end

Skill.find_or_create_by!(name: "Atletismo") do |skill|
  skill.atribute = "for"
  skill.treined_only = false
  skill.weight_penality = false
end

Skill.find_or_create_by!(name: "Atualidades") do |skill|
  skill.atribute = "int"
  skill.treined_only = true
  skill.weight_penality = false
end

Skill.find_or_create_by!(name: "Ciencias") do |skill|
  skill.atribute = "int"
  skill.treined_only = true
  skill.weight_penality = false
end

Skill.find_or_create_by!(name: "crime") do |skill|
  skill.atribute = "agi"
  skill.treined_only = true
  skill.weight_penality = true
end

Skill.find_or_create_by!(name: "Diplomacia") do |skill|
  skill.atribute = "pre"
  skill.treined_only = false
  skill.weight_penality = false
end

Skill.find_or_create_by!(name: "Enganação") do |skill|
  skill.atribute = "pre"
  skill.treined_only = false
  skill.weight_penality = false
end

Skill.find_or_create_by!(name: "Fortitude") do |skill|
  skill.atribute = "vig"
  skill.treined_only = false
  skill.weight_penality = false
end

Skill.find_or_create_by!(name: "Furtividade") do |skill|
  skill.atribute = "agi"
  skill.treined_only = false
  skill.weight_penality = true
end

Skill.find_or_create_by!(name: "Iniciativa") do |skill|
  skill.atribute = "agi"
  skill.treined_only = false
  skill.weight_penality = true
end

Skill.find_or_create_by!(name: "Intimidação") do |skill|
  skill.atribute = "pre"
  skill.treined_only = false
  skill.weight_penality = false
end

Skill.find_or_create_by!(name: "Intuição") do |skill|
  skill.atribute = "pre"
  skill.treined_only = false
  skill.weight_penality = false
end

Skill.find_or_create_by!(name: "Investigação") do |skill|
  skill.atribute = "int"
  skill.treined_only = false
  skill.weight_penality = false
end

Skill.find_or_create_by!(name: "Luta") do |skill|
  skill.atribute = "for"
  skill.treined_only = false
  skill.weight_penality = false
end

Skill.find_or_create_by!(name: "Medicina") do |skill|
  skill.atribute = "int"
  skill.treined_only = false
  skill.weight_penality = false
end

Skill.find_or_create_by!(name: "Ocultismo") do |skill|
  skill.atribute = "int"
  skill.treined_only = true
  skill.weight_penality = false
end

Skill.find_or_create_by!(name: "Percepção") do |skill|
  skill.atribute = "pre"
  skill.treined_only = false
  skill.weight_penality = false
end

Skill.find_or_create_by!(name: "Pilotagem") do |skill|
  skill.atribute = "agi"
  skill.treined_only = true
  skill.weight_penality = false
end

Skill.find_or_create_by!(name: "Pontaria") do |skill|
  skill.atribute = "agi"
  skill.treined_only = false
  skill.weight_penality = false
end

Skill.find_or_create_by!(name: "Profissão") do |skill|
  skill.atribute = "int"
  skill.treined_only = true
  skill.weight_penality = false
end

Skill.find_or_create_by!(name: "Reflexos") do |skill|
  skill.atribute = "agi"
  skill.treined_only = false
  skill.weight_penality = false
end

Skill.find_or_create_by!(name: "Religião") do |skill|
  skill.atribute = "pre"
  skill.treined_only = true
  skill.weight_penality = false
end

Skill.find_or_create_by!(name: "Sobrevivência") do |skill|
  skill.atribute = "int"
  skill.treined_only = false
  skill.weight_penality = false
end

Skill.find_or_create_by!(name: "Tática") do |skill|
  skill.atribute = "int"
  skill.treined_only = true
  skill.weight_penality = false
end

Skill.find_or_create_by!(name: "Tecnologia") do |skill|
  skill.atribute = "int"
  skill.treined_only = true
  skill.weight_penality = false
end

Skill.find_or_create_by!(name: "Vontade") do |skill|
  skill.atribute = "pre"
  skill.treined_only = false
  skill.weight_penality = false
end
