// src/api/garmmarService.ts

import axios from 'axios';

const base_url = 'http://localhost:3000/api/grammar';

const fetchTopics = () => {
  return axios.get(base_url);
};


const fetchFilteredTopics = (filter: any) => {
  console.log(filter);
  return axios.get(base_url, { params: filter });
};


const fetchTopicById = (id: string) => {
  const url = `${base_url}/${id}`;
  return axios.get(url);
};

const createTopic = (newTopic:any) => {
  return axios.post(base_url, newTopic);
};

const updateTopic = (id: string, updatedTopic: any) => {
  return axios.put(`${base_url}/${id}`, updatedTopic);
};

const deleteTopic = (id: string) => {
  return axios.delete(`${base_url}/${id}`);
};

export { fetchTopics, fetchTopicById, createTopic, updateTopic, deleteTopic, fetchFilteredTopics };
