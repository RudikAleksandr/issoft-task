import { makeAutoObservable } from 'mobx';
import { PLACE_INSERT_WORD } from '../config';

class WordCountStore {
  count = 0;

  title: string;

  private wordPattern: string;

  constructor(title: string, wordPattern: string) {
    makeAutoObservable(this, {
      title: false,
      getWordPattern: false,
    });

    this.title = title;
    this.wordPattern = wordPattern;
  }

  setCount(count: number) {
    this.count = count;
  }

  getWordPattern(word: string): string {
    return this.wordPattern.replaceAll(PLACE_INSERT_WORD, word);
  }
}

export default WordCountStore;
