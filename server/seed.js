'use strict';

var News = require('./models/news');
var User = require('./models/users');

var newsArray = [
	{
	"_id":"1",
	"title":"Lorem Ipsum 1",
 	"subtitle":"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
 	"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum, lorem non semper vestibulum, tellus libero laoreet mi, vel volutpat odio augue ac tellus. Sed ornare, dui eu bibendum accumsan, ipsum dui interdum sem, pellentesque fermentum tellus urna eget ipsum. Mauris at vulputate nulla. Integer id elit nibh. Donec augue ante, tincidunt id imperdiet in, faucibus et augue. Nunc eleifend ultrices sagittis. Nunc auctor justo a nisl pulvinar, eget iaculis tortor euismod. Morbi lectus augue, maximus pellentesque consequat nec, consectetur ut neque. Nullam vitae rhoncus nisl, eu porttitor neque. Integer nec sem augue. Aliquam rutrum interdum lectus eu interdum. Suspendisse tincidunt bibendum purus. Donec sit amet pulvinar urna, nec viverra enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur ultrices felis vitae tincidunt mollis. Mauris nec tincidunt erat, nec fringilla nulla. Praesent sagittis interdum sollicitudin. Sed sit amet ipsum felis. Nunc hendrerit quam quis magna dignissim pulvinar. Ut fermentum ac diam volutpat posuere. Pellentesque vestibulum pretium lacus sed lobortis. Mauris vitae facilisis sem. Nullam a lacus tellus. Suspendisse mauris nulla, vulputate in commodo eget, tempor quis enim. Etiam non ante in libero hendrerit consequat. Donec luctus fermentum metus id rhoncus. Suspendisse pretium elit sit amet pharetra accumsan. Pellentesque pellentesque et justo quis elementum. Curabitur dapibus semper tortor in sagittis. Nulla suscipit sollicitudin feugiat. Vestibulum eu erat et erat facilisis dignissim. Maecenas vel diam ultrices, dapibus odio vitae, consectetur quam. Aenean mauris tellus, iaculis id fringilla in, viverra a augue. Mauris faucibus lorem non justo facilisis malesuada. Cras congue ante sit amet orci sagittis sollicitudin. Nullam purus justo, egestas ut dui eget, eleifend ullamcorper nunc. Curabitur at tortor congue ligula tincidunt consequat. Phasellus rhoncus blandit urna a malesuada. Vivamus in quam imperdiet, luctus nunc nec, accumsan eros. Maecenas pharetra ornare ultricies. Proin a orci ligula. Quisque libero metus, suscipit vitae feugiat a, mollis ut mi. Curabitur egestas massa eu enim imperdiet, vel bibendum libero malesuada.",
 	"author":"Usuario Autor",
 	"img":"img/placeholder.png"
 	},

 	{"_id":"2",
 	"title":"Lorem Ipsum 2",
 	"subtitle":"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
 	"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum, lorem non semper vestibulum, tellus libero laoreet mi, vel volutpat odio augue ac tellus. Sed ornare, dui eu bibendum accumsan, ipsum dui interdum sem, pellentesque fermentum tellus urna eget ipsum. Mauris at vulputate nulla. Integer id elit nibh. Donec augue ante, tincidunt id imperdiet in, faucibus et augue. Nunc eleifend ultrices sagittis. Nunc auctor justo a nisl pulvinar, eget iaculis tortor euismod. Morbi lectus augue, maximus pellentesque consequat nec, consectetur ut neque. Nullam vitae rhoncus nisl, eu porttitor neque. Integer nec sem augue. Aliquam rutrum interdum lectus eu interdum. Suspendisse tincidunt bibendum purus. Donec sit amet pulvinar urna, nec viverra enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur ultrices felis vitae tincidunt mollis. Mauris nec tincidunt erat, nec fringilla nulla. Praesent sagittis interdum sollicitudin. Sed sit amet ipsum felis. Nunc hendrerit quam quis magna dignissim pulvinar. Ut fermentum ac diam volutpat posuere. Pellentesque vestibulum pretium lacus sed lobortis. Mauris vitae facilisis sem. Nullam a lacus tellus. Suspendisse mauris nulla, vulputate in commodo eget, tempor quis enim. Etiam non ante in libero hendrerit consequat. Donec luctus fermentum metus id rhoncus. Suspendisse pretium elit sit amet pharetra accumsan. Pellentesque pellentesque et justo quis elementum. Curabitur dapibus semper tortor in sagittis. Nulla suscipit sollicitudin feugiat. Vestibulum eu erat et erat facilisis dignissim. Maecenas vel diam ultrices, dapibus odio vitae, consectetur quam. Aenean mauris tellus, iaculis id fringilla in, viverra a augue. Mauris faucibus lorem non justo facilisis malesuada. Cras congue ante sit amet orci sagittis sollicitudin. Nullam purus justo, egestas ut dui eget, eleifend ullamcorper nunc. Curabitur at tortor congue ligula tincidunt consequat. Phasellus rhoncus blandit urna a malesuada. Vivamus in quam imperdiet, luctus nunc nec, accumsan eros. Maecenas pharetra ornare ultricies. Proin a orci ligula. Quisque libero metus, suscipit vitae feugiat a, mollis ut mi. Curabitur egestas massa eu enim imperdiet, vel bibendum libero malesuada.",
 	"author":"Usuario Autor",
 	"img":"img/placeholder.png"
 	},

	{
	"_id":"3",
	"title":"Lorem Ipsum 3",
 	"subtitle":"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
 	"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum, lorem non semper vestibulum, tellus libero laoreet mi, vel volutpat odio augue ac tellus. Sed ornare, dui eu bibendum accumsan, ipsum dui interdum sem, pellentesque fermentum tellus urna eget ipsum. Mauris at vulputate nulla. Integer id elit nibh. Donec augue ante, tincidunt id imperdiet in, faucibus et augue. Nunc eleifend ultrices sagittis. Nunc auctor justo a nisl pulvinar, eget iaculis tortor euismod. Morbi lectus augue, maximus pellentesque consequat nec, consectetur ut neque. Nullam vitae rhoncus nisl, eu porttitor neque. Integer nec sem augue. Aliquam rutrum interdum lectus eu interdum. Suspendisse tincidunt bibendum purus. Donec sit amet pulvinar urna, nec viverra enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur ultrices felis vitae tincidunt mollis. Mauris nec tincidunt erat, nec fringilla nulla. Praesent sagittis interdum sollicitudin. Sed sit amet ipsum felis. Nunc hendrerit quam quis magna dignissim pulvinar. Ut fermentum ac diam volutpat posuere. Pellentesque vestibulum pretium lacus sed lobortis. Mauris vitae facilisis sem. Nullam a lacus tellus. Suspendisse mauris nulla, vulputate in commodo eget, tempor quis enim. Etiam non ante in libero hendrerit consequat. Donec luctus fermentum metus id rhoncus. Suspendisse pretium elit sit amet pharetra accumsan. Pellentesque pellentesque et justo quis elementum. Curabitur dapibus semper tortor in sagittis. Nulla suscipit sollicitudin feugiat. Vestibulum eu erat et erat facilisis dignissim. Maecenas vel diam ultrices, dapibus odio vitae, consectetur quam. Aenean mauris tellus, iaculis id fringilla in, viverra a augue. Mauris faucibus lorem non justo facilisis malesuada. Cras congue ante sit amet orci sagittis sollicitudin. Nullam purus justo, egestas ut dui eget, eleifend ullamcorper nunc. Curabitur at tortor congue ligula tincidunt consequat. Phasellus rhoncus blandit urna a malesuada. Vivamus in quam imperdiet, luctus nunc nec, accumsan eros. Maecenas pharetra ornare ultricies. Proin a orci ligula. Quisque libero metus, suscipit vitae feugiat a, mollis ut mi. Curabitur egestas massa eu enim imperdiet, vel bibendum libero malesuada.",
 	"author":"Usuario Autor",
 	"img":"img/placeholder.png"
 	},

 	{"_id":"4",
 	"title":"Lorem Ipsum 4",
 	"subtitle":"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
 	"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum, lorem non semper vestibulum, tellus libero laoreet mi, vel volutpat odio augue ac tellus. Sed ornare, dui eu bibendum accumsan, ipsum dui interdum sem, pellentesque fermentum tellus urna eget ipsum. Mauris at vulputate nulla. Integer id elit nibh. Donec augue ante, tincidunt id imperdiet in, faucibus et augue. Nunc eleifend ultrices sagittis. Nunc auctor justo a nisl pulvinar, eget iaculis tortor euismod. Morbi lectus augue, maximus pellentesque consequat nec, consectetur ut neque. Nullam vitae rhoncus nisl, eu porttitor neque. Integer nec sem augue. Aliquam rutrum interdum lectus eu interdum. Suspendisse tincidunt bibendum purus. Donec sit amet pulvinar urna, nec viverra enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur ultrices felis vitae tincidunt mollis. Mauris nec tincidunt erat, nec fringilla nulla. Praesent sagittis interdum sollicitudin. Sed sit amet ipsum felis. Nunc hendrerit quam quis magna dignissim pulvinar. Ut fermentum ac diam volutpat posuere. Pellentesque vestibulum pretium lacus sed lobortis. Mauris vitae facilisis sem. Nullam a lacus tellus. Suspendisse mauris nulla, vulputate in commodo eget, tempor quis enim. Etiam non ante in libero hendrerit consequat. Donec luctus fermentum metus id rhoncus. Suspendisse pretium elit sit amet pharetra accumsan. Pellentesque pellentesque et justo quis elementum. Curabitur dapibus semper tortor in sagittis. Nulla suscipit sollicitudin feugiat. Vestibulum eu erat et erat facilisis dignissim. Maecenas vel diam ultrices, dapibus odio vitae, consectetur quam. Aenean mauris tellus, iaculis id fringilla in, viverra a augue. Mauris faucibus lorem non justo facilisis malesuada. Cras congue ante sit amet orci sagittis sollicitudin. Nullam purus justo, egestas ut dui eget, eleifend ullamcorper nunc. Curabitur at tortor congue ligula tincidunt consequat. Phasellus rhoncus blandit urna a malesuada. Vivamus in quam imperdiet, luctus nunc nec, accumsan eros. Maecenas pharetra ornare ultricies. Proin a orci ligula. Quisque libero metus, suscipit vitae feugiat a, mollis ut mi. Curabitur egestas massa eu enim imperdiet, vel bibendum libero malesuada.",
 	"author":"Usuario Autor",
 	"img":"img/placeholder.png"
 	},

 	{"_id":"5",
 	"title":"Lorem Ipsum 5",
 	"subtitle":"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
 	"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum, lorem non semper vestibulum, tellus libero laoreet mi, vel volutpat odio augue ac tellus. Sed ornare, dui eu bibendum accumsan, ipsum dui interdum sem, pellentesque fermentum tellus urna eget ipsum. Mauris at vulputate nulla. Integer id elit nibh. Donec augue ante, tincidunt id imperdiet in, faucibus et augue. Nunc eleifend ultrices sagittis. Nunc auctor justo a nisl pulvinar, eget iaculis tortor euismod. Morbi lectus augue, maximus pellentesque consequat nec, consectetur ut neque. Nullam vitae rhoncus nisl, eu porttitor neque. Integer nec sem augue. Aliquam rutrum interdum lectus eu interdum. Suspendisse tincidunt bibendum purus. Donec sit amet pulvinar urna, nec viverra enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur ultrices felis vitae tincidunt mollis. Mauris nec tincidunt erat, nec fringilla nulla. Praesent sagittis interdum sollicitudin. Sed sit amet ipsum felis. Nunc hendrerit quam quis magna dignissim pulvinar. Ut fermentum ac diam volutpat posuere. Pellentesque vestibulum pretium lacus sed lobortis. Mauris vitae facilisis sem. Nullam a lacus tellus. Suspendisse mauris nulla, vulputate in commodo eget, tempor quis enim. Etiam non ante in libero hendrerit consequat. Donec luctus fermentum metus id rhoncus. Suspendisse pretium elit sit amet pharetra accumsan. Pellentesque pellentesque et justo quis elementum. Curabitur dapibus semper tortor in sagittis. Nulla suscipit sollicitudin feugiat. Vestibulum eu erat et erat facilisis dignissim. Maecenas vel diam ultrices, dapibus odio vitae, consectetur quam. Aenean mauris tellus, iaculis id fringilla in, viverra a augue. Mauris faucibus lorem non justo facilisis malesuada. Cras congue ante sit amet orci sagittis sollicitudin. Nullam purus justo, egestas ut dui eget, eleifend ullamcorper nunc. Curabitur at tortor congue ligula tincidunt consequat. Phasellus rhoncus blandit urna a malesuada. Vivamus in quam imperdiet, luctus nunc nec, accumsan eros. Maecenas pharetra ornare ultricies. Proin a orci ligula. Quisque libero metus, suscipit vitae feugiat a, mollis ut mi. Curabitur egestas massa eu enim imperdiet, vel bibendum libero malesuada.",
 	"author":"Usuario Autor",
 	"img":"img/placeholder.png"
 	},

 	{"_id":"6",
 	"title":"Lorem Ipsum 6",
 	"subtitle":"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
 	"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum, lorem non semper vestibulum, tellus libero laoreet mi, vel volutpat odio augue ac tellus. Sed ornare, dui eu bibendum accumsan, ipsum dui interdum sem, pellentesque fermentum tellus urna eget ipsum. Mauris at vulputate nulla. Integer id elit nibh. Donec augue ante, tincidunt id imperdiet in, faucibus et augue. Nunc eleifend ultrices sagittis. Nunc auctor justo a nisl pulvinar, eget iaculis tortor euismod. Morbi lectus augue, maximus pellentesque consequat nec, consectetur ut neque. Nullam vitae rhoncus nisl, eu porttitor neque. Integer nec sem augue. Aliquam rutrum interdum lectus eu interdum. Suspendisse tincidunt bibendum purus. Donec sit amet pulvinar urna, nec viverra enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur ultrices felis vitae tincidunt mollis. Mauris nec tincidunt erat, nec fringilla nulla. Praesent sagittis interdum sollicitudin. Sed sit amet ipsum felis. Nunc hendrerit quam quis magna dignissim pulvinar. Ut fermentum ac diam volutpat posuere. Pellentesque vestibulum pretium lacus sed lobortis. Mauris vitae facilisis sem. Nullam a lacus tellus. Suspendisse mauris nulla, vulputate in commodo eget, tempor quis enim. Etiam non ante in libero hendrerit consequat. Donec luctus fermentum metus id rhoncus. Suspendisse pretium elit sit amet pharetra accumsan. Pellentesque pellentesque et justo quis elementum. Curabitur dapibus semper tortor in sagittis. Nulla suscipit sollicitudin feugiat. Vestibulum eu erat et erat facilisis dignissim. Maecenas vel diam ultrices, dapibus odio vitae, consectetur quam. Aenean mauris tellus, iaculis id fringilla in, viverra a augue. Mauris faucibus lorem non justo facilisis malesuada. Cras congue ante sit amet orci sagittis sollicitudin. Nullam purus justo, egestas ut dui eget, eleifend ullamcorper nunc. Curabitur at tortor congue ligula tincidunt consequat. Phasellus rhoncus blandit urna a malesuada. Vivamus in quam imperdiet, luctus nunc nec, accumsan eros. Maecenas pharetra ornare ultricies. Proin a orci ligula. Quisque libero metus, suscipit vitae feugiat a, mollis ut mi. Curabitur egestas massa eu enim imperdiet, vel bibendum libero malesuada.",
 	"author":"Usuario Autor",
 	"img":"img/placeholder.png"
 	},

 	{"_id":"7",
 	"title":"Lorem Ipsum 7",
 	"subtitle":"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
 	"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum, lorem non semper vestibulum, tellus libero laoreet mi, vel volutpat odio augue ac tellus. Sed ornare, dui eu bibendum accumsan, ipsum dui interdum sem, pellentesque fermentum tellus urna eget ipsum. Mauris at vulputate nulla. Integer id elit nibh. Donec augue ante, tincidunt id imperdiet in, faucibus et augue. Nunc eleifend ultrices sagittis. Nunc auctor justo a nisl pulvinar, eget iaculis tortor euismod. Morbi lectus augue, maximus pellentesque consequat nec, consectetur ut neque. Nullam vitae rhoncus nisl, eu porttitor neque. Integer nec sem augue. Aliquam rutrum interdum lectus eu interdum. Suspendisse tincidunt bibendum purus. Donec sit amet pulvinar urna, nec viverra enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur ultrices felis vitae tincidunt mollis. Mauris nec tincidunt erat, nec fringilla nulla. Praesent sagittis interdum sollicitudin. Sed sit amet ipsum felis. Nunc hendrerit quam quis magna dignissim pulvinar. Ut fermentum ac diam volutpat posuere. Pellentesque vestibulum pretium lacus sed lobortis. Mauris vitae facilisis sem. Nullam a lacus tellus. Suspendisse mauris nulla, vulputate in commodo eget, tempor quis enim. Etiam non ante in libero hendrerit consequat. Donec luctus fermentum metus id rhoncus. Suspendisse pretium elit sit amet pharetra accumsan. Pellentesque pellentesque et justo quis elementum. Curabitur dapibus semper tortor in sagittis. Nulla suscipit sollicitudin feugiat. Vestibulum eu erat et erat facilisis dignissim. Maecenas vel diam ultrices, dapibus odio vitae, consectetur quam. Aenean mauris tellus, iaculis id fringilla in, viverra a augue. Mauris faucibus lorem non justo facilisis malesuada. Cras congue ante sit amet orci sagittis sollicitudin. Nullam purus justo, egestas ut dui eget, eleifend ullamcorper nunc. Curabitur at tortor congue ligula tincidunt consequat. Phasellus rhoncus blandit urna a malesuada. Vivamus in quam imperdiet, luctus nunc nec, accumsan eros. Maecenas pharetra ornare ultricies. Proin a orci ligula. Quisque libero metus, suscipit vitae feugiat a, mollis ut mi. Curabitur egestas massa eu enim imperdiet, vel bibendum libero malesuada.",
 	"author":"Usuario Autor",
 	"img":"img/placeholder.png"
 	},

 	{"_id":"8",
 	"title":"Lorem Ipsum 8",
 	"subtitle":"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
 	"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum, lorem non semper vestibulum, tellus libero laoreet mi, vel volutpat odio augue ac tellus. Sed ornare, dui eu bibendum accumsan, ipsum dui interdum sem, pellentesque fermentum tellus urna eget ipsum. Mauris at vulputate nulla. Integer id elit nibh. Donec augue ante, tincidunt id imperdiet in, faucibus et augue. Nunc eleifend ultrices sagittis. Nunc auctor justo a nisl pulvinar, eget iaculis tortor euismod. Morbi lectus augue, maximus pellentesque consequat nec, consectetur ut neque. Nullam vitae rhoncus nisl, eu porttitor neque. Integer nec sem augue. Aliquam rutrum interdum lectus eu interdum. Suspendisse tincidunt bibendum purus. Donec sit amet pulvinar urna, nec viverra enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur ultrices felis vitae tincidunt mollis. Mauris nec tincidunt erat, nec fringilla nulla. Praesent sagittis interdum sollicitudin. Sed sit amet ipsum felis. Nunc hendrerit quam quis magna dignissim pulvinar. Ut fermentum ac diam volutpat posuere. Pellentesque vestibulum pretium lacus sed lobortis. Mauris vitae facilisis sem. Nullam a lacus tellus. Suspendisse mauris nulla, vulputate in commodo eget, tempor quis enim. Etiam non ante in libero hendrerit consequat. Donec luctus fermentum metus id rhoncus. Suspendisse pretium elit sit amet pharetra accumsan. Pellentesque pellentesque et justo quis elementum. Curabitur dapibus semper tortor in sagittis. Nulla suscipit sollicitudin feugiat. Vestibulum eu erat et erat facilisis dignissim. Maecenas vel diam ultrices, dapibus odio vitae, consectetur quam. Aenean mauris tellus, iaculis id fringilla in, viverra a augue. Mauris faucibus lorem non justo facilisis malesuada. Cras congue ante sit amet orci sagittis sollicitudin. Nullam purus justo, egestas ut dui eget, eleifend ullamcorper nunc. Curabitur at tortor congue ligula tincidunt consequat. Phasellus rhoncus blandit urna a malesuada. Vivamus in quam imperdiet, luctus nunc nec, accumsan eros. Maecenas pharetra ornare ultricies. Proin a orci ligula. Quisque libero metus, suscipit vitae feugiat a, mollis ut mi. Curabitur egestas massa eu enim imperdiet, vel bibendum libero malesuada.",
 	"author":"Usuario Autor",
 	"img":"img/placeholder.png"
 	},

 	{"_id":"9",
 	"title":"Lorem Ipsum 9",
 	"subtitle":"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
 	"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum, lorem non semper vestibulum, tellus libero laoreet mi, vel volutpat odio augue ac tellus. Sed ornare, dui eu bibendum accumsan, ipsum dui interdum sem, pellentesque fermentum tellus urna eget ipsum. Mauris at vulputate nulla. Integer id elit nibh. Donec augue ante, tincidunt id imperdiet in, faucibus et augue. Nunc eleifend ultrices sagittis. Nunc auctor justo a nisl pulvinar, eget iaculis tortor euismod. Morbi lectus augue, maximus pellentesque consequat nec, consectetur ut neque. Nullam vitae rhoncus nisl, eu porttitor neque. Integer nec sem augue. Aliquam rutrum interdum lectus eu interdum. Suspendisse tincidunt bibendum purus. Donec sit amet pulvinar urna, nec viverra enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur ultrices felis vitae tincidunt mollis. Mauris nec tincidunt erat, nec fringilla nulla. Praesent sagittis interdum sollicitudin. Sed sit amet ipsum felis. Nunc hendrerit quam quis magna dignissim pulvinar. Ut fermentum ac diam volutpat posuere. Pellentesque vestibulum pretium lacus sed lobortis. Mauris vitae facilisis sem. Nullam a lacus tellus. Suspendisse mauris nulla, vulputate in commodo eget, tempor quis enim. Etiam non ante in libero hendrerit consequat. Donec luctus fermentum metus id rhoncus. Suspendisse pretium elit sit amet pharetra accumsan. Pellentesque pellentesque et justo quis elementum. Curabitur dapibus semper tortor in sagittis. Nulla suscipit sollicitudin feugiat. Vestibulum eu erat et erat facilisis dignissim. Maecenas vel diam ultrices, dapibus odio vitae, consectetur quam. Aenean mauris tellus, iaculis id fringilla in, viverra a augue. Mauris faucibus lorem non justo facilisis malesuada. Cras congue ante sit amet orci sagittis sollicitudin. Nullam purus justo, egestas ut dui eget, eleifend ullamcorper nunc. Curabitur at tortor congue ligula tincidunt consequat. Phasellus rhoncus blandit urna a malesuada. Vivamus in quam imperdiet, luctus nunc nec, accumsan eros. Maecenas pharetra ornare ultricies. Proin a orci ligula. Quisque libero metus, suscipit vitae feugiat a, mollis ut mi. Curabitur egestas massa eu enim imperdiet, vel bibendum libero malesuada.",
 	"author":"Usuario Autor",
 	"img":"img/placeholder.png"
 	}
 ];

 
 News.find({},function(error,result){
 		
	if (result.length==0) {
		newsArray.forEach(function(news,index){
			News.create({title:news.title,
						subtitle:news.subtitle,
						content:news.content,
						author:news.author,
						img:news.img})

		});
	}
});

var usersArray = [
	{"account":"normaluser",
	"password":"12345678",
	"name":"Usuario Comun",
	"email":"comun@usuario.com",
	"type":"user",
	
				
	},


	{"account":"authoruser",
	"password":"12345678",
	"name":"Usuario Autor",
	"email":"autor@usuario.com",
	"type":"author"
	},


	{"account":"adminuser",
	"password":"12345678",
	"name":"Usuario Admin",
	"email":"admin@usuario.com",
	"type":"admin"
	}
];

User.find({},function(error,result){
 	
	if (result.length==0) {
		usersArray.forEach(function(user,index){
			var date = new Date().toISOString().replace(/T.*/,'').split('-').reverse().join('-');
			User.create({

						regDate:date,
						password:user.password,
						name:user.name,
						email:user.email,
						type:user.type,
						
					})

		});
	}
});