import Container from 'components/Container/Container';
import css from './Header.module.css';
import { Logo } from 'components';
import Nav from '../Nav/Nav';
import Other from './Other/Other';

export default function Header() {
  return (
    <header className={css['header']}>
      <Container className={css['header-container']}>
        <Logo />
        <Nav />
        <Other />
      </Container>
    </header>
  );
}
