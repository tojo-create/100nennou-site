/* =========================================================
   共通ヘッダー・フッター（全ページで1か所だけ編集すれば反映）
   メニューを変えるときは MENU だけを編集する
   ========================================================= */
(function () {
  var MENU = [
    { label: "協議会について", items: [
      { href: "about.html", label: "設立の背景と趣旨" },
      { href: "infrastructure.html", label: "健康寿命を支える新しい社会インフラ" },
      { href: "board.html", label: "理事・役員名簿" }
    ]},
    { label: "研究とエビデンス", items: [
      { href: "research.html", label: "丹波研究とコグニケア" },
      { href: "implementation.html", label: "エビデンスと社会実装をつなぐ" }
    ]},
    { href: "standard.html", label: "100年脳スタンダード" },
    { label: "参画のご案内", items: [
      { href: "join.html", label: "100年脳スタンダードを共に社会のあたりまえに" },
      { href: "contact.html", label: "お問い合わせ" }
    ]},
    { label: "情報発信", items: [
      { href: "journal.html", label: "100年脳ジャーナル" },
      { href: "news.html", label: "お知らせ" }
    ]}
  ];

  var page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  if (page === "") page = "index.html";

  function esc(s){ return s.replace(/&/g,"&amp;").replace(/</g,"&lt;"); }
  function link(it){ return '<a href="'+it.href+'"'+(it.href.toLowerCase()===page?' class="active" aria-current="page"':'')+'>'+esc(it.label)+'</a>'; }

  var navHtml = MENU.map(function (m) {
    if (m.items) {
      var active = m.items.some(function(i){ return i.href.toLowerCase()===page; });
      return '<li'+(active?' class="active"':'')+'><button class="top" type="button" aria-haspopup="true">'+esc(m.label)+'</button><ul class="sub">'
        + m.items.map(function(i){ return '<li>'+link(i)+'</li>'; }).join("") + '</ul></li>';
    }
    return '<li>'+link(m)+'</li>';
  }).join("");

  var logo = '<a class="logo" href="index.html" aria-label="100年脳・健康づくり推進協議会 トップへ">'
    + '<span class="logo-mark">100</span>'
    + '<span class="logo-text"><b>100年脳・健康づくり推進協議会</b><small>NPO法人（設立準備中）</small></span></a>';

  var header =
    '<div class="draft-banner">このサイトは設立準備委員会が検討中の<b>たたき台（ドラフト）第4版</b>です。「仮」の付いた内容は確定前のものです。</div>'
    + '<header class="topbar"><div class="wrap">' + logo
    + '<nav class="main" id="mainnav" aria-label="メインメニュー"><ul>' + navHtml + '</ul></nav>'
    + '<div class="nav-cta"><a class="btn primary" href="contact.html">お問い合わせ</a>'
    + '<button class="menu-btn" id="menubtn" aria-expanded="false" aria-controls="mainnav">メニュー</button></div>'
    + '</div></header>';

  var footer =
    '<footer class="site"><div class="wrap">'
    + '<div>' + logo + '<p style="font-size:13px;margin-top:14px;max-width:32em;color:#B7D0C3">100年脳スタンダードを、日本の新しい健康文化に。神戸大学の研究成果を社会実装へつなぐ、産官学民のプラットフォームです。</p></div>'
    + '<div><h4>協議会について</h4><ul><li><a href="about.html">設立の背景と趣旨</a></li><li><a href="infrastructure.html">新しい社会インフラ</a></li><li><a href="board.html">理事・役員名簿</a></li><li><a href="standard.html">100年脳スタンダード</a></li></ul></div>'
    + '<div><h4>研究とエビデンス</h4><ul><li><a href="research.html">丹波研究とコグニケア</a></li><li><a href="implementation.html">エビデンスと社会実装</a></li></ul></div>'
    + '<div><h4>参画・情報発信</h4><ul><li><a href="join.html">賛助会員のご案内</a></li><li><a href="journal.html">100年脳ジャーナル</a></li><li><a href="news.html">お知らせ</a></li><li><a href="contact.html">お問い合わせ</a></li></ul></div>'
    + '<div class="fine"><span>© 2026 100年脳・健康づくり推進協議会 設立準備委員会</span><span>「コグニケア」は神戸大学の登録商標です。</span></div>'
    + '</div></footer>';

  document.body.insertAdjacentHTML("afterbegin", header);
  document.body.insertAdjacentHTML("beforeend", footer);

  var btn = document.getElementById("menubtn"), nav = document.getElementById("mainnav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var o = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", o ? "true" : "false");
    });
  }

  // 問い合わせフォーム（送信先は未接続：見た目のみ）
  var f = document.getElementById("contactform"), s = document.getElementById("sent");
  if (f) {
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;
      ["f-name", "f-email", "f-body"].forEach(function (id) {
        var el = document.getElementById(id);
        if (!el) return;
        if (!el.value.trim()) { ok = false; el.style.borderColor = "#C0392B"; } else { el.style.borderColor = ""; }
      });
      if (ok && s) s.classList.add("show");
    });
  }
})();
