var main = document.getElementById('main');


let child = document.createElement('div');
child.classList.add("navbar");

let child1 = document.createElement('div');
child1.classList.add("child");

let navbar = document.createElement('nav');

navbar.innerHTML="BR ";

let span = document.createElement('span')
span.classList.add("span");
span.innerHTML="Architects";

navbar.appendChild(span);
child1.append(navbar);

let child2 = document.createElement('div');
child2.classList.add("child1");


let items = ["Projects","About","Contact"];
for (const i in items) {
    if (Object.prototype.hasOwnProperty.call(items, i)) {
        let list = document.createElement('ul');
        list.classList.add("list");
        // let link = document.createElement('a');// Done other day 

        let listE1 = document.createElement('li');
        listE1.classList.add("space");
        
        listE1.textContent=items[i];
        list.append(listE1);
        child2.append(list);
    }
}

child.append(child1,child2);
main.appendChild(child);

let child33 = document.createElement('div');
child33.classList.add("relative");

let image = document.createElement('img');
image.src="architect.jpg";
image.classList.add("br-image")

let positionE1 = document.createElement('div');
positionE1.classList.add("br-position");

let spanE1 = document.createElement('span');
spanE1.innerHTML="BR ";
spanE1.classList.add("ai")

let text = document.createElement('span');
text.innerHTML="Architects";
text.classList.add("text-Ar");

positionE1.append(spanE1,text);
child33.append(positionE1);

child33.append(image,positionE1);
main.appendChild(child33);

let card = document.createElement('div');
card.classList.add("card");
card.innerHTML="Projects";

main.append(card);

// for (let i = 0; i < imagesHousesAnvesh.length; i++) {
//     let card1 = document.createElement('div');
//     card1.classList.add("card-image");

//     let imageHouse = document.createElement('img');
//     imageHouse.src = imagesHousesAnvesh[i];
//     imageHouse.classList.add("House");

//     let summer = document.createElement('div');
//     summer.innerHTML = textUpper[i]; // Ensure correct pairing
//     summer.classList.add("summer");

//     card1.append(imageHouse, summer);
//     sectionImage.append(card1);
// }

// main.append(sectionImage);

let sectionImage = document.createElement('div');
sectionImage.classList.add("flex");

let imagesHousesAnvesh = ["house1.jpg", "house2.jpg", "house3.jpg", "house4.jpg", "house2.jpg", "house1.jpg", "house4.jpg", "house3.jpg"];
let textUpper = ["Summer House", "Black House", "Renovated House", "Barn House", "Summer House", "Brick House", "Renovated House", "Barn House"];

for (let i in imagesHousesAnvesh) {
    let card1 = document.createElement('div');
    card1.classList.add("card-image");

    let imageHouse = document.createElement('img');
    imageHouse.src = imagesHousesAnvesh[i];
    imageHouse.classList.add("House");

    let summer = document.createElement('div');
    summer.innerHTML = textUpper[i]; // Ensures correct text pairing
    summer.classList.add("summer");

    card1.append(imageHouse, summer);
    sectionImage.append(card1);

// main.append(sectionImage); // here given also output found

}

main.append(sectionImage);

let card55 = document.createElement('div');
card55.classList.add("card-less");
card55.innerHTML="About";

main.append(card55);

let card2555 = document.createElement('div');
card2555.classList.add("card-content");
// card2555.id="poll";

let card7285 = document.createElement('p');
card7285.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
card7285.classList.add("love");
card2555.append(card7285);


let photos =["sunil.jpg","sunil1.jpg","team3.jpg","team4.jpg"];
let namde = ["Anvesh","Bhumika","Shyam","Manoj"];
let role = ["CEO & Founder", "Architect","Designer","Developer"];

let photo = document.createElement('div');
photo.classList.add("flex-item");

for (i in photos){
    
    let mainBoy = document.createElement('div');
    mainBoy.classList.add("mainBoy");
    
    let sunilImage = document.createElement('img');
    sunilImage.classList.add("sunil");
    sunilImage.src=photos[i];
    
    let suniPara = document.createElement('div');
    suniPara.innerHTML=namde[i];
    suniPara.classList.add("sunilPara")
    
    let ceo = document.createElement('p');
    ceo.innerHTML=role[i];
    ceo.classList.add("ceo");
    
    let ceoPara = document.createElement('p');
    ceoPara.innerHTML="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.";
    ceoPara.classList.add("ceoPara");
    
    let ceobtn = document.createElement('button');
    ceobtn.innerHTML="Contact";
    ceobtn.classList.add("ceo-btn");
mainBoy.append(sunilImage,suniPara,ceo,ceoPara,ceobtn);
photo.append(mainBoy);

}


card2555.append(photo);
main.append(card2555);

let contact = document.createElement('div');
contact.classList.add("card-less");
contact.innerHTML="Contact";

main.append(contact);

let card255525 = document.createElement('div');
card255525.classList.add("card-last");

let king = document.createElement('p');
king.classList.add("king");
king.innerHTML="Lets get in touch and talk about your next project.";
card255525.append(king);

let inputValues =["Name","Email","Subject","Comment"];
for(i in inputValues){


let input = document.createElement('input');
input.classList.add("input");
input.type="text";
input.placeholder=inputValues[i];


card255525.append(input);

}
let send = document.createElement('button');
send.classList.add("send");
send.innerHTML="SEND MESSAGE";
card255525.append(send);
main.append(card255525);

let map = document.createElement('div');
map.classList.add("map");

let mapImage = document.createElement('img');
mapImage.src="map.jpg";
mapImage.classList.add("cover");

map.append(mapImage);
main.append(map);

let least = document.createElement('div');
least.classList.add("power");
least.innerHTML="Powered by";

let anchor = document.createElement('a');
anchor.innerHTML=" w3.css";
anchor.href="https://www.w3schools.com/w3css/default.asp";
anchor.classList.add("pair");

least.append(anchor);
main.append(least);