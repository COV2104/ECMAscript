// Задача

// Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка.

async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
}

function gettingUsers(users) {
  const usersContainer = document.querySelector(".users");

  users.forEach((user) => {
    const userElement = document.createElement("div");
    userElement.classList.add("user");
    userElement.innerHTML = `
              <h2>${user.name}</h2>
              <p>Email: ${user.email}</p>
              <p>Phone: ${user.phone}</p>
              <button class="delete-button" data-id="${user.id}">Удалить</button>`;

    const deleteButton = userElement.querySelector(".delete-button");
    deleteButton.addEventListener("click", () => {
      userElement.remove();
    });

    usersContainer.appendChild(userElement);
  });
}

async function displayUsers() {
  const users = await getUsers();
  gettingUsers(users);
}

displayUsers();


// Необязательная задача

// Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.

async function getDogImage() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  return data.message;
}

function displayDogImage(imageUrl) {
  const img = document.createElement("img");
  img.src = imageUrl;
  document.body.appendChild(img);
}

async function displayTenDogImages() {
  for (let i = 0; i < 10; i++) {
    const imageUrl = await getDogImage();
    displayDogImage(imageUrl);
    await new Promise((resolve) => setTimeout(resolve, 3000));
  }
}

displayTenDogImages();
