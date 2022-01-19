import Layout from "../components/Layout";
import "../styles/globals.css";
import { ContextWrapper } from "../components/ContextWrapper";

function MyApp({ Component, pageProps, navigation }) {
  return (
    <Layout>
      <ContextWrapper navigation={navigation}>
        <Component {...pageProps} />
      </ContextWrapper>
    </Layout>
  );
}

export default MyApp;
