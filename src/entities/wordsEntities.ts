import { AxiosResponse } from 'axios';

export interface WordsPatternResponse {
  results: {
    total: number;
  }
}

export interface WordsService {
  getWordsByPattern(letterPattern: string): Promise<AxiosResponse<WordsPatternResponse>>
}
