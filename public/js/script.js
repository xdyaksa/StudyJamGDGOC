const titleList = document.getElementById('title-list');
const cardContainer = document.getElementById('card-container');

for (let i = 0; i < 8; i++) {
    const listTitle = document.createElement('li');
    listTitle.classList.add("bg-blue-800", "my-6", "p-4", "rounded-2xl", "text-center", "uppercase", "font-bold");
    listTitle.textContent = `Title ${i + 1}`;
    titleList.appendChild(listTitle);
}

const colors = [
    ["bg-blue-800", "bg-teal-500", "bg-yellow-500", "text-pink-500"],
    ["bg-red-800", "bg-green-500", "bg-orange-500", "text-purple-500"],
    ["bg-indigo-800", "bg-cyan-500", "bg-lime-500", "text-rose-500"],
    ["bg-gray-800", "bg-blue-500", "bg-yellow-500", "text-pink-500"],
    ["bg-blue-800", "bg-teal-500", "bg-yellow-500", "text-pink-500"],
    ["bg-red-800", "bg-green-500", "bg-orange-500", "text-purple-500"],
    ["bg-indigo-800", "bg-cyan-500", "bg-lime-500", "text-rose-500"],
    ["bg-gray-800", "bg-blue-500", "bg-yellow-500", "text-pink-500"]
];

colors.forEach((colorSet, index) => {
    const card = document.createElement('div');
    card.classList.add("bg-blue-100", "shadow-xl", "shadow-slate-400", "my-6");

    card.innerHTML = `
        <div class="flex justify-between items-center p-3">
            <div class="flex items-center justify-center w-16 h-16 rounded-full ${colorSet[1]} text-white font-bold">
                logo
            </div>
            <div class="text-right">
                <h3 class="text-4xl font-bold">${index + 1}</h3>
                <p class="text-gray-500">Header</p>
            </div>
        </div>
        <div class="flex justify-between items-center px-4 py-4 ${colorSet[2]} shadow-xl shadow-slate-400">
            <a href="#" class="${colorSet[3]} font-semibold">View Details</a>
            <div class="rounded-full p-1 bg-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-white h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </div>
        </div>
    `;

    cardContainer.appendChild(card);
});