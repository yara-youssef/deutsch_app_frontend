<template>
  <div class="container">
    <h2>Add Topic</h2>
    <form @submit.prevent="addTopic">
      <div class="mb-3">
        <label for="topic" class="form-label">Topic:</label>
        <input type="text" id="topic" v-model="topic.topic" class="form-control" required>
      </div>
      <div class="mb-3">
        <label for="level" class="form-label">Level:</label>
        <input type="text" id="level" v-model="topic.level" class="form-control" required>
      </div>
      <!-- Content fields -->
      <div v-for="(content, index) in topic.content" :key="index">
        <h4>Content {{ index + 1 }}</h4>
        <div class="mb-3">
          <label for="name" class="form-label">Name:</label>
          <input type="text" v-model="content.name" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Description:</label>
          <input type="text" v-model="content.description" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="example" class="form-label">Example:</label>
          <input type="text" v-model="content.example" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="contentLevel" class="form-label">Level:</label>
          <input type="text" v-model="content.level" class="form-control" required>
        </div>
      </div>
      <!-- Add content button -->
      <button type="button" class="btn btn-primary mb-3" @click="addContent">Add Content</button>
      <!-- Submit button -->
      <button type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { fetchTopicById, createTopic, updateTopic } from '../services/grammarService';

const route = useRoute(); // Use useRoute() to access route information
const router = useRouter(); // Initialize router
const topicId = route.params.id;

// const contents = ref([{ name: '', description: '', example: '', level: '' }]);


const topic = ref({
  topic: '',
  level: '',
  image: '',
  content: [{ name: '', description: '', example: '', level: '' }]
});


// Method to add content fields
const addContent = () => {
  topic.value.content.push({ name: '', description: '', example: '', level: '' });
};

onMounted(async () => {
  if (topicId) {
    try {
      const response = await fetchTopicById(topicId);
      topic.value = response.data;
    } catch (error) {
      console.error('Error fetching topic by ID:', error);
    }
  }
});


// Method to add the topic
const addTopics = () => {
  const topicData = {
    topic: topic.value.topic,
    level: topic.value.level,
    content: topic.value.content
  };
  console.log(topicData); // Here you can send the data to your backend or perform any other action
};


const addTopic = () => {
  console.log(topic.value);
 console.log(topicId);
  const isEdit = topicId && typeof topicId === 'string';

const promise = isEdit ? updateTopic(topicId, topic.value) : createTopic(topic.value);

  promise.then(() => {
      topic.value = {
        topic: '',
        level: '',
        image: '',
        content: [{ name: '', description: '', example: '', level: '' }]

      };

      router.push('/grammar');
    })
    .catch(error => {
      console.error('Error adding topic:', error);
    });
};


</script>

<style scoped>
/* Add your custom CSS styles here */
</style>
