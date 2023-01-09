import { useEffect } from "react";
import styles from "./TableWithCheckbox.module.css";
import PropTypes from "prop-types";

export const TableWithCheckbox = ({
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
      <p>
        When checkboxes are selected, the row will be selected and highlighted.
      </p>
      <div>
        <img src={require("../../stories/assets/table-with-checkbox.png")} />
      </div>
    </div>
  );
};

TableWithCheckbox.propTypes = {
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
