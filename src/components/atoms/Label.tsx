import React from 'react'

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  text: string,
};

export const Label = ({text, ...rest}: LabelProps) => {
  return (
    <label  className="text-secondary" {...rest}>{text} </label>
  )
}
