let playlist = ["Dua Lipa - Dance The Night", "The Weeknd - Blinding Lights"];
let removido = playlist.pop()

playlist.push("Olivia Rodrigo - good 4 u");
playlist.push("Harry Styles - As It Was");

playlist.pop();

playlist.map((musica, index) => {
    console.log(`${index + 1}. ${musica}`);
});
