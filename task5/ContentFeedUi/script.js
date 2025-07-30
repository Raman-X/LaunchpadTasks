const API = "https://jsonplaceholder.typicode.com";
const app = document.getElementById("app");

// Helper to fetch JSON
const get = (url) => axios.get(`${API}${url}`).then((res) => res.data);

// Render Feed
async function renderFeed() {
  app.innerHTML = "<h1>Feed</h1>";

  const [posts, users, comments] = await Promise.all([
    get("/posts"),
    get("/users"),
    get("/comments"),
  ]);

  posts.slice(0, 10).forEach((post) => {
    const user = users.find((u) => u.id === post.userId);
    const postComments = comments.filter((c) => c.postId === post.id);

    const postEl = document.createElement("div");
    postEl.className = "post";
    postEl.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
      <p class="username" data-user="${user.id}">@${user.username}</p>
      <div class="comments">
        <strong>Comments:</strong>
        ${postComments
          .map((c) => `<div class="comment">${c.body}</div>`)
          .join("")}
      </div>
    `;

    postEl.querySelector(".username").onclick = () =>
      renderUserProfile(user.id);
    app.appendChild(postEl);
  });
}

// Render User Profile
async function renderUserProfile(userId) {
  const [user, albums, todos] = await Promise.all([
    get(`/users/${userId}`),
    get(`/users/${userId}/albums`),
    get(`/users/${userId}/todos`),
  ]);

  const photos = await get(`/albums/${albums[0].id}/photos`);

  app.innerHTML = `
    <button id="backBtn">← Back</button>
    <div class="profile">
      <h2>${user.name} (@${user.username})</h2>
      <p>Email: ${user.email}</p>
      <p>Company: ${user.company.name}</p>
      <h3>Photo Gallery</h3>
      <div class="gallery">
        ${photos
          .slice(0, 10)
          .map((p) => `<img src="${p.thumbnailUrl}" title="${p.title}">`)
          .join("")}
      </div>
      <h3>Todos</h3>
      <div class="todos">
        ${todos
          .slice(0, 10)
          .map(
            (t) =>
              `<div class="todo">${t.completed ? "✅" : "⬜"} ${t.title}</div>`
          )
          .join("")}
      </div>
    </div>
  `;

  document.getElementById("backBtn").onclick = renderFeed;
}

// Start
renderFeed();
