// script.js
const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim(); // เอาค่าจาก input

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `
    ${taskText}
    <button onclick="removeTask(this)">Delete</button>
  `;

  taskList.appendChild(li);
  taskInput.value = ''; // เคลียร์ input หลังเพิ่มงาน
}

function removeTask(button) {
  const li = button.parentElement;
  taskList.removeChild(li);
}
