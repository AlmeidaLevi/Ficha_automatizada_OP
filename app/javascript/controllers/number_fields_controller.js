import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["PV", "FOR", "AGI", "INT", "PRE", "VIG", "DisplayPV", "NEX"]
    static values = {
        currentPv: Number
    }
    connect() {
        this.maxPV = 0
        this.currentPV = this.currentPvValue
        this.class_selector = document.getElementById("character_character_class")
        this.current_class = this.class_selector.value
        this.updateMaxPV()
    }

    updateMaxPV(){
        this.current_class = this.class_selector.value
        let vigor = Number(this.VIGTarget.value)
        let nex = Number(this.NEXTarget.value)
        if (nex == 99){
            nex += 1
        }
        if (this.current_class == "combatente"){
            this.maxPV = 20 + vigor
            this.maxPV += Math.floor(nex/5) * (4 + vigor)
        }else if (this.current_class == "especialista"){
            this.maxPV = 16 + vigor
            this.maxPV += Math.floor(nex/5) * (3 + vigor)
        }else if (this.current_class == "ocultista"){
            this.maxPV = 12 + vigor
            this.maxPV += Math.floor(nex/5) * (2 + vigor)
        }
        if(this.currentPV > this.maxPV){
            this.currentPV = this.maxPV
        }
        this.DisplayPVTarget.textContent = `${this.currentPV}/${this.maxPV}`
    }

    incrementPV(){[]
        if (this.currentPV < this.maxPV){
            this.currentPV += 1
            this.DisplayPVTarget.textContent = `${this.currentPV}/${this.maxPV}`
        }
    }

    decrementPV(){
        if(this.currentPV > 0){
            this.currentPV -= 1
            this.DisplayPVTarget.textContent = `${this.currentPV}/${this.maxPV}`
        }
    }
}
