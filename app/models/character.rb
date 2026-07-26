class Character < ApplicationRecord
  belongs_to :user

  def max_attribute_points
    if nex < 20
      3
    else
      5
    end
  end

  enum :origin, {
    academico: "academico",
    agente_de_saude: "agente_de_saude",
    amnesico: "amnesico",
    artista: "artista",
    atleta: "atleta",
    chef: "chef",
    criminoso: "criminoso",
    cultista_arrependido: "cultista_arrependido",
    desgarrado: "desgarrado",
    engenheiro: "engenheiro",
    executivo: "executivo",
    investigador: "investigador",
    lutador: "lutador",
    magnata: "magnata",
    mercenario: "mercenario",
    militar: "militar",
    operario: "operario",
    policial: "policial",
    religioso: "religioso",
    servidor_publico: "servidor_publico",
    teorico_da_conspiracao: "teorico_da_conspiracao",
    ti: "ti",
    trabalhador_rural: "trabalhador_rural",
    trambiqueiro: "trambiqueiro",
    universitario: "universitario",
    vitima: "vitima"
  }, validate: true

  enum :character_class, {
    combatente: "combatente",
    ocultista: "ocultista",
    especialista: "especialista"
  }, validate: true

  enum :archetype, {
    aniquilador: "aniquilador",
    combatente_de_campo: "combatente_de_campo",
    guerreiro: "guerreiro",
    operacoes_especiais: "operacoes_especiais",
    tropa_de_choque: "tropa_de_choque",
    atirador_de_elite: "atirador_de_elite",
    infiltrador: "infiltrador",
    medico_de_campo: "medico_de_campo",
    negociador: "negociador",
    tecnico: "tecnico",
    conduite: "conduite",
    flagelador: "flagelador",
    graduado: "graduado",
    intuitivo: "intuitivo",
    lamina_paranormal: "lamina_paranormal"
  }

  ARCHETYPES_BY_CLASS = {
    "combatente" => %w[aniquilador combatente_de_campo guerreiro operacoes_especiais tropa_de_choque],
    "ocultista" => %w[conduite flagelador graduado intuitivo lamina_paranormal],
    "especialista" => %w[atirador_de_elite infiltrador medico_de_campo negociador tecnico]
  }.freeze
  validate :archetype_matches_character_class

  private

    def archetype_matches_character_class
      return if archetype.blank? || character_class.blank?

      unless ARCHETYPES_BY_CLASS[character_class].include?(archetype)
        errors.add(:archetype, "is not valid for #{character_class}")
      end
    end
end
