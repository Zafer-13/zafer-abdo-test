"use client";
import { useTranslation } from "@/i18n/client";
import Switcher from "../switcher/Switcher";
import styles from "./page.module.scss";
const Header = () => {
  const { t } = useTranslation("home");

  return (
    <div className={styles.container}>
      <h1>{t("page")}</h1>
        <Switcher />
    </div>
  );
};

export default Header;
