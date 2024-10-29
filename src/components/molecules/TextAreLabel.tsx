import React from 'react'
import { Label } from '../atoms/Label'
import { TextArea } from '../atoms/TextArea';

interface IProps {
  label: string,
  name: string,
  id: string

}

export const TextAreLabel = ({label, name, id} : IProps) => {
  return (
    <>
    <div className="container">
      <Label text={label}/>
      <TextArea name={name} id={id}/>
    </div>
    </>
  )
}
