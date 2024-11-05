export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement>{
  children: React.ReactNode;
  id: string;
  name:string;
}


const Select= ({children, id, name ,...rest}:SelectProps) => {
return (
  <select className="select" name={name} id={id} {...rest}>
      {children}
  </select>
)
}

export default Select