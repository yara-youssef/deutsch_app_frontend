<script setup lang="ts">
// Grammar component logic
import { ref, onMounted } from 'vue';
import { fetchTopics, deleteTopic } from '../services/grammarService';

import { useRouter } from 'vue-router';

const router = useRouter();

let topicsList = ref([]);

let totalNumber = ref(0);

const fetchTopicsFromAPI = async () => {
  try {
    const response = await fetchTopics();
    topicsList.value = response.data;
    totalNumber.value = topicsList.value.length;
    console.log(topicsList.value);
  } catch (error) {
    console.error('Error fetching topics:', error);
  }
};

onMounted(fetchTopicsFromAPI);


const goToTopic = (topicId: string) => {
  router.push(`/grammar/${topicId}`);
};

</script>

<template>
    <router-link to="/grammar/grammarform">
      <button class="btn btn-primary">Add Topic</button>
    </router-link>
  <div class="container">
    <div class="row">
      <div class="col-md-3" v-for="topic in topicsList" :key="topic.topic">
        <div class="card" @click="goToTopic(topic._id)">
          <div class="card-body">
            <h5 class="card-title">  {{ topic.topic }}</h5>
            <!-- <p class="card-text">Level: {{ topic.level }}</p> -->
            <!-- image -->

            <!-- <div  v-for="content in topic.content" :key="topic.topic">
              <p class="card-text"> name: {{ content.name }}</p>
              <p class="card-text"> description: {{ content.description }}</p>
            <p class="card-text">Example: {{ content.example }}</p>
            <p class="card-text">level: {{ content.level }}</p>
            </div> -->

           
          </div>
        </div>
      </div>
    </div>
  </div>

</template>


<style scoped>
/* @import '../assets/grammar_list.css'; */
.card {
  margin-bottom: 20px;
  cursor: pointer;
}

</style>