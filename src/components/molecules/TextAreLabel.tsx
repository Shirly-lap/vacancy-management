import React from 'react'
import { Label } from '../atoms/Label'
import { TextArea } from '../atoms/TextArea';

interface IProps {
  label: string,
  name: string,
  id: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;

}

export const TextAreLabel = ({label, name, id, onChange, value} : IProps) => {
  return (
    <>
    <div className="container">
      <Label text={label}/>
      <TextArea name={name} id={id} onChange={onChange} value={value}/>
    </div>
    </>
  )
}
