// Getting value of Html elements

let darkModeIcon = document.getElementById("darkModeIcon");
let container = document.querySelector(".container");
let result = document.querySelector(".result");

let isDarkMode = false;

darkModeIcon.addEventListener("click", () => {
    isDarkMode = !isDarkMode;
    // console.log(isDarkMode)
    if (isDarkMode) {
        container.style.backgroundColor = "black";
        darkModeIcon.style.color = "white";
        result.style.color = "red";
    } else {
        container.style.backgroundColor = "white";
        darkModeIcon.style.color = "black";
        result.style.color = "black";
    }
});

const age = () => {
    let d1 = document.getElementById("d1").value;
    let m1 = document.getElementById("m1").value;
    let y1 = document.getElementById("y1").value;

    // console.log(d1, m1, y1)

    if (d1 == "") {
        alert("Please enter a day");
    } else if (m1 == "") {
        alert("Please enter a month");
    } else if (y1 == "") {
        alert("Please enter a year");
    } else {
        // Added date
        let date = new Date();
        let d2 = date.getDate();
        let m2 = 1 + date.getMonth();
        let y2 = date.getFullYear();
        let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if (d2 < d1) {
            d2 += months[m2 - 1];
            m2 = m2 - 1;
        }

        if (m2 < m1) {
            m2 += 12;
            y2 -= 1;
        }

        // Calculate
        let year = y2 - y1;
        let month = m2 - m1;
        let day = d2 - d1;

        if (container.style.backgroundColor == "black") {
            result.style.color = "red";
            result.innerHTML = `Your age ${year}, month ${month}, day ${day}`;
        } else {
            result.style.color = "black";
            result.innerHTML = `Your age ${year}, month ${month}, day ${day}`;
        }
    }
};
