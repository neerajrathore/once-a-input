import * as React from 'react'
// import styles from './styles.module.css'
import {InputBar, DropDown} from './InputBar'

// interface Props {
//   text: string
// }

export const ExampleComponent = () => {
  // return <div className={styles.test}>Example Component: {text}</div>
  return (
    <div>
    <InputBar someprop = "data"></InputBar>
    <DropDown someprop='wcw'></DropDown>
    </div>
    )

}
