window.addEventListener('keydown',function(e){playKeySound(e)});


function playKeySound(event){
	const keyName = event.keyCode;		
	const audio = document.querySelector(`audio[data-key="${keyName}"]`);
	const keyDiv = document.querySelector(`div.key[data-key="${keyName}"]`);
	keyDiv.classList.add('playing');
	audio.currentTime = 0;
	audio.play();
	setTimeout(function(){keyDiv.classList.remove('playing')},500);
}
