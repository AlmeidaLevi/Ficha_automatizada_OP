import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["FOR", "AGI", "INT", "PRE", "VIG", "Nex", "DisplayNex", "PV", "DisplayPV", "PE", "DisplayPE", "Sanity", "DisplaySanity"]
    static values = {
        currentPv: Number,
        currentPe: Number,
        currentSanity: Number,
        currentNex: Number
    }

    connect() {
        this.maxPV = 0
        this.currentPV = this.currentPvValue
        this.PVTarget.value = this.currentPV

        this.maxPE = 0
        this.currentPE = this.currentPeValue
        this.PETarget.value = this.currentPE

        this.maxSanity = 0
        this.currentSanity = this.currentSanityValue
        this.SanityTarget.value = this.currentSanity

        this.maxNex = 99
        this.currentNex = this.currentNexValue
        this.NexTarget.value = this.currentNex
        this.DisplayNexTarget.textContent = `${this.currentNex}/${this.maxNex}`

        this.class_selector = document.getElementById("character_character_class")
        this.updateMaxPV()
        this.updateMaxPE()
        this.updateMaxSanity()
    }

    updateMaxPV(){
        let current_class = this.class_selector.value
        let vigor = Number(this.VIGTarget.value)
        let nex = Number(this.NexTarget.value)
        if (nex == 99){
            nex += 1
        }
        if (current_class == "combatente"){
            this.maxPV = 20 + vigor
            this.maxPV += Math.floor(nex/5) * (4 + vigor)
        }else if (current_class == "especialista"){
            this.maxPV = 16 + vigor
            this.maxPV += Math.floor(nex/5) * (3 + vigor)
        }else if (current_class == "ocultista"){
            this.maxPV = 12 + vigor
            this.maxPV += Math.floor(nex/5) * (2 + vigor)
        }
        if(this.currentPV > this.maxPV){
            this.currentPV = this.maxPV
            this.PVTarget.value = this.currentPV
        }
        this.DisplayPVTarget.textContent = `${this.currentPV}/${this.maxPV}`
    }

    incrementPV(){
        if (this.currentPV < this.maxPV){
            this.currentPV += 1
            this.PVTarget.value = this.currentPV
            this.DisplayPVTarget.textContent = `${this.currentPV}/${this.maxPV}`
        }
    }

    increaseFivePV(){
        if (this.currentPV + 5 <= this.maxPV){
            this.currentPV += 5
        }else{
            this.currentPV = this.maxPV
        }
        this.PVTarget.value = this.currentPV
        this.DisplayPVTarget.textContent = `${this.currentPV}/${this.maxPV}`
    }

    decrementPV(){
        if(this.currentPV > 0){
            this.currentPV -= 1
            this.PVTarget.value = this.currentPV
            this.DisplayPVTarget.textContent = `${this.currentPV}/${this.maxPV}`
        }
    }

    decreaseFivePV(){
        if (this.currentPV - 5 >= 0){
            this.currentPV -= 5
        }else{
            this.currentPV = 0
        }
        this.PVTarget.value = this.currentPV
        this.DisplayPVTarget.textContent = `${this.currentPV}/${this.maxPV}`
    }

    updateMaxPE(){
        let current_class = this.class_selector.value
        let presenca = Number(this.PRETarget.value)
        let nex = Number(this.NexTarget.value)
        if(nex == 99){
            nex += 1
        }
        if(current_class == "combatente"){
            this.maxPE = 2 + presenca
            this.maxPE += Math.floor(nex/5) * (2 + presenca)
        }else if(current_class == "especialista"){
            this.maxPE = 3 + presenca
            this.maxPE += Math.floor(nex/5) * (3 + presenca)
        }else if(current_class == "ocultista"){
            this.maxPE = 4 + presenca
            this.maxPE += Math.floor(nex/5) * (4 + presenca)
        }
        if(this.currentPE > this.maxPE){
            this.currentPE = this.maxPE
            this.PETarget.value = this.currentPV
        }
        this.DisplayPETarget.textContent = `${this.currentPE}/${this.maxPE}`
    }

    incrementPE(){
        if(this.currentPE < this.maxPE){
            this.currentPE += 1
            this.PETarget.value = this.currentPE
            this.DisplayPETarget.textContent = `${this.currentPE}/${this.maxPE}`
        }
    }

    increaseFivePE(){
        if(this.currentPE + 5 <= this.maxPE){
            this.currentPE += 5
        }else{
            this.currentPE = this.maxPE
        }
        this.PETarget.value = this.currentPE
        this.DisplayPETarget.textContent = `${this.currentPE}/${this.maxPE}`
    }

    decrementPE(){
        if(this.currentPE > 0){
            this.currentPE -= 1
            this.PETarget.value = this.currentPE
            this.DisplayPETarget.textContent = `${this.currentPE}/${this.maxPE}`
        }
    }

    decreaseFivePE(){
        if(this.currentPE - 5 >= 0){
            this.currentPE -= 5
        }else{
            this.currentPE = 0
        }
        this.PETarget.value = this.currentPE
        this.DisplayPETarget.textContent = `${this.currentPE}/${this.maxPE}`
    }

    updateMaxSanity(){
        let current_class = this.class_selector.value
        let nex = Number(this.NexTarget.value)
        if(nex == 99){
            nex += 1
        }
        if(current_class == "combatente"){
            this.maxSanity = 12
            this.maxSanity += Math.floor(nex/5) * 3
        }else if(current_class == "especialista"){
            this.maxSanity = 16
            this.maxSanity += Math.floor(nex/5) * 4
        }else if(current_class == "ocultista"){
            this.maxSanity = 20
            this.maxSanity += Math.floor(nex/5) * 5
        }
        if(this.currentSanity > this.maxSanity){
            this.currentSanity = this.maxSanity
            this.SanityTarget.value = this.currentSanity
        }
        this.DisplaySanityTarget.textContent = `${this.currentSanity}/${this.maxSanity}`
    }

    incrementSanity(){
        if(this.currentSanity < this.maxSanity){
            this.currentSanity += 1
            this.SanityTarget.value = this.currentSanity
            this.DisplaySanityTarget.textContent = `${this.currentSanity}/${this.maxSanity}`
        }
    }

    increaseFiveSanity(){
        if(this.currentSanity + 5 <= this.maxSanity){
            this.currentSanity += 5
        }else{
            this.currentSanity = this.maxSanity
        }
        this.SanityTarget.value = this.currentSanity
        this.DisplaySanityTarget.textContent = `${this.currentSanity}/${this.maxSanity}`
    }

    decrementSanity(){
        if(this.currentSanity > 0){
            this.currentSanity -= 1
            this.SanityTarget.value = this.currentSanity
            this.DisplaySanityTarget.textContent = `${this.currentSanity}/${this.maxSanity}`
        }
    }

    decreaseFiveSanity(){
        if(this.currentSanity - 5 >= 0){
            this.currentSanity -= 5
        }else{
            this.currentSanity = 0
        }
        this.SanityTarget.value = this.currentSanity
        this.DisplaySanityTarget.textContent = `${this.currentSanity}/${this.maxSanity}`
    }

    incrementNex(){
        if(this.currentNex < this.maxNex){
            this.currentNex += 1
            this.NexTarget.value = this.currentNex
            this.DisplayNexTarget.textContent = `${this.currentNex}/${this.maxNex}`
        }
    }

    increaseFiveNex(){
        if(this.currentNex + 5 <= this.maxNex){
            this.currentNex += 5
        }else{
            this.currentNex = this.maxNex
        }
        this.NexTarget.value = this.currentNex
        this.DisplayNexTarget.textContent = `${this.currentNex}/${this.maxNex}`
    }

    decrementNex(){
        if(this.currentNex > 0){
            this.currentNex -= 1
            this.NexTarget.value = this.currentNex
            this.DisplayNexTarget.textContent = `${this.currentNex}/${this.maxNex}`
        }
    }

    decreaseFiveNex(){
        if(this.currentNex - 5 >= 0){
            this.currentNex -= 5
        }else{
            this.currentNex = 0
        }
        this.NexTarget.value = this.currentNex
        this.DisplayNexTarget.textContent = `${this.currentNex}/${this.maxNex}`
    }
}
