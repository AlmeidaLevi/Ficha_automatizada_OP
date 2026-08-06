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
        this.pvTarget.value = this.currentPvValue

        this.maxPE = 0
        this.peTarget.value = this.currentPeValue

        this.maxSanity = 0
        this.sanityTarget.value = this.currentSanityValue


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
        if(Number(this.pvTarget.value) > this.maxPv){
            this.pvTarget.value = this.maxPv
        }
        this.displayPvTarget.textContent = `${this.pvTarget.value}/${this.maxPv}`
    }

    incrementPV(){
        let currentPV = Number(this.pvTarget.value)
        if (currentPV < this.maxPv){
            currentPV += 1
            this.pvTarget.value = currentPV
            this.displayPvTarget.textContent = `${this.pvTarget.value}/${this.maxPv}`
        }
    }

    increaseFivePV(){
        let currentPV = Number(this.pvTarget.value)

        if (currentPV + 5 <= this.maxPv){
            currentPV += 5
        }else{
            currentPV = this.maxPv
        }
        this.pvTarget.value = currentPV
        this.displayPvTarget.textContent = `${this.pvTarget.value}/${this.maxPv}`
    }

    decrementPV(){
        let currentPV = Number(this.pvTarget.value)
        if(currentPV > 0){
            currentPV -= 1
            this.pvTarget.value = currentPV
            this.displayPvTarget.textContent = `${this.pvTarget.value}/${this.maxPv}`
        }
    }

    decreaseFivePV(){
        let currentPV = Number(this.pvTarget.value)
        if (currentPV - 5 >= 0){
            currentPV -= 5
        }else{
            currentPV = 0
        }
        this.pvTarget.value = currentPV
        this.displayPvTarget.textContent = `${this.pvTarget.value}/${this.maxPv}`
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
        if(Number(this.peTarget.value) > this.maxPE){
            this.peTarget.value = this.maxPE
        }
        this.displayPeTarget.textContent = `${this.peTarget.value}/${this.maxPE}`
    }

    incrementPE(){
        let currentPe = Number(this.peTarget.value)
        if(currentPe < this.maxPE){
            currentPe += 1
            this.peTarget.value = currentPe
            this.displayPeTarget.textContent = `${this.peTarget.value}/${this.maxPE}`
        }
    }

    increaseFivePE(){
        let currentPe = Number(this.peTarget.value)
        if(currentPe + 5 <= this.maxPE){
            currentPe += 5
        }else{
            currentPe = this.maxPE
        }
        this.peTarget.value = currentPe
        this.displayPeTarget.textContent = `${this.peTarget.value}/${this.maxPE}`
    }

    decrementPE(){
        let currentPe = Number(this.peTarget.value)
        if(currentPe > 0){
            currentPe -= 1
            this.peTarget.value = currentPe
            this.displayPeTarget.textContent = `${currentPe}/${this.maxPE}`
        }
    }

    decreaseFivePE(){
        let currentPe = Number(this.peTarget.value)
        if(currentPe - 5 >= 0){
            currentPe -= 5
        }else{
            currentPe = 0
        }
        this.peTarget.value = currentPe
        this.displayPeTarget.textContent = `${currentPe}/${this.maxPE}`
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
        if(Number(this.sanityTarget.value) > this.maxSanity){
            this.sanityTarget.value = this.maxSanity
        }
        this.displaySanityTarget.textContent = `${this.sanityTarget.value}/${this.maxSanity}`
    }

    incrementSanity(){
        let currentSanity = Number(this.sanityTarget.value)
        if(currentSanity < this.maxSanity){
            currentSanity += 1
            this.sanityTarget.value = currentSanity
            this.displaySanityTarget.textContent = `${this.sanityTarget.value}/${this.maxSanity}`
        }
    }

    increaseFiveSanity(){
        let currentSanity = Number(this.sanityTarget.value)
        if(currentSanity + 5 <= this.maxSanity){
            currentSanity += 5
        }else{
            currentSanity = this.maxSanity
        }
        this.sanityTarget.value = currentSanity
        this.displaySanityTarget.textContent = `${this.sanityTarget.value}/${this.maxSanity}`
    }

    decrementSanity(){
        let currentSanity = Number(this.sanityTarget.value)
        if(currentSanity > 0){
            currentSanity -= 1
            this.sanityTarget.value = currentSanity
            this.displaySanityTarget.textContent = `${this.sanityTarget.value}/${this.maxSanity}`
        }
    }

    decreaseFiveSanity(){
        let currentSanity = Number(this.sanityTarget.value)
        if(currentSanity - 5 >= 0){
            currentSanity -= 5
        }else{
            currentSanity = 0
        }
        this.sanityTarget.value = currentSanity
        this.displaySanityTarget.textContent = `${this.sanityTarget.value}/${this.maxSanity}`
    }

}
