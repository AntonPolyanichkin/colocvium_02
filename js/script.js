function getOnClickAnswer(e) {
	if (e.target.tagName === 'BUTTON') {
		const target = e.target.getAttribute('data-target')
		const targetEl = document.getElementById(target)
		if(targetEl){
			targetEl.classList.toggle('active')
		}
	}
}
document.addEventListener('click', getOnClickAnswer)