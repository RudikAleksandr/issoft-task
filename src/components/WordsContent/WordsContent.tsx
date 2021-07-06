import { observer } from 'mobx-react-lite';
import { ReactElement, FC } from 'react';
import wordCountListStore from '../../stores/WordCountListStore';
import BarChart from '../BarChart';
import SpinnerLoader from '../SpinnerLoader';

const WordsContent: FC = observer((): ReactElement => (
  <SpinnerLoader isLoading={wordCountListStore.isLoading}>
    <BarChart
      title="Statistics of the content of a letter in a word"
      data={wordCountListStore.wordCountList.map(({ title, count }) => ({
        title,
        value: count,
      }))}
    />
  </SpinnerLoader>
));

export default WordsContent;
