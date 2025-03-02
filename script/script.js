// for go to blog site
goPage("discover-box", "blog.html");


// for card 1

document.getElementById("card1-btn").addEventListener("click",
    function () {
        alert("Board update successfully");
        const taskNumber = getInnerTextById("task-number");
        const sumTaskNumber = taskNumber + 1;
        setSum("task-number", sumTaskNumber);

        const assignNumber = getInnerTextById("assign-number");
        const sumAssignNumber = assignNumber - 1;
        setSum("assign-number", sumAssignNumber);

        const notificationContainer = document.getElementById("notification-container");
        const card1Title = document.getElementById("card1-title").innerText;
        const div = document.createElement("div");
        div.classList.add("bg-sky-100", "rounded-lg", "w-11/12", "mx-auto");
        const p = document.createElement("p");
        p.classList.add("p-5", "text-black");

        function time() {
            const currentTime = new Date();
            const timeString = currentTime.toLocaleTimeString();
            p.innerText = `You have complete the task ${card1Title} at ${timeString}`;
        }

        div.appendChild(p);
        notificationContainer.appendChild(div);
        time();
        this.disabled = true;
        this.style.backgroundColor = "#87CEFA";
    }
)

// for card 2

document.getElementById("card2-btn").addEventListener("click",
    function () {
        alert("Board update successfully");
        const taskNumber = getInnerTextById("task-number");
        const sumTaskNumber = taskNumber + 1;
        setSum("task-number", sumTaskNumber);

        const assignNumber = getInnerTextById("assign-number");
        const sumAssignNumber = assignNumber - 1;
        setSum("assign-number", sumAssignNumber);

        const notificationContainer = document.getElementById("notification-container");
        const card2Title = document.getElementById("card2-title").innerText;
        const div = document.createElement("div");
        div.classList.add("bg-sky-100", "rounded-lg", "w-11/12", "mx-auto");
        const p = document.createElement("p");
        p.classList.add("p-5", "text-black");

        function time() {
            const currentTime = new Date();
            const timeString = currentTime.toLocaleTimeString();
            p.innerText = `You have complete the task ${card2Title} at ${timeString}`;
        }

        div.appendChild(p);
        notificationContainer.appendChild(div);
        time();
        this.disabled = true;
        this.style.backgroundColor = "#87CEFA";
    }
)

// for card 3

document.getElementById("card3-btn").addEventListener("click",
    function () {
        alert("Board update successfully");
        const taskNumber = getInnerTextById("task-number");
        const sumTaskNumber = taskNumber + 1;
        setSum("task-number", sumTaskNumber);

        const assignNumber = getInnerTextById("assign-number");
        const sumAssignNumber = assignNumber - 1;
        setSum("assign-number", sumAssignNumber);

        const notificationContainer = document.getElementById("notification-container");
        const card3Title = document.getElementById("card3-title").innerText;
        const div = document.createElement("div");
        div.classList.add("bg-sky-100", "rounded-lg", "w-11/12", "mx-auto");
        const p = document.createElement("p");
        p.classList.add("p-5", "text-black");

        function time() {
            const currentTime = new Date();
            const timeString = currentTime.toLocaleTimeString();
            p.innerText = `You have complete the task ${card3Title} at ${timeString}`;
        }

        div.appendChild(p);
        notificationContainer.appendChild(div);
        time();
        this.disabled = true;
        this.style.backgroundColor = "#87CEFA";
    }
)

// for card 4

document.getElementById("card4-btn").addEventListener("click",
    function () {
        alert("Board update successfully");
        const taskNumber = getInnerTextById("task-number");
        const sumTaskNumber = taskNumber + 1;
        setSum("task-number", sumTaskNumber);

        const assignNumber = getInnerTextById("assign-number");
        const sumAssignNumber = assignNumber - 1;
        setSum("assign-number", sumAssignNumber);

        const notificationContainer = document.getElementById("notification-container");
        const card4Title = document.getElementById("card4-title").innerText;
        const div = document.createElement("div");
        div.classList.add("bg-sky-100", "rounded-lg", "w-11/12", "mx-auto");
        const p = document.createElement("p");
        p.classList.add("p-5", "text-black");

        function time() {
            const currentTime = new Date();
            const timeString = currentTime.toLocaleTimeString();
            p.innerText = `You have complete the task ${card4Title} at ${timeString}`;
        }

        div.appendChild(p);
        notificationContainer.appendChild(div);
        time();
        this.disabled = true;
        this.style.backgroundColor = "#87CEFA";
    }
)


// for card 5

document.getElementById("card5-btn").addEventListener("click",
    function () {
        alert("Board update successfully");
        const taskNumber = getInnerTextById("task-number");
        const sumTaskNumber = taskNumber + 1;
        setSum("task-number", sumTaskNumber);

        const assignNumber = getInnerTextById("assign-number");
        const sumAssignNumber = assignNumber - 1;
        setSum("assign-number", sumAssignNumber);

        const notificationContainer = document.getElementById("notification-container");
        const card5Title = document.getElementById("card5-title").innerText;
        const div = document.createElement("div");
        div.classList.add("bg-sky-100", "rounded-lg", "w-11/12", "mx-auto");
        const p = document.createElement("p");
        p.classList.add("p-5", "text-black");

        function time() {
            const currentTime = new Date();
            const timeString = currentTime.toLocaleTimeString();
            p.innerText = `You have complete the task ${card5Title} at ${timeString}`;
        }

        div.appendChild(p);
        notificationContainer.appendChild(div);
        time();
        this.disabled = true;
        this.style.backgroundColor = "#87CEFA";
    }
)

// for card 6

document.getElementById("card6-btn").addEventListener("click",
    function () {
        alert("Board update successfully");
        const taskNumber = getInnerTextById("task-number");
        const sumTaskNumber = taskNumber + 1;
        setSum("task-number", sumTaskNumber);

        const assignNumber = getInnerTextById("assign-number");
        const sumAssignNumber = assignNumber - 1;
        setSum("assign-number", sumAssignNumber);

        const notificationContainer = document.getElementById("notification-container");
        const card6Title = document.getElementById("card6-title").innerText;
        const div = document.createElement("div");
        div.classList.add("bg-sky-100", "rounded-lg", "w-11/12", "mx-auto");
        const p = document.createElement("p");
        p.classList.add("p-5", "text-black");

        function time() {
            const currentTime = new Date();
            const timeString = currentTime.toLocaleTimeString();
            p.innerText = `You have complete the task ${card6Title} at ${timeString}`;
        }

        div.appendChild(p);
        notificationContainer.appendChild(div);
        time();
        this.disabled = true;
        this.style.backgroundColor = "#87CEFA";
    }
)

// for clear history

document.getElementById("clear-history").addEventListener("click",
    function () {
        const notificationContainer = document.getElementById("notification-container");
        notificationContainer.classList.add("hidden");
        notificationContainer.dataset.cleared = "true";

    })
let buttons = document.querySelectorAll(".notify-btn");
for (let button of buttons) {
    button.addEventListener("click", function () {
        const notificationContainer = document.getElementById("notification-container");
        if (notificationContainer.dataset.cleared === "true") {
            notificationContainer.classList.remove("hidden");
            notificationContainer.dataset.cleared = "false";
        }
    })
}


// for showing current date

function showCurrentDate() {
    const currentDate = new Date();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri","Sat",];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const dayOfWeek = days[currentDate.getDay()];
    const month = months[currentDate.getMonth()];
    const dayOfMonth = currentDate.getDate();
    const year = currentDate.getFullYear();

    const formattedDate = `${dayOfWeek} ${month} ${dayOfMonth} ${year}`;
    document.getElementById("currentDate").textContent = formattedDate;

}
showCurrentDate();

// for changing bg color

document.getElementById("dynamic-bg-theme-btn").addEventListener("click",
    function () {
        document.body.style.setProperty("background-color", `hsl(${Math.random() * 360},100%,75%)`);
    }
)
