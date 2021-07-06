import { observer } from 'mobx-react-lite';
import { ReactElement, FC, useCallback } from 'react';
import { FormControl, Button, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import wordCountListStore from '../../stores/WordCountListStore';

const WordsSearch: FC = observer((): ReactElement => {
  const { register, getValues, watch } = useForm({ defaultValues: { searсhValue: '' } });

  const handleSearchWords = useCallback(() => {
    const searсhValue = getValues('searсhValue');
    wordCountListStore.loadCountWords(searсhValue);
  }, []);

  return (
    <Col className="d-flex">
      <FormControl
        {...register('searсhValue')}
        placeholder="Enter letter"
        maxLength={1}
      />
      <Button
        disabled={!watch('searсhValue') || wordCountListStore.isLoading}
        onClick={handleSearchWords}
      >
        Search
      </Button>
    </Col>
  );
});

export default WordsSearch;
