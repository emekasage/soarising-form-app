let suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
		let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten',
		'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two', 'One'];

		let deck = [];

		for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {

			for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
				deck.push(values[valueIdx] + ' of ' + suits[suitIdx]);
			}

		}

		for (let i = 0; i< deck.length; i++) {
			console.log(deck[i]);
		}

function myFunction(favoriteNumber) {
	let newNumber = favoriteNumber + 100;
	return newNumber;
}

let result = myFunction(55);
console.log(result); 

/*******************Random Quote Generator*************************/


var politicsArr = [
	"<cite>One of the penalties for refusing to participate in politics is that you end up being governed by your inferiors. <br/> -- <strong>Plato</strong><cite>",
	"<cite>If you have ten thousand regulations you destroy all regulations for the law. <br/> -- <strong>Winston Churchill</strong><cite>",
	"<cite>It is better to be violent, if there’s violence in our hearts than to put on the cloak of nonviolence to cover impotence. <br/> -- <strong>Mahatma Gandhi</strong><cite>",
	"<cite>A conservative is a man with two perfectly good legs who, however, has never learned to walk. <br/> -- <strong>Franklin D. Roosevelt</strong><cite>",
	"<cite>If you put the federal government in charge of the Sahara Desert, in 5 years there'd be a shortage of sand. <br/> -- <strong>Milton Friedman</strong><cite>",
	"<cite>The modern conservative is engaged in one of man's oldest exercises in moral philosophy, that is, the search for a superior moral justification for selfishness. <br/> -- <strong>John Kenneth Galbraith</strong><cite>",
	"<cite>Politics is not a game, it is an earnest business. <br/> -- <strong>Winston Churchill</strong><cite>",
	"<cite>The greatest place in hell is reserved for those who remain neutral in times of great moral conflict. <br/> -- <strong>Unknown</strong><cite>",
	"<cite>If the United States or Britain is having elections, they don't ask for observers from Africa or Asia. But when we have elections, they want observers. <br/> -- <strong>Nelson Mandela</strong><cite>",
	"<cite>Politics has become so expensive that it takes a lot of money even to be defeated. <br/> -- <strong>Will Rogers</strong><cite>",
	"<cite>Healthy citizens are the greatest asset any country can have. <br/> -- <strong>Winston Churchill</strong><cite>",
	"<cite>Inflation is as violent as a mugger, as frightening as an armed robber and as deadly as a hit man . <br/> -- <strong>Ronald Reagan</strong><cite>",
	"<cite>It has been said that poilitics is the second oldest profession. I have learned that it bears a striking resemblance to the first <br/> -- <strong>Ronald Reagan</strong><cite>",
	"<cite>Democracy is when the indigent, and not the ment of property, are the rulers. <br/> -- <strong>Aristotle</strong><cite>"
	];

var educationArr = [
	"<cite>An investment in knowledge pays the best interest. <br/> -- <strong>Benjamin Franklin</strong><cite>",
	"<cite>Change is the end result of all true learning. <br/> -- <strong>Leo Buscaglia</strong><cite>",
	"<cite>Education is the passport to the future, for tomorrow belongs to those who prepare for it today. <br/> -- <strong>Malcolm X</strong><cite>",
	"<cite>The roots of education are bitter, but the fruit is sweet. <br/> -- <strong>Aristotle</strong><cite>",
	"<cite>Anyone who has never made a mistake has never tried anything new. <br/> -- <strong>Albert Einstein</strong><cite>",
	"<cite>He who opens a school door, closes a prison. <br/> -- <strong>Victor Hugo</strong><cite>",
	"<cite>Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great. <br/> -- <strong>Mark Twain</strong><cite>",
	"<cite>Start where you are. Use what you have. Do what you can. <br/> -- <strong>Arthur Ashe</strong><cite>",
	"<cite>Education is a progressive discovery of our own ignorance. <br/> -- <strong>Will Durant</strong><cite>",
	"<cite>The only person who is educated is the one who has learned how to learn …and change. <br/> -- <strong>Carl Rogers</strong><cite>",
	"<cite>We learn more by looking for the answer to a question and not finding it than we do from learning the answer itself. <br/> -- <strong>Lloyd Alexander</strong><cite>"
	];


var sportsArr = [
	"<cite>If you want to be great at something, there’s a choice you have to make. What I mean by that is, there are inherent sacrifices that come along with that. Family time, hanging out with friends, being a great friend, being a great son, nephew, whatever the case may be. <br/> -- <strong>Kobe Bryant</strong><cite>",
	"<cite>I don't count my situps. I only start counting once it starts hurting. <br/> -- <strong>Muhammad Ali</strong><cite>",
	"<cite>I've failed over and over again in my life. And that is why I succeed. <br/> -- <strong>Michael Jordan</strong><cite>",
	"<cite>There may be people that have more talent than you, but there's no excuse for anyone to work harder than you. <br/> -- <strong>Derek Jeter</strong><cite>",
	"<cite>If you fail to prepare, you're prepared to fail. <br/> -- <strong>Mark Spitz</strong><cite>",
	"<cite>To uncover your true potential you must first find your own limits and then you have to have the courage to blow past them. <br/> -- <strong>Picabo Street</strong><cite>",
	"<cite>Never let your head hang down. Never give up and sit down and grieve. Find another way. <br/> -- <strong>Satchel Paige</strong><cite>",
	"<cite>It is not the size of a man but the size of his heart that matters. <br/> -- <strong>Evander Holyfield</strong><cite>",
	"<cite>Wisdom is always an overmatch for strength. <br/> -- <strong>Phil Jackson</strong><cite>",
	"<cite>It is not whether you get knocked down; it's whether you get up. <br/> -- <strong>Vince Lombardi</strong><cite>",
	"<cite>Hard work beats talent when talent doesn't work hard. <br/> -- <strong>Tim Notke</strong><cite>",
	"<cite>Never say never because limits, like fears, are often just an illusion. <br/> -- <strong>Michael Jordan</strong><cite>",
	"<cite>Good is not good when better is expected. <br/> -- <strong>Vin Scully</strong><cite>",
	"<cite>Without self discipline, success is impossible, period. <br/> -- <strong>Lou Holtz</strong><cite>",
	"<cite>Run when you can, walk if you have to, crawl if you must; just never give up. <br/> -- <strong>Dean Karnazes</strong><cite>",
	"<cite>It's not the will to win that matters — everyone has that. It's the will to prepare to win that matters. <br/> -- <strong>Paul 'Bear' Bryant</strong><cite>"
	];

var headChanger = document.getElementById("head-changer");
var displayQuote = document.getElementById("display-quote");
var shoQuote = document.getElementById("show-quotes");
var changeQuote = document.getElementById("change-quote");
var socialIcons = document.getElementById("icons");
var selector = document.getElementById("selection");
var value = selector[selector.selectedIndex].value;

displayQuote.style.display = "none";
socialIcons.style.display = "none";
changeQuote.style.display = "none";


function Quotes() { 
	shoQuote.style.display = "none";
	displayQuote.style.display = "block";
	socialIcons.style.display = "block";
	changeQuote.style.display = "block";
	var selector = document.getElementById("selection");
	var value = selector[selector.selectedIndex].value;

	if (value == "1") {
		headChanger.innerText = "You have selected Political Quotes"
		document.getElementById("quotes").innerHTML = politicsArr[value];
	}

	else if (value == "2") {
		headChanger.innerText = "You have selected Sport Quotes"
		document.getElementById("quotes").innerHTML = sportsArr[value];
	}

	else if (value == "3") {
		headChanger.innerText = "You have selected Educational Quotes"
		document.getElementById("quotes").innerHTML = educationArr[value];
	}

}

function showQuotes() {
	var selector = document.getElementById("selection");
	var value = selector[selector.selectedIndex].value;
	var randomQuote1 = Math.floor(Math.random() * (sportsArr.length - 0));
	var randomQuote2 = Math.floor(Math.random() * (politicsArr.length - 0));
	var randomQuote3 = Math.floor(Math.random() * (educationArr.length - 0));

	if (value == "1") {
		document.getElementById("quotes").innerHTML = politicsArr[randomQuote2];
	} 

	else if (value == "2") {
		document.getElementById("quotes").innerHTML = sportsArr[randomQuote1];
	}

	else if (value == "3") {
		document.getElementById("quotes").innerHTML = educationArr[randomQuote3];
	}

}

changeQuote.addEventListener('click', function() {
	shoQuote.style.display = "none";
	displayQuote.style.display = "block";
	socialIcons.style.display = "block";
	changeQuote.style.display = "block";
	var selector = document.getElementById("selection");
	var value = selector[selector.selectedIndex].value;

	if (value == "1") {
		headChanger.innerText = "You have selected Political Quotes"
		document.getElementById("quotes").innerHTML = politicsArr[value];
	}

	else if (value == "2") {
		headChanger.innerText = "You have selected Sport Quotes"
		document.getElementById("quotes").innerHTML = sportsArr[value];
	}

	else if (value == "3") {
		headChanger.innerText = "You have selected Educational Quotes"
		document.getElementById("quotes").innerHTML = educationArr[value];
	}
})

