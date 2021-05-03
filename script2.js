let new2 = {
     title2 : "text to build on the card",
     text: "new-text",
     pick: "https://files.geektime.co.il/wp-content/uploads/2019/10/GOOGLE-LOGO-1571127079.jpg",
}

let now = document.querySelector('.card-title');
now.innerHTML = new2.text;

let chek = document.querySelector('.card-text');
chek.innerHTML = new2.title2;

let one = document.getElementById('cardimg');
one.src = new2.pick;


