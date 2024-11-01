import React from 'react'
import { Label } from '../atoms/Label'
import { Input } from '../atoms/Input'

interface InputLabelProps {
  labelInput: string,
  inputType: string,
  idInput?: string,
  htmlForm?: string,
  nameInput?: string,
  value?: string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;


}

export const InputLabel = ({ inputType, labelInput, idInput, htmlForm, nameInput, value, onChange }: InputLabelProps) => {
  return (
    <div className="container">
      <Label text={labelInput} htmlFor={htmlForm} />
      <Input
        type={inputType}
        styleClass='inputSecondary'
        id={idInput}
        onChange={onChange}
        name={nameInput} // Asegúrate de que esta línea esté presente
        value={value}
        required
      />
    </div>
  );
}
