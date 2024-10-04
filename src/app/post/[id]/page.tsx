import "./page.module.scss";
import { SinglePostIn } from "@/types/types";
import { createTranslation } from "@/i18n/server";

import styles from "./page.module.scss";

const getPost = async (id: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    return null;
  }

  const post = await res.json();
  return post;
};
const SinglePost = async ({ params }: SinglePostIn) => {
  const { id } = params;
  const { title, body } = await getPost(id);
  const { t } = await createTranslation("post");

  return (
    <div className={styles.post}>
      <h1>{t("page")}</h1>
      <table>
        <thead>
          <tr>
            <th>{t("title")}</th>
            <th>{t("body")}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{title.slice(0, 20)}</td>
            <td>{body.slice(0, 20)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SinglePost;
