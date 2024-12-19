        //   currentLang = currentLang === 'es' ? 'en' : 'es';

        //   fetch(`./static/menu/${currentLang}.json`)
        //   .then(response => response.json())
        //   .then(data => {
        //           document.getElementById('tabContentHTML').innerHTML = ''
        //           document.getElementById('tabsMenu').innerHTML = '';
        //           const { allData, nameOfData, mapeo, descriptionData } = data;
        //           console.log(allData, nameOfData, mapeo);
        //           let nameClase = 'nav-link tabsMenucss text-white';
        //           allData.map((a, i) => {
        //               let nameClase = 'nav-link tabsMenucss text-white';
        //               a == 'lunch' && hour >= 12 ? (nameClase = 'nav-link tabsMenucss text-white active') : '';
        //               a == 'lunch' && hour >= 16 ? (nameClase = 'nav-link tabsMenucss text-white') : '';

        //               a == 'breakfast' && hour < 12 ? (nameClase = 'nav-link tabsMenucss text-white active') : '';
        //               a == 'tapita' && hour >= 16 ? (nameClase = 'nav-link tabsMenucss text-white active') : '';
        //               document.getElementById('tabsMenu').innerHTML += `
        //                   <li class="nav-item">
        //                       <a class="${nameClase}" data-bs-toggle="pill" href="#tab-${i + 1}">${nameOfData[a]}</a>
        //                   </li>`;
        //           });

        //           allData.map((a, i) => {
        //               let nameClase = 'tab-pane fade show p-0';

        //               a == 'lunch' && hour >= 12 ? (nameClase = 'tab-pane fade show p-0 active') : '';
        //               a == 'lunch' && hour >= 16 ? (nameClase = 'tab-pane fade show p-0') : '';

        //               a == 'breakfast' && hour < 12 ? (nameClase = 'tab-pane fade show p-0 active ') : '';
        //               a == 'tapita' && hour >= 16 ? (nameClase = 'tab-pane fade show p-0 active') : '';

        //               document.getElementById('tabContentHTML').innerHTML += `
        //                   <div id="tab-${i + 1}" class="${nameClase}">
        //                       <h4>${nameOfData[a]}</h4>
        //                       <p>${descriptionData[a] || ''} </p>
        //                       <hr>
        //                       <div class="container" id="${a}HTML"></div>
        //                   </div>`;
        //           });

        //           allData.map((a) => {
        //               const ss = mapeo[a];
        //               console.log(a, ss);
        //               const label = document.getElementById(`${a}HTML`);
        //               const aa = [];
        //               console.log(a);
        //                 ss.map((xx) => {
        //                     label.innerHTML += `
        //                         <div class="cards">
        //                             <div class="item">
        //                                 <div class="topname">
        //                                     <strong onclick="handleEdit(event)" class="title"> ${xx.name}</strong>
        //                                     <p class="price">${xx.price}</p>
        //                                 </div>
        //                                 <p class="description">${(xx.description).toLocaleLowerCase()}</p>
        //                             </div>
        //                         </div>`;
        //                 });
                      
        //           });
        //       });
