$(document).ready( function(){
  getQuote();



  function getQuote(){
var quotes = ["\"We are not primarily put on this earth to see through one another, but to see one another through.\" % -Peter De Vries","\"I think there is a human instinct to tell stories, no matter who you are or where you live.\" % Sarah Kay", "\" When you really know who you are and what you like about yourself, changing for other people isn't such a big deal.\" % -Abed Nadir","\"Every time I paint a portrait I lose a friend.\" % - John Singer Sargent","\" I was constantly told and challenged to live my life as a warrior. As a warrior, you assume responsibility for yourself. The warrior humbles himself. And the warrior learns the power of giving.\" % - Billy Mills","\"A forest bird never wants a cage\" % - Henrik Ibsen","\" Age is an Issue of mind over matter. If you don't mind, it doesn't matter.\"% -Mark Twain","\"I don't feel old. I don't feel anything till noon. That's when it's time for my nap.\"% - Bob Hope","\"The only source of knowledge is experience.\" % - Albert Einstein","\"Tell me and I forget. Teach me and I remember. Involve me and I learn.\"% - Benjamin Franklin","\"I like to listen. I have learned a great deal from listening carefully. Most people never listen.\"% - Ernest Hemingway","\"It is health that is real wealth and notpieces of gold and silver.\"% -Mahatma Gandhi ","\"Truth is everybody is going to hurt you: you just gotta find the ones worth suffering for.\" % - Bob Marley","\"We don't develop courage by being happy every day. We develop it by surviving difficult times and challenging adversity.\" % -Barbara de Angelis","\"I can accept failure, everyone fails at something. But I can't accept not trying.\"% - Michael Jordan","\"If you're not failing every now and again, it's a sign you're not doing anything very innovative.\"% - Woody Allen","\"Plenty of people miss their share of happiness, not because they never found it, but because they didn't stop to enjoy it. \" % - William Feather","\"Creativity takes courage.\" % - Henri Matisse","\"The reason we're successful, darling? My overall charisma, of course.\" % - Freddie Mercury","\"Each generation imagines itself to be more intelligent than the one that went before it, and wiser than the one that comes after it.\" % - George Orwell","\"Life is pleasant. Death is peaceful. It's the transition that's troublesome.\"% - Isaac Asimov","\"I don't pretend we have all the answers. But the questions are certainly worth thinking about.\" % - Arthur C. Clark","\"Visualize this thing that you want, see it, feel it, believe in it. Make your mental blue print, and begin to build.\" % - Robert Collier","\"Always remember that you are absolutely unique. Just like everyone else.\" % - Margaret Mead","\"Don't aim for success if you want it; just do what you love and believe in, and it will come naturally.\"% - David Frost","\"The creation of a thousand forests is in one acorn. \" % - Ralph Waldo Emerson","\"Love and scandal are the best sweeteners of tea.\" % - Henry Fielding","\"Music washes away from the soul the dust of everyday life.\" % - Berthold Auerbach","\"There's something about taking a plow and breaking new ground. It gives you energy.\" % - Ken Kesey","\"I have as much privacy as a goldfish in a bowl.\" % - Princess Margaret","\"The sky is filled with stars, invisible by day.\" % - Henry Wadsworth Longfellow","\"My most brilliant achievement was my ability to be able to persuade my wife to marry me.\" % - Winston Churchill"];



randomQuotes=quotes[Math.floor(Math.random()*quotes.length)];
quoteWithAuthor= randomQuotes.split("%");
$(".quote-sentence").text(quoteWithAuthor[0]);
$(".person").text(quoteWithAuthor[1]);

                      }




  $(".button").on( "click", function() {

    $(".quote-sentence,.person").animate({opacity: 0}, 700, function() {
          $(this).animate({ opacity: 1}, 700);

    getQuote();
});


  });



  });

