import { Container, FilmsList, SectionTitle, LoadInfo } from 'components';
import { filmsAPI } from 'config';
import { useLoadElement } from 'hooks';

const func = filmsAPI.fetchTopFilms.bind(filmsAPI);

export default function APIFilm() {
  const [topFilms, isNothingFound, loadFilms] = useLoadElement(func, "results");

  return (
    <Container type="section">
      <Container>
        <SectionTitle>Trending today</SectionTitle>
        <LoadInfo
          toLoad={loadFilms}
          isFound={isNothingFound}
          renderComponent={() => <FilmsList films={topFilms} />}
          message="Nothing found😢"
        />
      </Container>
    </Container>
  );
}
