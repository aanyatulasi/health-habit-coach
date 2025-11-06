export function Button({variant="primary", ...props}){
  return <button className={`btn ${variant}`} {...props} />
}
