// Personal API Key for OpenWeatherMap API
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip='
const apiKey = '&appid=39056bcf5045c63b7789e6b2dd1065eb&units=imperial';

// Event listener to add function to existing HTML DOM element
const btn = document.getElementById("generate");
btn.addEventListener("click", sendValues);

/* Function called by event listener */
function sendValues() {
    const zip = document.getElementById("zip").value;
    const feelings = document.getElementById("feelings").value;

    getData(baseURL + zip + apiKey)
        .then(data => {
            let d = new Date();
            let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();
            let temp = data.main.temp;
            let user_response = feelings;
            let backEndData = { "date": newDate, "temp": temp, "user_response": user_response };
            return backEndData;
        })
        .then(backEndData => {
            postData('/add', backEndData);// post data to server
        })
        .then(() => {
            UpdateUI();// get data from server and update the UI
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });

}

/* Function to GET Data*/
const getData = async (url = '') => {
    const response = await fetch(url, {
        method: 'GET'
    });
    try {
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("error", error);
    }
}


/* Function to POST data */
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log("error", error);
    }
}

/* Function to GET Project Data */
function UpdateUI() {
    const date = document.getElementById("date");
    const temp = document.getElementById("temp");
    const content = document.getElementById("content");

    getData('/all').then(data => {// get data from server
        date.innerHTML = data.date;
        temp.innerHTML = data.temp + "⁰F";
        content.innerHTML = data.user_response;
    }).catch(error => {
        console.error('Fetch error:', error);
    });

}