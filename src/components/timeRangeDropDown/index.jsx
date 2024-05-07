import { useEffect, useRef, useState } from "react";
import styles from './timerRangeDropDown.module.css'
const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const timeVariants = ["30 min", "1 hour"];

  const [selectedValue, setSelectedvalue] = useState(timeVariants[1]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, dropdownRef]); // Only run when isOpen or dropdownRef changes

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (value) => {
    setSelectedvalue(value);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className={styles.dropDownContainer} ref={dropdownRef} >
      <button style={isOpen?{borderBottom:'0px',borderRadius:'10px 10px 0px 0px'}:{}} className={styles.dropDown} onClick={toggleDropdown}>{selectedValue}</button>
      {isOpen && (
        <ul className={styles.optionContainer}>
          {timeVariants.map((option,index) => (
            <li className={styles.option} key={index} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
