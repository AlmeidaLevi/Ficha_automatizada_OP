import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["nex", "displayNex", "patent", "displayPatent", "prestigePoints", "displayPrestigePoints"]
    static values = {
        currentNex: Number,
        prestigePoints: Number
    }

    connect(){
        this.maxNex = 99
        this.nexTarget.value = this.currentNexValue
        this.displayNexTarget.textContent = `${this.currentNexValue}%`

        this.prestigePointsTarget.value = this.prestigePointsValue
        this.displayPrestigePointsTarget.textContent = this.prestigePointsValue
        this.setPatent()
    }

    modifyNex(value){
        const newValue = Number(this.nexTarget.value) + value
        this.nexTarget.value = newValue
        this.displayNexTarget.textContent = `${newValue}%`
        this.nexTarget.dispatchEvent(
          new Event("change", { bubbles: true })
        )
    }

    increaseFiveNex(){
        let currentNex = Number(this.nexTarget.value)
        if(currentNex + 5 <= this.maxNex){
            this.modifyNex(5)
        }else{
            this.modifyNex(this.maxNex - currentNex)
        }
    }

    decreaseFiveNex(){
        let currentNex = Number(this.nexTarget.value)
        if(currentNex == 99){
            this.modifyNex(-4) // 99 - 4 = 95
        }else if(currentNex - 5 >= 5){
            this.modifyNex(-5)
        }else{
            this.modifyNex(-currentNex + 5)
        }
    }

    notifyNexChange(){
        this.dispatch("nexChanged")
    }

    setPatent(){
        /**
         * Valor dos pontos de prestigio em relação as patentes:
         * 0-19: recruta
         * 20-49: operador
         * 50-99: agente_especial
         * 100-199: oficial_de_operacoes
         * 200-: agente_de_elite
        */
        let currentPP = Number(this.prestigePointsTarget.value)

        if (currentPP < 20){
            this.displayPatentTarget.textContent = "Recruta"
            this.patentTarget.value = "recruta"
        }else if(currentPP < 50){
            this.displayPatentTarget.textContent = "Operador"
            this.patentTarget.value = "operador"
        }else if(currentPP < 100){
            this.displayPatentTarget.textContent = "Agente especial"
            this.patentTarget.value = "agente_especial"
        }else if(currentPP < 200){
            this.displayPatentTarget.textContent = "Oficial de Operacoes"
            this.patentTarget.value = "oficial_de_operacoes"
        }else{
            this.displayPatentTarget.textContent = "Agente de elite"
            this.patentTarget.value = "agente_de_elite"
        }
    }

    modifyPrestigePoints(value){
        const newValue = Number(this.prestigePointsTarget.value) + value

        this.prestigePointsTarget.value = newValue
        this.displayPrestigePointsTarget.textContent = newValue
        this.setPatent()
        this.prestigePointsTarget.dispatchEvent(
          new Event("change", { bubbles: true })
        )
    }

    increaseTenPoints(){
        this.modifyPrestigePoints(10)
    }

    increaseTwoPoints(){
        this.modifyPrestigePoints(2)
    }

    decreaseTwoPoints(){
        this.modifyPrestigePoints(-2)
    }

    decreaseFivePoints(){
        this.modifyPrestigePoints(-5)
    }
}
