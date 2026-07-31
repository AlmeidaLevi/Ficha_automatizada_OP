require "test_helper"

class AuthenticationRequiredTest < ActionDispatch::IntegrationTest
  user_fields = {
    username: "one",
    email_address: "one@example.com",
    password_digest: "senha"
  }

  character_fields = {
            name: "Test",
            origin: "academico",
            character_class: "combatente",
            archetype: "aniquilador",
            current_pv: 0,
            current_pe: 0,
            current_sanity: 0,
            nex: 0,
            patent: "recruta",
            prestige_points: 0,
            element_affiniry: "conhecimento",
            user_id: 1,
            for: 1,
            agi: 1,
            int: 1,
            pre: 1,
            vig: 1
          }

  PUBLIC_SIGNATURES = [
    "GET sessions#new",
    "POST sessions#create",
    "GET passwords#new",
    "POST passwords#create",
    "GET passwords#edit",
    "PUT passwords#update",
    "PATCH passwords#update",
    "POST users#create",
    "GET users#new"
  ].freeze

  PROTECTED_ENDPOINTS = [
    {
      signature: "GET characters#index",
      verb: :get,
      path: ->(test) { test.characters_path }
    },
    {
      signature: "GET characters#new",
      verb: :get,
      path: ->(test) { test.new_character_path }
    },
    {
      signature: "GET characters#edit",
      verb: :get,
      path: ->(test) { test.edit_character_path(test.characters(:one)) },
      params: ->(test) {
        {
          id: test.characters(:one).id
        }
      }
    },
    {
      signature: "POST characters#create",
      verb: :post,
      path: ->(test) { test.characters_path },
      params: ->(test) {
        {
          character: character_fields
        }
      }
    },
    {
      signature: "PATCH characters#update",
      verb: :patch,
      path: ->(test) { test.character_path(test.characters(:one)) },
      params: ->(test) {
        {
          character: character_fields
        }
      }
    },

    {
      signature: "PUT characters#update",
      verb: :put,
      path: ->(test) { test.character_path(test.characters(:one)) },
      params: ->(test) {
        {
          character: character_fields
        }
      }
    },
    {
      signature: "DELETE characters#destroy",
      verb: :delete,
      path: ->(test) { test.character_path(test.characters(:one)) }
    },
    {
      signature: "DELETE sessions#destroy",
      verb: :delete,
      path: ->(test) { test.session_path }
    },
    {
      signature: "GET users#index",
      verb: :get,
      path: ->(test) { test.users_path }
    },
    {
      signature: "GET users#edit",
      verb: :get,
      path: ->(test) { test.edit_user_path(test.users(:one)) }
    },
    {
      signature: "GET users#show",
      verb: :get,
      path: ->(test) { test.user_path(test.users(:one)) }
    },
    {
      signature: "PATCH users#update",
      verb: :patch,
      path: ->(test) { test.user_path(test.users(:one)) },
      params: ->(test) {
        {
          user: user_fields
        }
      }
    },
    {
      signature: "PUT users#update",
      verb: :put,
      path: ->(test) { test.user_path(test.users(:one)) },
      params: ->(test) {
        {
          user: user_fields
        }
      }
    },
    {
      signature: "DELETE users#destroy",
      verb: :delete,
      path: ->(test) { test.user_path(test.users(:one)) }
    }
  ]

  PROTECTED_ENDPOINTS.each do |endpoint|
    test "#{endpoint.fetch(:signature)} exige autenticação" do
      path = endpoint.fetch(:path).call(self)

      params =
      if endpoint[:params]
        endpoint.fetch(:params).call(self)
      else
        {}
      end

      public_send(
        endpoint.fetch(:verb),
        path,
        params: params
      )

      assert_redirected_to new_session_path
    end
  end
end
