window.addEventListener("load", function () {
    const Tasks = {
        app: document.querySelector('[data-js-app]'),

        init: function () {
            this.addButton = this.app.querySelector('[data-js-btn="add"]');
            this.clearButton = this.app.querySelector('[data-js-btn="clear"]');
            this.list = this.app.querySelector('[data-js-list]');
            this.inputField = this.app.querySelector("input");
        },

        newElement: function (input) {
            let newTask = document.createElement("li");
            newTask.textContent = input;
            return newTask;
        },

        addTask: function() {
            const input = this.inputField.value.trim();
            if (input !== "") {
                let newTask = this.newElement(input);
                this.list.appendChild(newTask);
                this.inputField.value = "";
            };
        },

        doneTask: function(newTask) {
            if (newTask !== null) {
                newTask.style.textDecoration = "line-through";
                newTask.style.color = "gray";
            };
        },

        clearTask: function() {
            while (this.list.firstChild) {
                this.list.removeChild(this.list.firstChild);
            };
        }
    };
    Tasks.init();
    
    
    Tasks.addButton.addEventListener("click", function() {
        Tasks.addTask();
    });
    
    
    Tasks.list.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            Tasks.doneTask(event.target);
        }
    });

    Tasks.clearButton.addEventListener("click", function(){
        Tasks.clearTask();
    });
    
});