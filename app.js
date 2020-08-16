var sound = new Howl({
      src: ['sounds/bling5.mp3']
    });

$(".ring").on('mouseenter',function(){
	sound.play();
});

// $(".form").on('mouseenter', function(){
// 	sound.play();
// });

var images = [
	"https://images.unsplash.com/photo-1538061210394-c72c824af0fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
	"https://images.unsplash.com/photo-1552209841-d2dc5fd68a30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
	"https://images.unsplash.com/photo-1585855777900-262a74451e2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
];

var links = [
	"https://www.facebook.com",
	"https://www.instagram.com",
	"https://www.twitter.com"
];

var counter=0;

$("#next-button").on('click', function(){
	
	counter++;

	if(counter<images.length){
		$('.cara-item').attr('src',images[counter]);
		$('.imagelink').attr('href', links[counter]);
	}
	else if(counter>images.length-1){
		counter = 0;
		$('.cara-item').attr('src', images[counter]);
		$('.imagelink').attr('href', links[counter]);
	}

	
});

$("#prev-button").on('click', function(){
	
	counter--;

	if(counter<0){
		counter = images.length-1;
		$('.cara-item').attr('src', images[counter]);
		$('.imagelink').attr('href', links[counter]);
	}
	else{
		$('.cara-item').attr('src', images[counter]);
		$('.imagelink').attr('href', links[counter]);	
	}
});

var caraitem = document.querySelector('.cara-item');
var imagelink = document.querySelector('.imagelink');
setInterval(function(){
	counter++;
	if(counter<images.length){
		caraitem.setAttribute('src',images[counter]);
		imagelink.setAttribute('href', links[counter]);
	}
	else if(counter>images.length-1){
		counter = 0;
		caraitem.setAttribute('src',images[counter]);
		imagelink.setAttribute('href', links[counter]);	
	}
}, 2000);