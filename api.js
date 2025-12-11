const API_URL = "https://lendell-garcellano.app.n8n.cloud/webhook-test/41763a4b-4787-42ec-ba1f-fddf221fc201";

document.getElementById("triggerBtn").addEventListener("click", loadUser);

async function loadUser() {
  try {
    // Show loading
    document.getElementById("loading").classList.remove("hidden");
    document.getElementById("error").classList.add("hidden");

    const res = await fetch(API_URL, {
      method: "POST"
    });

    const data = await res.json();
    const user = data[0];

    document.getElementById("loading").classList.add("hidden");

    const card = document.getElementById("userCard");
    card.classList.remove("hidden");

    card.innerHTML = `
      <div class="flex items-center gap-6">
        <img src="${user.avatarUrl}" class="w-24 h-24 rounded-full border-2 border-indigo-500 shadow-lg">

        <div>
          <h2 class="text-2xl font-semibold text-white">${user.firstName} ${user.lastName}</h2>
          <p class="text-gray-400">${user.email}</p>

          <span class="mt-3 inline-block px-4 py-1 rounded-full text-sm 
            ${user.priority === "high" ? "bg-red-600/30 text-red-300" : "bg-indigo-600/30 text-indigo-300"}">
            Priority: ${user.priority}
          </span>
        </div>
      </div>

      <div class="mt-6 pt-6 border-t border-gray-700">
        <p class="text-gray-400 text-sm">Received At (UTC):</p>
        <p class="text-lg text-indigo-300">${user.receivedAtUtc}</p>
      </div>
    `;
  } catch (error) {
    document.getElementById("loading").classList.add("hidden");
    document.getElementById("error").classList.remove("hidden");
    console.error(error);
  }
}

const API_URL = "https://YOUR-N8N-SUBDOMAIN.n8n.cloud/webhook/generate";

document.getElementById("triggerBtn").addEventListener("click", loadUser);

async function loadUser() {
  try {
    // Show loading
    document.getElementById("loading").classList.remove("hidden");
    document.getElementById("error").classList.add("hidden");

    const res = await fetch(API_URL, {
      method: "POST"
    });

    const data = await res.json();
    const user = data[0];

    document.getElementById("loading").classList.add("hidden");

    const card = document.getElementById("userCard");
    card.classList.remove("hidden");

    card.innerHTML = `
      <div class="flex items-center gap-6">
        <img src="${user.avatarUrl}" class="w-24 h-24 rounded-full border-2 border-indigo-500 shadow-lg">

        <div>
          <h2 class="text-2xl font-semibold text-white">${user.firstName} ${user.lastName}</h2>
          <p class="text-gray-400">${user.email}</p>

          <span class="mt-3 inline-block px-4 py-1 rounded-full text-sm 
            ${user.priority === "high" ? "bg-red-600/30 text-red-300" : "bg-indigo-600/30 text-indigo-300"}">
            Priority: ${user.priority}
          </span>
        </div>
      </div>

      <div class="mt-6 pt-6 border-t border-gray-700">
        <p class="text-gray-400 text-sm">Received At (UTC):</p>
        <p class="text-lg text-indigo-300">${user.receivedAtUtc}</p>
      </div>
    `;
  } catch (error) {
    document.getElementById("loading").classList.add("hidden");
    document.getElementById("error").classList.remove("hidden");
    console.error(error);
  }
}

