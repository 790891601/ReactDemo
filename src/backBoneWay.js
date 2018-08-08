class Model {
    context = null
    constructor() {
        this.n = 0
    }

    triggerEventChange() {
        this.context.emitEventChange({
            n : this.n++
        })
    }
}

class Controller {
    constructor(model, view) {
        this.model_ = model
        this.view_ = view

        model.context = this
        view.context = this
    }

    emitModelEvent() {
        this.model_.triggerEventChange()
    }

    emitEventChange(json) {
        this.view_.render(json)
    }
}

class View {
    context = null
    constructor() {
        this.btn_ = document.querySelector(".j-btn")
        this.input_ = document.querySelector(".j-input")
        this.input2_ = document.querySelector(".j-input2")
    }

    render(json) {
        this.input_.value = json.n
        this.input2_.value = json.n * 2
    }

    clickEvent() {
        const onclick = this.onClick.bind(this)
        this.btn_.addEventListener("click", onclick)
    }

    onClick() {
        this.context.emitModelEvent()
    }
}

export default class backBoneWay {
    constructor() {
        const model = this.model_ = new Model()
        const view = this.view_ = new View()

        this.controller_ = new Controller(model, view)
    }
    start() {
        this.view_.clickEvent()
    }
}