async function loadSites() {
    const container = document.getElementById("sites");

    // HTMLに要素がない場合に備えたチェック
    if (!container) {
        console.error("エラー: HTMLに id='sites' の要素が見つかりません。");
        return;
    }

    try {
        const response = await fetch("sites.json");
        if (!response.ok) throw new Error("ファイルが見つかりません");
        
        const sites = await response.json();

        container.innerHTML = ""; // 読み込み中表示をクリア

        if (sites.length === 0) {
            container.innerHTML = "表示するサイトがありません。";
            return;
        }

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
        container.innerHTML = "<p>読み込み失敗: " + error.message + "</p>";
        console.error("詳細エラー:", error);
    }
}

// ページの読み込み完了を待って実行
window.addEventListener('DOMContentLoaded', loadSites);
