import{a as f,s as y,i as l}from"./assets/vendor-DcXSk-Qg.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();let m=1;const u=15;async function p(i){const t=new URLSearchParams({key:"3632143-ebeee10190d206f1a5cb99fa1",q:encodeURIComponent(i),image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:u,page:m}),s=await f.get(`https://pixabay.com/api/?${t}`);return m+=1,s.data}function L(){m=1}function v(){return u}const w=new y(".images-list a",{captions:!0,captionsData:"alt",captionDelay:250});function g(i){const t=document.querySelector(".images-list");t.classList.remove("hidden");let s="";for(let r=0;r<i.hits.length;r++){const e=i.hits[r];s+=`<li class="images-item">
  <a class="images-link" href="${e.largeImageURL}" onclick="return false">
  <img
    class="image"
    src="${e.webformatURL}"
    alt="${e.tags}"
  />
  </a>
  <div class="image-statistics">
              <ul class="stat-list stat-titles-list">
                <li class="stat-titles-item">
                  <span class="stat-title">Likes</span
                  ><span class="stat-value">${e.likes}</span>
                </li>
                <li class="stat-titles-item">
                  <span class="stat-title">Views</span
                  ><span class="stat-value">${e.views}</span>
                </li>
                <li class="stat-titles-item">
                  <span class="stat-title">Comments</span
                  ><span class="stat-value">${e.comments}</span>
                </li>
                <li class="stat-titles-item">
                  <span class="stat-title">Downloads</span
                  ><span class="stat-value">${e.downloads}</span>
                </li>
              </ul>
            </div>
  </li>`}t.insertAdjacentHTML("beforeend",s),w.refresh()}const b=document.querySelector("form"),o=document.querySelector(".btn-load-mode"),c=document.querySelector(".loader"),h=document.querySelector(".end-line");let n="";b.addEventListener("submit",i=>{if(i.preventDefault(),n=i.target.elements.query.value.trim(),n!==""){const s=document.querySelector(".images-list");s.classList.add("hidden"),s.innerHTML="",c.classList.remove("hidden"),h.classList.add("hidden"),o.classList.add("hidden"),L(),p(n).then(r=>{c.classList.add("hidden"),r.hits.length?(g(r),o.classList.remove("hidden")):l.error({class:"error-alert",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",position:"topRight",maxWidth:432})})}else l.error({class:"error-alert",message:"Search query is empty",messageColor:"white",position:"topRight",maxWidth:432})});o.addEventListener("click",i=>{n!==""?(c.classList.remove("hidden"),h.classList.add("hidden"),o.classList.add("hidden"),p(n).then(t=>{if(c.classList.add("hidden"),!t.hits.length)l.error({class:"error-alert",message:"Sorry, there are no images any more!",messageColor:"white",position:"topRight",maxWidth:432});else{g(t),t.hits.length<v()?(o.classList.add("hidden"),h.classList.remove("hidden")):o.classList.remove("hidden");const s=document.querySelector(".images-item").getBoundingClientRect().height;window.scrollBy({top:2*s,left:0,behavior:"smooth"})}})):l.error({class:"error-alert",message:"Search query is empty",messageColor:"white",position:"topRight",maxWidth:432})});
//# sourceMappingURL=index.js.map
