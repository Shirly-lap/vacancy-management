import React from 'react'

interface IProps {
  name: string,
  id: string,
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string
}
export const TextArea = ({ name, id, onChange, value }: IProps) => {
  return (
    <>
      <textarea name={name} id={id} className='textArea' onChange={onChange} value={value}>
      </textarea>
    </>
  )
}
