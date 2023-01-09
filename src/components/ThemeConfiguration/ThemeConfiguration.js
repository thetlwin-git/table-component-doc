
import { useEffect } from 'react';
import styles from './ThemeConfiguration.module.css';
import PropTypes from 'prop-types';

export const ThemeConfiguration = () => {
  return (
    <div className={styles.main}>
      <h1>Theme Configuration</h1>

      <div>
        <img className={styles.image} src={require('../../stories/assets/theme-mode.png')} />
      </div>

      <h2>Light Theme with table components</h2>

      <h4>Simple Table</h4>
      <img src={require('../../stories/assets/simple-table.png')} />

      <h4>Table with Sorting</h4>
      <img src={require('../../stories/assets/table-with-sorting.png')} />

      <h4>Table with Checkbox</h4>
      <img src={require('../../stories/assets/table-with-checkbox.png')} />

      <h4>Table with Radio Button</h4>
      <img src={require('../../stories/assets/table-with-radio.png')} />

      <h2>Dark Theme with table components</h2>

      <h4>Simple Table</h4>
      <img src={require('../../stories/assets/simple-table-dark.png')} />

      <h4>Table with Sorting</h4>
      <img src={require('../../stories/assets/table-with-sorting-dark.png')} />

      <h4>Table with Checkbox</h4>
      <img src={require('../../stories/assets/table-with-checkbox-dark.png')} />

      <h4>Table with Radio Button</h4>
      <img src={require('../../stories/assets/table-with-radio-dark.png')} />
    </div>
  );
};
