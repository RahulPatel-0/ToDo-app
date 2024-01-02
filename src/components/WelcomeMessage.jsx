import styles from './WelcomeMessage.module.css'
const WelcomeMessage=({TodoItems})=>{
  if (TodoItems.length===0){
    return <p className={styles.welcome}>
    Enjoy Your Day:
  </p>
  
  }
  
  

}
export default WelcomeMessage;