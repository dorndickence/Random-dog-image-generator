const dog_Url = "https://dog.ceo/api/breeds/image/random";

const doggos = document.getElementById("dog-target");

async function addNewDoggo(){
const promise= await fetch(dog_Url);
const processedPromise= await promise.json ();

const img = document.createElement("img");
img.classList.add('image-width');
img.src = processedPromise.message;
img.alt = "cute dog";

const downloadLink = document.createElement('a');
    downloadLink.href = processedPromise.message;
    downloadLink.download = 'dog_image.jpg';  
    downloadLink.innerText = 'Download Image ☝️☝️';
    downloadLink.style.display = 'block';
    downloadLink.style.marginTop = '10px';
    downloadLink.style.color = 'Blue';
    downloadLink.style.border = '4px solid white';
    downloadLink.style.background = 'white';
    downloadLink.style.fontWeight = '700';
    downloadLink.style.cursor = 'pointer';
    downloadLink.style.textDecoration = 'none';
doggos.appendChild(img);
doggos.appendChild(downloadLink);

}


document.getElementById("button").addEventListener("click", addNewDoggo);




