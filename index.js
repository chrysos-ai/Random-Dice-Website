var img_links = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"]

var random_num1 = Math.floor((Math.random()* img_links.length ))
var random_num2 = Math.floor((Math.random()* img_links.length ))
var random_img1 = img_links[random_num1]
var random_img2 = img_links[random_num2]
if (random_img1 > random_img2){
    document.querySelector('h1').innerHTML = 'Player 1 won'
} else if (random_img2 > random_img1){
    document.querySelector('h1').innerHTML = 'Player 2 won'
}else{
    document.querySelector('h1').innerHTML = 'Draw'
}
document.querySelector('.img1').setAttribute('src', random_img1)
document.querySelector('.img2').setAttribute('src', random_img2)