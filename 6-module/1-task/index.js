/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  elem = null;

  #rows = [];

  constructor(rows) {
    this.#rows = rows;
    this.elem = this.#render();
  }

  #template() {
    return `
      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${this.#rows.map(item => `<tr><td>${item.name}</td><td>${item.age}</td><td>${item.salary}</td><td>${item.city}</td><td><button>X</button></td></tr>`).join('')}
        </tbody>
      </table>
    `
  }

  #render() {
    const temp = document.createElement('div');
    temp.innerHTML = this.#template();
    this.elem = temp.firstElementChild;
    this.elem.addEventListener('click', this.#onClick);

    return this.elem;
  }

  #onClick = (event) => {
    const target = event.target;
    if (target.tagName != 'BUTTON') return;

    const row = target.closest('tr');
    if (!row) return;

    row.remove();
  }
}
