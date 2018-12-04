var lyrics = [
"Oh the sisters of mercy, they are not departed or gone",
"They were waiting for me when I thought that I just can't go on",
"And they brought me their comfort and later they brought me this song",
"Oh I hope you run into them, you who've been travelling so long",
"Yes you who must leave everything that you cannot control",
"It begins with your family, but soon it comes around to your soul",
"Well I've been where you're hanging, I think I can see how you're pinned",
"When you're not feeling holy, your loneliness says that you've sinned" ,
"I believe that you heard your master sing",
"when I was sick in bed",
"I suppose that he told you everything
that I keep locked away in my head",
"Your master took you travelling, 
well at least that's what you said. ",
"And now do you come back to bring 
your prisoner wine and bread? ",
"You met him at some temple, where 
they take your clothes at the door. ",
"He was just a numberless man in a chair 
who'd just come back from the war. ",
"And you wrap up his tired face in your hair 
and he hands you the apple core. ",
"Then he touches your lips now so suddenly bare 
of all the kisses we put on some time before. "
]

function randomCohen(){
	 var mixMaster = lyrics [Math.floor(Math.random()* lyrics.length)];
		return mixMaster;	 
}
//randomCohen();

module.exports.randomCohen = randomCohen;