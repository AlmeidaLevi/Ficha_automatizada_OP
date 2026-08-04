import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["Nex", "DisplayNex"]
    static values = {
        currentNex: Number
    }

    connect(){
        this.maxNex = 99
        this.currentNex = this.currentNexValue
        this.NexTarget.value = this.currentNex
        this.DisplayNexTarget.textContent = `${this.currentNex}%`
    }

    increaseFiveNex(){
        if(this.currentNex + 5 <= this.maxNex){
            this.currentNex += 5
        }else{
            this.currentNex = this.maxNex
        }
        this.NexTarget.value = this.currentNex
        this.DisplayNexTarget.textContent = `${this.currentNex}%`
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
        this.NexTarget.value = this.currentNex
        this.DisplayNexTarget.textContent = `${this.currentNex}%`
        this.notifyNexChange()

    }

    notifyNexChange(){
        this.dispatch("nexChanged")
    }
}
