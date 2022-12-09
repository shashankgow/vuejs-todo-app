<template>
  <div id="app">
    <section id="adding_task" class="container">
      <h1>Todo-App</h1>
      <div class="bg-secondary d-flex p-3 rounded">
        <b-form-input
          v-model="todo_task"
          placeholder="Add task for today"
        ></b-form-input>
        <b-button variant="primary" @click="addTask">Add Task</b-button>
      </div>
    </section>
    <section class="container mt-3">
      <div
        id="added_task"
        class="bg-secondary rounded d-flex p-3 d-flex flex-column"
      >
        <b-list-group
          class="d-flex flex-row w-100"
          v-for="(task, index) in added_task"
          :key="task"
        >
          <b-list-group-item
            class="d-flex justify-content-between align-items-center col-12 mt-2"
            :id="index"
            :ref="index"
          >
            <span :ref="task">{{ task }}</span>
            <div>
              <b-badge
                pill
                variant="primary"
                class="bg-success m-2"
                @click="completeTask(task)"
                >Complete</b-badge
              >
              <b-badge
                pill
                variant="primary"
                class="bg-warning m-2"
                @click="pendingTask(task)"
                >Pending</b-badge
              >
              <b-badge
                pill
                variant="primary"
                class="bg-danger m-2"
                @click="deleteTask(index)"
                >Delete</b-badge
              >
            </div>
          </b-list-group-item>
        </b-list-group>
      </div>
    </section>
    <section class="container mt-3">
      <div class="row">
        <div
          id="completedtask"
          class="col-6 bg-success rounded d-flex p-3 d-flex flex-column"
        >
          <h5>Completed Task</h5>
          <b-list-group
            v-for="(completed_task, index) in completed_tasks"
            :key="index"
          >
            <b-list-group-item
              class="d-flex justify-content-between align-items-center col-12 mt-2 mr-2"
              :id="index"
              :ref="index"
            >
              <span :ref="completed_task">{{ completed_task }}</span>
              <div>
                <b-badge
                  pill
                  variant="primary"
                  class="bg-danger m-2"
                  @click="deleteCompletedTask(completed_task)"
                  >Delete</b-badge
                >
              </div>
            </b-list-group-item>
          </b-list-group>
        </div>
        <div
          id="pendingtask"
          class="col-6 bg-warning rounded d-flex flex-column p-3"
        >
          <h5>Pending Task</h5>
          <b-list-group
            v-for="(pending_task, index) in pending_tasks"
            :key="index"
          >
            <b-list-group-item
              class="d-flex justify-content-between align-items-center col-12 mt-2 ml-2"
            >
              <span :ref="pending_task">{{ pending_task }}</span>
              <div>
                <b-badge
                  pill
                  variant="primary"
                  class="bg-success m-2"
                  @click="movetoCompletedTask(pending_task)"
                  >Complete</b-badge
                >
              </div>
            </b-list-group-item>
          </b-list-group>
        </div>
      </div>
    </section>
    <div class="p-3">
      <b-button block variant="danger">Delete All</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      todo_task: "",
      added_task: [],
      completed_tasks: [],
      pending_tasks: [],
    };
  },
  components: {},
  methods: {
    addTask() {
      if (this.todo_task == "") {
        alert("Please Add Task!");
      } else {
        this.added_task.push(this.todo_task);
        this.todo_task = "";
      }
    },
    deleteTask(index) {
      console.log(this.$refs[index]);
      this.$refs[index][0].remove();
      // document.getElementById(index).remove();
    },
    completeTask(task) {
      console.log(task);
      // console.log(this.$refs[task][0].innerText);
      let newArray = this.added_task.filter((element) => {
        return element != task;
      });
      this.added_task = newArray;
      this.completed_tasks.push(task);
    },
    pendingTask(task) {
      // console.log(event);
      console.log(task);
      this.pending_tasks.push(task);
      let index = this.added_task.indexOf(task);
      if (index > -1) {
        this.added_task.splice(index, 1);
      }
    },
    deleteCompletedTask(task) {
      console.log(this.completed_tasks);
      var index = this.completed_tasks.indexOf(task);
      console.log(index);
      if (index > -1) {
        this.completed_tasks.splice(index, 1);
      }
    },
    movetoCompletedTask(task) {
      console.log("movetoCompletedTask", task);
      let index = this.pending_tasks.indexOf(task);
      console.log(index);
      if (index > -1) {
        this.pending_tasks.splice(index, 1);
      }
      this.completed_tasks.push(task);
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
