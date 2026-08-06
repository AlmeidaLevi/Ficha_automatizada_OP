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

    increaseFiveNex(){
        let currentNex = Number(this.nexTarget.value)
        if(currentNex + 5 <= this.maxNex){
            currentNex += 5
        }else{
            currentNex = this.maxNex
        }
        this.nexTarget.value = currentNex
        this.displayNexTarget.textContent = `${this.nexTarget.value}%`
        this.notifyNexChange()
    }

    decreaseFiveNex(){
        let currentNex = Number(this.nexTarget.value)
        if(currentNex == 99){
            currentNex = 95
        }else if(currentNex - 5 >= 5){
            currentNex -= 5
        }else{
            currentNex = 5
        }
        this.nexTarget.value = currentNex
        this.displayNexTarget.textContent = `${this.nexTarget.value}%`
        this.notifyNexChange()

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

    updatePrestigePoints(value){
        const newValue = Number(this.prestigePointsTarget.value) + value

        this.prestigePointsTarget.value = newValue
        this.displayPrestigePointsTarget.textContent = newValue
        this.setPatent()
    }

    increaseTenPoints(){
        this.updatePrestigePoints(10)
    }

    increaseTwoPoints(){
        this.updatePrestigePoints(2)
    }

    decreaseTwoPoints(){
        this.updatePrestigePoints(-2)
    }

    decreaseFivePoints(){
        this.updatePrestigePoints(-5)
    }
}
