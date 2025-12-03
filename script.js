document.addEventListener('DOMContentLoaded', () => {
    // HTML Elements
    const to_do_text = document.getElementById("to-do-text");
    const checkbox_button = document.getElementsByClassName("checkbox");
    const checkboxes = document.getElementsByClassName("checkboxes");
    const add_task_button = document.getElementById("bt-add-task");
    const login_button = document.getElementById("login");
    const tasks = document.getElementById("tasks");
    const task_name = document.getElementsByClassName("task-name");

    // Memory
    let tasks_memory = [];
    let current_pos = 0;

    // To-do list day title logic
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const dayName = days[today.getDay()];

    to_do_text.innerHTML = dayName + "'s To-Do List";

    // Add task logic: create a checkbox, let the user input, and save it as a task
    function add_checkbox() {
        let task1_ul = document.createElement("ul");
        let task1_checkboxes = document.createElement("div");
        let task_1_button = document.createElement("button");
        let task_1_input = document.createElement("input");
        task1_checkboxes.className = "checkboxes";
        task_1_button.className = "checkbox";
        task_1_input.className = "task-name";
        task_1_input.setAttribute("type", "text");
        task_1_input.setAttribute("placeholder", "...");
        tasks.appendChild(task1_ul);
        task1_ul.appendChild(task1_checkboxes);
        task1_checkboxes.appendChild(task_1_button);
        task1_checkboxes.appendChild(task_1_input);

        const task_pos = current_pos;
        let already_run = false;

        task_1_input.addEventListener("keydown", (event) => {
            function increment_pos() {
                if (!already_run) {
                    current_pos = current_pos + 1;
                    already_run = true;
                }
            }
            if (event.key === "Enter") {
                add_task(task_1_input.value, task_pos);
                increment_pos();
            }
        });
    }

    function add_task(task_string, pos) {
        tasks_memory[pos] = task_string;
    }

    add_task_button.addEventListener("click", add_checkbox);
});