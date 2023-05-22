window.addEventListener("load", function () {
    const Tasks = {
        // app: document.querySelector('[data-js-app]'),

        init: function (rootSelector) {
            this.app = document.querySelector(rootSelector);

            this.addButton = this.app.querySelector('[data-js-btn="add"]');
            this.clearButton = this.app.querySelector('[data-js-btn="clear"]');
            this.buttons = this.app.querySelectorAll('[data-js-btn]');
            this.list = this.app.querySelector('[data-js-list]');
            this.inputField = this.app.querySelector("input");

            this.addListeners();
        },

        addListeners: function () {
            this.buttons.forEach(el => {
                el.addEventListener("click", this.handleBtnClick);
            })

            // this.addButton.addEventListener("click", function(e) {
            //     this.addTask();
            // });
            // this.clearButton.addEventListener("click", function(){
            //     this.clearTask();
            // });
            
            
            this.list.addEventListener("click", function(event) {
                if (event.target.tagName === "LI") {
                    this.doneTask(event.target);
                }
            });
        
        },

        handleBtnClick: function(event) {
            let el = event.target;
            let action = el?.attributes?.data;
            
            if (action == 'add') {
                this.addTask()
            }

            if (action == 'clear') {
                this.clearTask()
            }
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

    /**
     * Consumer Programmer
     */
    Tasks.init('[data-js-app]');
    
    
    
    
});