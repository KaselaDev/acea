import React from 'react'
import * as fontAwesomeSolid from '@fortawesome/free-solid-svg-icons';
import * as fontAwesomeRegular from '@fortawesome/free-regular-svg-icons';
import * as fontAwesomeBrands from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Icon({css,type,icon}) {

  const style = `icon ${css}`;

  switch (type) {
    case "solid":
      return(<FontAwesomeIcon className={style} icon={fontAwesomeSolid[icon]} />)
      break;
    case "regular":
      return(<FontAwesomeIcon className={style} icon={fontAwesomeRegular[icon]} />)
      break;
    case "brands":
      return(<FontAwesomeIcon className={style} icon={fontAwesomeBrands[icon]} />)
      break;
    default:
      return(<FontAwesomeIcon className={style} icon={fontAwesomeSolid[icon]} />)
      break;
  }
}
