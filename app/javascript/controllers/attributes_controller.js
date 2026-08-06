import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["for", "agi", "int", "vig", "pre"]

    connect(){

    }

    filterAttributeField(event){
        let attValue = Number(event.currentTarget.valueAsNumber)

        if(Number.isNaN(attValue)){
            event.currentTarget.value = 0
            return
        }

        if(attValue < -99){
            event.currentTarget.value = -99
            return
        }

        if(attValue > 99){
            event.currentTarget.value = 99
            return
        }


    }

    notifyForChange(){
        this.dispatch("forChanged")
    }

    notifyAgiChange (){
        this.dispatch("agiChanged")
    }

    notifyIntChange(){
        this.dispatch("intChanged")
    }

    notifyVigChange(){
        this.dispatch("vigChanged")
    }

    notifyPreChange(){
        this.dispatch("preChanged")
    }
}
