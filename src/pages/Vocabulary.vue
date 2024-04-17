<style scoped>
@import '../assets/list.css';
</style>

<!-- TODO:
css: next and previous : bottom
toggle: next to each part

later: add to DB
- fix filtering: from DB
- sorting
- search
- pagination
- quiz
-->
<script setup lang="ts">
import {ref, onMounted, watch } from 'vue';
import { fetchWords, deleteWord, fetchFilteredWords } from '../services/wordService';
import {word_source} from '../words/WordsInterface';
import router from '@/router';

// import {miroWords} from '../words/words';
// import AddWordForm from '../components/AddWordForm.vue';
// import { words2, words3, words4, words5, words6, words7, words8, words9, miroWords } from '../words/words';
// import { createWord } from '../services/wordService';

const currentIndex = ref(0);
// const currentWord = ref(miroWords[currentIndex.value]);
const currentWord = ref(null);
const selectedWords = ref([]);
const typeVisible = ref(true);
const translationVisible = ref(true);
const exampleVisible = ref(true);
const englishExampleVisible = ref(true);
const selectedType = ref('');
const selectedSource = ref('');
const viewMode = ref('single');
let wordsList = ref([]);
let totalNumber = ref(0);

const showGermanWord = ref(true);

// const fetchWordsFromAPI = async () => {
//   try {
//     // const response = selectedSource.value == ''? await fetchWords(): await filterWordsBySource(selectedSource.value); // Call fetchWords from wordservice.ts
//     const response = await fetchWords(); // Call fetchWords from wordservice.ts
//    wordsList = response.data; // Assuming the response data is an array of words
//     // Set the currentWord to the first word in the fetched list
//     currentWord.value = wordsList.length > 0 ? wordsList[0] : null;
//     totalNumber = wordsList.length;
//   } catch (error) {
//     console.error('Error fetching words:', error);
//   }
// };


const fetchWordsFromAPI = async () => {
  try {
    const filter = {};
    if (selectedType.value) {
      filter['type'] = selectedType.value;
    }
    if (selectedSource.value) {
      filter['source'] = selectedSource.value;
    }
    const response = selectedSource.value== '' || selectedSource.value==null  ? await fetchWords() : await fetchFilteredWords(filter);
    // const response = await fetchWords(filter);
    wordsList = response.data;
    currentWord.value = wordsList.length > 0 ? wordsList[0] : null;
    totalNumber = wordsList.length;
  } catch (error) {
    console.error('Error fetching words:', error);
  }
};



// Fetch words when the component is mounted
onMounted(fetchWordsFromAPI);


watch(selectedSource, () => {
  fetchWordsFromAPI(); 
});


const toggleViewMode = () => {
  viewMode.value = viewMode.value === 'single' ? 'all' : 'single';
}

const filteredWords = () => {
  let filtered = wordsList;

  if (selectedType.value) {
    filtered = filtered.filter(word => word.type === selectedType.value);
  }
  
  if (selectedSource.value) {
    filtered = filtered.filter(word => word.source === selectedSource.value);
  }

  totalNumber = filtered.length;
  return filtered;
};


const nextWord = () => {
  const filtered = filteredWords();
  if (currentIndex.value < filtered.length - 1) {
    currentIndex.value++;
    currentWord.value = filtered[currentIndex.value];
  }
}

const previousWord = () => {
  const filtered = filteredWords();
  if (currentIndex.value > 0) {
    currentIndex.value--;
    currentWord.value = filtered[currentIndex.value];
  }
}
const toggleTypeVisibility = () => {
  typeVisible.value = !typeVisible.value;
}

const toggleTranslationVisibility = () => {
  translationVisible.value = !translationVisible.value;
}

const toggleExampleVisibility = () => {
  exampleVisible.value = !exampleVisible.value;
}

const toggleEnglishExampleVisibility = () => {
  englishExampleVisible.value = !englishExampleVisible.value;
}


const deleteWordApi = async (wordId: string) => {
  try {
    await deleteWord(wordId); // Call the deleteWord function from wordservice.ts
    // Optionally, update the list of words after deletion
    // For example, refetch the list of words:
    await fetchWordsFromAPI();
    console.log('Word deleted successfully');
  } catch (error) {
    console.error('Error deleting word:', error);
  }
};

// Method to handle the editing of a word
const editWord = (word: any) => {
  console.log(word);
  router.push(`/vocabulary/wordform/${word._id}`);
};



</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        {{ totalNumber }}
                <!-- Filter by type dropdown and show all button -->
                <div class="filter-container">
          <label for="filterType">Nach Typ filtern:</label>
          <select id="filterType" class="form-select" v-model="selectedType">
            <option value="">Alle Typen</option>
            <option value="noun">Nomen</option>
            <option value="verb">Verb</option>
            <option value="adjective">Adjektiv</option>
            <option value="adverb">Adverb</option>
            <option value="preposition">Preposition</option>
            <!-- Add more options for other types if needed -->
          </select>


          <label for="filterSource">Nach Typ Source:</label>
          <select v-model="selectedSource" class="form-select">
              <option v-for="(value, key) in word_source" :key="key" :value="value">{{ value }}</option>
            </select>
          

          <div class="button-container">
            <button class="show-all-btn btn" @click="toggleViewMode">{{ viewMode === 'single' ? 'Alle Wörter anzeigen' : 'Einzelne Wörter anzeigen' }}</button>
           </div>
        </div>
        <!-- Toggle buttons -->
        <div class="toggle-buttons">
          <div><button class="toggle-switch btn" :class="{ 'active': typeVisible }" @click="toggleTypeVisibility"></button>  Typ </div>
          <div><button class="toggle-switch btn" :class="{ 'active': translationVisible }" @click="toggleTranslationVisibility"></button> Übersetzung (en)</div>
          <div><button class="toggle-switch btn" :class="{ 'active': exampleVisible }" @click="toggleExampleVisibility"></button> Beispiel</div>
          <div><button class="toggle-switch btn" :class="{ 'active': englishExampleVisible }" @click="toggleEnglishExampleVisibility"></button> Beispiel auf Englisch</div>
        </div>
      </div>
      <div v-if="viewMode === 'single'" class="col-md-6">
        <!-- Words and navigation buttons -->

        <div class="navigation-buttons">
          <button class="btn" @click="previousWord" :disabled="currentIndex === 0"><</button>
          <button class="btn" @click="nextWord" :disabled="currentIndex === filteredWords().length - 1">></button>
        </div>
        <div v-if="currentWord!=null" class="word-content">
          <button @click="editWord(currentWord)">Edit</button>
          <button @click="deleteWordApi(currentWord._id)">Delete</button>
          <!-- Word details -->

          <div><span>Wort:</span> {{ currentWord.word }}</div>
          <div v-show="typeVisible"><span>Typ:</span> {{ currentWord.type }}</div>
          <div v-show="translationVisible"><span>Übersetzung (en):</span> {{ currentWord.translation }}</div>
          <div v-show="englishExampleVisible"><span>past_tense:</span> {{ currentWord.past_tense }}</div>
          <div v-show="englishExampleVisible"><span>perfect_tense:</span> {{ currentWord.perfect_tense }}</div>
          <div v-show="englishExampleVisible"><span>plural:</span> {{ currentWord.plural }}</div>
          <div v-show="exampleVisible"><span>Beispiel:</span> {{ currentWord.example_de }}</div>
          <div v-show="englishExampleVisible"><span>Beispiel auf Englisch:</span> {{ currentWord.example_en }}</div>
          <div v-show="englishExampleVisible"><span>Quelle:</span> {{ currentWord.source }}</div>
          <div>
            <label>
              <input type="checkbox" v-model="selectedWords" :value="currentWord"> Zur Liste hinzufügen
            </label>
          </div>
        </div>
      </div>
      <div class="col-md-6" v-else >
      <div class="word-list">
        <h2>Alle Wörter</h2>
        <div><button class="toggle-switch btn" :class="{ 'active': showGermanWord }" @click="showGermanWord=!showGermanWord"></button> Deutsches Wort anzeigen </div>
        <div v-for="(word, index) in filteredWords()" :key="index" class="word-in-word-list">{{ showGermanWord? word.word : word.translation }}
          <div v-show="!showGermanWord"><span>Wort:</span> {{ word.word }}</div>  
          <div v-show="typeVisible"><span>Typ:</span> {{ word.type }}</div>
          <div v-show="translationVisible && showGermanWord"><span>Übersetzung (en):</span> {{ word.translation }}</div>
          <div v-show="exampleVisible"><span>Beispiel:</span> {{ word.example_de }}</div>
          <div v-show="englishExampleVisible"><span>Beispiel auf Englisch:</span> {{ word.example_en }}</div>
          <div v-show="englishExampleVisible"><span>Quelle:</span> {{ word.source }}</div>

          <button @click="editWord(word)">Edit</button>
          <button @click="deleteWordApi(word._id)">Delete</button>
        <div>
               <label>
              <input type="checkbox" v-model="selectedWords" :value="word.word"> Zur Liste hinzufügen
            </label>
            </div>
           
        </div>
       
      </div>
    </div>

      <div class="col-md-3">
        <!-- Selected words list -->
        <div class="selected-word-list">
          <!-- <div @click="openAddWordForm" class="add-word-button">+</div> -->
          <!-- <AddWordForm v-if="showForm" /> -->
          <router-link to="/vocabulary/wordform" class="add-word-button">Add Word</router-link>
          
          <h2>Ausgewählte Wörter</h2>
          <ul class="list-group">
            <li v-for="(word, index) in selectedWords" :key="index" class="list-group-item">{{ word['word'] ?? word  }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>