import axios, { AxiosResponse } from 'axios';
import { WordsPatternResponse } from '../entities/wordsEntities';
import { WORDS_API_KEY, WORDS_API_HOST, WORDS_API_BASE_URL } from '../config';

const axiosInstance = axios.create({
  baseURL: WORDS_API_BASE_URL,
  headers: {
    'x-rapidapi-key': WORDS_API_KEY,
    'x-rapidapi-host': WORDS_API_HOST,
  },
});

const getWordsByPattern = (letterPattern: string): Promise<AxiosResponse<WordsPatternResponse>> => (
  axiosInstance.get('/', {
    params: { letterPattern },
  })
);

export default {
  getWordsByPattern,
};
