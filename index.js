import{a as f,s as y,i as d}from"./assets/vendor-DcXSk-Qg.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();let m=1;const u=15;async function g(a){const s=new URLSearchParams({key:"3632143-ebeee10190d206f1a5cb99fa1",q:encodeURIComponent(a),image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:u,page:m}),i=await f.get(`https://pixabay.com/api/?${s}`);return m+=1,i.data}function L(){m=1}function v(){return u}function p(a){const s=document.querySelector(".images-list");s.classList.remove("hidden");let i="";for(let e=0;e<a.hits.length;e++){const t=a.hits[e];i+=`<li class="images-item">
  <a class="images-link" href="${t.largeImageURL}" onclick="return false">
  <img
    class="image"
    src="${t.webformatURL}"
    alt="${t.tags}"
  />
  </a>
  <div class="image-statistics">
              <ul class="stat-list stat-titles-list">
                <li class="stat-titles-item">
                  <span class="stat-title">Likes</span
                  ><span class="stat-value">${t.likes}</span>
                </li>
                <li class="stat-titles-item">
                  <span class="stat-title">Views</span
                  ><span class="stat-value">${t.views}</span>
                </li>
                <li class="stat-titles-item">
                  <span class="stat-title">Comments</span
                  ><span class="stat-value">${t.comments}</span>
                </li>
                <li class="stat-titles-item">
                  <span class="stat-title">Downloads</span
                  ><span class="stat-value">${t.downloads}</span>
                </li>
              </ul>
            </div>
  </li>`}s.insertAdjacentHTML("beforeend",i),new y(".images-list a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}const b=document.querySelector("form"),r=document.querySelector(".btn-load-mode"),n=document.querySelector(".loader"),h=document.querySelector(".end-line");let l="";b.addEventListener("submit",a=>{a.preventDefault();const s=document.querySelector(".images-list");s.classList.add("hidden"),s.innerHTML="",l=a.target.elements.query.value,n.classList.remove("hidden"),h.classList.add("hidden"),r.classList.add("hidden"),L(),g(l).then(o=>{n.classList.add("hidden"),o.hits.length?(p(o),r.classList.remove("hidden")):d.error({class:"error-alert",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",position:"topRight",maxWidth:432})}).catch(o=>console.log(o))});r.addEventListener("click",a=>{l?(n.classList.remove("hidden"),h.classList.add("hidden"),r.classList.add("hidden"),g(l).then(s=>{if(n.classList.add("hidden"),!s.hits.length)d.error({class:"error-alert",message:"Sorry, there are no images any more!",messageColor:"white",position:"topRight",maxWidth:432});else{p(s),s.hits.length<v()?(r.classList.add("hidden"),h.classList.remove("hidden")):r.classList.remove("hidden");const i=document.querySelector(".images-item").getBoundingClientRect().height;window.scrollBy({top:2*i,left:0,behavior:"smooth"})}}).catch(s=>console.log(s))):d.error({class:"error-alert",message:"Search query is empty",messageColor:"white",position:"topRight",maxWidth:432})});
//# sourceMappingURL=index.js.map
