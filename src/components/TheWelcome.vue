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
import {ref } from 'vue';
import {miroWords} from '../words/words';

const currentIndex = ref(0);
const currentWord = ref(miroWords[currentIndex.value]);
const selectedWords = ref([]);
const typeVisible = ref(true);
const translationVisible = ref(true);
const exampleVisible = ref(true);
const englishExampleVisible = ref(true);
const selectedType = ref('');
const viewMode = ref('single');

const showGermanWord = ref(true);

const toggleViewMode = () => {
  viewMode.value = viewMode.value === 'single' ? 'all' : 'single';
}

const filteredWords = () => {
  if (!selectedType.value) {
    return miroWords;
  } else {
    return miroWords.filter(word => word.type === selectedType.value);
  }
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



</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
                <!-- Filter by type dropdown and show all button -->
                <div class="filter-container">
          <label for="filterType">Nach Typ filtern:</label>
          <select id="filterType" class="form-select" v-model="selectedType">
            <option value="">Alle Typen</option>
            <option value="noun">Nomen</option>
            <option value="verb">Verb</option>
            <option value="adjective">Adjektiv</option>
            <option value="adverb">Adverb</option>
            <!-- Add more options for other types if needed -->
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
        <div class="word-content">
          <!-- Word details -->
          <div><span>Wort:</span> {{ currentWord.word }}</div>
          <div v-show="typeVisible"><span>Typ:</span> {{ currentWord.type }}</div>
          <div v-show="translationVisible"><span>Übersetzung (en):</span> {{ currentWord.translation }}</div>
          <div v-show="exampleVisible"><span>Example:</span> {{ currentWord.example }}</div>
          <div v-show="englishExampleVisible"><span>English Example:</span> {{ currentWord.example_EN }}</div>
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
            <div v-show="exampleVisible"><span>Beispiel:</span> {{ word.example }}</div>
            <div v-show="englishExampleVisible"><span>Beispiel auf Englisch:</span> {{ word.example_EN }}</div>
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
          <h2>Ausgewählte Wörter</h2>
          <ul class="list-group">
            <li v-for="(word, index) in selectedWords" :key="index" class="list-group-item">{{ word.word }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>