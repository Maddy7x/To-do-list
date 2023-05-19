window.addEventListener("load", function () {
    const canvas = document.getElementById("MyCanvas");
    const ctx = canvas.getContext("2d");

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    const height = canvas.height;
    const width = canvas.width;

    const Tasks = {
        addButton: document.getElementById("btn_1"),
        clearButton: document.getElementById("btn_2"),
        inputField: document.getElementById("input"),
        list: document.getElementById("list"),

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