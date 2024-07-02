
interface ChildrenHandler {
    children: React.ReactNode
}

const Card:React.FC<ChildrenHandler> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Card
