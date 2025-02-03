import { ThemeButton } from 'components';
import css from './Other.module.css';
import MobileMenuButton from 'components/MobileMenuButton/MobileMenuButton';

export default function Other() {
  return (
    <div className={css['other']}>
      <ThemeButton />
      <MobileMenuButton />
    </div>
  );
}
