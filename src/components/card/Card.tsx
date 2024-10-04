
"use client"
import { useTranslation } from "@/i18n/client";
import styles from "./card.module.scss";

const Card = () => {
  const {t} = useTranslation("card")
  return (
    <div className={styles.container}>
      <h1> {t("title")}</h1>
      <p>{t("description")}</p>
      <span>{t("city")}</span>
    </div>
  )
}

export default Card