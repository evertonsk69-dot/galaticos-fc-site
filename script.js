/* =========================================================
   GALÁTICOS FUTEBOL CLUBE
   SISTEMA DO SITE
========================================================= */

const clubLogo = "logo-galaticos.png";


/* =========================================================
   DADOS DO SITE
========================================================= */

const data = {

  /* =======================================================
     NÚMEROS DA TEMPORADA
  ======================================================= */

  overview: [

    {
      value: 1,
      label: "Jogos disputados"
    },

    {
      value: 1,
      label: "Vitórias"
    },

    {
      value: 3,
      label: "Gols marcados"
    },

    {
      value: 50,
      label: "Aproveitamento %"
    }

  ],


  /* =======================================================
     JOGOS
     
     IMPORTANTE:
     Para abrir os detalhes, cada jogo possui um "id".
  ======================================================= */

  matches: [

    /* =====================================================
       JOGO 1
    ===================================================== */

    {

      id: "galaticos-imperio",

      competition: "Copa Força Jovem 2026",

      phase: "Oitavas de final",

      date: "27/09/2026",

      time: "10H",

      home: "Galáticos FC",

      away: "IMPÉRIO",

      venue: "Campo do Bernadino",

      status: "Próximo",

      homeScore: null,

      awayScore: null,


      /* GOLS */

      scorers: [],


      /* CARTÕES AMARELOS */

      yellowCards: [],


      /* EXPULSÕES */

      redCards: [],


      /* MELHOR JOGADOR */

      bestPlayer: {

        name: "",

        position: "",

        photo: "",

        description: ""

      },


      /* ESCALAÇÃO */

      lineup: [],


      /* FOTOS */

      photos: [],


      /* VÍDEO DO YOUTUBE */

      youtube: ""

    },


    /* =====================================================
       JOGO 2
       
       GALÁTICOS 3 X 2 TABAJARA
    ===================================================== */

    {

      id: "galaticos-tabajara",

      competition: "Copa Vargem Grande 2026",

      phase: "Fase de grupos",

      date: "20/09/2026",

      time: "12H",

      home: "Galáticos FC",

      away: "TABAJARA VG",

      venue: "Arena Cratera",

      status: "Finalizado",

      homeScore: 3,

      awayScore: 2,


      /* ===================================================
         GOLS
         
         TROQUE OS NOMES ABAIXO PELOS JOGADORES CORRETOS.
      =================================================== */

      scorers: [

        {
          team: "Galáticos FC",
          player: "BIRO",
          minute: "1º TEMPO"
        },

        {
          team: "Galáticos FC",
          player: "GUIDO",
          minute: "2º TEMPO"
        },

        {
          team: "Galáticos FC",
          player: "GUIDO",
          minute: "2º TEMPO"
        }

      ],


      /* ===================================================
         CARTÕES AMARELOS
      =================================================== */

      yellowCards: [

        /*
        {
          team: "Galáticos FC",
          player: "SKEETER",
          minute: "2º TEMPO"
        }
        */

      ],


      /* ===================================================
         CARTÕES VERMELHOS
      =================================================== */

      redCards: [

        /*
        {
          team: "Galáticos FC",
          player: "NOME DO JOGADOR",
          minute: "70'"
        }
        */

      ],


      /* ===================================================
         MELHOR JOGADOR
      =================================================== */

      bestPlayer: {

        name: "GUIDO",

        position: "MEIA ATACANTE",

        photo: "craque-tabajara.jpg",

        description: "Melhor jogador da partida."

      },


      /* ===================================================
         ESCALAÇÃO
      =================================================== */

      lineup: [

        /*
        {
          number: 1,
          name: "LÉO",
          position: "Goleiro"
        },

        {
          number: 2,
          name: "ADElSON",
          position: "Zagueiro"
        },

        {
          number: 3,
          name: "JUNIOR",
          position: "Zagueiro"
        }
        */

      ],


      /* ===================================================
         FOTOS DA PARTIDA
         
         Coloque as fotos na mesma pasta do site.
         
         Exemplo:
         fotos/
         ├── tabajara-01.jpg
         ├── tabajara-02.jpg
         └── tabajara-03.jpg
      =================================================== */

      photos: [

        /*
        "fotos/tabajara-01.jpg",
        "fotos/tabajara-02.jpg",
        "fotos/tabajara-03.jpg"
        */

      ],


      /* ===================================================
         VÍDEO DO YOUTUBE
         
         Coloque aqui somente o ID do vídeo.

         Exemplo:
         https://www.youtube.com/watch?v=ABC123

         Use:
         youtube: "ABC123"
      =================================================== */

      youtube: ""

    }

  ],


  /* =======================================================
     ARTILHEIROS
  ======================================================= */

  scorers: [

    {
      name: "GUIDO",
      position: "Meia Atacante",
      stat: 29
    },

    {
      name: "HENRIQUE",
      position: "Meia Atacante",
      stat: 10
    },

    {
      name: "BERA",
      position: "Volante",
      stat: 9
    },

    {
      name: "FILÓ",
      position: "Atacante",
      stat: 9
    },

    {
      name: "BATATA",
      position: "Atacante",
      stat: 6
    }

  ],


  /* =======================================================
     ASSISTÊNCIAS
  ======================================================= */

  assists: [

    {
      name: "GUIDO",
      position: "Meia atacante",
      stat: 14
    },

    {
      name: "HENRIQUE",
      position: "Meia atacante",
      stat: 14
    },

    {
      name: "FILÓ",
      position: "Atacante",
      stat: 8
    },

    {
      name: "BIRO",
      position: "Lateral",
      stat: 7
    }

  ],


  /* =======================================================
     ELENCO
  ======================================================= */

  players: [

    ["Adelson","Zagueiro"],
    ["Allan","Zagueiro"],
    ["Anthony","Atacante"],
    ["Bera","Volante"],
    ["Biro","Lateral"],
    ["Bruninho","Meio-campo"],
    ["Bruno","Zagueiro"],
    ["Batata","Atacante"],
    ["Dudu","Zagueiro"],
    ["Davi","Atacante"],
    ["Filó","Atacante"],
    ["Gabriel","Lateral"],
    ["Gabriel Hebert","Meia atacante"],
    ["Gogo","Zagueiro"],
    ["Guido","Meia atacante"],
    ["Henrique","Meia atacante"],
    ["Junior","Zagueiro"],
    ["Léo","Goleiro"],
    ["Luan","Lateral"],
    ["Lule","Lateral"],
    ["Patrick","Goleiro"],
    ["Rafael","Meia atacante"],
    ["Robson","Meia atacante"],
    ["Skeeter","Zagueiro"],
    ["Samuel","Goleiro"],
    ["Vini","Atacante"],
    ["Willy","Volante"]

  ]

};


/* =========================================================
   FUNÇÃO AUXILIAR
========================================================= */

const $ = (id) => document.getElementById(id);


/* =========================================================
   NÚMEROS DA TEMPORADA
========================================================= */

function renderOverview() {

  const box = $("overviewGrid");

  if (!box) return;

  box.innerHTML = data.overview.map(x => `

    <div class="overview">

      <div class="value">
        ${x.value}
      </div>

      <div class="label">
        ${x.label}
      </div>

    </div>

  `).join("");

}


/* =========================================================
   TABELA DE JOGOS — NOVOS JOGOS SEMPRE NO TOPO
========================================================= */
function renderFixturesTable() {
  const body = $("fixturesTableBody");
  if (!body) return;

  const rows = [...data.matches].sort((a, b) => {
    const parse = value => {
      const p = (value || "").split("/");
      return p.length === 3 ? new Date(+p[2], +p[1]-1, +p[0]).getTime() : 0;
    };
    return parse(b.date) - parse(a.date);
  });

  const nextGameSpace = `
    <tr class="fixture-next-slot">
      <td>
        <div class="fixture-teams">
          <div class="fixture-team galaticos"><img src="${clubLogo}" alt="Galáticos FC"><strong>GALÁTICOS FC</strong></div>
          <span class="fixture-vs">VS</span>
          <div class="fixture-team opponent"><div class="fixture-logo-empty">+</div><strong>ADVERSÁRIO</strong></div>
        </div>
      </td>
      <td><span class="fixture-placeholder">DATA</span></td>
      <td><span class="fixture-placeholder">HORÁRIO</span></td>
      <td><span class="fixture-placeholder">COMPETIÇÃO</span></td>
      <td><span class="fixture-placeholder">LOCAL</span></td>
    </tr>`;

  body.innerHTML = nextGameSpace + rows.map(x => `
    <tr>
      <td>
        <div class="fixture-teams">
          <div class="fixture-team galaticos"><img src="${clubLogo}" alt="Galáticos FC"><strong>GALÁTICOS FC</strong></div>
          <span class="fixture-vs">${x.status === "Finalizado" && x.homeScore !== null ? x.homeScore + " × " + x.awayScore : "VS"}</span>
          <div class="fixture-team opponent">
            ${x.opponentLogo ? '<img src="' + x.opponentLogo + '" alt="' + x.away + '">' : '<div class="fixture-logo-empty">+</div>'}
            <strong>${x.away}</strong>
          </div>
        </div>
      </td>
      <td>${x.date || "—"}</td>
      <td>${x.time || "—"}</td>
      <td><span class="fixture-comp">${x.competition || "—"}</span></td>
      <td>${x.venue || "—"}</td>
    </tr>
  `).join("");
}

/* =========================================================
   RENDERIZA OS JOGOS
========================================================= */

function renderMatches(filter = "Todos") {
  const matchesBox = $("matches");
  if (!matchesBox) return;

  const list =
    filter === "Todos"
      ? data.matches
      : data.matches.filter(
          x => x.competition === filter
        );


  matchesBox.innerHTML = list.length

    ? list.map(x => `

      <article
        class="match clickable-match"
        data-match-id="${x.id}"
        tabindex="0"
        role="button"
        aria-label="Ver detalhes de ${x.home} contra ${x.away}">


        <!-- PARTE SUPERIOR -->

        <div class="match-top">

          <span class="comp">
            ${x.competition}
          </span>

          <span>
            ${x.phase}
          </span>

        </div>


        <!-- TIMES -->

        <div class="match-body">


          <div class="team">

            <img
              src="${clubLogo}"
              alt="">

            <div>
              ${x.home}
            </div>

            <small>
              MANDANTE
            </small>

          </div>


          <!-- PLACAR -->

          <div class="vs">

            ${
              x.status === "Finalizado"
                ? `<strong class="match-score">
                    ${x.homeScore}
                    <span>×</span>
                    ${x.awayScore}
                  </strong>`
                : `<span>VS</span>`
            }

          </div>


          <div class="team">

            <div>
              ${x.away}
            </div>

            <small>
              ADVERSÁRIO
            </small>

          </div>


        </div>


        <!-- PARTE INFERIOR -->

        <div class="match-bottom">

          <span>
            ${x.date} • ${x.time}
          </span>

          <span>
            ${x.venue}
          </span>

          <span
            class="status ${
              x.status === "Próximo"
                ? "upcoming"
                : "done"
            }">

            ${
              x.status === "Finalizado"
                ? "FINALIZADO"
                : x.status
            }

          </span>

        </div>


        <!-- INDICAÇÃO DE CLIQUE -->

        <div class="match-details-link">

          VER DETALHES DA PARTIDA
          <span>→</span>

        </div>


      </article>

    `).join("")

    : `

      <div class="empty">

        Nenhum jogo encontrado nessa competição.

      </div>

    `;


  /* Ativa os cliques */

  document
    .querySelectorAll(".clickable-match")
    .forEach(card => {

      card.addEventListener(
        "click",
        () => {

          const id =
            card.dataset.matchId;

          openMatchDetails(id);

        }
      );


      /* Permite ENTER no teclado */

      card.addEventListener(
        "keydown",
        event => {

          if (
            event.key === "Enter" ||
            event.key === " "
          ) {

            event.preventDefault();

            openMatchDetails(
              card.dataset.matchId
            );

          }

        }
      );

    });

}


/* =========================================================
   ABRIR DETALHES DA PARTIDA
========================================================= */

function openMatchDetails(id) {

  const match =
    data.matches.find(
      x => x.id === id
    );


  if (!match) return;


  /* Dados principais */

  $("detailCompetition").textContent =
    match.competition;

  $("matchModalTitle").textContent =
    `${match.home} × ${match.away}`;

  $("detailPhase").textContent =
    match.phase;

  $("detailHome").textContent =
    match.home;

  $("detailAway").textContent =
    match.away;

  $("detailDate").textContent =
    match.date;

  $("detailTime").textContent =
    match.time;

  $("detailVenue").textContent =
    match.venue;


  /* Placar */

  if (
    match.status === "Finalizado" &&
    match.homeScore !== null &&
    match.awayScore !== null
  ) {

    $("detailScore").innerHTML = `

      <span>
        ${match.homeScore}
      </span>

      <small>
        ×
      </small>

      <span>
        ${match.awayScore}
      </span>

    `;

  } else {

    $("detailScore").innerHTML = `

      <span>
        VS
      </span>

    `;

  }


  $("detailStatus").textContent =
    match.status.toUpperCase();


  /* Conteúdo */

  $("matchDetailBody").innerHTML =
    createMatchDetails(match);


  /* Abre modal */

  $("matchModal").classList.add("open");

  $("matchModal").setAttribute(
    "aria-hidden",
    "false"
  );


  document.body.classList.add(
    "modal-open"
  );


  /* Começa no topo */

  $("matchModal").scrollTop = 0;

}


/* =========================================================
   CRIA OS DETALHES DA PARTIDA
========================================================= */

function createMatchDetails(match) {

  let html = "";


  /* =======================================================
     GOLS
  ======================================================= */

  html += `

    <section class="detail-section">

      <div class="detail-section-title">

        <span>⚽</span>

        <h3>
          Gols
        </h3>

      </div>

  `;


  if (
    match.scorers &&
    match.scorers.length
  ) {

    html += `

      <div class="events-list">

    `;


    match.scorers.forEach(goal => {

      html += `

        <div class="event-row">

          <div class="event-icon">
            ⚽
          </div>

          <div class="event-info">

            <strong>
              ${goal.player}
            </strong>

            <span>
              ${goal.team}
            </span>

          </div>

          <time>
            ${goal.minute || ""}
          </time>

        </div>

      `;

    });


    html += `
      </div>
    `;

  } else {

    html += emptyDetail(
      "Nenhum gol cadastrado."
    );

  }


  html += `
    </section>
  `;


  /* =======================================================
     CARTÕES AMARELOS
  ======================================================= */

  html += `

    <section class="detail-section">

      <div class="detail-section-title">

        <span>🟨</span>

        <h3>
          Cartões amarelos
        </h3>

      </div>

  `;


  if (
    match.yellowCards &&
    match.yellowCards.length
  ) {

    html += `
      <div class="events-list">
    `;


    match.yellowCards.forEach(card => {

      html += `

        <div class="event-row">

          <div class="event-icon">
            🟨
          </div>

          <div class="event-info">

            <strong>
              ${card.player}
            </strong>

            <span>
              ${card.team}
            </span>

          </div>

          <time>
            ${card.minute || ""}
          </time>

        </div>

      `;

    });


    html += `
      </div>
    `;

  } else {

    html += emptyDetail(
      "Nenhum cartão amarelo cadastrado."
    );

  }


  html += `
    </section>
  `;


  /* =======================================================
     EXPULSÕES
  ======================================================= */

  html += `

    <section class="detail-section">

      <div class="detail-section-title">

        <span>🟥</span>

        <h3>
          Expulsões
        </h3>

      </div>

  `;


  if (
    match.redCards &&
    match.redCards.length
  ) {

    html += `
      <div class="events-list">
    `;


    match.redCards.forEach(card => {

      html += `

        <div class="event-row">

          <div class="event-icon">
            🟥
          </div>

          <div class="event-info">

            <strong>
              ${card.player}
            </strong>

            <span>
              ${card.team}
            </span>

          </div>

          <time>
            ${card.minute || ""}
          </time>

        </div>

      `;

    });


    html += `
      </div>
    `;

  } else {

    html += emptyDetail(
      "Nenhuma expulsão registrada."
    );

  }


  html += `
    </section>
  `;


  /* =======================================================
     MELHOR JOGADOR
  ======================================================= */

  html += `

    <section class="detail-section">

      <div class="detail-section-title">

        <span>⭐</span>

        <h3>
          Melhor jogador
        </h3>

      </div>

  `;


  if (
    match.bestPlayer &&
    match.bestPlayer.name
  ) {

    const photo =
      match.bestPlayer.photo
        ? `<img
            src="${match.bestPlayer.photo}"
            alt="${match.bestPlayer.name}">
          `
        : `<div class="best-player-placeholder">
            ⭐
          </div>`;


    html += `

      <div class="best-player">

        <div class="best-player-photo">

          ${photo}

        </div>


        <div>

          <span>
            CRAQUE DA PARTIDA
          </span>

          <h4>
            ${match.bestPlayer.name}
          </h4>

          <small>
            ${match.bestPlayer.position || ""}
          </small>

          <p>
            ${match.bestPlayer.description || ""}
          </p>

        </div>

      </div>

    `;

  } else {

    html += emptyDetail(
      "Melhor jogador ainda não definido."
    );

  }


  html += `
    </section>
  `;


  /* =======================================================
     ESCALAÇÃO
  ======================================================= */

  html += `

    <section class="detail-section">

      <div class="detail-section-title">

        <span>📋</span>

        <h3>
          Escalação do Galáticos
        </h3>

      </div>

  `;


  if (
    match.lineup &&
    match.lineup.length
  ) {

    html += `
      <div class="lineup-grid">
    `;


    match.lineup.forEach(player => {

      html += `

        <div class="lineup-player">

          <div class="lineup-number">
            ${player.number || "-"}
          </div>

          <div>

            <strong>
              ${player.name}
            </strong>

            <span>
              ${player.position}
            </span>

          </div>

        </div>

      `;

    });


    html += `
      </div>
    `;

  } else {

    html += emptyDetail(
      "Escalação ainda não cadastrada."
    );

  }


  html += `
    </section>
  `;


  /* =======================================================
     FOTOS
  ======================================================= */

  html += `

    <section class="detail-section">

      <div class="detail-section-title">

        <span>📸</span>

        <h3>
          Fotos da partida
        </h3>

      </div>

  `;


  if (
    match.photos &&
    match.photos.length
  ) {

    html += `
      <div class="match-gallery">
    `;


    match.photos.forEach((photo, index) => {

      html += `

        <a
          href="${photo}"
          target="_blank"
          rel="noopener noreferrer">

          <img
            src="${photo}"
            alt="Foto da partida ${index + 1}"
            loading="lazy">

        </a>

      `;

    });


    html += `
      </div>
    `;

  } else {

    html += emptyDetail(
      "As fotos desta partida serão adicionadas em breve."
    );

  }


  html += `
    </section>
  `;


  /* =======================================================
     YOUTUBE
  ======================================================= */

  html += `

    <section class="detail-section">

      <div class="detail-section-title">

        <span>🎥</span>

        <h3>
          Vídeo da partida
        </h3>

      </div>

  `;


  if (match.youtube) {

    html += `

      <div class="youtube-player">

        <iframe
          src="https://www.youtube.com/embed/${match.youtube}"
          title="Vídeo da partida"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
        </iframe>

      </div>

    `;

  } else {

    html += emptyDetail(
      "O vídeo desta partida será adicionado em breve."
    );

  }


  html += `
    </section>
  `;


  return html;

}


/* =========================================================
   MENSAGEM VAZIA
========================================================= */

function emptyDetail(message) {

  return `

    <div class="detail-empty">

      ${message}

    </div>

  `;

}


/* =========================================================
   RANKING
========================================================= */

function renderRanking(
  target,
  list,
  suffix
) {

  $(target).innerHTML = list.map(
    (x, i) => `

      <div class="player-row">

        <div class="rank">
          ${String(i + 1).padStart(2, "0")}
        </div>

        <div>

          <div class="player-name">
            ${x.name}
          </div>

          <div class="player-meta">
            ${x.position}
          </div>

        </div>

        <div class="player-stat">

          ${x.stat}

          <small>
            ${suffix}
          </small>

        </div>

      </div>

    `
  ).join("");

}


/* =========================================================
   ELENCO
========================================================= */

function renderPlayers(query = "") {

  const q =
    query.toLowerCase().trim();


  const list =
    data.players.filter(
      p =>
        p[0]
          .toLowerCase()
          .includes(q) ||

        p[1]
          .toLowerCase()
          .includes(q)
    );


  $("players").innerHTML =

    list.map(
      (p, i) => `

        <article class="player-card">

          <div class="player-num">
            ${String(i + 1).padStart(2, "0")}
          </div>

          <h3>
            ${p[0]}
          </h3>

          <div class="position">
            ${p[1]}
          </div>

        </article>

      `
    ).join("")

    ||

    `

      <div class="empty">
        Jogador não encontrado.
      </div>

    `;

}


/* =========================================================
   FILTRO DE COMPETIÇÕES
========================================================= */

function fillFilter() {

  const competitions =
    [
      ...new Set(
        data.matches.map(
          x => x.competition
        )
      )
    ];


  $("competitionFilter").innerHTML = `

    <option value="Todos">
      Todas as competições
    </option>

    ${
      competitions
        .map(
          c =>
            `<option value="${c}">
              ${c}
            </option>`
        )
        .join("")
    }

  `;

}


/* =========================================================
   FECHAR MODAL
========================================================= */

function closeMatchDetails() {

  $("matchModal").classList.remove(
    "open"
  );

  $("matchModal").setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "modal-open"
  );

}


/* =========================================================
   EVENTOS DO SITE
========================================================= */


/* Filtro */

$("competitionFilter")
  .addEventListener(
    "change",
    e =>
      renderMatches(
        e.target.value
      )
  );


/* Pesquisa de jogadores */

$("playerSearch")
  .addEventListener(
    "input",
    e =>
      renderPlayers(
        e.target.value
      )
  );


/* Menu mobile */

$("menuBtn")
  .addEventListener(
    "click",
    () =>
      $("mainNav")
        .classList.toggle("open")
  );


/* Links do menu */

document
  .querySelectorAll("nav a")
  .forEach(
    a =>
      a.addEventListener(
        "click",
        () =>
          $("mainNav")
            .classList.remove("open")
      )
  );


/* Fechar modal */

$("matchModalClose")
  .addEventListener(
    "click",
    closeMatchDetails
  );


/* Fechar clicando fora */

$("matchModalOverlay")
  .addEventListener(
    "click",
    closeMatchDetails
  );


/* Fechar com ESC */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape" &&
      $("matchModal").classList.contains("open")
    ) {

      closeMatchDetails();

    }

  }
);


/* =========================================================
   SLIDER DE UNIFORMES
========================================================= */

const uniformSlides = [

  /*
    Quando colocar as imagens:

    "uniforme-1.jpg",
    "uniforme-2.jpg"

  */

];


function renderUniforms() {

  const box =
    document.getElementById(
      "uniformSlides"
    );

  const dots =
    document.getElementById(
      "uniformDots"
    );


  if (!box || !dots) return;


  if (
    uniformSlides.length === 0
  ) {

    dots.innerHTML =
      '<span class="dot active"></span>';

    return;

  }


  box.innerHTML =
    uniformSlides
      .map(
        (src, i) => `

          <div
            class="uniform-slide ${
              i === 0
                ? "active"
                : ""
            }">

            <img
              src="${src}"
              alt="Uniforme Galáticos"
              style="
                width:100%;
                height:100%;
                object-fit:contain;
                background:#0b0b0b;
              ">

          </div>

        `
      )
      .join("");


  dots.innerHTML =
    uniformSlides
      .map(
        (_, i) => `

          <span
            class="dot ${
              i === 0
                ? "active"
                : ""
            }">
          </span>

        `
      )
      .join("");


  let current = 0;


  const show = n => {

    current =
      (n + uniformSlides.length)
      % uniformSlides.length;


    document
      .querySelectorAll(
        "#uniformSlides .uniform-slide"
      )
      .forEach(
        (s, i) =>
          s.classList.toggle(
            "active",
            i === current
          )
      );


    document
      .querySelectorAll(
        "#uniformDots .dot"
      )
      .forEach(
        (d, i) =>
          d.classList.toggle(
            "active",
            i === current
          )
      );

  };


  document
    .getElementById(
      "uniformPrev"
    )
    .onclick =
      () =>
        show(current - 1);


  document
    .getElementById(
      "uniformNext"
    )
    .onclick =
      () =>
        show(current + 1);


  setInterval(
    () =>
      show(current + 1),
    5000
  );

}


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

renderOverview();
  renderFixturesTable();

fillFilter();

renderMatches();

renderRanking(
  "scorers",
  data.scorers,
  " G"
);

renderRanking(
  "assists",
  data.assists,
  " A"
);

renderPlayers();

renderUniforms();
/* =====================================================
   CONTADOR DE VISITANTES
===================================================== */

async function registrarVisita() {

  const contador =
    document.getElementById("visitorCount");

  if (!contador) return;

  const url =
    "https://api.counterapi.dev/v1/galaticosfc-site/visitas/up";

  try {

    const resposta =
      await fetch(url, {
        method: "GET",
        cache: "no-store"
      });

    if (!resposta.ok) {
      throw new Error("Erro no contador");
    }

    const dados =
      await resposta.json();

    const numero =
      Number(
        dados.count ??
        dados.value ??
        dados.data?.count ??
        0
      );

    if (
      !Number.isFinite(numero) ||
      numero <= 0
    ) {
      throw new Error("Número inválido");
    }

    animarContador(
      contador,
      numero
    );

  } catch (erro) {

    console.warn(
      "Erro no contador:",
      erro
    );

    contador.textContent =
      "------";
  }
}


/* =====================================================
   ANIMAÇÃO DO NÚMERO
===================================================== */

function animarContador(
  elemento,
  destino
) {

  const inicio = 0;

  const duracao = 1600;

  const inicioTempo =
    performance.now();


  function atualizar(tempo) {

    const progresso =
      Math.min(
        (tempo - inicioTempo) /
        duracao,
        1
      );


    const suavizado =
      1 -
      Math.pow(
        1 - progresso,
        3
      );


    const numero =
      Math.floor(
        inicio +
        (destino - inicio) *
        suavizado
      );


    elemento.textContent =
      String(numero)
        .padStart(6, "0");


    if (progresso < 1) {

      requestAnimationFrame(
        atualizar
      );

    } else {

      elemento.textContent =
        String(destino)
          .padStart(6, "0");
    }
  }


  requestAnimationFrame(
    atualizar
  );
}


registrarVisita();

/* =========================================================
   GALERIA GALÁTICOS FC x ARSENAL VG
========================================================= */
const galleryAlbums = [
  {
    title: "GALÁTICOS FC x ARSENAL VG",
    folder: "galeria/galaticos-x-arsenal-vg",
    cover: "foto-01.jpg",
    photos: [
      "foto-01.jpg", "foto-02.jpg", "foto-03.jpg", "foto-04.jpg", "foto-05.jpg",
      "foto-06.jpg", "foto-07.jpg", "foto-08.jpg", "foto-09.jpg", "foto-10.jpg",
      "foto-11.jpg", "foto-12.jpg", "foto-13.jpg", "foto-14.jpg", "foto-15.jpg",
      "foto-16.jpg", "foto-17.jpg", "foto-18.jpg", "foto-19.jpg", "foto-20.jpg"
    ]
  },
  {
    title: "GALÁTICOS X 100 PRECONCEITO",
    folder: "galeria/galaticos-x-100-preconceito",
    cover: "foto-01.jpg",
    photos: [
      "foto-01.jpg", "foto-02.jpg", "foto-03.jpg", "foto-04.jpg", "foto-05.jpg",
      "foto-06.jpg", "foto-07.jpg", "foto-08.jpg", "foto-09.jpg", "foto-10.jpg",
      "foto-11.jpg", "foto-12.jpg", "foto-13.jpg", "foto-14.jpg", "foto-15.jpg",
      "foto-16.jpg", "foto-17.jpg"
    ]
  }
];
let activeAlbum = null;
let activePhoto = 0;
function renderAlbums(){
  const grid=document.getElementById("albumGrid"); if(!grid)return;
  grid.innerHTML=galleryAlbums.map((album,i)=>`<article class="album-card" data-album="${i}" tabindex="0" role="button" aria-label="Abrir ${album.title}"><div class="album-cover"><span class="album-badge">📸 ${album.photos.length} FOTOS</span><img src="${album.folder}/${album.cover}" alt="Capa do álbum ${album.title}" loading="lazy"></div><div class="album-info"><h3>${album.title}</h3><p>Galeria oficial do Galáticos Futebol Clube</p><span class="album-open">VER ÁLBUM →</span></div></article>`).join("");
  document.querySelectorAll(".album-card").forEach(card=>{const open=()=>openAlbum(Number(card.dataset.album));card.addEventListener("click",open);card.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();open();}});});
}
function openAlbum(index){activeAlbum=index;const album=galleryAlbums[index];document.getElementById("albumBrowser").hidden=true;const view=document.getElementById("galleryView");view.hidden=false;document.getElementById("galleryTitle").textContent=album.title;document.getElementById("galleryCount").textContent=`${album.photos.length} fotos`;document.getElementById("photoGrid").innerHTML=album.photos.map((photo,i)=>`<button class="photo-item" data-photo="${i}" aria-label="Abrir foto ${i+1}"><img src="${album.folder}/${photo}" alt="${album.title} — foto ${i+1}" loading="lazy"></button>`).join("");document.querySelectorAll(".photo-item").forEach(btn=>btn.addEventListener("click",()=>openPhoto(Number(btn.dataset.photo))));view.scrollIntoView({behavior:"smooth",block:"start"});}
function closeAlbum(){const view=document.getElementById("galleryView");if(view)view.hidden=true;const browser=document.getElementById("albumBrowser");if(browser)browser.hidden=false;document.getElementById("galeria")?.scrollIntoView({behavior:"smooth"});}
function openPhoto(index){activePhoto=index;updateLightbox();const lb=document.getElementById("photoLightbox");lb.classList.add("open");lb.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";}
function updateLightbox(){const a=galleryAlbums[activeAlbum];document.getElementById("lightboxImage").src=`${a.folder}/${a.photos[activePhoto]}`;document.getElementById("lightboxCaption").textContent=`${a.title} • ${activePhoto+1} de ${a.photos.length}`;}
function movePhoto(step){const total=galleryAlbums[activeAlbum].photos.length;activePhoto=(activePhoto+step+total)%total;updateLightbox();}
function closePhoto(){const lb=document.getElementById("photoLightbox");if(!lb)return;lb.classList.remove("open");lb.setAttribute("aria-hidden","true");document.body.style.overflow="";}
function openGalleryPortal(){const portal=document.getElementById("galleryPortal");const browser=document.getElementById("albumBrowser");const view=document.getElementById("galleryView");if(portal)portal.hidden=true;if(view)view.hidden=true;if(browser)browser.hidden=false;browser?.scrollIntoView({behavior:"smooth",block:"start"});}
function closeGalleryPortal(){const portal=document.getElementById("galleryPortal");const browser=document.getElementById("albumBrowser");const view=document.getElementById("galleryView");if(browser)browser.hidden=true;if(view)view.hidden=true;if(portal)portal.hidden=false;document.getElementById("galeria")?.scrollIntoView({behavior:"smooth",block:"start"});}
document.getElementById("galleryPortal")?.addEventListener("click",openGalleryPortal);
document.getElementById("galleryPortal")?.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openGalleryPortal();}});
document.getElementById("galleryHome")?.addEventListener("click",closeGalleryPortal);
document.getElementById("galleryBack")?.addEventListener("click",closeAlbum);
document.getElementById("lightboxClose")?.addEventListener("click",closePhoto);
document.getElementById("lightboxPrev")?.addEventListener("click",()=>movePhoto(-1));
document.getElementById("lightboxNext")?.addEventListener("click",()=>movePhoto(1));
document.getElementById("photoLightbox")?.addEventListener("click",e=>{if(e.target.id==="photoLightbox")closePhoto();});
document.addEventListener("keydown",e=>{if(!document.getElementById("photoLightbox")?.classList.contains("open"))return;if(e.key==="Escape")closePhoto();if(e.key==="ArrowLeft")movePhoto(-1);if(e.key==="ArrowRight")movePhoto(1);});
renderAlbums();


/* ===== Slider da Loja Galáticos ===== */
(function(){
  const slides=[...document.querySelectorAll('#storeSlides .store-slide')];
  const dotsBox=document.getElementById('storeDots');
  const prev=document.getElementById('storePrev');
  const next=document.getElementById('storeNext');
  if(!slides.length||!dotsBox||!prev||!next)return;
  let current=0, timer;
  dotsBox.innerHTML=slides.map((_,i)=>`<button class="store-dot ${i===0?'active':''}" type="button" aria-label="Ver camiseta ${i+1}"></button>`).join('');
  const dots=[...dotsBox.querySelectorAll('.store-dot')];
  function show(n){
    current=(n+slides.length)%slides.length;
    slides.forEach((s,i)=>s.classList.toggle('active',i===current));
    dots.forEach((d,i)=>d.classList.toggle('active',i===current));
  }
  function restart(){clearInterval(timer);timer=setInterval(()=>show(current+1),4500)}
  prev.addEventListener('click',()=>{show(current-1);restart()});
  next.addEventListener('click',()=>{show(current+1);restart()});
  dots.forEach((d,i)=>d.addEventListener('click',()=>{show(i);restart()}));
  restart();
})();

/* =========================================================
   GALERIA DO ATLETA — GUIDO
========================================================= */
const athleteGalleries = {
  "guido": {
    name: "GUIDO",
    position: "Meia atacante",
    photos: Array.from({length:13}, (_,i) => `atletas/guido/guido-${String(i+1).padStart(2,"0")}.jpg`)
  },
  "henrique": {
    name: "HENRIQUE",
    position: "Meia atacante",
    photos: Array.from({length:15}, (_,i) => `atletas/henrique/henrique-${String(i+1).padStart(2,"0")}.jpg`)
  },
  "skeeter": {
    name: "SKEETER",
    position: "Zagueiro",
    photos: [
      "atletas/skeeter/skeeter-01.jpg",
      "atletas/skeeter/skeeter-02.jpg",
      "atletas/skeeter/skeeter-03.jpg",
      "atletas/skeeter/skeeter-04.jpg",
      "atletas/skeeter/skeeter-05.jpg",
      "atletas/skeeter/skeeter-06.jpg",
      "atletas/skeeter/skeeter-07.jpg",
      "atletas/skeeter/skeeter-08.jpg",
      "atletas/skeeter/skeeter-09.jpg",
      "atletas/skeeter/skeeter-10.jpg",
      "atletas/skeeter/skeeter-11.jpg",
      "atletas/skeeter/skeeter-12.jpg",
      "atletas/skeeter/skeeter-13.jpg",
      "atletas/skeeter/skeeter-14.jpg",
      "atletas/skeeter/skeeter-15.jpg",
      "atletas/skeeter/skeeter-16.jpg",
      "atletas/skeeter/skeeter-17.jpg",
      "atletas/skeeter/skeeter-18.jpeg",
      "atletas/skeeter/skeeter-19.jpeg",
      "atletas/skeeter/skeeter-20.png",
      "atletas/skeeter/skeeter-21.png",
      "atletas/skeeter/skeeter-22.png",
      "atletas/skeeter/skeeter-23.png"
    ]
  }
};

function openAthleteGallery(playerName){
  const athlete = athleteGalleries[playerName.toLowerCase()];
  if(!athlete) return;
  let modal = document.getElementById("athleteGalleryModal");
  if(!modal){
    modal = document.createElement("div");
    modal.id = "athleteGalleryModal";
    modal.className = "athlete-gallery-modal";
    document.body.appendChild(modal);
  }
  modal.innerHTML = `
    <div class="athlete-gallery-box" role="dialog" aria-modal="true" aria-label="Fotos de ${athlete.name}">
      <button class="athlete-gallery-close" aria-label="Fechar">×</button>
      <div class="athlete-gallery-head">
        <span>GALÁTICOS FC • ATLETA</span>
        <h2>${athlete.name}</h2>
        <p>${athlete.position} • ${athlete.photos.length} fotos</p>
      </div>
      <div class="athlete-photo-grid">
        ${athlete.photos.map((src,i)=>`<button class="athlete-photo" data-src="${src}" aria-label="Abrir foto ${i+1}"><img src="${src}" alt="${athlete.name} - foto ${i+1}" loading="lazy"></button>`).join("")}
      </div>
    </div>`;
  modal.classList.add("open");
  document.body.classList.add("gallery-open");
  modal.querySelector(".athlete-gallery-close").onclick = closeAthleteGallery;
  modal.onclick = e => { if(e.target === modal) closeAthleteGallery(); };
  modal.querySelectorAll(".athlete-photo").forEach(btn => btn.onclick = () => openAthletePhoto(btn.dataset.src, athlete.name));
}
function closeAthleteGallery(){
  const modal=document.getElementById("athleteGalleryModal");
  if(modal) modal.classList.remove("open");
  document.body.classList.remove("gallery-open");
}
function openAthletePhoto(src,name){
  let viewer=document.getElementById("athletePhotoViewer");
  if(!viewer){ viewer=document.createElement("div"); viewer.id="athletePhotoViewer"; viewer.className="athlete-photo-viewer"; document.body.appendChild(viewer); }
  viewer.innerHTML=`<button class="athlete-viewer-close" aria-label="Fechar foto">×</button><img src="${src}" alt="${name}">`;
  viewer.classList.add("open");
  viewer.querySelector(".athlete-viewer-close").onclick=()=>viewer.classList.remove("open");
  viewer.onclick=e=>{if(e.target===viewer)viewer.classList.remove("open")};
}

document.addEventListener("click", e => {
  const card = e.target.closest(".player-card");
  if(!card) return;
  const name = card.querySelector("h3")?.textContent.trim();
  if(name && athleteGalleries[name.toLowerCase()]) openAthleteGallery(name);
});

document.addEventListener("keydown", e => {
  if(e.key === "Escape"){
    document.getElementById("athletePhotoViewer")?.classList.remove("open");
    closeAthleteGallery();
  }
});

function markClickableAthletes(){
  document.querySelectorAll("#players .player-card").forEach(card=>{
    const name=card.querySelector("h3")?.textContent.trim();
    if(name && athleteGalleries[name.toLowerCase()]){
      card.classList.add("has-gallery");
      if(!card.querySelector(".athlete-gallery-hint")) card.insertAdjacentHTML("beforeend",'<div class="athlete-gallery-hint">📸 VER FOTOS DO ATLETA</div>');
    }
  });
}
markClickableAthletes();
const playerSearchForGallery=document.getElementById("playerSearch");
if(playerSearchForGallery) playerSearchForGallery.addEventListener("input",()=>setTimeout(markClickableAthletes,0));
