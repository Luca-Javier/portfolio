function headerMenuInteractive() {
	const d = document

	const $btnMenu = d.querySelector(".menu-btn"),
		$menu = d.querySelector(".menu"),
		$menuBg = d.querySelector(".menu-bg")

	$btnMenu.addEventListener("click", () => {
		$menu.classList.toggle("isActive")
		$menuBg.classList.toggle("isActive")
	})
	d.addEventListener("click", e => {
		if (
			e.target == $menuBg ||
			e.target.matches(".menu a") ||
			e.target.matches(".menu h2")
		) {
			$menuBg.classList.remove("isActive")
			$menu.classList.remove("isActive")
		}
	})
}
export default headerMenuInteractive
