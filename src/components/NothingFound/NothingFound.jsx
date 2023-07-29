import PropsType from 'props-type';
import styles from 'css/nothing-found.module.css';

const { nothing_found_box } = styles;

export default function NothingFound({ message, align = 'center' }) {
  return (
    <div
      className={nothing_found_box}
      style={{
        textAlign: align,
      }}
    >
      <p className="global-p">{message}</p>
    </div>
  );
}

NothingFound.propsType = {
  message: PropsType.string,
};
