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

        this.maxPe = 0
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
        let nexLevel = Math.floor(nex/5)-1

        if (currentClass == "combatente"){
            this.maxPv = 20 + vigor
            this.maxPv += nexLevel * (4 + vigor)
        }else if (currentClass == "especialista"){
            this.maxPv = 16 + vigor
            this.maxPv += nexLevel * (3 + vigor)
        }else if (currentClass == "ocultista"){
            this.maxPv = 12 + vigor
            this.maxPv += nexLevel * (2 + vigor)
        }
        if(Number(this.pvTarget.value) > this.maxPv){
            this.pvTarget.value = this.maxPv
        }
        this.displayPvTarget.textContent = `${this.pvTarget.value}/${this.maxPv}`
    }

    modifyCurrentPV(value){
        const newValue = Number(this.pvTarget.value) + value
        this.pvTarget.value = newValue
        this.displayPvTarget.textContent = `${this.pvTarget.value}/${this.maxPv}`

        this.pvTarget.dispatchEvent(
            new Event("change", { bubbles: true })
        )
    }

    incrementPV(){
        this.modifyCurrentPV(1)
    }

    increaseFivePV(){
        this.modifyCurrentPV(5)
    }

    decrementPV(){
        let currentPV = Number(this.pvTarget.value)
        if(currentPV > 0){
            this.modifyCurrentPV(-1)
        }
    }

    decreaseFivePV(){
        let currentPV = Number(this.pvTarget.value)
        if (currentPV - 5 >= 0){
            this.modifyCurrentPV(-5)
        }else{
            this.modifyCurrentPV(-currentPV) // PV = 0
        }
    }

    updateMaxPE(){
        let currentClass = this.classSelector.value
        let nex = Number(this.nexField.value)
        let presenca = Number(this.presencaField.value)
        if(nex == 99){
            nex += 1
        }
        let nexLevel = Math.floor(nex/5)-1

        if(currentClass == "combatente"){
            this.maxPe = 2 + presenca
            this.maxPe += nexLevel * (2 + presenca)
        }else if(currentClass == "especialista"){
            this.maxPe = 3 + presenca
            this.maxPe += nexLevel * (3 + presenca)
        }else if(currentClass == "ocultista"){
            this.maxPe = 4 + presenca
            this.maxPe += nexLevel * (4 + presenca)
        }
        this.displayPeTarget.textContent = `${this.peTarget.value}/${this.maxPe}`
    }

    modifyCurrentPE(value){
        const newValue = Number(this.peTarget.value) + value
        this.peTarget.value = newValue
        this.displayPeTarget.textContent = `${this.peTarget.value}/${this.maxPe}`

        this.peTarget.dispatchEvent(
            new Event("change", { bubbles: true })
        )
    }

    incrementPE(){
        this.modifyCurrentPE(1)
    }

    increaseFivePE(){
        this.modifyCurrentPE(5)
    }

    decrementPE(){
        let currentPe = Number(this.peTarget.value)
        if(currentPe > 0){
            this.modifyCurrentPE(-1)
        }
    }

    decreaseFivePE(){
        let currentPe = Number(this.peTarget.value)
        if(currentPe - 5 >= 0){
            this.modifyCurrentPE(-5)
        }else{
            this.modifyCurrentPE(-currentPe) // PE = 0
        }
    }

    updateMaxSanity(){
        let currentClass = this.classSelector.value
        let nex = Number(this.nexField.value)
        if(nex == 99){
            nex += 1
        }
        let nexLevel = Math.floor(nex/5)-1

        if(currentClass == "combatente"){
            this.maxSanity = 12
            this.maxSanity += nexLevel * 3
        }else if(currentClass == "especialista"){
            this.maxSanity = 16
            this.maxSanity += nexLevel * 4
        }else if(currentClass == "ocultista"){
            this.maxSanity = 20
            this.maxSanity += nexLevel * 5
        }
        this.displaySanityTarget.textContent = `${this.sanityTarget.value}/${this.maxSanity}`
    }

    modifySanity(value){
        const newValue = Number(this.sanityTarget.value) + value
        this.sanityTarget.value = newValue
        this.displaySanityTarget.textContent = `${this.sanityTarget.value}/${this.maxSanity}`

        this.sanityTarget.dispatchEvent(
            new Event("change", { bubbles: true })
        )
    }

    incrementSanity(){
        this.modifySanity(1)
    }

    increaseFiveSanity(){
        this.modifySanity(5)
    }

    decrementSanity(){
        let currentSanity = Number(this.sanityTarget.value)
        if(currentSanity > 0){
            this.modifySanity(-1)
        }
    }

    decreaseFiveSanity(){
        let currentSanity = Number(this.sanityTarget.value)
        if(currentSanity - 5 >= 0){
            this.modifySanity(-5)
        }else{
            this.modifySanity(-currentSanity) // Sanity = 0
        }
    }
}
