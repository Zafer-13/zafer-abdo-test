import React from "react";
import { switchLocaleAction } from "../../actions/switch-locale";
import { useTranslation } from "../../i18n/client";
import styles from "./switcher.module.scss";
import { useLocale } from "@/hooks/useLocaleProvider";

export default function Switcher() {
  const { t } = useTranslation("home");
  const locale = useLocale();
  const isEnActive = locale === "en";
  const isRoActive = locale === "ro";

  return (
    <div className={styles.container}>
      <button
        style={{ backgroundColor: isEnActive ? "blue" : "" }}
        onClick={() => switchLocaleAction("en")}
      >
        {t("english")}
      </button>
      <button
        style={{ backgroundColor: isRoActive ? "blue" : "" }}
        onClick={() => switchLocaleAction("ro")}
      >
        {t("romanian")}
      </button>
    </div>
  );
}
