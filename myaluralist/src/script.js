var listaAnimes = [
  "https://upload.wikimedia.org/wikipedia/en/2/20/Gurren_Lagann_key_visual.jpg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/4/48/Samurai_Champloo_key_art.jpg/220px-Samurai_Champloo_key_art.jpg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/Cowboy_Bebop_key_visual.jpg/220px-Cowboy_Bebop_key_visual.jpg",
  "https://static.wikia.nocookie.net/mob-psycho-100/images/8/8b/Mob_Psycho_100_Cover.jpg",
  "https://animefire.net/img/animes/saiki-kusuo-no--nan-large.jpg",
  "https://animeonline.site/wp-content/uploads/2019/12/Katekyo-Hitman-Reborn-poster.jpg",
  "https://m.media-amazon.com/images/I/91wgo7S97ZL.jpg",
  "https://m.media-amazon.com/images/M/MV5BZTViMTZlMjgtNjVmZC00NjEzLWJlN2QtMjQ4ZTYxNzBiZmMyXkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_FMjpg_UX1000_.jpg",
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/cbb55a6382682bf71e91f685c6473c5a.jpg",
  "https://animesonline.cc/wp-content/uploads/2019/08/jk11mCSE5sNlfuN4DHsSvRYMc8M.jpg"
];

var nomeAnimes = [
  "Gurren Lagann",
  "Samurai Champloo",
  "Cowboy Bebop",
  "Mob Psycho 100",
  "Saiki Kusuo no Psy-nan",
  "Katekyo Hitman Reborn",
  "Danganronpa",
  "Parasyte",
  "Hunter x Hunter",
  "Katanagatari"
];

for (var i = 0; i < listaAnimes.length; i++) {
  if (listaAnimes[i].endsWith("jpg")) {
    document.write(
      '<img src="' + listaAnimes[i] + '"> <p>' + nomeAnimes[i] + "</p>"
    );
  }
}

/*
//com while

var i = 0; 

do {
document.write('<img src="' + listaAnimes[i] + '"> <p>' + nomeAnimes[i] + '</p>'); i++} while (i < listaAnimes.length)
*/
