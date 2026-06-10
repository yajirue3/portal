async function loadSites() {
    const container = document.getElementById("sites");

    try {
        const response = await fetch("sites.json");
        const sites = await response.json();

        container.innerHTML = "";

        sites.forEach(site => {
            const card = document.createElement("div");
            card.className = "site";

            card.innerHTML = `
                <a href="${site.url}" target="_blank" rel="noopener">
                    ${site.name}
                </a>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        container.innerHTML = "<p>サイト一覧の読み込みに失敗しました。</p>";
        console.error(error);
    }
}

loadSites();
