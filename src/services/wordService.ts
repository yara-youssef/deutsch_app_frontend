// src/api/wordService.ts

import axios from 'axios';

const base_url = 'http://localhost:3000/api/words';

const fetchWords = () => {
  return axios.get(base_url);
};


const fetchFilteredWords = (filter: any) => {
  console.log(filter);
  return axios.get(base_url, { params: filter });
};


const fetchWordById = (id: string) => {
  const url = `${base_url}/${id}`;
  return axios.get(url);
};

const createWord = (newWord:any) => {
  return axios.post(base_url, newWord);
};

const updateWord = (id: string, updatedWord: any) => {
  return axios.put(`${base_url}/${id}`, updatedWord);
};

const deleteWord = (id: string) => {
  return axios.delete(`${base_url}/${id}`);
};

export { fetchWords, fetchWordById, createWord, updateWord, deleteWord, fetchFilteredWords };
