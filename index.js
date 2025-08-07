const Base_URL = 'https://dragonball-api.com/api';
const animeDiv = document.getElementById('anime');

fetch(Base_URL + '/characters')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    for (const e of data.items) {
      animeDiv.innerHTML += `
        <div class="max-w-sm w-full lg:max-w-full lg:flex">
          <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('${e.image}')" title="Character">
          </div>
          <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
              <p class="text-sm text-gray-600 flex items-center">
                Base ki: ${e.ki}<br>
                Total ki: ${e.maxKi}
              </p>
              <div class="text-gray-900 font-bold text-xl mb-2">${e.description}</div>
              <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet...</p>
            </div>
          </div>
        </div>
      `;
    }
  });

const anime2Div = document.getElementById('anime2');

fetch(Base_URL + '/planets')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    for (const planet of data.items) {
      anime2Div.innerHTML += `
        <div class="max-w-sm w-full lg:max-w-full lg:flex mb-4">
          <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('${planet.image}')" title="${planet.name}">
          </div>
          <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
              <div class="text-gray-900 font-bold text-xl mb-2">${planet.name}</div>
              <p class="text-gray-700 text-base">${planet.description}</p>
            </div>
          </div>
        </div>
      `;
    }
  })
  .catch(error => {
    console.error('Ошибка при загрузке планет:', error);
  });