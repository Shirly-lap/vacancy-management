interface SelectProps{
  children: React.ReactNode;
  id: string;
  name:string;
}


const Select= ({children, id, name}:SelectProps) => {
return (
  <select className="select" name={name} id={id}>
      {children}
  </select>
)
}

export default Select