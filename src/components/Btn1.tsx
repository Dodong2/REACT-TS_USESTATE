//Step 1: Creating and Updating State
interface ButtonProps {
    label: string;
    onClick: () => void
}

const Btn1:React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <>
        <button onClick={onClick}>{label}</button>
    </>
  )
}

export default Btn1