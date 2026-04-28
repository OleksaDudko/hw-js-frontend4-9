const nameEl = document.querySelector(".name");
const secondNameEl = document.querySelector(".secondname");
const telEl = document.querySelector(".tel");
const emailEl = document.querySelector(".email");
const btnEl = document.querySelector(".btn");
const listEl = document.querySelector(".list");
const arr = JSON.parse(localStorage.getItem("contacts")) || [];

btnEl.addEventListener("click", () => {
    const data = {
        name: nameEl.value,
        secondName: secondNameEl.value,
        tel: telEl.value,
        email: emailEl.value
    }

    arr.push(data);
    localStorage.setItem("contacts", JSON.stringify(arr));
    console.log(data);
    addObj(arr);
})

function addObj(arr) {
    const item = arr.map((item, index) => {
        return `<li class="contact">
                    <p class="text">Контакт ${item.name}</p>
                    <p class="text">Ім'я: ${item.name}</p>
                    <p class="text">Прізвище: ${item.secondName}</p>
                    <p class="text">Телефон: ${item.tel}</p>
                    <p class="text">Електронна пошта: ${item.email}</p>
                    <button type="button" data-index="${index}">Видалити</button>
                </li>`;
    }).join("");
    listEl.innerHTML = item;
}

listEl.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const index = event.target.dataset.index;
        arr.splice(index, 1);
        localStorage.setItem("contacts", JSON.stringify(arr));
        addObj(arr);
    }
});