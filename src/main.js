import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getPerPage, resetPage, searchImages } from "./js/pixabay-api";
import { showImages } from "./js/render-functions";

const formElem = document.querySelector("form");
const btnLoadMore = document.querySelector(".btn-load-mode");
const loader = document.querySelector(".loader");
const endLine = document.querySelector(".end-line");
let searchQuery = "";

formElem.addEventListener("submit", (event) => {
    event.preventDefault();

    // Clear the gallery
    const imagesList = document.querySelector(".images-list");
    imagesList.classList.add("hidden");
    imagesList.innerHTML = "";

    const form = event.target;
    searchQuery = form.elements.query.value;
    // Show loading message
    loader.classList.remove("hidden");

    // Hide Load mode button and end line message
    endLine.classList.add("hidden");
    btnLoadMore.classList.add("hidden");

    // Reset page
    resetPage();

    // Search image
    searchImages(searchQuery)
        .then((images) => {
            loader.classList.add("hidden");
            // If there is no images - show a toast
            if (!images.hits.length) {
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
        })
        .catch((error) => console.log(error));
});

btnLoadMore.addEventListener("click", (event) => {
    if (searchQuery)
        searchImages(searchQuery)
            .then((images) => {
                loader.classList.add("hidden");
                // If there is no images - show a toast
                if (!images.hits.length) {
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
                    console.log(images);
                    showImages(images);
                    if (images.hits.length < getPerPage()) {
                        btnLoadMore.classList.add("hidden");
                        endLine.classList.remove("hidden");
                    }
                    else
                        btnLoadMore.classList.remove("hidden");

                }
            })
            .catch((error) => console.log(error));
});