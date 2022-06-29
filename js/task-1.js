/* Task 1

Сверстайте кнопку, которая будет содержать в себе 
icon_01 (как в примере в последнем видео). При клике 
на кнопку иконка должна меняться на icon_02. 
Повторный клик меняет иконку обратно. 

*/
document.addEventListener("DOMContentLoaded", task1);

function task1() {
  const button = document.querySelector(".btn-task-1");
  const div = document.querySelector(".btn-task-1__svg");
  let iconFlag = true;
  let icon = "";

  button.addEventListener("click", chengeIcon);

  function chengeIcon() {
    if (iconFlag) {
      icon = div.innerHTML;
      div.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-arrow-down-left-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-5.904-2.803a.5.5 0 1 1 .707.707L6.707 10h2.768a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.525a.5.5 0 0 1 1 0v2.768l4.096-4.096z"/>
      </svg>
      `;
      iconFlag = false;
    } else {
      div.innerHTML = icon;
      iconFlag = true;
    }
  }
}
