let e=document.querySelector(".name"),u=document.querySelector(".secondname"),t=document.querySelector(".tel"),a=document.querySelector(".email"),l=document.querySelector(".btn"),c=document.querySelector(".list"),n="contacts",o=JSON.parse(localStorage.getItem(n))||[];function s(e){c.innerHTML=e.map((e,u)=>`<li class="contact">
                    <p class="text">\u{41A}\u{43E}\u{43D}\u{442}\u{430}\u{43A}\u{442}: ${e.name}</p>
                    <p class="text">\u{406}\u{43C}'\u{44F}: ${e.name}</p>
                    <p class="text">\u{41F}\u{440}\u{456}\u{437}\u{432}\u{438}\u{449}\u{435}: ${e.secondName}</p>
                    <p class="text">\u{422}\u{435}\u{43B}\u{435}\u{444}\u{43E}\u{43D}: ${e.tel}</p>
                    <p class="text">\u{415}\u{43B}\u{435}\u{43A}\u{442}\u{440}\u{43E}\u{43D}\u{43D}\u{430} \u{43F}\u{43E}\u{448}\u{442}\u{430}: ${e.email}</p>
                    <button type="button" data-index="${u}">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button>
                </li>`).join("")}function r(){localStorage.setItem(n,JSON.stringify(o))}s(o),l.addEventListener("click",()=>{let l={name:e.value,secondName:u.value,tel:t.value,email:a.value};o.push(l),r(),e.value="",u.value="",t.value="",a.value="",console.log(l),s(o)}),c.addEventListener("click",e=>{if("BUTTON"===e.target.tagName){let u=e.target.dataset.index;o.splice(u,1),r(),s(o)}});
//# sourceMappingURL=hw-js-frontend4-9.f50439cc.js.map
