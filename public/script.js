// Variabel target manipulasi DOM
const idVehicle = document.getElementById("idVehicle");
const startEntryTime = document.getElementById("startEntryTime");
const endEntryTime = document.getElementById("endEntryTime");
const startPrice = document.getElementById("startPrice");
const endPrice = document.getElementById("endPrice");
const parkingTable = document.getElementById("parkingTable");

//Link API
var options = process.env.BASE_URL;

// Meninstansiasi promise
const fetchData = (url) => {
  return new Promise((resolve, reject) => {
    if (url != null) {
      let parsedData = "";
      fetch(url)
        .then((response) => response.json())
        .then((data) => (parsedData = data))
        .then(() => resolve(parsedData["articles"]));
    } else {
      reject("Error");
      parkingTable.innerHTML = "<h5>No news data!</h5>";
    }
  });
};

const displayData = async function (url) {
  try {
    let fetchedData = await fetchData(url);
    let parsedNews = parseData(fetchedData);
    renderData(parsedNews);
    console.log(url);
  } catch (error) {
    console.log("Error: " + error);
  }
};

//Fungsi untuk mengumpulkan berita dalam HTML
function parseData(data) {
  let parsedData = "";
  parkingTable.innerHTML = "<h5 class='text-center'>Data not found!</h5>";

  if (data.length !== 0) {
    data.forEach((datum, index) => {
      parsedData += `<tr>
      <td>${index + 1}</td>
      <td>
        ${
          datum.vehicle_type.charAt(0).toUpperCase() +
          datum.vehicle_type.slice(1)
        }
      </td>
      <td>${datum.id}</td>
      <td>
        ${new Date(datum.entry_time).toLocaleDateString("id-ID")}
      </td>
      <td>
        ${new Date(datum.entry_time).toLocaleTimeString("id-ID")}
      </td>
      <td>
        ${new Date(datum.exit_time).toLocaleDateString("id-ID")}
      </td>
      <td>
        ${new Date(datum.exit_time).toLocaleTimeString("id-ID")}
      </td>
      <td>Rp ${datum.price.toLocaleString("id-ID")}</td>
    </tr>`;
    });
  } else {
    parsedData = "<h5 class='text-center'>Data not found!</h5>";
  }
  return parsedData;
}

//Fungsi untuk menampilkan berita yang sudah dikumpulkan
function renderData(data) {
  return (parkingTable.innerHTML = data);
}

//Fitur live search berita
const data1 = idVehicle.addEventListener("submit", (e) => e.target.value);
const data2 = startEntryTime.addEventListener("submit", (e) => e.target.value);
const data3 = endEntryTime.addEventListener("submit", (e) => e.target.value);
const data4 = startPrice.addEventListener("submit", (e) => e.target.value);
const data5 = endPrice.addEventListener("submit", (e) => e.target.value);

function changeUrl(data1, data2, data3, data4, data5) {
  options = process.env.BASE_URL + "?idVehicle=" + data1 + "&startEntryTime=" + data2 + "&endEntryTime=" + data3 + + "&startPrice=" + data4 + "&endPrice=" + data5;
  displayData(options);
  console.log(options);
}

//Memanggil fungsi utama
displayNews(options);
