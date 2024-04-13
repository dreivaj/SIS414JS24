
const firebaseConfig = {
  type: "service_account",
  project_id: "rpacialemergentes",
  private_key_id: "b0b73990226b13b1a462b433552ce4993968f98a",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDFDBRhvcINzqXI\nVRJB96OQhN0U41G6wY92q64gDxHhlhdmDsl9pwzggD01cUYmVRMW4BjmacQLHyWW\nOlEGoLwu96yqDir/87zVh+oBwxEiM6HY2MFUdbUCaxkigmguqRylb4kzL8FHcojc\nELvESdw7WbUN2nV8JCBd+m1PR3Gqm/TdKNqNC3AzTeQH711DkSVhqHtwS9A8SNVl\n9uZP7BvnTpK0XB8uBNrywuIOcfCLn9hnFCLhcSVKSHseTxl4OMjRa2+8riaDOT/P\nmkT6gdJVGew1UuuYZI7SQn3RCpTktZK/YjLNatJR4IsGd5n/f9kgsAwXKUKBc0aT\nPANOseuZAgMBAAECggEACmsGFNjcjrBTUZE14uj96+EqczVFl/Mt659OGIHTdzLh\nT9MOUidn5eLB2baAd/xdgwMcLep/o/rkmNnCePA8otsTdPZEzb2MSVnjRG6U1FMY\nhoeHSTjj9hnFfW6ZpYXpbtHD1kH7HRTwKXp1Av7ItxaaHP5k4chjMbTQ3LUxTEzU\n173+9VI2XgFrLnqAAbcdejDfuf5Ei6ivhDEwx4ZQABwKSMKDxo6SeUxt4tca5Wox\nLvhnKlPprQPfbRDFcs25vpAMafyeCdx7kW+8XDVIR+U7Ew/7J6PZvuEuPyEpDta9\nwaFAZJJW131QR5f1/+FjmN8QLhCuZBrxab9wtV4nVQKBgQDkM7IU1h6Njfzj82U+\n0JE1qg1S3XddFJ+p+b61k9JO4eqnTL75kGgBVla6fC4fjjS2sKJFUB1U99J9qIfZ\ny+TCRAbxJUEitLL3i7HVMEF4BZ8CncfMEBeRcinqTqr3f8l8nv6GBSC0H1Xky7Ct\n8Hev8YieUW8i7k9iTGNQdV3OFwKBgQDdDNjC9R8ACNnQusv8TMs+mah2mjftuuPR\nl3ZAycMZT0TcMyw3V4wTniEA1mJsQDN0X8/oJxRsSqmstkMvJ7Kgpe/DX2vUtXCt\nV2PocWXsI8c8BbJphBbOVSq95Pm32AtxMfj89QH6mV+X50XhgV87aepAQHRrUbrx\nAdoRlFVRzwKBgQCAVXI4tZHJGai2qRKvGKwQ+ek0SMfv2MFR3dmaU99Z7UMBgu+D\neeqDlgKALYXiyR5r/znCsSNNvXDqqfR8T2X+ujMNOl4/Hk/nVvBTbCflT4P0/LZ3\n1DTs3r8jvcn4Fi1BoEiTJh8WLOkpGkPqDenBUJv8LN/LTSnnpf3UKazvUQKBgBzL\nZJ0Ywx4FCSKYgqPt+PfBmmFAu5JbKvwNZ9kOrzxnyAeLHvJilBumGJR8WLvTLSC2\nrmWGWbG1lB6sa1oEKM+mbfIcRvahX/kkjh4kT2uQSY63C0OVckcUbwnnfuQE35Cy\nOsXwwH49ZmdqN/8lFBuwM1SFUOT984UbgaWSlf6fAoGBAIRGULzjqWpYu4T6FeEl\nZ60c4Vaf9r96dOoNMkGSJvvjixFvPLBmWHad2/c4Erm6JfiI0HJ21v1eemS8jigy\nMi8gwlnfpX/d5iaSfJ4dv/Vk8PrUjs4IICyJvJA8+itz4+nXoO3ztHVV9uKOQlMf\nVzP4Ft4ZVddnPSZ7cIvMgt9Q\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-tih5h@rpacialemergentes.iam.gserviceaccount.com",
  client_id: "100596741973931096017",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-tih5h%40rpacialemergentes.iam.gserviceaccount.com",
  universe_domain: "googleapis.com"
};
firebase.initializeApp(firebaseConfig)

var fileText = document.querySelector(".fileText");
var uploadPercentage = document.querySelector(".uploadPercentage");
var progress = document.querySelector(".progress");
var percentval;
var fileItem;
var fileName;
var img = document.querySelector(".img")
  function getFile(e){
    fileItem = e.target.files[0];
    fileName = fileItem.name;
    fileText.innerHTML = fileName;
  }

function uploadImage(){
  let storageRef = firebase.storage().ref("img/"+fileName);
  let uploadTask = storageRef.put(fileItem);

  uploadTask.on("state_changed", (snapshot)=>{
      console.log(snapshot);
      percentVal = Math.floor((snapshot.bytesTransferred/snapshot.totalBytes) * 100);
      console.log(percentVal);
      uploadPercentage.innerHTML = percentVal+"%";
      progress.style.width = percentVal+"%";
  }, (error)=>{
  console.log("Error is ", error);
  }, ()=>{
    uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
    console.log("URL", url);
    if(url != ""){
      img.setAttribute("src", url);
      img.style.display="block";
    }
  })
})
}
const URL = "https://rpacialemergentes-default-rtdb.firebaseio.com/Users/json";

async function postData(data) {
    const dataBase = await fetch(`${URL}Users.json`, {
        method: "POST",
        body: JSON.stringify(data)
    });
    getPost();
}

let btn = document.getElementById("btnAdd");
btn.addEventListener('click', () => {
    let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;

    if (name.trim() === "" || description.trim() === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }
    let data = {
      name: name,
      description: description,
      userId: "1",
    };

    postData(data);
});

async function getPost() {
  let response = await fetch(`${URL}Users.json`);
  let json = await response.json();
  let table = document.getElementById("tableData");
  let htmlRow = "";
  let index = 1;
  for (let key in json) {
      let rowData = json[key];
      htmlRow += `<tr>
                      <td>${index}</td>
                      <td>${rowData.name}</td>
                      <td>${rowData.description}</td>
                      <td><button onclick="uploadImage()">Ver Imagen</button></td>
                  </tr>`;
      index++;
  }
  table.innerHTML = htmlRow;
}