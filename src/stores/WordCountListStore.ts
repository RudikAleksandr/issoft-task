import { makeAutoObservable, runInAction } from 'mobx';
import { WordsService } from '../entities/wordsEntities';
import { PLACE_INSERT_WORD } from '../config';
import WordCountStore from './WordCountStore';
import wordsAPI from '../api/wordsAPI';

class WordCountListStore {
  isLoading = false;

  wordCountList: WordCountStore[] = [];

  private wordsService: WordsService;

  constructor(wordsService: WordsService, wordCountList: WordCountStore[]) {
    makeAutoObservable(this);

    this.wordsService = wordsService;
    this.wordCountList = wordCountList;
  }

  async loadCountWords(searсhValue: string) {
    this.isLoading = true;

    const promiseWordCountList = this.wordCountList.map(async (wordCount) => {
      const wordPattern = wordCount.getWordPattern(searсhValue);
      return (await this.wordsService.getWordsByPattern(wordPattern)).data.results.total;
    });

    const countList = await Promise.all(promiseWordCountList);

    runInAction(() => {
      this.wordCountList.forEach((wordCount, index) => {
        wordCount.setCount(countList[index]);
      });

      this.isLoading = false;
    });
  }
}

export default new WordCountListStore(
  wordsAPI,
  [
    new WordCountStore('Words start with the letter', `^${PLACE_INSERT_WORD}.`),
    new WordCountStore('Words end with the letter', `.${PLACE_INSERT_WORD}$`),
    new WordCountStore('Words containing the letter', `${PLACE_INSERT_WORD}${PLACE_INSERT_WORD}`),
    new WordCountStore('Words containing letter repetition', `${PLACE_INSERT_WORD}${PLACE_INSERT_WORD}`),
  ],
);
