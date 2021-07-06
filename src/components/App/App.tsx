import { FC, ReactElement } from 'react';
import { Container, Row } from 'react-bootstrap';
import WordsContent from '../WordsContent';
import WordsSearch from '../WordsSearch';

const App: FC = (): ReactElement => (
  <Container>
    <Row xs="4" className="justify-content-center mt-4">
      <WordsSearch />
    </Row>
    <Row xs="2" className="mt-5">
      <WordsContent />
    </Row>
  </Container>
);

export default App;
