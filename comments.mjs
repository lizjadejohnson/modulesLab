export async function getComments() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      json.forEach((element, index) => {
        if (index < 50) {
          // Only process the first 50 comments
          let commentsContainer = document.querySelector(".commentsContainer");

          // Create a new div for the comment
          let newComment = document.createElement("div");
          newComment.setAttribute("class", "comment");
          // Set the background color to alternate between comments
          newComment.style.backgroundColor =
            index % 2 === 0 ? "#f0faff" : "transparent"; // Light blue and transparent for even and odd comments

          // Set inner HTML with commenter's name, email, and the comment body
          newComment.innerHTML = `
            <div><strong>${element.name}</strong><br>${element.email}</div>
            <div>${element.body}<br><br></div>
          `;

          // Append the new comment div to the comments container
          commentsContainer.appendChild(newComment);
        }
      });
    });
}
