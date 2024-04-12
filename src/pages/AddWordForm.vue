<template>
  <div class="form-container">
    <h2>Neue Wörter hinzufügen</h2>
    <form @submit.prevent="submitForm">
      <div v-for="(word, index) in words" :key="index" class="word-section">
        <div class="mb-3">
          <label :for="'word' + index" class="form-label">Wort:</label>
          <input type="text" :id="'word' + index" v-model="word.word" class="form-control" required>
        </div>

        <div class="mb-3">
          <label :for="'type' + index" class="form-label">Typ:</label>
          <select :id="'type' + index" v-model="word.type" class="form-select" required>
            <option v-for="(value, key) in word_type" :key="key" :value="value">{{ key }}</option>
          </select>
        </div>

        <!-- Additional fields based on type -->
        <template v-if="word.type === word_type.noun">
          <div class="mb-3">
            <label :for="'gender' + index" class="form-label">Gender:</label>
            <select :id="'gender' + index" v-model="word.gender" class="form-select" required>
              <option v-for="(value, key) in word_gender" :key="key" :value="value">{{ value }}</option>
            </select>
          </div>
          <div v-if="word.gender !== word_gender.plural" class="mb-3">
            <label :for="'plural' + index" class="form-label">Plural:</label>
            <input type="text" :id="'plural' + index" v-model="word.plural" class="form-control">
          </div>
        </template>
        <template v-else-if="word.type === word_type.verb">
          <div class="mb-3">
            <label :for="'past' + index" class="form-label">Präteritum:</label>
            <input type="text" :id="'past' + index" v-model="word.past_tense" class="form-control">
          </div>
          <div class="mb-3">
            <label :for="'pastPerfect' + index" class="form-label">Perfekt:</label>
            <input type="text" :id="'pastPerfect' + index" v-model="word.perfect_tense" class="form-control">
          </div>
        </template>

        <div class="mb-3">
          <label :for="'translation' + index" class="form-label">Übersetzung (en):</label>
          <input required type="text" :id="'translation' + index" v-model="word.translation" class="form-control">
        </div>

        <div class="mb-3">
          <label :for="'example_de' + index" class="form-label">Beispiel:</label>
          <input type="text" :id="'example_de' + index" v-model="word.example_de" class="form-control">
        </div>

        <div class="mb-3">
          <label :for="'example_en' + index" class="form-label">Beispiel auf Englisch:</label>
          <input type="text" :id="'example_en' + index" v-model="word.example_en" class="form-control">
        </div>

        <div class="mb-3">
          <label :for="'source' + index" class="form-label">Quelle:</label>
          <input type="text" :id="'source' + index" v-model="word.source" class="form-control">
        </div>

        <div class="mb-3">
          <label for="image" class="form-label">Bild:</label>
          <input type="file" id="image" ref="imageInput" @change="event => handleImageUpload(event, index)"
            accept="image/*">
        </div>

        <div v-if="word.image" class="uploaded-image-container">
          <img :src="word.image" alt="Uploaded Image" class="uploaded-image">
        </div>

      </div>

      <button v-if="wordId == null" type="button" class="btn btn-secondary" @click="addWord">Weiteres Wort
        hinzufügen</button>
      <button type="submit" class="btn btn-primary">Wörter hinzufügen</button>

    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router'; // Update import
import { createWord, updateWord } from '../services/wordService';
import { word_type, word_gender } from '../words/WordsInterface';
import { fetchWordById } from '../services/wordService';

const route = useRoute(); // Use useRoute() to access route information
const router = useRouter(); // Initialize router
const wordId = route.params.id; // Get the word ID from the route parameters
// const word = ref(null);

// fetchWordById(wordId)
//   .then(response => {
//     word.value = response.data;
//   })
//   .catch(error => {
//     console.error('Error fetching word by ID:', error);
//   });

// Fetch word by ID if editing
onMounted(async () => {
  if (wordId) {
    try {
      const response = await fetchWordById(wordId);
      words.value[0] = response.data;
    } catch (error) {
      console.error('Error fetching word by ID:', error);
    }
  }
});

const words = ref([
  {
    word: '',
    type: '',
    translation: '',
    gender: '',
    example_de: '',
    example_en: '',
    past_tense: '',
    perfect_tense: '',
    plural: '',
    image: '',
    source: ''
  }
]);

const addWord = () => {
  words.value.push({
    word: '',
    type: '',
    translation: '',
    gender: '',
    example_de: '',
    example_en: '',
    past_tense: '',
    perfect_tense: '',
    plural: '',
    image: '',
    source: ''
  });
};

const handleImageUpload = (event, index) => {
  const file = event.target.files[0]; // Get the selected file
  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file); // Convert the file to base64 string
    reader.onload = () => {
      const img = new Image();
      img.src = reader.result; // Set the source of the image to the base64 string

      img.onload = () => {
        const maxWidth = 500; // Maximum width in pixels
        const maxHeight = 500; // Maximum height in pixels

        let width = img.width;
        let height = img.height;

        // Calculate the new dimensions while maintaining the aspect ratio
        if (width > height) {
          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
          }
        }

        // Create a canvas element
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Set canvas dimensions to resized image dimensions
        canvas.width = width;
        canvas.height = height;

        // Draw the resized image on the canvas
        ctx.drawImage(img, 0, 0, width, height);

        // Convert the resized image back to a data URL
        const resizedDataURL = canvas.toDataURL('image/jpeg');

        // Use the resized image data URL as needed
        words.value[index].image = resizedDataURL;
      };
    };
  }
};

const submitForm = () => {
  const promises = words.value.map(wordData => {
    if (wordId) {
      // If editing, update the existing word
      return updateWord(wordId, wordData);
    } else {
      // If adding, create a new word
      return createWord(wordData);
    }
  });

  Promise.all(promises)
    .then(() => {
      // Reset form fields after successful submission
      words.value = [
        {
          word: '',
          type: '',
          translation: '',
          gender: '',
          example_de: '',
          example_en: '',
          past_tense: '',
          perfect_tense: '',
          plural: '',
          image: '',
          source: ''
        }
      ];
      router.push('/vocabulary');
    })
    .catch(error => {
      console.error('Error adding words:', error);
    });
};
</script>



<style scoped>
.form-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  /* Semi-transparent dark background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  /* Ensure the overlay is on top of other content */
}

/* Form container styles */
.form-container {
  padding: 2rem 11rem;
  width: 75%;
  /* background-color: #fff; 
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); 
  max-width: 400px;
  width: 100%; 
   position: absolute;
    z-index: 4; */
}

/* Custom styles for form elements */
.form-container h2 {
  margin-bottom: 20px;
}

.word-section {
  border-bottom: 1px solid;
  margin: 15px 0;
}

.uploaded-image-container {
  margin-top: 20px;
}

.uploaded-image {
  max-width: 100%;
  /* Ensure the image fits within its container */
}
</style>