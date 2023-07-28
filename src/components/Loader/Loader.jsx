import { Bars } from 'react-loader-spinner';

export const Loader = () => (
  <Bars
    height="80"
    width="80"
    color="#4fa94d"
    ariaLabel="bars-loading"
    wrapperStyle={{
      display: 'block',
      margin: '0 auto',
      width: '100%',
      textAlign: 'center',
    }}
    wrapperClass=""
    visible={true}
  />
);
