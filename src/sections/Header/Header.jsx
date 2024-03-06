import {Button} from "../component/Button/Button.jsx"
import {Image} from "../component/Image/Image.jsx"
import styles from "./Header.module.css"
import {useState} from "react";

export const Header = () => {
	const [showNavbar, setShowNavbar] = useState(false)

	const handleShowNavbar = () => {
		setShowNavbar(!showNavbar)
	}

	return (
		<header className={styles.headerWrapper}>
			<nav className={styles.navigationWrapper}>
				<Image
					source={"/portfolio/portfolio-logo.svg"}
					alt={"Логотип сайта"}
					width={"11rem"}
					height={"3.5rem"}
				/>
				<div className={`${styles.navigationList} ${showNavbar ? styles.active : ""}`}>
					<Button onClick={handleShowNavbar} classes={styles.burgerNav}>
						<Image
							source={"/portfolio/burger-menu.svg"}
							alt={"burger"}
							width={"2rem"}
							height={"2rem"}
						/>
					</Button>
					<Button classes={styles.button}>
						<a href="#introduction">Обо мне</a>
					</Button>
					<Button classes={styles.button}>
						<a href="#education">Образование<br/>Опыт</a>
					</Button>
					<Button classes={styles.button}>
						<a href="#skills">Навыки</a>
					</Button>
				</div>
			</nav>
		</header>
	);
}
