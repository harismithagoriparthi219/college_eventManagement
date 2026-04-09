async function addEvent() {

    const event = {
        event_name: document.getElementById("event_name").value,
        event_date: document.getElementById("event_date").value,
        location: document.getElementById("location").value,
        description: document.getElementById("description").value
    };

    await fetch("http://127.0.0.1:8000/add_event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(event)
    });

    alert("Event Added Successfully");

    loadEvents();
}

async function loadEvents() {

    const response = await fetch("http://127.0.0.1:8000/events");

    const data = await response.json();

    const table = document.getElementById("eventTable");

    table.innerHTML = "";

    data.forEach(event => {

        table.innerHTML += `

<tr>
<td>${event[0]}</td>
<td>${event[1]}</td>
<td>${event[2]}</td>
<td>${event[3]}</td>
<td>
<button onclick="deleteEvent(${event[0]})">Delete</button>
</td>
</tr>
`;

    });

}

async function deleteEvent(id) {

    await fetch(`http://127.0.0.1:8000/delete_event/${id}`, {
        method: "DELETE"
    });

    alert("Event Deleted");

    loadEvents();
}
async function addEvent() {

    const event = {
        event_name: document.getElementById("event_name").value,
        event_date: document.getElementById("event_date").value,
        location: document.getElementById("location").value,
        description: document.getElementById("description").value
    };

    await fetch("http://127.0.0.1:8000/add_event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(event)
    });

    alert("Event Added Successfully");

    loadEvents();
}

async function loadEvents() {

    const response = await fetch("http://127.0.0.1:8000/events");

    const data = await response.json();

    const table = document.getElementById("eventTable");

    table.innerHTML = "";

    data.forEach(event => {

        table.innerHTML += `

<tr>
<td>${event[0]}</td>
<td>${event[1]}</td>
<td>${event[2]}</td>
<td>${event[3]}</td>
<td>
<button onclick="deleteEvent(${event[0]})">Delete</button>
</td>
</tr>
`;

    });

}

async function deleteEvent(id) {

    await fetch(`http://127.0.0.1:8000/delete_event/${id}`, {
        method: "DELETE"
    });

    alert("Event Deleted");

    loadEvents();
}
