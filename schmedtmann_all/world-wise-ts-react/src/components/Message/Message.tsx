import styles from "./Message.module.scss";

interface IPropsMessage {
  message: string;
}

function Message({ message }: IPropsMessage) {
  return (
    <p className={styles.message}>
      <span role="img">👋</span> {message}
    </p>
  );
}

export default Message;
