const events = [
  {
    title: "LEVEL GRANOLLERS",
    date: "19 de septiembre, 2025",
    location: "Carrer Montseny, 17  |  08402, Granollers"
  },
];

const eventList = document.getElementById("events");

events.forEach(event => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${event.title}</strong><br>${event.date} - ${event.location}`;
  eventList.appendChild(li);
});