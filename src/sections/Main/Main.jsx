import {Image} from "../component/Image/Image.jsx"
import styles from "./Main.module.css"

export const Main = () => (
	<main className={styles.wrapper}>
		<section className={styles.introductionWrapper} id={"introduction"}>
			<Image
				source={"/portfolio/photo.jpg"}
				alt={"Моя фотография"}
				width={"25rem"}
				height={"25rem"}
				style={{borderRadius: "9999px"}}
			/>
			<article className={styles.introductionAbout}>
				<h2 className={styles.headline}>
					Студент / <br/>
					Junior FrontEnd Developer
				</h2>
				<p className={styles.introductionText}>
					Студент IT-колледжа, а также начинающий FrontEnd разработчик,
					проживающий в городе Ростов-на-Дону. Готов к новым знаниям и опыту
					работы.
				</p>
			</article>
		</section>
		<section className={styles.educationWrapper} id={"education"}>
			<h2 className={styles.titles}>Обучение и опыт</h2>
			<article className={styles.educationCardWrapper}>
				<div className={styles.card}>
					<Image
						source={"/portfolio/school.png"}
						alt={"Значок школы"}
						width={"9rem"}
						height={"9rem"}
					/>
					<div className={styles.educationCardText}>
						<h3 className={styles.titles}>Обучение в школе</h3>
						<p>
							С 2011 года по 2020 обучался в школе, где выделялся усидчивостью,
							скоростью обучения и аналитическими способностями.
						</p>
					</div>
				</div>
				<div className={styles.card}>
					<Image
						source={"/portfolio/school.png"}
						alt={"Значок школы"}
						width={"9rem"}
						height={"9rem"}
					/>
					<div className={styles.educationCardText}>
						<h3 className={styles.titles}>Обучение колледже</h3>
						<p>
							На данный момент прохожу обучение в{" "}
							<a href="" target="_blank" className={styles.link}>
								РБПОУ РО <q>РКСИ</q>
							</a>{" "}
							по специальности <q>Сетевое и системное администрирование</q>.{" "}
							<br/>
							На протяжении обучения был получен опыт по:
							<ul>
								<li>верстке;</li>
								<li>системному администрированию;</li>
								<li>работе с семейством Linux систем и ОС Windows Server.</li>
							</ul>{" "}
						</p>
					</div>
				</div>
				<div className={styles.card}>
					<Image
						source={"/portfolio/work.png"}
						alt={"Значок школы"}
						width={"9rem"}
						height={"9rem"}
					/>
					<div className={styles.educationCardText}>
						<h3 className={styles.titles}>Работа</h3>
						<p>
							Во время обучения в колледже так же работал в логистической
							компании{" "}
							<a href="" target="_blank" className={styles.link}>
								ООО <q>МИЛАР</q>
							</a>
							, где работал помощником менеджера. Основными задачами были:{" "}
							<ul>
								<li>работа с документами;</li>
								<li>помощь с оборудованием;</li>
								<li>всяческие мелкие дела.</li>
							</ul>
							{" "}
						</p>
					</div>
				</div>
			</article>
		</section>
		<section className={styles.skillsWrapper} id={"skills"}>
			<h2 className={styles.titles}>Мои навыки</h2>
			<article className={styles.skillsCardWrapper}>
				<div className={styles.card}>
					<h3 className={styles.titles}>&quot;Soft&quot; навыки</h3>
					<ul>
						<li>Английский уровня B2;</li>
						<li>Усидчивость;</li>
						<li>Внимание к деталям;</li>
						<li>Умение анализировать данные.</li>
					</ul>
				</div>
				<div className={styles.card}>
					<h3 className={styles.titles}>&quot;Hard&quot; навыки</h3>
					<ul>
						<li>HTML5;</li>
						<li>CSS3;</li>
						<li>JavaScript;</li>
						<li>React;</li>
						<li>Tailwind CSS.</li>
					</ul>
				</div>
			</article>
		</section>
	</main>
)