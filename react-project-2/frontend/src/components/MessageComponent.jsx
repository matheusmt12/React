import './Message.css'
const MessageComponent = ({msg, type}) => {
  return (
    <div className={`message ${type}`}>
        <p>{msg}</p>
    </div>
  )
}

export default MessageComponent
