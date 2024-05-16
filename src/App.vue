<script>
import './assets/style.css'

export default {
  data() {
    return {
      title: 'My Vue App',
      newItem: '',
      items: [
        {
          id: 0,
          text: 'Item 1',
          isEditing: false
        },
        {
          id: 1,
          text: 'Item 2',
          isEditing: false
        },
        {
          id: 2,
          text: 'Item 3',
          isEditing: false
        }
      ]
    }
  },
  methods: {
    addTodo() {
      if (this.newItem) {
        this.items.push({
          id: this.items.length + 1,
          text: this.newItem,
          isEditing: false
        })

        this.newItem = ''
        console.log(this.items)
      }
    },
    removeItem(id) {
      // this.items.splice(index, 1)
      this.items = this.items.filter((item) => item.id !== id)
    }
  }
}
</script>

<template>
  <div class="container">
    <h1 class="title">Futuristic To-Do List</h1>
    <div class="input-container">
      <input
        v-model="newItem"
        type="text"
        id="new-item"
        placeholder="Add a new task"
        @keyup.enter="addTodo"
      />
      <button id="add-button" @click="addTodo">Add</button>
    </div>
    <ul id="todo-list">
      <!-- To-Do items will go here -->
      <li v-for="(item, index) in this.items" :key="index">
        <div class="todo-item-text">
          {{ item.text }}
        </div>
        <div class="todo-actions">
          <font-awesome-icon @click="removeItem(item.id)" :icon="['fas', 'trash']" />
        </div>
      </li>
    </ul>
  </div>
</template>

<style></style>
