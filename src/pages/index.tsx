import { useEnvContext } from "next-runtime-env";
import styles from "./page.module.css";

export default function Home({ serverUrl }: { serverUrl: string }) {
  const { API_BASE_URL } = useEnvContext();
  const publicUrl = API_BASE_URL || serverUrl;

  console.log("publicUrl: ", publicUrl);
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/pages/index.tsx</code>
        </p>
        <p>Server URL: {serverUrl}</p>
        <p>Public URL: {publicUrl}</p>
      </div>
    </main>
  );
}

export const getServerSideProps = () => {
  const serverUrl = process.env.API_BASE_URL || "default_url";
  console.log("Server-side URL: ", serverUrl);

  return {
    props: {
      serverUrl,
    },
  };
};
