import { useDispatch } from "react-redux";
import { search } from "../../services/store/movieSlice";
import styles from "./Search.module.css";

export const Search = () => {
  const dispatch = useDispatch();

  const titleOnChangeHandler = (e: any) => {
    const title = e.target.value;
    dispatch(search(title));
  };

  return (
    <div className={styles.searchWrapper}>
      <input
        type="text"
        onChange={titleOnChangeHandler}
        className={styles.searchInput}
        placeholder="Title"
      />
      <i className={styles.inputIcon}></i>
    </div>
  );
};
