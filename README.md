# README

Install Ruby on Rails Guide:
https://guides.rubyonrails.org/install_ruby_on_rails.html

Ruby version
- ruby 3.4.10

System dependencies
- build-essential rustc libssl-dev libyaml-dev zlib1g-dev libgmp-dev

run:
- docker compose up -d
to create the container with a Postgres database
- rails db:create db:migrate
to initialize the database
- rails s
to run the application locally.
