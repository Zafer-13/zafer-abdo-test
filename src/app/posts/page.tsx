import styles from "./page.module.scss";
import { createTranslation } from "@/i18n/server";
export const revalidate = 10; // Revalidate every 10 seconds (ISG)

async function fetchPosts() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!res.ok) {
            throw new Error('Failed to fetch posts');
        }

        return res.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

export default async function PostsPage() {
    const posts = await fetchPosts();
    const { t } = await createTranslation("home")

    return (
        <div className={styles.container}>
            <h1>{t("posts")} ISG</h1>
            <ul>
                {posts.slice(0, 10).map((post: any) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
