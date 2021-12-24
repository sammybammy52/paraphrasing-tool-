/*CODE FOR RESPONSIVE*/
let navToggle = document.querySelector(".nav__toggle");
let navWrapper = document.querySelector(".nav__wrapper");

navToggle.addEventListener("click", function () {
  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
  } else {
    navWrapper.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
  }
});
/*CODE FOR RESPONSIVE END*/





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


  
  const data = JSON.stringify({
    "language": "en",
    "strength": 3,
    "text": paratext
  });
  
  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {

      var obj = JSON.parse(this.response);
      console.log(obj);
      document.getElementById("result-area").innerHTML = obj.rewrite;
    }
  });
  
  xhr.open("POST", "https://rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com/rewrite");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.setRequestHeader("x-rapidapi-host", "rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com");
  xhr.setRequestHeader("x-rapidapi-key", "d458156a25mshb70617c0efa9165p187b7bjsn7b829570b6b7");
  
  xhr.send(data);
    
})




