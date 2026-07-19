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
  }
end
