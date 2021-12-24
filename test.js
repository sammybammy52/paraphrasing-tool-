

/*
 * CharacterCounter
 * @param textareaEl = textarea html element
 * @param remainingEl = element that includes the remaining value, updates with each event fire (keyUp)
 */
class CharacterCounter {
	constructor(textareaEl, remainingEl) {
		this.element = textareaEl;
		this.remainingEl = remainingEl;
		this.max = this.element.getAttribute("maxlength");
		this.remainingChars = this.max;
		this.currCounter = this.element.value.length;
		this.setEvents();
	}

	/* calculates the remaining characters
	 * @param event = event triggered from event listener
	 */
	calc(event) {
		this.remainingChars = this.element.value.length;
		this.updateRemainingEl();
	}

	/* sets the events that will be attacked on the element
	 */
	setEvents() {
		this.element.addEventListener("keyup", (event) => this.calc(event));
	}

	/* updates the remainingEl markup with the current remaining char value
	 */
	updateRemainingEl() {
		this.remainingEl.textContent = this.max - this.remainingChars;
	}
}

var textarea = document.getElementsByName("character-counter")[0];
var remaining = document.querySelector("i span");
characterCounter = new CharacterCounter(textarea, remaining);


const btn = document.getElementById("myBtn");

btn.addEventListener("click", function () {
    const paratext = document.getElementById("textarea1").value;

   console.log(paratext);
    
})

