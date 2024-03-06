import {Footer} from "./sections/Footer/Footer"
import {Header} from "./sections/Header/Header"
import {Main} from "./sections/Main/Main"
import styles from "./App.module.css"

export const App = () => {
	return (
		<div className={styles.mainWrapper}>
			<div className={styles.wrapper}>
				<Header />
				<Main />
				<Footer />
			</div>
		</div>
	)
}
