$(document).ready(function(){
	$("#taj").mouseover(function(){
		var info='The Taj Mahal is a white marble mausoleum located on the southern bank of \
		the Yamuna River in the Indian city of Agra. It was commissioned in 1632 by \
		the Mughal emperor Shah Jahan to house the tomb of his favorite wife of three, Mumtaz Mahal.';
		$("img").attr('src', 'taj.jpg');
		$("#info").text(info);
	});

	$("#machu").mouseover(function(){
		var info='Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above \
		the Urubamba River valley. Built in the 15th century and later abandoned, \
		it’s renowned for its sophisticated dry-stone walls that fuse huge blocks without the use of mortar, intriguing buildings that play on astronomical alignments, and panoramic \
		views. Its exact former use remains a mystery.';
		$("img").attr('src', 'machu.jpg');
		$("#info").text(info);
	});

	$("#chichen").mouseover(function(){
		var info='Chichen Itza was a large pre-Columbian city built by the Maya \
		people of the Terminal Classic period. The archaeological site is \
		located in Tinúm Municipality, Yucatán State, Mexico.';
		$("img").attr('src', 'chichen.jpg');
		$("#info").text(info);
	});

	$("#christ").mouseover(function(){
		var info='Christ the Redeemer is an Art Deco statue of Jesus Christ in \
		Rio de Janeiro, Brazil, created by French sculptor Paul Landowski and \
		built by the Brazilian engineer Heitor da Silva Costa, in collaboration \
		with the French engineer Albert Caquot.';
		$("img").attr('src', 'christ.jpg');
		$("#info").text(info);
	});

	$("#wall").mouseover(function(){
		var info='The Great Wall of China is a series of fortifications made of \
		stone, brick, tamped earth, wood, and other materials, generally built \
		along an east-to-west line across the historical northern borders of \
		China to protect the Chinese states and empires against the raids and \
		invasions of the various nomadic groups of the Eurasian Steppe.';
		$("img").attr('src', 'wall.jpg');
		$("#info").text(info);
	});

	$("#roman").mouseover(function(){
		var info='The Colosseum or Coliseum, also known as the Flavian Amphitheatre, \
		is an oval amphitheatre in the centre of the city of Rome, Italy.';
		$("img").attr('src', 'roman.jpg');
		$("#info").text(info);
	});

	$("#petra").mouseover(function(){
		var info='Petra is a historical and archaeological city in the southern Jordanian \
		governorate of Maan that is famous for its rock-cut architecture and water conduit system.';
		$("img").attr('src', 'petra.jpg');
		$("#info").text(info);
	});

});