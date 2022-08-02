import React from 'react';

interface props {
  someprop: string
}

const InputBar:React.FC<props> = () => {
  return   <input type="file" />

}

export default InputBar
