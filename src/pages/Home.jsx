import { Helmet } from 'react-helmet';
import { useAuth } from 'hooks/useAuth';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  const { isLoggedIn } = useAuth();
  return (
    <div style={styles.container}>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      {!isLoggedIn && (
        <h1 style={styles.title}>
          Welcome to phone-contacts manager.
          <br /> Please, register or log in to start use this application.
        </h1>
      )}
      {isLoggedIn && (
        <h1 style={styles.title}>
          You logged in already and can use this application.
        </h1>
      )}
    </div>
  );
}
