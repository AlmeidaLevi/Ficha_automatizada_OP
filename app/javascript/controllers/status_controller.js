import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["Pv", "DisplayPv", "Pe", "DisplayPe", "Sanity", "DisplaySanity"]
    static values = {
        currentPv: Number,
        currentPe: Number,
        currentSanity: Number,
    }

    connect() {
        this.maxPv = 0
        this.currentPv = this.currentPvValue
        this.PvTarget.value = this.currentPv

        this.maxPE = 0
        this.currentPE = this.currentPeValue
        this.PeTarget.value = this.currentPE

        this.maxSanity = 0
        this.currentSanity = this.currentSanityValue
        this.SanityTarget.value = this.currentSanity


        this.class_selector = document.getElementById("character_character_class")
        this.vigor_field = document.getElementById("character_vig")
        this.presenca_field = document.getElementById("character_pre")
        this.nex_field = document.getElementById("character_nex")

        this.updateMaxPV()
        this.updateMaxPE()
        this.updateMaxSanity()
    }

    updateMaxPV(){
        let current_class = this.class_selector.value
        let nex = Number(this.nex_field.value)
        let vigor = Number(this.vigor_field.value)
        console.log(this.currentPv)
        console.log(this.maxPv)
        if (nex == 99){
            nex += 1
        }
        if (current_class == "combatente"){
            this.maxPv = 20 + vigor
            this.maxPv += (Math.floor(nex/5)-1) * (4 + vigor)
        }else if (current_class == "especialista"){
            this.maxPv = 16 + vigor
            this.maxPv += (Math.floor(nex/5)-1) * (3 + vigor)
        }else if (current_class == "ocultista"){
            this.maxPv = 12 + vigor
            this.maxPv += (Math.floor(nex/5)-1) * (2 + vigor)
        }
        if(this.currentPv > this.maxPv){
            this.currentPv = this.maxPv
            this.PvTarget.value = this.currentPv
        }
        this.DisplayPvTarget.textContent = `${this.currentPv}/${this.maxPv}`
    }

    incrementPV(){
        if (this.currentPv < this.maxPv){
            this.currentPv += 1
            this.PvTarget.value = this.currentPv
            this.DisplayPvTarget.textContent = `${this.currentPv}/${this.maxPv}`
        }
    }

    increaseFivePV(){
        if (this.currentPv + 5 <= this.maxPv){
            this.currentPv += 5
        }else{
            this.currentPv = this.maxPv
        }
        this.PvTarget.value = this.currentPv
        this.DisplayPvTarget.textContent = `${this.currentPv}/${this.maxPv}`
    }

    decrementPV(){
        if(this.currentPv > 0){
            this.currentPv -= 1
            this.PvTarget.value = this.currentPv
            this.DisplayPvTarget.textContent = `${this.currentPv}/${this.maxPv}`
        }
    }

    decreaseFivePV(){
        if (this.currentPv - 5 >= 0){
            this.currentPv -= 5
        }else{
            this.currentPv = 0
        }
        this.PvTarget.value = this.currentPv
        this.DisplayPvTarget.textContent = `${this.currentPv}/${this.maxPv}`
    }

    updateMaxPE(){
        let current_class = this.class_selector.value
        let nex = Number(this.nex_field.value)
        let presenca = Number(this.presenca_field.value)
        if(nex == 99){
            nex += 1
        }
        if(current_class == "combatente"){
            this.maxPE = 2 + presenca
            this.maxPE += (Math.floor(nex/5)-1) * (2 + presenca)
        }else if(current_class == "especialista"){
            this.maxPE = 3 + presenca
            this.maxPE += (Math.floor(nex/5)-1) * (3 + presenca)
        }else if(current_class == "ocultista"){
            this.maxPE = 4 + presenca
            this.maxPE += (Math.floor(nex/5)-1) * (4 + presenca)
        }
        if(this.currentPE > this.maxPE){
            this.currentPE = this.maxPE
            this.PeTarget.value = this.currentPv
        }
        this.DisplayPeTarget.textContent = `${this.currentPE}/${this.maxPE}`
    }

    incrementPE(){
        if(this.currentPE < this.maxPE){
            this.currentPE += 1
            this.PeTarget.value = this.currentPE
            this.DisplayPeTarget.textContent = `${this.currentPE}/${this.maxPE}`
        }
    }

    increaseFivePE(){
        if(this.currentPE + 5 <= this.maxPE){
            this.currentPE += 5
        }else{
            this.currentPE = this.maxPE
        }
        this.PeTarget.value = this.currentPE
        this.DisplayPeTarget.textContent = `${this.currentPE}/${this.maxPE}`
    }

    decrementPE(){
        if(this.currentPE > 0){
            this.currentPE -= 1
            this.PeTarget.value = this.currentPE
            this.DisplayPeTarget.textContent = `${this.currentPE}/${this.maxPE}`
        }
    }

    decreaseFivePE(){
        if(this.currentPE - 5 >= 0){
            this.currentPE -= 5
        }else{
            this.currentPE = 0
        }
        this.PeTarget.value = this.currentPE
        this.DisplayPeTarget.textContent = `${this.currentPE}/${this.maxPE}`
    }

    updateMaxSanity(){
        let current_class = this.class_selector.value
        let nex = Number(this.nex_field.value)
        if(nex == 99){
            nex += 1
        }
        if(current_class == "combatente"){
            this.maxSanity = 12
            this.maxSanity += (Math.floor(nex/5)-1) * 3
        }else if(current_class == "especialista"){
            this.maxSanity = 16
            this.maxSanity += (Math.floor(nex/5)-1) * 4
        }else if(current_class == "ocultista"){
            this.maxSanity = 20
            this.maxSanity += (Math.floor(nex/5)-1) * 5
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

}
