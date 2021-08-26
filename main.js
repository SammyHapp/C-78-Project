var images=[
"https://i.pinimg.com/736x/f8/2f/ba/f82fbac7514f944aacc0257445c1f89e.jpg"
"https://thumbs.dreamstime.com/b/happy-young-boy-teenager-character-happy-young-boy-teenager-character-vector-illustration-design-182237891.jpg"
"https://image.shutterstock.com/image-vector/cute-thinking-woman-looking-away-260nw-439245706.jpg"


]




var i=0;


function nextslide(){
    if(i  ==  9)
{
    i=0;
}
document.getElementById("album").src=images[i];
i++;
}