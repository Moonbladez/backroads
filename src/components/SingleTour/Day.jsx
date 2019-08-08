//Day template at the bottom of tour template

import React, { useState } from "react"
import { FaAngleDown } from "react-icons/fa"
import styles from "../../css/day.module.css"
const Day = ({ day, info }) => {
  const [showInfo, setInfo] = useState(false)
  const toggleInfo = () => {
    setInfo(showInfo => !showInfo)
  }

  console.log(info)

  return (
    <article className={styles.day}>
      <h4>
        {day}
        <button className={styles.btn} onClick={toggleInfo}>
          <FaAngleDown />
        </button>
      </h4>
      {showInfo && <p>{info}</p>}
    </article>
  )
}

export default Day
