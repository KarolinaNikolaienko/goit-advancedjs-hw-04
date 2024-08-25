import axios from "axios";

let currentPage = 1;
const per_page = 15;

export function searchImages(query) {
    const config = new URLSearchParams({
        key: "3632143-ebeee10190d206f1a5cb99fa1",
        q: encodeURIComponent(query),
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: per_page,
        page: currentPage
    });
    currentPage += 1;
    return axios.get(`https://pixabay.com/api/?${config}`);

    // return fetch(`https://pixabay.com/api/?${config}`)
    //     .then((response) => {
    //         if (!response.ok)
    //             throw new Error(response.status);
    //         return response.json();
    //     });
}

export function resetPage() {
    currentPage = 1;
}

export function getPerPage() {
    return per_page;
}
