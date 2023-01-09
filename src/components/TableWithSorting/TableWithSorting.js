import { useEffect } from "react";
import styles from "./TableWithSorting.module.css";
import PropTypes from "prop-types";

export const TableWithSorting = ({
  rows,
  headers,
  borderWidth = "medium",
  cellPadding = "medium",
  cellTextColor = "black",
  headerTextColor = "white",
  cellBorderColor = "#747381",
  headerBorderColor = "#494866",
  backgroundColor = "#a6a5b8",
  headerBackgroundColor = "#65647a",
}) => {
  return (
    <div className={styles.main}>
      <h1>Table with Sorting</h1>

      <div>
        <p>
          Sorting functionality allows you to sort the data of the tables
          according to any specific columns.
        </p>

        <p>
          When sorting icon is clicked, records should be ordered in descending/ascending sequence.
        </p>
        <img src={require("../../stories/assets/table-with-sorting.png")} />
      </div>
    </div>
  );
};

TableWithSorting.propTypes = {
  cellTextColor: PropTypes.string,
  headerTextColor: PropTypes.string,
  cellBorderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  headerBorderColor: PropTypes.string,
  headerBackgroundColor: PropTypes.string,
  borderWidth: PropTypes.oneOf(["thin", "medium", "thick"]),
  cellPadding: PropTypes.oneOf(["small", "medium", "large"]),
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};
