// Investigation translations for all supported locales
// Type structure matches the Investigation type in seed-data.ts

export interface InvestigationPartie {
  titre: string;
  contenu: string;
}

export interface InvestigationTranslation {
  titre: string;
  sousTitre: string;
  resume: string;
  parties: InvestigationPartie[];
}

export const investigationsTranslations: Record<
  string,
  Record<string, InvestigationTranslation>
> = {
  "attali-minc-architectes-ombre": {
    fr: {
      titre: "Attali & Minc — Les architectes de l'ombre",
      sousTitre: "Connexions avec le réseau étendu Philippe–Juppé–Raffarin–Villepin",
      resume:
        "Jacques Attali et Alain Minc constituent les deux architectes de l'ombre du système politique français contemporain. Sans mandat électif ni fonction officielle, ils ont façonné les carrières de trois présidents de la République et influencé le réseau étudié. Attali est l'architecte direct du couple Macron-Philippe.",
      parties: [
        {
          titre: "Jacques Attali : le faiseur de rois transpartisan",
          contenu: `Polytechnicien, énarque (promotion Robespierre, 1970), ancien auditeur au Conseil d'État. Conseiller spécial de François Mitterrand pendant dix ans (1981-1991). Fondateur et premier président de la BERD (1991-1993). Président de la Commission pour la libération de la croissance française (2007-2010).

La chaîne Attali → Macron → Philippe est documentée et constitue la découverte majeure:

2007: Attali choisit Emmanuel Macron comme rapporteur général adjoint de la Commission. C'est le lancement de la carrière politique de Macron.
2011: Attali présente Macron à François Hollande. Macron est nommé secrétaire général adjoint de l'Élysée (2012), puis ministre de l'Économie (2014).
Mars 2017: Attali suggère à Macron, désormais président élu, de choisir Édouard Philippe comme Premier ministre. Il organise leur rencontre.
Mai 2017: Philippe est nommé Premier ministre.

Attali est l'entremetteur qui a connecté l'écosystème Macron à l'écosystème juppéiste.`,
        },
        {
          titre: "Alain Minc : le conseiller transversal des présidents",
          contenu: `ENA (promotion Léon Blum, 1975, major), Inspection générale des finances. Ancien président du conseil de surveillance du Monde. Président d'AM Conseil.

Les connexions directes avec le réseau étendu:

Minc → Juppé: Minc a publiquement soutenu Alain Juppé à la primaire de la droite 2016.
Minc → Philippe: Via Gilles Boyer (conseiller spécial de Philippe à Matignon), canal documenté par le JDD (2018).
Minc → Macron: Macron s'est trouvé deux mentors dès sa sortie de l'ENA: Alain Minc et Jacques Attali.

Minc est ancien Young Leader de la French-American Foundation. Il partage ce réseau avec Juppé, Philippe et Macron.`,
        },
        {
          titre: "Analyse croisée : agents facilitateurs du système",
          contenu: `Attali et Minc fonctionnent en tandem complémentaire depuis les années 1980. Attali opère depuis la gauche (Mitterrand, Hollande), Minc depuis la droite (Balladur, Sarkozy, Juppé).

En termes de systèmes multi-agents, Attali et Minc ne sont pas des centroïdes mais des agents facilitateurs — des nœuds du graphe qui optimisent leur capacité à connecter des agents entre eux.

La France China Foundation est la structure où Attali et le réseau Philippe-Raffarin se rencontrent formellement. Le Conseil stratégique réunit Jacques Attali, Jean-Pierre Raffarin, Édouard Philippe, Laurent Fabius et Alain Mérieux.

Cette structure réunit un faiseur de rois (Attali), un candidat présidentiel (Philippe), un Monsieur Chine officiel (Raffarin), le président du Conseil constitutionnel (Fabius) et un industriel lié au laboratoire P4 de Wuhan (Mérieux).`,
        },
      ],
    },
    en: {
      titre: "Attali & Minc — The Shadow Architects",
      sousTitre: "Connections within the extended Philippe–Juppé–Raffarin–Villepin network",
      resume:
        "Jacques Attali and Alain Minc are the shadow architects of contemporary French politics. Without electoral mandate or official position, they have shaped the careers of three presidents and influenced the studied network. Attali is the direct architect of the Macron-Philippe partnership.",
      parties: [
        {
          titre: "Jacques Attali: The Kingmaker",
          contenu: `Polytechnician, ENA graduate (Robespierre class, 1970), former Council of State auditor. Special advisor to François Mitterrand for ten years (1981-1991). Founder and first president of the EBRD (1991-1993). President of the Commission for the Liberation of French Growth (2007-2010).

The Attali → Macron → Philippe chain is documented as the major discovery:

2007: Attali selects Emmanuel Macron as deputy rapporteur general of the Commission. This launches Macron's political career.
2011: Attali introduces Macron to François Hollande. Macron is appointed deputy secretary general of the Élysée (2012), then minister of Economy (2014).
March 2017: Attali suggests to the newly elected president Macron that he choose Édouard Philippe as Prime Minister. He arranges their meeting.
May 2017: Philippe is appointed Prime Minister.

Attali is the intermediary who connected the Macron ecosystem to the Juppéist ecosystem.`,
        },
        {
          titre: "Alain Minc: The Transversal Presidential Advisor",
          contenu: `ENA (Léon Blum class, 1975, top of class), General Inspection of Finances. Former chairman of the board of Le Monde. President of AM Conseil.

Direct connections within the extended network:

Minc → Juppé: Minc publicly supported Alain Juppé in the 2016 right-wing primary.
Minc → Philippe: Via Gilles Boyer (special advisor to Philippe at Matignon), a channel documented by Le JDD (2018).
Minc → Macron: Upon leaving ENA, Macron found two mentors: Alain Minc and Jacques Attali.

Minc is a former Young Leader of the French-American Foundation. He shares this network with Juppé, Philippe and Macron.`,
        },
        {
          titre: "Cross-analysis: Facilitator agents of the system",
          contenu: `Attali and Minc have functioned as complementary tandem since the 1980s. Attali operates from the left (Mitterrand, Hollande), Minc from the right (Balladur, Sarkozy, Juppé).

In terms of multi-agent systems, Attali and Minc are not centroïdes but facilitator agents — nodes of the graph that optimize their capacity to connect other agents.

The France China Foundation is the structure where Attali and the Philippe-Raffarin network formally meet. The Strategic Council reunites Jacques Attali, Jean-Pierre Raffarin, Édouard Philippe, Laurent Fabius and Alain Mérieux.

This structure brings together a kingmaker (Attali), a presidential candidate (Philippe), an official China expert (Raffarin), the president of the Constitutional Council (Fabius) and an industrialist linked to the Wuhan P4 laboratory (Mérieux).`,
        },
      ],
    },
    de: {
      titre: "Attali & Minc — Die Schattenarchitekten",
      sousTitre:
        "Verbindungen im erweiterten Netzwerk Philippe–Juppé–Raffarin–Villepin",
      resume:
        "Jacques Attali und Alain Minc sind die Schattenarchitekten der zeitgenössischen französischen Politik. Ohne Wahlmandat oder offizielle Position haben sie die Karrieren dreier Präsidenten geprägt. Attali ist der direkte Architekt der Macron-Philippe-Partnerschaft.",
      parties: [
        {
          titre: "Jacques Attali: Der Königsmacher",
          contenu: `Polytechnicien, ENA-Absolvent (Klasse Robespierre, 1970), ehemaliger Revisionsrat des Staatsrates. Zehn Jahre lang Sonderberater von François Mitterrand (1981-1991). Gründer und erster Präsident der EBRD (1991-1993). Präsident der Kommission zur Befreiung des französischen Wachstums (2007-2010).

Die dokumentierte Attali → Macron → Philippe-Kette:

2007: Attali wählt Emmanuel Macron als stellvertretenden Generalberichterstatter der Kommission. Dies beginnt Macrons politische Karriere.
2011: Attali stellt Macron François Hollande vor. Macron wird zum stellvertretenden Generalsekretär des Élysée ernannt (2012), dann zum Wirtschaftsminister (2014).
März 2017: Attali schlägt dem neugewählten Präsidenten Macron vor, Édouard Philippe zum Premierminister zu wählen. Er arrangiert ihr Treffen.
Mai 2017: Philippe wird zum Premierminister ernannt.

Attali ist der Vermittler, der das Macron-Ökosystem mit dem Juppé-Ökosystem verbunden hat.`,
        },
        {
          titre: "Alain Minc: Der transversale Präsidentenberater",
          contenu: `ENA (Léon-Blum-Klasse, 1975, Jahrgangsbester), Generalinspekteur der Finanzen. Ehemaliger Vorsitzender des Verwaltungsrats von Le Monde. Präsident von AM Conseil.

Direkte Verbindungen im erweiterten Netzwerk:

Minc → Juppé: Minc unterstützte Alain Juppé öffentlich in der Primärwahl der Rechten 2016.
Minc → Philippe: Über Gilles Boyer (Sonderberater von Philippe in Matignon), dokumentiert von Le JDD (2018).
Minc → Macron: Nach dem Verlassen der ENA fand Macron zwei Mentoren: Alain Minc und Jacques Attali.

Minc ist ehemaliger Young Leader der French-American Foundation. Er teilt dieses Netzwerk mit Juppé, Philippe und Macron.`,
        },
        {
          titre: "Querschnittsanalyse: Vermittleragenten des Systems",
          contenu: `Attali und Minc funktionieren seit den 1980er Jahren als komplementäres Tandem. Attali operiert von links (Mitterrand, Hollande), Minc von rechts (Balladur, Sarkozy, Juppé).

Im Sinne von Multi-Agent-Systemen sind Attali und Minc keine Zentroïden, sondern Vermittlelagenten — Knoten des Graphen, die ihre Fähigkeit optimieren, andere Agenten zu verbinden.

Die France China Foundation ist die Struktur, wo sich Attali und das Philippe-Raffarin-Netzwerk formell treffen. Der Strategische Rat vereinigt Jacques Attali, Jean-Pierre Raffarin, Édouard Philippe, Laurent Fabius und Alain Mérieux.

Diese Struktur bringt zusammen einen Königsmacher (Attali), einen Präsidentschaftskandidaten (Philippe), einen offiziellen China-Experten (Raffarin), den Präsidenten des Verfassungsgerichts (Fabius) und einen mit dem Wuhan-P4-Labor verbundenen Industriellen (Mérieux).`,
        },
      ],
    },
    es: {
      titre: "Attali & Minc — Los arquitectos en la sombra",
      sousTitre:
        "Conexiones en la red extendida Philippe–Juppé–Raffarin–Villepin",
      resume:
        "Jacques Attali y Alain Minc son los arquitectos en la sombra de la política francesa contemporánea. Sin mandato electoral ni cargo oficial, han moldeado las carreras de tres presidentes. Attali es el arquitecto directo de la asociación Macron-Philippe.",
      parties: [
        {
          titre: "Jacques Attali: El hacedor de reyes",
          contenu: `Politécnico, graduado de ENA (promoción Robespierre, 1970), antiguo auditor del Consejo de Estado. Asesor especial de François Mitterrand durante diez años (1981-1991). Fundador y primer presidente del BERD (1991-1993). Presidente de la Comisión para la Liberación del Crecimiento Francés (2007-2010).

La cadena documentada Attali → Macron → Philippe:

2007: Attali selecciona a Emmanuel Macron como relator general adjunto de la Comisión. Esto inicia la carrera política de Macron.
2011: Attali presenta a Macron a François Hollande. Macron es designado secretario general adjunto del Élysée (2012), luego ministro de Economía (2014).
Marzo 2017: Attali sugiere al presidente recientemente elegido Macron que elija a Édouard Philippe como Primer Ministro. Organiza su reunión.
Mayo 2017: Philippe es designado Primer Ministro.

Attali es el intermediario que conectó el ecosistema Macron con el ecosistema jupista.`,
        },
        {
          titre: "Alain Minc: El asesor presidencial transversal",
          contenu: `ENA (promoción Léon Blum, 1975, el mejor), Inspección General de Finanzas. Antiguo presidente del consejo de administración de Le Monde. Presidente de AM Conseil.

Conexiones directas con la red extendida:

Minc → Juppé: Minc apoyó públicamente a Alain Juppé en la primaria de la derecha de 2016.
Minc → Philippe: A través de Gilles Boyer (asesor especial de Philippe en Matignon), documentado por Le JDD (2018).
Minc → Macron: Al salir de ENA, Macron encontró dos mentores: Alain Minc y Jacques Attali.

Minc es antiguo Young Leader de la French-American Foundation. Comparte esta red con Juppé, Philippe y Macron.`,
        },
        {
          titre: "Análisis transversal: agentes facilitadores del sistema",
          contenu: `Attali y Minc funcionan como un tándem complementario desde los años 80. Attali opera desde la izquierda (Mitterrand, Hollande), Minc desde la derecha (Balladur, Sarkozy, Juppé).

En términos de sistemas multi-agente, Attali y Minc no son centroïdes sino agentes facilitadores — nodos del gráfico que optimizan su capacidad de conectar a otros agentes.

La France China Foundation es la estructura donde Attali y la red Philippe-Raffarin se reúnen formalmente. El Consejo Estratégico reúne a Jacques Attali, Jean-Pierre Raffarin, Édouard Philippe, Laurent Fabius y Alain Mérieux.

Esta estructura reúne a un hacedor de reyes (Attali), un candidato presidencial (Philippe), un experto oficial en China (Raffarin), el presidente del Consejo Constitucional (Fabius) y un industrial vinculado al laboratorio Wuhan P4 (Mérieux).`,
        },
      ],
    },
    ru: {
      titre: "Аттали и Минк — архитекторы в тени",
      sousTitre:
        "Связи в расширенной сети Филипп–Жюппе–Раффарен–Вильпен",
      resume:
        "Жак Аттали и Ален Минк - теневые архитекторы современной французской политики. Без избирательного мандата или официальной должности они сформировали карьеры трех президентов. Аттали - прямой архитектор партнерства Макрон-Филипп.",
      parties: [
        {
          titre: "Жак Аттали: создатель королей",
          contenu: `Политехник, выпускник ENA (класс Робеспьера, 1970), бывший аудитор Государственного совета. Десять лет спецпомощник Франсуа Миттерана (1981-1991). Основатель и первый президент ЕБРР (1991-1993). Президент Комиссии по освобождению французского роста (2007-2010).

Документированная цепочка Аттали → Макрон → Филипп:

2007: Аттали назначает Эммануэля Макрона заместителем генерального докладчика Комиссии. Это начало политической карьеры Макрона.
2011: Аттали представляет Макрона Франсуа Олланду. Макрон назначен заместителем генсека Елисейского дворца (2012), затем министром экономики (2014).
Март 2017: Аттали предлагает вновь избранному президенту Макрону выбрать Эдуара Филиппа премьер-министром. Организует их встречу.
Май 2017: Филипп назначен премьер-министром.

Аттали - посредник, соединивший экосистему Макрона с экосистемой Жюппе.`,
        },
        {
          titre: "Ален Минк: трансверсальный советник президентов",
          contenu: `ENA (класс Леона Блюма, 1975, первый в классе), Генеральная инспекция финансов. Бывший председатель правления Le Monde. Президент AM Conseil.

Прямые связи в расширенной сети:

Минк → Жюппе: Минк открыто поддерживал Алена Жюппе на праймериз правых 2016.
Минк → Филипп: Через Жиля Бойе (спецсоветник Филиппа в Матиньоне), задокументировано Le JDD (2018).
Минк → Макрон: После выхода из ENA Макрон нашел двух наставников: Алена Минка и Жака Аттали.

Минк - бывший Young Leader French-American Foundation. Он разделяет эту сеть с Жюппе, Филиппом и Макроном.`,
        },
        {
          titre: "Кросс-анализ: агенты-посредники системы",
          contenu: `Аттали и Минк функционируют как дополняющий тандем с 1980-х годов. Аттали действует слева (Миттеран, Олланд), Минк справа (Балладу, Саркози, Жюппе).

С точки зрения многоагентных систем, Аттали и Минк не центроиды, а агенты-посредники - узлы графика, оптимизирующие способность связывать других агентов.

France China Foundation - структура, где Аттали и сеть Филипп-Раффарена формально встречаются. Стратегический совет объединяет Жака Аттали, Жан-Пьера Раффарена, Эдуара Филиппа, Лорана Фабиуса и Алена Мерье.

Эта структура объединяет создателя королей (Аттали), кандидата в президенты (Филипп), официального эксперта по Китаю (Раффарен), президента Конституционного совета (Фабиус) и промышленника, связанного с лабораторией Wuhan P4 (Мерье).`,
        },
      ],
    },
    ja: {
      titre: "アッタリとミンク — 影の建築家",
      sousTitre: "フィリップ–ジュペ–ラファラン–ヴィルパン拡張ネットワークの接続",
      resume:
        "ジャック・アッタリとアラン・ミンクは、現代フランス政治の影の建築家です。選挙委任や公式の地位がない中で、3人の大統領のキャリアを形成しました。アッタリはマクロン-フィリップ連携の直接の建築家です。",
      parties: [
        {
          titre: "ジャック・アッタリ：王の製造者",
          contenu: `ポリテクニック、ENA卒業（ロベスピエール級、1970年）、フランス国家評議会の元監査官。フランソワ・ミッテラン大統領の特別顧問10年間（1981-1991）。欧州復興開発銀行（EBRD）創立者兼初代総裁（1991-1993）。フランス経済成長解放委員会会長（2007-2010）。

文書化されたアッタリ→マクロン→フィリップの連鎖：

2007年：アッタリはエマニュエル・マクロンを委員会の副事務総長として選定。これはマクロンの政治キャリアの開始。
2011年：アッタリはマクロンをフランソワ・オランドに紹介。マクロンはエリゼ宮副事務総長（2012年）、その後経済大臣（2014年）に任命。
2017年3月：アッタリは新選出大統領マクロンにエドゥアール・フィリップを首相に選ぶよう提案。彼は彼らの会合を手配。
2017年5月：フィリップは首相に任命。

アッタリはマクロン・エコシステムをジュペ・エコシステムに接続した仲介者です。`,
        },
        {
          titre: "アラン・ミンク：大統領の横断的顧問",
          contenu: `ENA（レオン・ブルム級、1975年、首席）、財政総監察。ル・モンド新聞理事会元会長。AM Conseil会長。

拡張ネットワークとの直接的な接続：

ミンク→ジュペ：ミンクは2016年右派予備選でアラン・ジュペを公然と支持。
ミンク→フィリップ：ジル・ボイヤー（マティニョンのフィリップの特別顧問）を通じて、ル・ジェー・ディー（2018年）に文書化。
ミンク→マクロン：ENA卒業後、マクロンは2人の指導者を見つけ：アラン・ミンクとジャック・アッタリ。

ミンクはフランス米国財団の元Young Leader。彼はジュペ、フィリップ、マクロンとこのネットワークを共有。`,
        },
        {
          titre: "横断分析：システムの促進剤エージェント",
          contenu: `アッタリとミンクは1980年代から補完的なタンデムとして機能。アッタリは左側（ミッテラン、オランド）から操作し、ミンクは右側（バラデュール、サルコジ、ジュペ）から操作。

マルチエージェント・システムの観点から、アッタリとミンクはセントロイドではなく促進剤エージェント —他のエージェントを接続する能力を最適化するグラフのノード。

フランス・チャイナ・ファウンデーション（FCF）はアッタリとフィリップ-ラファラン・ネットワークが形式的に出会う構造。戦略評議会はジャック・アッタリ、ジャン=ピエール・ラファラン、エドゥアール・フィリップ、ローラン・ファビウス、アラン・メリューを結集。

この構造は王製造者（アッタリ）、大統領候補（フィリップ）、公式のチャイナ専門家（ラファラン）、憲法評議会会長（ファビウス）、武漢P4ラボ関連の実業家（メリュー）を結集。`,
        },
      ],
    },
    it: {
      titre: "Attali e Minc — Gli architetti dell'ombra",
      sousTitre: "Connessioni nella rete estesa Philippe–Juppé–Raffarin–Villepin",
      resume:
        "Jacques Attali e Alain Minc sono gli architetti dell'ombra della politica francese contemporanea. Senza mandato elettorale o carica ufficiale, hanno plasmato le carriere di tre presidenti. Attali è l'architetto diretto della partnership Macron-Philippe.",
      parties: [
        {
          titre: "Jacques Attali: Il creatore di re",
          contenu: `Politecnico, laureato ENA (classe Robespierre, 1970), ex revisore della Corte dei conti. Consigliere speciale di François Mitterrand per dieci anni (1981-1991). Fondatore e primo presidente della BERS (1991-1993). Presidente della Commissione per la liberazione della crescita francese (2007-2010).

La catena documentata Attali → Macron → Philippe:

2007: Attali seleziona Emmanuel Macron come relatore generale aggiunto della Commissione. Questo lancia la carriera politica di Macron.
2011: Attali presenta Macron a François Hollande. Macron è nominato segretario generale aggiunto dell'Eliseo (2012), poi ministro dell'Economia (2014).
Marzo 2017: Attali suggerisce al presidente neoeletto Macron di scegliere Édouard Philippe come primo ministro. Organizza il loro incontro.
Maggio 2017: Philippe è nominato primo ministro.

Attali è l'intermediario che ha collegato l'ecosistema Macron all'ecosistema juppeista.`,
        },
        {
          titre: "Alain Minc: Il consigliere presidenziale trasversale",
          contenu: `ENA (classe Léon Blum, 1975, il migliore), Ispettore generale delle finanze. Ex presidente del consiglio di amministrazione di Le Monde. Presidente di AM Conseil.

Connessioni dirette con la rete estesa:

Minc → Juppé: Minc ha pubblicamente sostenuto Alain Juppé alle primarie della destra 2016.
Minc → Philippe: Tramite Gilles Boyer (consigliere speciale di Philippe a Matignon), documentato da Le JDD (2018).
Minc → Macron: Uscito da ENA, Macron ha trovato due mentori: Alain Minc e Jacques Attali.

Minc è ex Young Leader della French-American Foundation. Condivide questa rete con Juppé, Philippe e Macron.`,
        },
        {
          titre: "Analisi trasversale: agenti facilitatori del sistema",
          contenu: `Attali e Minc funzionano come tandem complementare dagli anni '80. Attali opera da sinistra (Mitterrand, Hollande), Minc da destra (Balladur, Sarkozy, Juppé).

In termini di sistemi multi-agente, Attali e Minc non sono centroidi ma agenti facilitatori — nodi del grafo che ottimizzano la loro capacità di connettere altri agenti.

La France China Foundation è la struttura dove Attali e la rete Philippe-Raffarin si incontrano formalmente. Il Consiglio strategico riunisce Jacques Attali, Jean-Pierre Raffarin, Édouard Philippe, Laurent Fabius e Alain Mérieux.

Questa struttura riunisce un creatore di re (Attali), un candidato presidenziale (Philippe), un esperto ufficiale di Cina (Raffarin), il presidente della Corte costituzionale (Fabius) e un industriale legato al laboratorio Wuhan P4 (Mérieux).`,
        },
      ],
    },
    zh: {
      titre: "阿塔利与敏克 - 影子建筑师",
      sousTitre: "菲利普-朱佩-拉法兰-维尔潘扩展网络中的联系",
      resume:
        "雅克·阿塔利和阿兰·敏克是当代法国政治制度的两位影子建筑师。没有选举委托，他们塑造了三位总统的职业生涯。阿塔利是马克龙-菲利普伙伴关系的直接建筑师。",
      parties: [
        {
          titre: "雅克·阿塔利：跨党派造王者",
          contenu: `理工学院、国家行政学院（罗伯斯庇尔班级、1970年）、前国务院审计官。弗朗索瓦·密特朗的特别顾问十年（1981-1991）。欧洲复兴开发银行创始人及首任行长（1991-1993）。法国经济增长解放委员会主席（2007-2010）。

阿塔利→马克龙→菲利普的记录链：

2007年：阿塔利选择马克龙担任委员会副总报告员。这开启了马克龙的政治生涯。
2011年：阿塔利将马克龙介绍给弗朗索瓦·奥朗德。马克龙被任命为爱丽舍宫副秘书长（2012年），随后任经济部长（2014年）。
2017年3月：阿塔利建议马克龙选择爱德华·菲利普为总理。他安排了他们的会面。
2017年5月：菲利普被任命为总理。

阿塔利是连接马克龙生态与朱佩生态的媒介。`,
        },
        {
          titre: "阿兰·敏克：总统的跨界顾问",
          contenu: `国家行政学院（列昂·布鲁姆班，1975年，班级第一名）、财政总监察员。前世界报董事会主席。AM Conseil首席执行官。

与扩展网络的直接联系：

敏克→朱佩：敏克在2016年右翼初选中公开支持阿兰·朱佩。
敏克→菲利普：通过吉尔·博耶（菲利普在马蒂尼翁的特别顾问），由《每日日报》记录（2018年）。
敏克→马克龙：离开国家行政学院后，马克龙找到了两位导师：阿兰·敏克和雅克·阿塔利。

敏克是法美基金会的前年轻领袖。他与朱佩、菲利普和马克龙共享这个网络。`,
        },
        {
          titre: "交叉分析：系统的促进剂代理人",
          contenu: `阿塔利和敏克自20世纪80年代以来一直作为互补的搭档运作。阿塔利从左侧运作（密特朗、奥朗德），敏克从右侧运作（巴拉迪、萨科齐、朱佩）。

在多代理系统的术语中，阿塔利和敏克不是中心点而是促进剂代理人——优化其连接其他代理人能力的图表节点。

法国中国基金会是阿塔利和菲利普-拉法兰网络正式会面的结构。战略委员会汇聚雅克·阿塔利、让-皮埃尔·拉法兰、爱德华·菲利普、洛朗·法比乌斯和阿兰·梅里埃。

这一结构汇聚了一位造王者（阿塔利）、一位总统候选人（菲利普）、一位官方中国专家（拉法兰）、宪法委员会主席（法比乌斯）和一位与武汉P4实验室相关的实业家（梅里埃）。`,
        },
      ],
    },
  },
  "uber-files-kohler-triangle-portuaire": {
    fr: {
      titre: "Uber Files & Affaire Kohler - Le triangle portuaire",
      sousTitre: "De la Commission Attali (2007) au Grand Port Maritime du Havre",
      resume:
        "Ce rapport approfondit deux axes : la chaine Commission Attali - Uber Files - Macron - Philippe, et le triangle portuaire Kohler-Philippe-CMA CGM/MSC au Havre. Kohler a siégé au GPMH aux côtés de Philippe sans déclarer ses liens avec MSC.",
      parties: [
        {
          titre: "De la Commission Attali aux Uber Files : la chaîne de dérégulation",
          contenu: `En juillet 2007, Jacques Attali est chargé par Sarkozy de présider une commission de 42 membres. Emmanuel Macron, inspecteur des finances, est nommé rapporteur général adjoint. Parmi les 316 mesures : la libéralisation des VTC, qui conduit à la loi Novelli (2009).

Quand Macron devient ministre de l'Économie (2014), il met en œuvre ces principes. Les Uber Files (124 000 documents) révèlent : 17 échanges documentés entre Uber et le cabinet de Macron, au moins 4 rencontres Macron-Kalanick, un deal caché (Uber renonce à UberPop, l'État réduit la formation VTC de 250h à 7h), des amendements clé en main rédigés par Uber.

La commission d'enquête parlementaire (2023) conclut à des relations privilégiées et un deal confirmé sous serment.`,
        },
        {
          titre: "Alexis Kohler : le triangle portuaire",
          contenu: `Alexis Kohler, secrétaire général de l'Élysée (2017-2025), est mis en examen en 2022 pour prise illégale d'intérêts et trafic d'influence pour ses conflits d'intérêts avec MSC, fondée par la famille Aponte — cousins de sa mère.

De 2010 à 2012, Kohler siège au GPMH comme représentant de l'APE. Dans la même enceinte : Édouard Philippe (maire depuis octobre 2010) et Antoine Rufenacht (ancien maire, mentor de Philippe). Selon Mediapart, Kohler n'a jamais informé les autres membres de ses liens familiaux avec MSC et ne s'est pas déporté lors des votes concernant MSC.

Le port du Havre est le nœud géostratégique : hub de CMA CGM (3e armateur mondial), client de MSC (2e armateur, famille Kohler), lié à COSCO Shipping (1er armateur chinois), sous la gouvernance politique de Philippe.`,
        },
        {
          titre: "CMA CGM : le nœud multifonctionnel",
          contenu: `En 2023, Rodolphe Saadé (PDG de CMA CGM) rachète BFM TV, RMC et BFM Business à Patrick Drahi. CMA CGM devient simultanément un acteur du transport maritime mondial, un propriétaire de médias nationaux et un partenaire portuaire du maire du Havre.

Yann Le Goff, responsable sécurité régionale de CMA CGM, est Young Leader FAF 2011 dans la même promotion que Philippe.

Le triangle portuaire MSC-CMA CGM-Élysée constitue un nœud de conflits d'intérêts documentés. Kohler est l'agent pivot qui connecte l'écosystème Macron/Élysée à l'écosystème maritime mondial via le port du Havre, où Philippe exerce le pouvoir local.`,
        },
      ],
    },
    en: {
      titre: "Uber Files & Kohler Case - The Port Triangle",
      sousTitre: "From the Attali Commission (2007) to the Port of Le Havre",
      resume:
        "This report deepens two axes: the Attali Commission - Uber Files - Macron - Philippe chain, and the port triangle Kohler-Philippe-CMA CGM/MSC at Le Havre. Kohler sat on the GPMH board alongside Philippe without disclosing his ties to MSC.",
      parties: [
        {
          titre: "From the Attali Commission to Uber Files: The deregulation chain",
          contenu: `In July 2007, Jacques Attali is tasked by Sarkozy to chair a 42-member commission. Emmanuel Macron, finance inspector, is appointed deputy rapporteur general. Among the 316 measures: VTC liberalization, leading to the Novelli law (2009).

When Macron becomes minister of Economy (2014), he implements these principles. The Uber Files (124,000 documents) reveal: 17 documented exchanges between Uber and Macron's office, at least 4 Macron-Kalanick meetings, a hidden deal (Uber renounces UberPop, the State reduces VTC training from 250h to 7h), ready-made amendments drafted by Uber.

The parliamentary investigative commission (2023) concludes privileged relationships and a deal confirmed under oath.`,
        },
        {
          titre: "Alexis Kohler: The port triangle",
          contenu: `Alexis Kohler, secretary general of the Élysée (2017-2025), was indicted in 2022 for illegal conflict of interest and influence peddling for his conflicts with MSC, founded by the Aponte family — cousins of his mother.

From 2010 to 2012, Kohler sits on the GPMH as APE representative. In the same venue: Édouard Philippe (mayor since October 2010) and Antoine Rufenacht (former mayor, Philippe's mentor). According to Mediapart, Kohler never informed other members of his family ties with MSC and never recused himself from MSC-related votes.

The Port of Le Havre is the geostrategic node: hub of CMA CGM (3rd largest shipping company), client of MSC (2nd largest, Kohler family), linked to COSCO Shipping (1st Chinese shipper), under Philippe's political governance.`,
        },
        {
          titre: "CMA CGM: The multifunctional node",
          contenu: `In 2023, Rodolphe Saadé (CMA CGM CEO) acquires BFM TV, RMC and BFM Business from Patrick Drahi. CMA CGM simultaneously becomes a global maritime actor, a national media owner and a port partner of Le Havre's mayor.

Yann Le Goff, CMA CGM's regional security head, is a French-American Foundation Young Leader 2011 in the same cohort as Philippe.

The port triangle MSC-CMA CGM-Élysée constitutes a node of documented conflicts of interest. Kohler is the pivot agent connecting the Macron/Élysée ecosystem to the global maritime ecosystem via Le Havre's port, where Philippe exercises local power.`,
        },
      ],
    },
    de: {
      titre: "Uber Files & Kohler-Fall - Das Hafendreieck",
      sousTitre: "Von der Attali-Kommission (2007) zum Hafen von Le Havre",
      resume:
        "Dieser Bericht vertieft zwei Achsen: die Kette Attali-Kommission - Uber Files - Macron - Philippe und das Hafendreieck Kohler-Philippe-CMA CGM/MSC in Le Havre. Kohler saß im GPMH neben Philippe, ohne seine Verbindungen zu MSC offenzulegen.",
      parties: [
        {
          titre: "Von der Attali-Kommission zu den Uber Files: Die Deregulierungskette",
          contenu: `Im Juli 2007 wird Jacques Attali von Sarkozy beauftragt, eine 42-köpfige Kommission zu leiten. Emmanuel Macron, Finanzinspekteur, wird zum stellvertretenden Generalbericht ernannt. Unter den 316 Maßnahmen: VTC-Liberalisierung, die zum Novelli-Gesetz (2009) führt.

Als Macron 2014 Wirtschaftsminister wird, setzt er diese Grundsätze um. Die Uber Files (124.000 Dokumente) offenbaren: 17 dokumentierte Austausche zwischen Uber und Macrons Büro, mindestens 4 Macron-Kalanick-Treffen, ein versteckter Deal (Uber verzichtet auf UberPop, der Staat reduziert VTC-Training von 250h auf 7h), fertige Änderungen von Uber.

Die parlamentarische Untersuchungskommission (2023) bestätigt privilegierte Beziehungen und einen unter Eid bestätigten Deal.`,
        },
        {
          titre: "Alexis Kohler: Das Hafendreieck",
          contenu: `Alexis Kohler, Generalsekretär des Élysée (2017-2025), wird 2022 wegen illegaler Interessenskonflikte und Einflussnahme angeklagt wegen Konflikten mit MSC, gegründet von der Familie Aponte — Cousins seiner Mutter.

Von 2010 bis 2012 sitzt Kohler im GPMH als APE-Vertreter. Am selben Ort: Édouard Philippe (Bürgermeister seit Oktober 2010) und Antoine Rufenacht (ehemaliger Bürgermeister, Philippes Mentor). Nach Mediapart hat Kohler andere Mitglieder niemals über seine Familienbindungen zu MSC informiert und hat sich bei MSC-bezogenen Abstimmungen nie befangen erklärt.

Der Hafen von Le Havre ist der geostrategische Knotenpunkt: Hub von CMA CGM (3. größtes Schifffahrtsunternehmen), Kunde von MSC (2. größtes, Kohler-Familie), verbunden mit COSCO Shipping (1. chinesischer Reeder), unter Philippes politischer Governance.`,
        },
        {
          titre: "CMA CGM: Der multifunktionale Knoten",
          contenu: `2023 erwirbt Rodolphe Saadé (CMA CGM CEO) BFM TV, RMC und BFM Business von Patrick Drahi. CMA CGM wird gleichzeitig zu einem globalen Schifffahrtsakteur, einem nationalen Medieneigentümer und einem Hafenpartner des Bürgermeisters von Le Havre.

Yann Le Goff, CMA CGMs regionaler Sicherheitsleiter, ist ein French-American Foundation Young Leader 2011 im selben Jahrgang wie Philippe.

Das Hafendreieck MSC-CMA CGM-Élysée stellt einen Knotenpunkt dokumentierter Interessenskonflikte dar. Kohler ist der Pivot-Agent, der das Macron/Élysée-Ökosystem mit dem globalen Schifffahrtsökosystem über Le Havres Hafen verbindet, wo Philippe lokale Macht ausübt.`,
        },
      ],
    },
    es: {
      titre: "Archivos de Uber y Caso Kohler - El triángulo portuario",
      sousTitre: "De la Comisión Attali (2007) al Puerto de Le Havre",
      resume:
        "Este informe profundiza en dos ejes: la cadena Comisión Attali - Archivos de Uber - Macron - Philippe, y el triángulo portuario Kohler-Philippe-CMA CGM/MSC en Le Havre. Kohler se sentó en la junta del GPMH junto a Philippe sin revelar sus vínculos con MSC.",
      parties: [
        {
          titre: "De la Comisión Attali a los Archivos de Uber: la cadena de desregulación",
          contenu: `En julio de 2007, Jacques Attali es encargado por Sarkozy de presidir una comisión de 42 miembros. Emmanuel Macron, inspector de finanzas, es designado rapporteur general adjunto. Entre las 316 medidas: liberalización de VTC, que conduce a la ley Novelli (2009).

Cuando Macron se convierte en ministro de Economía (2014), implementa estos principios. Los Archivos de Uber (124.000 documentos) revelan: 17 intercambios documentados entre Uber y la oficina de Macron, al menos 4 reuniones Macron-Kalanick, un acuerdo oculto (Uber renuncia a UberPop, el Estado reduce la capacitación VTC de 250h a 7h), enmiendas listas hechas por Uber.

La comisión investigadora parlamentaria (2023) concluye relaciones privilegiadas y un acuerdo confirmado bajo juramento.`,
        },
        {
          titre: "Alexis Kohler: el triángulo portuario",
          contenu: `Alexis Kohler, secretario general del Élysée (2017-2025), fue procesado en 2022 por conflicto de intereses ilegal e influencia indebida por sus conflictos con MSC, fundado por la familia Aponte — primos de su madre.

De 2010 a 2012, Kohler se sienta en el GPMH como representante de la APE. En el mismo lugar: Édouard Philippe (alcalde desde octubre de 2010) y Antoine Rufenacht (ex alcalde, mentor de Philippe). Según Mediapart, Kohler nunca informó a otros miembros de sus vínculos familiares con MSC y nunca se abstuvo en votaciones relacionadas con MSC.

El Puerto de Le Havre es el nodo geoestraégico: hub de CMA CGM (3ª empresa naviera más grande), cliente de MSC (2ª más grande, familia Kohler), vinculado a COSCO Shipping (1er naviero chino), bajo la gobernanza política de Philippe.`,
        },
        {
          titre: "CMA CGM: El nodo multifuncional",
          contenu: `En 2023, Rodolphe Saadé (CEO de CMA CGM) adquiere BFM TV, RMC y BFM Business de Patrick Drahi. CMA CGM simultáneamente se convierte en un actor naviero global, un propietario de medios nacionales y un socio portuario del alcalde de Le Havre.

Yann Le Goff, jefe de seguridad regional de CMA CGM, es un Young Leader de la French-American Foundation 2011 en la misma cohorte que Philippe.

El triángulo portuario MSC-CMA CGM-Élysée constituye un nodo de conflictos de intereses documentados. Kohler es el agente pivote que conecta el ecosistema Macron/Élysée con el ecosistema naviero global a través del puerto de Le Havre, donde Philippe ejerce el poder local.`,
        },
      ],
    },
    ru: {
      titre: "Архивы Uber и дело Колера - портовый треугольник",
      sousTitre: "От комиссии Аттали (2007) к порту Ле-Авр",
      resume:
        "Этот отчет углубляет две оси: цепь комиссия Аттали - архивы Uber - Макрон - Филипп и портовый треугольник Колер-Филипп-CMA CGM/MSC в Ле-Авре. Колер заседал в совете ГПМШ рядом с Филиппом, не раскрыв свои связи с MSC.",
      parties: [
        {
          titre: "От комиссии Аттали к архивам Uber: цепь дерегулирования",
          contenu: `В июле 2007 года Жак Аттали поручен Саркози возглавить комиссию из 42 членов. Эмманюэль Макрон, инспектор финансов, назначен заместителем генерального докладчика. Среди 316 мер: либерализация VTC, приводящая к закону Новелли (2009).

Когда Макрон становится министром экономики (2014), он реализует эти принципы. Архивы Uber (124.000 документов) раскрывают: 17 задокументированных обменов между Uber и офисом Макрона, не менее 4 встреч Макрон-Каланик, скрытый сговор (Uber отказывается от UberPop, государство сокращает обучение VTC с 250 часов на 7), готовые поправки, написанные Uber.

Парламентская комиссия по расследованию (2023) делает вывод о привилегированных отношениях и сговоре, подтвержденном под присягой.`,
        },
        {
          titre: "Алексис Колер: портовый треугольник",
          contenu: `Алексис Колер, генеральный секретарь Елисейского дворца (2017-2025), был допрошен в 2022 году за незаконный конфликт интересов и злоупотребление влиянием за его конфликты с MSC, основанной семьей Апонте — двоюродными братьями его матери.

С 2010 по 2012 год Колер работает в совете ГПМШ как представитель АПЭ. В том же месте: Эдуар Филипп (мэр с октября 2010 года) и Антуан Руфенахт (бывший мэр, наставник Филиппа). По данным Mediapart, Колер никогда не информировал других членов о своих семейных связях с MSC и никогда не отклонял голоса по вопросам, связанным с MSC.

Порт Ле-Авра является геостратегическим узлом: хаб CMA CGM (3-я по величине судоходная компания), клиент MSC (2-я по величине, семья Колер), связанный с COSCO Shipping (1-я китайская судоходная компания), под политическим контролем Филиппа.`,
        },
        {
          titre: "CMA CGM: многофункциональный узел",
          contenu: `В 2023 году Родолф Саадэ (генеральный директор CMA CGM) приобретает BFM TV, RMC и BFM Business у Патрика Драи. CMA CGM одновременно становится глобальным судоходным актором, национальным медиаоператором и портовым партнером мэра Ле-Авра.

Ян Ле Гоф, региональный директор по безопасности CMA CGM, является Young Leader French-American Foundation 2011 в том же потоке, что и Филипп.

Портовый треугольник MSC-CMA CGM-Елисейский дворец представляет собой узел задокументированных конфликтов интересов. Колер является поворотным агентом, соединяющим экосистему Макрона/Елисейского дворца с глобальной судоходной экосистемой через порт Ле-Авра, где Филипп осуществляет местную власть.`,
        },
      ],
    },
    ja: {
      titre: "ウーバー・ファイルズとコーラー事件 - 港湾三角形",
      sousTitre: "アッタリ委員会（2007年）からル・アーブル港まで",
      resume:
        "本レポートは2つの軸を深掘りします：アッタリ委員会 - ウーバーファイルズ - マクロン - フィリップの連鎖、およびル・アーブルでのコーラー-フィリップ-CMA CGM/MSC港湾三角形です。コーラーはフィリップの隣のGPMH理事会に座っていましたが、MSCとの関係を公開していません。",
      parties: [
        {
          titre: "アッタリ委員会からウーバーファイルズへ：規制緩和の連鎖",
          contenu: `2007年7月、ジャック・アッタリはサルコジに42名の委員会を議長するよう指示されます。財政検査官エマニュエル・マクロンが副報告者総長に任命されます。316の措置の中で：VTC自由化は、ノヴェッリ法（2009）につながります。

2014年にマクロンが経済大臣になると、これらの原則を実行します。ウーバーファイルズ（124,000ドキュメント）は以下を明かします：ウーバーとマクロン事務所間の17の文書化された交換、少なくとも4回のマクロン-カラニック会議、隠されたディール（ウーバーはUberPopを放棄、国家はVTC訓練を250時間から7時間に短縮）、ウーバーが作成した既製の修正案。

議会調査委員会（2023）は特別な関係と宣誓下で確認された取引を結論付けます。`,
        },
        {
          titre: "アレクシス・コーラー：港湾三角形",
          contenu: `アレクシス・コーラー、エリゼ宮事務総長（2017-2025）は、彼の母親の従兄弟であるアポンテ一族によって設立されたMSCとの利益相反について2022年に起訴されます。

2010年から2012年まで、コーラーはAPE代表としてGPMHに座ります。同じ場所で：エドゥアール・フィリップ（2010年10月以来の市長）とアントワーヌ・ルフェナハト（元市長、フィリップのメンター）。メディアパートによれば、コーラーはMSCとの家族関係について他のメンバーに知らせたことがなく、MSC関連の投票で身を引いたことがありません。

ル・アーブル港は地政学的ノード：CMA CGM（3番目に大きい海運会社）のハブ、MSC（2番目に大きい、コーラー一族）のクライアント、COSCO Shipping（1番目の中国海運会社）とリンク、フィリップの政治的ガバナンスの下。`,
        },
        {
          titre: "CMA CGM：多機能ノード",
          contenu: `2023年、ロドルフ・サアデ（CMA CGM最高経営責任者）がパトリック・ドライからBFM TV、RMC、BFM Businessを買収します。CMA CGMは同時にグローバル海運企業、国家メディア所有者、ル・アーブル市長の港湾パートナーになります。

ヤン・ルゴフ、CMA CGM地域セキュリティ責任者は、フィリップと同じコーホートの2011年フランス米国基金ヤングリーダーです。

MSC-CMA CGM-エリゼ宮の港湾三角形は文書化された利益相反のノードを構成します。コーラーはマクロン/エリゼ宮エコシステムをル・アーブル港経由でグローバル海運エコシステムに接続するピボットエージェントです。そこでフィリップは地方権力を行使しています。`,
        },
      ],
    },
    it: {
      titre: "File Uber e Caso Kohler - Il triangolo portuale",
      sousTitre: "Dalla Commissione Attali (2007) al Porto di Le Havre",
      resume:
        "Questo rapporto approfondisce due assi: la catena Commissione Attali - File Uber - Macron - Philippe, e il triangolo portuale Kohler-Philippe-CMA CGM/MSC a Le Havre. Kohler si sedeva nel consiglio GPMH accanto a Philippe senza rivelare i suoi legami con MSC.",
      parties: [
        {
          titre: "Dalla Commissione Attali ai File Uber: la catena della deregolamentazione",
          contenu: `Nel luglio 2007, Jacques Attali è incaricato da Sarkozy di presiedere una commissione di 42 membri. Emmanuel Macron, ispettore finanziario, è designato rapporteur generale aggiunto. Tra le 316 misure: liberalizzazione VTC, che porta alla legge Novelli (2009).

Quando Macron diventa ministro dell'Economia (2014), implementa questi principi. I File Uber (124.000 documenti) rivelano: 17 scambi documentati tra Uber e l'ufficio di Macron, almeno 4 incontri Macron-Kalanick, un accordo nascosto (Uber rinuncia a UberPop, lo Stato riduce la formazione VTC da 250 ore a 7 ore), emendamenti pronti redatti da Uber.

La commissione d'inchiesta parlamentare (2023) conclude su relazioni privilegiate e un accordo confermato sotto giuramento.`,
        },
        {
          titre: "Alexis Kohler: il triangolo portuale",
          contenu: `Alexis Kohler, segretario generale dell'Eliseo (2017-2025), è stato incriminato nel 2022 per conflitto di interessi illegale e abuso di influenza per i suoi conflitti con MSC, fondata dalla famiglia Aponte — cugini di sua madre.

Dal 2010 al 2012, Kohler siede nel GPMH come rappresentante dell'APE. Nello stesso luogo: Édouard Philippe (sindaco dal ottobre 2010) e Antoine Rufenacht (ex sindaco, mentore di Philippe). Secondo Mediapart, Kohler non ha mai informato altri membri dei suoi legami familiari con MSC e non si è mai astain dai voti relativi a MSC.

Il Porto di Le Havre è il nodo geopolitico: hub di CMA CGM (3ª compagnia navale più grande), cliente di MSC (2ª più grande, famiglia Kohler), collegato a COSCO Shipping (1ª armatore cinese), sotto la governance politica di Philippe.`,
        },
        {
          titre: "CMA CGM: il nodo multifunzionale",
          contenu: `Nel 2023, Rodolphe Saadé (CEO di CMA CGM) acquisisce BFM TV, RMC e BFM Business da Patrick Drahi. CMA CGM contemporaneamente diventa un attore navale globale, un proprietario di media nazionale e un partner portuale del sindaco di Le Havre.

Yann Le Goff, capo della sicurezza regionale di CMA CGM, è un Young Leader della French-American Foundation 2011 nella stessa coorte di Philippe.

Il triangolo portuale MSC-CMA CGM-Eliseo costituisce un nodo di conflitti di interessi documentati. Kohler è l'agente perno che collega l'ecosistema Macron/Eliseo all'ecosistema navale globale tramite il porto di Le Havre, dove Philippe esercita il potere locale.`,
        },
      ],
    },
    zh: {
      titre: "优步文件与科勒案件 - 港口三角形",
      sousTitre: "从阿塔利委员会（2007年）到勒阿弗尔港",
      resume:
        "本报告深化了两个轴线：阿塔利委员会-优步文件-马克龙-菲利普链条，以及勒阿弗尔的科勒-菲利普-达飞轮船/美西航运港口三角形。科勒在全球港口管理委员会董事会中与菲利普坐在一起，但没有披露其与美西航运的联系。",
      parties: [
        {
          titre: "从阿塔利委员会到优步文件：管制放松链条",
          contenu: `2007年7月，雅克·阿塔利被萨科齐任命主持一个42人的委员会。财政检查官伊曼纽尔·马克龙被任命为副总报告员。在316项措施中：VTC自由化，导致诺维利法（2009）。

当马克龙在2014年成为经济部长时，他实施了这些原则。优步文件（124,000份文件）揭示：优步与马克龙办公室之间的17次书面交换，至少4次马克龙-卡拉尼克会议，一项隐藏的交易（优步放弃优步X，国家将VTC培训从250小时减少到7小时），优步起草的现成修正案。

议会调查委员会（2023）得出特殊关系和宣誓下确认的交易的结论。`,
        },
        {
          titre: "阿列克谢·科勒：港口三角形",
          contenu: `阿列克谢·科勒，爱丽舍宫秘书长（2017-2025）因与美西航运的利益冲突而于2022年被控违法利益冲突和滥用权力，美西航运由阿蓬特家族创立——他母亲的表亲。

从2010年到2012年，科勒作为APE代表在全球港口管理委员会任职。在同一地点：爱德华·菲利普（自2010年10月起的市长）和安托万·鲁费纳赫特（前市长，菲利普的导师）。根据媒体报道，科勒从未向其他成员知会其与美西航运的家族关系，也从未在美西航运相关投票中回避。

勒阿弗尔港是地缘战略枢纽：达飞轮船（全球第三大航运公司）的枢纽、美西航运（第二大，科勒家族）的客户、与中远海运（第一大中国航运公司）相关，处于菲利普的政治治理之下。`,
        },
        {
          titre: "达飞轮船：多功能节点",
          contenu: `2023年，达飞轮船首席执行官鲁道夫·萨代从帕特里克·德拉希手中收购BFM电视、RMC和BFM商业频道。达飞轮船同时成为全球航运公司、国家媒体所有者和勒阿弗尔市长的港口合作伙伴。

达飞轮船地区安全负责人扬·勒戈夫是2011年法美基金会青年领袖，与菲利普属于同一届。

美西航运-达飞轮船-爱丽舍宫港口三角形构成了文件记录的利益冲突的节点。科勒是支点代理，通过勒阿弗尔港将马克龙/爱丽舍宫生态系统与全球航运生态系统连接起来，菲利普在该港口行使地方权力。`,
        },
      ],
    },
  },
};

/**
 * Get investigation translation for a specific locale
 * Falls back to French if locale not available
 */
export function getInvestigationTranslation(
  slug: string,
  locale: string
): InvestigationTranslation | null {
  const investigation = investigationsTranslations[slug];
  if (!investigation) return null;

  return investigation[locale] || investigation["fr"] || null;
}
