import React from 'react'
import { Label } from '../atoms/Label'
import { Input } from '../atoms/Input'

interface InputLabelProps {
  labelInput: string,
  inputType: string,

}

export const InputLabel = ({ inputType, labelInput }: InputLabelProps) => {
  return (
    <>
      <div className="container">
        <Label text={labelInput} />
        <Input type={inputType} />
      </div>
    </>
  )
}
