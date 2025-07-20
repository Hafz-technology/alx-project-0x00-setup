import { ButtonProps } from  "@/interfaces";

const Button: React.FC<ButtonProps> = ({title, styles='', onClick}) => {
  return (
    <div className= {styles}>
      <button type="submit" className={`${styles}`} onClick={onClick}>{title}</button>
    </div>
  )
}

export default Button;