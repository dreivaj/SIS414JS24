const URL_DB = "https://examen1sis414-default-rtdb.firebaseio.com/";
const cloudName = "disvwilxi";
const URL_STORAGE = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
const preset = "clientes";



function getImages(event) {
  event.preventDefault();
  const images = event.target.files;
  const app = document.getElementById("app");
  console.log(images);

  for (const key in images) {
    const image = images[key];
    const img = document.createElement("img");
    img.className =
      "transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110";
    console.log(URL.createObjectURL(image));
    img.src = URL.createObjectURL(image);
    app.appendChild(img);
  }
}
async function postData(event) {
  event.preventDefault();

  const name = event.target.name.value;
  const description = event.target.description.value;
  const images = event.target.images.files;
  const urlImages = {};
  //console.log(name, lastName, images);
  for (const key in images) {
    const image = images[key];
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", preset);

    const postImage = await fetch(URL_STORAGE, {
      method: "POST",
      body: formData,
    });
    const { secure_url, width, height, original_filename } =
      await postImage.json();
    urlImages[key] = {
      url: secure_url,
      name: original_filename,
      width,
      height,
    };
  }
  const data = {
    name,
    description,
    urlImages,
  };
  const postData = await fetch(`${URL_DB}users.json`, {
    method: "POST",
    body: JSON.stringify(data),
  });
  if (postData.ok) {
    alert("Usuario creado");
    event.target.reset();
    getData();
  }
}

async function getData() {
  const tBody = document.getElementById("tBody");
  tBody.innerHTML = "";
  const res = await fetch(`${URL_DB}users.json`);

  const users = await res.json();

  for (const key in users) {
    const user = users[key];
    console.log(user);
    let tr = document.createElement("tr");

    tr.innerHTML = `
            <td>${user.name}</td>
            <td>${user.description}</td>
            <td id="images-container"><button onclick="viewImages('${key}')">ver imagenes</button></td>
        `;
    tBody.appendChild(tr);
  }
}

async function viewImages(key) {
  const imagesContainer = document.getElementById("images-container");
  const res = await fetch(`${URL_DB}users/${key}.json`);
  const container = document.createElement("div");
  container.className =
    "w-[95%] mx-auto columns-1 sm:columns-2 md:columns-3 xl:columns-4 gap-4";
  const { urlImages } = await res.json();
  for (const key in urlImages) {
    const { height, name, url, width } = urlImages[key];
    const img = document.createElement("img");
    img.src = urlImages[key].url;
    img.alt = name;
    img.className =
      "transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110";
    container.appendChild(img);
  }
  imagesContainer.appendChild(container);
}