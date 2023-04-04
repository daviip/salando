import styles from "../styles/page.module.css";

export const Search = () => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Escribe lo deseado"
        className={styles.search_input}
      />
    </div>
  );
};
