document.addEventListener("DOMContentLoaded", () => {
    inicializarGraficoFlujo(); 
    inicializarGraficoBurbujas();
    inicializarGraficoTorta();
});

// ── Gráfico 1: Diagrama de Flujo ──
function inicializarGraficoFlujo() {
    const contenedorFlujo = document.getElementById("grafico-flujo");
    if (contenedorFlujo) {
        contenedorFlujo.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 823.53 619.51" style="width: 100%; height: auto; display: block;">
      <defs>
        <style>
          .st0, .st1, .st2, .st3, .st4, .st5, .st6, .st7, .st8, .st9, .st10, .st11, .st12, .st13, .st14, .st15, .st16, .st17 { fill: none; }
          .st0, .st3 { stroke-width: 11.11px; }
          .st0, .st12 { stroke: #7b6ce9; }
          .st18 { font-family: 'Arial', sans-serif; font-size: 10px; }
          .st18, .st19, .st20 { fill: #404040; }
          .st18, .st21, .st20 { isolation: isolate; }
          .st18, .st20 { font-weight: 700; }
          .st1, .st5, .st6, .st15 { stroke: #71c8f7; }
          .st1, .st7 { stroke-width: 2.78px; }
          .st2 { stroke-width: 19.44px; }
          .st2, .st17 { stroke: #9a6dc2; }
          .st3, .st11 { stroke: #9a5dd1; }
          .st4, .st6 { stroke-width: 25px; }
          .st4, .st9, .st16 { stroke: #9eebf3; }
          .st5 { stroke-width: 16.67px; }
          .st7 { stroke: #26ffb4; }
          .st8, .st10 { stroke: #849af1; }
          .st8, .st17 { stroke-width: 8.33px; }
          .st9 { stroke-width: 133.33px; }
          .st10 { stroke-width: 94.44px; }
          .st11 { stroke-width: 77.78px; }
          .st12 { stroke-width: 5.56px; }
          .st20 { font-family: 'Georama', sans-serif; font-size: 12px; }
          .st13 { stroke: #d45bda; stroke-width: 38.89px; }
          .st14 { stroke: #e594e7; stroke-width: 10px; }
          .st22 { mix-blend-mode: multiply; opacity: .6; }
          .st15 { stroke-width: 147.22px; }
          .st16 { stroke-width: 41.67px; }
        </style>
      </defs>
      <g class="st21">
        <g id="Capa_1">
          <g id="visualization">
            <g>
              <rect class="st19" x="45" y="34.51" width="5" height="2.78"/>
              <rect class="st19" x="780" y="39.51" width="5" height="11.11"/>
              <rect class="st19" x="412.5" y="39.51" width="5" height="16.67"/>
              <rect class="st19" x="45" y="42.29" width="5" height="16.67"/>
              <rect class="st19" x="45" y="63.96" width="5" height="36.11"/>
              <rect class="st19" x="412.5" y="61.18" width="5" height="38.89"/>
              <rect class="st19" x="412.5" y="105.07" width="5" height="88.89"/>
              <rect class="st19" x="45" y="105.07" width="5" height="102.78"/>
              <rect class="st19" x="779.76" y="55.63" width="5.47" height="137.37"/>
              <rect class="st19" x="45" y="212.85" width="5" height="191.67"/>
              <rect class="st19" x="45" y="409.51" width="5" height="200"/>
              <rect class="st19" x="412.5" y="198.96" width="5" height="405.56"/>
            </g>
            <g>
              <g class="st22"><path class="st5" d="M50,221.18c181.25,0,181.25-173.33,362.5-173.33"/></g>
              <g class="st22"><path class="st0" d="M50,53.4c181.25,0,181.25,151.11,362.5,151.11"/></g>
              <g class="st22"><path class="st10" d="M50,160.63c181.25,0,181.25,116.11,362.5,116.11"/></g>
              <g class="st22"><path class="st15" d="M50,330.9c181.25,0,181.25,66.67,362.5,66.67"/></g>
              <g class="st22"><path class="st9" d="M50,542.85c181.25,0,181.25-5,362.5-5"/></g>
              <g class="st22"><path class="st2" d="M50,90.35c181.25,0,181.25,129.44,362.5,129.44"/></g>
              <g class="st22"><path class="st7" d="M50,35.9c181.25,0,181.25,26.67,362.5,26.67"/></g>
              <g class="st22"><path class="st17" d="M50,68.13h362.5"/></g>
              <g class="st22"><path class="st4" d="M50,422.01c181.25,0,181.25-334.44,362.5-334.44"/></g>
              <g class="st22"><path class="st1" d="M50,230.9c181.25,0,181.25-157.22,362.5-157.22"/></g>
              <g class="st22"><path class="st16" d="M50,455.35c181.25,0,181.25-282.22,362.5-282.22"/></g>
              <g class="st22"><path class="st12" d="M50,45.07c181.25,0,181.25,62.78,362.5,62.78"/></g>
              <g class="st22"><path class="st8" d="M50,109.24c181.25,0,181.25,13.89,362.5,13.89"/></g>
              <g class="st22"><path class="st6" d="M50,244.79c181.25,0,181.25-105,362.5-105"/></g>
              <g class="st22"><path class="st17" d="M50,76.46c181.25,0,181.25,38.33,362.5,38.33"/></g>
              <g class="st22"><path class="st13" d="M417.5,80.63c181.25,0,181.25-5.56,362.5-5.56"/></g>
              <g class="st22"><path class="st3" d="M417.5,110.63c181.25,0,181.25-65.56,362.5-65.56"/></g>
              <g class="st22"><path class="st11" d="M417.5,155.07c181.25,0,181.25-21.67,362.5-21.67"/></g>
            </g>
            <g>
              <g class="st21"><text class="st18" transform="translate(54 40.38)"><tspan x="0" y="0">DISEÑO TEATRAL</tspan></text></g>
              <g class="st21"><text class="st18" transform="translate(718.23 48.55)"><tspan x="0" y="0">BACHILLER</tspan></text></g>
              <g class="st21"><text class="st18" transform="translate(421.5 51.33)"><tspan x="0" y="0">CFT</tspan></text></g>
              <g class="st21"><text class="st18" transform="translate(54 55.11)"><tspan x="0" y="0">DISEÑO DE AMBIENTES/INTERIORES</tspan></text></g>
              <g class="st21"><text class="st18" transform="translate(54 83.5)"><tspan x="0" y="0">DISEÑO INDUSTRIAL/PRODUCTOS</tspan></text></g>
              <g class="st21"><text class="st18" transform="translate(421.5 84.11)"><tspan x="0" y="0">UNIVERSIDAD ESTATAL</tspan></text></g>
              <g class="st21"><text class="st18" transform="translate(421.5 149)"><tspan x="0" y="0">UNIVERSIDAD PRIVADA</tspan></text></g>
              <g class="st21"><text class="st18" transform="translate(54 155.94)"><tspan x="0" y="0">DISEÑO DE VESTUARIO/MODA</tspan></text></g>
              <g class="st21"><text class="st18" transform="translate(701.75 114.44)"><tspan x="0" y="0">LICENCIATURA</tspan></text></g>
              <g class="st21"><text class="st18" transform="translate(54 308.16)"><tspan x="0" y="0">DISEÑO DIGITAL/WEB/ANIMACIÓN</tspan></text></g>
              <g class="st21"><text class="st18" transform="translate(54 509)"><tspan x="0" y="0">DISEÑO GRÁFICO</tspan></text></g>
              <g class="st21"><text class="st18" transform="translate(421.5 401.22)"><tspan x="0" y="0">IP</tspan></text></g>
            </g>
            <g>
              <text class="st20" transform="translate(13.83 19.51)"><tspan x="0" y="0">ESPECIALIDAD</tspan></text>
              <text class="st20" transform="translate(760.17 24.51)"><tspan x="0" y="0">GRADO</tspan></text>
              <text class="st20" transform="translate(351 24.51)"><tspan x="0" y="0">TIPO DE INSTITUCIÓN</tspan></text>
            </g>
          </g>
          <path class="st14" d="M417.5,465.11c181.25,0,181.25-278.03,362.5-278.03"/>
          <path class="st14" d="M417.5,597.5c181.25,0,181.01-409.79,362.26-409.79"/>
          <path class="st14" d="M417.3,204.25c181.25,0,181.45-27.13,362.7-27.13"/>
          <path class="st14" d="M417.5,319.51c181.25,0,181.25-138.43,362.5-138.43"/>
        </g>
      </g>
    </svg>
    <p style="font-family: 'Georama', sans-serif; font-size: 0.8rem; color: #666; line-height: 1.5; margin-top: 14px; font-style: italic; border-top: 1px dashed #e0e0e0; padding-top: 8px;">
        <strong>* Nota de excepción:</strong> El diagrama refleja de forma estricta la exclusividad legal de las universidades para otorgar Grados Académicos en Chile. Se traza como excepción el programa de continuidad de estudios del IP Duoc UC (Convenio MAVA), el cual, al operar bajo el alero institutional de la Pontificia Universidad Católica de Chile, permite de forma anómala la articulación técnico-profesional directa hacia el grado de Licenciatura y el postgrado.
    </p>`;
    }
}

// ── Gráfico 2: Diagrama de Dispersión ──
const canvasDispersion = document.getElementById("dispersion");
if (canvasDispersion) {
    new Chart(canvasDispersion, {
        type: "scatter",
        data: {
            datasets: [
                {
                    label: "Universidades",
                    backgroundColor: "rgba(71, 168, 238, 0.75)",
                    pointRadius: 6,
                    pointHoverRadius: 8,
                    data: [
                        { name: "DISEÑO EN LA UNIVERSIDAD DE CHILE", x: 10, y: 6486700 },
                        { name: "DISEÑO EN LA PONTIFICIA UNIVERSIDAD CATÓLICA DE CHILE", x: 10, y: 8080000 },
                        { name: "DISEÑO EN LA UNIVERSIDAD DEL DESARROLLO", x: 10, y: 9754692 },
                        { name: "DISEÑO EN LA UNIVERSIDAD FINIS TERRAE", x: 9, y: 7320000 },
                        { name: "DISEÑO EN LA UNIVERSIDAD DIEGO PORTALES", x: 10, y: 7597000 },
                        { name: "DISEÑO EN LA PONTIFICIA UNIVERSIDAD CATÓLICA DE VALPARAÍSO", x: 10, y: 6915000 },
                        { name: "DISEÑO EN LA UNIVERSIDAD DE VALPARAISO", x: 10, y: 5713000 },
                        { name: "DISEÑO EN LA UNIVERSIDAD AUSTRAL DE CHILE", x: 9, y: 5887000 },
                        { name: "DISEÑO EN LA UNIVERSIDAD DE TALCA", x: 10, y: 5887000 },
                        { name: "DISEÑO EN LA UNIVERSIDAD DE LAS AMERICAS", x: 9, y: 4730000 },
                        { name: "DISEÑO EN LA UNIVERSIDAD DE LA SERENA", x: 10, y: 4071000 },
                        { name: "DISEÑO EN INTERIORES Y AMBIENTES EN LA UNIACC", x: 8, y: 4030000 },
                        { name: "DISEÑO EN ANIMACIÓN DIGITAL EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 9, y: 4814000 },
                        { name: "DISEÑO DE JUEGOS DIGITALES EN LA UNIVERSIDAD ANDRES BELLO", x: 8, y: 7136000 },
                        { name: "DISEÑO EN COMUNICACIÓN VISUAL EN LA UTEM", x: 10, y: 4763300 },
                    ],
                },
                {
                    label: "Institutos Profesionales (IP)",
                    backgroundColor: "rgba(248, 34, 200, 0.75)",
                    pointRadius: 6,
                    pointHoverRadius: 8,
                    data: [
                        { name: "DISEÑO GRAFICO EN DUOC UC", x: 8, y: 3610000 },
                        { name: "DISEÑO DE AMBIENTES EN DUOC UC", x: 8, y: 3340000 },
                        { name: "DISEÑO DE VESTUARIO EN DUOC UC", x: 8, y: 3110000 },
                        { name: "DISEÑO INDUSTRIAL E INNOVACION EN PRODUCTOS EN DUOC UC", x: 8, y: 3320000 },
                        { name: "DISEÑO DIGITAL Y WEB EN INACAP", x: 4, y: 2921000 },
                        { name: "DISEÑO DE VESTUARIO MENCION ALTA COSTURA EN AIEP", x: 8, y: 2580000 },
                        { name: "DISEÑO GRAFICO DIGITAL EN IPLACEX", x: 8, y: 2154000 },
                    ],
                },
                {
                    label: "Centros de Formación Técnica (CFT)",
                    backgroundColor: "rgba(91, 206, 180, 0.75)",
                    pointRadius: 6,
                    pointHoverRadius: 8,
                    data: [
                        { name: "DISEÑO Y ANIMACION DIGITAL EN CFT REGION DE COQUIMBO", x: 4, y: 2226604 },
                        { name: "DISEÑO Y MARKETING DIGITAL EN CFT REGION METROPOLITANA", x: 5, y: 2239384 },
                    ],
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 2,
            scales: {
                x: {
                    type: "linear",
                    position: "bottom",
                    min: 2,
                    max: 12,
                    grid: { color: "rgba(0,0,0,0.06)" },
                    ticks: {
                        stepSize: 2,
                        callback: function (value) {
                            return value + " sem.";
                        },
                    },
                },
                y: {
                    grid: { color: "rgba(0,0,0,0.06)" },
                    border: { color: "#bbb", dash: [4, 4] },
                    title: {
                        display: true,
                        text: "Arancel Anual",
                        font: { family: "'Georama', sans-serif", size: 12, weight: "600" },
                        color: "#666",
                    },
                    ticks: {
                        font: { family: "'Georama', sans-serif", size: 11 },
                        color: "#999",
                        callback: function (value) {
                            return "$ " + value.toLocaleString("es-CL");
                        },
                    },
                },
            },
            plugins: {
                legend: {
                    display: true,
                    position: "top",
                    labels: { font: { family: "'Georama', sans-serif", size: 12 }, usePointStyle: true, boxWidth: 8 },
                },
                tooltip: {
                    backgroundColor: "#fff",
                    borderColor: "#ddd",
                    borderWidth: 1,
                    titleColor: "#111",
                    bodyColor: "#555",
                    titleFont: { family: "'Georama', sans-serif", size: 12, weight: "600" },
                    bodyFont: { family: "'Georama', sans-serif", size: 11 },
                    padding: 10,
                    callbacks: {
                        title: function (context) {
                            return context[0].raw.name;
                        },
                        label: function (context) {
                            const point = context.raw;
                            return [
                                "Tipo de Institución: " + context.dataset.label,
                                "Duración Formal: " + point.x + " semestres",
                                "Arancel Anual: $ " + point.y.toLocaleString("es-CL"),
                            ];
                        },
                    },
                },
            },
        },
    });
}

// ── Gráfico 3: Gráfico de Burbujas ──
function inicializarGraficoBurbujas() {
    const elCanvas = document.getElementById("graficoBurbujas");
    if (!elCanvas) return;

    const ctxBurbujas = elCanvas.getContext("2d");

    const carrerasUniversidades = [
        { x: 1095, y: 50, r: Math.sqrt(1095) * 1.2, name: "DISEÑO", vacantes: 1095 },
        { x: 280, y: 75, r: Math.sqrt(280) * 1.2, name: "DISEÑO GRAFICO", vacantes: 280 },
        { x: 250, y: 25, r: Math.sqrt(250) * 1.2, name: "DISEÑO INDUSTRIAL", vacantes: 250 },
        { x: 195, y: 60, r: Math.sqrt(195) * 1.2, name: "DISEÑO EN COMUNICACION VISUAL", vacantes: 195 },
        { x: 115, y: 40, r: Math.sqrt(115) * 1.2, name: "DISEÑO EN ANIMACION DIGITAL", vacantes: 115 },
        { x: 95, y: 85, r: Math.sqrt(95) * 1.2, name: "DISEÑO DE JUEGOS DIGITALES", vacantes: 95 },
        { x: 80, y: 15, r: Math.sqrt(80) * 1.2, name: "DISEÑO DE VESTUARIO Y TEXTIL", vacantes: 80 },
        { x: 75, y: 70, r: Math.sqrt(75) * 1.2, name: "INGENIERIA EN DISEÑO DE PRODUCTOS", vacantes: 75 },
        { x: 60, y: 30, r: Math.sqrt(60) * 1.2, name: "DISEÑO DE VIDEOJUEGOS", vacantes: 60 },
        { x: 55, y: 55, r: Math.sqrt(55) * 1.2, name: "DISEÑO MULTIMEDIA", vacantes: 55 },
        {
            x: 55,
            y: 20,
            r: Math.sqrt(55) * 1.2,
            name: "INGENIERIA EN REALIDAD VIRTUAL Y DISEÑO DE JUEGOS DIGITALES",
            vacantes: 55,
        },
        { x: 50, y: 80, r: Math.sqrt(50) * 1.2, name: "DISEÑO GRAFICO ESPECIALIDAD MULTIMEDIA", vacantes: 50 },
        { x: 50, y: 45, r: Math.sqrt(50) * 1.2, name: "DISEÑO EN INTERACCION DIGITAL", vacantes: 50 },
        { x: 50, y: 10, r: Math.sqrt(50) * 1.2, name: "DISEÑO GRAFICO MENCION DISEÑO ESTRATEGICO", vacantes: 50 },
        { x: 45, y: 65, r: Math.sqrt(45) * 1.2, name: "DISEÑO TEATRAL", vacantes: 45 },
        { x: 45, y: 35, r: Math.sqrt(45) * 1.2, name: "DISEÑO DE EXPERIENCIAS INMERSIVAS Y VIDEOJUEGOS", vacantes: 45 },
        { x: 45, y: 90, r: Math.sqrt(45) * 1.2, name: "BACHILLERATO EN ARTES, ARQUITECTURA Y DISEÑO", vacantes: 45 },
        { x: 40, y: 28, r: Math.sqrt(40) * 1.2, name: "DISEÑO DE INTERIORES Y AMBIENTES", vacantes: 40 },
        { x: 40, y: 72, r: Math.sqrt(40) * 1.2, name: "DISEÑO EN MARKETING DIGITAL", vacantes: 40 },
        { x: 40, y: 52, r: Math.sqrt(40) * 1.2, name: "INGENIERIA EN FABRICACION Y DISEÑO INDUSTRIAL", vacantes: 40 },
        {
            x: 35,
            y: 18,
            r: Math.sqrt(35) * 1.2,
            name: "COMUNICACION DIGITAL ESPECIALIDAD DISEÑO Y DESARROLLO DE VIDEOJUEGOS",
            vacantes: 35,
        },
        { x: 35, y: 82, r: Math.sqrt(35) * 1.2, name: "DISEÑO DE MODA Y MANAGEMENT", vacantes: 35 },
        { x: 35, y: 42, r: Math.sqrt(35) * 1.2, name: "DISEÑO MENCION INDUSTRIAL/GRAFICO/AMBIENTES", vacantes: 35 },
        { x: 30, y: 58, r: Math.sqrt(30) * 1.2, name: "DISEÑO DE IMAGEN ESPECIALIDAD MODA", vacantes: 30 },
        { x: 25, y: 12, r: Math.sqrt(25) * 1.2, name: "BACHILLERATO EN DISEÑO", vacantes: 25 },
        { x: 20, y: 88, r: Math.sqrt(20) * 1.2, name: "INGENIERIA EN DISEÑO", vacantes: 20 },
    ];

    const carrerasIPCFT = [
        { x: 2215, y: 50, r: Math.sqrt(2215) * 1.2, name: "DISEÑO GRAFICO", vacantes: 2215 },
        { x: 1640, y: 30, r: Math.sqrt(1640) * 1.2, name: "TECNICO EN DISEÑO GRAFICO", vacantes: 1640 },
        { x: 1125, y: 70, r: Math.sqrt(1125) * 1.2, name: "DISEÑO DIGITAL PROFESIONAL", vacantes: 1125 },
        { x: 845, y: 20, r: Math.sqrt(845) * 1.2, name: "TECNICO EN DISEÑO DE VESTUARIO", vacantes: 845 },
        { x: 640, y: 80, r: Math.sqrt(640) * 1.2, name: "DISEÑO DIGITAL Y WEB", vacantes: 640 },
        { x: 610, y: 45, r: Math.sqrt(610) * 1.2, name: "DISEÑO DE VESTUARIO MENCION ALTA COSTURA", vacantes: 610 },
        { x: 390, y: 15, r: Math.sqrt(390) * 1.2, name: "DISEÑO DE AMBIENTES", vacantes: 390 },
        { x: 270, y: 85, r: Math.sqrt(270) * 1.2, name: "DISEÑO INDUSTRIAL E INNOVACION EN PRODUCTOS", vacantes: 270 },
        { x: 240, y: 60, r: Math.sqrt(240) * 1.2, name: "DISEÑO DE VESTUARIO", vacantes: 240 },
        {
            x: 225,
            y: 35,
            r: Math.sqrt(225) * 1.2,
            name: "TECNICO DE NIVEL SUPERIOR EN DISEÑO Y MARKETING DIGITAL",
            vacantes: 225,
        },
        {
            x: 170,
            y: 75,
            r: Math.sqrt(170) * 1.2,
            name: "TECNICO DE NIVEL SUPERIOR EN DISEÑO Y ANIMACION DIGITAL",
            vacantes: 170,
        },
        { x: 115, y: 10, r: Math.sqrt(115) * 1.2, name: "TECNICO EN DISEÑO DE ESPACIOS Y EQUIPAMIENTO", vacantes: 115 },
        { x: 110, y: 90, r: Math.sqrt(110) * 1.2, name: "DISEÑO GRAFICO DIGITAL", vacantes: 110 },
        { x: 110, y: 25, r: Math.sqrt(110) * 1.2, name: "DISEÑO DE MODA PROFESIONAL", vacantes: 110 },
        { x: 85, y: 65, r: Math.sqrt(85) * 1.2, name: "DESARROLLO Y DISEÑO WEB", vacantes: 85 },
        { x: 70, y: 40, r: Math.sqrt(70) * 1.2, name: "TECNICO EN DISEÑO DE VIDEOJUEGOS", vacantes: 70 },
        {
            x: 45,
            y: 55,
            r: Math.sqrt(45) * 1.2,
            name: "TECNICO DE NIVEL SUPERIOR EN DISEÑO GRAFICO DIGITAL",
            vacantes: 45,
        },
        {
            x: 40,
            y: 22,
            r: Math.sqrt(40) * 1.2,
            name: "TECNICO EN DISEÑO Y CONTENIDO PARA PLATAFORMAS DIGITALES",
            vacantes: 40,
        },
    ];

    new Chart(ctxBurbujas, {
        type: "bubble",
        data: {
            datasets: [
                {
                    label: "Universidades",
                    data: carrerasUniversidades,
                    backgroundColor: "rgba(71, 168, 238, 0.65)",
                    borderColor: "rgb(71, 168, 238)",
                    borderWidth: 1.5,
                },
                {
                    label: "IP y CFT",
                    data: carrerasIPCFT,
                    backgroundColor: "rgba(248, 34, 200, 0.65)",
                    borderColor: "rgb(248, 34, 200)",
                    borderWidth: 1.5,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    type: "linear",
                    position: "bottom",
                    title: {
                        display: true,
                        text: "Total Vacantes Anuales Ofrecidas (Semestre 1 + Semestre 2)",
                        font: { family: "'Georama', sans-serif", size: 13, weight: "600" },
                        color: "#404040",
                    },
                    ticks: { font: { family: "'Georama', sans-serif" } },
                    grid: { color: "#eaeaea" },
                },
                y: {
                    type: "linear",
                    min: 0,
                    max: 100,
                    display: false,
                    grid: { display: false },
                },
            },
            plugins: {
                legend: {
                    display: true,
                    position: "top",
                    labels: {
                        font: { family: "'Georama', sans-serif", size: 12, weight: "500" },
                        usePointStyle: true,
                        boxWidth: 10,
                    },
                },
                tooltip: {
                    backgroundColor: "#ffffff",
                    borderColor: "#ccc",
                    borderWidth: 1,
                    titleColor: "#111111",
                    bodyColor: "#444444",
                    titleFont: { family: "'Georama', sans-serif", size: 13, weight: "700" },
                    bodyFont: { family: "'Georama', sans-serif", size: 12 },
                    padding: 12,
                    callbacks: {
                        title: function (context) {
                            return context[0].raw.name;
                        },
                        label: function (context) {
                            const point = context.raw;
                            return [
                                "• Subsistema: " + context.dataset.label,
                                "• Total Vacantes: " + point.vacantes.toLocaleString("es-CL") + " cupos nacionales",
                            ];
                        },
                    },
                },
            },
        },
    });
}

// ── Gráfico 4: Gráfico de Torta ──
function inicializarGraficoTorta() {
    const contenedorTorta = document.getElementById("torta");
    if (contenedorTorta) {
        contenedorTorta.innerHTML = `
    <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 797.77 770.85" style="width: 100%; height: auto; display: block;">
      <defs>
        <style>
          .cls-1, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6 {
            stroke-miterlimit: 10;
            stroke-width: 2px;
          }

          .cls-1, .cls-4 { stroke: #87c6f4; }
          .cls-1, .cls-7 { fill: #87c6f4; }
          .cls-2, .cls-3, .cls-4 { fill: none; }
          .cls-2, .cls-5 { stroke: #fa6fdb; }
          .cls-3, .cls-6 { stroke: #7078a3; }
          .cls-5, .cls-8 { fill: #fa6fdb; }
          .cls-9, .cls-10, .cls-11, .cls-12 { isolation: isolate; }
          .cls-13, .cls-6 { fill: #7078a3; }
          .cls-10 { font-size: 36.64px; }
          .cls-10, .cls-11, .cls-12 {
            fill: #666;
            font-family: Arial-BoldMT, Arial;
            font-weight: 700;
          }
          .cls-11, .cls-12 { font-size: 13.79px; }
          .cls-12 { letter-spacing: -.04em; }
        </style>
      </defs>
      <g>
        <g id="viz">
          <g id="pie">
            <path class="cls-8" d="M384.08,117.7c162.37,0,294,131.63,294,294s-131.63,294-294,294S90.08,574.07,90.08,411.7c0-135.01,91.96-252.67,222.97-285.29l71.03,285.29V117.7h0Z"/>
            <path class="cls-7" d="M313.05,126.41c19.33-4.81,39.11-7.65,59.02-8.46l12.01,293.75-71.03-285.29h0Z"/>
            <path class="cls-13" d="M372.07,117.95c4-.16,8.01-.25,12.01-.25v294l-12.01-293.75Z"/>
          </g>
        </g>
        <polyline class="cls-2" points="525.49 153.89 599.73 79.65 667.65 79.65"/>
        <circle class="cls-5" cx="671.44" cy="80.1" r="6.64"/>
        <circle class="cls-6" cx="500.1" cy="24.79" r="6.64"/>
        <polyline class="cls-3" points="378.08 117.7 428.36 24.79 500.1 24.79"/>
        <polyline class="cls-4" points="335.45 121.76 293.79 80.1 102.63 80.1"/>
        <circle class="cls-1" cx="102.63" cy="80.1" r="6.64"/>
        <g class="cls-9">
          <text class="cls-10" transform="translate(693.88 86.74)"><tspan x="0" y="0">92,2%</tspan></text>
        </g>
        <g class="cls-9">
          <text class="cls-10" transform="translate(516.62 31.43)"><tspan x="0" y="0">1,3%</tspan></text>
        </g>
        <g class="cls-9">
          <text class="cls-10" transform="translate(0 92.6)"><tspan x="0" y="0">6,5%</tspan></text>
        </g>
      </g>
      <g>
        <g class="cls-9">
          <text class="cls-11" transform="translate(106.74 756.49)"><tspan x="0" y="0">Humanidades y</tspan></text>
          <text class="cls-12" transform="translate(208.64 756.49)"><tspan x="0" y="0"> </tspan></text>
          <text class="cls-11" transform="translate(211.95 756.49)"><tspan x="0" y="0">Arte</tspan></text>
        </g>
        <g class="cls-9">
          <text class="cls-11" transform="translate(543.21 748.3)"><tspan x="0" y="0">Ciencias naturales </tspan></text>
          <text class="cls-11" transform="translate(543.21 764.85)"><tspan x="0" y="0">matematicas y estadisticas</tspan></text>
        </g>
        <g class="cls-9">
          <text class="cls-11" transform="translate(319.52 749.12)"><tspan x="0" y="0">Ingenieria industrial y </tspan></text>
          <text class="cls-11" transform="translate(319.52 765.66)"><tspan x="0" y="0">construcción</tspan></text>
        </g>
        <rect class="cls-8" x="61.11" y="736.5" width="32.85" height="32.85"/>
        <rect class="cls-7" x="274.54" y="735.74" width="32.85" height="32.85"/>
        <rect class="cls-13" x="498.23" y="735.74" width="32.85" height="32.85"/>
      </g>
    </svg>`;
    }
}

// ── Buscador ──
const tablaSies = document.querySelector("#tabla-proyectos");
const inputFiltro = document.getElementById("elInputBuscador");
const URL_API = "https://api.myjson.online/v1/records/1a6e6fa8-0b24-408d-a6f9-a4d03d471b23";

if (tablaSies && inputFiltro) {
    fetch(URL_API, {
        method: "GET",
        mode: "cors",
        headers: {
            "X-Requested-With": "XMLHttpRequest",
        },
    })
        .then((respuesta) => {
            if (!respuesta.ok) throw new Error("Error del servidor: " + respuesta.status);
            return respuesta.json();
        })
        .then((objetoJSON) => {
            console.log("Data cruda recibida de MyJSON:", objetoJSON);
            let carreras = null;

            if (Array.isArray(objetoJSON)) {
                carreras = objetoJSON;
            } else if (objetoJSON && objetoJSON.data) {
                carreras = Array.isArray(objetoJSON.data) ? objetoJSON.data : objetoJSON.data.record;
            } else if (objetoJSON && objetoJSON.record) {
                carreras = objetoJSON.record;
            }
            if (!carreras || !Array.isArray(carreras)) {
                throw new Error("Estructura de API desconocida. Revisa la consola.");
            }

            tablaSies.innerHTML = "";

            carreras.forEach((carrera) => {
                const arancelFormateado = Number(carrera.Arancel).toLocaleString("es-CL", {
                    style: "currency",
                    currency: "CLP",
                    minimumFractionDigits: 0,
                });

                const claseFila = carrera.Institución === "UNIVERSIDAD DE CHILE" ? 'class="fila-destacada"' : "";

                tablaSies.innerHTML += `
                    <tr ${claseFila}>
                        <td>${carrera.Institución || "No indicada"}<small>${carrera.Carrera || "No indicada"}</small></td>
                        <td>${carrera.Area || "No aplica"}</td>
                        <td>
                            ${carrera.Semestres || "0"} sem.
                            <small style="display:block; color:rgb(102,102,102); font-size:0.8rem;">${carrera.Grado || "No aplica"}</small>
                        </td>
                        <td>${arancelFormateado}</td>
                        <td>${carrera.Vacantes || "0"} cupos</td>
                    </tr>`;
            });
        })
        .catch((error) => {
            console.error("Error crítico en el buscador:", error);
            tablaSies.innerHTML = `<tr><td colspan="5" style="text-align:center; color:red;">Error de conexión con MyJSON: ${error.message}</td></tr>`;
        });

    function sinAcentos(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    inputFiltro.addEventListener("input", function () { 
        const valor = sinAcentos(this.value.toLowerCase().trim());
        
        document.querySelectorAll("#tabla-proyectos tr").forEach(function (fila) {
            const textoFila = sinAcentos(fila.innerText.toLowerCase());
            
            if (valor === "") {
                fila.style.display = "";
            } else if (textoFila.includes(valor)) {
                fila.style.display = "";
            } else {
                fila.style.display = "none";
            }
        });
    });
}