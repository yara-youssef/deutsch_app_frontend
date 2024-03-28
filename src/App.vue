<script setup lang="ts">
import TheWelcome from './components/TheWelcome.vue'
import { ref, onMounted } from 'vue';
import axios from 'axios';

// Define a reactive variable to store the data fetched from the API
const items = ref([]);

// Function to fetch data from the backend API
const fetchData = () => {
  axios.get('http://localhost:3000/api/words')
    .then(response => {
      // Update the reactive variable with the received data
      items.value = response.data;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};

// Fetch data when the component is mounted
onMounted(() => {
  fetchData();
});
</script>

<template>
<ul>
      <!-- Loop through the items and display each item -->
      <li v-for="item in items" :key="item">{{ item.word }}</li>
    </ul>
    <TheWelcome />
  
</template>