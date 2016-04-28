

	var pokemonArray = [
	{
		question: "Who is the Seventh Gym Leader?",
		answer: "Blaine"
	},
	{
		question: "Where can you capture Articuno?",
		answer: "Seafoam Islands"
	},
	{
		question: "What type is most effective type against itself?",
		answer: "Dragon-Type"
	},
	{
		question: "What pokemon did your rival get rid of after encountering him in Cerulean?",
		answer: "Raticate"
	},
	{
		question: "What fossil revives the prehistoric flying dinosaur pokemon?",
		answer: "Old Amber"
	},
	{
		question: "What was the glitch pokemon encountered in game?",
		answer: "Missingo"
	},
	{
		question: "What city is TM 32 located in?",
		answer: "Safari Zone"
	},
	{
		question:"Who was Agatha's rival?",
		answer: "Professor Oak"
	}
	]
	for (i = 0; i < pokemonArray.length; i++){ //create the for loop to loop through your array
		 q = pokemonArray[i].question // create a variable that matches the question
		document.getElementById("question" + [i]).textContent = q

}
function assignMe(){
	var correct = 0 //setting correct to start at 0. we will add on functionality later in the function.
	var incorrect= 0 // setting incorrect to start at 0. add functionality later on.
		for (i = 0; i < pokemonArray.length; i++){ // for loop to loop through array of info
			var answer = pokemonArray[i].answer  // variable answer to relate to answer in array.
			var response = document.getElementById("answer" + [i]).value // set a variable for the input of user. answer + 0 = answer0. (can loop through)
			var questionGo = document.getElementById("question" + [i]) //When the button is clicked, you run a function. you create a variable call question Go. 
			//What this variable does, is it looks at the HTML page, and finds the questionX id.
			if (response == answer){ // if the user input equals the answer set at various indexes
						questionGo.className = "correct" // our response was correct. thus, that question is now "correct". 
						correct++ //we add plus one to the varibale correct
						// to dictate how many questions are now "correct"
				} else{
						questionGo.className ="incorrect"// Our response was incorrect. Thus, that question is now "incorrect."
						incorrect ++ // we add plus one to the variable incorrect, to dicatate how many questions are now "incorrect"
				}
		}
		document.getElementById("correct").textContent = correct // at the end of the loop, look through HTML for the "correct" id. that id now equals the variable correct at the end of the loop.
		document.getElementById("incorrect").textContent =incorrect // See above but for incorrect.
		if (correct === 8){
			congratulations()
		}
}

function toggleSound(){
	var audio = document.getElementById("poke")
	var soundPlay = document.getElementById("play")
	var soundPause = document.getElementById("pause")
		if(audio.paused){
			audio.play()
			$(soundPlay).show()
			$(soundPause).hide()
		} else {
			audio.pause()
			$(soundPlay).hide()
			$(soundPause).show()

		}
}

function congratulations(){
	var congratsH1 = document.createElement('h1')
	var congratsNode = document.createTextNode("Wonderful! You're a Generation one Buff.")
		congratsH1.id = "thumbs-up"
		congratsH1.appendChild = (congratsNode)
			document.getElementById("booyah").appendChild = (congratsH1)
}
document.getElementById("char").addEventListener('click', assignMe, false)
// //errors I encountered:
// //first for loop, you get the element Id by "question" + index[i]. When you write your HTML, you have to ensure that you have the correct index
// 	//written, so you can properly loop through the nymbers. 
// // When you have the last two elements by ID, ensure that you have a matching ID written into your HTML code. 
// 	//You need to re build this project.
