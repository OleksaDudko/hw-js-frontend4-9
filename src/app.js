const nameEl = document.querySelector(".name");
const secondNameEl = document.querySelector(".secondname");
const telEl = document.querySelector(".tel");
const emailEl = document.querySelector(".email");
const btnEl = document.querySelector(".btn");
const listEl = document.querySelector(".list");
const arr = []

btnEl.addEventListener("click", (event) => {
    const data = {
        name: nameEl.value,
        secondName: secondNameEl.value,
        tel: telEl.value,
        email: emailEl.value
    }

    arr.push(data);
    console.log(data);
    addObj(arr);
})

function addObj(arr) {
    const item = arr.map((item, index) => {
        return `<li class="contact">
                    <p class="text">Контакт ${nameEl.value}</p>
                    <p class="text">Ім'я: ${nameEl.value}</p>
                    <p class="text">Прізвище: ${secondNameEl.value}</p>
                    <p class="text">Телефон: ${telEl.value}</p>
                    <p class="text">Електронна пошта: ${emailEl.value}</p>
                    <button type="button" data-index="${index}">Видалити</button>
                    <button type="button" data-index="${index}">Редагуати</button>
                </li>`;
    }).join("");
    listEl.innerHTML = item;
}