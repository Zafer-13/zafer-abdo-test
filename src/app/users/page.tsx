
import React from 'react';
import styles from "./page.module.scss";
import { UserIn } from '@/types/types';

import { createTranslation } from '@/i18n/server';

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

async function fetchUsers(): Promise<UserIn[]> {
  const res = await fetch(`${BASE_URL}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
}

const Users = async () => {
  const { t } = await createTranslation("users")
  const users = await fetchUsers()
  return (
    <div className={styles.container}>
      <h1>{t("users")}</h1>
      <table id="table">
        <thead>
          <tr>
            <th>{t("id")}</th>
            <th>{t("name")}</th>
            <th>{t("username")}</th>
            <th>{t("email")}</th>
          </tr>
        </thead>
        <tbody>
          {users?.map(({ id, name, username, email }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{username}</td>
              <td>{email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Users;