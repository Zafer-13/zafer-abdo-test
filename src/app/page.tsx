import { createTranslation} from "@/i18n/server";
import styles from "./page.module.css";
import Card from "@/components/card/Card";
import Link from "next/link";

async function Home() {
  const { t } = await createTranslation("home");
  const renderCards = () => {
    return Array.from({ length: 3 }, (_, i) => {
      return <Card key={i} />;
    });
  };
  return (
    <div className={styles.container}>
      <h1>{t("greeting")}</h1>
      <div className={styles.page}>
        {renderCards()}
        <div className={styles.links}>
          <Link href={`/post/1`}>{t("title1")}</Link>
          <Link href={`/users`}>{t("title2")}</Link>
          <Link href={`/posts`}>{t("title3")}</Link>
          <Link href={`/products`}>{t("title4")}</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
