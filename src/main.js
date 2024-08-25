import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getPerPage, resetPage, searchImages } from "./js/pixabay-api";
import { showImages } from "./js/render-functions";

const formElem = document.querySelector("form");
const btnLoadMore = document.querySelector(".btn-load-mode");
const loader = document.querySelector(".loader");
const endLine = document.querySelector(".end-line");
let searchQuery = "";

formElem.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.target;

    // Search query check
    searchQuery = form.elements.query.value.trim();
    if (searchQuery !== "") {
        // Clear the gallery
        const imagesList = document.querySelector(".images-list");
        imagesList.classList.add("hidden");
        imagesList.innerHTML = "";

        // Show loading message
        loader.classList.remove("hidden");

        // Hide Load mode button and end line message
        endLine.classList.add("hidden");
        btnLoadMore.classList.add("hidden");

        // Reset page
        resetPage();

        // Search image
        const images = await searchImages(searchQuery);
        loader.classList.add("hidden");
        // If there is no images - show a toast
        if (!images.data.hits.length) {
            iziToast.error({
                class: "error-alert",
                message: "Sorry, there are no images matching your search query. Please try again!",
                messageColor: "white",
                position: "topRight",
                maxWidth: 432
            });
        }
        // Else - show pictures
        else {
            showImages(images);
            btnLoadMore.classList.remove("hidden");
        }
    }
    else
        iziToast.error({
            class: "error-alert",
            message: "Search query is empty",
            messageColor: "white",
            position: "topRight",
            maxWidth: 432
        });
});

btnLoadMore.addEventListener("click", async (event) => {
    // Search query check
    if (searchQuery !== "") {
        // Show loading message
        loader.classList.remove("hidden");
        // Hide Load mode button and end line message
        endLine.classList.add("hidden");
        btnLoadMore.classList.add("hidden");

        const images = await searchImages(searchQuery);
        loader.classList.add("hidden");
        // If there is no images - show a toast
        if (!images.data.hits.length) {
            iziToast.error({
                class: "error-alert",
                message: "Sorry, there are no images any more!",
                messageColor: "white",
                position: "topRight",
                maxWidth: 432
            });
        }
        // Else - show pictures
        else {
            showImages(images);

            // Show end line message and hide Load more button
            if (images.hits.length < getPerPage()) {
                btnLoadMore.classList.add("hidden");
                endLine.classList.remove("hidden");
            }
            else
                btnLoadMore.classList.remove("hidden");

            // Scroll down
            const h = document.querySelector(".images-item").getBoundingClientRect().height;
            window.scrollBy({
                top: 2 * h,
                left: 0,
                behavior: "smooth"
            });
        }
    }
    else
        iziToast.error({
            class: "error-alert",
            message: "Search query is empty",
            messageColor: "white",
            position: "topRight",
            maxWidth: 432
        });
});