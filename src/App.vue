<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fetchWords, createWord as createWordAPI, updateWord as updateWordAPI, deleteWord as deleteWordAPI } from './services/wordService';

// Define a reactive variable to store the data fetched from the API
const items = ref([]);

/// fetch
// const fetchData = () => {
//   fetchWords()
//     .then(response => {
//       // Update the reactive variable with the received data
//       items.value = response.data;
//     })
//     .catch(error => {
//       console.error('Error fetching data:', error);
//     });
// };


// const createWord = (newWord: any) => {
//   createWordAPI(newWord)
//     .then(() => {
//       fetchData(); // Fetch data again to update the list with the new word
//     })
//     .catch(error => {
//       console.error('Error creating word:', error);
//     });
// };

// const addWordList = (wordList: any[]) => {
//   wordList.forEach(word => {
//     createWord(word);
//   });
// };

// const updateWord = (id: string, updatedWord: any) => {
//   updateWordAPI(id, updatedWord)
//     .then(() => {
//       fetchData(); // Fetch data again to update the list with the updated word
//     })
//     .catch(error => {
//       console.error('Error updating word:', error);
//     });
// };

// const deleteWord = (id: string) => {
//   deleteWordAPI(id)
//     .then(() => {
//       fetchData(); // Fetch data again to update the list after deletion
//     })
//     .catch(error => {
//       console.error('Error deleting word:', error);
//     });
// };


// Fetch data when the component is mounted
// onMounted(() => {
//   fetchData();
// });
</script>

<template>

  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link class="navbar-brand" to="/">Deutsch lernen</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Hauptseite</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/vocabulary">Wortschatz</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/grammar">Grammatik</router-link>
          </li>
          <!-- Add more navigation links as needed -->
        </ul>
      </div>
    </div>
  </nav>

    <router-view></router-view>

    <ul>
      <!-- Loop through the items and display each item -->
      <!-- <li v-for="item in items" :key="item">{{ item }}</li> -->
    </ul>

    <!-- <TheWelcome /> -->

  </div>
</template>