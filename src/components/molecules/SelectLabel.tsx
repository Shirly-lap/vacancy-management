import React from 'react'
import { Label } from '../atoms/Label'
import Select from '../atoms/Select'

interface SelectLabelProps {
  label: string,
  children: React.ReactNode,
  id: string,
  name: string,

}
export const SelectLabel = ({ label, children, id, name }: SelectLabelProps) => {
  return (
    <>
      <div className='container'>
        <Label text={label} />
        <Select id={id} name={name}>
          {children}
        </Select>
      </div>
    </>
  )
}
