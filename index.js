const BASE_URL = 'https://dragonball-api.com/api';

const animeDiv = document.getElementById('anime');
const anime2Div = document.getElementById('anime2');

fetch(BASE_URL + '/characters')
  .then(res => res.json())
  .then(data => {
    for (const character of data.items) {
      animeDiv.innerHTML += `
        <div class="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden flex flex-col lg:flex-row mb-6">
          <img 
            class="w-full lg:w-48 object-contain p-4" 
            src="${character.image}" 
            alt="${character.name}" 
            style="max-height: 200px;"
          />
          <div class="p-6 flex flex-col justify-between">
            <h3 class="text-2xl font-bold mb-2">${character.name}</h3>
            <p class="text-gray-600 mb-1">Base ki: ${character.ki}</p>
            <p class="text-gray-600 mb-3">Total ki: ${character.maxKi}</p>
            <p class="text-gray-700 mb-4">${character.description}</p>
            <div class="flex items-center mt-auto">
              <img class="w-10 h-10 rounded-full mr-4" src="https://via.placeholder.com/40" alt="Avatar" />
              <div>
                <p class="font-medium text-sm">Character Info</p>
                <p class="text-xs text-gray-500">Dragon Ball API</p>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  })
  .catch(e => console.error('Ошибка при загрузке персонажей:', e));

fetch(BASE_URL + '/planets')
  .then(res => res.json())
  .then(data => {
    for (const planet of data.items) {
      anime2Div.innerHTML += `
        <div class="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden flex flex-col lg:flex-row mb-6">
          <img 
            class="w-full lg:w-48 object-contain p-4" 
            src="${planet.image}" 
            alt="${planet.name}" 
            style="max-height: 200px;"
          />
          <div class="p-6 flex flex-col justify-center">
            <h3 class="text-2xl font-bold mb-2">${planet.name}</h3>
            <p class="text-gray-700">${planet.description}</p>
          </div>
        </div>
      `;
    }
  })
  .catch(e => console.error('Ошибка при загрузке планет:', e));