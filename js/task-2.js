/* Task 2

Сверстайте кнопку, клик на которую будет 
выводить данные о размерах экрана с помощью alert. 
*/

document.addEventListener("DOMContentLoaded", task2);

function task2() {
  const button = document.querySelector(".btn-task-2");
  button.addEventListener("click", getScreenDementions);

  function getScreenDementions() {
    alert(`
    Ширина экрана: ${window.screen.width} px
    Высота экрана: ${window.screen.height} px

    Ширина окна браузера: ${document.documentElement.clientWidth} px
    Высота окна браузера: ${document.documentElement.clientHeight} px
    `);
  }
}
