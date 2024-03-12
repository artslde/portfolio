import { Image } from "../component/Image/Image.jsx"
import styles from "./Footer.module.css"

export const Footer = () => (
	<footer className={styles.footer}>
		<span className={styles.footerText}>
			Не копируйте пожалуйста
			<br />
			{"(⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄)"}
		</span>
		<a href={"https://github.com/artslde"} target={"_blank"}>
			<Image
				source={"/portfolio/github-logo.svg"}
				alt={"Иконка GitHub"}
				width={"3rem"}
				height={"3rem"}
			/>
		</a>
	</footer>
)
