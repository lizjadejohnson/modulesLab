// Fetch Request -> JSON placeholder
// https://jsonplaceholder.typicode.com/

export async function getPhotos() {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((json) => {
      let container = document.querySelector(".imagesContainer");
      console.log(json[0].thumbnailUrl);
      // Display the first 50 images
      for (let i = 0; i < 50; i++) {
        let image = document.createElement("img"); // Create a new img element for each image
        image.setAttribute("src", json[i].thumbnailUrl); // Set src to the current image URL
        container.append(image); // Append the new image to the container
      }
    });
}
