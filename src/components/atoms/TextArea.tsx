import React from 'react'

interface IProps {
  name: string,
  id: string,
}
export const TextArea = ({ name, id }: IProps) => {
  return (
    <>
      <textarea name={name} id={id} className='textArea'>
      </textarea>
    </>
  )
}
