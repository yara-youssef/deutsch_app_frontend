<template>
    <div>
      <button @click="editTopic(topicDetails)">Edit</button>
    <div class="topic-page">
    <h2>{{ topicDetails.topic }}</h2>
    <p>{{ topicDetails.level }}</p>

    <div  v-for="content in topicDetails.content" :key="topicDetails.topic">
              <p class="card-text"> name: {{ content.name }}</p>
              <p class="card-text"> description: {{ content.description }}</p>
            <p class="card-text">Example: {{ content.example }}</p>
            <p class="card-text">level: {{ content.level }}</p>
            </div>
  

    <!-- Display other details of the topic -->
  </div>

    </div>
  </template>
  
  <script setup lang="ts">
  // Grammar component logic
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { fetchTopicById } from '../services/grammarService';
  import router from '@/router';

const route = useRoute();

  const topicDetails = ref({});

  const getTopicData = async () => {
  try {
    const topicId= route.params.id;
    const response = await fetchTopicById(topicId);
    topicDetails.value = response.data;
    console.log(topicDetails.value);
  } catch (error) {
    console.error('Error fetching topic:', error);
  }
};

const editTopic = (topic: any) => {
  console.log(topic);
  router.push(`/grammar/grammarform/${topic._id}`);
};

  // const getTopicData = () => {
  // const topicParam = route.params.id;
  // if (Array.isArray(topicParam)) {
  //   topicName.value = topicParam[0];
  // } else {
  //   topicName.value = topicParam;
  // }
// };


onMounted(() => {
  getTopicData();
});

  </script>