import styles from "./Image.module.css"

/* eslint-disable react/prop-types */
export function Image({ source, alt, width, height, style }) {
	return (
		<img
			src={source}
			alt={alt}
			className={styles.image}
			style={{ width: width, height: height, ...style }}
		/>
	)
}
