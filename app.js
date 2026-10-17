"use strict";

const checklistKeys = {
  planning: "anihan-farm-planning-checklist",
  farm: "anihan-farm-tasks-checklist"
};

function readChecklist(key) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : {};
  } catch (error) {
    console.error(`Could not read checklist "${key}" from local storage.`, error);
    return {};
  }
}

function saveChecklist(type) {
  const key = checklistKeys[type];
  const state = {};
  document.querySelectorAll(`input[data-checklist="${type}"]`).forEach((input) => {
    state[input.dataset.item] = input.checked;
  });

  try {
    localStorage.setItem(key, JSON.stringify(state));
  } catch (error) {
    console.error(`Could not save checklist "${key}" to local storage.`, error);
    announce("Your checklist could not be saved on this device.");
  }
}

function announce(message) {
  let status = document.getElementById("app-status");
  if (!status) {
    status = document.createElement("p");
    status.id = "app-status";
    status.className = "visually-hidden";
    status.setAttribute("role", "status");
    document.body.append(status);
  }
  status.textContent = message;
}

function restoreChecklist(type) {
  const saved = readChecklist(checklistKeys[type]);
  document.querySelectorAll(`input[data-checklist="${type}"]`).forEach((input) => {
    input.checked = saved[input.dataset.item] === true;
  });
}

function updatePlanningProgress() {
  const items = [...document.querySelectorAll('input[data-checklist="planning"]')];
  const ready = items.filter((item) => item.checked).length;
  document.getElementById("planning-progress").textContent = `${ready} of ${items.length} ready`;
}

function updateFarmProgress() {
  const items = [...document.querySelectorAll('input[data-checklist="farm"]')];
  const done = items.filter((item) => item.checked).length;
  const progress = document.getElementById("farm-progress");
  document.getElementById("farm-progress-label").textContent = `${done} of ${items.length} done`;
  document.getElementById("farm-progress-bar").style.width = `${items.length ? (done / items.length) * 100 : 0}%`;
  progress.setAttribute("aria-valuemax", String(items.length));
  progress.setAttribute("aria-valuenow", String(done));
}

function updateChecklist(type) {
  saveChecklist(type);
  if (type === "planning") updatePlanningProgress();
  if (type === "farm") updateFarmProgress();
}

document.querySelectorAll("input[data-checklist]").forEach((input) => {
  input.addEventListener("change", () => updateChecklist(input.dataset.checklist));
});

document.querySelectorAll("[data-reset]").forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.dataset.reset;
    const items = document.querySelectorAll(`input[data-checklist="${type}"]`);
    items.forEach((input) => {
      input.checked = false;
    });
    updateChecklist(type);
    announce(type === "farm" ? "Farm checklist cleared." : "Farm planning checklist reset.");
  });
});

restoreChecklist("planning");
restoreChecklist("farm");
updatePlanningProgress();
updateFarmProgress();

const todayLabel = document.getElementById("today-label");
const today = new Intl.DateTimeFormat(undefined, { weekday: "long", month: "long", day: "numeric" }).format(new Date());
todayLabel.textContent = `WEEK OF ${today.toUpperCase()}`;

const crops = [
  {
    name: "Rice",
    category: "Cereal Crop",
    description: "Rice is commonly grown in many farming communities in the Philippines.",
    task: "Check the field and monitor water conditions.",
    icon: "🌾",
    color: "rice"
  },
  {
    name: "Corn",
    category: "Cereal Crop",
    description: "Corn is used for food, animal feed, and other products.",
    task: "Check the soil and monitor crop growth.",
    icon: "🌽",
    color: "corn"
  },
  {
    name: "Tomato",
    category: "Fruit Vegetable",
    description: "Tomato is grown in home gardens and farms and used in many Filipino dishes.",
    task: "Check soil moisture and inspect leaves and fruits for changes.",
    icon: "🍅",
    color: "tomato"
  },
  {
    name: "Pechay",
    category: "Leafy Vegetable",
    description: "Pechay is a leafy vegetable commonly grown in gardens and farms across the Philippines.",
    task: "Keep the soil evenly moist and check leaves for damage.",
    icon: "🥬",
    color: "pechay"
  },
  {
    name: "Eggplant",
    category: "Fruit Vegetable",
    description: "Eggplant is a familiar vegetable crop grown in many parts of the country.",
    task: "Inspect plants for pests and monitor soil moisture as fruits develop.",
    icon: "🍆",
    color: "eggplant"
  },
  {
    name: "Mung Bean",
    category: "Legume Crop",
    description: "Mung bean, also called munggo, is a food legume grown by Filipino farmers.",
    task: "Check for weeds and monitor plant growth and soil conditions.",
    icon: "🫘",
    color: "mung-bean"
  }
];

function createCropCard(crop) {
  const card = document.createElement("article");
  card.className = "crop-card";

  const icon = document.createElement("span");
  icon.className = `crop-card-icon crop-${crop.color}`;
  icon.setAttribute("aria-hidden", "true");
  icon.textContent = crop.icon;

  const heading = document.createElement("h3");
  heading.textContent = crop.name;

  const details = document.createElement("dl");
  details.className = "crop-card-details";
  [
    ["Category", crop.category],
    ["Description", crop.description],
    ["Farming Task", crop.task]
  ].forEach(([label, value]) => {
    const term = document.createElement("dt");
    term.textContent = label;
    const description = document.createElement("dd");
    description.textContent = value;
    details.append(term, description);
  });

  card.append(icon, heading, details);
  return card;
}

document.getElementById("crop-card-grid").replaceChildren(...crops.map(createCropCard));

const demoFarmActivities = [
  {
    location: "BARANGAY MALIGAYA · EAST PARCEL",
    farm: "Mabuhay Rice Plot",
    crop: "Rice · early vegetative growth",
    concern: "stress",
    concernTitle: "Crop stress to check",
    concernNote: "Some leaves appear wilted in this demo record.",
    concernIcon: "♧",
    activity: "Inspect leaves and check soil moisture",
    dueInDays: -2
  },
  {
    location: "SAN ISIDRO · HOME GARDEN",
    farm: "Luntian Family Garden",
    crop: "Pechay and tomato beds",
    concern: "water",
    concernTitle: "Water supply is low",
    concernNote: "Demo record flags the garden water container for a refill.",
    concernIcon: "◌",
    activity: "Check water containers and plan watering",
    dueInDays: 0
  },
  {
    location: "BARANGAY SHARED PLOT · NORTH",
    farm: "Pag-asa Community Garden",
    crop: "Harvested corn · shared store",
    concern: "storage",
    concernTitle: "Food storage needs a check",
    concernNote: "Demo record notes dampness near stored produce.",
    concernIcon: "▤",
    activity: "Inspect stored corn and improve airflow",
    dueInDays: 2
  }
];

function dateAtOffset(dayOffset) {
  const date = new Date();
  date.setHours(12, 0, 0, 0);
  date.setDate(date.getDate() + dayOffset);
  return date;
}

function isoDate(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function getActivityStatus(dayOffset) {
  if (dayOffset < 0) {
    const daysLate = Math.abs(dayOffset);
    return { label: `Overdue · ${daysLate} ${daysLate === 1 ? "day" : "days"}`, className: "activity-overdue" };
  }
  if (dayOffset === 0) return { label: "Due today", className: "activity-today" };
  return { label: `Due in ${dayOffset} days`, className: "activity-upcoming" };
}

function renderFarmWatch() {
  const watchList = document.getElementById("farm-watch-list");
  const overdueCount = demoFarmActivities.filter((farm) => farm.dueInDays < 0).length;
  const dueCount = demoFarmActivities.filter((farm) => farm.dueInDays === 0).length;
  const concernCount = demoFarmActivities.filter((farm) => farm.concern !== "none").length;

  document.getElementById("overdue-count").textContent = String(overdueCount);
  document.getElementById("due-count").textContent = String(dueCount);
  document.getElementById("concern-count").textContent = String(concernCount);

  watchList.innerHTML = demoFarmActivities.map((farm) => {
    const dueDate = dateAtOffset(farm.dueInDays);
    const status = getActivityStatus(farm.dueInDays);
    const dateLabel = farm.dueInDays === 0
      ? "Today"
      : dueDate.toLocaleDateString(undefined, { month: "short", day: "numeric" });
    return `<article class="watch-card" data-concern="${farm.concern}">
      <header class="watch-card-header">
        <div><span class="watch-location">${farm.location}</span><h3>${farm.farm}</h3></div>
        <span class="activity-status ${status.className}">${status.label}</span>
      </header>
      <p class="watch-crop">${farm.crop}</p>
      <div class="concern-callout" data-concern="${farm.concern}">
        <span class="concern-icon" aria-hidden="true">${farm.concernIcon}</span>
        <span><strong>${farm.concernTitle}</strong><small>${farm.concernNote}</small></span>
      </div>
      <div class="due-activity">
        <span>NEXT FARM ACTIVITY</span>
        <strong>${farm.activity}</strong>
        <time datetime="${isoDate(dueDate)}">${dateLabel}</time>
      </div>
      <a class="watch-link" href="#farm-tasks">Go to farm checklist <span aria-hidden="true">→</span></a>
    </article>`;
  }).join("");
}

renderFarmWatch();
