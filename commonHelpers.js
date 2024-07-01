import{a as u,S as m}from"./assets/vendor-4533621d.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();const p="44648144-e72e61b3f392a294e0f76f542",h="https://pixabay.com/api/";async function d(r,e=1,n=15){try{return(await u.get(h,{params:{key:p,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:n}})).data}catch(o){throw console.error("Error fetching images:",o),o}}const y=new m(".photo-card a",{});function f(r){const e=document.getElementById("gallery"),n=r.map(o=>`
    <div class="photo-card">
      <a href="${o.largeImageURL}">
        <img src="${o.webformatURL}" alt="${o.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes:</b> ${o.likes}</p>
        <p class="info-item"><b>Views:</b> ${o.views}</p>
        <p class="info-item"><b>Comments:</b> ${o.comments}</p>
        <p class="info-item"><b>Downloads:</b> ${o.downloads}</p>
      </div>
    </div>
  `).join("");e.insertAdjacentHTML("beforeend",n),y.refresh()}function g(){const r=document.getElementById("gallery");r.innerHTML=""}const b=document.getElementById("search-form"),i=document.getElementById("load-more");let c="",a=1;b.addEventListener("submit",L);i.addEventListener("click",E);async function L(r){if(r.preventDefault(),c=r.currentTarget.elements.query.value.trim(),!!c){a=1,g(),i.classList.add("hidden");try{const e=await d(c,a);f(e.hits),e.totalHits>e.hits.length&&i.classList.remove("hidden")}catch(e){console.error("Error on search:",e)}}}async function E(){a+=1;try{const r=await d(c,a);f(r.hits);const{height:e}=document.querySelector(".photo-card").getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"}),a*15>=r.totalHits&&(i.classList.add("hidden"),alert("We're sorry, but you've reached the end of search results."))}catch(r){console.error("Error on load more:",r)}}
//# sourceMappingURL=commonHelpers.js.map
