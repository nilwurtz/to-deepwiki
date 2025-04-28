import type { PlasmoCSConfig } from "plasmo"

// GitHub のリポジトリページにのみ実行されるように設定
export const config: PlasmoCSConfig = {
  matches: ["https://github.com/*/*"],
  all_frames: true
}

// ページが完全に読み込まれたら実行
window.addEventListener("load", () => {
  // リポジトリページかどうかを確認（ページURLからuser/repo部分を抽出）
  const path = window.location.pathname
  const match = path.match(/^\/([^/]+)\/([^/]+)\/?/)

  if (!match) {
    console.log("Not a repository page")
    return
  }

  const [, user, repo] = match
  console.log("user:", user)
  console.log("repo:", repo)

  // deepwikiへのリンクを作成
  const deepwikiUrl = `https://deepwiki.com/${user}/${repo}`

  // ナビゲーションバーの要素を取得
  const navBar = document.querySelector("nav[role='navigation']")
  console.log("navBar:", navBar)

  if (!navBar) {
    console.error("Navigation bar not found")
    return
  }

  // 新しいナビゲーション項目を作成
  const listItem = document.createElement("li")

  const link = document.createElement("a")
  link.href = deepwikiUrl
  link.target = "_blank"
  link.rel = "noopener noreferrer"
  link.style.display = "inline-block"

  const span = document.createElement("span")
  span.textContent = "Deepwiki"

  link.appendChild(span)
  listItem.appendChild(link)

  // ナビゲーションバーに追加
  navBar.appendChild(listItem)
})
