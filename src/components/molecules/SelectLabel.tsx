import React from 'react'
import { Label } from '../atoms/Label'
import Select from '../atoms/Select';

interface SelectLabelProps {
  label: string,
  children: React.ReactNode,
  id: string,
  name: string,
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  valueSelect?: string

}
export const SelectLabel = ({ label, children, id, name, valueSelect, onChange}: SelectLabelProps) => {
  return (
    <>
      <div className='container'>
        <Label text={label} />
        <Select id={id} name={name} value={valueSelect} onChange={onChange} >
          {children}
        </Select>
      </div>
    </>
  )
}
