// Contestant data (static JSON)
const contestants = [
  {
    id: 1,
    name: "Connor",
    photo: "Cheers-removebg-preview.png",
    rank: 3,
    change: 0,
    history: [55, 60, 62, 64, 70, 72, 75],
  },
  {
    id: 2,
    name: "David",
    photo: "https://i.pravatar.cc/100?img=2",
    rank: 7,
    change: 0,
    history: [50, 52, 55, 57, 59, 61, 63],
  },
  {
    id: 3,
    name: "Easton",
    photo: "https://i.pravatar.cc/100?img=3",
    rank: 1,
    change: 0,
    history: [40, 44, 46, 49, 52, 55, 57],
  },
  {
    id: 4,
    name: "Jonny",
    photo: "https://i.pravatar.cc/100?img=3",
    rank: 4,
    change: 0,
    history: [40, 44, 46, 49, 52, 55, 57],
  },
  {
    id: 5,
    name: "Justice",
    photo: "https://i.pravatar.cc/100?img=3",
    rank: 6,
    change: 0,
    history: [40, 44, 46, 49, 52, 55, 57],
  },
  {
    id: 6,
    name: "Mace",
    photo: "https://i.pravatar.cc/100?img=3",
    rank: 5,
    change: 0,
    history: [40, 44, 46, 49, 52, 55, 57],
  },
  {
    id: 7,
    name: "Wyatt",
    photo: "https://i.pravatar.cc/100?img=3",
    rank: 2,
    change: 0,
    history: [40, 44, 46, 49, 52, 55, 57],
  },
  {
    id: 8,
    name: "Ben",
    photo: "https://i.pravatar.cc/100?img=3",
    rank: 8,
    change: 0,
    history: [40, 44, 46, 49, 52, 55, 57],
  },
  {
    id: 9,
    name: "Rogelio",
    photo: "https://i.pravatar.cc/100?img=3",
    rank: 9,
    change: 0,
    history: [40, 44, 46, 49, 52, 55, 57],
  },
];

const tbody = document.getElementById("leaderboard");

contestants.forEach(c => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${c.rank}</td>
    <td><img src="${c.photo}" class="avatar"> ${c.name}</td>
    <td>
      ${c.change > 0 ? `<span class="up">▲ ${c.change}</span>` :
        c.change < 0 ? `<span class="down">▼ ${Math.abs(c.change)}</span>` :
        "–"}
    </td>
  `;
  tr.onclick = () => showStats(c);
  tbody.appendChild(tr);
});

function showStats(c) {
  document.getElementById("modal-name").innerText = c.name;
  document.getElementById("modal-photo").src = c.photo;

  const total = c.history[c.history.length - 1];
  const avg = (total / c.history.length).toFixed(1);
  document.getElementById("modal-total").innerText = total;
  document.getElementById("modal-avg").innerText = avg;

  const days = c.history.map((_, i) => `Day ${i + 1}`);
  Plotly.newPlot("chart", [{
    x: days,
    y: c.history,
    type: "bar",
    marker: { color: "orange" }
  }]);

  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}


