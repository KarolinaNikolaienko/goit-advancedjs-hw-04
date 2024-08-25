import{a as f,s as y,i as l}from"./assets/vendor-DcXSk-Qg.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();let m=1;const h=15;function g(a){const s=new URLSearchParams({key:"3632143-ebeee10190d206f1a5cb99fa1",q:encodeURIComponent(a),image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:h,page:m});return m+=1,f.get(`https://pixabay.com/api/?${s}`)}function L(){m=1}function v(){return h}const w=new y(".images-list a",{captions:!0,captionsData:"alt",captionDelay:250});function p(a){const s=document.querySelector(".images-list");s.classList.remove("hidden");let i="";for(let r=0;r<a.data.hits.length;r++){const e=a.data.hits[r];i+=`<li class="images-item">
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
  </li>`}s.insertAdjacentHTML("beforeend",i),w.refresh()}const b=document.querySelector("form"),o=document.querySelector(".btn-load-mode"),c=document.querySelector(".loader"),u=document.querySelector(".end-line");let n="";b.addEventListener("submit",async a=>{if(a.preventDefault(),n=a.target.elements.query.value.trim(),n!==""){const i=document.querySelector(".images-list");i.classList.add("hidden"),i.innerHTML="",c.classList.remove("hidden"),u.classList.add("hidden"),o.classList.add("hidden"),L();const r=await g(n);c.classList.add("hidden"),r.data.hits.length?(p(r),o.classList.remove("hidden")):l.error({class:"error-alert",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",position:"topRight",maxWidth:432})}else l.error({class:"error-alert",message:"Search query is empty",messageColor:"white",position:"topRight",maxWidth:432})});o.addEventListener("click",async a=>{if(n!==""){c.classList.remove("hidden"),u.classList.add("hidden"),o.classList.add("hidden");const s=await g(n);if(c.classList.add("hidden"),!s.data.hits.length)l.error({class:"error-alert",message:"Sorry, there are no images any more!",messageColor:"white",position:"topRight",maxWidth:432});else{p(s),s.data.hits.length<v()?(o.classList.add("hidden"),u.classList.remove("hidden")):o.classList.remove("hidden");const i=document.querySelector(".images-item").getBoundingClientRect().height;window.scrollBy({top:2*i,left:0,behavior:"smooth"})}}else l.error({class:"error-alert",message:"Search query is empty",messageColor:"white",position:"topRight",maxWidth:432})});
//# sourceMappingURL=index.js.map
