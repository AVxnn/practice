let str = '';
console.log()

$('.mma').mouseenter( function () {
    $(this).children('#Explore').typeIt({
        strings: 'Explore all artists\' portfolios',
        speed: 20,
        breakLines: true,
        autoStart: true
   });
   $(this).children('#Discover').typeIt({
    strings: 'Discover their stories',
    speed: 20,
    breakLines: true,
    autoStart: true
});
    $(this).children('#View').typeIt({
    strings: 'View our event calendar',
    speed: 20,
    breakLines: true,
    autoStart: true
});
    $(this).children('#Read').typeIt({
    strings: 'Read our mission statement',
    speed: 20,
    breakLines: true,
    autoStart: true
});
});

// for(let sty of text){
//     setInterval(() => {
//         str += sty;
//         $(this).children('.title_text').text(str);
//         console.log(str);
//         console.log(text.length);
//         console.log(str.length);
//     }, 1111);
// }
// return str = '';