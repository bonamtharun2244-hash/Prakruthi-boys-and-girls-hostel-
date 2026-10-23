import { SITE_CONFIG } from "./Config.js";

"use strict";

const getElement = (id) => document.getElementById(id);
const roomSelect = getElement("room");
const formStatus = getElement("formStatus");
const whatsappDigits = SITE_CONFIG.whatsappNumber.replace(/\D/g, "");
const whatsappConfigured = /^\d{8,15}$/.test(whatsappDigits);

document.title = `${SITE_CONFIG.businessName} | Hostel accommodation`;
getElement("metaDescription").content =
  `Explore room options at ${SITE_CONFIG.businessName}. Contact us for rent and availability.`;
getElement("businessName").textContent = SITE_CONFIG.businessName;
getElement("locationBusinessName").textContent = SITE_CONFIG.businessName;
getElement("footerBusinessName").textContent = SITE_CONFIG.businessName;
getElement("welcomeText").textContent = `WELCOME TO ${SITE_CONFIG.businessName.toUpperCase()}`;
getElement("tagline").textContent = SITE_CONFIG.tagline;
getElement("heroDescription").textContent =
  `Explore our room options in ${SITE_CONFIG.address}. Contact us to check rent, vacancies and available facilities.`;
getElement("phoneDisplay").textContent = SITE_CONFIG.phoneDisplay;
getElement("phoneLink").href = `tel:${SITE_CONFIG.phoneDisplay.replace(/[^\d+]/g, "")}`;
getElement("shortAddress").textContent = SITE_CONFIG.address.split(",").slice(0, 2).join(",").trim();
getElement("featureAddress").textContent = SITE_CONFIG.address;
getElement("fullAddress").textContent = SITE_CONFIG.address;
getElement("year").textContent = new Date().getFullYear();
getElement("locationMapLink").href = SITE_CONFIG.mapsUrl;
getElement("bookingMapLink").href = SITE_CONFIG.mapsUrl;

if (whatsappConfigured) {
  getElement("whatsappLink").href = `https://wa.me/${whatsappDigits}`;
} else {
  getElement("whatsappLink").hidden = true;
  formStatus.textContent = "The owner needs to add a valid WhatsApp number in Config.js.";
  getElement("submitButton").disabled = true;
}

if (!Array.isArray(SITE_CONFIG.roomOptions) || SITE_CONFIG.roomOptions.length === 0) {
  throw new Error("Add at least one room to SITE_CONFIG.roomOptions in Config.js.");
}

for (const room of SITE_CONFIG.roomOptions) {
  const card = document.createElement("article");
  card.className = "card";

  if (room.image) {
    const image = document.createElement("img");
    image.src = room.image;
    image.alt = `${room.title} example`;
    image.loading = "lazy";
    card.append(image);
  }

  const content = document.createElement("div");
  content.className = "card-content";

  const title = document.createElement("h3");
  title.textContent = room.title;

  const description = document.createElement("p");
  description.textContent = room.description;

  const price = document.createElement("div");
  price.className = "price";
  price.textContent = room.rentLabel;

  content.append(title, description, price);

  if (room.rentOptions) {
    const rentOptions = document.createElement("p");
    rentOptions.className = "rent-options";
    rentOptions.textContent = room.rentOptions;
    content.append(rentOptions);
  }

  const details = document.createElement("ul");
  ["Ask about available beds", "Confirm included facilities", "Ask about food and rent"].forEach((item) => {
    const detail = document.createElement("li");
    detail.textContent = item;
    details.append(detail);
  });

  const enquireButton = document.createElement("button");
  enquireButton.className = "button button-green";
  enquireButton.type = "button";
  enquireButton.textContent = `Enquire About ${room.title}`;
  enquireButton.addEventListener("click", () => {
    roomSelect.value = room.id;
    getElement("booking").scrollIntoView({ behavior: "smooth", block: "start" });
    roomSelect.focus({ preventScroll: true });
  });

  content.append(details, enquireButton);
  card.append(content);
  getElement("roomCards").append(card);

  const option = document.createElement("option");
  option.value = room.id;
  option.textContent = room.title;
  roomSelect.add(option, roomSelect.options[roomSelect.options.length - 1]);
}

const bookingForm = getElement("bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!bookingForm.reportValidity()) {
      return;
    }

    const name = getElement("name").value.trim();
    const phone = getElement("phone").value.trim();
    const room = roomSelect.value;
    const date = getElement("date").value || "Not specified";
    const message = getElement("message").value.trim() || "Please share rent and availability.";

    if (!name || !phone || !room) {
      formStatus.textContent = "Please complete all required fields.";
      return;
    }

    const enquiryText = [
      `Hello ${SITE_CONFIG.businessName}! I want to enquire about a room.`,
      "Name: " + name,
      "My phone: " + phone,
      "Room: " + room,
      "Joining date: " + date,
      "Questions: " + message
    ].join("\n");

    const whatsappURL = `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(enquiryText)}`;

    window.location.href = whatsappURL;
  });
}
