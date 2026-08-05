import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["pv", "displayPv", "pe", "displayPe", "sanity", "displaySanity"]
    static values = {
        currentPv: Number,
        currentPe: Number,
        currentSanity: Number,
    }

    connect() {
        this.maxPv = 0
        this.currentPv = this.currentPvValue
        this.pvTarget.value = this.currentPv

        this.maxPE = 0
        this.currentPe = this.currentPeValue
        this.peTarget.value = this.currentPe

        this.maxSanity = 0
        this.currentSanity = this.currentSanityValue
        this.sanityTarget.value = this.currentSanity


        this.classSelector = document.getElementById("character_character_class")
        this.vigorField = document.getElementById("character_vig")
        this.presencaField = document.getElementById("character_pre")
        this.nexField = document.getElementById("character_nex")

        this.updateMaxPV()
        this.updateMaxPE()
        this.updateMaxSanity()
    }

    updateMaxPV(){
        let currentClass = this.classSelector.value
        let nex = Number(this.nexField.value)
        let vigor = Number(this.vigorField.value)
        console.log(this.currentPv)
        console.log(this.maxPv)
        if (nex == 99){
            nex += 1
        }
        if (currentClass == "combatente"){
            this.maxPv = 20 + vigor
            this.maxPv += (Math.floor(nex/5)-1) * (4 + vigor)
        }else if (currentClass == "especialista"){
            this.maxPv = 16 + vigor
            this.maxPv += (Math.floor(nex/5)-1) * (3 + vigor)
        }else if (currentClass == "ocultista"){
            this.maxPv = 12 + vigor
            this.maxPv += (Math.floor(nex/5)-1) * (2 + vigor)
        }
        if(this.currentPv > this.maxPv){
            this.currentPv = this.maxPv
            this.pvTarget.value = this.currentPv
        }
        this.displayPvTarget.textContent = `${this.currentPv}/${this.maxPv}`
    }

    incrementPV(){
        if (this.currentPv < this.maxPv){
            this.currentPv += 1
            this.pvTarget.value = this.currentPv
            this.displayPvTarget.textContent = `${this.currentPv}/${this.maxPv}`
        }
    }

    increaseFivePV(){
        if (this.currentPv + 5 <= this.maxPv){
            this.currentPv += 5
        }else{
            this.currentPv = this.maxPv
        }
        this.pvTarget.value = this.currentPv
        this.displayPvTarget.textContent = `${this.currentPv}/${this.maxPv}`
    }

    decrementPV(){
        if(this.currentPv > 0){
            this.currentPv -= 1
            this.pvTarget.value = this.currentPv
            this.displayPvTarget.textContent = `${this.currentPv}/${this.maxPv}`
        }
    }

    decreaseFivePV(){
        if (this.currentPv - 5 >= 0){
            this.currentPv -= 5
        }else{
            this.currentPv = 0
        }
        this.pvTarget.value = this.currentPv
        this.displayPvTarget.textContent = `${this.currentPv}/${this.maxPv}`
    }

    updateMaxPE(){
        let currentClass = this.classSelector.value
        let nex = Number(this.nexField.value)
        let presenca = Number(this.presencaField.value)
        if(nex == 99){
            nex += 1
        }
        if(currentClass == "combatente"){
            this.maxPE = 2 + presenca
            this.maxPE += (Math.floor(nex/5)-1) * (2 + presenca)
        }else if(currentClass == "especialista"){
            this.maxPE = 3 + presenca
            this.maxPE += (Math.floor(nex/5)-1) * (3 + presenca)
        }else if(currentClass == "ocultista"){
            this.maxPE = 4 + presenca
            this.maxPE += (Math.floor(nex/5)-1) * (4 + presenca)
        }
        if(this.currentPe > this.maxPE){
            this.currentPe = this.maxPE
            this.peTarget.value = this.currentPv
        }
        this.displayPeTarget.textContent = `${this.currentPe}/${this.maxPE}`
    }

    incrementPE(){
        if(this.currentPe < this.maxPE){
            this.currentPe += 1
            this.peTarget.value = this.currentPe
            this.displayPeTarget.textContent = `${this.currentPe}/${this.maxPE}`
        }
    }

    increaseFivePE(){
        if(this.currentPe + 5 <= this.maxPE){
            this.currentPe += 5
        }else{
            this.currentPe = this.maxPE
        }
        this.peTarget.value = this.currentPe
        this.displayPeTarget.textContent = `${this.currentPe}/${this.maxPE}`
    }

    decrementPE(){
        if(this.currentPe > 0){
            this.currentPe -= 1
            this.peTarget.value = this.currentPe
            this.displayPeTarget.textContent = `${this.currentPe}/${this.maxPE}`
        }
    }

    decreaseFivePE(){
        if(this.currentPe - 5 >= 0){
            this.currentPe -= 5
        }else{
            this.currentPe = 0
        }
        this.peTarget.value = this.currentPe
        this.displayPeTarget.textContent = `${this.currentPe}/${this.maxPE}`
    }

    updateMaxSanity(){
        let currentClass = this.classSelector.value
        let nex = Number(this.nexField.value)
        if(nex == 99){
            nex += 1
        }
        if(currentClass == "combatente"){
            this.maxSanity = 12
            this.maxSanity += (Math.floor(nex/5)-1) * 3
        }else if(currentClass == "especialista"){
            this.maxSanity = 16
            this.maxSanity += (Math.floor(nex/5)-1) * 4
        }else if(currentClass == "ocultista"){
            this.maxSanity = 20
            this.maxSanity += (Math.floor(nex/5)-1) * 5
        }
        if(this.currentSanity > this.maxSanity){
            this.currentSanity = this.maxSanity
            this.sanityTarget.value = this.currentSanity
        }
        this.displaySanityTarget.textContent = `${this.currentSanity}/${this.maxSanity}`
    }

    incrementSanity(){
        if(this.currentSanity < this.maxSanity){
            this.currentSanity += 1
            this.sanityTarget.value = this.currentSanity
            this.displaySanityTarget.textContent = `${this.currentSanity}/${this.maxSanity}`
        }
    }

    increaseFiveSanity(){
        if(this.currentSanity + 5 <= this.maxSanity){
            this.currentSanity += 5
        }else{
            this.currentSanity = this.maxSanity
        }
        this.sanityTarget.value = this.currentSanity
        this.displaySanityTarget.textContent = `${this.currentSanity}/${this.maxSanity}`
    }

    decrementSanity(){
        if(this.currentSanity > 0){
            this.currentSanity -= 1
            this.sanityTarget.value = this.currentSanity
            this.displaySanityTarget.textContent = `${this.currentSanity}/${this.maxSanity}`
        }
    }

    decreaseFiveSanity(){
        if(this.currentSanity - 5 >= 0){
            this.currentSanity -= 5
        }else{
            this.currentSanity = 0
        }
        this.sanityTarget.value = this.currentSanity
        this.displaySanityTarget.textContent = `${this.currentSanity}/${this.maxSanity}`
    }

}
