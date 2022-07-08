const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const btn = document.getElementById('change-cat');
const img = document.getElementById('cat');


const getCats = async () => {
  try {
    const data = await fetch(BASE_URL);
    const json = await data.json();
  
    return json.webpurl;
  }
  catch (error) {
    console.log(error.message);
  }

}

const loadImagem = async () => {
  img.src = await getCats();
}

btn.addEventListener('click', loadImagem);