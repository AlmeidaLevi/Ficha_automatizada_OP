import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["nex", "displayNex"]
    static values = {
        currentNex: Number
    }

    connect(){
        this.maxNex = 99
        this.currentNex = this.currentNexValue
        this.nexTarget.value = this.currentNex
        this.displayNexTarget.textContent = `${this.currentNex}%`
    }

    increaseFiveNex(){
        if(this.currentNex + 5 <= this.maxNex){
            this.currentNex += 5
        }else{
            this.currentNex = this.maxNex
        }
        this.nexTarget.value = this.currentNex
        this.displayNexTarget.textContent = `${this.currentNex}%`
        this.notifyNexChange()
    }

    decreaseFiveNex(){
        if(this.currentNex == 99){
            this.currentNex = 95
        }else if(this.currentNex - 5 >= 5){
            this.currentNex -= 5
        }else{
            this.currentNex = 5
        }
        this.nexTarget.value = this.currentNex
        this.displayNexTarget.textContent = `${this.currentNex}%`
        this.notifyNexChange()

    }

    notifyNexChange(){
        this.dispatch("nexChanged")
    }
}
