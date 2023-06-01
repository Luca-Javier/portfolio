function ObserveSections() {
	const d = document

	const options = {
		root: d.querySelector("main"),
		threshold: [0.3, 0.5],
		/* rootMargin: "-600px", */
	}

	const onObserve = entries => {
		entries.forEach(entry => {
			const id = entry.target.id

			entry.isIntersecting
				? d.querySelector(`nav a[href="#${id}"]`).classList.add("isActive")
				: d.querySelector(`nav a[href="#${id}"]`).classList.remove("isActive")
		})
	}

	const observer = new IntersectionObserver(onObserve, options)

	const $sections = d.querySelectorAll("section")

	$sections.forEach(section => observer.observe(section))
}

export default ObserveSections
