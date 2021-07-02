var myQuestions = [
	{
		question: "Quantas casas decimais tem o número pi?",
		orientation: "são bastantes casas",
		answers: {
			a: 'Duas',
			b: 'Centenas',
			c: 'Infinitas',
			d:  'Vinte', 
		},
		correctAnswer: 'c'
	},
	{
		question: "Quem pintou 'Guernica'?",
		orientation: "e um pintor bem conhecido !!",
		answers: {
			a: 'Paul Cézanne',
			b: 'Pablo Picasso',
			c: 'Diego  Rivera ',
			d: 'Salvador Dalí'
		},
		correctAnswer: 'b'
	},
	{
		question: "Qual pintor cortou a sua propria orelha?",
		orientation: "Ele teve um surto de abstinêcia !",
		answers: {
			a: 'Van Gogh',
			b: 'Pablo Picasso',
			c: 'Tarsila do Amaral',
		},
		correctAnswer: 'a'
	},
	{
		question: "Qual a nacionalidade de Che Guevara?",
		orientation: "Foi um revolucionário marxista, médico, autor, guerrilheiro, diplomata e teórico militar argentino.",
		answers: {
			a: 'Argentina',
			b: 'Peruana',
	        c: 'Boliviana'
		},
		correctAnswer: 'a'
	},
	{
		question: "Em que período da pré-história o fogo foi descoberto?",
		orientation: "Foi o periodo mais antigo da Pré-Historia",
		answers: {
			a: 'Neolítico',
			b: 'Idade dos Metais',
	        c: 'Periodo da pedra polida', 
			d: 'Paleolítico'
		},
		correctAnswer: 'd'
	},
	{
		question: "Qual destes países é transcontinental?",
		orientation: "Que atravessa um continente de um extremo a outro.",
		answers: {
			a: 'Filipinas',
			b: 'Tanzânia',
	        c: 'Rússia', 
			d: 'Istambul'
		},
		correctAnswer: 'c'
	},
	{
		question: "Qual foi o pintor mais louco que ja existiu?",
		orientation: "Grande parte de seu trabalho conteria alusões à criança morta que acreditava ser uma parte de si mesmo.",
		answers: {
			a: 'Pablo picasso',
			b: 'Salvador Dali ',
	        c: 'Van Gogh', 
			d: 'Não existiu pintor louco !'
		},
		correctAnswer: 'b'
	}
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// precisaremos de um lugar para armazenar a saída e as opções de resposta
		var output = [];
		var answers; // poderia ter dado outro nome, alem do mais, eu mesmo me confundi :/

		// para cada questão
		for(var i=0; i<questions.length; i++){

			// mas, primeiro resetamos a lista de questões
			answers = [];

			// e aqui faremos para cada resposta na questão.
			for(letter in questions[i].answers){

				// Aqui será escrito para html para usar o Radio.
				answers.push(
					'<label for="pergunta" title="'+ questions[i].answers[letter]+ '">'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					//	+ letter + ') ' vou deixar a letra comentada, porque achei melhor assim
						+ questions[i].answers[letter]+ 
						'</label>'
				);
			}

			// add this question and its answers to the output
			output.push(
				'<div class="question" title="' + questions[i].orientation + '">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		// finally combine our output list into one string of html and put it on the page
		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){


		var answerContainers = quizContainer.querySelectorAll('.answers');
		var userAnswer = '';
		var numCorrect = 0;

		for(var i=0; i<questions.length; i++){

			// agora ele vai virar a letra que esta marcada.
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

			if(userAnswer===questions[i].correctAnswer){

				numCorrect++;

				answerContainers[i].style.color = 'lightgreen';
			}

			else{

				answerContainers[i].style.color = 'red';
			}
		}

		resultsContainer.innerHTML = numCorrect + ' de ' + questions.length;
	}

	// show questions right away
	showQuestions(questions, quizContainer);

	// on submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);