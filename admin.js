// Get the form and goods container elements
const postGoodsForm = document.getElementById('postGoodsForm');
const goodsContainer = document.getElementById('goodsContainer');

// Function to handle the submission of the goods form
postGoodsForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent page refresh

  // Get form values
  const goodName = document.getElementById('goodName').value;
  const category = document.getElementById('category').value;
  const description = document.getElementById('description').value;
  const image = document.getElementById('image').value;

  // Create a new div for the posted good
  const goodsItem = document.createElement('div');
  goodsItem.classList.add('goods-item');

  goodsItem.innerHTML = `
    <img src="${image}" alt="${goodName}">
    <div>
      <h3>${goodName} (${category})</h3>
      <p>${description}</p>
    </div>
    <button class="delete-btn">Delete</button>
  `;

  // Add delete functionality to the button
  goodsItem.querySelector('.delete-btn').addEventListener('click', function () {
    goodsContainer.removeChild(goodsItem);
  });

  // Append the new goods item to the container
  goodsContainer.appendChild(goodsItem);

  // Reset form
  postGoodsForm.reset();
});
