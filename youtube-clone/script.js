const menuIcon = document.querySelector(".menu-icon");
const headerStart = document.querySelector(".header-start");
const headerEnd = document.querySelector(".header-end");
const youtubeLogo = document.querySelector(".youtube-logo");
const header = document.querySelector("header");
const headerCenter = document.querySelector(".header-center");
const searchArea = document.querySelector(".search-area");
const searchIcon = document.querySelector(".search-icon");
const micButton = document.querySelector(".mic-button");
const createBtn = document.querySelector(".create-btn");
const notificationBtn = document.querySelector(".notification-btn");
const backIcon = document.querySelector(".back-icon");
const userAvatar = document.querySelector(".user-avatar");
const sidebar = document.querySelector(".sidebar");
const main = document.querySelector("main");

searchIcon.addEventListener("click", () => {
	if (window.innerWidth < 768) {
		header.classList.add("search-active");
		headerStart.style.display = "none";
		headerEnd.style.display = "none";
	}
});

backIcon.addEventListener("click", () => {
	header.classList.remove("search-active");
	headerStart.style.display = "flex";
	headerEnd.style.display = "flex";
});

menuIcon.addEventListener("click", () => {
	sidebar.classList.toggle("inactive");
	if (window.innerWidth < 1024) {
		main.classList.toggle("no-sidebar");
	}
});
