function playSound(event){
	const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
	if (!audio) return;
	audio.currentTime = 0; //rewind to start
	audio.play();
	key.classList.add('playing');
}

function removeTransition(e) {
	if (e.propertyName !== 'border-top-color') return;
	this.classList.remove('playing');
};

window.addEventListener('keydown', playSound);

const keys = document.querySelectorAll('.key');

keys.forEach(function(k){
	k.addEventListener('transitionend', removeTransition);
});