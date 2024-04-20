import { createRouter, createWebHashHistory } from 'vue-router';
// import Vocabulary from './pages/Vocabulary.vue';
import Vocabulary from '../src/pages/Vocabulary.vue';
import Grammar from './pages/Grammar.vue';
import Home from './pages/Home.vue';
import AddWordForm from './pages/AddWordForm.vue';
import AddGrammarTopic from './pages/AddGrammarTopic.vue';
import GrammarTopic from './pages/GrammarTopic.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/vocabulary', component: Vocabulary },
  { path: '/vocabulary/wordform/:id', component: AddWordForm },
  { path: '/vocabulary/wordform', component: AddWordForm }, 
  { path: '/grammar', component: Grammar },
  { path: '/grammar/:id', component: GrammarTopic },
  { path: '/grammar/grammarform', component: AddGrammarTopic },
  { path: '/grammar/grammarform/:id', component: AddGrammarTopic },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
