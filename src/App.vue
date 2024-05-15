<template>
  <div class="container">
    <h1 class="title">Futuristic To-Do List</h1>
    <div class="input-container">
      <input type="text" id="new-item" placeholder="Add a new task" />
      <button id="add-button">Add</button>
    </div>
    <ul id="todo-list">
      <!-- To-Do items will go here -->
      <li>An item here</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'My Vue App',
      newItem: '',
      items: ['Item 1', 'Item 2', 'Item 3']
    }
  },
  methods: {
    addItem() {
      if (this.newItem) {
        this.items.push(this.newItem)
        this.newItem = ''
      }
    },
    removeItem(index) {
      this.items.splice(index, 1)
    }
  }
}
</script>

<style>
body {
  background-color: #1a1a1a;
  color: #f0f0f0;
  font-family: 'Arial', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.container {
  background: #262626;
  border-radius: 15px;
  padding: 20px 40px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  text-align: center;
}

.title {
  font-size: 2.5em;
  color: #00aaff;
  margin-bottom: 20px;
}

.input-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

input[type='text'] {
  padding: 10px;
  font-size: 1.2em;
  border: 2px solid #00aaff;
  border-radius: 10px;
  background: #1a1a1a;
  color: #f0f0f0;
  outline: none;
}

input[type='text']::placeholder {
  color: #555;
}

button {
  padding: 10px 20px;
  font-size: 1.2em;
  margin-left: 10px;
  border: none;
  border-radius: 10px;
  background: #00aaff;
  color: #1a1a1a;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #0088cc;
}

#todo-list {
  list-style: none;
  padding: 0;
}

#todo-list li {
  background: #333;
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.3s;
}

#todo-list li:hover {
  background: #444;
}

.remove-button {
  background: #ff5555;
  border: none;
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;
  color: #fff;
  transition: background 0.3s;
}

.remove-button:hover {
  background: #ff3333;
}
</style>
