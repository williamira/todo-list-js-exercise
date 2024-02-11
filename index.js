// Arrays to keep track of each task's state

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has ${this.complete ? " " : " not "}been complete`);
    },
    markComplete: function() {
      this.complete =true;
    }
  };
  return task
};

  // DRIVER CODE BELOW
  
  // task 0
  const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of litter box");
  const task2 = newTask("Do Laundry", "😨"); // task 1
  const tasks = [task1, task2]

  task1.logState() // Clean Cat Litter has not been completed
  task1.markComplete()
  task1.logState()