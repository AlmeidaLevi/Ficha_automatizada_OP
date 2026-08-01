import { Controller } from "@hotwired/stimulus"

const archetypes = {
  combatente: [ ["Aniquilador", "aniquilador"],
                ["Combatente de Campo", "combatente_de_campo"],
                ["Guerreiro", "guerreiro"],
                ["Operações Especiais", "operacoes_especiais"],
                ["Tropa de Choque", "tropa_de_choque"]
              ],
  ocultista:  [ ["Conduíte", "conduite"],
                ["Flagelador", "flagelador"],
                ["Graduado", "graduado"],
                ["Intuitivo", "intuitivo"],
                ["Lâmina Paranormal", "lamina_paranormal"]
              ],
  especialista: [ ["Atirador de Elite", "atirador_de_elite"],
                  ["Infiltrador", "infiltrador"],
                  ["Médico de Campo", "medico_de_campo"],
                  ["Negociador", "negociador"],
                  ["Técnico", "tecnico"]
                ]
}

export default class extends Controller {
  static targets = ["characterClass", "archetype"]
  connect() {
    this.updateArchetype()
  }

  updateArchetype(){
    const characterClass = this.characterClassTarget.value
    this.archetypeTarget.innerHTML = ""
    const options = archetypes[characterClass]

    options.forEach(([text, value]) => {
      const option = document.createElement("option")

      option.textContent = text
      option.value = value

      this.archetypeTarget.appendChild(option)
    });

  }

  notifyClassChange(){
    this.dispatch("changed")
  }
}
