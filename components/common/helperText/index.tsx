import styles from './styles.module.css'

function HelperText({children}:{children: React.ReactNode}) {
  return (
    <span className={styles.span_container}>{children}</span>
  )
}

export default HelperText