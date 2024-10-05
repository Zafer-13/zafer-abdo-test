"use client";

import styles from "./page.module.scss";
import { useTranslation } from "@/i18n/client";
import { ProductIn } from "@/types/types";
import { useFetchData } from "@/hooks/useFetchData";


const Products = () => {
    const { t } = useTranslation("product")
    const { data } = useFetchData("https://fakestoreapi.com/products", "products")

    const result = data?.map((item: ProductIn) => {
        return {
            id: item.id,
            category: item.category,
            description: item.description,
            price: item.price
        }
    })
    return (
        <div className={styles.container}>
            <h1>{t("products")}</h1>
            <table>
                <thead>
                    <tr>
                        <th>{t("id")}</th>
                        <th>{t("category")}</th>
                        <th>{t("description")}</th>
                        <th>{t("price")}</th>
                    </tr>
                </thead>
                <tbody>
                    {result?.map((item: ProductIn) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.category}</td>
                            <td>{item.description.slice(0, 20)}</td>
                            <td>{item.price}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Products