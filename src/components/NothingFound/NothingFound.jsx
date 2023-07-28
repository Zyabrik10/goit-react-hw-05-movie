import PropsType from 'props-type';

export default function NothingFound({ message, align = 'center' }) {
  return (
    <div
      className="nothing-found-box"
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
