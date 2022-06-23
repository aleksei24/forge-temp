const gridItems = [
  {
    title: 'koz 01',
    category: 'koz',
    img: 'img/grid/koz/koz-01.webp',
  },
  {
    title: 'koz 02',
    category: 'koz',
    img: '../img/grid/koz/koz-02.webp',
  },
  {
    title: 'naves 01',
    category: 'naves',
    img: '../img/grid/naves/n-01.webp',
  },
  {
    title: 'naves 02',
    category: 'naves',
    img: '../img/grid/naves/n-02.webp',
  },
  {
    title: 'besed 01',
    category: 'besed',
    img: '../img/grid/besed/b-01.webp',
  },
  {
    title: 'besed 02',
    category: 'besed',
    img: '../img/grid/besed/b-02.webp',
  },
  {
    title: 'gate 01',
    category: 'gate',
    img: '../img/grid/gate/g-01.webp',
  },
  {
    title: 'gate 02',
    category: 'gate',
    img: '../img/grid/gate/g-02.webp',
  },
  {
    title: 'resh 01',
    category: 'resh',
    img: '../img/grid/resh/r-01.webp',
  },
  {
    title: 'resh 02',
    category: 'resh',
    img: '../img/grid/resh/r-02.webp',
  },
  {
    title: 'stare 01',
    category: 'stare',
    img: '../img/grid/stare/stare-01.webp',
  },
  {
    title: 'stare 02',
    category: 'stare',
    img: '../img/grid/stare/stare-02.webp',
  },
  {
    title: 'mang 01',
    category: 'mang',
    img: '../img/grid/mang/m-01.webp',
  },
  {
    title: 'mang 02',
    category: 'mang',
    img: '../img/grid/mang/m-02.webp',
  },
  {
    title: 'peril 01',
    category: 'peril',
    img: '../img/grid/peril/peril-01.webp',
  },
  {
    title: 'peril 02',
    category: 'peril',
    img: '../img/grid/peril/peril-02.webp',
  },
  {
    title: 'init 01',
    category: 'init',
    img: '../img/grid/init/i-01.webp',
  },
  {
    title: 'init 02',
    category: 'init',
    img: '../img/grid/init/i-02.webp',
  },
  {
    title: 'ogra 01',
    category: 'ogra',
    img: '../img/grid/ogra/o-01.webp',
  },
  {
    title: 'ogra 02',
    category: 'ogra',
    img: '../img/grid/ogra/o-02.webp',
  },
  {
    title: 'other 01',
    category: 'other',
    img: '../img/grid/other/oth-01.webp',
  },
  {
    title: 'other 02',
    category: 'other',
    img: '../img/grid/other/oth-02.webp',
  },
];

const displayCatalogue = document.querySelector('.display-catalogue');
const btnsCatalogue = document.querySelector('.buttons-catalogue');

window.addEventListener('DOMContentLoaded', () => {
  displayGridCatalogue(gridItems);
  displayChoiceButtons();
});

function displayGridCatalogue(gridItems) {
  let display = gridItems.map((item) => {
    return `
    <article class="display-catalogue__item item-catalogue">
      <div class="item-catalogue__img">
        <img src="${item.img}" alt="${item.title}" />
      </div>
    </article>
    `;
  });

  display = display.join('');
  displayCatalogue.innerHTML = display;
}

function displayChoiceButtons() {
  const gridCategories = gridItems.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ['all']
  );

  const categoryButtons = gridCategories
    .map((category) => {
      return `
      <button type="button" title="choose" data-category="${category}" class="buttons-catalogue__choice">${category}</button>
    `;
    })
    .join('');

  btnsCatalogue.innerHTML = categoryButtons;

  const chooseButtons = btnsCatalogue.querySelectorAll('.buttons-catalogue__choice');
  chooseButtons.forEach((elem) => {
    elem.addEventListener('click', (e) => {
      const itemsCategory = e.currentTarget.dataset.category;
      const buttonsCategory = gridItems.filter((item) => {
        if (item.category === itemsCategory) {
          return item;
        }
      });
      if (itemsCategory === 'all') {
        displayGridCatalogue(gridItems);
      } else {
        displayGridCatalogue(buttonsCategory);
      }
    });
  });
}
