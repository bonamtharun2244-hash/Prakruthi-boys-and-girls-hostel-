import { SITE_CONFIG } from "./config.js";
import "./style.css";

const $ = (selector) => document.querySelector(selector);
const digits = SITE_CONFIG.whatsappNumber.replace(/\D/g, "");

function safeText(selector, value) {
  const element = $(selector);
  if (element && value) element.textContent = value;
}

function configureSite() {
  document.title = `${SITE_CONFIG.businessName} | Find your stay`;
  safeText("#brandName", SITE_CONFIG.businessName);
  safeText("#footerBrand", SITE_CONFIG.businessName);
  safeText("#footerName", SITE_CONFIG.businessName);
  safeText("#phoneDisplay", SITE_CONFIG.phoneDisplay);
  safeText("#locationName", SITE_CONFIG.address.split(",").slice(0, 2).join(","));
  safeText("#addressText", SITE_CONFIG.address);
  ["#heroMap", "#mapButton", "#mapCard"].forEach((selector) => {
    const element = $(selector);
    if (element) element.href = SITE_CONFIG.mapsUrl;
  });
  const floating = $("#whatsappFloat");
  if (floating && /^91\d{10}$/.test(digits)) floating.href = `https://wa.me/${digits}`;
  safeText("#year", String(new Date().getFullYear()));
}

function openWhatsApp(message) {
  if (!/^91\d{10}$/.test(digits)) {
    $("#formStatus").textContent = "The owner needs to configure a valid WhatsApp number in src/config.js.";
    return;
  }
  const url = `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function bindRoomButtons() {
  document.querySelectorAll(".enquire-room").forEach((button) => {
    button.addEventListener("click", () => {
      $("#roomType").value = button.dataset.room;
      $("#enquire").scrollIntoView({ behavior: "smooth" });
      $("#fullName").focus({ preventScroll: true });
    });
  });
}

function bindForm() {
  $("#enquiryForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = $("#fullName").value.trim();
    const phone = $("#phone").value.trim();
    const room = $("#roomType").value;
    const date = $("#joinDate").value || "Not specified";
    const questions = $("#questions").value.trim() || "Please share rent, facilities and availability.";
    if (!name || !phone) return;
    const message = [
      `Hello ${SITE_CONFIG.businessName}, I would like to enquire about a room.`,
      `Name: ${name}`,
      `My phone: ${phone}`,
      `Room preference: ${room}`,
      `Joining date: ${date}`,
      `Questions: ${questions}`
    ].join("\n");
    openWhatsApp(message);
    $("#formStatus").textContent = "WhatsApp should open with your enquiry. Send the message there to contact the hostel.";
  });
}

function bindMobileMenu() {
  const button = $("#menuToggle");
  const nav = $("#mainNav");
  button.addEventListener("click", () => nav.classList.toggle("nav-open"));
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => nav.classList.remove("nav-open")));
}

configureSite();
bindRoomButtons();
bindForm();
bindMobileMenu();
