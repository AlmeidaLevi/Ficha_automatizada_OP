import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["class", "archetype"]

    static values = {
        saveUrl: String
    }

    connect(){
        this.csrfToken = document.querySelector('meta[name="csrf-token"]').content
    }

    save(event){
        const field = event.currentTarget
        const fieldName = field.name.match(/\[([^\]]+)\]/)?.[1]

        fetch(this.saveUrlValue, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "X-CSRF-Token": this.csrfToken
            },
            body: JSON.stringify({
                character: {
                    [fieldName]: field.value
                }
            })
        })
    }

    saveClassArchetype(){
        const currentClass = this.classTarget.value
        const currentArchetype = this.archetypeTarget.value

        fetch(this.saveUrlValue, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "X-CSRF-Token": this.csrfToken
            },
            body: JSON.stringify({
                character: {
                    character_class: currentClass,
                    archetype: currentArchetype,
                }
            })
        })
    }
}
