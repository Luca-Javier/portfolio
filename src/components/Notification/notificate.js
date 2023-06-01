/**
 *
 * @param {object} props
 * @param {string} props.message
 * @param {number} [props.time]
 * @param {boolean} [props.error]
 */

function notificate({ message, time, error }) {
	const $notification = document.querySelector(".notification"),
		$message = document.querySelector(".notification-message"),
		$succesImg = document.querySelector(".notification-succes-img")

	if (error) $succesImg.classList.add("none")

	$notification.classList.add("isActive")
	$message.textContent = message

	setTimeout(() => $notification.classList.remove("isActive"), time || 3000)

	setTimeout(() => $succesImg.classList.remove("none"), time + 1000 || 4000)

	$notification.addEventListener("click", () =>
		$notification.classList.remove("isActive")
	)
}

export default notificate
