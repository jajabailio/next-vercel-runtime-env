import { useEnvContext } from "next-runtime-env";
import styles from "./page.module.css";

export default function Home({ url }: { url: string }) {
  console.log("url ", url);
  const { NEXT_PUBLIC_BASE_URL } = useEnvContext();
  const publicUrl = NEXT_PUBLIC_BASE_URL;

  console.log("publicUrl: ", publicUrl);
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/pages/index.tsx</code>
        </p>
        <p>Hello</p>
        {/* ... rest of the component ... */}
      </div>
      {/* ... rest of the JSX ... */}
    </main>
  );
}

export const getServerSideProps = () => {
  const url = process.env.API_BASE_URL;
  console.log("url: ", url);

  return {
    props: {
      url,
    },
  };
};
