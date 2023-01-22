import { Oval } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Oval
      height={50}
      width={50}
      color="#fd2407"
      wrapperStyle={{
        position: 'absolute',
        justifyContent: 'center',
        marginTop: '300px',
        zIndex: '9999',
      }}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#11e771"
      strokeWidth={5}
      strokeWidthSecondary={2}
    />
  );
};
