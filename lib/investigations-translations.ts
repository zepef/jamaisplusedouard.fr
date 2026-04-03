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
  "bilderberg-philippe-attal": {
    fr: {
      titre: "Le réseau Bilderberg — Philippe, Attal et le cénacle transatlantique",
      sousTitre: "Henri de Castries : le pont entre Bilderberg et la France China Foundation",
      resume:
        "Le groupe Bilderberg réunit chaque année 120 à 140 dirigeants sous la règle de Chatham House. Henri de Castries, président du comité depuis 2012, est simultanément au CS de la FCF — pont unique entre réseau transatlantique et sino-français. Philippe y a participé quatre fois, Attal deux, Macron une. Les trois ont été promus dans les mois suivant leur première participation.",
      parties: [
        {
          titre: "Chronologie des participations Bilderberg",
          contenu: `Philippe : quatre participations confirmées (2016, 2023, 2024, 2025). Nommé Premier ministre onze mois après sa première participation en 2016.

Attal : invité à Lisbonne en 2023 (ministre des Comptes publics), nommé PM sept mois plus tard. Présent à Stockholm en 2025 comme ancien PM. En 2025, les deux anciens PM macronistes sont présents ensemble, aux côtés de Nicolas Roche (SGDSN).

Macron : participe en 2014 (SG adjoint Élysée), nommé ministre de l'Économie deux mois plus tard.

Le pattern « promotion post-Bilderberg » ne démontre pas une causalité, mais révèle que le comité de sélection (présidé par de Castries) identifie des personnalités à fort potentiel d'ascension avant que leur promotion ne soit publique.`,
        },
        {
          titre: "Henri de Castries : le nœud unique du système",
          contenu: `Ancien PDG d'AXA pendant 16 ans (2000-2016), de Castries cumule des positions sans équivalent : président du comité de direction du Bilderberg depuis 2012, président de l'Institut Montaigne depuis 2015, membre du Conseil stratégique de la FCF, Young Leader FAF à triple sélection (1994, 1995, 1998), condisciple de Villepin à l'ENA (promotion Voltaire, 1980).

Il est le seul individu identifié qui siège simultanément au comité de direction du Bilderberg ET au Conseil stratégique de la FCF. Au sein de la FCF, il retrouve Philippe, Raffarin et Attali. Au Bilderberg, il sélectionne et accueille Philippe, Attal et avait accueilli Macron.

L'écosystème AXA irrigue le Bilderberg français : de Castries (ex-PDG), Buberl (DG actuel) et Gosset-Grainville (président du CA) étaient présents ensemble en 2023. Patricia Barbizet, ex-présidente du Siècle, est le second représentant français permanent au comité directeur.`,
        },
        {
          titre: "Le Bilderberg comme 7ème cercle du réseau Philippe",
          contenu: `Notre cartographie identifiait six cercles d'influence : Juppéie, ENA Marc-Bloch, FAF, FCF, monde des affaires, Horizons. Le Bilderberg constitue un septième cercle, plus discret, caractérisé par : opacité maximale (Chatham House), sélection par le haut (de Castries sélectionne), exclusivité transatlantique (aucune personnalité russe, chinoise, indienne ou africaine invitée).

L'édition 2025 (Stockholm) marque un tournant avec les sujets : relations transatlantiques, axe autoritaire, IA et sécurité nationale. Parmi les participants : le SG de l'OTAN (Rutte), le PDG de Pfizer (Bourla), Peter Thiel et Alex Karp (Palantir), Satya Nadella (Microsoft).

En MAS, de Castries est un « super-facilitateur » qui ne se contente pas de connecter des agents mais sélectionne ceux exposés au réseau transatlantique. En cooptant les futurs dirigeants, il garantit que le prochain occupant de l'Élysée aura été exposé à la vision transatlantique avant d'y accéder.`,
        },
      ],
    },
    en: {
      titre: "The Bilderberg Network — Philippe, Attal and the Transatlantic Conclave",
      sousTitre: "Henri de Castries: the bridge between Bilderberg and the France China Foundation",
      resume:
        "The Bilderberg Group gathers 120 to 140 leaders annually under the Chatham House rule. Henri de Castries, chairman of the steering committee since 2012, simultaneously sits on the FCF Strategic Council — the unique bridge between the transatlantic and Sino-French networks. Philippe attended four times, Attal twice, Macron once. All three were promoted in the months following their first attendance.",
      parties: [
        {
          titre: "Timeline of Bilderberg Attendances",
          contenu: `Philippe: four confirmed attendances (2016, 2023, 2024, 2025). Appointed Prime Minister eleven months after his first participation in 2016.

Attal: invited to Lisbon in 2023 (Minister of Public Accounts), appointed PM seven months later. Present in Stockholm in 2025 as former PM. In 2025, both former Macronist PMs attended together, alongside Nicolas Roche (SGDSN).

Macron: attended in 2014 (deputy Secretary General of the Élysée), appointed Minister of Economy two months later.

The "post-Bilderberg promotion" pattern does not demonstrate causality, but reveals that the selection committee (chaired by de Castries) identifies high-potential individuals before their promotion becomes public.`,
        },
        {
          titre: "Henri de Castries: The System's Unique Node",
          contenu: `Former CEO of AXA for 16 years (2000-2016), de Castries accumulates unrivalled positions: chairman of the Bilderberg steering committee since 2012, president of Institut Montaigne since 2015, member of the FCF Strategic Council, FAF Young Leader with triple selection (1994, 1995, 1998), ENA classmate of Villepin (Voltaire class, 1980).

He is the only identified individual who simultaneously sits on the Bilderberg steering committee AND the FCF Strategic Council. Within the FCF, he meets Philippe, Raffarin and Attali. At Bilderberg, he selects and hosts Philippe, Attal and had hosted Macron.

The AXA ecosystem irrigates French Bilderberg: de Castries (former CEO), Buberl (current CEO) and Gosset-Grainville (chairman of the board) were all present together in 2023. Patricia Barbizet, former president of Le Siècle, is the second permanent French representative on the steering committee.`,
        },
        {
          titre: "Bilderberg as the 7th Circle of the Philippe Network",
          contenu: `Our mapping identified six circles of influence: Juppéie, ENA Marc-Bloch, FAF, FCF, business world, Horizons. Bilderberg constitutes a seventh circle, more discreet, characterised by: maximum opacity (Chatham House), top-down selection (de Castries selects), transatlantic exclusivity (no Russian, Chinese, Indian or African personalities invited).

The 2025 edition (Stockholm) marks a turning point with topics: transatlantic relations, authoritarian axis, AI and national security. Among participants: NATO Secretary General (Rutte), Pfizer CEO (Bourla), Peter Thiel and Alex Karp (Palantir), Satya Nadella (Microsoft).

In MAS terms, de Castries is a "super-facilitator" who not only connects agents but selects those exposed to the transatlantic network. By co-opting future leaders, he ensures that the next occupant of the Élysée will have been exposed to the transatlantic vision before accessing it.`,
        },
      ],
    },
    de: {
      titre: "Das Bilderberg-Netzwerk — Philippe, Attal und das transatlantische Zirkel",
      sousTitre: "Henri de Castries: die Brücke zwischen Bilderberg und der France China Foundation",
      resume:
        "Die Bilderberg-Gruppe versammelt jährlich 120 bis 140 Führungspersönlichkeiten unter der Chatham-House-Regel. Henri de Castries, Vorsitzender des Lenkungsausschusses seit 2012, sitzt gleichzeitig im Strategischen Rat der FCF — die einzigartige Brücke zwischen transatlantischem und sino-französischem Netzwerk. Philippe nahm viermal teil, Attal zweimal, Macron einmal. Alle drei wurden in den Monaten nach ihrer ersten Teilnahme befördert.",
      parties: [
        {
          titre: "Chronologie der Bilderberg-Teilnahmen",
          contenu: `Philippe: vier bestätigte Teilnahmen (2016, 2023, 2024, 2025). Elf Monate nach seiner ersten Teilnahme 2016 zum Premierminister ernannt.

Attal: 2023 nach Lissabon eingeladen (Haushaltstaatsminister), sieben Monate später zum PM ernannt. 2025 in Stockholm als ehemaliger PM anwesend. 2025 sind beide ehemaligen macronistischen PMs gemeinsam anwesend, neben Nicolas Roche (SGDSN).

Macron: nimmt 2014 teil (stellvertretender Generalsekretär des Élysée), zwei Monate später zum Wirtschaftsminister ernannt.

Das Muster „Post-Bilderberg-Beförderung" beweist keine Kausalität, zeigt aber, dass der Auswahlausschuss (unter Vorsitz von de Castries) Persönlichkeiten mit hohem Aufstiegspotenzial identifiziert, bevor ihre Beförderung öffentlich wird.`,
        },
        {
          titre: "Henri de Castries: Der einzigartige Knotenpunkt des Systems",
          contenu: `Ehemaliger Vorstandsvorsitzender von AXA für 16 Jahre (2000-2016), häuft de Castries beispiellose Positionen an: Vorsitzender des Bilderberg-Lenkungsausschusses seit 2012, Präsident des Institut Montaigne seit 2015, Mitglied des FCF-Strategischen Rats, FAF Young Leader mit dreifacher Auswahl (1994, 1995, 1998), ENA-Kommilitone von Villepin (Promotion Voltaire, 1980).

Er ist das einzige identifizierte Individuum, das gleichzeitig im Bilderberg-Lenkungsausschuss UND im FCF-Strategischen Rat sitzt. In der FCF trifft er Philippe, Raffarin und Attali. Bei Bilderberg wählt und empfängt er Philippe, Attal und hatte Macron empfangen.

Das AXA-Ökosystem bewässert das französische Bilderberg: de Castries (ehemaliger CEO), Buberl (aktueller CEO) und Gosset-Grainville (Aufsichtsratsvorsitzender) waren 2023 gemeinsam anwesend. Patricia Barbizet, ehemalige Präsidentin des Siècle, ist die zweite ständige französische Vertreterin im Lenkungsausschuss.`,
        },
        {
          titre: "Bilderberg als 7. Kreis des Philippe-Netzwerks",
          contenu: `Unsere Kartierung identifizierte sechs Einflusskreise: Juppéie, ENA Marc-Bloch, FAF, FCF, Geschäftswelt, Horizons. Bilderberg bildet einen siebten Kreis, diskreter, gekennzeichnet durch: maximale Opazität (Chatham House), Auswahl von oben (de Castries wählt aus), transatlantische Exklusivität (keine russischen, chinesischen, indischen oder afrikanischen Persönlichkeiten eingeladen).

Die Ausgabe 2025 (Stockholm) markiert einen Wendepunkt mit Themen: transatlantische Beziehungen, autoritäre Achse, KI und nationale Sicherheit. Unter den Teilnehmern: NATO-Generalsekretär (Rutte), Pfizer-CEO (Bourla), Peter Thiel und Alex Karp (Palantir), Satya Nadella (Microsoft).

In MAS-Begriffen ist de Castries ein „Super-Vermittler", der nicht nur Agenten verbindet, sondern diejenigen auswählt, die dem transatlantischen Netzwerk ausgesetzt sind. Indem er künftige Führungspersönlichkeiten kooptiert, stellt er sicher, dass der nächste Bewohner des Élysée der transatlantischen Vision ausgesetzt gewesen sein wird, bevor er sie betritt.`,
        },
      ],
    },
    es: {
      titre: "La Red Bilderberg — Philippe, Attal y el Cónclave Transatlántico",
      sousTitre: "Henri de Castries: el puente entre Bilderberg y la France China Foundation",
      resume:
        "El Grupo Bilderberg reúne anualmente entre 120 y 140 líderes bajo la regla de Chatham House. Henri de Castries, presidente del comité directivo desde 2012, forma parte simultáneamente del Consejo Estratégico de la FCF — el puente único entre la red transatlántica y la sino-francesa. Philippe participó cuatro veces, Attal dos, Macron una. Los tres fueron promovidos en los meses siguientes a su primera participación.",
      parties: [
        {
          titre: "Cronología de las participaciones en Bilderberg",
          contenu: `Philippe: cuatro participaciones confirmadas (2016, 2023, 2024, 2025). Nombrado Primer Ministro once meses después de su primera participación en 2016.

Attal: invitado a Lisboa en 2023 (ministro de Cuentas Públicas), nombrado PM siete meses después. Presente en Estocolmo en 2025 como ex-PM. En 2025, los dos ex-PMs macronistas están presentes juntos, junto a Nicolas Roche (SGDSN).

Macron: participa en 2014 (secretario general adjunto del Élysée), nombrado ministro de Economía dos meses después.

El patrón "promoción post-Bilderberg" no demuestra causalidad, pero revela que el comité de selección (presidido por de Castries) identifica personalidades con alto potencial de ascenso antes de que su promoción sea pública.`,
        },
        {
          titre: "Henri de Castries: El nudo único del sistema",
          contenu: `Antiguo CEO de AXA durante 16 años (2000-2016), de Castries acumula posiciones sin equivalente: presidente del comité directivo de Bilderberg desde 2012, presidente del Institut Montaigne desde 2015, miembro del Consejo Estratégico de la FCF, Young Leader FAF con triple selección (1994, 1995, 1998), condiscípulo de Villepin en la ENA (promoción Voltaire, 1980).

Es el único individuo identificado que ocupa simultáneamente el comité directivo de Bilderberg Y el Consejo Estratégico de la FCF. En la FCF, se reencuentra con Philippe, Raffarin y Attali. En Bilderberg, selecciona y recibe a Philippe, Attal y había recibido a Macron.

El ecosistema AXA irriga el Bilderberg francés: de Castries (ex-CEO), Buberl (CEO actual) y Gosset-Grainville (presidente del CA) estuvieron presentes juntos en 2023. Patricia Barbizet, ex-presidenta del Siècle, es la segunda representante francesa permanente en el comité directivo.`,
        },
        {
          titre: "Bilderberg como 7º círculo de la red Philippe",
          contenu: `Nuestro mapeo identificaba seis círculos de influencia: Juppéie, ENA Marc-Bloch, FAF, FCF, mundo de los negocios, Horizons. Bilderberg constituye un séptimo círculo, más discreto, caracterizado por: opacidad máxima (Chatham House), selección desde arriba (de Castries selecciona), exclusividad transatlántica (ninguna personalidad rusa, china, india o africana invitada).

La edición 2025 (Estocolmo) marca un punto de inflexión con los temas: relaciones transatlánticas, eje autoritario, IA y seguridad nacional. Entre los participantes: el SG de la OTAN (Rutte), el CEO de Pfizer (Bourla), Peter Thiel y Alex Karp (Palantir), Satya Nadella (Microsoft).

En términos de MAS, de Castries es un "superfacilitador" que no se limita a conectar agentes sino que selecciona a quienes están expuestos a la red transatlántica. Al cooptar a los futuros líderes, garantiza que el próximo ocupante del Élysée habrá sido expuesto a la visión transatlántica antes de acceder a él.`,
        },
      ],
    },
    ru: {
      titre: "Сеть Бильдерберга — Филипп, Атталь и трансатлантический кружок",
      sousTitre: "Анри де Кастри: мост между Бильдербергом и France China Foundation",
      resume:
        "Бильдербергская группа ежегодно собирает от 120 до 140 руководителей под правилом Чатем-хауса. Анри де Кастри, председатель руководящего комитета с 2012 года, одновременно входит в Стратегический совет FCF — уникальный мост между трансатлантической и франко-китайской сетями. Philippe участвовал четырежды, Attal дважды, Macron однажды. Все трое получили повышение в течение нескольких месяцев после первого участия.",
      parties: [
        {
          titre: "Хронология участия в Бильдерберге",
          contenu: `Philippe: четыре подтверждённых участия (2016, 2023, 2024, 2025). Назначен премьер-министром через одиннадцать месяцев после первого участия в 2016 году.

Attal: приглашён в Лиссабон в 2023 году (министр государственного бюджета), назначен PM семь месяцев спустя. Присутствовал в Стокгольме в 2025 году как бывший PM. В 2025 году оба бывших макронистских PM присутствовали вместе, рядом с Nicolas Roche (SGDSN).

Macron: участвовал в 2014 году (заместитель генерального секретаря Élysée), назначен министром экономики два месяца спустя.

Паттерн «продвижение после Бильдерберга» не доказывает причинно-следственную связь, но показывает, что отборочный комитет (под председательством де Кастри) выявляет личностей с высоким потенциалом роста до того, как их продвижение становится публичным.`,
        },
        {
          titre: "Анри де Кастри: уникальный узел системы",
          contenu: `Бывший генеральный директор AXA в течение 16 лет (2000-2016), де Кастри накапливает позиции без аналогов: председатель руководящего комитета Бильдерберга с 2012 года, президент Institut Montaigne с 2015 года, член Стратегического совета FCF, молодой лидер FAF с тройным отбором (1994, 1995, 1998), однокурсник Villepin в ENA (продвижение Voltaire, 1980).

Он единственный идентифицированный человек, который одновременно заседает в руководящем комитете Бильдерберга И в Стратегическом совете FCF. В FCF он встречает Philippe, Raffarin и Attali. На Бильдерберге он выбирает и принимает Philippe, Attal и принимал Macron.

Экосистема AXA орошает французский Бильдерберг: де Кастри (бывший CEO), Buberl (нынешний CEO) и Gosset-Grainville (председатель совета директоров) присутствовали вместе в 2023 году. Patricia Barbizet, бывший президент Siècle, является второй постоянным французским представителем в руководящем комитете.`,
        },
        {
          titre: "Бильдерберг как 7-й круг сети Philippe",
          contenu: `Наше картирование выявило шесть кругов влияния: Juppéie, ENA Marc-Bloch, FAF, FCF, деловой мир, Horizons. Бильдерберг составляет седьмой круг, более дискретный, характеризующийся: максимальной непрозрачностью (Chatham House), отбором сверху (де Кастри отбирает), трансатлантической эксклюзивностью (ни одной российской, китайской, индийской или африканской личности не приглашено).

Издание 2025 года (Стокгольм) знаменует поворотный момент с темами: трансатлантические отношения, авторитарная ось, ИИ и национальная безопасность. Среди участников: генеральный секретарь НАТО (Rutte), генеральный директор Pfizer (Bourla), Peter Thiel и Alex Karp (Palantir), Satya Nadella (Microsoft).

В терминах MAS де Кастри является «суперфасилитатором», который не просто соединяет агентов, но выбирает тех, кто подвергается воздействию трансатлантической сети. Кооптируя будущих лидеров, он гарантирует, что следующий обитатель Élysée будет подвержен трансатлантическому видению до того, как получит к нему доступ.`,
        },
      ],
    },
    ja: {
      titre: "ビルダーバーグ・ネットワーク — Philippe、Attal と大西洋横断サークル",
      sousTitre: "アンリ・ド・カストリ：ビルダーバーグとフランス中国財団をつなぐ橋",
      resume:
        "ビルダーバーグ・グループは毎年120～140人の指導者をチャタム・ハウス・ルールのもとに集める。2012年から運営委員会の委員長を務めるアンリ・ド・カストリは、同時にFCF戦略委員会にも所属しており、大西洋横断ネットワークと仏中ネットワークをつなぐ唯一の橋となっている。Philippeは4回、Attalは2回、Macronは1回参加した。3人とも初参加後の数ヶ月以内に昇進している。",
      parties: [
        {
          titre: "ビルダーバーグ参加の年表",
          contenu: `Philippe：4回の参加が確認されている（2016年、2023年、2024年、2025年）。2016年の初参加から11ヶ月後に首相に任命された。

Attal：2023年にリスボンに招待（公会計大臣として）、7ヶ月後にPMに任命された。2025年にストックホルムで元PMとして出席。2025年には、Nicolas Roche（SGDSN）とともに、二人の元マクロン派PMが共に出席した。

Macron：2014年に参加（エリゼ宮副事務総長として）、2ヶ月後に経済相に任命された。

「ビルダーバーグ後の昇進」というパターンは因果関係を証明するものではないが、選考委員会（ド・カストリが委員長）が、昇進が公になる前に上昇ポテンシャルの高い人物を特定していることを示している。`,
        },
        {
          titre: "アンリ・ド・カストリ：システムの唯一のノード",
          contenu: `AXAの元CEO（16年間、2000-2016年）のド・カストリは、比類なきポジションを累積している：2012年からビルダーバーグ運営委員会の委員長、2015年からInstitut Montaigneの会長、FCF戦略委員会のメンバー、FAFヤング・リーダー（1994年、1995年、1998年の三重選考）、ENAでVillepinの同窓生（Voltaire昇進、1980年）。

彼は、ビルダーバーグ運営委員会とFCF戦略委員会に同時に着席していると確認された唯一の人物である。FCF内では、Philippe、Raffarin、Attaliと再会する。ビルダーバーグでは、Philippe、Attalを選択・歓迎し、Macronを歓迎していた。

AXAエコシステムはフランスのビルダーバーグを灌漑する：ド・カストリ（元CEO）、Buberl（現CEO）、Gosset-Grainville（取締役会会長）が2023年に揃って出席した。Patricia Barbizet（Siècleの元会長）は、運営委員会のフランスの第二の常任代表者である。`,
        },
        {
          titre: "Philippeネットワークの第7の輪としてのビルダーバーグ",
          contenu: `我々のマッピングは6つの影響圏を特定していた：Juppéie、ENAマルク・ブロック、FAF、FCF、ビジネス界、Horizons。ビルダーバーグは第7の輪を構成し、より控えめで、以下の特徴がある：最大の不透明性（チャタム・ハウス）、上からの選択（ド・カストリが選択）、大西洋横断的排他性（ロシア、中国、インド、アフリカの人物は招待されない）。

2025年版（ストックホルム）は、テーマにおいて転換点を示す：大西洋横断関係、権威主義的枢軸、AIと国家安全保障。参加者の中には：NATO事務総長（Rutte）、Pfizer CEO（Bourla）、Peter ThielとAlex Karp（Palantir）、Satya Nadella（Microsoft）。

MAS的には、ド・カストリはエージェントをつなぐだけでなく、大西洋横断ネットワークにさらされているエージェントを選択する「スーパーファシリテーター」である。将来の指導者を取り込むことで、エリゼ宮の次の占有者がそこに入る前に大西洋横断ビジョンにさらされていることを保証する。`,
        },
      ],
    },
    it: {
      titre: "La rete Bilderberg — Philippe, Attal e il cenacolo transatlantico",
      sousTitre: "Henri de Castries: il ponte tra Bilderberg e la France China Foundation",
      resume:
        "Il gruppo Bilderberg riunisce ogni anno da 120 a 140 dirigenti sotto la regola di Chatham House. Henri de Castries, presidente del comitato direttivo dal 2012, siede contemporaneamente nel Consiglio Strategico della FCF — ponte unico tra la rete transatlantica e quella sino-francese. Philippe vi ha partecipato quattro volte, Attal due, Macron una. Tutti e tre sono stati promossi nei mesi successivi alla loro prima partecipazione.",
      parties: [
        {
          titre: "Cronologia delle partecipazioni a Bilderberg",
          contenu: `Philippe: quattro partecipazioni confermate (2016, 2023, 2024, 2025). Nominato Primo Ministro undici mesi dopo la sua prima partecipazione nel 2016.

Attal: invitato a Lisbona nel 2023 (ministro dei Conti Pubblici), nominato PM sette mesi dopo. Presente a Stoccolma nel 2025 come ex PM. Nel 2025, i due ex PM macronisti sono presenti insieme, accanto a Nicolas Roche (SGDSN).

Macron: partecipa nel 2014 (segretario generale aggiunto dell'Élysée), nominato ministro dell'Economia due mesi dopo.

Il pattern "promozione post-Bilderberg" non dimostra una causalità, ma rivela che il comitato di selezione (presieduto da de Castries) identifica personalità con alto potenziale di ascesa prima che la loro promozione diventi pubblica.`,
        },
        {
          titre: "Henri de Castries: Il nodo unico del sistema",
          contenu: `Ex CEO di AXA per 16 anni (2000-2016), de Castries accumula posizioni senza equivalenti: presidente del comitato direttivo del Bilderberg dal 2012, presidente dell'Institut Montaigne dal 2015, membro del Consiglio Strategico della FCF, Young Leader FAF con tripla selezione (1994, 1995, 1998), condiscepolo di Villepin all'ENA (promozione Voltaire, 1980).

È l'unico individuo identificato che siede contemporaneamente nel comitato direttivo del Bilderberg E nel Consiglio Strategico della FCF. In seno alla FCF, ritrova Philippe, Raffarin e Attali. Al Bilderberg, seleziona e accoglie Philippe, Attal e aveva accolto Macron.

L'ecosistema AXA irriga il Bilderberg francese: de Castries (ex CEO), Buberl (CEO attuale) e Gosset-Grainville (presidente del CA) erano presenti insieme nel 2023. Patricia Barbizet, ex presidente del Siècle, è la seconda rappresentante francese permanente nel comitato direttivo.`,
        },
        {
          titre: "Il Bilderberg come 7° cerchio della rete Philippe",
          contenu: `La nostra mappatura identificava sei cerchi di influenza: Juppéie, ENA Marc-Bloch, FAF, FCF, mondo degli affari, Horizons. Il Bilderberg costituisce un settimo cerchio, più discreto, caratterizzato da: massima opacità (Chatham House), selezione dall'alto (de Castries seleziona), esclusività transatlantica (nessuna personalità russa, cinese, indiana o africana invitata).

L'edizione 2025 (Stoccolma) segna una svolta con i temi: relazioni transatlantiche, asse autoritario, IA e sicurezza nazionale. Tra i partecipanti: il SG della NATO (Rutte), il CEO di Pfizer (Bourla), Peter Thiel e Alex Karp (Palantir), Satya Nadella (Microsoft).

In termini di MAS, de Castries è un "super-facilitatore" che non si limita a connettere agenti ma seleziona quelli esposti alla rete transatlantica. Cooptando i futuri dirigenti, garantisce che il prossimo occupante dell'Élysée sarà stato esposto alla visione transatlantica prima di accedervi.`,
        },
      ],
    },
    zh: {
      titre: "毕德伯格网络 — Philippe、Attal 与跨大西洋圈子",
      sousTitre: "亨利·德·卡斯特里：连接毕德伯格与法中基金会的桥梁",
      resume:
        "毕德伯格集团每年在查塔姆研究所规则下汇聚120至140名领导人。自2012年起担任指导委员会主席的亨利·德·卡斯特里同时也是FCF战略委员会成员——这是跨大西洋网络与中法网络之间的唯一桥梁。Philippe参加了四次，Attal两次，Macron一次。三人均在首次参加后数月内获得晋升。",
      parties: [
        {
          titre: "毕德伯格参与时间线",
          contenu: `Philippe：四次确认参与（2016年、2023年、2024年、2025年）。在2016年首次参与后十一个月被任命为总理。

Attal：2023年受邀前往里斯本（公共账务部长），七个月后被任命为PM。2025年以前总理身份出席斯德哥尔摩会议。2025年，两位前马克龙派PM与Nicolas Roche（SGDSN）一同出席。

Macron：2014年参与（爱丽舍宫副秘书长），两个月后被任命为经济部长。

"毕德伯格后晋升"模式并不证明因果关系，但揭示了选拔委员会（由德·卡斯特里主持）在晋升公开之前就识别出具有高上升潜力的人物。`,
        },
        {
          titre: "亨利·德·卡斯特里：系统的唯一节点",
          contenu: `曾担任AXA首席执行官16年（2000-2016年）的德·卡斯特里累积了无与伦比的职位：自2012年起担任毕德伯格指导委员会主席，自2015年起担任Institut Montaigne主席，FCF战略委员会成员，FAF青年领袖（1994年、1995年、1998年三重遴选），ENA中Villepin的同班同学（Voltaire届，1980年）。

他是唯一被确认同时在毕德伯格指导委员会和FCF战略委员会任职的人。在FCF内部，他与Philippe、Raffarin和Attali重聚。在毕德伯格，他选择并接待Philippe、Attal，并曾接待Macron。

AXA生态系统滋养着法国毕德伯格：德·卡斯特里（前CEO）、Buberl（现任CEO）和Gosset-Grainville（董事会主席）在2023年共同出席。Patricia Barbizet，前Siècle主席，是指导委员会中第二位法国常任代表。`,
        },
        {
          titre: "毕德伯格作为Philippe网络的第7个圆圈",
          contenu: `我们的图谱确定了六个影响圈：Juppéie、ENA马克·布洛赫、FAF、FCF、商界、Horizons。毕德伯格构成了第七个圆圈，更为低调，其特点是：最大限度的不透明（查塔姆研究所规则）、自上而下的遴选（德·卡斯特里遴选）、跨大西洋的排他性（不邀请任何俄罗斯、中国、印度或非洲人士）。

2025年版（斯德哥尔摩）在议题上标志着转折点：跨大西洋关系、威权主义轴心、人工智能与国家安全。参与者包括：北约秘书长（Rutte）、辉瑞CEO（Bourla）、Peter Thiel和Alex Karp（Palantir）、Satya Nadella（微软）。

在MAS术语中，德·卡斯特里是一个"超级推动者"，他不仅连接代理人，还遴选那些接触过跨大西洋网络的人。通过吸纳未来的领导人，他确保爱丽舍宫的下一位占据者在进入之前就已接触过跨大西洋愿景。`,
        },
      ],
    },
  },
  "blackrock-reseau-philippe": {
    fr: {
      titre: "BlackRock & le réseau Philippe — Le gestionnaire d'actifs au cœur du système",
      sousTitre: "De Cirelli à Kohler : la convergence des intérêts financiers et politiques",
      resume:
        "BlackRock (10 000 Mds $) est lié structurellement au réseau Philippe via Cirelli (ex-dircab Raffarin, promu LH par Philippe en pleine grève des retraites). En mars 2025, BlackRock et MSC (famille Kohler) s'associent pour acheter 43 ports mondiaux. Philippe propose 15 % de capitalisation retraites — le rêve de BlackRock.",
      parties: [
        {
          titre: "Jean-François Cirelli : le pont BlackRock–Raffarin–Philippe",
          contenu: `ENA (promotion Léonard de Vinci, 1985), ancien conseiller de Chirac, directeur adjoint du cabinet de Raffarin (2002-2004), artisan de la réforme des retraites Fillon 2003 — son « plus grand sujet de fierté ». PDG de Gaz de France puis numéro 2 de GDF Suez (Engie). Président de BlackRock France depuis 2015.

La chaîne est directe : conseiller de Chirac → dircab de Raffarin → PDG Gaz de France → BlackRock France → invité par Philippe au CAP 2022 → promu LH par Philippe.

Philippe lance en 2018 le Comité Action Publique 2022. Cirelli y siège et recommande des « transferts au secteur privé ». Cirelli déclarait devant l'AMF vouloir « renforcer l'idée auprès des autorités publiques qu'il faut investir pour la retraite dans les marchés de capitaux ». Le patron de BlackRock conseille directement le Premier ministre.

Le 31 décembre 2019, en pleine grève historique, Cirelli est élevé officier de la Légion d'honneur sur proposition de Philippe. Le 7 janvier 2020, des grévistes envahissent le siège de BlackRock.`,
        },
        {
          titre: "Le deal BlackRock–MSC : le nœud portuaire mondial",
          contenu: `En mars 2025, BlackRock et TiL (opérateur portuaire de MSC, famille Aponte, cousins de Kohler) annoncent l'acquisition de 43 ports de CK Hutchison dans 23 pays pour 22,8 milliards de dollars. BlackRock prend les deux ports stratégiques du Canal de Panama, MSC/TiL la majorité des 41 autres.

COSCO Shipping (armateur chinois d'État, partenaire du port du Havre via le jumelage Dalian) exige une participation majoritaire dans le consortium, menaçant de faire capoter le deal. Ce bras de fer illustre la rivalité sino-américaine pour le contrôle des infrastructures portuaires — le même enjeu qui sous-tend le port du Havre.

Connexions avec le réseau : BlackRock est actionnaire d'AXA (de Castries/Bilderberg), BNP (Lemierre/Bilderberg 2025), Total (Pouyanné/Bilderberg), SocGen (où Kohler rejoint en 2025). Le deal BlackRock-MSC connecte directement le gestionnaire d'actifs au triangle Kohler–MSC–Le Havre–Philippe.`,
        },
        {
          titre: "Philippe 2027 : le programme BlackRock",
          contenu: `En juin 2025, Philippe propose 15 % de capitalisation dans les retraites, tout en menaçant de relever l'âge de départ à 67 ans si cette option n'est pas retenue.

Chronologie de la convergence : Cirelli dircab Raffarin et réforme Fillon 2003 → Cirelli président BlackRock France 2015 → Larry Fink reçu à l'Élysée juin 2017 (30 jours après investiture Macron) → ministres Philippe pitchent la France à BlackRock octobre 2017 → Cirelli invité au CAP 2022 (2018) → Cirelli promu LH décembre 2019 → réforme retraites Philippe/Macron 2019-2020 → Philippe propose 15 % capitalisation 2025.

Dans le modèle MAS, BlackRock est une contrainte environnementale — un attracteur financier vers lequel gravitent les agents qui optimisent leur capital relationnel. La convergence Philippe-BlackRock est le produit d'un alignement structurel entre un candidat réformateur et un gestionnaire qui a besoin de la capitalisation.`,
        },
      ],
    },
    en: {
      titre: "BlackRock & the Philippe Network — The Asset Manager at the Heart of the System",
      sousTitre: "From Cirelli to Kohler: the convergence of financial and political interests",
      resume:
        "BlackRock ($10 trillion) is structurally linked to the Philippe network via Cirelli (former Raffarin chief of staff, promoted to the Legion of Honour by Philippe during the pension strikes). In March 2025, BlackRock and MSC (Kohler family) join forces to purchase 43 global ports. Philippe proposes 15% pension capitalisation — BlackRock's dream.",
      parties: [
        {
          titre: "Jean-François Cirelli: The BlackRock–Raffarin–Philippe Bridge",
          contenu: `ENA (Léonard de Vinci class, 1985), former advisor to Chirac, deputy chief of staff to Raffarin (2002-2004), architect of the Fillon pension reform 2003 — his "greatest source of pride". CEO of Gaz de France then number two at GDF Suez (Engie). President of BlackRock France since 2015.

The chain is direct: Chirac advisor → Raffarin chief of staff → CEO Gaz de France → BlackRock France → invited by Philippe to the CAP 2022 → promoted to the Legion of Honour by Philippe.

Philippe launched the Public Action Committee 2022 in 2018. Cirelli sits on it and recommends "transfers to the private sector". Cirelli declared before the AMF his wish to "reinforce the idea with public authorities that pension savings must be invested in capital markets". The head of BlackRock advises the Prime Minister directly.

On 31 December 2019, amid a historic strike, Cirelli is elevated to officer of the Legion of Honour on Philippe's proposal. On 7 January 2020, strikers invade BlackRock's headquarters.`,
        },
        {
          titre: "The BlackRock–MSC Deal: The Global Port Node",
          contenu: `In March 2025, BlackRock and TiL (MSC's port operator, Aponte family, cousins of Kohler) announce the acquisition of 43 CK Hutchison ports in 23 countries for $22.8 billion. BlackRock takes the two strategic Panama Canal ports, MSC/TiL the majority of the other 41.

COSCO Shipping (Chinese state shipowner, partner of Le Havre port via the Dalian twinning) demands a majority stake in the consortium, threatening to derail the deal. This standoff illustrates the Sino-American rivalry for control of port infrastructure — the same issue underlying the port of Le Havre.

Network connections: BlackRock is a shareholder of AXA (de Castries/Bilderberg), BNP (Lemierre/Bilderberg 2025), Total (Pouyanné/Bilderberg), SocGen (where Kohler joins in 2025). The BlackRock-MSC deal directly connects the asset manager to the Kohler–MSC–Le Havre–Philippe triangle.`,
        },
        {
          titre: "Philippe 2027: The BlackRock Programme",
          contenu: `In June 2025, Philippe proposes 15% capitalisation in pensions, while threatening to raise the retirement age to 67 if this option is not adopted.

Timeline of convergence: Cirelli Raffarin chief of staff and Fillon reform 2003 → Cirelli president of BlackRock France 2015 → Larry Fink received at the Élysée June 2017 (30 days after Macron's inauguration) → Philippe ministers pitch France to BlackRock October 2017 → Cirelli invited to CAP 2022 (2018) → Cirelli promoted to Legion of Honour December 2019 → Philippe/Macron pension reform 2019-2020 → Philippe proposes 15% capitalisation 2025.

In the MAS model, BlackRock is an environmental constraint — a financial attractor towards which agents optimising their relational capital gravitate. The Philippe-BlackRock convergence is the product of a structural alignment between a reformist candidate and a manager who needs capitalisation.`,
        },
      ],
    },
    de: {
      titre: "BlackRock & das Philippe-Netzwerk — Der Vermögensverwalter im Zentrum des Systems",
      sousTitre: "Von Cirelli zu Kohler: die Konvergenz finanzieller und politischer Interessen",
      resume:
        "BlackRock (10.000 Mrd. $) ist strukturell mit dem Philippe-Netzwerk über Cirelli verbunden (ehemaliger Kabinettschef von Raffarin, von Philippe während des Rentenstreiks zum Ritter der Ehrenlegion ernannt). Im März 2025 schließen sich BlackRock und MSC (Familie Kohler) zusammen, um 43 weltweite Häfen zu kaufen. Philippe schlägt 15 % Rentenkapitalisierung vor — BlackRocks Traum.",
      parties: [
        {
          titre: "Jean-François Cirelli: Die BlackRock–Raffarin–Philippe-Brücke",
          contenu: `ENA (Léonard-de-Vinci-Jahrgang, 1985), ehemaliger Berater von Chirac, stellvertretender Kabinettschef von Raffarin (2002-2004), Architekt der Rentenreform Fillon 2003 — sein „größtes Thema des Stolzes". Vorstandsvorsitzender von Gaz de France, dann Nummer zwei bei GDF Suez (Engie). Präsident von BlackRock France seit 2015.

Die Kette ist direkt: Chirac-Berater → Kabinettschef von Raffarin → CEO Gaz de France → BlackRock France → von Philippe zum CAP 2022 eingeladen → von Philippe zum Ritter der Ehrenlegion befördert.

Philippe lanciert 2018 den Ausschuss für öffentliche Maßnahmen 2022. Cirelli sitzt darin und empfiehlt „Übertragungen an den privaten Sektor". Cirelli erklärte vor der AMF seinen Wunsch, „bei den Behörden die Idee zu stärken, dass Rentenersparnisse in Kapitalmärkte investiert werden müssen". Der Chef von BlackRock berät den Premierminister direkt.

Am 31. Dezember 2019, mitten in einem historischen Streik, wird Cirelli auf Vorschlag von Philippe zum Offizier der Ehrenlegion ernannt. Am 7. Januar 2020 stürmen Streikende den Hauptsitz von BlackRock.`,
        },
        {
          titre: "Der BlackRock–MSC-Deal: Der globale Hafenknoten",
          contenu: `Im März 2025 kündigen BlackRock und TiL (MSCs Hafenbetreiber, Familie Aponte, Cousins von Kohler) die Übernahme von 43 CK-Hutchison-Häfen in 23 Ländern für 22,8 Milliarden Dollar an. BlackRock übernimmt die beiden strategischen Häfen am Panamakanal, MSC/TiL die Mehrheit der anderen 41.

COSCO Shipping (chinesisches staatliches Reedereiunternehmen, Partner des Hafens Le Havre über die Städtepartnerschaft Dalian) verlangt eine Mehrheitsbeteiligung am Konsortium und droht, das Geschäft zu torpedieren. Dieses Kräftemessen veranschaulicht den chinesisch-amerikanischen Rivalitätskampf um die Kontrolle der Hafeninfrastruktur — das gleiche Thema, das dem Hafen Le Havre zugrunde liegt.

Netzwerkverbindungen: BlackRock ist Aktionär von AXA (de Castries/Bilderberg), BNP (Lemierre/Bilderberg 2025), Total (Pouyanné/Bilderberg), SocGen (wo Kohler 2025 beitritt). Der BlackRock-MSC-Deal verbindet den Vermögensverwalter direkt mit dem Dreieck Kohler–MSC–Le Havre–Philippe.`,
        },
        {
          titre: "Philippe 2027: Das BlackRock-Programm",
          contenu: `Im Juni 2025 schlägt Philippe 15 % Kapitalisierung bei den Renten vor und droht gleichzeitig damit, das Rentenalter auf 67 Jahre anzuheben, falls diese Option nicht angenommen wird.

Zeitplan der Konvergenz: Cirelli Kabinettschef von Raffarin und Fillon-Reform 2003 → Cirelli Präsident BlackRock France 2015 → Larry Fink im Élysée empfangen Juni 2017 (30 Tage nach Macrons Amtseinführung) → Philippe-Minister pitchen Frankreich an BlackRock Oktober 2017 → Cirelli zum CAP 2022 eingeladen (2018) → Cirelli zur Ehrenlegion befördert Dezember 2019 → Philippe/Macron-Rentenreform 2019-2020 → Philippe schlägt 15 % Kapitalisierung 2025 vor.

Im MAS-Modell ist BlackRock eine Umweltbeschränkung — ein finanzieller Attraktor, zu dem Agenten gravitieren, die ihr relationales Kapital optimieren. Die Philippe-BlackRock-Konvergenz ist das Produkt einer strukturellen Ausrichtung zwischen einem reformorientierten Kandidaten und einem Manager, der Kapitalisierung braucht.`,
        },
      ],
    },
    es: {
      titre: "BlackRock & la red Philippe — El gestor de activos en el corazón del sistema",
      sousTitre: "De Cirelli a Kohler: la convergencia de los intereses financieros y políticos",
      resume:
        "BlackRock (10.000 MM $) está estructuralmente vinculado a la red Philippe a través de Cirelli (ex jefe de gabinete de Raffarin, promovido a la Legión de Honor por Philippe en plena huelga de pensiones). En marzo de 2025, BlackRock y MSC (familia Kohler) se asocian para comprar 43 puertos mundiales. Philippe propone un 15 % de capitalización de pensiones — el sueño de BlackRock.",
      parties: [
        {
          titre: "Jean-François Cirelli: El puente BlackRock–Raffarin–Philippe",
          contenu: `ENA (promoción Léonard de Vinci, 1985), ex asesor de Chirac, director adjunto del gabinete de Raffarin (2002-2004), artífice de la reforma de pensiones Fillon 2003 — su "mayor motivo de orgullo". CEO de Gaz de France y luego número dos de GDF Suez (Engie). Presidente de BlackRock France desde 2015.

La cadena es directa: asesor de Chirac → jefe de gabinete de Raffarin → CEO Gaz de France → BlackRock France → invitado por Philippe al CAP 2022 → promovido a la Legión de Honor por Philippe.

Philippe lanza en 2018 el Comité de Acción Pública 2022. Cirelli forma parte de él y recomienda "transferencias al sector privado". Cirelli declaró ante la AMF su deseo de "reforzar la idea ante las autoridades públicas de que hay que invertir para la jubilación en los mercados de capitales". El jefe de BlackRock asesora directamente al Primer Ministro.

El 31 de diciembre de 2019, en plena huelga histórica, Cirelli es nombrado oficial de la Legión de Honor a propuesta de Philippe. El 7 de enero de 2020, los huelguistas invaden la sede de BlackRock.`,
        },
        {
          titre: "El acuerdo BlackRock–MSC: El nodo portuario mundial",
          contenu: `En marzo de 2025, BlackRock y TiL (operador portuario de MSC, familia Aponte, primos de Kohler) anuncian la adquisición de 43 puertos de CK Hutchison en 23 países por 22.800 millones de dólares. BlackRock se queda con los dos puertos estratégicos del Canal de Panamá, MSC/TiL con la mayoría de los otros 41.

COSCO Shipping (armador chino de Estado, socio del puerto de Le Havre mediante el hermanamiento con Dalian) exige una participación mayoritaria en el consorcio, amenazando con hacer fracasar el acuerdo. Este pulso ilustra la rivalidad sino-americana por el control de las infraestructuras portuarias — el mismo reto que subyace al puerto de Le Havre.

Conexiones con la red: BlackRock es accionista de AXA (de Castries/Bilderberg), BNP (Lemierre/Bilderberg 2025), Total (Pouyanné/Bilderberg), SocGen (donde Kohler se incorpora en 2025). El acuerdo BlackRock-MSC conecta directamente al gestor de activos con el triángulo Kohler–MSC–Le Havre–Philippe.`,
        },
        {
          titre: "Philippe 2027: El programa BlackRock",
          contenu: `En junio de 2025, Philippe propone un 15 % de capitalización en las pensiones, al tiempo que amenaza con elevar la edad de jubilación a los 67 años si no se adopta esta opción.

Cronología de la convergencia: Cirelli jefe de gabinete de Raffarin y reforma Fillon 2003 → Cirelli presidente de BlackRock France 2015 → Larry Fink recibido en el Élysée junio 2017 (30 días después de la investidura de Macron) → ministros de Philippe presentan Francia a BlackRock octubre 2017 → Cirelli invitado al CAP 2022 (2018) → Cirelli promovido a la Legión de Honor diciembre 2019 → reforma de pensiones Philippe/Macron 2019-2020 → Philippe propone 15 % capitalización 2025.

En el modelo MAS, BlackRock es una restricción medioambiental — un atractor financiero hacia el que gravitan los agentes que optimizan su capital relacional. La convergencia Philippe-BlackRock es el producto de una alineación estructural entre un candidato reformista y un gestor que necesita la capitalización.`,
        },
      ],
    },
    ru: {
      titre: "BlackRock и сеть Philippe — Управляющий активами в сердце системы",
      sousTitre: "От Cirelli к Kohler: конвергенция финансовых и политических интересов",
      resume:
        "BlackRock (10 000 млрд $) структурно связан с сетью Philippe через Cirelli (бывший руководитель аппарата Raffarin, удостоенный Ордена почётного легиона от Philippe в разгар пенсионных забастовок). В марте 2025 года BlackRock и MSC (семья Kohler) объединились для покупки 43 мировых портов. Philippe предлагает 15 % пенсионную капитализацию — мечту BlackRock.",
      parties: [
        {
          titre: "Жан-Франсуа Сирелли: мост BlackRock–Raffarin–Philippe",
          contenu: `ENA (продвижение Léonard de Vinci, 1985), бывший советник Chirac, заместитель руководителя кабинета Raffarin (2002-2004), архитектор пенсионной реформы Fillon 2003 — его «главный предмет гордости». Генеральный директор Gaz de France, затем второй человек в GDF Suez (Engie). Президент BlackRock France с 2015 года.

Цепочка прямая: советник Chirac → руководитель аппарата Raffarin → CEO Gaz de France → BlackRock France → приглашён Philippe в CAP 2022 → удостоен Ордена почётного легиона от Philippe.

В 2018 году Philippe запустил Комитет по государственным действиям 2022. Cirelli входит в него и рекомендует «передачу частному сектору». Cirelli заявил перед AMF о желании «усилить у государственных органов идею о том, что пенсионные накопления необходимо инвестировать в рынки капитала». Глава BlackRock напрямую консультирует премьер-министра.

31 декабря 2019 года, в разгар исторической забастовки, Cirelli был удостоен звания офицера Ордена почётного легиона по предложению Philippe. 7 января 2020 года забастовщики захватили штаб-квартиру BlackRock.`,
        },
        {
          titre: "Сделка BlackRock–MSC: глобальный портовый узел",
          contenu: `В марте 2025 года BlackRock и TiL (портовый оператор MSC, семья Aponte, двоюродные братья Kohler) объявили о приобретении 43 портов CK Hutchison в 23 странах за 22,8 миллиарда долларов. BlackRock берёт два стратегических порта Панамского канала, MSC/TiL — большинство из оставшихся 41.

COSCO Shipping (китайская государственная судоходная компания, партнёр порта Гавра через побратимство с Далянем) требует контрольного пакета в консорциуме, угрожая сорвать сделку. Это противостояние иллюстрирует китайско-американское соперничество за контроль над портовой инфраструктурой — те же ставки, которые лежат в основе порта Гавра.

Связи с сетью: BlackRock является акционером AXA (де Кастри/Бильдерберг), BNP (Lemierre/Bilderberg 2025), Total (Pouyanné/Bilderberg), SocGen (куда Kohler присоединяется в 2025 году). Сделка BlackRock-MSC напрямую соединяет управляющего активами с треугольником Kohler–MSC–Le Havre–Philippe.`,
        },
        {
          titre: "Philippe 2027: программа BlackRock",
          contenu: `В июне 2025 года Philippe предложил 15 % капитализацию в пенсиях, одновременно угрожая повысить пенсионный возраст до 67 лет, если этот вариант не будет принят.

Хронология конвергенции: Cirelli руководитель аппарата Raffarin и реформа Fillon 2003 → Cirelli президент BlackRock France 2015 → Larry Fink принят в Élysée июнь 2017 (через 30 дней после инаугурации Macron) → министры Philippe продвигают Францию в BlackRock октябрь 2017 → Cirelli приглашён в CAP 2022 (2018) → Cirelli удостоен Ордена почётного легиона декабрь 2019 → пенсионная реформа Philippe/Macron 2019-2020 → Philippe предлагает 15 % капитализации 2025.

В модели MAS BlackRock является средовым ограничением — финансовым аттрактором, к которому тяготеют агенты, оптимизирующие свой реляционный капитал. Конвергенция Philippe-BlackRock является продуктом структурного согласования между реформистским кандидатом и управляющим, которому нужна капитализация.`,
        },
      ],
    },
    ja: {
      titre: "BlackRock とPhilippeネットワーク — システムの中枢にある資産運用会社",
      sousTitre: "CirelliからKohlerへ：金融的・政治的利益の収束",
      resume:
        "BlackRock（10兆ドル）はCirelli（Raffarinの元官房長、年金スト中にPhilippeから勲章を授与）を通じてPhilippeネットワークと構造的に連携している。2025年3月、BlackRockとMSC（Kohler一族）は43の世界の港を買収するために提携する。Philippeは年金の15%資本化を提案——BlackRockの夢。",
      parties: [
        {
          titre: "ジャン＝フランソワ・シレッリ：BlackRock–Raffarin–Philippe の橋",
          contenu: `ENA（レオナール・ド・ヴァンチ組、1985年）、Chiracの元顧問、Raffarinの副官房長（2002-2004年）、フィヨン年金改革2003年の設計者——彼の「最大の誇り」。ガズ・ド・フランスのCEO、その後GDFスエズ（エンジー）のナンバー2。2015年からBlackRock France社長。

連鎖は直接的：Chirac顧問 → Raffarin官房長 → ガズ・ド・フランスCEO → BlackRock France → PhilippeにCAP 2022へ招待 → PhilippeからレジオンドヌールへI昇叙。

Philippeは2018年に公共行動委員会2022を立ち上げた。Cirelliはそこに座り「民間部門への移転」を勧告した。CirelliはAMFの前で「年金貯蓄は資本市場に投資すべきという考えを公的機関に強化したい」と述べた。BlackRockの頭取が首相に直接助言している。

2019年12月31日、歴史的なストの最中、CirelliはPhilippeの提案によりレジオンドヌールのオフィシエに叙せられた。2020年1月7日、ストライキ参加者がBlackRock本社に乱入した。`,
        },
        {
          titre: "BlackRock–MSC ディール：世界的な港湾ノード",
          contenu: `2025年3月、BlackRockとTiL（MSCの港湾オペレーター、Aponte一家、Kohlerのいとこ）は23カ国のCKハチソン43港を228億ドルで取得すると発表した。BlackRockはパナマ運河の2つの戦略的な港を取得し、MSC/TiLは残りの41港の大部分を取得する。

COSCO Shipping（中国国営海運会社、ダリアンとの姉妹都市提携を通じたル・アーブル港のパートナー）はコンソーシアムの過半数株を要求し、取引を妨げると脅している。この対立は、港湾インフラの支配をめぐる米中の競争を示しており——ル・アーブル港が抱える同じ問題である。

ネットワーク接続：BlackRockはAXA（ド・カストリ/ビルダーバーグ）、BNP（Lemierre/ビルダーバーグ2025）、Total（Pouyanné/ビルダーバーグ）、SocGen（Kohlerが2025年に加入）の株主。BlackRock-MSCディールは資産運用会社をKohler–MSC–Le Havre–Philippeトライアングルに直接接続する。`,
        },
        {
          titre: "Philippe 2027: BlackRockプログラム",
          contenu: `2025年6月、Philippeは年金の15%資本化を提案し、この選択肢が採用されなければ退職年齢を67歳に引き上げると脅した。

収束の年表：Cirelli Raffarin官房長とフィヨン改革2003年 → Cirelli BlackRock France社長2015年 → Larry Finkがエリゼ宮で受け入れ2017年6月（Macron就任から30日後）→ Philippe大臣がBlackRockにフランスをピッチ2017年10月 → CirelliがCAP 2022に招待（2018年）→ CirelliがレジオンドヌールへI昇叙2019年12月 → Philippe/Macron年金改革2019-2020年 → Philippeが15%資本化を提案2025年。

MASモデルでは、BlackRockは環境上の制約——リレーショナル資本を最適化するエージェントが引き寄せられる金融アトラクターである。Philippe-BlackRockの収束は、改革志向の候補者と資本化を必要とする運用会社の間の構造的な整合の産物である。`,
        },
      ],
    },
    it: {
      titre: "BlackRock & la rete Philippe — Il gestore patrimoniale al centro del sistema",
      sousTitre: "Da Cirelli a Kohler: la convergenza degli interessi finanziari e politici",
      resume:
        "BlackRock (10.000 Mld $) è strutturalmente legato alla rete Philippe tramite Cirelli (ex capo di gabinetto di Raffarin, promosso alla Legione d'onore da Philippe in piena crisi delle pensioni). Nel marzo 2025, BlackRock e MSC (famiglia Kohler) si associano per acquistare 43 porti mondiali. Philippe propone il 15 % di capitalizzazione pensionistica — il sogno di BlackRock.",
      parties: [
        {
          titre: "Jean-François Cirelli: Il ponte BlackRock–Raffarin–Philippe",
          contenu: `ENA (promozione Léonard de Vinci, 1985), ex consigliere di Chirac, direttore aggiunto del gabinetto di Raffarin (2002-2004), artefice della riforma pensionistica Fillon 2003 — il suo «più grande motivo di orgoglio». CEO di Gaz de France poi numero due di GDF Suez (Engie). Presidente di BlackRock France dal 2015.

La catena è diretta: consigliere di Chirac → capo di gabinetto di Raffarin → CEO Gaz de France → BlackRock France → invitato da Philippe al CAP 2022 → promosso alla Legione d'onore da Philippe.

Philippe lancia nel 2018 il Comitato Azione Pubblica 2022. Cirelli vi siede e raccomanda "trasferimenti al settore privato". Cirelli dichiarava davanti all'AMF di voler "rafforzare l'idea presso le autorità pubbliche che bisogna investire per la pensione nei mercati dei capitali". Il capo di BlackRock consiglia direttamente il Primo Ministro.

Il 31 dicembre 2019, in pieno sciopero storico, Cirelli viene elevato ufficiale della Legione d'onore su proposta di Philippe. Il 7 gennaio 2020, gli scioperanti invadono la sede di BlackRock.`,
        },
        {
          titre: "Il deal BlackRock–MSC: Il nodo portuale mondiale",
          contenu: `Nel marzo 2025, BlackRock e TiL (operatore portuale di MSC, famiglia Aponte, cugini di Kohler) annunciano l'acquisizione di 43 porti di CK Hutchison in 23 paesi per 22,8 miliardi di dollari. BlackRock prende i due porti strategici del Canale di Panama, MSC/TiL la maggioranza degli altri 41.

COSCO Shipping (armatore cinese di Stato, partner del porto di Le Havre tramite il gemellaggio con Dalian) esige una partecipazione di maggioranza nel consorzio, minacciando di far saltare l'accordo. Questo braccio di ferro illustra la rivalità sino-americana per il controllo delle infrastrutture portuali — la stessa posta in gioco che sottende il porto di Le Havre.

Connessioni con la rete: BlackRock è azionista di AXA (de Castries/Bilderberg), BNP (Lemierre/Bilderberg 2025), Total (Pouyanné/Bilderberg), SocGen (dove Kohler entra nel 2025). Il deal BlackRock-MSC connette direttamente il gestore patrimoniale al triangolo Kohler–MSC–Le Havre–Philippe.`,
        },
        {
          titre: "Philippe 2027: Il programma BlackRock",
          contenu: `Nel giugno 2025, Philippe propone il 15 % di capitalizzazione nelle pensioni, minacciando al contempo di alzare l'età pensionabile a 67 anni se questa opzione non viene adottata.

Cronologia della convergenza: Cirelli capo di gabinetto di Raffarin e riforma Fillon 2003 → Cirelli presidente BlackRock France 2015 → Larry Fink ricevuto all'Élysée giugno 2017 (30 giorni dopo l'insediamento di Macron) → ministri Philippe presentano la Francia a BlackRock ottobre 2017 → Cirelli invitato al CAP 2022 (2018) → Cirelli promosso alla Legione d'onore dicembre 2019 → riforma pensioni Philippe/Macron 2019-2020 → Philippe propone 15 % capitalizzazione 2025.

Nel modello MAS, BlackRock è un vincolo ambientale — un attrattore finanziario verso cui gravitano gli agenti che ottimizzano il loro capitale relazionale. La convergenza Philippe-BlackRock è il prodotto di un allineamento strutturale tra un candidato riformatore e un gestore che ha bisogno della capitalizzazione.`,
        },
      ],
    },
    zh: {
      titre: "BlackRock与Philippe网络 — 资产管理公司处于系统核心",
      sousTitre: "从Cirelli到Kohler：金融与政治利益的汇聚",
      resume:
        "BlackRock（10万亿美元）通过Cirelli（Raffarin的前幕僚长，在养老金罢工期间被Philippe授予荣誉军团勋章）与Philippe网络存在结构性联系。2025年3月，BlackRock与MSC（Kohler家族）联手购买43个全球港口。Philippe提议将15%的养老金进行资本化——BlackRock的梦想。",
      parties: [
        {
          titre: "让-弗朗索瓦·西雷利：BlackRock–Raffarin–Philippe 的桥梁",
          contenu: `ENA（列奥纳多·达·芬奇届，1985年），Chirac的前顾问，Raffarin副幕僚长（2002-2004年），2003年菲永养老金改革的设计者——他"最引以为傲的成就"。法国燃气公司CEO，后为GDF苏伊士（Engie）第二号人物。自2015年起担任BlackRock法国总裁。

链条是直接的：Chirac顾问 → Raffarin幕僚长 → 法国燃气CEO → BlackRock法国 → 被Philippe邀请参加CAP 2022 → 被Philippe晋升荣誉军团勋章。

Philippe于2018年启动了公共行动委员会2022。Cirelli坐在其中，建议"向私营部门转让"。Cirelli在AMF面前表示希望"向公共当局强化养老金必须投资于资本市场的理念"。BlackRock的负责人直接向总理提供建议。

2019年12月31日，在历史性罢工期间，Cirelli根据Philippe的提议被授予荣誉军团勋章官级。2020年1月7日，罢工者占领了BlackRock总部。`,
        },
        {
          titre: "BlackRock–MSC协议：全球港口节点",
          contenu: `2025年3月，BlackRock和TiL（MSC的港口运营商，Aponte家族，Kohler的表亲）宣布以228亿美元收购和记黄埔在23个国家的43个港口。BlackRock获得巴拿马运河的两个战略港口，MSC/TiL获得其余41个港口的大多数。

中远海运（中国国有船运公司，通过与大连的城市联盟合作成为勒阿弗尔港合作伙伴）要求在财团中拥有多数股权，威胁要搞砸这笔交易。这种对抗说明了中美在港口基础设施控制权方面的竞争——与勒阿弗尔港有着同样的深层逻辑。

与网络的联系：BlackRock是AXA（德·卡斯特里/毕德伯格）、BNP（Lemierre/毕德伯格2025）、Total（Pouyanné/毕德伯格）、SocGen（Kohler于2025年加入）的股东。BlackRock-MSC协议直接将资产管理公司与Kohler–MSC–勒阿弗尔–Philippe三角形相连接。`,
        },
        {
          titre: "Philippe 2027: BlackRock方案",
          contenu: `2025年6月，Philippe提议将15%的养老金进行资本化，同时威胁如果这一选项不被采纳，将把退休年龄提高到67岁。

汇聚时间线：Cirelli任Raffarin幕僚长并设计菲永改革2003年 → Cirelli出任BlackRock法国总裁2015年 → Larry Fink在爱丽舍宫接受接待2017年6月（Macron就职后30天）→ Philippe部长向BlackRock推介法国2017年10月 → Cirelli受邀参加CAP 2022（2018年）→ Cirelli晋升荣誉军团勋章2019年12月 → Philippe/Macron养老金改革2019-2020年 → Philippe提议15%资本化2025年。

在MAS模型中，BlackRock是一种环境约束——一个金融吸引子，优化其关系资本的代理人向其引力聚集。Philippe-BlackRock的汇聚是改革派候选人与需要资本化的管理公司之间结构性对齐的产物。`,
        },
      ],
    },
  },
  "coalition-philippe-2027": {
    fr: {
      titre: "La Coalition Philippe 2027 — 90 signataires, un réseau, une candidature",
      sousTitre: "Analyse de la tribune « Pour la France, construisons l'union ! » — La Tribune dimanche, 29 mars 2026",
      resume:
        "90 personnalités de quatre familles politiques (Renaissance, LR, Horizons, MoDem) publient un appel à une candidature unique pour 2027. Marc Ferracci (témoin de Macron, fils d'un membre de la Commission Attali) signe la tribune, bouclant la chaîne Attali → Macron → Philippe. Philippe Tabarot (ministre des Transports, supervise les ports) renforce le triangle portuaire.",
      parties: [
        {
          titre: "La tribune : anatomie d'un ralliement",
          contenu: `La tribune paraît le 29 mars 2026, un jour après l'installation de Philippe comme maire du Havre pour son troisième mandat. Le timing accompagne la transition municipales → présidentielle. Le grand meeting présidentiel est prévu le 12 avril à Paris.

Les signataires écrivent : « Nous appelons à un sursaut d'unité, pour créer les conditions d'un large rassemblement autour d'un projet et d'une candidature unique en 2027 ». Officiellement, aucun candidat n'est désigné. Officieusement, Maud Bregeon déclare sur LCI que Philippe « a pris une sérieuse option, étant potentiellement le mieux placé pour mener ce combat ».

Parmi les signataires : des ministres en exercice (Bregeon, Jeanbrun, Tabarot, Rist, Moutchou), des députés et anciens ministres (Ferracci, Travert, Panosyan-Bouvet), et des sénateurs (Buffet) issus de quatre familles politiques.`,
        },
        {
          titre: "Marc Ferracci : le bouclage de la chaîne Attali",
          contenu: `Marc Ferracci rencontre Macron à 22 ans à Sciences Po. Témoin de mariage de Macron, et Macron est le sien. Son père Pierre Ferracci (Groupe Alpha) a siégé à la Commission Attali en 2007 — la même commission où Macron était rapporteur. Pierre Ferracci a déclaré que le libéralisme de Macron est « un peu le produit de la commission Attali ».

La chaîne se boucle : Attali → Pierre Ferracci (commission 2007) → Marc Ferracci (ami intime de Macron) → Macron → Philippe (PM 2017, suggestion d'Attali) → coalition 2027 (tribune du 29 mars). L'écosystème Attali-Macron ne disparaît pas avec la fin du mandat Macron. Il se transfère vers Philippe via ses agents les plus intimes.

En 2023, Blast révèle que Ferracci détient un tiers des parts du Groupe Alpha, dont la filiale Secafi bénéficierait de la réorganisation de Pôle emploi qu'il co-rapporte. Ce schéma de conflit d'intérêts familial rappelle l'affaire Kohler/MSC.`,
        },
        {
          titre: "Le triangle Transports-Ports-Philippe renforcé",
          contenu: `Philippe Tabarot, ministre des Transports et co-signataire, supervise les ports maritimes français dont le GPMH — nœud Philippe/Kohler/MSC/CMA CGM. Deux précédents sur ce poste : Djebbari (YL FCF 2020, interdit par la HATVP de rejoindre CMA CGM) et Beaune (Bilderberg 2023).

Tabarot est visé par une enquête PNF pour détournement de fonds publics et prise illégale d'intérêts. Ce pattern d'investigations PNF se retrouve chez Philippe (métropole du Havre, 2024) et Kohler (MSC, 2022) — trois nœuds du réseau sous surveillance judiciaire.

Cette tribune constitue un 8ème cercle du réseau Philippe : la coalition gouvernementale transpartisane. Elle se distingue des précédents cercles par sa nature explicitement politique et sa composition multipartite. C'est le passage de l'émergence à la coalescence — les agents qui optimisaient individuellement leur capital relationnel se coordonnent explicitement autour de la candidature Philippe.`,
        },
      ],
    },
    en: {
      titre: "The Philippe 2027 Coalition — 90 signatories, one network, one candidacy",
      sousTitre: "Analysis of the manifesto \"For France, let us build unity!\" — La Tribune dimanche, 29 March 2026",
      resume:
        "90 figures from four political families (Renaissance, LR, Horizons, MoDem) publish a call for a single candidacy for 2027. Marc Ferracci (Macron's wedding witness, son of an Attali Commission member) signs the manifesto, completing the Attali → Macron → Philippe chain. Philippe Tabarot (Transport Minister, overseeing ports) reinforces the port triangle.",
      parties: [
        {
          titre: "The manifesto: anatomy of a rally",
          contenu: `The manifesto appears on 29 March 2026, one day after Philippe's installation as mayor of Le Havre for his third term. The timing accompanies the municipal → presidential transition. The major presidential rally is planned for 12 April in Paris.

The signatories write: "We call for a surge of unity, to create the conditions for a broad gathering around a project and a single candidacy in 2027." Officially, no candidate is named. Unofficially, Maud Bregeon declares on LCI that Philippe "has taken a serious option, being potentially the best placed to lead this fight."

Among the signatories: serving ministers (Bregeon, Jeanbrun, Tabarot, Rist, Moutchou), MPs and former ministers (Ferracci, Travert, Panosyan-Bouvet), and senators (Buffet) from four political families.`,
        },
        {
          titre: "Marc Ferracci: completing the Attali chain",
          contenu: `Marc Ferracci meets Macron at age 22 at Sciences Po. He is Macron's wedding witness, and Macron is his. His father Pierre Ferracci (Groupe Alpha) sat on the Attali Commission in 2007 — the same commission where Macron was rapporteur. Pierre Ferracci declared that Macron's liberalism is "a little the product of the Attali commission."

The chain closes: Attali → Pierre Ferracci (commission 2007) → Marc Ferracci (Macron's closest friend) → Macron → Philippe (PM 2017, Attali's suggestion) → coalition 2027 (manifesto of 29 March). The Attali-Macron ecosystem does not disappear with the end of Macron's mandate. It transfers to Philippe via his closest agents.

In 2023, Blast reveals that Ferracci holds a third of the shares of Groupe Alpha, whose subsidiary Secafi would benefit from the reorganisation of Pôle emploi that he co-reports. This family conflict-of-interest pattern echoes the Kohler/MSC affair.`,
        },
        {
          titre: "The Transport-Ports-Philippe triangle reinforced",
          contenu: `Philippe Tabarot, Transport Minister and co-signatory, supervises French maritime ports including the GPMH — the Philippe/Kohler/MSC/CMA CGM node. Two predecessors in this role: Djebbari (FCF Young Leader 2020, barred by the HATVP from joining CMA CGM) and Beaune (Bilderberg 2023).

Tabarot is targeted by a PNF investigation for misappropriation of public funds and illegal conflict of interest. This pattern of PNF investigations is found in Philippe (Le Havre metropolis, 2024) and Kohler (MSC, 2022) — three network nodes under judicial scrutiny.

This manifesto constitutes an 8th circle of the Philippe network: the cross-party governmental coalition. It differs from the preceding circles through its explicitly political nature and multiparty composition. This is the transition from emergence to coalescence — agents who were individually optimising their relational capital explicitly coordinating around the Philippe candidacy.`,
        },
      ],
    },
    de: {
      titre: "Die Philippe-2027-Koalition — 90 Unterzeichner, ein Netzwerk, eine Kandidatur",
      sousTitre: "Analyse des Manifests \u201eFür Frankreich, lasst uns die Einheit aufbauen!\u201c — La Tribune dimanche, 29. März 2026",
      resume:
        "90 Persönlichkeiten aus vier politischen Familien (Renaissance, LR, Horizons, MoDem) veröffentlichen einen Aufruf zu einer einheitlichen Kandidatur für 2027. Marc Ferracci (Macrons Trauezeuge, Sohn eines Mitglieds der Attali-Kommission) unterzeichnet das Manifest und schließt damit die Kette Attali → Macron → Philippe. Philippe Tabarot (Verkehrsminister, beaufsichtigt Häfen) stärkt das Häfen-Dreieck.",
      parties: [
        {
          titre: "Das Manifest: Anatomie einer Sammlung",
          contenu: `Das Manifest erscheint am 29. März 2026, einen Tag nach Philippes Amtseinführung als Bürgermeister von Le Havre für seine dritte Amtszeit. Der Zeitpunkt begleitet den Übergang Kommunal- → Präsidentschaftswahl. Die große Präsidentschaftsveranstaltung ist für den 12. April in Paris geplant.

Die Unterzeichner schreiben: „Wir rufen zu einem Ruck der Einheit auf, um die Bedingungen für eine breite Sammlung um ein Projekt und eine einheitliche Kandidatur im Jahr 2027 zu schaffen." Offiziell wird kein Kandidat benannt. Inoffiziell erklärt Maud Bregeon auf LCI, dass Philippe „eine ernsthafte Option ergriffen hat, da er potenziell am besten positioniert ist, diesen Kampf zu führen."

Unter den Unterzeichnern: amtierende Minister (Bregeon, Jeanbrun, Tabarot, Rist, Moutchou), Abgeordnete und ehemalige Minister (Ferracci, Travert, Panosyan-Bouvet) und Senatoren (Buffet) aus vier politischen Familien.`,
        },
        {
          titre: "Marc Ferracci: Der Abschluss der Attali-Kette",
          contenu: `Marc Ferracci lernt Macron im Alter von 22 Jahren an der Sciences Po kennen. Er ist Macrons Trauzeuge, und Macron ist seiner. Sein Vater Pierre Ferracci (Groupe Alpha) saß 2007 in der Attali-Kommission — der gleichen Kommission, in der Macron Berichterstatter war. Pierre Ferracci erklärte, dass Macrons Liberalismus „ein bisschen das Produkt der Attali-Kommission" sei.

Die Kette schließt sich: Attali → Pierre Ferracci (Kommission 2007) → Marc Ferracci (engster Freund von Macron) → Macron → Philippe (PM 2017, Attalis Vorschlag) → Koalition 2027 (Manifest vom 29. März). Das Attali-Macron-Ökosystem verschwindet nicht mit dem Ende von Macrons Amtszeit. Es überträgt sich auf Philippe über seine engsten Agenten.

Im Jahr 2023 enthüllt Blast, dass Ferracci ein Drittel der Anteile an der Groupe Alpha hält, deren Tochtergesellschaft Secafi von der Umstrukturierung von Pôle emploi profitieren würde, über die er mitberichtet. Dieses familiäre Interessenkonfliktschema erinnert an die Affäre Kohler/MSC.`,
        },
        {
          titre: "Das Transport-Häfen-Philippe-Dreieck gestärkt",
          contenu: `Philippe Tabarot, Verkehrsminister und Mitunterzeichner, beaufsichtigt die französischen Seehäfen einschließlich des GPMH — der Knoten Philippe/Kohler/MSC/CMA CGM. Zwei Vorgänger in dieser Funktion: Djebbari (FCF Young Leader 2020, von der HATVP daran gehindert, zu CMA CGM zu wechseln) und Beaune (Bilderberg 2023).

Tabarot ist Ziel einer PNF-Untersuchung wegen Veruntreuung öffentlicher Gelder und illegaler Interessenkonflikte. Dieses Muster von PNF-Untersuchungen findet sich bei Philippe (Metropolregion Le Havre, 2024) und Kohler (MSC, 2022) — drei Netzwerkknoten unter gerichtlicher Beobachtung.

Dieses Manifest bildet einen 8. Kreis des Philippe-Netzwerks: die parteiübergreifende Regierungskoalition. Er unterscheidet sich von den vorherigen Kreisen durch seinen explizit politischen Charakter und seine multiparteiliche Zusammensetzung. Dies ist der Übergang vom Entstehen zur Koaleszenz — Agenten, die individuell ihr relationales Kapital optimierten, koordinieren sich explizit um die Kandidatur Philippe.`,
        },
      ],
    },
    es: {
      titre: "La Coalición Philippe 2027 — 90 firmantes, una red, una candidatura",
      sousTitre: "Análisis del manifiesto «¡Por Francia, construyamos la unión!» — La Tribune dimanche, 29 de marzo de 2026",
      resume:
        "90 personalidades de cuatro familias políticas (Renaissance, LR, Horizons, MoDem) publican un llamamiento a una candidatura única para 2027. Marc Ferracci (testigo de boda de Macron, hijo de un miembro de la Comisión Attali) firma el manifiesto, completando la cadena Attali → Macron → Philippe. Philippe Tabarot (ministro de Transportes, supervisa los puertos) refuerza el triángulo portuario.",
      parties: [
        {
          titre: "El manifiesto: anatomía de un rallying",
          contenu: `El manifiesto aparece el 29 de marzo de 2026, un día después de la investidura de Philippe como alcalde de Le Havre para su tercer mandato. El momento acompaña la transición municipales → presidenciales. El gran mitin presidencial está previsto para el 12 de abril en París.

Los firmantes escriben: «Hacemos un llamamiento a un impulso de unidad, para crear las condiciones de un amplio reagrupamiento en torno a un proyecto y una candidatura única en 2027». Oficialmente, ningún candidato es designado. Extraoficialmente, Maud Bregeon declara en LCI que Philippe «ha tomado una opción seria, siendo potencialmente el mejor situado para liderar este combate».

Entre los firmantes: ministros en ejercicio (Bregeon, Jeanbrun, Tabarot, Rist, Moutchou), diputados y ex ministros (Ferracci, Travert, Panosyan-Bouvet) y senadores (Buffet) procedentes de cuatro familias políticas.`,
        },
        {
          titre: "Marc Ferracci: el cierre de la cadena Attali",
          contenu: `Marc Ferracci conoce a Macron a los 22 años en Sciences Po. Es testigo de boda de Macron, y Macron es el suyo. Su padre Pierre Ferracci (Groupe Alpha) formó parte de la Comisión Attali en 2007 — la misma comisión donde Macron era ponente. Pierre Ferracci declaró que el liberalismo de Macron es «un poco el producto de la comisión Attali».

La cadena se cierra: Attali → Pierre Ferracci (comisión 2007) → Marc Ferracci (amigo íntimo de Macron) → Macron → Philippe (PM 2017, sugerencia de Attali) → coalición 2027 (manifiesto del 29 de marzo). El ecosistema Attali-Macron no desaparece con el fin del mandato de Macron. Se transfiere hacia Philippe a través de sus agentes más íntimos.

En 2023, Blast revela que Ferracci posee un tercio de las participaciones del Groupe Alpha, cuya filial Secafi se beneficiaría de la reorganización de Pôle emploi de la que es co-ponente. Este esquema de conflicto de intereses familiar recuerda el asunto Kohler/MSC.`,
        },
        {
          titre: "El triángulo Transportes-Puertos-Philippe reforzado",
          contenu: `Philippe Tabarot, ministro de Transportes y co-firmante, supervisa los puertos marítimos franceses, incluido el GPMH — nodo Philippe/Kohler/MSC/CMA CGM. Dos precedentes en este puesto: Djebbari (YL FCF 2020, prohibido por la HATVP de unirse a CMA CGM) y Beaune (Bilderberg 2023).

Tabarot está en el punto de mira de una investigación del PNF por malversación de fondos públicos y toma ilegal de intereses. Este patrón de investigaciones del PNF se da también en Philippe (metrópoli de Le Havre, 2024) y Kohler (MSC, 2022) — tres nodos de la red bajo vigilancia judicial.

Este manifiesto constituye un 8.º círculo de la red Philippe: la coalición gubernamental transpartidista. Se distingue de los círculos anteriores por su naturaleza explícitamente política y su composición multipartidista. Es el paso de la emergencia a la coalescencia — los agentes que optimizaban individualmente su capital relacional se coordinan explícitamente en torno a la candidatura Philippe.`,
        },
      ],
    },
    ru: {
      titre: "Коалиция Philippe 2027 — 90 подписантов, одна сеть, одна кандидатура",
      sousTitre: "Анализ манифеста «За Францию, строим союз!» — La Tribune dimanche, 29 марта 2026 года",
      resume:
        "90 деятелей из четырёх политических семей (Renaissance, LR, Horizons, MoDem) публикуют призыв к единой кандидатуре на 2027 год. Marc Ferracci (свидетель на свадьбе Macron, сын члена Комиссии Attali) подписывает манифест, замыкая цепочку Attali → Macron → Philippe. Philippe Tabarot (министр транспорта, курирует порты) укрепляет портовый треугольник.",
      parties: [
        {
          titre: "Манифест: анатомия ралли",
          contenu: `Манифест выходит 29 марта 2026 года, на следующий день после вступления Philippe в должность мэра Гавра на третий срок. Хронология сопровождает переход муниципальных → президентских выборов. Большой президентский митинг запланирован на 12 апреля в Париже.

Подписанты пишут: «Мы призываем к порыву единства, чтобы создать условия для широкого сплочения вокруг проекта и единой кандидатуры в 2027 году». Официально ни один кандидат не назван. Неофициально Maud Bregeon заявляет на LCI, что Philippe «занял серьёзную позицию, будучи потенциально наилучшим образом позиционированным для ведения этой борьбы».

Среди подписантов: действующие министры (Bregeon, Jeanbrun, Tabarot, Rist, Moutchou), депутаты и бывшие министры (Ferracci, Travert, Panosyan-Bouvet), а также сенаторы (Buffet) из четырёх политических семей.`,
        },
        {
          titre: "Marc Ferracci: замыкание цепи Attali",
          contenu: `Marc Ferracci встречает Macron в 22 года в Институте политических наук. Он является свидетелем на свадьбе Macron, и Macron — его. Его отец Pierre Ferracci (Groupe Alpha) входил в Комиссию Attali в 2007 году — ту же комиссию, где Macron был докладчиком. Pierre Ferracci заявил, что либерализм Macron — «это в некотором роде продукт комиссии Attali».

Цепочка замыкается: Attali → Pierre Ferracci (комиссия 2007) → Marc Ferracci (близкий друг Macron) → Macron → Philippe (PM 2017, предложение Attali) → коалиция 2027 (манифест от 29 марта). Экосистема Attali-Macron не исчезает с окончанием мандата Macron. Он переносится к Philippe через его ближайших агентов.

В 2023 году Blast раскрывает, что Ferracci владеет третью акций Groupe Alpha, чья дочерняя компания Secafi выиграла бы от реорганизации Pôle emploi, которую он совместно докладывает. Эта схема семейного конфликта интересов напоминает дело Kohler/MSC.`,
        },
        {
          titre: "Усиленный треугольник Транспорт-Порты-Philippe",
          contenu: `Philippe Tabarot, министр транспорта и со-подписант, курирует французские морские порты, включая GPMH — узел Philippe/Kohler/MSC/CMA CGM. Два предшественника на этом посту: Djebbari (молодой лидер FCF 2020, которому HATVP запретила переходить в CMA CGM) и Beaune (Bilderberg 2023).

Tabarot является объектом расследования PNF за растрату государственных средств и незаконное извлечение выгоды. Этот паттерн расследований PNF встречается у Philippe (метрополия Гавра, 2024) и Kohler (MSC, 2022) — три сетевых узла под судебным наблюдением.

Этот манифест составляет 8-й круг сети Philippe: межпартийную правительственную коалицию. Она отличается от предыдущих кругов своим явно политическим характером и многопартийным составом. Это переход от возникновения к коалесценции — агенты, индивидуально оптимизировавшие свой реляционный капитал, явно координируются вокруг кандидатуры Philippe.`,
        },
      ],
    },
    ja: {
      titre: "Philippe 2027連合 — 90人の署名者、一つのネットワーク、一つの立候補",
      sousTitre: "「フランスのために、連合を築こう！」声明の分析 — La Tribune dimanche、2026年3月29日",
      resume:
        "4つの政治ファミリー（Renaissance、LR、Horizons、MoDem）から90人の著名人が2027年に向けた単一候補への呼びかけを発表する。Marc Ferracci（Macronの結婚証人、Attali委員会メンバーの息子）が声明に署名し、Attali → Macron → Philippeのチェーンを完成させる。Philippe Tabarot（運輸大臣、港湾を監督）が港湾トライアングルを強化する。",
      parties: [
        {
          titre: "声明：結集の解剖学",
          contenu: `声明は2026年3月29日、Philippeが3期目としてル・アーブル市長に就任した翌日に発表された。このタイミングは市政→大統領選への移行を伴う。大きな大統領集会は4月12日にパリで予定されている。

署名者は書く：「私たちは、2027年に向けたプロジェクトと単一候補を中心とした広範な結集の条件を作るために、統一へのうねりを求める。」公式には候補者は指名されていない。非公式には、Maud Bregeon はLCIで、Philippeは「真剣な選択肢を取り、この戦いを率いるのに最も適した位置にある可能性がある」と述べた。

署名者の中には：現職大臣（Bregeon、Jeanbrun、Tabarot、Rist、Moutchou）、議員・元大臣（Ferracci、Travert、Panosyan-Bouvet）、4つの政治ファミリーからの上院議員（Buffet）が含まれる。`,
        },
        {
          titre: "Marc Ferracci: Attaliチェーンの完結",
          contenu: `Marc FerracciはSciences Poで22歳のときにMacronと出会う。彼はMacronの婚姻証人であり、MacronはFerracciの証人でもある。父のPierre Ferracci（Groupe Alpha）は2007年にAttali委員会に参加した——Macronが報告者を務めた同じ委員会。Pierre Ferracciは、Macronのリベラリズムは「ある意味でAttali委員会の産物だ」と述べた。

チェーンが完結する：Attali → Pierre Ferracci（委員会2007年）→ Marc Ferracci（Macronの親友）→ Macron → Philippe（PM 2017年、Attaliの提案）→ 連合2027年（3月29日の声明）。Attali-Macronエコシステムは、Macronの任期終了とともに消えない。彼の最も親密なエージェントを通じてPhilippeに移転する。

2023年、Blastは、FerracciがGroupe Alphaの株の3分の1を保有しており、その子会社SecafiがFerracciが共同報告するPôle emploiの再編から利益を得ることになると明らかにした。この家族的な利益相反スキームは、Kohler/MSC事件を彷彿とさせる。`,
        },
        {
          titre: "強化された交通-港湾-Philippeトライアングル",
          contenu: `Philippe Tabarot運輸大臣・共同署名者は、Philippe/Kohler/MSC/CMA CGMのノードであるGPMHを含むフランスの海港を監督している。このポストの前任者2名：Djebbari（FCFヤングリーダー2020年、HATVPによりCMA CGMへの移籍を禁止）とBeaune（ビルダーバーグ2023年）。

TabarotはPNFによる公金横領と不正利益取得の疑いで捜査を受けている。このPNF捜査のパターンは、Philippe（ル・アーブル大都市圏、2024年）とKohler（MSC、2022年）にも見られる——3つのネットワークノードが司法的監視下に置かれている。

この声明はPhilippeネットワークの第8の輪を構成する：超党派の政府連合。それはその明示的に政治的な性格と多党的な構成において、前の輪とは異なる。これは出現から凝集への移行である——個人的に関係資本を最適化していたエージェントたちが、Philippe候補を中心に明示的に協調する。`,
        },
      ],
    },
    it: {
      titre: "La Coalizione Philippe 2027 — 90 firmatari, una rete, una candidatura",
      sousTitre: "Analisi del manifesto «Per la Francia, costruiamo l'unione!» — La Tribune dimanche, 29 marzo 2026",
      resume:
        "90 personalità di quattro famiglie politiche (Renaissance, LR, Horizons, MoDem) pubblicano un appello a una candidatura unica per il 2027. Marc Ferracci (testimone di nozze di Macron, figlio di un membro della Commissione Attali) firma il manifesto, chiudendo la catena Attali → Macron → Philippe. Philippe Tabarot (ministro dei Trasporti, supervisiona i porti) rafforza il triangolo portuale.",
      parties: [
        {
          titre: "Il manifesto: anatomia di un raduno",
          contenu: `Il manifesto appare il 29 marzo 2026, un giorno dopo l'insediamento di Philippe come sindaco di Le Havre per il suo terzo mandato. Il timing accompagna la transizione municipali → presidenziali. Il grande comizio presidenziale è previsto per il 12 aprile a Parigi.

I firmatari scrivono: «Chiediamo uno slancio di unità, per creare le condizioni di un ampio raggruppamento intorno a un progetto e una candidatura unica nel 2027». Ufficialmente, nessun candidato è designato. Ufficiosamente, Maud Bregeon dichiara su LCI che Philippe «ha preso una seria opzione, essendo potenzialmente il più adatto a condurre questa battaglia».

Tra i firmatari: ministri in carica (Bregeon, Jeanbrun, Tabarot, Rist, Moutchou), deputati ed ex ministri (Ferracci, Travert, Panosyan-Bouvet) e senatori (Buffet) provenienti da quattro famiglie politiche.`,
        },
        {
          titre: "Marc Ferracci: il completamento della catena Attali",
          contenu: `Marc Ferracci incontra Macron a 22 anni a Sciences Po. È testimone di nozze di Macron, e Macron è il suo. Suo padre Pierre Ferracci (Groupe Alpha) ha fatto parte della Commissione Attali nel 2007 — la stessa commissione in cui Macron era relatore. Pierre Ferracci ha dichiarato che il liberalismo di Macron è «un po' il prodotto della commissione Attali».

La catena si chiude: Attali → Pierre Ferracci (commissione 2007) → Marc Ferracci (amico intimo di Macron) → Macron → Philippe (PM 2017, suggerimento di Attali) → coalizione 2027 (manifesto del 29 marzo). L'ecosistema Attali-Macron non scompare con la fine del mandato di Macron. Si trasferisce verso Philippe tramite i suoi agenti più intimi.

Nel 2023, Blast rivela che Ferracci detiene un terzo delle quote del Groupe Alpha, la cui filiale Secafi beneficerebbe della riorganizzazione di Pôle emploi di cui è co-relatore. Questo schema di conflitto di interessi familiare ricorda l'affaire Kohler/MSC.`,
        },
        {
          titre: "Il triangolo Trasporti-Porti-Philippe rafforzato",
          contenu: `Philippe Tabarot, ministro dei Trasporti e cofirmatario, supervisiona i porti marittimi francesi tra cui il GPMH — nodo Philippe/Kohler/MSC/CMA CGM. Due precedenti in questo incarico: Djebbari (YL FCF 2020, vietato dalla HATVP di entrare in CMA CGM) e Beaune (Bilderberg 2023).

Tabarot è oggetto di un'indagine del PNF per appropriazione indebita di fondi pubblici e presa illegale di interessi. Questo schema di indagini del PNF si ritrova in Philippe (metropoli di Le Havre, 2024) e Kohler (MSC, 2022) — tre nodi della rete sotto sorveglianza giudiziaria.

Questo manifesto costituisce un 8° cerchio della rete Philippe: la coalizione governativa transpartitica. Si distingue dai cerchi precedenti per la sua natura esplicitamente politica e la sua composizione multipartite. È il passaggio dall'emergenza alla coalescenza — gli agenti che ottimizzavano individualmente il loro capitale relazionale si coordinano esplicitamente attorno alla candidatura Philippe.`,
        },
      ],
    },
    zh: {
      titre: "Philippe 2027联盟 — 90位签署人，一个网络，一个候选人",
      sousTitre: "「为了法国，让我们建立联盟！」宣言分析 — La Tribune dimanche，2026年3月29日",
      resume:
        "来自四个政治家族（Renaissance、LR、Horizons、MoDem）的90位著名人士发表呼吁，号召2027年推出单一候选人。Marc Ferracci（Macron的婚礼证人，Attali委员会成员之子）签署宣言，完成了Attali → Macron → Philippe的链条。Philippe Tabarot（交通部长，监督港口）强化了港口三角形。",
      parties: [
        {
          titre: "宣言：团结的解剖学",
          contenu: `宣言于2026年3月29日发表，即Philippe第三次就任勒阿弗尔市长后的第二天。时机伴随着市政→总统选举的过渡。重大总统集会计划于4月12日在巴黎举行。

签署人写道："我们呼吁实现团结的跃升，为2027年围绕一个项目和单一候选人进行广泛汇聚创造条件。"官方上，没有候选人被指定。非正式地，Maud Bregeon在LCI上表示，Philippe"占据了一个严肃的选择，作为领导这场战斗最有潜力的人选"。

签署人包括：现任部长（Bregeon、Jeanbrun、Tabarot、Rist、Moutchou）、议员和前部长（Ferracci、Travert、Panosyan-Bouvet），以及来自四个政治家族的参议员（Buffet）。`,
        },
        {
          titre: "Marc Ferracci: Attali链条的闭合",
          contenu: `Marc Ferracci在22岁时在巴黎政治学院认识了Macron。他是Macron的婚礼证人，而Macron也是他的证人。他的父亲Pierre Ferracci（Groupe Alpha）在2007年参加了Attali委员会——同一个委员会，当时Macron是报告员。Pierre Ferracci表示，Macron的自由主义"在某种程度上是Attali委员会的产物"。

链条完成闭合：Attali → Pierre Ferracci（2007年委员会）→ Marc Ferracci（Macron的密友）→ Macron → Philippe（2017年总理，Attali的建议）→ 2027年联盟（3月29日宣言）。Attali-Macron生态系统不会随Macron任期结束而消失。它通过其最亲密的代理人转移到Philippe。

2023年，Blast披露Ferracci持有Groupe Alpha三分之一的股份，其子公司Secafi将从他联合报告的Pôle emploi重组中受益。这种家族利益冲突模式让人想起Kohler/MSC事件。`,
        },
        {
          titre: "强化的交通-港口-Philippe三角形",
          contenu: `Philippe Tabarot，交通部长兼联署人，监督法国海港，包括GPMH——Philippe/Kohler/MSC/CMA CGM节点。此职位的两位前任：Djebbari（FCF青年领袖2020年，被HATVP禁止加入CMA CGM）和Beaune（毕德伯格2023年）。

Tabarot正面临PNF对挪用公款和非法利益冲突的调查。这种PNF调查模式在Philippe（勒阿弗尔大都会，2024年）和Kohler（MSC，2022年）那里也有出现——三个网络节点处于司法监控之下。

这份宣言构成了Philippe网络的第8个圆圈：跨党派政府联盟。它通过其明确的政治性质和多党组成区别于前几个圆圈。这是从涌现到聚合的过渡——个别优化关系资本的代理人明确地围绕Philippe候选人进行协调。`,
        },
      ],
    },
  },
  "bilan-fiscal-social-philippe": {
    fr: {
      titre: "Bilan fiscal, social et sanitaire — Les dossiers manquants du mandat Philippe",
      sousTitre: "CSG, ISF/IFI, flat tax, ordonnances travail, assurance chômage, obligation vaccinale",
      resume:
        "Huit dossiers supplémentaires du mandat Philippe (2017-2020) : la réforme fiscale du capital (ISF→IFI, flat tax, CSG), la réforme du marché du travail (ordonnances, assurance chômage) et les dossiers sanitaires. Le bilan dessine une orientation cohérente : alléger la fiscalité du capital tout en alourdissant les prélèvements sur le travail et les retraités — exactement aligné avec les intérêts de BlackRock.",
      parties: [
        {
          titre: "La réforme fiscale du capital : ISF, flat tax, CSG",
          contenu: `Au 1er janvier 2018, trois réformes simultanées transforment la fiscalité française :

CSG +1,7 point : 22,5 milliards de recettes. Les salariés du privé sont légèrement gagnants (suppression cotisations), mais les retraités perdent 3,5 milliards. Selon l'IFRAP, l'État gagne 1,32 milliard net — un impôt déguisé. Déclencheur direct de la colère des Gilets jaunes.

ISF → IFI : seuls les biens immobiliers taxés, actifs financiers exonérés. Contribuables : 358 000 (ISF) → 133 000 (IFI). Coût : 4,5 Mds/an. France Stratégie (2023) conclut : aucun effet significatif sur l'investissement. Connexion BlackRock : en exonérant les actifs financiers, la réforme rend les ETF BlackRock plus attractifs que l'immobilier.

Flat tax (PFU 30 %) : taux unique remplaçant le barème progressif pour les revenus du capital. Les dividendes explosent (+60 % entre 2017 et 2019) mais se concentrent sur les 0,1 % les plus riches. Le sénateur Éblé : « 4,5 Mds/an pour 50 000 emplois = 90 000 € par emploi ! »`,
        },
        {
          titre: "Ordonnances travail et assurance chômage : la chaîne Attali-Ferracci",
          contenu: `Le 31 août 2017, Philippe et Pénicaud présentent 5 ordonnances réformant le Code du travail : plafonnement des indemnités prud'homales (« barème Macron »), rupture conventionnelle collective, fusion des instances en CSE, primauté de l'accord d'entreprise.

Connexion réseau : les ordonnances s'inscrivent dans la chaîne Commission Attali (2007) → Macron ministre (deal Uber) → ordonnances Philippe (2017). Marc Ferracci, théoricien de la « flexisécurité », est le cerveau de la réforme. Il est témoin de mariage de Macron ET fils de Pierre Ferracci (Commission Attali). Ferracci signe la tribune des 90 pour Philippe en mars 2026.

L'été 2019, la réforme de l'assurance chômage réduit les allocations pour les travailleurs précaires. L'Unédic estime que 1,15 million d'allocataires verront leurs droits réduits. La réforme est inspirée par Ferracci.

En MAS, le bilan Philippe n'est pas une série de décisions isolées — c'est la fonction d'utilité révélée d'un centroïde optimisant dans l'espace d'états défini par BlackRock (capitalisation), CMA CGM (dérégulation portuaire) et le réseau Attali-Ferracci (flexisécurité).`,
        },
        {
          titre: "Dossiers sanitaires et correctif factuel",
          contenu: `Point de rigueur : l'obligation vaccinale des soignants (loi du 5 août 2021) a été votée sous Castex, pas Philippe (parti le 3 juillet 2020). L'infographie virale la lui attribue à tort. Philippe est responsable de la gestion initiale du Covid : confinement (17 mars 2020), décret Rivotril (28 mars 2020), « masques inutiles » (13 mars 2020, TF1).

Environ 15 000 soignants ont été suspendus, dont 4 000 encore suspendus en mai 2022. L'obligation a été suspendue le 13 mai 2023 après recommandation de la HAS.

Les impôts de production (3,5 % du PIB, champion européen) n'ont PAS été réduits sous Philippe malgré les recommandations de BlackRock, du MEDEF et de la Commission européenne. Philippe a préféré ISF/flat tax — des mesures qui bénéficient aux actionnaires plutôt qu'aux entreprises productrices. La baisse n'interviendra que sous Castex et Attal.`,
        },
      ],
    },
    en: {
      titre: "Fiscal, Social and Health Record — The Missing Files of the Philippe Mandate",
      sousTitre: "CSG, ISF/IFI, flat tax, labour ordinances, unemployment insurance, vaccine mandate",
      resume:
        "Eight additional files from the Philippe mandate (2017-2020): the capital tax reform (ISF→IFI, flat tax, CSG), the labour market reform (ordinances, unemployment insurance) and the health files. The record draws a coherent orientation: lightening the taxation of capital while increasing levies on labour and retirees — exactly aligned with BlackRock's interests.",
      parties: [
        {
          titre: "The Capital Tax Reform: ISF, Flat Tax, CSG",
          contenu: `On 1 January 2018, three simultaneous reforms transformed French taxation:

CSG +1.7 points: €22.5 billion in revenue. Private sector employees are slight winners (removal of contributions), but retirees lose €3.5 billion. According to the IFRAP, the State gains €1.32 billion net — a disguised tax. Direct trigger of the Gilets jaunes anger.

ISF → IFI: only real estate assets taxed, financial assets exempt. Taxpayers: 358,000 (ISF) → 133,000 (IFI). Cost: €4.5 billion/year. France Stratégie (2023) concludes: no significant effect on investment. BlackRock connection: by exempting financial assets, the reform makes BlackRock ETFs more attractive than real estate.

Flat tax (PFU 30%): single rate replacing the progressive scale for capital income. Dividends explode (+60% between 2017 and 2019) but are concentrated among the top 0.1%. Senator Éblé: "€4.5 billion/year for 50,000 jobs = €90,000 per job!"`,
        },
        {
          titre: "Labour Ordinances and Unemployment Insurance: The Attali-Ferracci Chain",
          contenu: `On 31 August 2017, Philippe and Pénicaud present 5 ordinances reforming the Labour Code: capping of employment tribunal damages ("Macron scale"), collective conventional severance, merger of employee bodies into the CSE, primacy of company-level agreements.

Network connection: the ordinances form part of the chain Attali Commission (2007) → Macron as minister (Uber deal) → Philippe ordinances (2017). Marc Ferracci, theorist of "flexicurity", is the architect of the reform. He is Macron's wedding witness AND the son of Pierre Ferracci (Attali Commission). Ferracci signs the manifesto of the 90 for Philippe in March 2026.

In summer 2019, the unemployment insurance reform reduces benefits for precarious workers. The Unédic estimates that 1.15 million claimants will see their rights reduced. The reform is inspired by Ferracci.

In MAS terms, the Philippe record is not a series of isolated decisions — it is the revealed utility function of a centroid optimising in the state space defined by BlackRock (capitalisation), CMA CGM (port deregulation) and the Attali-Ferracci network (flexicurity).`,
        },
        {
          titre: "Health Files and Factual Correction",
          contenu: `A point of rigour: the vaccine mandate for healthcare workers (law of 5 August 2021) was passed under Castex, not Philippe (who left on 3 July 2020). The viral infographic wrongly attributes it to him. Philippe is responsible for the initial management of Covid: lockdown (17 March 2020), Rivotril decree (28 March 2020), "masks useless" (13 March 2020, TF1).

Approximately 15,000 healthcare workers were suspended, of whom 4,000 were still suspended in May 2022. The mandate was suspended on 13 May 2023 following a recommendation from the HAS.

Production taxes (3.5% of GDP, European champion) were NOT reduced under Philippe despite the recommendations of BlackRock, the MEDEF and the European Commission. Philippe preferred ISF/flat tax — measures that benefit shareholders rather than producing companies. The reduction would only come under Castex and Attal.`,
        },
      ],
    },
    de: {
      titre: "Fiskal-, Sozial- und Gesundheitsbilanz — Die fehlenden Akten des Mandats Philippe",
      sousTitre: "CSG, ISF/IFI, Flat Tax, Arbeitsverordnungen, Arbeitslosenversicherung, Impfpflicht",
      resume:
        "Acht zusätzliche Akten aus dem Mandat Philippe (2017-2020): die Kapitalsteuerreform (ISF→IFI, Flat Tax, CSG), die Arbeitsmarktreform (Verordnungen, Arbeitslosenversicherung) und die Gesundheitsakten. Die Bilanz zeichnet eine kohärente Ausrichtung: Erleichterung der Kapitalbesteuerung bei gleichzeitiger Erhöhung der Abgaben auf Arbeit und Rentner — genau auf BlackRocks Interessen ausgerichtet.",
      parties: [
        {
          titre: "Die Kapitalsteuerreform: ISF, Flat Tax, CSG",
          contenu: `Am 1. Januar 2018 transformierten drei gleichzeitige Reformen die französische Besteuerung:

CSG +1,7 Punkte: 22,5 Milliarden Euro Einnahmen. Privatangestellte sind leichte Gewinner (Abschaffung von Beiträgen), aber Rentner verlieren 3,5 Milliarden. Laut IFRAP gewinnt der Staat 1,32 Milliarden netto — eine verschleierte Steuer. Direkter Auslöser der Gilets-jaunes-Wut.

ISF → IFI: nur Immobilien besteuert, Finanzanlagen befreit. Steuerpflichtige: 358.000 (ISF) → 133.000 (IFI). Kosten: 4,5 Mrd./Jahr. France Stratégie (2023) schlussfolgert: kein signifikanter Effekt auf Investitionen. BlackRock-Verbindung: Durch die Befreiung von Finanzanlagen macht die Reform BlackRock-ETFs attraktiver als Immobilien.

Flat Tax (PFU 30 %): Einheitssatz, der den progressiven Tarif für Kapitalerträge ersetzt. Dividenden explodieren (+60 % zwischen 2017 und 2019), konzentrieren sich aber auf die 0,1 % Reichsten. Senator Éblé: „4,5 Mrd./Jahr für 50.000 Arbeitsplätze = 90.000 € pro Arbeitsplatz!"`,
        },
        {
          titre: "Arbeitsverordnungen und Arbeitslosenversicherung: Die Attali-Ferracci-Kette",
          contenu: `Am 31. August 2017 präsentieren Philippe und Pénicaud 5 Verordnungen zur Reform des Arbeitsgesetzbuchs: Begrenzung der Abfindungen bei Arbeitsgericht (« Macron-Skala »), kollektive konventionelle Kündigung, Fusion der Gremien in den CSE, Vorrang des Unternehmensabkommens.

Netzwerkverbindung: Die Verordnungen sind Teil der Kette Attali-Kommission (2007) → Macron als Minister (Uber-Deal) → Philippe-Verordnungen (2017). Marc Ferracci, Theoretiker der „Flexisicherheit", ist das Gehirn der Reform. Er ist Trauezeuge von Macron UND Sohn von Pierre Ferracci (Attali-Kommission). Ferracci unterzeichnet das Manifest der 90 für Philippe im März 2026.

Im Sommer 2019 reduziert die Reform der Arbeitslosenversicherung die Leistungen für Gelegenheitsarbeiter. Die Unédic schätzt, dass 1,15 Millionen Leistungsempfänger ihre Rechte reduziert sehen werden. Die Reform wird von Ferracci inspiriert.

In MAS-Begriffen ist die Philippe-Bilanz keine Reihe isolierter Entscheidungen — sie ist die offenbarte Nutzenfunktion eines Zentroiden, der im Zustandsraum optimiert, der durch BlackRock (Kapitalisierung), CMA CGM (Hafenderegulierung) und das Attali-Ferracci-Netzwerk (Flexisicherheit) definiert wird.`,
        },
        {
          titre: "Gesundheitsakten und Faktenkorrekturen",
          contenu: `Ein Punkt der Genauigkeit: Die Impfpflicht für Pflegekräfte (Gesetz vom 5. August 2021) wurde unter Castex verabschiedet, nicht Philippe (der am 3. Juli 2020 ging). Die virale Infografik schreibt sie ihm fälschlicherweise zu. Philippe ist verantwortlich für das anfängliche Covid-Management: Lockdown (17. März 2020), Rivotril-Dekret (28. März 2020), „Masken unnötig" (13. März 2020, TF1).

Etwa 15.000 Pflegekräfte wurden suspendiert, von denen im Mai 2022 noch 4.000 suspendiert waren. Die Pflicht wurde am 13. Mai 2023 nach einer Empfehlung der HAS ausgesetzt.

Die Produktionssteuern (3,5 % des BIP, europäischer Spitzenreiter) wurden unter Philippe NICHT gesenkt, trotz der Empfehlungen von BlackRock, dem MEDEF und der Europäischen Kommission. Philippe bevorzugte ISF/Flat Tax — Maßnahmen, die Aktionären eher zugutekommen als produzierenden Unternehmen. Die Senkung erfolgte erst unter Castex und Attal.`,
        },
      ],
    },
    es: {
      titre: "Balance fiscal, social y sanitario — Los expedientes pendientes del mandato Philippe",
      sousTitre: "CSG, ISF/IFI, flat tax, ordenanzas laborales, seguro de desempleo, obligación vacunal",
      resume:
        "Ocho expedientes adicionales del mandato Philippe (2017-2020): la reforma fiscal del capital (ISF→IFI, flat tax, CSG), la reforma del mercado laboral (ordenanzas, seguro de desempleo) y los expedientes sanitarios. El balance dibuja una orientación coherente: aligerar la fiscalidad del capital mientras se aumentan las cargas sobre el trabajo y los jubilados — exactamente alineado con los intereses de BlackRock.",
      parties: [
        {
          titre: "La reforma fiscal del capital: ISF, flat tax, CSG",
          contenu: `El 1 de enero de 2018, tres reformas simultáneas transformaron la fiscalidad francesa:

CSG +1,7 puntos: 22.500 millones de euros de recaudación. Los asalariados del sector privado son ligeramente ganadores (supresión de cotizaciones), pero los jubilados pierden 3.500 millones. Según el IFRAP, el Estado gana 1.320 millones netos — un impuesto disfrazado. Detonante directo de la ira de los Gilets jaunes.

ISF → IFI: solo los bienes inmuebles tributan, activos financieros exentos. Contribuyentes: 358.000 (ISF) → 133.000 (IFI). Coste: 4.500 M€/año. France Stratégie (2023) concluye: ningún efecto significativo en la inversión. Conexión BlackRock: al eximir los activos financieros, la reforma hace los ETF de BlackRock más atractivos que el inmobiliario.

Flat tax (PFU 30 %): tipo único que sustituye a la escala progresiva para los ingresos del capital. Los dividendos explotan (+60 % entre 2017 y 2019) pero se concentran en el 0,1 % más rico. El senador Éblé: "4.500 M€/año para 50.000 empleos = 90.000 € por empleo!"`,
        },
        {
          titre: "Ordenanzas laborales y seguro de desempleo: la cadena Attali-Ferracci",
          contenu: `El 31 de agosto de 2017, Philippe y Pénicaud presentan 5 ordenanzas que reforman el Código del Trabajo: limitación de las indemnizaciones por despido improcedente («baremo Macron»), ruptura convencional colectiva, fusión de los órganos de representación en el CSE, primacía del acuerdo de empresa.

Conexión de red: las ordenanzas se inscriben en la cadena Comisión Attali (2007) → Macron ministro (acuerdo Uber) → ordenanzas Philippe (2017). Marc Ferracci, teórico de la «flexiseguridad», es el cerebro de la reforma. Es testigo de boda de Macron Y hijo de Pierre Ferracci (Comisión Attali). Ferracci firma el manifiesto de los 90 para Philippe en marzo de 2026.

En el verano de 2019, la reforma del seguro de desempleo reduce las prestaciones para los trabajadores precarios. La Unédic estima que 1,15 millones de beneficiarios verán sus derechos reducidos. La reforma está inspirada por Ferracci.

En términos de MAS, el balance Philippe no es una serie de decisiones aisladas — es la función de utilidad revelada de un centroide que optimiza en el espacio de estados definido por BlackRock (capitalización), CMA CGM (desregulación portuaria) y la red Attali-Ferracci (flexiseguridad).`,
        },
        {
          titre: "Expedientes sanitarios y corrección factual",
          contenu: `Un punto de rigor: la obligación vacunal de los sanitarios (ley del 5 de agosto de 2021) fue votada bajo Castex, no Philippe (que se fue el 3 de julio de 2020). La infografía viral se la atribuye erróneamente. Philippe es responsable de la gestión inicial del Covid: confinamiento (17 de marzo de 2020), decreto Rivotril (28 de marzo de 2020), «mascarillas inútiles» (13 de marzo de 2020, TF1).

Unos 15.000 sanitarios fueron suspendidos, de los cuales 4.000 seguían suspendidos en mayo de 2022. La obligación fue suspendida el 13 de mayo de 2023 tras la recomendación de la HAS.

Los impuestos de producción (3,5 % del PIB, campeón europeo) NO fueron reducidos bajo Philippe a pesar de las recomendaciones de BlackRock, el MEDEF y la Comisión Europea. Philippe prefirió ISF/flat tax — medidas que benefician a los accionistas más que a las empresas productoras. La rebaja solo se produciría bajo Castex y Attal.`,
        },
      ],
    },
    ru: {
      titre: "Финансовый, социальный и санитарный итог — Недостающие дела мандата Philippe",
      sousTitre: "CSG, ISF/IFI, единый налог, трудовые ордонансы, страхование от безработицы, обязательная вакцинация",
      resume:
        "Восемь дополнительных дел мандата Philippe (2017-2020): реформа налогообложения капитала (ISF→IFI, единый налог, CSG), реформа рынка труда (ордонансы, страхование от безработицы) и санитарные дела. Итог рисует последовательную ориентацию: облегчение налогообложения капитала при одновременном увеличении отчислений с труда и пенсионеров — точно соответствующую интересам BlackRock.",
      parties: [
        {
          titre: "Реформа налогообложения капитала: ISF, единый налог, CSG",
          contenu: `С 1 января 2018 года три одновременные реформы изменили французское налогообложение:

CSG +1,7 пункта: 22,5 миллиарда евро поступлений. Работники частного сектора в небольшом выигрыше (отмена взносов), но пенсионеры теряют 3,5 миллиарда. По данным IFRAP, государство получает 1,32 миллиарда чистыми — замаскированный налог. Прямой пусковой механизм гнева Жёлтых жилетов.

ISF → IFI: облагаются только недвижимые активы, финансовые активы освобождены. Налогоплательщики: 358 000 (ISF) → 133 000 (IFI). Стоимость: 4,5 млрд/год. France Stratégie (2023) заключает: никакого значительного эффекта на инвестиции. Связь с BlackRock: освобождая финансовые активы, реформа делает ETF BlackRock более привлекательными, чем недвижимость.

Единый налог (PFU 30 %): единая ставка, заменяющая прогрессивную шкалу для доходов с капитала. Дивиденды взрываются (+60 % между 2017 и 2019 годами), но концентрируются у 0,1 % богатейших. Сенатор Эблé: «4,5 млрд/год за 50 000 рабочих мест = 90 000 € за рабочее место!»`,
        },
        {
          titre: "Трудовые ордонансы и страхование от безработицы: цепь Attali-Ferracci",
          contenu: `31 августа 2017 года Philippe и Pénicaud представили 5 ордонансов, реформирующих Трудовой кодекс: ограничение возмещения по решению трудового арбитража («шкала Макрона»), коллективное договорное расторжение, слияние представительных органов в CSE, приоритет соглашений на уровне предприятия.

Сетевая связь: ордонансы вписываются в цепочку Комиссия Attali (2007) → Macron министр (сделка Uber) → ордонансы Philippe (2017). Marc Ferracci, теоретик «флексибилизации», является мозгом реформы. Он является свидетелем на свадьбе Macron И сыном Pierre Ferracci (Комиссия Attali). Ferracci подписывает манифест 90 в поддержку Philippe в марте 2026 года.

Летом 2019 года реформа страхования от безработицы сокращает пособия для нестабильных работников. Unédic оценивает, что 1,15 миллиона получателей увидят свои права сокращёнными. Реформа вдохновлена Ferracci.

В терминах MAS итог Philippe — это не серия изолированных решений, а выявленная функция полезности центроида, оптимизирующего в пространстве состояний, определённом BlackRock (капитализация), CMA CGM (дерегулирование портов) и сетью Attali-Ferracci (флексибилизация).`,
        },
        {
          titre: "Санитарные дела и фактическая поправка",
          contenu: `Точность: обязательная вакцинация медработников (закон от 5 августа 2021 года) была принята при Castex, а не Philippe (ушедшем 3 июля 2020 года). Вирусная инфографика ошибочно приписывает её ему. Philippe несёт ответственность за первоначальное управление Covid: карантин (17 марта 2020 года), декрет Rivotril (28 марта 2020 года), «маски бесполезны» (13 марта 2020 года, TF1).

Около 15 000 медработников были отстранены от работы, из которых 4 000 оставались отстранёнными в мае 2022 года. Обязательство было приостановлено 13 мая 2023 года после рекомендации HAS.

Производственные налоги (3,5 % ВВП, европейский чемпион) НЕ были снижены при Philippe вопреки рекомендациям BlackRock, MEDEF и Европейской комиссии. Philippe предпочёл ISF/единый налог — меры, которые приносят пользу акционерам, а не производственным предприятиям. Снижение произошло лишь при Castex и Attal.`,
        },
      ],
    },
    ja: {
      titre: "財政・社会・保健記録 — Philippeの任期から欠けているファイル",
      sousTitre: "CSG、ISF/IFI、フラット税、労働オルドナンス、失業保険、ワクチン接種義務",
      resume:
        "Philippe任期（2017-2020年）の8つの追加ファイル：資本税改革（ISF→IFI、フラット税、CSG）、労働市場改革（オルドナンス、失業保険）、保健ファイル。記録は一貫した方向性を描いている：労働者と退職者への課税を増やす一方で資本への課税を軽減する——BlackRockの利益と完全に一致している。",
      parties: [
        {
          titre: "資本税改革：ISF、フラット税、CSG",
          contenu: `2018年1月1日、三つの同時改革がフランスの課税を変革した：

CSG +1.7ポイント：225億ユーロの収入。民間部門の従業員はわずかに勝者（拠出金廃止）だが、退職者は35億を失う。IFRAPによると、国家は純額13.2億を得る——偽装税。黄色いベスト運動の怒りの直接の引き金。

ISF → IFI：不動産資産のみ課税、金融資産は免除。納税者：358,000人（ISF）→ 133,000人（IFI）。コスト：45億ユーロ/年。France Stratégie（2023年）の結論：投資への有意な効果なし。BlackRock接続：金融資産を免除することで、改革はBlackRockのETFを不動産より魅力的にする。

フラット税（PFU 30%）：資本収入に対する累進課税を置き換える単一税率。配当は爆発（2017年から2019年の間に+60%）するが、富裕層上位0.1%に集中する。Éblé上院議員：「年45億ユーロで5万人の雇用 = 1雇用あたり9万ユーロ！」`,
        },
        {
          titre: "労働オルドナンスと失業保険：Attali-Ferracciチェーン",
          contenu: `2017年8月31日、PhilippeとPénicaudは労働法典を改革する5つのオルドナンスを発表した：労働審判所の損害賠償の上限（「マクロン基準」）、集団的協定による解雇、代表機関のCSEへの統合、企業レベルの協定の優先。

ネットワーク接続：オルドナンスはAttali委員会（2007年）→ 大臣としてのMacron（Uber取引）→ Philippeのオルドナンス（2017年）の連鎖に位置する。「フレキシキュリティ」の理論家であるMarc Ferracciが改革の頭脳。彼はMacronの婚礼証人であり、Pierre Ferracciの息子（Attali委員会）でもある。Ferracciは2026年3月にPhilippeへの90人の署名者声明に署名する。

2019年夏、失業保険改革は非正規労働者への給付を削減する。Unédicは115万人の受給者の権利が削減されると推定する。改革はFerracciに着想を受けている。

MAS的には、Philippeの記録は孤立した決定の連続ではない——BlackRock（資本化）、CMA CGM（港湾規制緩和）、Attali-Ferracci network（フレキシキュリティ）によって定義された状態空間で最適化する重心の顕示選好関数である。`,
        },
        {
          titre: "保健ファイルと事実の修正",
          contenu: `正確さのポイント：医療従事者のワクチン接種義務（2021年8月5日の法律）はCastexのもとで採択されたものであり、Philippe（2020年7月3日に去った）のものではない。ウイルス的なインフォグラフィックは誤って彼に帰している。Philippeは初期のCovid管理に責任がある：ロックダウン（2020年3月17日）、Rivotril令（2020年3月28日）、「マスクは不要」（2020年3月13日、TF1）。

約15,000人の医療従事者が停職処分を受け、2022年5月には4,000人がまだ停職中だった。義務は2023年5月13日にHASの勧告を受けて停止された。

生産税（GDP比3.5%、欧州チャンピオン）はBlackRock、MEDEF、欧州委員会の勧告にもかかわらず、Philippe下では引き下げられなかった。PhilippeはISF/フラット税を優先した——生産企業よりも株主に恩恵をもたらす措置。引き下げはCastexとAttalのもとでのみ実現した。`,
        },
      ],
    },
    it: {
      titre: "Bilancio fiscale, sociale e sanitario — I fascicoli mancanti del mandato Philippe",
      sousTitre: "CSG, ISF/IFI, flat tax, ordinanze lavoro, indennità di disoccupazione, obbligo vaccinale",
      resume:
        "Otto fascicoli aggiuntivi del mandato Philippe (2017-2020): la riforma fiscale del capitale (ISF→IFI, flat tax, CSG), la riforma del mercato del lavoro (ordinanze, indennità di disoccupazione) e i fascicoli sanitari. Il bilancio delinea un orientamento coerente: alleggerire la fiscalità del capitale aumentando al contempo i prelievi sul lavoro e i pensionati — esattamente allineato con gli interessi di BlackRock.",
      parties: [
        {
          titre: "La riforma fiscale del capitale: ISF, flat tax, CSG",
          contenu: `Al 1° gennaio 2018, tre riforme simultanee hanno trasformato la fiscalità francese:

CSG +1,7 punti: 22,5 miliardi di entrate. I lavoratori dipendenti del settore privato sono leggermente vincitori (soppressione dei contributi), ma i pensionati perdono 3,5 miliardi. Secondo l'IFRAP, lo Stato guadagna 1,32 miliardi netti — una tassa camuffata. Innesco diretto della rabbia dei Gilets jaunes.

ISF → IFI: tassati solo i beni immobili, gli attivi finanziari esenti. Contribuenti: 358.000 (ISF) → 133.000 (IFI). Costo: 4,5 Mld/anno. France Stratégie (2023) conclude: nessun effetto significativo sugli investimenti. Connessione BlackRock: esentando gli attivi finanziari, la riforma rende gli ETF di BlackRock più attraenti degli immobili.

Flat tax (PFU 30 %): aliquota unica che sostituisce il barème progressivo per i redditi da capitale. I dividendi esplodono (+60 % tra il 2017 e il 2019) ma si concentrano sullo 0,1 % dei più ricchi. Il senatore Éblé: «4,5 Mld/anno per 50.000 posti di lavoro = 90.000 € a posto di lavoro!»`,
        },
        {
          titre: "Ordinanze lavoro e indennità di disoccupazione: la catena Attali-Ferracci",
          contenu: `Il 31 agosto 2017, Philippe e Pénicaud presentano 5 ordinanze che riformano il Codice del lavoro: massimale delle indennità per il tribunale del lavoro («barème Macron»), risoluzione convenzionale collettiva, fusione degli organi rappresentativi nel CSE, primato degli accordi aziendali.

Connessione di rete: le ordinanze si inscrivono nella catena Commissione Attali (2007) → Macron ministro (deal Uber) → ordinanze Philippe (2017). Marc Ferracci, teorico della «flessicurezza», è il cervello della riforma. È testimone di nozze di Macron E figlio di Pierre Ferracci (Commissione Attali). Ferracci firma il manifesto dei 90 per Philippe nel marzo 2026.

Nell'estate del 2019, la riforma dell'indennità di disoccupazione riduce le prestazioni per i lavoratori precari. L'Unédic stima che 1,15 milioni di beneficiari vedranno i loro diritti ridotti. La riforma è ispirata da Ferracci.

In termini di MAS, il bilancio Philippe non è una serie di decisioni isolate — è la funzione di utilità rivelata di un centroide che ottimizza nello spazio degli stati definito da BlackRock (capitalizzazione), CMA CGM (deregolamentazione portuale) e dalla rete Attali-Ferracci (flessicurezza).`,
        },
        {
          titre: "Fascicoli sanitari e correttivo fattuale",
          contenu: `Un punto di rigore: l'obbligo vaccinale degli operatori sanitari (legge del 5 agosto 2021) è stato votato sotto Castex, non Philippe (partito il 3 luglio 2020). L'infografica virale glielo attribuisce erroneamente. Philippe è responsabile della gestione iniziale del Covid: confinamento (17 marzo 2020), decreto Rivotril (28 marzo 2020), «mascherine inutili» (13 marzo 2020, TF1).

Circa 15.000 operatori sanitari sono stati sospesi, di cui 4.000 ancora sospesi nel maggio 2022. L'obbligo è stato sospeso il 13 maggio 2023 dopo la raccomandazione della HAS.

Le imposte di produzione (3,5 % del PIL, campione europeo) NON sono state ridotte sotto Philippe nonostante le raccomandazioni di BlackRock, del MEDEF e della Commissione europea. Philippe ha preferito ISF/flat tax — misure che avvantaggiano gli azionisti piuttosto che le imprese produttrici. La riduzione avverrà solo sotto Castex e Attal.`,
        },
      ],
    },
    zh: {
      titre: "财政、社会与卫生记录 — Philippe任期的缺失文件",
      sousTitre: "CSG、ISF/IFI、统一税、劳动法令、失业保险、疫苗接种义务",
      resume:
        "Philippe任期（2017-2020年）的8个额外文件：资本税改革（ISF→IFI、统一税、CSG）、劳动市场改革（法令、失业保险）和卫生文件。记录描绘了一个连贯的方向：在减轻资本税负的同时增加对劳动和退休人员的征税——与BlackRock的利益完全一致。",
      parties: [
        {
          titre: "资本税改革：ISF、统一税、CSG",
          contenu: `2018年1月1日，三项同步改革改变了法国税制：

CSG +1.7个百分点：225亿欧元收入。私营部门雇员略有受益（取消缴费），但退休人员损失35亿。据IFRAP，国家净赚13.2亿——一种变相税。黄背心运动愤怒的直接导火索。

ISF → IFI：仅对不动产征税，金融资产免税。纳税人：358,000人（ISF）→ 133,000人（IFI）。成本：每年45亿欧元。France Stratégie（2023年）结论：对投资无显著影响。BlackRock连接：通过豁免金融资产，改革使BlackRock的ETF比房地产更具吸引力。

统一税（PFU 30%）：以单一税率取代资本收入的累进税率。股息爆炸式增长（2017年至2019年间+60%），但集中在最富裕的0.1%群体。参议员Éblé："每年45亿欧元创造50,000个就业岗位 = 每个岗位9万欧元！"`,
        },
        {
          titre: "劳动法令与失业保险：Attali-Ferracci链条",
          contenu: `2017年8月31日，Philippe和Pénicaud提出5项改革《劳动法典》的法令：劳动仲裁赔偿上限（"马克龙标准"）、集体协商解除劳动合同、代表机构合并为CSE、企业级协议优先。

网络连接：法令属于Attali委员会（2007年）→ 大臣Macron（Uber交易）→ Philippe法令（2017年）链条的一部分。"弹性安全"理论家Marc Ferracci是改革的智囊。他是Macron的婚礼证人，也是Pierre Ferracci的儿子（Attali委员会）。Ferracci于2026年3月为Philippe在90人宣言上签名。

2019年夏，失业保险改革削减了非正规工人的福利。Unédic估计115万受益人将看到其权利被削减。改革受到Ferracci启发。

在MAS角度，Philippe的记录不是一系列孤立决策——它是一个重心的显性效用函数，在由BlackRock（资本化）、CMA CGM（港口解除管制）和Attali-Ferracci网络（弹性安全）定义的状态空间中优化。`,
        },
        {
          titre: "卫生文件与事实更正",
          contenu: `严谨性要点：医疗人员疫苗接种义务（2021年8月5日法律）是在Castex任期内通过的，而非Philippe（于2020年7月3日离职）。病毒式传播的信息图错误地将其归于他。Philippe负责Covid的初始管理：封锁（2020年3月17日）、Rivotril法令（2020年3月28日）、"口罩无用"（2020年3月13日，TF1）。

约15,000名医疗人员被暂停职务，其中4,000人在2022年5月仍被暂停。该义务于2023年5月13日在HAS建议后被暂停。

生产税（GDP的3.5%，欧洲冠军）在Philippe任期内没有削减，尽管BlackRock、MEDEF和欧洲委员会均有建议。Philippe更青睐ISF/统一税——这些措施惠及股东而非生产企业。削减只在Castex和Attal任期才实施。`,
        },
      ],
    },
  },
  "controverses-mandat-philippe": {
    fr: {
      titre: "Les controverses du mandat Philippe — Huit dossiers, un bilan contesté",
      sousTitre: "LBD, Rivotril, Fessenheim, 80 km/h, retraites, NDDL, taxe carbone, chômage",
      resume: "Le mandat Philippe (2017-2020) est marqué par huit dossiers controversés : répression des Gilets jaunes (2 500 blessés, 24 éborgnés), décret Rivotril, fermeture de Fessenheim (5 Mds de coût), 80 km/h, réforme des retraites inachevée, NDDL, taxe carbone (déclencheur Gilets jaunes) et 406,6 milliards de dette ajoutée.",
      parties: [
        {
          titre: "Répression des Gilets jaunes et décret Rivotril",
          contenu: `De novembre 2018 à mi-2019, le mouvement des Gilets jaunes constitue la pire crise sociale depuis Mai 68. Selon Amnesty International : 2 500 blessés, 24 éborgnés, 5 mains arrachées. La France est le seul pays de l'UE à utiliser les LBD 40 et les grenades GLI-F4 (25 g de TNT) en maintien de l'ordre. L'ONU, le Conseil de l'Europe et Amnesty International condamnent une répression disproportionnée. 89 000 agents mobilisés, véhicules blindés en métropole.

Le 28 mars 2020, le décret Rivotril autorise la dispensation d'un dépresseur respiratoire pour patients Covid en fin de vie. Des soignants témoignent sur France 2 : « On nous demande de faire une euthanasie passive. » La SFGG dément : c'est un soin palliatif. Le décret pallie une pénurie de midazolam.

Parallèlement, les ARS établissent des fiches excluant les résidents d'EHPAD de l'hospitalisation en réanimation. Philippe affirme devant la commission d'enquête qu'il n'y avait pas d'instruction d'interdiction, contredisant les fiches ARS documentées.`,
        },
        {
          titre: "Fessenheim, NDDL et taxe carbone",
          contenu: `Fessenheim : le gouvernement ferme la doyenne des centrales nucléaires (décret du 18 février 2020). Aucune justification technique — c'est l'exécution d'une promesse Hollande aux écologistes. Coût estimé : 5 milliards d'euros. En pleine crise énergétique 2022, les 10 TWh manquants auraient représenté 3 à 6 milliards sur le marché. La mission parlementaire conclut à un « fiasco ».

NDDL : le 17 janvier 2018, Philippe abandonne le projet d'aéroport. Le 9 avril, 2 500 gendarmes expulsent les zadistes. Un étudiant a la main arrachée en ramassant une grenade. La droite accuse Philippe d'avoir « capitulé ».

Taxe carbone : la composante carbone de la TICPE passe de 7 €/t (2014) à 44,60 €/t (2018). Le 17 novembre 2018, 280 000 Gilets jaunes se lèvent. Le 4 décembre, Philippe annonce un moratoire ; l'Élysée le désavoue le lendemain. Résultat : zéro recette, une crise historique, et une prime d'activité d'urgence de 9,5 Mds/an.`,
        },
        {
          titre: "Retraites inachevées et bilan économique : 406 milliards de dette",
          contenu: `Le 11 décembre 2019, Philippe présente le système universel à points. Trois mois de grèves s'ensuivent. Delevoye démissionne pour activités non déclarées (il avait rencontré BlackRock en mars 2018). Philippe utilise le 49.3 en février 2020, puis la pandémie gèle la réforme.

Bilan économique : le chômage baisse (9,4 % → 7,1 % entre 2017 et 2019) mais la dette explose de 406,6 milliards en trois ans (98,4 % → 115,7 % du PIB). Les réformes structurelles sont inachevées (retraites, assurance chômage). Le sénateur Dallier (LR) : « La situation de la France est moins bonne au moment où il part que quand il arrive. »

Public Sénat titre : « Un homme d'État mais des réformes inachevées. » Euractiv résume un mandat « marqué par les crises ». La dette ajoutée en trois ans dépasse celle des huit années Hollande.`,
        },
      ],
    },
    en: {
      titre: "The Philippe Mandate Controversies — Eight Files, a Contested Record",
      sousTitre: "LBD, Rivotril, Fessenheim, 80 km/h, pensions, NDDL, carbon tax, unemployment",
      resume: "The Philippe mandate (2017-2020) is marked by eight controversial files: repression of the Yellow Vests (2,500 injured, 24 blinded), the Rivotril decree, the closure of Fessenheim (5 billion cost), 80 km/h speed limit, unfinished pension reform, NDDL, the carbon tax (Yellow Vests trigger) and 406.6 billion in added debt.",
      parties: [
        {
          titre: "Yellow Vest Repression and the Rivotril Decree",
          contenu: `From November 2018 to mid-2019, the Yellow Vest movement was the worst social crisis since May 1968. According to Amnesty International: 2,500 injured, 24 blinded, 5 hands torn off. France is the only EU country to use LBD 40 rubber bullet launchers and GLI-F4 grenades (25g of TNT) in crowd control. The UN, the Council of Europe and Amnesty International condemned disproportionate repression. 89,000 officers mobilized, armoured vehicles deployed on the mainland.

On March 28, 2020, the Rivotril decree authorized the dispensation of a respiratory depressant for end-of-life Covid patients. Healthcare workers testified on France 2: "We are being asked to perform passive euthanasia." The SFGG denied it, stating it was palliative care. The decree compensated for a shortage of midazolam.

In parallel, regional health agencies (ARS) issued directives excluding care home residents from ICU hospitalization. Philippe told the inquiry commission there was no prohibition order, contradicting documented ARS directives.`,
        },
        {
          titre: "Fessenheim, NDDL and the Carbon Tax",
          contenu: `Fessenheim: the government closed France's oldest nuclear plant (decree of February 18, 2020). No technical justification — it was the execution of a Hollande promise to ecologists. Estimated cost: 5 billion euros. During the 2022 energy crisis, the missing 10 TWh would have represented 3 to 6 billion on the market. The parliamentary mission concluded it was a "fiasco."

NDDL: on January 17, 2018, Philippe abandoned the airport project. On April 9, 2,500 gendarmes evicted the protesters. A student had his hand torn off picking up a grenade. The right accused Philippe of having "capitulated."

Carbon tax: the carbon component of the TICPE fuel tax rose from 7 euros/t (2014) to 44.60 euros/t (2018). On November 17, 2018, 280,000 Yellow Vests rose up. On December 4, Philippe announced a moratorium; the Elysee disavowed it the next day. Result: zero revenue, a historic crisis, and an emergency activity bonus costing 9.5 billion per year.`,
        },
        {
          titre: "Unfinished Pensions and Economic Record: 406 Billion in Debt",
          contenu: `On December 11, 2019, Philippe presented the universal points-based system. Three months of strikes followed. Delevoye resigned over undeclared activities (he had met with BlackRock in March 2018). Philippe used article 49.3 in February 2020, then the pandemic froze the reform.

Economic record: unemployment fell (9.4% to 7.1% between 2017 and 2019) but debt exploded by 406.6 billion in three years (98.4% to 115.7% of GDP). Structural reforms were left unfinished (pensions, unemployment insurance). Senator Dallier (LR): "France's situation is worse when he leaves than when he arrived."

Public Senat headlined: "A statesman but unfinished reforms." Euractiv summarized a mandate "marked by crises." The debt added in three years exceeds that of the eight Hollande years.`,
        },
      ],
    },
    de: {
      titre: "Die Kontroversen des Mandats Philippe — Acht Dossiers, eine umstrittene Bilanz",
      sousTitre: "LBD, Rivotril, Fessenheim, 80 km/h, Renten, NDDL, CO2-Steuer, Arbeitslosigkeit",
      resume: "Das Mandat Philippe (2017-2020) ist von acht kontroversen Dossiers geprägt: Unterdrückung der Gelbwesten (2.500 Verletzte, 24 Erblindete), das Rivotril-Dekret, die Schließung von Fessenheim (5 Mrd. Kosten), 80 km/h, unvollendete Rentenreform, NDDL, CO2-Steuer (Auslöser der Gelbwesten) und 406,6 Milliarden hinzugefügter Schulden.",
      parties: [
        {
          titre: "Unterdrückung der Gelbwesten und das Rivotril-Dekret",
          contenu: `Von November 2018 bis Mitte 2019 stellte die Gelbwestenbewegung die schlimmste Sozialkrise seit Mai 1968 dar. Laut Amnesty International: 2.500 Verletzte, 24 Erblindete, 5 abgerissene Hände. Frankreich ist das einzige EU-Land, das LBD-40-Gummigeschosse und GLI-F4-Granaten (25 g TNT) zur Aufstandsbekämpfung einsetzt. Die UN, der Europarat und Amnesty International verurteilten eine unverhältnismäßige Repression. 89.000 mobilisierte Beamte, Panzerfahrzeuge im Mutterland.

Am 28. März 2020 genehmigte das Rivotril-Dekret die Abgabe eines Atemdepressivums an Covid-Patienten am Lebensende. Pflegekräfte bezeugten im France-2-Fernsehen: "Man bittet uns, passive Sterbehilfe zu leisten." Die SFGG widersprach: Es handele sich um Palliativpflege. Das Dekret begegnete einem Mangel an Midazolam.

Gleichzeitig erstellten die ARS Merkblätter, die Pflegeheimbewohner von der Intensivpflege ausschlossen. Philippe versicherte der Untersuchungskommission, es habe keine Verbotsweisung gegeben — im Widerspruch zu dokumentierten ARS-Merkblättern.`,
        },
        {
          titre: "Fessenheim, NDDL und die CO2-Steuer",
          contenu: `Fessenheim: Die Regierung schloss das älteste Kernkraftwerk (Dekret vom 18. Februar 2020). Keine technische Begründung — es war die Erfüllung eines Hollande-Versprechens an die Ökologisten. Geschätzte Kosten: 5 Milliarden Euro. In der Energiekrise 2022 hätten die fehlenden 10 TWh 3 bis 6 Milliarden am Markt dargestellt. Die parlamentarische Mission kam zu dem Schluss, es sei ein "Fiasko."

NDDL: Am 17. Januar 2018 gab Philippe das Flughafenprojekt auf. Am 9. April räumten 2.500 Gendarmen die Besetzer. Ein Student verlor bei der Aufnahme einer Granate die Hand. Die Rechte beschuldigte Philippe, "kapituliert" zu haben.

CO2-Steuer: Die Kohlenstoffkomponente der TICPE stieg von 7 Euro/t (2014) auf 44,60 Euro/t (2018). Am 17. November 2018 erhoben sich 280.000 Gelbwesten. Am 4. Dezember kündigte Philippe ein Moratorium an; der Élysée widerrief es am nächsten Tag. Ergebnis: null Einnahmen, eine historische Krise und ein Notfall-Aktivitätsbonus von 9,5 Mrd./Jahr.`,
        },
        {
          titre: "Unvollendete Renten und Wirtschaftsbilanz: 406 Milliarden Schulden",
          contenu: `Am 11. Dezember 2019 stellte Philippe das universelle Punktesystem vor. Drei Monate Streiks folgten. Delevoye trat wegen nicht gemeldeter Aktivitäten zurück (er hatte BlackRock im März 2018 getroffen). Philippe nutzte Artikel 49.3 im Februar 2020, dann fror die Pandemie die Reform ein.

Wirtschaftsbilanz: Die Arbeitslosigkeit sank (9,4 % auf 7,1 % zwischen 2017 und 2019), aber die Schulden explodierten um 406,6 Milliarden in drei Jahren (98,4 % auf 115,7 % des BIP). Strukturreformen blieben unvollendet (Renten, Arbeitslosenversicherung). Senator Dallier (LR): "Die Lage Frankreichs ist schlechter, als er abtritt, als als er antrat."

Public Sénat titelte: "Ein Staatsmann, aber unvollendete Reformen." Euractiv fasste ein Mandat "geprägt von Krisen" zusammen. Die in drei Jahren hinzugefügten Schulden übersteigen jene der acht Hollande-Jahre.`,
        },
      ],
    },
    es: {
      titre: "Las controversias del mandato Philippe — Ocho expedientes, un balance controvertido",
      sousTitre: "LBD, Rivotril, Fessenheim, 80 km/h, pensiones, NDDL, tasa de carbono, desempleo",
      resume: "El mandato Philippe (2017-2020) está marcado por ocho expedientes controvertidos: represión de los Chalecos Amarillos (2.500 heridos, 24 tuertos), decreto Rivotril, cierre de Fessenheim (5.000 M de coste), 80 km/h, reforma de pensiones inacabada, NDDL, tasa de carbono (detonante de los Chalecos) y 406.600 millones de deuda añadida.",
      parties: [
        {
          titre: "Represión de los Chalecos Amarillos y el decreto Rivotril",
          contenu: `De noviembre de 2018 a mediados de 2019, el movimiento de los Chalecos Amarillos constituyó la peor crisis social desde Mayo del 68. Según Amnistía Internacional: 2.500 heridos, 24 tuertos, 5 manos arrancadas. Francia es el único país de la UE que utiliza las LBD 40 y las granadas GLI-F4 (25 g de TNT) en el mantenimiento del orden. La ONU, el Consejo de Europa y Amnistía Internacional condenaron una represión desproporcionada. 89.000 agentes movilizados, vehículos blindados en la metrópoli.

El 28 de marzo de 2020, el decreto Rivotril autorizó la dispensación de un depresor respiratorio para pacientes Covid en fase terminal. Sanitarios testificaron en France 2: "Se nos pide practicar una eutanasia pasiva." La SFGG lo negó: es un cuidado paliativo. El decreto paliaba una escasez de midazolam.

Paralelamente, las ARS elaboraron fichas que excluían a los residentes de EHPAD de la hospitalización en cuidados intensivos. Philippe declaró ante la comisión de investigación que no había orden de prohibición, contradiciendo las fichas ARS documentadas.`,
        },
        {
          titre: "Fessenheim, NDDL y la tasa de carbono",
          contenu: `Fessenheim: el gobierno cerró la central nuclear más antigua de Francia (decreto del 18 de febrero de 2020). Ninguna justificación técnica — es la ejecución de una promesa de Hollande a los ecologistas. Coste estimado: 5.000 millones de euros. En plena crisis energética de 2022, los 10 TWh faltantes habrían representado de 3 a 6.000 millones en el mercado. La misión parlamentaria concluyó que fue un "fiasco."

NDDL: el 17 de enero de 2018, Philippe abandonó el proyecto de aeropuerto. El 9 de abril, 2.500 gendarmes desalojaron a los ocupantes. Un estudiante perdió la mano al recoger una granada. La derecha acusó a Philippe de haber "capitulado."

Tasa de carbono: el componente de carbono de la TICPE pasó de 7 euros/t (2014) a 44,60 euros/t (2018). El 17 de noviembre de 2018, 280.000 Chalecos Amarillos se alzaron. El 4 de diciembre, Philippe anunció una moratoria; el Elíseo la desautorizó al día siguiente. Resultado: cero ingresos, una crisis histórica y una prima de actividad de urgencia de 9.500 M/año.`,
        },
        {
          titre: "Pensiones inacabadas y balance económico: 406.000 millones de deuda",
          contenu: `El 11 de diciembre de 2019, Philippe presentó el sistema universal de puntos. Le siguieron tres meses de huelgas. Delevoye dimitió por actividades no declaradas (había reunido con BlackRock en marzo de 2018). Philippe utilizó el 49.3 en febrero de 2020, y luego la pandemia congeló la reforma.

Balance económico: el desempleo bajó (del 9,4 % al 7,1 % entre 2017 y 2019) pero la deuda explotó en 406.600 millones en tres años (del 98,4 % al 115,7 % del PIB). Las reformas estructurales quedaron inacabadas (pensiones, seguro de desempleo). El senador Dallier (LR): "La situación de Francia es peor cuando se va que cuando llegó."

Public Sénat tituló: "Un hombre de Estado pero reformas inacabadas." Euractiv resumió un mandato "marcado por las crisis." La deuda añadida en tres años supera la de los ocho años de Hollande.`,
        },
      ],
    },
    ru: {
      titre: "Противоречия мандата Филиппа — Восемь досье, оспариваемые итоги",
      sousTitre: "LBD, Ривотрил, Фессенхайм, 80 км/ч, пенсии, NDDL, углеродный налог, безработица",
      resume: "Мандат Филиппа (2017-2020) отмечен восемью спорными досье: подавление «Жёлтых жилетов» (2500 раненых, 24 ослеплённых), декрет Ривотрил, закрытие Фессенхайма (стоимость 5 млрд), ограничение 80 км/ч, незавершённая пенсионная реформа, NDDL, углеродный налог (детонатор «Жёлтых жилетов») и 406,6 млрд добавленного долга.",
      parties: [
        {
          titre: "Подавление «Жёлтых жилетов» и декрет Ривотрил",
          contenu: `С ноября 2018 по середину 2019 года движение «Жёлтых жилетов» стало худшим социальным кризисом со времён мая 1968 года. По данным Amnesty International: 2500 раненых, 24 потерявших глаз, 5 оторванных рук. Франция — единственная страна ЕС, применяющая резиновые пули LBD 40 и гранаты GLI-F4 (25 г тротила) при поддержании порядка. ООН, Совет Европы и Amnesty International осудили непропорциональные репрессии. Мобилизовано 89 000 сотрудников, бронетехника применялась на материковой Франции.

28 марта 2020 года декрет Ривотрил разрешил выдачу угнетающего дыхание препарата умирающим пациентам с Covid. Медицинские работники свидетельствовали на France 2: «Нас просят проводить пассивную эвтаназию». SFGG опровергла это: речь идёт о паллиативной помощи. Декрет восполнял нехватку мидазолама.

Одновременно региональные агентства здравоохранения (ARS) составляли инструкции, исключавшие жителей домов престарелых из госпитализации в реанимацию. Филипп заявил следственной комиссии, что запретительных указаний не было, — вопреки задокументированным инструкциям ARS.`,
        },
        {
          titre: "Фессенхайм, NDDL и углеродный налог",
          contenu: `Фессенхайм: правительство закрыло старейшую атомную станцию Франции (декрет от 18 февраля 2020 года). Никакого технического обоснования — это выполнение обещания Олланда экологистам. Расчётная стоимость: 5 миллиардов евро. В разгар энергетического кризиса 2022 года отсутствующие 10 ТВт·ч обошлись бы рынку в 3-6 миллиардов. Парламентская миссия констатировала «фиаско».

NDDL: 17 января 2018 года Филипп отказался от аэропортового проекта. 9 апреля 2500 жандармов выселили активистов. Студент лишился руки, подбирая гранату. Правые обвинили Филиппа в «капитуляции».

Углеродный налог: углеродная составляющая TICPE выросла с 7 евро/т (2014) до 44,60 евро/т (2018). 17 ноября 2018 года поднялись 280 000 «Жёлтых жилетов». 4 декабря Филипп объявил мораторий; Елисейский дворец дезавуировал его на следующий день. Итог: ноль поступлений, исторический кризис и экстренная надбавка к пособию по занятости в 9,5 млрд/год.`,
        },
        {
          titre: "Незавершённые пенсии и экономические итоги: 406 млрд долга",
          contenu: `11 декабря 2019 года Филипп представил универсальную балльную систему. За этим последовали три месяца забастовок. Делевуа ушёл в отставку из-за незадекларированной деятельности (он встречался с BlackRock в марте 2018 года). Филипп применил статью 49.3 в феврале 2020 года, затем пандемия заморозила реформу.

Экономические итоги: безработица снизилась (с 9,4 % до 7,1 % в 2017-2019 годах), но долг взорвался на 406,6 млрд за три года (с 98,4 % до 115,7 % ВВП). Структурные реформы остались незавершёнными (пенсии, страхование по безработице). Сенатор Дальер (LR): «Положение Франции хуже, когда он уходит, чем когда он пришёл».

Public Sénat озаглавил: «Государственный деятель, но незавершённые реформы». Euractiv охарактеризовал мандат как «отмеченный кризисами». Долг, добавленный за три года, превышает долг за все восемь лет Олланда.`,
        },
      ],
    },
    ja: {
      titre: "フィリップ政権の論争 — 八つの案件、争われる実績",
      sousTitre: "LBD、リボトリル、フェッセンハイム、時速80km、年金、NDDL、炭素税、失業",
      resume: "フィリップ政権（2017-2020年）は八つの論争的な案件で特徴づけられる：黄色いベスト弾圧（負傷者2500人、失明24人）、リボトリル政令、フェッセンハイム閉鎖（50億ユーロのコスト）、時速80km制限、未完の年金改革、NDDL、炭素税（黄色いベストの引き金）、4066億ユーロの債務増加。",
      parties: [
        {
          titre: "黄色いベストの弾圧とリボトリル政令",
          contenu: `2018年11月から2019年半ばにかけて、黄色いベスト運動は1968年5月以来最悪の社会的危機を構成した。アムネスティ・インターナショナルによると：負傷者2500人、失明24人、手首切断5人。フランスはEUで唯一、LBD40とGLI-F4手榴弾（TNT25g）を公共秩序維持に使用する国だ。国連、欧州評議会、アムネスティは不均衡な弾圧を非難した。89,000人の警官が動員され、本土に装甲車が投入された。

2020年3月28日、リボトリル政令はCovid末期患者への呼吸抑制剤の投与を認めた。医療従事者はFrance 2で証言した：「受動的安楽死をするよう求められている」。SFGGはこれを否定：緩和ケアだと説明した。この政令はミダゾラムの不足を補うものだった。

一方、ARSはEHPAD（介護施設）入居者をICU入院から除外する指針を作成していた。フィリップは調査委員会で禁止命令はなかったと主張したが、これは文書化されたARS指針と矛盾する。`,
        },
        {
          titre: "フェッセンハイム、NDDLと炭素税",
          contenu: `フェッセンハイム：政府はフランス最古の原子力発電所を閉鎖した（2020年2月18日政令）。技術的な正当性はなく、エコロジストへのオランドの約束を履行したものだ。推定コスト：50億ユーロ。2022年のエネルギー危機の中で、不足した10TWhは市場で30〜60億ユーロに相当したはずだ。議会調査団は「大失敗」と結論づけた。

NDDL：2018年1月17日、フィリップは空港プロジェクトを断念した。4月9日、2500人の憲兵が占拠者を排除した。一人の学生が手榴弾を拾い上げた際に手首を失った。右派はフィリップが「降伏した」と非難した。

炭素税：TICPEの炭素成分は7ユーロ/t（2014年）から44.60ユーロ/t（2018年）に上昇した。2018年11月17日、28万人の黄色いベストが立ち上がった。12月4日、フィリップはモラトリアムを発表したが、翌日エリゼ宮はこれを否認した。結果：収入ゼロ、歴史的な危機、そして年95億ユーロの緊急活動手当。`,
        },
        {
          titre: "未完の年金改革と経済的実績：4066億ユーロの債務",
          contenu: `2019年12月11日、フィリップは普遍的ポイント制を発表した。3ヶ月のストライキが続いた。ドルボワは未申告の活動（2018年3月にブラックロックと会談）で辞任した。フィリップは2020年2月に49条3項を適用し、その後パンデミックが改革を凍結した。

経済的実績：失業率は低下した（2017〜2019年に9.4%から7.1%へ）が、債務は3年間で4066億ユーロ膨張した（GDPの98.4%から115.7%へ）。構造改革は未完のまま残った（年金、失業保険）。上院議員ダリエ（LR）：「彼が去るときのフランスの状況は、来たときよりも悪い」。

Public Sénatは「国家政治家だが改革は未完」と見出しをつけた。Euractiv は「危機に彩られた」政権と要約した。3年間で加わった債務はオランドの8年間を上回る。`,
        },
      ],
    },
    it: {
      titre: "Le controversie del mandato Philippe — Otto dossier, un bilancio contestato",
      sousTitre: "LBD, Rivotril, Fessenheim, 80 km/h, pensioni, NDDL, tassa sul carbonio, disoccupazione",
      resume: "Il mandato Philippe (2017-2020) è segnato da otto dossier controversi: repressione dei Gilet Gialli (2.500 feriti, 24 accecati), decreto Rivotril, chiusura di Fessenheim (costo 5 mld), 80 km/h, riforma delle pensioni incompiuta, NDDL, tassa sul carbonio (detonatore dei Gilet Gialli) e 406,6 miliardi di debito aggiunto.",
      parties: [
        {
          titre: "Repressione dei Gilet Gialli e decreto Rivotril",
          contenu: `Da novembre 2018 a metà 2019, il movimento dei Gilet Gialli ha costituito la peggiore crisi sociale dal Maggio '68. Secondo Amnesty International: 2.500 feriti, 24 accecati, 5 mani strappate. La Francia è l'unico paese dell'UE a utilizzare gli LBD 40 e le granate GLI-F4 (25 g di TNT) nel mantenimento dell'ordine. ONU, Consiglio d'Europa e Amnesty International hanno condannato una repressione sproporzionata. 89.000 agenti mobilitati, veicoli blindati nella Francia metropolitana.

Il 28 marzo 2020, il decreto Rivotril ha autorizzato la somministrazione di un depressore respiratorio ai pazienti Covid in fin di vita. Operatori sanitari hanno testimoniato su France 2: "Ci viene chiesto di fare un'eutanasia passiva." La SFGG ha smentito: si tratta di cure palliative. Il decreto ovviava a una carenza di midazolam.

Parallelamente, le ARS hanno redatto schede che escludevano i residenti degli EHPAD dall'ospedalizzazione in terapia intensiva. Philippe ha dichiarato alla commissione d'inchiesta che non c'erano istruzioni di divieto, contraddicendo le schede ARS documentate.`,
        },
        {
          titre: "Fessenheim, NDDL e la tassa sul carbonio",
          contenu: `Fessenheim: il governo ha chiuso la centrale nucleare più antica della Francia (decreto del 18 febbraio 2020). Nessuna giustificazione tecnica — si trattava dell'esecuzione di una promessa di Hollande agli ecologisti. Costo stimato: 5 miliardi di euro. Durante la crisi energetica del 2022, i 10 TWh mancanti avrebbero rappresentato da 3 a 6 miliardi sul mercato. La missione parlamentare ha concluso che si è trattato di un "fiasco."

NDDL: il 17 gennaio 2018, Philippe ha abbandonato il progetto dell'aeroporto. Il 9 aprile, 2.500 gendarmi hanno sgomberato i manifestanti. Uno studente ha perso la mano raccogliendo una granata. La destra ha accusato Philippe di aver "capitolato."

Tassa sul carbonio: la componente carbonica della TICPE è passata da 7 euro/t (2014) a 44,60 euro/t (2018). Il 17 novembre 2018, 280.000 Gilet Gialli sono insorti. Il 4 dicembre, Philippe ha annunciato una moratoria; l'Eliseo lo ha sconfessato il giorno dopo. Risultato: zero entrate, una crisi storica e un bonus di attività di emergenza da 9,5 mld/anno.`,
        },
        {
          titre: "Pensioni incompiute e bilancio economico: 406 miliardi di debito",
          contenu: `L'11 dicembre 2019, Philippe ha presentato il sistema universale a punti. Tre mesi di scioperi sono seguiti. Delevoye si è dimesso per attività non dichiarate (aveva incontrato BlackRock nel marzo 2018). Philippe ha utilizzato l'articolo 49.3 nel febbraio 2020, poi la pandemia ha congelato la riforma.

Bilancio economico: la disoccupazione è calata (dal 9,4% al 7,1% tra il 2017 e il 2019) ma il debito è esploso di 406,6 miliardi in tre anni (dal 98,4% al 115,7% del PIL). Le riforme strutturali sono rimaste incompiute (pensioni, assicurazione contro la disoccupazione). Il senatore Dallier (LR): "La situazione della Francia è peggiore nel momento in cui parte rispetto a quando è arrivato."

Public Sénat ha titolato: "Un uomo di Stato ma riforme incompiute." Euractiv ha riassunto un mandato "segnato dalle crisi." Il debito aggiunto in tre anni supera quello degli otto anni di Hollande.`,
        },
      ],
    },
    zh: {
      titre: "菲利普任期争议 — 八个案件，有争议的政绩",
      sousTitre: "LBD、利沃特里尔、费森海姆、时速80公里、退休金、NDDL、碳税、失业",
      resume: "菲利普任期（2017-2020年）因八个争议性案件而留下印记：镇压黄背心（2500名伤者、24名失明者）、利沃特里尔法令、费森海姆核电站关闭（成本50亿欧元）、时速80公里限制、未完成的退休金改革、NDDL、碳税（黄背心导火索）以及4066亿欧元的新增债务。",
      parties: [
        {
          titre: "黄背心镇压与利沃特里尔法令",
          contenu: `从2018年11月到2019年中期，黄背心运动构成了自1968年五月风暴以来最严重的社会危机。据国际特赦组织统计：2500人受伤、24人失明、5人手腕被截断。法国是欧盟唯一在维持秩序中使用LBD 40橡皮子弹发射器和GLI-F4手榴弹（25克TNT）的国家。联合国、欧洲委员会和国际特赦组织谴责了这种不成比例的镇压。8.9万名警察被动员，装甲车辆部署于法国本土。

2020年3月28日，利沃特里尔法令批准向新冠终末期患者提供一种呼吸抑制剂。医护人员在法国2台作证："我们被要求实施被动安乐死。"法国老年病学学会否认了这一说法：这是姑息护理。该法令弥补了咪达唑仑的短缺。

与此同时，地区卫生局制定了将养老院居民排除在重症监护住院之外的指导方针。菲利普在调查委员会面前声称没有禁止性指令，这与有据可查的地区卫生局文件相矛盾。`,
        },
        {
          titre: "费森海姆、NDDL与碳税",
          contenu: `费森海姆：政府关闭了法国最古老的核电站（2020年2月18日法令）。没有技术理由——这是奥朗德向绿党兑现承诺的执行。估计成本：50亿欧元。在2022年能源危机期间，缺失的10太瓦时本可在市场上代表30至60亿欧元。议会调查团得出结论：这是一场"惨败"。

NDDL：2018年1月17日，菲利普放弃了机场项目。4月9日，2500名宪兵驱逐了占领者。一名学生在捡起手榴弹时失去了一只手。右派指责菲利普"投降"了。

碳税：TICPE的碳成分从7欧元/吨（2014年）上升到44.60欧元/吨（2018年）。2018年11月17日，28万黄背心揭竿而起。12月4日，菲利普宣布暂缓；爱丽舍宫次日否认了这一决定。结果：零收入、历史性危机，以及每年95亿欧元的紧急活动补贴。`,
        },
        {
          titre: "未完的退休金改革与经济成绩单：4066亿欧元债务",
          contenu: `2019年12月11日，菲利普提出了积分制普惠体系。随后爆发了三个月的罢工。德勒瓦因未申报的活动（他曾于2018年3月与贝莱德会面）而辞职。菲利普于2020年2月动用第49条第3款，随后疫情冻结了改革。

经济成绩单：失业率下降（2017至2019年间从9.4%降至7.1%），但债务在三年内爆增4066亿欧元（占GDP的比例从98.4%升至115.7%）。结构性改革未能完成（退休金、失业保险）。参议员达利耶（LR）："他离开时法国的状况比他到来时更糟。"

公共参议院标题为："一位政治家，但改革未竟"。Euractiv将这一任期概括为"危机缠身"。三年内新增的债务超过奥朗德八年执政期间的债务总和。`,
        },
      ],
    },
  },

  "sondages-medias-philippe": {
    fr: {
      titre: "Sondages & médias complaisants — La fabrique du candidat providentiel",
      sousTitre: "Elabe/BFMTV vs moipresident.online vs Ipsos-BVA vs Odoxa",
      resume: "Le sondage Elabe/BFMTV du 28 mars 2026 donne à Philippe 3,5 à 8,5 points de plus que l'agrégation bayésienne indépendante. BFMTV appartient à CMA CGM (Saadé), dont le hub est Le Havre. La synchronisation sondage + tribune 90 signataires + meeting constitue une opération de communication intégrée. Le baromètre Ipsos-BVA donne Philippe dernier du bloc central (20 %).",
      parties: [
        {
          titre: "Le sondage Elabe/BFMTV : un candidat surévalué",
          contenu: `Sondage Elabe du 25-27 mars 2026 (1 504 personnes) : Philippe à 20,5-25,5 % au premier tour selon les configurations. Philippe 51,5 % vs Bardella 48,5 % au second tour.

Point critique : le score de 51,5 % est DANS la marge d'erreur (3,1 points). Ce résultat n'est pas statistiquement significatif. Le meilleur score (25,5 %) repose sur une configuration irréaliste : gauche éparpillée ET absence de tout candidat LR. Or Retailleau est déclaré et affirme qu'« un candidat macroniste ne pourra pas être élu ».

L'agrégation bayésienne de moipresident.online donne Philippe à 17 % au 16 mars — soit 3,5 à 8,5 points de moins. Seul Philippe bénéficie de cet écart ; Bardella et Glucksmann sont cohérents entre les sources.`,
        },
        {
          titre: "Ipsos-BVA et Odoxa : la réalité des données",
          contenu: `Le baromètre Ipsos-BVA/CESI de mars 2026 donne la satisfaction en cas d'accession à la présidence : Bardella 35 %, Le Pen 33 %, Marion Maréchal 24 %, Darmanin 22 %, Attal 21 %, Philippe 20 %. Philippe est dernier du bloc central, à 15 points de Bardella. Ce baromètre contredit frontalement le récit du « seul capable de battre le RN ».

Le baromètre Odoxa de décembre 2025 montrait Philippe sous la barre des 30 % d'opinions favorables (29 %, point le plus bas depuis sa candidature). Avant les municipales, un sondage le donnait battu au Havre par le communiste Lecoq.

Luc Ferry qualifie Philippe de « pire Premier ministre de la Ve République » et ne croit pas aux sondages. Le contraste entre la promotion médiatique et les indicateurs réels est saisissant.`,
        },
        {
          titre: "BFMTV/CMA CGM : le conflit d'intérêts médiatique",
          contenu: `BFMTV, commanditaire du sondage, appartient depuis 2023 à CMA Média (filiale CMA CGM, Rodolphe Saadé). CMA CGM est le 3e armateur mondial, dont le hub principal est Le Havre — fief de Philippe. Le média qui commande le sondage et le candidat qu'il promeut partagent un intérêt commun.

La triple offensive du 28-29 mars : sondage Elabe/BFMTV (28 mars) + tribune 90 signataires dans La Tribune dimanche (29 mars) + annonce meeting Horizons (12 avril). Le sondage légitime la tribune, la tribune légitime le meeting, le meeting lance la campagne. Boulevard Voltaire : « La Macronie poursuit la mise en orbite d'Édouard Philippe. »

En MAS, les sondages ne sont pas des mesures neutres — ce sont des signaux qui influencent le comportement des agents. Un sondage commandé par un média du réseau crée une boucle de rétroaction positive : la prophétie auto-réalisatrice du système médiatico-politique.`,
        },
      ],
    },
    en: {
      titre: "Polls & Compliant Media — Manufacturing the Providential Candidate",
      sousTitre: "Elabe/BFMTV vs moipresident.online vs Ipsos-BVA vs Odoxa",
      resume: "The Elabe/BFMTV poll of March 28, 2026 gives Philippe 3.5 to 8.5 points more than the independent Bayesian aggregation. BFMTV belongs to CMA CGM (Saadé), whose hub is Le Havre. The synchronization of poll + 90-signatory op-ed + rally constitutes an integrated communications operation. The Ipsos-BVA barometer places Philippe last in the centrist bloc (20%).",
      parties: [
        {
          titre: "The Elabe/BFMTV Poll: An Overvalued Candidate",
          contenu: `Elabe poll of March 25-27, 2026 (1,504 respondents): Philippe at 20.5-25.5% in the first round depending on configuration. Philippe 51.5% vs Bardella 48.5% in the second round.

Critical point: the 51.5% score is WITHIN the margin of error (3.1 points). This result is not statistically significant. The best score (25.5%) rests on an unrealistic configuration: a fragmented left AND the absence of any LR candidate. Yet Retailleau has declared and states that "a Macronist candidate will not be elected."

The Bayesian aggregation from moipresident.online gives Philippe at 17% as of March 16 — 3.5 to 8.5 points less. Only Philippe benefits from this gap; Bardella and Glucksmann are consistent across sources.`,
        },
        {
          titre: "Ipsos-BVA and Odoxa: The Reality of the Data",
          contenu: `The Ipsos-BVA/CESI barometer for March 2026 gives satisfaction ratings if elected to the presidency: Bardella 35%, Le Pen 33%, Marion Marechal 24%, Darmanin 22%, Attal 21%, Philippe 20%. Philippe is last in the centrist bloc, 15 points behind Bardella. This barometer directly contradicts the narrative of the "only one capable of defeating the RN."

The Odoxa barometer for December 2025 showed Philippe below the 30% favorable opinion mark (29%, the lowest point since his candidacy). Before the municipal elections, a poll had him losing in Le Havre to the communist Lecoq.

Luc Ferry describes Philippe as the "worst Prime Minister of the Fifth Republic" and does not believe the polls. The contrast between the media promotion and the real indicators is striking.`,
        },
        {
          titre: "BFMTV/CMA CGM: The Media Conflict of Interest",
          contenu: `BFMTV, the poll's commissioner, has belonged since 2023 to CMA Media (subsidiary of CMA CGM, Rodolphe Saade). CMA CGM is the world's 3rd largest shipping company, whose main hub is Le Havre — Philippe's stronghold. The media outlet commissioning the poll and the candidate it promotes share a common interest.

The triple offensive of March 28-29: Elabe/BFMTV poll (March 28) + op-ed by 90 signatories in La Tribune dimanche (March 29) + announcement of Horizons rally (April 12). The poll legitimizes the op-ed, the op-ed legitimizes the rally, the rally launches the campaign. Boulevard Voltaire: "The Macronie pursues the orbital launch of Edouard Philippe."

In multi-agent systems, polls are not neutral measurements — they are signals that influence agent behavior. A poll commissioned by a network media outlet creates a positive feedback loop: the self-fulfilling prophecy of the media-political system.`,
        },
      ],
    },
    de: {
      titre: "Umfragen & gefällige Medien — Die Fabrik des providentiellen Kandidaten",
      sousTitre: "Elabe/BFMTV vs moipresident.online vs Ipsos-BVA vs Odoxa",
      resume: "Die Umfrage Elabe/BFMTV vom 28. März 2026 gibt Philippe 3,5 bis 8,5 Punkte mehr als die unabhängige bayesianische Aggregation. BFMTV gehört zu CMA CGM (Saadé), dessen Hub Le Havre ist. Die Synchronisation von Umfrage + Meinungsartikel mit 90 Unterzeichnern + Kundgebung bildet eine integrierte Kommunikationsoperation. Das Ipsos-BVA-Barometer gibt Philippe letzten Platz im zentristischen Block (20%).",
      parties: [
        {
          titre: "Die Umfrage Elabe/BFMTV: Ein überbewerteter Kandidat",
          contenu: `Elabe-Umfrage vom 25.-27. März 2026 (1.504 Befragte): Philippe bei 20,5-25,5 % im ersten Wahlgang je nach Konfiguration. Philippe 51,5 % vs. Bardella 48,5 % im zweiten Wahlgang.

Kritischer Punkt: Das Ergebnis von 51,5 % liegt INNERHALB der Fehlertoleranz (3,1 Punkte). Dieses Ergebnis ist statistisch nicht signifikant. Das beste Ergebnis (25,5 %) beruht auf einer unrealistischen Konfiguration: zersplitterte Linke UND Abwesenheit jedes LR-Kandidaten. Dabei hat Retailleau erklärt, dass "ein macronistischer Kandidat nicht gewählt werden kann."

Die bayesianische Aggregation von moipresident.online gibt Philippe am 16. März 17 % — das sind 3,5 bis 8,5 Punkte weniger. Nur Philippe profitiert von dieser Abweichung; Bardella und Glucksmann sind quellenkonsistent.`,
        },
        {
          titre: "Ipsos-BVA und Odoxa: Die Realität der Daten",
          contenu: `Das Ipsos-BVA/CESI-Barometer für März 2026 gibt Zufriedenheitswerte bei Wahl zum Präsidenten: Bardella 35 %, Le Pen 33 %, Marion Maréchal 24 %, Darmanin 22 %, Attal 21 %, Philippe 20 %. Philippe ist letzter des zentristischen Blocks, 15 Punkte hinter Bardella. Dieses Barometer widerspricht frontal dem Narrativ des "einzigen, der den RN schlagen kann."

Das Odoxa-Barometer vom Dezember 2025 zeigte Philippe unter der 30%-Marke günstiger Meinungen (29 %, niedrigster Wert seit seiner Kandidatur). Vor den Kommunalwahlen gab eine Umfrage ihn in Le Havre hinter dem Kommunisten Lecoq.

Luc Ferry bezeichnet Philippe als den "schlechtesten Premierminister der Fünften Republik" und glaubt den Umfragen nicht. Der Kontrast zwischen medialer Förderung und realen Indikatoren ist frappierend.`,
        },
        {
          titre: "BFMTV/CMA CGM: Der mediale Interessenkonflikt",
          contenu: `BFMTV, der Auftraggeber der Umfrage, gehört seit 2023 zu CMA Media (Tochter von CMA CGM, Rodolphe Saadé). CMA CGM ist der weltweit drittgrößte Reederei, deren Hauptdrehkreuz Le Havre ist — Philippes Hochburg. Das Medienunternehmen, das die Umfrage in Auftrag gibt, und der von ihm geförderte Kandidat teilen ein gemeinsames Interesse.

Die dreifache Offensive vom 28.-29. März: Umfrage Elabe/BFMTV (28. März) + Meinungsartikel von 90 Unterzeichnern in La Tribune dimanche (29. März) + Ankündigung der Horizons-Kundgebung (12. April). Die Umfrage legitimiert den Artikel, der Artikel legitimiert die Kundgebung, die Kundgebung startet die Kampagne. Boulevard Voltaire: "Die Macronie verfolgt die Umlaufbahn von Édouard Philippe."

In Multi-Agenten-Systemen sind Umfragen keine neutralen Messungen — sie sind Signale, die das Verhalten der Agenten beeinflussen. Eine Umfrage, die von einem Netzwerkmedium in Auftrag gegeben wird, schafft eine positive Rückkopplungsschleife: die selbsterfüllende Prophezeiung des medienpolitischen Systems.`,
        },
      ],
    },
    es: {
      titre: "Sondeos y medios complacientes — La fábrica del candidato providencial",
      sousTitre: "Elabe/BFMTV vs moipresident.online vs Ipsos-BVA vs Odoxa",
      resume: "El sondeo Elabe/BFMTV del 28 de marzo de 2026 da a Philippe entre 3,5 y 8,5 puntos más que la agregación bayesiana independiente. BFMTV pertenece a CMA CGM (Saadé), cuyo hub es El Havre. La sincronización sondeo + tribuna de 90 firmantes + mitin constituye una operación de comunicación integrada. El barómetro Ipsos-BVA da a Philippe el último puesto del bloque centrista (20%).",
      parties: [
        {
          titre: "El sondeo Elabe/BFMTV: un candidato sobrevalorado",
          contenu: `Sondeo Elabe del 25-27 de marzo de 2026 (1.504 personas): Philippe al 20,5-25,5 % en primera vuelta según las configuraciones. Philippe 51,5 % vs Bardella 48,5 % en segunda vuelta.

Punto crítico: la puntuación del 51,5 % está DENTRO del margen de error (3,1 puntos). Este resultado no es estadísticamente significativo. La mejor puntuación (25,5 %) se basa en una configuración irreal: izquierda fragmentada Y ausencia de cualquier candidato LR. Sin embargo, Retailleau se ha declarado y afirma que "un candidato macronista no podrá ser elegido."

La agregación bayesiana de moipresident.online da a Philippe un 17 % el 16 de marzo — es decir, entre 3,5 y 8,5 puntos menos. Solo Philippe se beneficia de esta brecha; Bardella y Glucksmann son coherentes entre fuentes.`,
        },
        {
          titre: "Ipsos-BVA y Odoxa: la realidad de los datos",
          contenu: `El barómetro Ipsos-BVA/CESI de marzo de 2026 da la satisfacción en caso de acceder a la presidencia: Bardella 35 %, Le Pen 33 %, Marion Maréchal 24 %, Darmanin 22 %, Attal 21 %, Philippe 20 %. Philippe es el último del bloque centrista, a 15 puntos de Bardella. Este barómetro contradice frontalmente el relato del "único capaz de derrotar al RN."

El barómetro Odoxa de diciembre de 2025 mostraba a Philippe por debajo del 30 % de opiniones favorables (29 %, mínimo desde su candidatura). Antes de las municipales, una encuesta lo daba derrotado en El Havre por el comunista Lecoq.

Luc Ferry califica a Philippe de "peor Primer Ministro de la V República" y no cree en los sondeos. El contraste entre la promoción mediática y los indicadores reales es llamativo.`,
        },
        {
          titre: "BFMTV/CMA CGM: el conflicto de intereses mediático",
          contenu: `BFMTV, comitente del sondeo, pertenece desde 2023 a CMA Média (filial de CMA CGM, Rodolphe Saadé). CMA CGM es el 3.er armador mundial, cuyo hub principal es El Havre — feudo de Philippe. El medio que encarga el sondeo y el candidato que promueve comparten un interés común.

La triple ofensiva del 28-29 de marzo: sondeo Elabe/BFMTV (28 de marzo) + tribuna de 90 firmantes en La Tribune dimanche (29 de marzo) + anuncio del mitin Horizons (12 de abril). El sondeo legitima la tribuna, la tribuna legitima el mitin, el mitin lanza la campaña. Boulevard Voltaire: "La Macronie continúa la puesta en órbita de Édouard Philippe."

En sistemas multiagente, los sondeos no son mediciones neutras — son señales que influyen en el comportamiento de los agentes. Un sondeo encargado por un medio de la red crea un bucle de retroalimentación positiva: la profecía autocumplida del sistema mediático-político.`,
        },
      ],
    },
    ru: {
      titre: "Опросы и угодливые СМИ — Фабрика провиденциального кандидата",
      sousTitre: "Elabe/BFMTV vs moipresident.online vs Ipsos-BVA vs Odoxa",
      resume: "Опрос Elabe/BFMTV от 28 марта 2026 года даёт Филиппу на 3,5-8,5 пункта больше, чем независимая байесовская агрегация. BFMTV принадлежит CMA CGM (Саадé), чьим хабом является Гавр. Синхронизация опрос + петиция 90 подписантов + митинг представляет собой интегрированную коммуникационную операцию. Барометр Ipsos-BVA ставит Филиппа последним в центристском блоке (20%).",
      parties: [
        {
          titre: "Опрос Elabe/BFMTV: переоценённый кандидат",
          contenu: `Опрос Elabe 25-27 марта 2026 года (1504 респондента): Филипп от 20,5 до 25,5% в первом туре в зависимости от конфигурации. Филипп 51,5% против Барделла 48,5% во втором туре.

Критический момент: результат 51,5% находится В ПРЕДЕЛАХ погрешности (3,1 пункта). Этот результат статистически незначим. Лучший результат (25,5%) основан на нереалистичной конфигурации: раздробленные левые И отсутствие любого кандидата LR. Однако Ретайо заявил о своей кандидатуре и утверждает, что «макронистский кандидат не сможет быть избран».

Байесовская агрегация moipresident.online даёт Филиппу 17% на 16 марта — то есть на 3,5-8,5 пункта меньше. Только Филипп извлекает выгоду из этого разрыва; Барделла и Глюксманн согласованы между источниками.`,
        },
        {
          titre: "Ipsos-BVA и Odoxa: реальность данных",
          contenu: `Барометр Ipsos-BVA/CESI за март 2026 года даёт удовлетворённость в случае прихода к президентству: Барделла 35%, Ле Пен 33%, Марион Марешаль 24%, Дарманен 22%, Аттал 21%, Филипп 20%. Филипп последний в центристском блоке, в 15 пунктах от Барделла. Этот барометр прямо противоречит нарративу «единственного способного победить РН».

Барометр Odoxa за декабрь 2025 года показывал Филиппа ниже 30% положительных мнений (29%, минимум с момента его выдвижения). Перед муниципальными выборами один опрос давал ему поражение в Гавре от коммуниста Лекока.

Люк Ферри называет Филиппа «худшим премьер-министром Пятой республики» и не верит опросам. Контраст между медийным продвижением и реальными показателями разительный.`,
        },
        {
          titre: "BFMTV/CMA CGM: медийный конфликт интересов",
          contenu: `BFMTV, заказчик опроса, с 2023 года принадлежит CMA Média (дочерняя компания CMA CGM, Родольф Саадé). CMA CGM — 3-й в мире судоходный концерн, чьим главным хабом является Гавр — вотчина Филиппа. СМИ, заказывающее опрос, и продвигаемый ими кандидат разделяют общий интерес.

Тройное наступление 28-29 марта: опрос Elabe/BFMTV (28 марта) + петиция 90 подписантов в La Tribune dimanche (29 марта) + объявление митинга Horizons (12 апреля). Опрос легитимирует петицию, петиция легитимирует митинг, митинг запускает кампанию. Boulevard Voltaire: «Макрония продолжает выводить Эдуара Филиппа на орбиту».

В многоагентных системах опросы — не нейтральные измерения, а сигналы, влияющие на поведение агентов. Опрос, заказанный сетевым СМИ, создаёт петлю положительной обратной связи: самосбывающееся пророчество медиа-политической системы.`,
        },
      ],
    },
    ja: {
      titre: "世論調査と迎合的なメディア — 救世主候補の製造",
      sousTitre: "Elabe/BFMTV vs moipresident.online vs Ipsos-BVA vs Odoxa",
      resume: "2026年3月28日のElabe/BFMTV世論調査は、独立したベイズ集計よりもフィリップに3.5〜8.5ポイント多く与えている。BFMTVはCMA CGM（サアデ）に属しており、そのハブはル・アーブルだ。世論調査＋90人署名の論説＋集会の同期は統合的なコミュニケーション作戦を構成する。Ipsos-BVAバロメーターはフィリップを中道ブロック最下位（20%）に位置づけている。",
      parties: [
        {
          titre: "Elabe/BFMTV世論調査：過大評価された候補",
          contenu: `2026年3月25〜27日のElabe調査（1,504人）：設定によって第1回投票でフィリップは20.5〜25.5%。第2回投票ではフィリップ51.5%対バルデラ48.5%。

重要な点：51.5%という結果は誤差範囲（3.1ポイント）の「内側」にある。この結果は統計的に有意ではない。最良の結果（25.5%）は非現実的な設定に基づいている：左派が分散し、かつLR候補が存在しない状況。しかしRétailleauは立候補を宣言し、「マクロン系候補は当選できない」と主張している。

moipresident.onlineのベイズ集計は3月16日時点でフィリップを17%と示す——つまり3.5〜8.5ポイント低い。この差から利益を得るのはフィリップだけであり、バルデラとグリュクスマンは情報源間で一貫している。`,
        },
        {
          titre: "Ipsos-BVAとOdoxa：データの現実",
          contenu: `2026年3月のIpsos-BVA/CESIバロメーターが示す、大統領就任時の満足度：バルデラ35%、ル・ペン33%、マリオン・マレシャル24%、ダルマナン22%、アッタル21%、フィリップ20%。フィリップは中道ブロック最下位で、バルデラから15ポイント差。このバロメーターは「RNに勝てる唯一の候補」という物語と真っ向から矛盾している。

2025年12月のOdoxaバロメーターはフィリップが好意的意見30%を下回ることを示していた（29%、立候補以来の最低値）。地方選前には、あるアンケートが共産党のルコックにル・アーブルで敗れると示していた。

リュック・フェリーはフィリップを「第五共和制最悪の首相」と評し、世論調査を信じない。メディアの推薦と実際の指標のコントラストは際立っている。`,
        },
        {
          titre: "BFMTV/CMA CGM：メディアの利益相反",
          contenu: `世論調査の発注者であるBFMTVは2023年からCMA Média（CMA CGM子会社、ロドルフ・サアデ）に属している。CMA CGMは世界第3位の海運会社であり、その主要ハブはル・アーブル——フィリップの牙城だ。世論調査を発注するメディアと彼らが推進する候補者は共通の利益を持つ。

3月28〜29日の三重攻勢：Elabe/BFMTV調査（3月28日）＋La Tribune dimancheへの90人署名論説（3月29日）＋Horizons集会発表（4月12日）。世論調査が論説を正当化し、論説が集会を正当化し、集会がキャンペーンを開始する。Boulevard Voltaire：「マクロン主義はエドゥアール・フィリップの軌道投入を続けている」。

多エージェントシステムにおいて、世論調査は中立的な測定ではなく、エージェントの行動に影響を与えるシグナルだ。ネットワークメディアが発注する世論調査は正のフィードバックループを生み出す：メディア政治システムの自己実現的予言。`,
        },
      ],
    },
    it: {
      titre: "Sondaggi e media compiacenti — La fabbrica del candidato provvidenziale",
      sousTitre: "Elabe/BFMTV vs moipresident.online vs Ipsos-BVA vs Odoxa",
      resume: "Il sondaggio Elabe/BFMTV del 28 marzo 2026 assegna a Philippe da 3,5 a 8,5 punti in più rispetto all'aggregazione bayesiana indipendente. BFMTV appartiene a CMA CGM (Saadé), il cui hub è Le Havre. La sincronizzazione sondaggio + tribuna di 90 firmatari + comizio costituisce un'operazione di comunicazione integrata. Il barometro Ipsos-BVA colloca Philippe ultimo del blocco centrista (20%).",
      parties: [
        {
          titre: "Il sondaggio Elabe/BFMTV: un candidato sopravvalutato",
          contenu: `Sondaggio Elabe del 25-27 marzo 2026 (1.504 persone): Philippe al 20,5-25,5% al primo turno secondo le configurazioni. Philippe 51,5% vs Bardella 48,5% al secondo turno.

Punto critico: il punteggio del 51,5% si trova NELLA margine di errore (3,1 punti). Questo risultato non è statisticamente significativo. Il punteggio migliore (25,5%) si basa su una configurazione irrealistica: sinistra frammentata E assenza di qualsiasi candidato LR. Eppure Retailleau si è dichiarato e afferma che "un candidato macronista non potrà essere eletto."

L'aggregazione bayesiana di moipresident.online colloca Philippe al 17% al 16 marzo — ovvero da 3,5 a 8,5 punti in meno. Solo Philippe beneficia di questo scarto; Bardella e Glucksmann sono coerenti tra le fonti.`,
        },
        {
          titre: "Ipsos-BVA e Odoxa: la realtà dei dati",
          contenu: `Il barometro Ipsos-BVA/CESI di marzo 2026 dà la soddisfazione in caso di accesso alla presidenza: Bardella 35%, Le Pen 33%, Marion Maréchal 24%, Darmanin 22%, Attal 21%, Philippe 20%. Philippe è ultimo del blocco centrista, a 15 punti da Bardella. Questo barometro contraddice frontalmente il racconto del "solo capace di battere il RN."

Il barometro Odoxa di dicembre 2025 mostrava Philippe sotto la soglia del 30% di opinioni favorevoli (29%, il punto più basso dalla sua candidatura). Prima delle elezioni comunali, un sondaggio lo dava sconfitto a Le Havre dal comunista Lecoq.

Luc Ferry definisce Philippe il "peggior Primo Ministro della Quinta Repubblica" e non crede ai sondaggi. Il contrasto tra la promozione mediatica e gli indicatori reali è sconcertante.`,
        },
        {
          titre: "BFMTV/CMA CGM: il conflitto di interessi mediatico",
          contenu: `BFMTV, committente del sondaggio, appartiene dal 2023 a CMA Média (filiale di CMA CGM, Rodolphe Saadé). CMA CGM è il 3° armatore mondiale, il cui hub principale è Le Havre — feudo di Philippe. Il media che commissiona il sondaggio e il candidato che promuove condividono un interesse comune.

La triplice offensiva del 28-29 marzo: sondaggio Elabe/BFMTV (28 marzo) + tribuna di 90 firmatari su La Tribune dimanche (29 marzo) + annuncio del comizio Horizons (12 aprile). Il sondaggio legittima la tribuna, la tribuna legittima il comizio, il comizio lancia la campagna. Boulevard Voltaire: "La Macronie persegue la messa in orbita di Édouard Philippe."

Nei sistemi multi-agente, i sondaggi non sono misurazioni neutre — sono segnali che influenzano il comportamento degli agenti. Un sondaggio commissionato da un media della rete crea un ciclo di retroazione positiva: la profezia auto-avverante del sistema mediatico-politico.`,
        },
      ],
    },
    zh: {
      titre: "民调与迎合性媒体 — 救世主候选人的制造工厂",
      sousTitre: "Elabe/BFMTV vs moipresident.online vs Ipsos-BVA vs Odoxa",
      resume: "2026年3月28日的Elabe/BFMTV民调给菲利普的评分比独立贝叶斯聚合高出3.5至8.5个百分点。BFMTV属于CMA CGM（萨阿代），其枢纽是勒阿弗尔。民调+90人署名社论+集会的同步构成了一场整合的传播行动。Ipsos-BVA晴雨表将菲利普列为中间派阵营最后一名（20%）。",
      parties: [
        {
          titre: "Elabe/BFMTV民调：被高估的候选人",
          contenu: `2026年3月25-27日的Elabe调查（1504人）：根据不同配置，菲利普在第一轮投票中获得20.5-25.5%。第二轮菲利普51.5%对巴尔德拉48.5%。

关键点：51.5%的得分位于误差范围（3.1个百分点）之内。该结果不具统计显著性。最佳得分（25.5%）基于一个不现实的配置：左派分裂且完全没有LR候选人。然而雷泰奥已宣布参选，并声称"马克龙主义候选人无法当选"。

moipresident.online的贝叶斯聚合显示3月16日菲利普为17%——低3.5至8.5个百分点。只有菲利普受益于这一差距；巴尔德拉和格吕克斯曼在各来源间是一致的。`,
        },
        {
          titre: "Ipsos-BVA与Odoxa：数据的现实",
          contenu: `2026年3月Ipsos-BVA/CESI晴雨表显示当选总统后的满意度：巴尔德拉35%、勒庞33%、马里翁·马雷夏尔24%、达尔马南22%、阿塔尔21%、菲利普20%。菲利普是中间派阵营最后一名，距巴尔德拉15个百分点。这一晴雨表与"唯一能击败国民联盟者"的叙事正面矛盾。

2025年12月的Odoxa晴雨表显示菲利普的好感度低于30%（29%，自其参选以来的最低点）。在市政选举前，一项民调显示他在勒阿弗尔输给共产党人勒科克。

吕克·费里将菲利普定性为"第五共和国最糟糕的总理"，不相信这些民调。媒体宣传与实际指标之间的反差令人震惊。`,
        },
        {
          titre: "BFMTV/CMA CGM：媒体利益冲突",
          contenu: `民调的委托方BFMTV自2023年起属于CMA Média（CMA CGM子公司，罗多尔夫·萨阿代）。CMA CGM是全球第三大航运公司，其主要枢纽是勒阿弗尔——菲利普的大本营。委托调查的媒体与其推广的候选人共享共同利益。

3月28-29日的三重攻势：Elabe/BFMTV调查（3月28日）＋La Tribune dimanche上90人署名社论（3月29日）＋宣布Horizons集会（4月12日）。民调为社论提供合法性，社论为集会提供合法性，集会启动竞选。Boulevard Voltaire："马克龙主义继续将爱德华·菲利普送入轨道"。

在多智能体系统中，民调不是中性的测量——而是影响智能体行为的信号。由网络媒体委托的民调创造了正反馈循环：媒体政治系统的自我实现预言。`,
        },
      ],
    },
  },
  "bilderberg-cooptation-castries": {
    fr: {
      titre: "Édouard Philippe et le groupe Bilderberg — Cinq participations, un coopteur",
      sousTitre: "Henri de Castries, le coopteur commun de Macron et Philippe",
      resume: "De Castries confirme au JDD avoir personnellement coopté Philippe au Bilderberg en 2015 et Macron en 2014. Cinq participations documentées (2015-2025). Le pattern d'élévation post-Bilderberg est récurrent : Macron ministre 2 mois après, Philippe PM 11 mois après, Attal PM 7 mois après. Juppé était présent en 2015 avec Philippe.",
      parties: [
        {
          titre: "Les cinq participations d'Édouard Philippe (2015-2025)",
          contenu: `Henri de Castries confirme au JDD : « C'est moi qui l'ai proposé. Comme maire, il avait développé des idées intéressantes. » Philippe n'est alors que simple maire du Havre.

2015 (Telfs-Buchen) : première cooptation. Philippe se retrouve à la table de Kissinger, Peter Thiel (Palantir), Demis Hassabis (DeepMind), les présidents de BP, Shell, Lazard, BlackRock, LinkedIn, le PM belge Charles Michel. Alain Juppé, son mentor, est également présent.

2016 (Dresde) : deuxième carton. Philippe y côtoie Christine Lagarde (FMI), Laurent Fabius, Emmanuelle Charpentier. Onze mois plus tard, il est nommé Premier ministre.

2023-2025 (Lisbonne, Madrid, Stockholm) : retour en force. En 2025, première fois que deux anciens PM macronistes (Philippe et Attal) participent ensemble, aux côtés de Nicolas Roche (SGDSN, nommé deux mois plus tôt).

Chronologie des cooptations de Castries : Macron en 2014 → ministre 2 mois après. Philippe en 2015 → PM 11 mois après la 2e participation (2016). Attal en 2023 → PM 7 mois après. FranceSoir documente ce pattern récurrent d'élévation post-Bilderberg.`,
        },
        {
          titre: "Le noyau français récurrent et le renseignement",
          contenu: `L'analyse des listes de participants révèle un noyau qui recoupe les autres cercles d'influence de Philippe :

Henri de Castries (AXA, Institut Montaigne) — 2015, 2016, 2023. Patrick Pouyanné (TotalEnergies) — 2023, 2025. Patricia Barbizet (ex-Kering, ex-présidente du Siècle) — 2016, 2023. Thomas Buberl (DG AXA) — 2023. Antoine Gosset-Grainville (président CA AXA) — 2023. Jean Lemierre (président BNP Paribas) — 2025. Bernard Émié (directeur DGSE) — 2023. Nicolas Roche (SGDSN) — 2025.

La présence simultanée de dirigeants du renseignement français (Émié, Roche) aux côtés de candidats présidentiels dans un forum privé est soulevée par Regards.fr : « Il est légitime de s'interroger sur ce qu'ont été faire et dire Nicolas Roche, mais aussi Gabriel Attal et Édouard Philippe à cette réunion annuelle. »

La triple concentration AXA (de Castries + Buberl + Gosset-Grainville) au Bilderberg 2023 documente l'irrigation de l'écosystème par un seul assureur — dont le conseil stratégique FCF inclut Philippe et Raffarin.`,
        },
        {
          titre: "Le Bilderberg comme méta-cercle du réseau Philippe",
          contenu: `Le Bilderberg constitue le 7ème cercle de la cartographie. Il se distingue par sa dimension transatlantique et le calibre des co-participants (chefs d'État, PDG Fortune 500, chefs du renseignement).

Les intersections entre cercles sont significatives : AXA (Bilderberg) est au CS de la FCF. Juppé (cercle 1) est présent au Bilderberg 2015 avec Philippe. Castries (Bilderberg) préside l'Institut Montaigne, qui a inspiré la doctrine Macron 2017. Le Bilderberg fonctionne comme un méta-cercle où les nœuds des cercles inférieurs (FAF, FCF, monde des affaires) se retrouvent.

Philippe Villin, ancien patron du Figaro, décrit les invités comme « assez conformistes, tous attachés au capitalisme et au libre-échangisme ». Etienne Davignon (avant-dernier président) : « Pour y être coopté, il faut avoir de l'entregent et une vision planétaire. »

En MAS, le Bilderberg est l'espace de coordination de plus haut niveau — le lieu où les fonctions d'utilité des centroïdes s'alignent sous couvert de confidentialité Chatham House.`,
        },
      ],
    },
    en: {
      titre: "Edouard Philippe and the Bilderberg Group — Five Attendances, One Co-opter",
      sousTitre: "Henri de Castries, the common co-opter of Macron and Philippe",
      resume: "De Castries confirmed to Le JDD that he personally co-opted Philippe to Bilderberg in 2015 and Macron in 2014. Five documented attendances (2015-2025). The post-Bilderberg elevation pattern is recurring: Macron minister 2 months later, Philippe PM 11 months later, Attal PM 7 months later. Juppe was present in 2015 alongside Philippe.",
      parties: [
        {
          titre: "Edouard Philippe's Five Attendances (2015-2025)",
          contenu: `Henri de Castries confirmed to Le JDD: "It was I who proposed him. As mayor, he had developed interesting ideas." Philippe was at that point merely the mayor of Le Havre.

2015 (Telfs-Buchen): first co-optation. Philippe finds himself at the table alongside Kissinger, Peter Thiel (Palantir), Demis Hassabis (DeepMind), the presidents of BP, Shell, Lazard, BlackRock, LinkedIn, Belgian PM Charles Michel. Alain Juppe, his mentor, is also present.

2016 (Dresden): second invitation. Philippe rubs shoulders with Christine Lagarde (IMF), Laurent Fabius, Emmanuelle Charpentier. Eleven months later, he is appointed Prime Minister.

2023-2025 (Lisbon, Madrid, Stockholm): return in force. In 2025, the first time two former Macronist PMs (Philippe and Attal) participate together, alongside Nicolas Roche (SGDSN, appointed two months earlier).

Timeline of Castries's co-optations: Macron in 2014 → minister 2 months later. Philippe in 2015 → PM 11 months after his 2nd attendance (2016). Attal in 2023 → PM 7 months later. FranceSoir documents this recurring post-Bilderberg elevation pattern.`,
        },
        {
          titre: "The Recurring French Core and the Intelligence Services",
          contenu: `Analysis of participant lists reveals a core that overlaps with Philippe's other circles of influence:

Henri de Castries (AXA, Institut Montaigne) — 2015, 2016, 2023. Patrick Pouyanné (TotalEnergies) — 2023, 2025. Patricia Barbizet (former Kering, former president of Le Siècle) — 2016, 2023. Thomas Buberl (CEO of AXA) — 2023. Antoine Gosset-Grainville (chairman AXA) — 2023. Jean Lemierre (chairman BNP Paribas) — 2025. Bernard Emie (director of DGSE) — 2023. Nicolas Roche (SGDSN) — 2025.

The simultaneous presence of French intelligence chiefs (Emie, Roche) alongside presidential candidates in a private forum is raised by Regards.fr: "It is legitimate to ask what Nicolas Roche, but also Gabriel Attal and Edouard Philippe, went to do and say at this annual meeting."

The triple AXA concentration (de Castries + Buberl + Gosset-Grainville) at Bilderberg 2023 documents the irrigation of the ecosystem by a single insurer — whose FCF strategic council includes Philippe and Raffarin.`,
        },
        {
          titre: "Bilderberg as the Meta-Circle of the Philippe Network",
          contenu: `Bilderberg constitutes the 7th circle of the mapping. It stands out by its transatlantic dimension and the caliber of co-participants (heads of state, Fortune 500 CEOs, intelligence chiefs).

The intersections between circles are significant: AXA (Bilderberg) sits on the FCF strategic council. Juppe (circle 1) is present at Bilderberg 2015 with Philippe. Castries (Bilderberg) chairs the Institut Montaigne, which inspired the Macron 2017 doctrine. Bilderberg functions as a meta-circle where nodes from lower circles (FAF, FCF, the business world) converge.

Philippe Villin, former head of Le Figaro, describes the guests as "fairly conformist, all committed to capitalism and free trade." Etienne Davignon (penultimate president): "To be co-opted there, you need to have connections and a planetary vision."

In multi-agent systems, Bilderberg is the highest-level coordination space — the place where the utility functions of the centroids align under the cover of Chatham House confidentiality.`,
        },
      ],
    },
    de: {
      titre: "Édouard Philippe und die Bilderberg-Gruppe — Fünf Teilnahmen, ein Kooptierer",
      sousTitre: "Henri de Castries, der gemeinsame Kooptierer von Macron und Philippe",
      resume: "De Castries bestätigt dem JDD, Macron 2014 und Philippe 2015 persönlich zu Bilderberg kooptiert zu haben. Fünf dokumentierte Teilnahmen (2015-2025). Das Post-Bilderberg-Aufstiegsmuster ist wiederkehrend: Macron Minister 2 Monate später, Philippe PM 11 Monate später, Attal PM 7 Monate später. Juppé war 2015 mit Philippe anwesend.",
      parties: [
        {
          titre: "Die fünf Teilnahmen von Édouard Philippe (2015-2025)",
          contenu: `Henri de Castries bestätigt dem JDD: "Ich war es, der ihn vorgeschlagen hat. Als Bürgermeister hatte er interessante Ideen entwickelt." Philippe ist zu diesem Zeitpunkt nur einfacher Bürgermeister von Le Havre.

2015 (Telfs-Buchen): erste Kooptierung. Philippe sitzt am Tisch mit Kissinger, Peter Thiel (Palantir), Demis Hassabis (DeepMind), den Präsidenten von BP, Shell, Lazard, BlackRock, LinkedIn, dem belgischen PM Charles Michel. Alain Juppé, sein Mentor, ist ebenfalls anwesend.

2016 (Dresden): zweite Einladung. Philippe trifft Christine Lagarde (IWF), Laurent Fabius, Emmanuelle Charpentier. Elf Monate später wird er zum Premierminister ernannt.

2023-2025 (Lissabon, Madrid, Stockholm): Rückkehr in Kraft. Im Jahr 2025 erstmals zwei ehemalige macronistische PMs (Philippe und Attal) gemeinsam, neben Nicolas Roche (SGDSN, zwei Monate zuvor ernannt).

Zeitplan der Kooptierungen von Castries: Macron 2014 → Minister 2 Monate später. Philippe 2015 → PM 11 Monate nach der 2. Teilnahme (2016). Attal 2023 → PM 7 Monate später. FranceSoir dokumentiert dieses wiederkehrende Post-Bilderberg-Aufstiegsmuster.`,
        },
        {
          titre: "Der wiederkehrende französische Kern und der Geheimdienst",
          contenu: `Die Analyse der Teilnehmerlisten offenbart einen Kern, der sich mit Philippes anderen Einflusskreisen überschneidet:

Henri de Castries (AXA, Institut Montaigne) — 2015, 2016, 2023. Patrick Pouyanné (TotalEnergies) — 2023, 2025. Patricia Barbizet (ehem. Kering, ehem. Präsidentin des Siècle) — 2016, 2023. Thomas Buberl (CEO AXA) — 2023. Antoine Gosset-Grainville (Vorsitzender AXA) — 2023. Jean Lemierre (Vorsitzender BNP Paribas) — 2025. Bernard Émié (Direktor DGSE) — 2023. Nicolas Roche (SGDSN) — 2025.

Die gleichzeitige Anwesenheit französischer Geheimdienstchefs (Émié, Roche) neben Präsidentschaftskandidaten in einem privaten Forum wird von Regards.fr thematisiert: "Es ist legitim zu fragen, was Nicolas Roche, aber auch Gabriel Attal und Édouard Philippe bei diesem Jahrestreffen getan und gesagt haben."

Die dreifache AXA-Konzentration (de Castries + Buberl + Gosset-Grainville) beim Bilderberg 2023 dokumentiert die Bewässerung des Ökosystems durch einen einzigen Versicherer — dessen FCF-Strategierat Philippe und Raffarin einschließt.`,
        },
        {
          titre: "Bilderberg als Meta-Kreis des Philippe-Netzwerks",
          contenu: `Bilderberg bildet den 7. Kreis der Kartierung. Es zeichnet sich durch seine transatlantische Dimension und das Kaliber der Mitveranstaltenden aus (Staatschefs, Fortune-500-CEOs, Geheimdienstchefs).

Die Schnittmengen zwischen den Kreisen sind bedeutsam: AXA (Bilderberg) sitzt im FCF-Strategierat. Juppé (Kreis 1) ist 2015 mit Philippe bei Bilderberg anwesend. Castries (Bilderberg) leitet das Institut Montaigne, das die Macron-Doktrin 2017 inspiriert hat. Bilderberg fungiert als Meta-Kreis, wo sich die Knoten der unteren Kreise (FAF, FCF, Geschäftswelt) treffen.

Philippe Villin, ehemaliger Chefredakteur des Figaro, beschreibt die Gäste als "recht konformistisch, alle dem Kapitalismus und dem Freihandel verbunden". Etienne Davignon (vorletzter Vorsitzender): "Um kooptiert zu werden, braucht man Beziehungen und eine globale Vision."

In Multi-Agenten-Systemen ist Bilderberg der hochrangigste Koordinationsraum — der Ort, wo die Nutzenfunktionen der Zentroïden unter dem Deckmantel der Chatham-House-Vertraulichkeit übereinstimmen.`,
        },
      ],
    },
    es: {
      titre: "Édouard Philippe y el grupo Bilderberg — Cinco participaciones, un cooptador",
      sousTitre: "Henri de Castries, el cooptador común de Macron y Philippe",
      resume: "De Castries confirma al JDD haber cooptado personalmente a Philippe en Bilderberg en 2015 y a Macron en 2014. Cinco participaciones documentadas (2015-2025). El patrón de ascenso post-Bilderberg es recurrente: Macron ministro 2 meses después, Philippe PM 11 meses después, Attal PM 7 meses después. Juppé estuvo presente en 2015 junto a Philippe.",
      parties: [
        {
          titre: "Las cinco participaciones de Édouard Philippe (2015-2025)",
          contenu: `Henri de Castries confirma al JDD: "Fui yo quien lo propuso. Como alcalde, había desarrollado ideas interesantes." Philippe no es entonces más que el simple alcalde de El Havre.

2015 (Telfs-Buchen): primera cooptación. Philippe se encuentra en la mesa junto a Kissinger, Peter Thiel (Palantir), Demis Hassabis (DeepMind), los presidentes de BP, Shell, Lazard, BlackRock, LinkedIn, el PM belga Charles Michel. Alain Juppé, su mentor, también está presente.

2016 (Dresde): segunda invitación. Philippe comparte mesa con Christine Lagarde (FMI), Laurent Fabius, Emmanuelle Charpentier. Once meses después, es nombrado Primer Ministro.

2023-2025 (Lisboa, Madrid, Estocolmo): regreso con fuerza. En 2025, primera vez que dos ex PM macronistas (Philippe y Attal) participan juntos, junto a Nicolas Roche (SGDSN, nombrado dos meses antes).

Cronología de las cooptaciones de Castries: Macron en 2014 → ministro 2 meses después. Philippe en 2015 → PM 11 meses después de la 2.a participación (2016). Attal en 2023 → PM 7 meses después. FranceSoir documenta este patrón recurrente de ascenso post-Bilderberg.`,
        },
        {
          titre: "El núcleo francés recurrente y los servicios de inteligencia",
          contenu: `El análisis de las listas de participantes revela un núcleo que se superpone con los otros círculos de influencia de Philippe:

Henri de Castries (AXA, Institut Montaigne) — 2015, 2016, 2023. Patrick Pouyanné (TotalEnergies) — 2023, 2025. Patricia Barbizet (ex Kering, ex presidenta del Siècle) — 2016, 2023. Thomas Buberl (DG AXA) — 2023. Antoine Gosset-Grainville (presidente del CA de AXA) — 2023. Jean Lemierre (presidente de BNP Paribas) — 2025. Bernard Émié (director de la DGSE) — 2023. Nicolas Roche (SGDSN) — 2025.

La presencia simultánea de directores de inteligencia francesa (Émié, Roche) junto a candidatos presidenciales en un foro privado es señalada por Regards.fr: "Es legítimo preguntarse qué fueron a hacer y decir Nicolas Roche, pero también Gabriel Attal y Édouard Philippe en esta reunión anual."

La triple concentración de AXA (de Castries + Buberl + Gosset-Grainville) en el Bilderberg 2023 documenta la irrigación del ecosistema por un único asegurador — cuyo consejo estratégico de la FCF incluye a Philippe y Raffarin.`,
        },
        {
          titre: "El Bilderberg como meta-círculo de la red Philippe",
          contenu: `El Bilderberg constituye el 7.o círculo de la cartografía. Se distingue por su dimensión transatlántica y el calibre de los co-participantes (jefes de Estado, CEOs del Fortune 500, jefes de inteligencia).

Las intersecciones entre círculos son significativas: AXA (Bilderberg) está en el CS de la FCF. Juppé (círculo 1) está presente en el Bilderberg 2015 con Philippe. Castries (Bilderberg) preside el Institut Montaigne, que inspiró la doctrina Macron 2017. El Bilderberg funciona como un meta-círculo donde los nodos de los círculos inferiores (FAF, FCF, mundo empresarial) se reúnen.

Philippe Villin, antiguo director del Figaro, describe a los invitados como "bastante conformistas, todos apegados al capitalismo y al libre comercio". Etienne Davignon (penúltimo presidente): "Para ser cooptado allí, hay que tener contactos y una visión planetaria."

En MAS, el Bilderberg es el espacio de coordinación de más alto nivel — el lugar donde las funciones de utilidad de los centroïdes se alinean bajo el amparo de la confidencialidad de la Regla Chatham House.`,
        },
      ],
    },
    ru: {
      titre: "Эдуар Филипп и группа Бильдерберг — Пять участий, один кооптатор",
      sousTitre: "Анри де Кастри, общий кооптатор Макрона и Филиппа",
      resume: "Де Кастри подтверждает JDD, что лично кооптировал Филиппа в Бильдерберг в 2015 году и Макрона в 2014-м. Пять задокументированных участий (2015-2025). Паттерн возвышения после Бильдерберга повторяется: Макрон — министр через 2 месяца, Филипп — премьер через 11 месяцев, Атталь — премьер через 7 месяцев. Жюппе присутствовал в 2015 году вместе с Филиппом.",
      parties: [
        {
          titre: "Пять участий Эдуара Филиппа (2015-2025)",
          contenu: `Анри де Кастри подтверждает JDD: «Именно я его предложил. Как мэр, он развивал интересные идеи». Филипп в тот момент был лишь простым мэром Гавра.

2015 (Тельфс-Бухен): первая кооптация. Филипп оказывается за одним столом с Киссинджером, Питером Тилем (Palantir), Демисом Хассабисом (DeepMind), президентами BP, Shell, Lazard, BlackRock, LinkedIn, бельгийским премьером Шарлем Мишелем. Ален Жюппе, его наставник, также присутствует.

2016 (Дрезден): второе приглашение. Филипп общается с Кристин Лагард (МВФ), Лораном Фабиусом, Эммануэль Шарпантье. Одиннадцать месяцев спустя он назначается премьер-министром.

2023-2025 (Лиссабон, Мадрид, Стокгольм): возвращение в полную силу. В 2025 году впервые два бывших макронистских премьера (Филипп и Атталь) участвуют вместе, рядом с Николя Рошем (SGDSN, назначенным двумя месяцами ранее).

Хронология кооптаций де Кастри: Макрон в 2014-м → министр через 2 месяца. Филипп в 2015-м → премьер через 11 месяцев после 2-го участия (2016). Атталь в 2023-м → премьер через 7 месяцев. FranceSoir документирует этот повторяющийся паттерн возвышения после Бильдерберга.`,
        },
        {
          titre: "Постоянное французское ядро и разведка",
          contenu: `Анализ списков участников выявляет ядро, пересекающееся с другими кругами влияния Филиппа:

Анри де Кастри (AXA, Institut Montaigne) — 2015, 2016, 2023. Патрик Пуянне (TotalEnergies) — 2023, 2025. Патрисия Барбизе (экс-Kering, экс-президент «Сьекль») — 2016, 2023. Томас Бубель (гендиректор AXA) — 2023. Антуан Госсе-Гренвиль (председатель совета директоров AXA) — 2023. Жан Лемьер (председатель BNP Paribas) — 2025. Бернар Эмье (директор DGSE) — 2023. Николя Рош (SGDSN) — 2025.

Одновременное присутствие руководителей французской разведки (Эмье, Рош) рядом с президентскими кандидатами на частном форуме ставится под вопрос Regards.fr: «Правомерно задаться вопросом, что пошли делать и говорить Николя Рош, а также Габриэль Атталь и Эдуар Филипп на этом ежегодном собрании».

Тройная концентрация AXA (де Кастри + Бубель + Госсе-Гренвиль) на Бильдерберге 2023 года документирует орошение экосистемы одним-единственным страховщиком — стратегический совет FCF которого включает Филиппа и Раффарена.`,
        },
        {
          titre: "Бильдерберг как мета-круг сети Филиппа",
          contenu: `Бильдерберг образует 7-й круг картографии. Он выделяется трансатлантическим измерением и калибром со-участников (главы государств, гендиректора из Fortune 500, руководители разведки).

Пересечения между кругами значимы: AXA (Бильдерберг) входит в стратегический совет FCF. Жюппе (круг 1) присутствует на Бильдерберге 2015 года с Филиппом. Де Кастри (Бильдерберг) возглавляет Institut Montaigne, который вдохновил доктрину Макрона 2017 года. Бильдерберг функционирует как мета-круг, где сходятся узлы нижних кругов (FAF, FCF, деловой мир).

Филипп Виллен, бывший глава Le Figaro, описывает гостей как «весьма конформистских, все привержены капитализму и свободной торговле». Этьен Давиньон (предпоследний президент): «Чтобы быть кооптированным туда, нужно иметь связи и планетарное видение».

В МАС Бильдерберг — пространство координации высшего уровня, место, где функции полезности центроидов согласуются под прикрытием конфиденциальности Chatham House.`,
        },
      ],
    },
    ja: {
      titre: "エドゥアール・フィリップとビルダーバーグ — 5回の参加、一人の協選者",
      sousTitre: "アンリ・ド・カストリ、マクロンとフィリップに共通する協選者",
      resume: "ド・カストリはJDDに対し、2015年にフィリップを、2014年にマクロンをビルダーバーグに自ら推薦したことを確認した。5回の参加が記録されている（2015-2025年）。ビルダーバーグ後の昇進パターンは繰り返される：マクロンは2ヶ月後に大臣、フィリップは11ヶ月後に首相、アッタルは7ヶ月後に首相。ジュペは2015年にフィリップとともに参加した。",
      parties: [
        {
          titre: "エドゥアール・フィリップの5回の参加（2015-2025年）",
          contenu: `アンリ・ド・カストリはJDDに確認した：「推薦したのは私だ。市長として、彼は興味深いアイデアを展開していた」。当時フィリップはル・アーブルの一市長に過ぎなかった。

2015年（テルフス＝ブッヘン）：初めての協選。フィリップはキッシンジャー、ピーター・ティール（パランティア）、デミス・ハサビス（ディープマインド）、BP・シェル・ラザード・ブラックロック・リンクトインの社長、ベルギー首相シャルル・ミシェルと同席する。師匠のアラン・ジュペも同席。

2016年（ドレスデン）：2回目の招待。フィリップはクリスティーヌ・ラガルド（IMF）、ローラン・ファビウス、エマニュエル・シャルパンティエと会う。11ヶ月後、首相に任命される。

2023-2025年（リスボン、マドリード、ストックホルム）：本格復帰。2025年には初めて二人のマクロン系元首相（フィリップとアッタル）が、2ヶ月前に任命されたニコラ・ロシュ（SGDSN）と共に参加した。

ド・カストリの協選の年表：2014年マクロン→2ヶ月後に大臣。2015年フィリップ→2回目参加（2016年）の11ヶ月後に首相。2023年アッタル→7ヶ月後に首相。FranceSoirはこのビルダーバーグ後の昇進パターンを記録している。`,
        },
        {
          titre: "フランスの常連核心メンバーと情報機関",
          contenu: `参加者リストの分析により、フィリップの他の影響圏と重なる核心が浮かび上がる：

アンリ・ド・カストリ（AXA、Institut Montaigne）— 2015、2016、2023年。パトリック・プヤンネ（TotalEnergies）— 2023、2025年。パトリシア・バルビゼ（元ケリング、元シエクル会長）— 2016、2023年。トマ・ビュベル（AXA最高経営責任者）— 2023年。アントワーヌ・ゴッセ＝グランヴィル（AXA取締役会議長）— 2023年。ジャン・ルミエール（BNPパリバ会長）— 2025年。ベルナール・エミエ（DGSE長官）— 2023年。ニコラ・ロシュ（SGDSN）— 2025年。

フランス情報機関幹部（エミエ、ロシュ）が大統領候補と私的フォーラムで同席していることについて、Regards.frは問題提起している：「ニコラ・ロシュ、そしてガブリエル・アッタルとエドゥアール・フィリップがこの年次会合で何をしに行き、何を言ったのかを問うことは正当だ」。

2023年ビルダーバーグにおけるAXAの三重集中（ド・カストリ＋ビュベル＋ゴッセ＝グランヴィル）は、単一の保険会社によるエコシステムの潤滑を文書化している——そのFCF戦略委員会にはフィリップとラファランが含まれる。`,
        },
        {
          titre: "フィリップ・ネットワークのメタ圏としてのビルダーバーグ",
          contenu: `ビルダーバーグは地図の第7の圏を構成する。その大西洋横断的な次元と共同参加者の層の厚さ（国家元首、Fortune 500 CEO、情報機関長）によって際立っている。

圏間の交差は重要だ：AXA（ビルダーバーグ）はFCF戦略委員会に席を置く。ジュペ（圏1）は2015年のビルダーバーグにフィリップとともに参加。ド・カストリ（ビルダーバーグ）は2017年のマクロン綱領に影響を与えたInstitut Montaigneを率いる。ビルダーバーグは下位の圏（FAF、FCF、ビジネス界）のノードが集まるメタ圏として機能する。

ル・フィガロ元社長フィリップ・ヴィランはゲストを「かなり順応主義的で、全員が資本主義と自由貿易に結びついている」と評する。エティエンヌ・ダヴィニョン（前々回会長）：「そこで協選されるには、人脈と地球規模の視野が必要だ」。

多エージェントシステムにおいて、ビルダーバーグは最高レベルの調整空間——チャタムハウス・ルールの守秘義務の下で、中心点の効用関数が整合する場所だ。`,
        },
      ],
    },
    it: {
      titre: "Édouard Philippe e il gruppo Bilderberg — Cinque partecipazioni, un cooptatore",
      sousTitre: "Henri de Castries, il cooptatore comune di Macron e Philippe",
      resume: "De Castries conferma al JDD di aver personalmente cooptato Philippe al Bilderberg nel 2015 e Macron nel 2014. Cinque partecipazioni documentate (2015-2025). Il pattern di elevazione post-Bilderberg è ricorrente: Macron ministro 2 mesi dopo, Philippe PM 11 mesi dopo, Attal PM 7 mesi dopo. Juppé era presente nel 2015 con Philippe.",
      parties: [
        {
          titre: "Le cinque partecipazioni di Édouard Philippe (2015-2025)",
          contenu: `Henri de Castries conferma al JDD: "Sono stato io a proporlo. Come sindaco, aveva sviluppato idee interessanti." Philippe è allora solo il semplice sindaco di Le Havre.

2015 (Telfs-Buchen): prima cooptazione. Philippe si trova al tavolo con Kissinger, Peter Thiel (Palantir), Demis Hassabis (DeepMind), i presidenti di BP, Shell, Lazard, BlackRock, LinkedIn, il PM belga Charles Michel. Alain Juppé, il suo mentore, è anch'egli presente.

2016 (Dresda): secondo invito. Philippe frequenta Christine Lagarde (FMI), Laurent Fabius, Emmanuelle Charpentier. Undici mesi dopo viene nominato Primo Ministro.

2023-2025 (Lisbona, Madrid, Stoccolma): ritorno in forze. Nel 2025, per la prima volta due ex PM macronisti (Philippe e Attal) partecipano insieme, a fianco di Nicolas Roche (SGDSN, nominato due mesi prima).

Cronologia delle cooptazioni di Castries: Macron nel 2014 → ministro 2 mesi dopo. Philippe nel 2015 → PM 11 mesi dopo la 2a partecipazione (2016). Attal nel 2023 → PM 7 mesi dopo. FranceSoir documenta questo ricorrente pattern di elevazione post-Bilderberg.`,
        },
        {
          titre: "Il nucleo francese ricorrente e i servizi di intelligence",
          contenu: `L'analisi delle liste dei partecipanti rivela un nucleo che si sovrappone agli altri circoli di influenza di Philippe:

Henri de Castries (AXA, Institut Montaigne) — 2015, 2016, 2023. Patrick Pouyanné (TotalEnergies) — 2023, 2025. Patricia Barbizet (ex Kering, ex presidente del Siècle) — 2016, 2023. Thomas Buberl (DG AXA) — 2023. Antoine Gosset-Grainville (presidente CdA AXA) — 2023. Jean Lemierre (presidente BNP Paribas) — 2025. Bernard Émié (direttore DGSE) — 2023. Nicolas Roche (SGDSN) — 2025.

La presenza simultanea di capi dell'intelligence francese (Émié, Roche) accanto a candidati presidenziali in un forum privato è sollevata da Regards.fr: "È legittimo chiedersi cosa siano andati a fare e dire Nicolas Roche, ma anche Gabriel Attal e Édouard Philippe a questo incontro annuale."

La tripla concentrazione AXA (de Castries + Buberl + Gosset-Grainville) al Bilderberg 2023 documenta l'irrigazione dell'ecosistema da parte di un unico assicuratore — il cui consiglio strategico FCF include Philippe e Raffarin.`,
        },
        {
          titre: "Il Bilderberg come meta-cerchio della rete Philippe",
          contenu: `Il Bilderberg costituisce il 7° cerchio della cartografia. Si distingue per la sua dimensione transatlantica e il calibro dei co-partecipanti (capi di stato, CEO Fortune 500, capi dei servizi segreti).

Le intersezioni tra cerchi sono significative: AXA (Bilderberg) è nel CS della FCF. Juppé (cerchio 1) è presente al Bilderberg 2015 con Philippe. Castries (Bilderberg) presiede l'Institut Montaigne, che ha ispirato la dottrina Macron 2017. Il Bilderberg funziona come meta-cerchio in cui i nodi dei cerchi inferiori (FAF, FCF, mondo degli affari) si ritrovano.

Philippe Villin, ex direttore del Figaro, descrive gli invitati come "abbastanza conformisti, tutti legati al capitalismo e al libero scambio". Etienne Davignon (penultimo presidente): "Per essere cooptato lì, bisogna avere relazioni e una visione planetaria."

Nei MAS, il Bilderberg è lo spazio di coordinamento al più alto livello — il luogo dove le funzioni di utilità dei centroïdes si allineano sotto la copertura della riservatezza Chatham House.`,
        },
      ],
    },
    zh: {
      titre: "爱德华·菲利普与彼尔德伯格俱乐部 — 五次参与，一位引荐人",
      sousTitre: "亨利·德卡斯特里，马克龙和菲利普共同的引荐人",
      resume: "德卡斯特里向JDD证实，他亲自于2015年将菲利普引荐至彼尔德伯格，于2014年引荐马克龙。有据可查的五次参与（2015-2025年）。彼尔德伯格后晋升的模式反复出现：马克龙2个月后成为部长、菲利普11个月后成为总理、阿塔尔7个月后成为总理。朱佩于2015年与菲利普同席出席。",
      parties: [
        {
          titre: "爱德华·菲利普的五次参与（2015-2025年）",
          contenu: `亨利·德卡斯特里向JDD确认："是我提议的。作为市长，他发展了一些有趣的想法。"菲利普当时不过是勒阿弗尔的普通市长。

2015年（泰尔夫斯-布赫恩）：首次引荐。菲利普与基辛格、彼得·蒂尔（帕兰提尔）、德米斯·哈萨比斯（DeepMind）、BP、壳牌、拉扎德、贝莱德、领英总裁以及比利时首相夏尔·米歇尔同席。他的导师阿兰·朱佩也在场。

2016年（德累斯顿）：第二次受邀。菲利普与克里斯蒂娜·拉加德（国际货币基金组织）、洛朗·法比尤斯、埃马纽尔·沙庞蒂耶共处一室。十一个月后，他被任命为总理。

2023-2025年（里斯本、马德里、斯德哥尔摩）：强势回归。2025年，两位马克龙系前总理（菲利普和阿塔尔）首次同时出席，与两个月前刚被任命的尼古拉·罗什（SGDSN）同席。

德卡斯特里引荐的时间线：2014年引荐马克龙→2个月后成为部长。2015年引荐菲利普→第二次参与（2016年）11个月后成为总理。2023年引荐阿塔尔→7个月后成为总理。FranceSoir记录了这一反复出现的彼尔德伯格后晋升模式。`,
        },
        {
          titre: "法国常驻核心圈与情报机构",
          contenu: `对参与者名单的分析揭示了一个与菲利普其他影响圈重叠的核心群体：

亨利·德卡斯特里（AXA、Institut Montaigne）——2015、2016、2023年。帕特里克·普亚内（TotalEnergies）——2023、2025年。帕特里夏·巴尔比泽（前开云集团、前世纪俱乐部主席）——2016、2023年。托马斯·比贝尔（AXA总裁）——2023年。安托万·戈塞-格兰维尔（AXA董事会主席）——2023年。让·勒米耶尔（法国巴黎银行主席）——2025年。贝尔纳·埃米耶（DGSE局长）——2023年。尼古拉·罗什（SGDSN）——2025年。

法国情报机构领导人（埃米耶、罗什）与总统候选人同时出现在私人论坛一事引发Regards.fr质疑："有理由追问，尼古拉·罗什以及加布里埃尔·阿塔尔和爱德华·菲利普去这一年度会议究竟是做什么、说什么的。"

2023年彼尔德伯格上AXA的三重集中（德卡斯特里＋比贝尔＋戈塞-格兰维尔）记录了单一保险公司对生态系统的灌溉——其FCF战略委员会包括菲利普和拉法兰。`,
        },
        {
          titre: "彼尔德伯格作为菲利普网络的元圈",
          contenu: `彼尔德伯格构成地图的第七个圈。它以其跨大西洋维度和共同参与者的层次（国家元首、财富500强CEO、情报机构负责人）而著称。

圈与圈之间的交叉意义重大：AXA（彼尔德伯格）在FCF战略委员会中。朱佩（第一圈）于2015年与菲利普同席出席彼尔德伯格。德卡斯特里（彼尔德伯格）主持Institut Montaigne，该机构启发了2017年的马克龙纲领。彼尔德伯格作为元圈运作，下位圈（FAF、FCF、商界）的节点在此汇聚。

前费加罗报总裁菲利普·维兰将与会者描述为"相当保守主义的，都依附于资本主义和自由贸易"。艾蒂安·达维尼翁（倒数第二任主席）："要被引荐进去，需要有人脉和全球视野。"

在多智能体系统中，彼尔德伯格是最高级别的协调空间——在查塔姆规则保密的掩护下，各中心节点的效用函数在此对齐的场所。`,
        },
      ],
    },
  },

  "kohler-saade-narcotrafic-havre": {
    fr: {
      titre: "Kohler, Saadé, le port du Havre et le tsunami blanc",
      sousTitre: "MSC, CMA CGM, narcotrafic portuaire et nexus médiatico-politique",
      resume: "Le Havre représente 78 % des saisies portuaires françaises de cocaïne. Estimation : 70 à 280 tonnes/an transitent par le port. Kohler a voté des contrats MSC au GPMH sans déclarer ses liens familiaux. Saadé (CMA CGM) contrôle BFM TV/RMC et affiche 296 M€ de déficit médiatique — un investissement d'influence, pas de rendement. Macron a personnellement écrit au PNF pour disculper Kohler.",
      parties: [
        {
          titre: "Kohler au GPMH : les votes MSC et la chronologie judiciaire",
          contenu: `Mediapart révèle en août 2018 que Kohler a voté en faveur de contrats entre le GPMH et Terminal Normandie MSC (TNMSC) lors des séances de septembre 2010 et septembre 2011. Or la mère de Kohler est cousine germaine de Rafaela Aponte, cofondatrice de MSC. Kohler n'a jamais informé les autres membres ni ne s'est déporté. Philippe, lui, se déportait régulièrement.

Chronologie judiciaire : mai 2018 (révélation Mediapart, enquête PNF) → août 2018 (plainte Anticor) → été 2019 (classement sans suite) → Mediapart révèle que Macron a personnellement écrit au PNF pour disculper Kohler, au lendemain d'un rapport de police l'accablant → septembre 2022 (mise en examen prise illégale d'intérêts, témoin assisté trafic d'influence) → novembre 2024 (cour d'appel confirme les poursuites). Ses anciens supérieurs à l'APE (Bézard, Comolli) sont également mis en examen pour complicité.

France Télévisions a déprogrammé un Complément d'enquête prévu sur Kohler. La question de ce que Philippe savait des liens Kohler-Aponte au GPMH reste ouverte.`,
        },
        {
          titre: "L'empire médiatique Saadé : 296 M€ de déficit pour l'influence",
          contenu: `En moins de trois ans, Saadé a bâti un pôle médiatique de premier plan : La Provence et Corse-Matin (81 M€, 2022), La Tribune (2023), Altice Média — BFM TV, RMC, BFM Business, 10 BFM Régions, RMC Sport (1,55 Md€, mars 2024), Brut (2025), parts dans M6 (10,25 %). Troisième pôle médiatique français après Bolloré et Arnault.

L'Informé note que le rachat d'Altice Média représentait 14 fois l'Ebitda 2023. Le vendeur (Drahi) aurait déclaré : « Une influence politique, ça n'a pas de prix. » Six mois après, 250 M€ de dépréciation et 296 M€ de déficit net en 2024. L'investissement est structurellement déficitaire — objectif d'influence, pas de rentabilité.

En mars 2024, le directeur de La Provence est mis à pied après une Une défavorable à Macron. Grève de plusieurs titres. L'actionnaire intervient quand la couverture du pouvoir exécutif ne convient pas. La question : cette influence s'exercera-t-elle en faveur de Philippe pendant la campagne 2027 ?`,
        },
        {
          titre: "Le tsunami blanc : narcotrafic portuaire au Havre",
          contenu: `Le Havre représente 78 % des saisies portuaires françaises de cocaïne. En 2024, 22 tonnes saisies (avec interceptions amont). Les spécialistes estiment que les saisies ne représentent que 5 à 20 % du trafic réel — soit 70 à 280 tonnes par an. Les experts parlent d'un « tsunami blanc ».

Le mode opératoire du « conteneur clone » (saisie du 30/12/2024, 2 tonnes) : un conteneur portant un marquage identique est déposé à l'avance, sort sans passer par le scanner. Implication récurrente de dockers : en huit ans, une quinzaine d'enlèvements, dont un docker torturé et tué en 2020. La zone portuaire couvre 10 000 hectares (= Paris intra-muros). 8 000 conteneurs/jour, moins de 5 % contrôlés. 350 douaniers. L'OFAST n'est installé que depuis septembre 2023 (21 agents).

Off-Investigation et Bloomberg confirment que « plusieurs cargos MSC ont été découverts avec d'importantes quantités de cocaïne ». Le maire, dont la légitimité repose en partie sur la prospérité portuaire, se trouve en conflit d'intérêts structurel entre promotion du port et contrôle de ses dérives — et ce depuis 2010.`,
        },
      ],
    },
    en: {
      titre: "Kohler, Saade, the Port of Le Havre and the White Tsunami",
      sousTitre: "MSC, CMA CGM, port drug trafficking and the media-political nexus",
      resume: "Le Havre accounts for 78% of French port cocaine seizures. Estimate: 70 to 280 tonnes per year transit through the port. Kohler voted for MSC contracts at the GPMH without declaring his family ties. Saade (CMA CGM) controls BFM TV/RMC and posts a 296 million euro media deficit — an influence investment, not a return. Macron personally wrote to the PNF to exonerate Kohler.",
      parties: [
        {
          titre: "Kohler at the GPMH: MSC Votes and the Judicial Timeline",
          contenu: `Mediapart revealed in August 2018 that Kohler voted in favor of contracts between the GPMH and Terminal Normandie MSC (TNMSC) at sessions in September 2010 and September 2011. Kohler's mother is a first cousin of Rafaela Aponte, co-founder of MSC. Kohler never informed other members nor recused himself. Philippe, by contrast, recused himself regularly.

Judicial timeline: May 2018 (Mediapart revelation, PNF inquiry) → August 2018 (Anticor complaint) → summer 2019 (case dismissed) → Mediapart reveals that Macron personally wrote to the PNF to exonerate Kohler, the day after a police report implicating him → September 2022 (indicted for illegal conflict of interest, witness in influence trafficking case) → November 2024 (appeals court confirms proceedings). His former superiors at the APE (Bezard, Comolli) are also indicted for complicity.

France Televisions cancelled a scheduled Complement d'enquete investigation on Kohler. The question of what Philippe knew about the Kohler-Aponte connection at the GPMH remains open.`,
        },
        {
          titre: "The Saade Media Empire: 296 Million Euro Deficit for Influence",
          contenu: `In less than three years, Saade built a leading media group: La Provence and Corse-Matin (81M euros, 2022), La Tribune (2023), Altice Media — BFM TV, RMC, BFM Business, 10 regional BFM channels, RMC Sport (1.55 billion euros, March 2024), Brut (2025), stake in M6 (10.25%). The third-largest French media group after Bollore and Arnault.

L'Informe noted that the Altice Media acquisition represented 14 times the 2023 Ebitda. The seller (Drahi) reportedly stated: "Political influence has no price." Six months later, 250M euros in depreciation and a 296M euro net deficit in 2024. The investment is structurally loss-making — the objective is influence, not profitability.

In March 2024, the director of La Provence was suspended after a front page unfavorable to Macron. Strikes across several titles. The shareholder intervenes when executive coverage does not suit. The question: will this influence be exercised in favor of Philippe during the 2027 campaign?`,
        },
        {
          titre: "The White Tsunami: Port Drug Trafficking in Le Havre",
          contenu: `Le Havre accounts for 78% of French port cocaine seizures. In 2024, 22 tonnes were seized (including upstream interceptions). Specialists estimate that seizures represent only 5 to 20% of actual traffic — meaning 70 to 280 tonnes per year. Experts speak of a "white tsunami."

The "clone container" modus operandi (seizure of December 30, 2024, 2 tonnes): a container bearing identical markings is deposited in advance and exits without going through the scanner. Recurring dock worker involvement: over eight years, around fifteen kidnappings, including a docker tortured and killed in 2020. The port area covers 10,000 hectares (= inner Paris). 8,000 containers per day, less than 5% checked. 350 customs officers. OFAST has only been installed since September 2023 (21 agents).

Off-Investigation and Bloomberg confirm that "several MSC cargo ships have been found with significant quantities of cocaine." The mayor, whose legitimacy rests partly on port prosperity, faces a structural conflict of interest between promoting the port and controlling its abuses — and has done so since 2010.`,
        },
      ],
    },
    de: {
      titre: "Kohler, Saadé, der Hafen von Le Havre und der weiße Tsunami",
      sousTitre: "MSC, CMA CGM, Hafen-Drogenhandel und der medienpolitische Nexus",
      resume: "Le Havre macht 78 % der französischen Hafenbeschlagnahmungen von Kokain aus. Schätzung: 70 bis 280 Tonnen pro Jahr durchlaufen den Hafen. Kohler stimmte für MSC-Verträge im GPMH, ohne seine familiären Verbindungen zu deklarieren. Saadé (CMA CGM) kontrolliert BFM TV/RMC und weist ein Mediendefizit von 296 Mio. € aus — ein Einflussinvestment, keine Rendite. Macron schrieb persönlich an den PNF, um Kohler zu entlasten.",
      parties: [
        {
          titre: "Kohler im GPMH: MSC-Abstimmungen und die juristische Chronologie",
          contenu: `Mediapart enthüllt im August 2018, dass Kohler bei Sitzungen im September 2010 und September 2011 für Verträge zwischen dem GPMH und Terminal Normandie MSC (TNMSC) gestimmt hat. Kohlers Mutter ist die Cousine ersten Grades von Rafaela Aponte, Mitgründerin von MSC. Kohler hat die anderen Mitglieder nie informiert und sich nie für befangen erklärt. Philippe hingegen erklärte sich regelmäßig befangen.

Juristische Chronologie: Mai 2018 (Mediapart-Enthüllung, PNF-Ermittlung) → August 2018 (Anticor-Klage) → Sommer 2019 (Einstellung) → Mediapart enthüllt, dass Macron persönlich an den PNF schrieb, um Kohler zu entlasten — am Tag nach einem ihn belastenden Polizeibericht → September 2022 (Anklage wegen unerlaubter Interessenkollision, Zeuge im Einflusshandelsverfahren) → November 2024 (Berufungsgericht bestätigt Strafverfolgung). Seine ehemaligen Vorgesetzten bei der APE (Bézard, Comolli) werden ebenfalls wegen Beihilfe angeklagt.

France Télévisions hat eine geplante Complément d'enquête-Sendung über Kohler abgesetzt. Die Frage, was Philippe über die Verbindung Kohler-Aponte im GPMH wusste, bleibt offen.`,
        },
        {
          titre: "Das Saadé-Medienimperium: 296 Mio. € Defizit für Einfluss",
          contenu: `In weniger als drei Jahren hat Saadé einen führenden Medienpol aufgebaut: La Provence und Corse-Matin (81 Mio. €, 2022), La Tribune (2023), Altice Média — BFM TV, RMC, BFM Business, 10 regionale BFM-Sender, RMC Sport (1,55 Mrd. €, März 2024), Brut (2025), Anteile an M6 (10,25 %). Dritter französischer Medienpol nach Bolloré und Arnault.

L'Informé stellt fest, dass die Übernahme von Altice Média das 14-fache des Ebitda 2023 darstellte. Der Verkäufer (Drahi) soll erklärt haben: "Politischer Einfluss ist unbezahlbar." Sechs Monate später: 250 Mio. € Abschreibung und 296 Mio. € Nettoverlust im Jahr 2024. Das Investment ist strukturell defizitär — Ziel ist Einfluss, nicht Rentabilität.

Im März 2024 wurde der Direktor von La Provence nach einer für Macron ungünstigen Titelseite suspendiert. Streiks bei mehreren Titeln. Der Aktionär greift ein, wenn die Berichterstattung über die Exekutive nicht passt. Die Frage: Wird dieser Einfluss während des Wahlkampfs 2027 zugunsten von Philippe eingesetzt?`,
        },
        {
          titre: "Der weiße Tsunami: Hafen-Drogenhandel in Le Havre",
          contenu: `Le Havre macht 78 % der französischen Hafen-Kokainbeschlagnahmungen aus. Im Jahr 2024 wurden 22 Tonnen beschlagnahmt (einschließlich vorgelagerter Abfangaktionen). Experten schätzen, dass die Beschlagnahmungen nur 5 bis 20 % des tatsächlichen Handels ausmachen — das sind 70 bis 280 Tonnen pro Jahr. Experten sprechen von einem "weißen Tsunami."

Das Modus Operandi des "Kloncontainers" (Beschlagnahmung vom 30.12.2024, 2 Tonnen): Ein Container mit identischer Markierung wird vorab deponiert und verlässt den Hafen ohne den Scanner zu passieren. Wiederkehrende Beteiligung von Hafenarbeitern: In acht Jahren rund fünfzehn Entführungen, darunter ein 2020 gefolterter und getöteter Hafenarbeiter. Das Hafengebiet umfasst 10.000 Hektar (= Paris innerhalb des Rings). 8.000 Container pro Tag, weniger als 5 % kontrolliert. 350 Zöllner. Der OFAST ist erst seit September 2023 installiert (21 Beamte).

Off-Investigation und Bloomberg bestätigen, dass "mehrere MSC-Frachtschiffe mit erheblichen Mengen Kokain aufgefunden wurden." Der Bürgermeister, dessen Legitimität zum Teil auf dem Wohlstand des Hafens beruht, befindet sich in einem strukturellen Interessenkonflikt zwischen der Förderung des Hafens und der Kontrolle seiner Missstände — und das seit 2010.`,
        },
      ],
    },
    es: {
      titre: "Kohler, Saadé, el puerto de El Havre y el tsunami blanco",
      sousTitre: "MSC, CMA CGM, narcotráfico portuario y nexo mediático-político",
      resume: "El Havre representa el 78% de las incautaciones portuarias francesas de cocaína. Estimación: 70 a 280 toneladas/año transitan por el puerto. Kohler votó contratos de MSC en el GPMH sin declarar sus vínculos familiares. Saadé (CMA CGM) controla BFM TV/RMC y registra un déficit mediático de 296 M€ — una inversión de influencia, no de rendimiento. Macron escribió personalmente al PNF para disculpar a Kohler.",
      parties: [
        {
          titre: "Kohler en el GPMH: los votos MSC y la cronología judicial",
          contenu: `Mediapart revela en agosto de 2018 que Kohler votó a favor de contratos entre el GPMH y Terminal Normandie MSC (TNMSC) en las sesiones de septiembre de 2010 y septiembre de 2011. La madre de Kohler es prima carnal de Rafaela Aponte, cofundadora de MSC. Kohler nunca informó a los demás miembros ni se abstuvo. Philippe, por su parte, se abstenía regularmente.

Cronología judicial: mayo de 2018 (revelación Mediapart, investigación PNF) → agosto de 2018 (denuncia Anticor) → verano de 2019 (archivo) → Mediapart revela que Macron escribió personalmente al PNF para disculpar a Kohler, al día siguiente de un informe policial que le incriminaba → septiembre de 2022 (procesado por conflicto de intereses ilegal, testigo asistido por tráfico de influencias) → noviembre de 2024 (tribunal de apelación confirma las actuaciones). Sus antiguos superiores en la APE (Bézard, Comolli) también son procesados por complicidad.

France Télévisions retiró un Complément d'enquête previsto sobre Kohler. La pregunta de qué sabía Philippe sobre los vínculos Kohler-Aponte en el GPMH sigue abierta.`,
        },
        {
          titre: "El imperio mediático Saadé: 296 M€ de déficit para la influencia",
          contenu: `En menos de tres años, Saadé ha construido un polo mediático de primer nivel: La Provence y Corse-Matin (81 M€, 2022), La Tribune (2023), Altice Média — BFM TV, RMC, BFM Business, 10 BFM regionales, RMC Sport (1.550 M€, marzo de 2024), Brut (2025), participaciones en M6 (10,25 %). Tercer polo mediático francés tras Bolloré y Arnault.

L'Informé señala que la adquisición de Altice Média representaba 14 veces el Ebitda de 2023. El vendedor (Drahi) habría declarado: "La influencia política no tiene precio." Seis meses después, 250 M€ de depreciación y 296 M€ de déficit neto en 2024. La inversión es estructuralmente deficitaria — objetivo de influencia, no de rentabilidad.

En marzo de 2024, el director de La Provence fue suspendido tras una portada desfavorable a Macron. Huelga en varios títulos. El accionista interviene cuando la cobertura del poder ejecutivo no le conviene. La pregunta: ¿se ejercerá esta influencia a favor de Philippe durante la campaña de 2027?`,
        },
        {
          titre: "El tsunami blanco: narcotráfico portuario en El Havre",
          contenu: `El Havre representa el 78% de las incautaciones portuarias francesas de cocaína. En 2024, 22 toneladas incautadas (con interceptaciones previas). Los especialistas estiman que las incautaciones representan solo el 5 al 20% del tráfico real — es decir, de 70 a 280 toneladas por año. Los expertos hablan de un "tsunami blanco."

El modus operandi del "contenedor clonado" (incautación del 30/12/2024, 2 toneladas): un contenedor con una marcación idéntica se deposita de antemano y sale sin pasar por el escáner. Implicación recurrente de estibadores: en ocho años, unos quince secuestros, incluido un estibador torturado y asesinado en 2020. La zona portuaria cubre 10.000 hectáreas (= París intramuros). 8.000 contenedores/día, menos del 5% controlados. 350 aduaneros. La OFAST solo lleva instalada desde septiembre de 2023 (21 agentes).

Off-Investigation y Bloomberg confirman que "varios cargueros de MSC han sido descubiertos con importantes cantidades de cocaína." El alcalde, cuya legitimidad se apoya en parte en la prosperidad portuaria, se encuentra en un conflicto de intereses estructural entre la promoción del puerto y el control de sus derivas — y ello desde 2010.`,
        },
      ],
    },
    ru: {
      titre: "Колер, Саадé, порт Гавра и белое цунами",
      sousTitre: "MSC, CMA CGM, портовая наркоторговля и медиа-политический нексус",
      resume: "Гавр обеспечивает 78% французских портовых изъятий кокаина. Оценка: от 70 до 280 тонн/год проходит через порт. Колер голосовал за контракты MSC в GPMH, не декларируя семейных связей. Саадé (CMA CGM) контролирует BFM TV/RMC и фиксирует медийный дефицит в 296 млн евро — инвестиция влияния, а не доходности. Макрон лично написал в PNF, чтобы оправдать Колера.",
      parties: [
        {
          titre: "Колер в GPMH: голосования по MSC и судебная хронология",
          contenu: `В августе 2018 года Mediapart раскрывает, что Колер голосовал в пользу контрактов между GPMH и Terminal Normandie MSC (TNMSC) на заседаниях в сентябре 2010 и сентябре 2011 года. При этом мать Колера является двоюродной сестрой Рафаэлы Апонте, сооснователя MSC. Колер никогда не уведомлял других членов и не брал самоотвод. Филипп, напротив, брал самоотвод регулярно.

Судебная хронология: май 2018 (разоблачение Mediapart, расследование PNF) → август 2018 (жалоба Anticor) → лето 2019 (прекращение дела) → Mediapart раскрывает, что Макрон лично написал в PNF для оправдания Колера — на следующий день после полицейского доклада, его обвинявшего → сентябрь 2022 (предъявлено обвинение в незаконном конфликте интересов, статус свидетеля в деле о торговле влиянием) → ноябрь 2024 (апелляционный суд подтверждает уголовное преследование). Его бывшие начальники в APE (Безар, Комолли) также обвиняются в соучастии.

France Télévisions сняла с эфира запланированный выпуск Complément d'enquête о Колере. Вопрос о том, что Филипп знал о связях Колер-Апонте в GPMH, остаётся открытым.`,
        },
        {
          titre: "Медиаимперия Саадé: 296 млн евро дефицита ради влияния",
          contenu: `Менее чем за три года Саадé построил медиагруппу первого ряда: La Provence и Corse-Matin (81 млн евро, 2022), La Tribune (2023), Altice Média — BFM TV, RMC, BFM Business, 10 региональных BFM, RMC Sport (1,55 млрд евро, март 2024), Brut (2025), доля в M6 (10,25 %). Третий французский медиахолдинг после Болоре и Арно.

L'Informé отмечает, что поглощение Altice Média обошлось в 14-кратный показатель Ebitda 2023 года. Продавец (Драи) якобы заявил: «Политическое влияние бесценно». Шесть месяцев спустя — 250 млн евро обесценивания и 296 млн евро чистого убытка в 2024 году. Инвестиция структурно убыточна — цель влияние, а не доходность.

В марте 2024 года директор La Provence был отстранён после неблагоприятной для Макрона первой полосы. Забастовки в нескольких изданиях. Акционер вмешивается, когда освещение исполнительной власти его не устраивает. Вопрос: будет ли это влияние оказано в пользу Филиппа в кампании 2027 года?`,
        },
        {
          titre: "Белое цунами: портовая наркоторговля в Гавре",
          contenu: `Гавр обеспечивает 78% французских портовых изъятий кокаина. В 2024 году изъято 22 тонны (с учётом заблаговременных перехватов). Специалисты оценивают, что изъятия составляют лишь 5-20% реального трафика — то есть от 70 до 280 тонн в год. Эксперты говорят о «белом цунами».

Схема «клонированного контейнера» (изъятие 30.12.2024, 2 тонны): контейнер с идентичной маркировкой заблаговременно помещается на склад и покидает порт, минуя сканер. Систематическое участие портовых рабочих: за восемь лет около пятнадцати похищений, в том числе докер, замученный и убитый в 2020 году. Портовая зона занимает 10 000 гектаров (= Париж в пределах Périphérique). 8 000 контейнеров в день, проверяется менее 5%. 350 таможенников. OFAST установлен лишь с сентября 2023 года (21 сотрудник).

Off-Investigation и Bloomberg подтверждают, что «несколько грузовых судов MSC были обнаружены со значительным количеством кокаина». Мэр, чья легитимность частично опирается на портовое благополучие, находится в структурном конфликте интересов между продвижением порта и контролем его злоупотреблений — и это продолжается с 2010 года.`,
        },
      ],
    },
    ja: {
      titre: "コレール、サアデ、ル・アーブル港と白い津波",
      sousTitre: "MSC、CMA CGM、港湾麻薬密輸とメディア政治の結節点",
      resume: "ル・アーブルはフランスの港湾コカイン押収量の78%を占める。推計：年間70〜280トンが港を通過。コレールは家族のつながりを申告せずにGPMHでMSCの契約に投票した。サアデ（CMA CGM）はBFM TV/RMCを支配し、2億9600万ユーロのメディア赤字を計上——収益ではなく影響力への投資だ。マクロンはコレールを無罪にするためPNFに個人的に書簡を送った。",
      parties: [
        {
          titre: "GPMHにおけるコレール：MSC投票と司法年表",
          contenu: `Mediapartは2018年8月、コレールが2010年9月と2011年9月の会議でGPMHとTerminal Normandie MSC（TNMSC）の契約に賛成票を投じたことを明かした。コレールの母はMSCの共同創設者ラファエラ・アポンテの従姉妹だ。コレールは他のメンバーに告知せず、回避もしなかった。一方フィリップは定期的に回避していた。

司法年表：2018年5月（Mediapartの暴露、PNF調査）→2018年8月（Anticor告訴）→2019年夏（不起訴）→Mediapartが、コレールを非難する警察報告の翌日にマクロンがPNFに個人的に書簡を送ってコレールを無罪にしようとしたことを暴露→2022年9月（違法な利益相反で起訴、影響力取引の証人）→2024年11月（控訴審が訴追を確認）。APEの元上司たち（ベザール、コモリ）も共犯で起訴される。

France Télévisions はコレールに関する予定されていたComplément d'enquêteを放映取り消しにした。フィリップがGPMHにおけるコレール-アポンテの関係について何を知っていたかという問いは、依然として未解決のままだ。`,
        },
        {
          titre: "サアデのメディア帝国：影響力のための2億9600万ユーロの赤字",
          contenu: `3年足らずで、サアデは主要メディアグループを構築した：La ProvenceとCorse-Matin（8100万ユーロ、2022年）、La Tribune（2023年）、Altice Média——BFM TV、RMC、BFM Business、地域BFM10局、RMC Sport（15億5000万ユーロ、2024年3月）、Brut（2025年）、M6の持分（10.25%）。ボロレとアルノーに次ぐフランス第3のメディア・グループ。

L'Informéは、Altice Médiaの買収が2023年のEbitdaの14倍に相当したことに注目している。売却者（ドラヒ）は「政治的影響力には値段がつけられない」と発言したとされる。6ヶ月後、2024年には2億5000万ユーロの減損と2億9600万ユーロの純損失。この投資は構造的に赤字——目的は収益性ではなく影響力だ。

2024年3月、La Provenceの編集長がマクロンに不利な一面の記事の後に解雇された。複数の媒体でストライキ。株主は行政府の報道が都合に合わない場合に介入する。問題：この影響力は2027年の選挙運動中にフィリップのために行使されるのか？`,
        },
        {
          titre: "白い津波：ル・アーブルの港湾麻薬密輸",
          contenu: `ル・アーブルはフランスの港湾コカイン押収量の78%を占める。2024年には22トンが押収された（上流での摘発を含む）。専門家は押収量が実際の取引量のわずか5〜20%に過ぎないと推定している——つまり年間70〜280トンだ。専門家は「白い津波」と形容する。

「クローン・コンテナ」の手口（2024年12月30日の押収、2トン）：同一のマーキングを持つコンテナが事前に置かれ、スキャナーを通らずに出港する。港湾労働者の常習的な関与：8年間で約15件の誘拐、うち2020年には1名が拷問・殺害された。港湾区域は1万ヘクタールをカバーする（＝パリ・インタラムロスと同面積）。1日8000本のコンテナ、5%未満しか検査されない。税関職員350人。OFASTは2023年9月に設置されたばかり（21人）。

Off-InvestigationとBloombergは「複数のMSC貨物船で大量のコカインが発見された」と確認している。市長は、その正統性の一部を港湾の繁栄に依存しており、港の振興とその逸脱の制御の間の構造的な利益相反に直面している——そしてそれは2010年から続いている。`,
        },
      ],
    },
    it: {
      titre: "Kohler, Saadé, il porto di Le Havre e il tsunami bianco",
      sousTitre: "MSC, CMA CGM, narcotraffico portuale e nexus mediatico-politico",
      resume: "Le Havre rappresenta il 78% dei sequestri portuali francesi di cocaina. Stima: da 70 a 280 tonnellate/anno transitano per il porto. Kohler ha votato contratti MSC al GPMH senza dichiarare i suoi legami familiari. Saadé (CMA CGM) controlla BFM TV/RMC e registra un deficit mediatico di 296 M€ — un investimento d'influenza, non di rendimento. Macron ha scritto personalmente al PNF per discolpare Kohler.",
      parties: [
        {
          titre: "Kohler al GPMH: i voti MSC e la cronologia giudiziaria",
          contenu: `Mediapart rivela nell'agosto 2018 che Kohler ha votato a favore di contratti tra il GPMH e Terminal Normandie MSC (TNMSC) nelle sessioni del settembre 2010 e del settembre 2011. La madre di Kohler è cugina di primo grado di Rafaela Aponte, cofondatrice di MSC. Kohler non ha mai informato gli altri membri né si è ricusato. Philippe, invece, si ricusava regolarmente.

Cronologia giudiziaria: maggio 2018 (rivelazione Mediapart, indagine PNF) → agosto 2018 (esposto Anticor) → estate 2019 (archiviazione) → Mediapart rivela che Macron ha scritto personalmente al PNF per discolpare Kohler, il giorno dopo un rapporto di polizia che lo incriminava → settembre 2022 (rinviato a giudizio per conflitto di interessi illegale, testimone assistito nel caso di traffico di influenze) → novembre 2024 (la corte d'appello conferma i procedimenti). I suoi ex superiori all'APE (Bézard, Comolli) sono anch'essi indagati per complicità.

France Télévisions ha tolto dalla programmazione un Complément d'enquête previsto su Kohler. La questione di cosa sapesse Philippe dei legami Kohler-Aponte al GPMH rimane aperta.`,
        },
        {
          titre: "L'impero mediatico Saadé: 296 M€ di deficit per l'influenza",
          contenu: `In meno di tre anni, Saadé ha costruito un polo mediatico di primo piano: La Provence e Corse-Matin (81 M€, 2022), La Tribune (2023), Altice Média — BFM TV, RMC, BFM Business, 10 BFM regionali, RMC Sport (1,55 Mld€, marzo 2024), Brut (2025), quote in M6 (10,25 %). Terzo polo mediatico francese dopo Bolloré e Arnault.

L'Informé rileva che l'acquisizione di Altice Média rappresentava 14 volte l'Ebitda 2023. Il venditore (Drahi) avrebbe dichiarato: "Un'influenza politica non ha prezzo." Sei mesi dopo, 250 M€ di svalutazione e 296 M€ di deficit netto nel 2024. L'investimento è strutturalmente in perdita — obiettivo d'influenza, non di redditività.

Nel marzo 2024, il direttore di La Provence è stato sospeso dopo una prima pagina sfavorevole a Macron. Scioperi in diversi titoli. L'azionista interviene quando la copertura del potere esecutivo non è di gradimento. La domanda: questa influenza sarà esercitata a favore di Philippe durante la campagna 2027?`,
        },
        {
          titre: "Il tsunami bianco: narcotraffico portuale a Le Havre",
          contenu: `Le Havre rappresenta il 78% dei sequestri portuali francesi di cocaina. Nel 2024, 22 tonnellate sequestrate (con intercettazioni a monte). Gli specialisti stimano che i sequestri rappresentino solo il 5-20% del traffico reale — ovvero da 70 a 280 tonnellate all'anno. Gli esperti parlano di un "tsunami bianco."

Il modus operandi del "container clone" (sequestro del 30/12/2024, 2 tonnellate): un container con una marcatura identica viene depositato in anticipo ed esce senza passare dallo scanner. Coinvolgimento ricorrente di portuali: in otto anni, una quindicina di rapimenti, tra cui un portuale torturato e ucciso nel 2020. La zona portuale copre 10.000 ettari (= Parigi intramuros). 8.000 container/giorno, meno del 5% controllati. 350 doganieri. L'OFAST è installato solo da settembre 2023 (21 agenti).

Off-Investigation e Bloomberg confermano che "diversi cargo MSC sono stati scoperti con importanti quantità di cocaina." Il sindaco, la cui legittimità si basa in parte sulla prosperità portuale, si trova in un conflitto di interessi strutturale tra la promozione del porto e il controllo delle sue derive — e ciò dal 2010.`,
        },
      ],
    },
    zh: {
      titre: "科勒、萨阿代、勒阿弗尔港与白色海啸",
      sousTitre: "MSC、CMA CGM、港口毒品走私与媒体政治结合体",
      resume: "勒阿弗尔占法国港口可卡因查扣量的78%。估计：每年70至280吨通过该港口中转。科勒在GPMH投票支持MSC合同，却未申报家庭关系。萨阿代（CMA CGM）控制BFM TV/RMC，录得2.96亿欧元的媒体赤字——这是一项影响力投资，而非盈利。马克龙亲自致函PNF为科勒开脱。",
      parties: [
        {
          titre: "科勒在GPMH：MSC投票与司法时间线",
          contenu: `2018年8月，Mediapart披露科勒在2010年9月和2011年9月的会议中投票支持GPMH与诺曼底MSC码头（TNMSC）签订合同。然而科勒的母亲是MSC联合创始人拉法埃拉·阿蓬特的堂亲。科勒从未通知其他成员，也没有回避。而菲利普本人则定期回避。

司法时间线：2018年5月（Mediapart披露，PNF调查）→2018年8月（Anticor投诉）→2019年夏（不予起诉）→Mediapart披露马克龙在一份不利于科勒的警方报告出炉次日亲自致函PNF为其开脱→2022年9月（以非法利益冲突被起诉，影响力贩卖案辅助证人）→2024年11月（上诉法院确认追诉）。他在APE的前上司（贝扎尔、科莫利）也以共谋罪被起诉。

法国电视台取消了一期原定关于科勒的Complément d'enquête节目。菲利普在GPMH时对科勒-阿蓬特关系知情多少，这一问题仍悬而未决。`,
        },
        {
          titre: "萨阿代的媒体帝国：2.96亿欧元的赤字换取影响力",
          contenu: `不到三年，萨阿代构建了一个顶级媒体集团：《普罗旺斯报》和《科西嘉早报》（8100万欧元，2022年）、《论坛报》（2023年）、Altice Média——BFM TV、RMC、BFM商业频道、10个地区BFM、RMC体育（15.5亿欧元，2024年3月）、Brut（2025年）、M6股份（10.25%）。法国第三大媒体集团，仅次于博洛雷和阿尔诺。

L'Informé指出，Altice Média的收购价格相当于2023年息税折旧摊销前利润的14倍。据报道，卖方（德拉希）表示："政治影响力无价"。六个月后，2024年产生2.5亿欧元减值和2.96亿欧元净亏损。这项投资在结构上亏损——目标是影响力，而非盈利。

2024年3月，《普罗旺斯报》总编在一篇不利于马克龙的头版文章后被停职。多家媒体爆发罢工。当对行政权力的报道不合适时，股东就会介入。问题：这种影响力是否会在2027年选举活动中为菲利普所用？`,
        },
        {
          titre: "白色海啸：勒阿弗尔的港口毒品走私",
          contenu: `勒阿弗尔占法国港口可卡因查扣量的78%。2024年查扣22吨（含上游拦截）。专家估计查扣量仅占实际流量的5%至20%——即每年70至280吨。专家们将其称为"白色海啸"。

"克隆集装箱"作案手法（2024年12月30日查扣，2吨）：一个带有相同标记的集装箱提前存放，无需经过扫描仪即可出港。码头工人的反复参与：八年内约十五起绑架事件，其中一名码头工人于2020年遭酷刑折磨并被杀害。港区占地1万公顷（＝巴黎环城公路以内面积）。每天8000个集装箱，不到5%受到检查。350名海关人员。OFAST直到2023年9月才建立（21名人员）。

Off-Investigation和彭博社证实，"多艘MSC货轮被发现载有大量可卡因"。这位市长的合法性部分依赖于港口的繁荣，他在推动港口发展与控制其滥权行为之间面临结构性利益冲突——这一状况自2010年便已存在。`,
        },
      ],
    },
  },

  "nunez-bras-arme-repression": {
    fr: {
      titre: "Laurent Nuñez — Le bras armé de la répression macroniste",
      sousTitre: "DGSI • Gilets jaunes • BRAV-M • JO 2024 • gouvernement Lecornu II",
      resume:
        "Laurent Nuñez est l'exécuteur opérationnel de la répression des Gilets jaunes dans le gouvernement Philippe II. Directeur de la DGSI, secrétaire d'État à l'Intérieur, coordonnateur renseignement à l'Élysée, préfet de police de Paris, puis ministre de l'Intérieur (Lecornu II). Découverte centrale : le triangle ENA Nuñez–Bompard–Caubel relie sa promotion (Cyrano de Bergerac, 1997-99) au cabinet Philippe et au parti Horizons.",
      parties: [
        {
          titre: "Parcours préfectoral — l'ascension d'un appareil sécuritaire",
          contenu: `Laurent Nuñez-Belda (né le 19 février 1964 à Bourges) est issu d'une famille de pieds-noirs d'origine espagnole rapatriés en 1962. Après un DESS en gestion des collectivités locales, il est inspecteur des impôts à Bercy, puis intègre l'ENA par le concours interne en 1997 (promotion Cyrano de Bergerac, 1997-1999).

Chaque poste le place au cœur de crises majeures : directeur de cabinet du préfet de police de Paris (attentats Charlie Hebdo/Hyper Cacher, 2015), préfet de police des Bouches-du-Rhône — où il déploie charges de CRS et canon à eau contre des grévistes à Fos-sur-Mer en 2016.

Le 22 juin 2017, cinq semaines après la nomination de Philippe à Matignon, Macron nomme Nuñez à la tête de la DGSI. La simultanéité avec la formation du gouvernement Philippe n'est pas anodine : Macron réorganise l'ensemble du dispositif sécuritaire dès les premières semaines du quinquennat.`,
        },
        {
          titre: "La répression des Gilets jaunes — le bras armé de Philippe",
          contenu: `Le 16 octobre 2018, Nuñez entre au gouvernement Philippe II comme secrétaire d'État auprès du ministre de l'Intérieur Christophe Castaner. Le timing est critique : le mouvement des Gilets jaunes éclate un mois plus tard, le 17 novembre 2018.

Le tandem Castaner-Nuñez : officiellement, Castaner est le ministre et Nuñez son adjoint. En réalité, selon Libération et Le Monde, « c'est lui [Nuñez] qui est véritablement aux manettes » à Beauvau.

Défense des LBD (mars 2019, BFMTV) : « Sans le LBD, on est incapable d'interpeller des personnes dans des scènes de guérilla urbaine. » Il participe au limogeage du préfet Delpuech en mars 2019, ouvrant la phase la plus dure de la répression sous Lallement.

La chaîne de responsabilité : décision politique (Macron/Philippe) → pilotage opérationnel (Castaner/Nuñez) → exécution terrain (Lallement) → continuité post-2020 (Nuñez comme préfet, puis ministre).`,
        },
        {
          titre: "Le triangle ENA : Nuñez–Bompard–Caubel",
          contenu: `La découverte structurante : Nuñez et Alexandre Bompard sont condisciples de la promotion Cyrano de Bergerac de l'ENA (1997-1999). L'arrêté du 19 avril 1999 (Légifrance, JORFTEXT000000211140) en fait foi. Bompard sort 4e de la promotion, Nuñez rejoint le ministère de l'Intérieur.

L'épouse d'Alexandre Bompard, Charlotte Caubel (magistrate, Sciences Po), est nommée en mai 2017 conseillère justice au cabinet d'Édouard Philippe à Matignon. Elle y reste trois ans (2017-2020), devenant cheffe du pôle justice. Nuñez siège donc dans le même exécutif que l'épouse de son condisciple de l'ENA.

Charlotte Caubel est membre du parti Horizons. Après Matignon : directrice de la PJJ (2020-2022), secrétaire d'État Enfance sous Borne (2022-2024), procureure adjointe à Paris (août 2025). Son mari Alexandre Bompard dirige Carrefour (CA 2024 : 86 milliards €), partenaire officiel des JO 2024.

Ce triangle relie directement la promotion ENA de Nuñez au cœur du cabinet Philippe et au parti Horizons.`,
        },
        {
          titre: "Analyse MAS — l'agent d'exécution régalien",
          contenu: `En termes de systèmes multi-agents, Laurent Nuñez est un agent spécialisé de type « exécuteur régalien ». Sa loyauté va directement à Macron — qui le nomme personnellement à chaque poste clé (DGSI, CNRLT, préfecture de police, ministère) — pas à Philippe.

Contrairement à Attali ou Minc (agents facilitateurs), Nuñez implémente les décisions des centroïdes dans l'espace d'états sécuritaire. Il est un subordonné opérationnel de Philippe (2018-2020) sans fidélité organique.

Leur lien est une co-responsabilité : toute mise en cause de la répression des Gilets jaunes implique simultanément Philippe (responsabilité politique) et Nuñez (exécution opérationnelle). Dans le gouvernement Lecornu II, sa coexistence avec des membres Horizons crée un lien indirect supplémentaire avec la sphère philippiste.`,
        },
        {
          titre: "Controverses — BRAV-M, Nahel Merzouk, Sainte-Soline",
          contenu: `BRAV-M et retraites (2023) : la brigade BRAV-M, créée sous son secrétariat d'État (2019), est mise en cause pour sept blessés graves lors des manifestations contre la réforme des retraites 2023. Nuñez prend leur défense et paie leurs frais d'avocat contre l'avis de ses services.

Affaire Nahel Merzouk (2023-2024) : en février 2024, Nuñez émet un avis « particulièrement favorable » pour la mutation du policier ayant tué Nahel dans le commissariat de son choix — décision dénoncée comme une institutionnalisation de l'impunité policière.

Sainte-Soline (2023-2025) : des vidéos policières révèlent des « tirs tendus » de grenades, pratique illégale. Nuñez refuse le terme de « violences policières » mais demande une enquête administrative.

En parallèle, sa gestion des JO de Paris 2024 est unanimement reconnue comme un succès sécuritaire majeur, lui valant le grade de commandeur de la Légion d'honneur.`,
        },
      ],
    },
    en: {
      titre: "Laurent Nuñez — The Armed Wing of Macronist Repression",
      sousTitre: "DGSI • Yellow Vests • BRAV-M • Paris 2024 • Lecornu II Government",
      resume:
        "Laurent Nuñez was the operational executor of Yellow Vest repression (2,500 injured) in the Philippe II government. Head of DGSI, Secretary of State for the Interior, intelligence coordinator at the Élysée, Paris police prefect, then Interior Minister (Lecornu II). Central discovery: the ENA triangle Nuñez–Bompard–Caubel links his graduating class (Cyrano de Bergerac, 1997-99) to Philippe's cabinet and the Horizons party.",
      parties: [
        {
          titre: "Prefectoral Career — Rise of a Security Apparatus",
          contenu: `Laurent Nuñez-Belda (born 19 February 1964 in Bourges) comes from a pied-noir family of Spanish origin repatriated in 1962. After a postgraduate degree in local government management, he became a tax inspector at Bercy, then joined the ENA through the internal competition in 1997 (Cyrano de Bergerac class, 1997-1999).

Each post placed him at the center of major crises: chief of staff to the Paris police prefect (Charlie Hebdo/Hyper Cacher attacks, 2015), police prefect of Bouches-du-Rhône — deploying riot police and water cannons against strikers at Fos-sur-Mer in 2016.

On 22 June 2017, five weeks after Philippe's appointment to Matignon, Macron named Nuñez head of the DGSI. The timing was not incidental: Macron reorganized the entire security apparatus in the first weeks of his presidency.`,
        },
        {
          titre: "Yellow Vest Repression — Philippe's Armed Wing",
          contenu: `On 16 October 2018, Nuñez joined the Philippe II government as Secretary of State for the Interior under minister Christophe Castaner. The timing was critical: the Yellow Vest movement erupted one month later, on 17 November 2018.

The Castaner-Nuñez tandem: officially, Castaner was the minister and Nuñez his deputy. In reality, according to Libération and Le Monde, "it is he [Nuñez] who is truly in charge" at Beauvau.

Defense of rubber bullet launchers (March 2019, BFMTV): "Without the LBD, we are unable to arrest people in urban guerrilla scenarios." He contributed to the dismissal of prefect Delpuech in March 2019, opening the harshest phase of repression under Lallement.

The chain of responsibility: political decision (Macron/Philippe) → operational management (Castaner/Nuñez) → field execution (Lallement) → post-2020 continuity (Nuñez as prefect, then minister).`,
        },
        {
          titre: "The ENA Triangle: Nuñez–Bompard–Caubel",
          contenu: `The structural discovery: Nuñez and Alexandre Bompard were classmates at ENA's Cyrano de Bergerac class (1997-1999). The decree of 19 April 1999 (Légifrance, JORFTEXT000000211140) confirms this. Bompard graduated 4th in the class; Nuñez joined the Interior Ministry.

Alexandre Bompard's wife, Charlotte Caubel (magistrate, Sciences Po), was appointed justice advisor to Édouard Philippe's cabinet at Matignon in May 2017. She remained for three years (2017-2020), becoming head of the justice unit. Nuñez thus served in the same executive as his ENA classmate's wife.

Charlotte Caubel is a member of the Horizons party. After Matignon: director of the PJJ (2020-2022), Secretary of State for Children under Borne (2022-2024), deputy prosecutor in Paris (August 2025). Her husband Alexandre Bompard leads Carrefour (2024 turnover: €86 billion), official partner of the Paris 2024 Olympics.

This triangle directly links Nuñez's ENA class to the heart of Philippe's cabinet and the Horizons party.`,
        },
        {
          titre: "MAS Analysis — The State Execution Agent",
          contenu: `In multi-agent system terms, Laurent Nuñez is a specialized agent of the "state executor" type. His loyalty goes directly to Macron — who personally appoints him to each key position (DGSI, CNRLT, police prefecture, ministry) — not to Philippe.

Unlike Attali or Minc (facilitator agents), Nuñez implements centroid decisions within the security state space. He was an operational subordinate of Philippe (2018-2020) without organic loyalty.

Their link is one of co-responsibility: any challenge to Yellow Vest repression simultaneously implicates Philippe (political responsibility) and Nuñez (operational execution). In the Lecornu II government, his coexistence with Horizons members creates an additional indirect link to the Philippist sphere.`,
        },
        {
          titre: "Controversies — BRAV-M, Nahel Merzouk, Sainte-Soline",
          contenu: `BRAV-M and pensions reform (2023): the BRAV-M brigade, created under his State Secretariat (2019), was implicated in seven serious injuries during the 2023 pensions reform protests. Nuñez defended them and paid their legal fees against his services' advice.

Nahel Merzouk case (2023-2024): in February 2024, Nuñez issued a "particularly favorable" opinion for the transfer of the officer who killed Nahel to his preferred police station — a decision denounced as institutionalizing police impunity.

Sainte-Soline (2023-2025): police footage revealed illegal "flat trajectory" grenade firing. Nuñez refused the term "police violence" but called for an administrative inquiry.

In contrast, his management of the Paris 2024 Olympic Games was unanimously recognized as a major security success, earning him the rank of Commander of the Legion of Honor.`,
        },
      ],
    },
    de: {
      titre: "Laurent Nuñez — Der bewaffnete Arm der macronistischen Repression",
      sousTitre: "DGSI • Gelbwesten • BRAV-M • JO 2024 • Regierung Lecornu II",
      resume:
        "Laurent Nuñez war der operative Vollstrecker der Gelbwesten-Repression (2.500 Verletzte) in der Regierung Philippe II. Direktor der DGSI, Staatssekretär im Innenministerium, Geheimdienstkoordinator im Élysée, Polizeipräfekt von Paris, dann Innenminister (Lecornu II). Zentrale Entdeckung: Das ENA-Dreieck Nuñez–Bompard–Caubel verbindet seinen Jahrgang (Cyrano de Bergerac, 1997-99) mit Philippes Kabinett und der Horizons-Partei.",
      parties: [
        {
          titre: "Präfektorale Laufbahn — Aufstieg eines Sicherheitsapparats",
          contenu: `Laurent Nuñez-Belda (geboren am 19. Februar 1964 in Bourges) stammt aus einer Pied-noir-Familie spanischer Abstammung, die 1962 repatriiert wurde. Nach einem Aufbaustudium in Kommunalverwaltung wurde er Steuerinspektor bei Bercy und trat 1997 über den internen Wettbewerb in die ENA ein (Jahrgang Cyrano de Bergerac, 1997-1999).

Jede Station stellte ihn ins Zentrum großer Krisen: Stabschef des Pariser Polizeipräfekten (Anschläge Charlie Hebdo/Hyper Cacher, 2015), Polizeipräfekt der Bouches-du-Rhône — wo er 2016 Bereitschaftspolizei und Wasserwerfer gegen Streikende in Fos-sur-Mer einsetzte.

Am 22. Juni 2017, fünf Wochen nach Philippes Ernennung zu Matignon, ernannte Macron Nuñez zum Chef der DGSI. Die Gleichzeitigkeit mit der Regierungsbildung war kein Zufall: Macron reorganisierte den gesamten Sicherheitsapparat in den ersten Wochen seiner Amtszeit.`,
        },
        {
          titre: "Repression der Gelbwesten — Philippes bewaffneter Arm",
          contenu: `Am 16. Oktober 2018 trat Nuñez der Regierung Philippe II als Staatssekretär im Innenministerium unter Minister Christophe Castaner bei. Das Timing war kritisch: Die Gelbwesten-Bewegung begann einen Monat später, am 17. November 2018.

Das Castaner-Nuñez-Tandem: offiziell war Castaner der Minister und Nuñez sein Stellvertreter. In Wirklichkeit, so Libération und Le Monde, „ist er [Nuñez] derjenige, der wirklich das Heft in der Hand hält" in Beauvau.

Verteidigung von Gummigeschossen (März 2019, BFMTV): „Ohne das LBD können wir keine Personen in städtischen Guerillaszenarien festnehmen." Er trug zur Entlassung von Präfekt Delpuech im März 2019 bei, was die härteste Phase der Repression unter Lallement einleitete.`,
        },
        {
          titre: "Das ENA-Dreieck: Nuñez–Bompard–Caubel",
          contenu: `Die strukturelle Entdeckung: Nuñez und Alexandre Bompard waren Kommilitonen im ENA-Jahrgang Cyrano de Bergerac (1997-1999). Der Erlass vom 19. April 1999 (Légifrance, JORFTEXT000000211140) belegt dies. Bompard schloss als 4. ab; Nuñez wechselte ins Innenministerium.

Alexandre Bompards Ehefrau Charlotte Caubel (Magistratin, Sciences Po) wurde im Mai 2017 als Justizberaterin in Philippes Kabinett in Matignon berufen. Sie blieb drei Jahre (2017-2020) und wurde Leiterin der Justizabteilung. Nuñez diente also in derselben Exekutive wie die Frau seines ENA-Kommilitonen.

Charlotte Caubel ist Mitglied der Partei Horizons. Nach Matignon: Direktorin der PJJ (2020-2022), Staatssekretärin für Kinder unter Borne (2022-2024), stellvertretende Staatsanwältin in Paris (August 2025). Ihr Mann Alexandre Bompard leitet Carrefour (Umsatz 2024: 86 Milliarden €), offizieller Partner der Olympischen Spiele Paris 2024.

Dieses Dreieck verbindet Nuñez' ENA-Jahrgang direkt mit dem Kern von Philippes Kabinett und der Horizons-Partei.`,
        },
        {
          titre: "MAS-Analyse — Der staatliche Vollstreckungsagent",
          contenu: `In Begriffen von Multi-Agenten-Systemen ist Laurent Nuñez ein spezialisierter Agent des Typs „staatlicher Vollstrecker". Seine Loyalität gilt direkt Macron — der ihn persönlich zu jeder Schlüsselposition ernennt (DGSI, CNRLT, Polizeipräfektur, Ministerium) — nicht Philippe.

Im Gegensatz zu Attali oder Minc (Vermittleragenten) setzt Nuñez Entscheidungen der Zentroiden im staatlichen Sicherheitsraum um. Er war ein operativer Untergebener von Philippe (2018-2020) ohne organische Loyalität.

Ihre Verbindung ist eine Ko-Verantwortung: Jede Infragestellung der Gelbwesten-Repression impliziert gleichzeitig Philippe (politische Verantwortung) und Nuñez (operative Ausführung).`,
        },
        {
          titre: "Kontroversen — BRAV-M, Nahel Merzouk, Sainte-Soline",
          contenu: `BRAV-M und Rentenreform (2023): Die BRAV-M-Brigade, die unter seinem Staatssekretariat (2019) gegründet wurde, war in sieben schwere Verletzungen während der Rentenreformproteste 2023 verwickelt. Nuñez verteidigte sie und bezahlte ihre Anwaltskosten gegen den Rat seiner Dienste.

Fall Nahel Merzouk (2023-2024): Im Februar 2024 gab Nuñez ein „besonders günstiges" Gutachten für die Versetzung des Beamten ab, der Nahel erschossen hatte — eine Entscheidung, die als Institutionalisierung der Polizeiimunität angeprangert wurde.

Sainte-Soline (2023-2025): Polizeiaufnahmen zeigten illegale „Flachbahnwürfe" von Granaten. Nuñez lehnte den Begriff „Polizeigewalt" ab, forderte aber eine Verwaltungsuntersuchung.

Im Gegensatz dazu wurde sein Management der Olympischen Spiele Paris 2024 einhellig als großer Sicherheitserfolg anerkannt, wofür er den Rang eines Kommandeurs der Ehrenlegion erhielt.`,
        },
      ],
    },
    es: {
      titre: "Laurent Nuñez — El brazo armado de la represión macronista",
      sousTitre: "DGSI • Chalecos Amarillos • BRAV-M • JO 2024 • Gobierno Lecornu II",
      resume:
        "Laurent Nuñez fue el ejecutor operacional de la represión de los Chalecos Amarillos (2.500 heridos) en el gobierno Philippe II. Director de la DGSI, secretario de Estado del Interior, coordinador de inteligencia en el Elíseo, prefecto de policía de París, luego ministro del Interior (Lecornu II). Descubrimiento central: el triángulo ENA Nuñez–Bompard–Caubel vincula su promoción (Cyrano de Bergerac, 1997-99) con el gabinete Philippe y el partido Horizons.",
      parties: [
        {
          titre: "Carrera prefectoral — El ascenso de un aparato de seguridad",
          contenu: `Laurent Nuñez-Belda (nacido el 19 de febrero de 1964 en Bourges) proviene de una familia de pieds-noirs de origen español repatriados en 1962. Tras un máster en gestión de colectividades locales, fue inspector de impuestos en Bercy, luego ingresó a la ENA por concurso interno en 1997 (promoción Cyrano de Bergerac, 1997-1999).

Cada puesto lo situó en el centro de grandes crisis: jefe de gabinete del prefecto de policía de París (atentados Charlie Hebdo/Hyper Cacher, 2015), prefecto de policía de Bouches-du-Rhône — donde desplegó policía antidisturbios y cañones de agua contra huelguistas en Fos-sur-Mer en 2016.

El 22 de junio de 2017, cinco semanas después del nombramiento de Philippe en Matignon, Macron nombró a Nuñez director de la DGSI. La simultaneidad con la formación del gobierno Philippe no fue casual: Macron reorganizó todo el aparato de seguridad en las primeras semanas de su mandato.`,
        },
        {
          titre: "Represión de los Chalecos Amarillos — El brazo armado de Philippe",
          contenu: `El 16 de octubre de 2018, Nuñez entró al gobierno Philippe II como secretario de Estado del Interior bajo el ministro Christophe Castaner. El timing fue crítico: el movimiento de los Chalecos Amarillos estalló un mes después, el 17 de noviembre de 2018.

El tándem Castaner-Nuñez: oficialmente, Castaner era el ministro y Nuñez su adjunto. En realidad, según Libération y Le Monde, «es él [Nuñez] quien verdaderamente maneja los hilos» en Beauvau.

Defensa de las pelotas de goma (marzo 2019, BFMTV): «Sin el LBD, somos incapaces de detener a personas en escenarios de guerrilla urbana.» Contribuyó al cese del prefecto Delpuech en marzo de 2019, abriendo la fase más dura de la represión bajo Lallement.`,
        },
        {
          titre: "El triángulo ENA: Nuñez–Bompard–Caubel",
          contenu: `El descubrimiento estructural: Nuñez y Alexandre Bompard fueron compañeros de promoción en la ENA (Cyrano de Bergerac, 1997-1999). El decreto del 19 de abril de 1999 (Légifrance, JORFTEXT000000211140) lo confirma. Bompard terminó 4º en la promoción; Nuñez se incorporó al Ministerio del Interior.

La esposa de Alexandre Bompard, Charlotte Caubel (magistrada, Sciences Po), fue nombrada asesora de justicia en el gabinete de Édouard Philippe en Matignon en mayo de 2017. Permaneció tres años (2017-2020), convirtiéndose en jefa del área de justicia. Nuñez sirvió así en el mismo ejecutivo que la esposa de su compañero de ENA.

Charlotte Caubel es miembro del partido Horizons. Tras Matignon: directora de la PJJ (2020-2022), secretaria de Estado de Infancia bajo Borne (2022-2024), fiscal adjunta en París (agosto 2025). Su esposo Alexandre Bompard dirige Carrefour (facturación 2024: 86.000 millones de €), socio oficial de los JO de París 2024.

Este triángulo vincula directamente la promoción ENA de Nuñez con el núcleo del gabinete Philippe y el partido Horizons.`,
        },
        {
          titre: "Análisis MAS — El agente de ejecución estatal",
          contenu: `En términos de sistemas multiagente, Laurent Nuñez es un agente especializado de tipo «ejecutor estatal». Su lealtad va directamente a Macron — quien lo nombra personalmente en cada puesto clave (DGSI, CNRLT, prefectura de policía, ministerio) — no a Philippe.

A diferencia de Attali o Minc (agentes facilitadores), Nuñez implementa decisiones de los centros de poder en el espacio de estados de seguridad. Fue un subordinado operacional de Philippe (2018-2020) sin lealtad orgánica.

Su vínculo es una co-responsabilidad: cualquier cuestionamiento de la represión de los Chalecos Amarillos implica simultáneamente a Philippe (responsabilidad política) y a Nuñez (ejecución operacional).`,
        },
        {
          titre: "Controversias — BRAV-M, Nahel Merzouk, Sainte-Soline",
          contenu: `BRAV-M y reforma de pensiones (2023): la brigada BRAV-M, creada bajo su Secretaría de Estado (2019), estuvo implicada en siete heridos graves durante las protestas contra la reforma de pensiones de 2023. Nuñez los defendió y pagó sus honorarios de abogado contra el consejo de sus servicios.

Caso Nahel Merzouk (2023-2024): en febrero de 2024, Nuñez emitió un dictamen «particularmente favorable» para el traslado del agente que mató a Nahel al comisaría de su elección — decisión denunciada como institucionalización de la impunidad policial.

Sainte-Soline (2023-2025): imágenes policiales revelaron lanzamientos ilegales de granadas «en trayectoria rasante». Nuñez rechazó el término «violencias policiales» pero solicitó una investigación administrativa.

En contraste, su gestión de los JO de París 2024 fue unánimemente reconocida como un gran éxito de seguridad, lo que le valió el rango de Comendador de la Legión de Honor.`,
        },
      ],
    },
    it: {
      titre: "Laurent Nuñez — Il braccio armato della repressione macronista",
      sousTitre: "DGSI • Gilet Gialli • BRAV-M • JO 2024 • Governo Lecornu II",
      resume:
        "Laurent Nuñez è stato l'esecutore operativo della repressione dei Gilet Gialli (2.500 feriti) nel governo Philippe II. Direttore della DGSI, segretario di Stato dell'Interno, coordinatore dell'intelligence all'Eliseo, prefetto di polizia di Parigi, poi ministro dell'Interno (Lecornu II). Scoperta centrale: il triangolo ENA Nuñez–Bompard–Caubel collega il suo anno di corso (Cyrano de Bergerac, 1997-99) al gabinetto Philippe e al partito Horizons.",
      parties: [
        {
          titre: "Carriera prefettizia — L'ascesa di un apparato di sicurezza",
          contenu: `Laurent Nuñez-Belda (nato il 19 febbraio 1964 a Bourges) proviene da una famiglia di pieds-noirs di origine spagnola rimpatriati nel 1962. Dopo un master in gestione delle collettività locali, diventò ispettore fiscale a Bercy, poi entrò all'ENA tramite concorso interno nel 1997 (promozione Cyrano de Bergerac, 1997-1999).

Ogni incarico lo pose al centro di grandi crisi: capo di gabinetto del prefetto di polizia di Parigi (attentati Charlie Hebdo/Hyper Cacher, 2015), prefetto di polizia delle Bouches-du-Rhône — dove dispiegò polizia antisommossa e idranti contro gli scioperanti a Fos-sur-Mer nel 2016.

Il 22 giugno 2017, cinque settimane dopo la nomina di Philippe a Matignon, Macron nominò Nuñez a capo della DGSI. La simultaneità con la formazione del governo Philippe non fu casuale: Macron riorganizzò l'intero apparato di sicurezza nelle prime settimane del suo mandato.`,
        },
        {
          titre: "Repressione dei Gilet Gialli — Il braccio armato di Philippe",
          contenu: `Il 16 ottobre 2018, Nuñez entrò nel governo Philippe II come segretario di Stato dell'Interno sotto il ministro Christophe Castaner. I tempi erano critici: il movimento dei Gilet Gialli scoppiò un mese dopo, il 17 novembre 2018.

Il tandem Castaner-Nuñez: ufficialmente Castaner era il ministro e Nuñez il suo vice. In realtà, secondo Libération e Le Monde, «è lui [Nuñez] che è veramente al comando» a Beauvau.

Difesa dei proiettili di gomma (marzo 2019, BFMTV): «Senza il LBD, non siamo in grado di arrestare persone in scenari di guerriglia urbana.» Contribuì alla destituzione del prefetto Delpuech nel marzo 2019, aprendo la fase più dura della repressione sotto Lallement.`,
        },
        {
          titre: "Il triangolo ENA: Nuñez–Bompard–Caubel",
          contenu: `La scoperta strutturale: Nuñez e Alexandre Bompard erano compagni di corso alla ENA (Cyrano de Bergerac, 1997-1999). Il decreto del 19 aprile 1999 (Légifrance, JORFTEXT000000211140) lo conferma. Bompard si laureò 4°; Nuñez passò al Ministero dell'Interno.

La moglie di Alexandre Bompard, Charlotte Caubel (magistrata, Sciences Po), fu nominata consigliera giustizia nel gabinetto di Édouard Philippe a Matignon nel maggio 2017. Vi rimase tre anni (2017-2020), diventando capo dell'area giustizia. Nuñez servì quindi nello stesso esecutivo della moglie del suo compagno di corso ENA.

Charlotte Caubel è membro del partito Horizons. Dopo Matignon: direttrice della PJJ (2020-2022), segretaria di Stato per l'Infanzia sotto Borne (2022-2024), sostituta procuratrice a Parigi (agosto 2025). Suo marito Alexandre Bompard guida Carrefour (fatturato 2024: 86 miliardi di €), partner ufficiale delle Olimpiadi di Parigi 2024.

Questo triangolo collega direttamente il corso ENA di Nuñez al cuore del gabinetto Philippe e al partito Horizons.`,
        },
        {
          titre: "Analisi MAS — L'agente di esecuzione statale",
          contenu: `In termini di sistemi multi-agente, Laurent Nuñez è un agente specializzato di tipo «esecutore statale». La sua lealtà va direttamente a Macron — che lo nomina personalmente in ogni posizione chiave (DGSI, CNRLT, prefettura di polizia, ministero) — non a Philippe.

A differenza di Attali o Minc (agenti facilitatori), Nuñez implementa le decisioni dei centroidi nello spazio degli stati di sicurezza. Fu un subordinato operativo di Philippe (2018-2020) senza lealtà organica.

Il loro legame è una co-responsabilità: qualsiasi messa in discussione della repressione dei Gilet Gialli implica simultaneamente Philippe (responsabilità politica) e Nuñez (esecuzione operativa).`,
        },
        {
          titre: "Controversie — BRAV-M, Nahel Merzouk, Sainte-Soline",
          contenu: `BRAV-M e riforma delle pensioni (2023): la brigata BRAV-M, creata sotto la sua Segreteria di Stato (2019), fu implicata in sette feriti gravi durante le proteste contro la riforma pensionistica del 2023. Nuñez li difese e pagò le loro spese legali contro il parere dei suoi servizi.

Caso Nahel Merzouk (2023-2024): nel febbraio 2024, Nuñez emise un parere «particolarmente favorevole» per il trasferimento dell'agente che aveva ucciso Nahel nella commissariato di sua scelta — decisione denunciata come istituzionalizzazione dell'impunità della polizia.

Sainte-Soline (2023-2025): riprese della polizia rivelarono lanci illegali di granate «a traiettoria radente». Nuñez rifiutò il termine «violenza della polizia» ma chiese un'indagine amministrativa.

Al contrario, la sua gestione delle Olimpiadi di Parigi 2024 fu unanimemente riconosciuta come un grande successo di sicurezza, valendogli il grado di Commendatore della Legion d'Onore.`,
        },
      ],
    },
    ja: {
      titre: "ローラン・ニュネス — マクロン主義的弾圧の武装した翼",
      sousTitre: "DGSI・黄色いベスト運動・BRAV-M・パリ2024・ルコルニュ第2次政府",
      resume:
        "ローラン・ニュネスは、フィリップ第2次政府における黄色いベスト運動弾圧（2,500人負傷）の実務執行者である。DGSI長官、内務副大臣、エリゼ宮情報調整官、パリ警察長官、その後ルコルニュ第2次政府内務大臣を歴任。中心的発見：ENA三角形ニュネス–ボンパール–コーベルは彼の同期（シラノ・ド・ベルジュラック期、1997-99年）をフィリップ内閣とオリゾン党に結びつけている。",
      parties: [
        {
          titre: "地方長官としてのキャリア — 治安機構の台頭",
          contenu: `ローラン・ニュネス＝ベルダ（1964年2月19日ブールジュ生まれ）は1962年に帰還したスペイン系ピエ＝ノワール家庭の出身。地方自治体管理の高等学位取得後、ベルシーで税務調査官となり、1997年に内部競争試験でENA入学（シラノ・ド・ベルジュラック期、1997年～1999年）。

各ポストで重大な危機の中心に置かれた：パリ警察長官官房長（シャルリー・エブド/イペル・カシェル攻撃、2015年）、ブーシュ＝デュ＝ローヌ県警察長官として2016年にフォス＝シュル＝メールでストライキ参加者に機動隊と放水砲を展開。

2017年6月22日、フィリップのマティニョン就任5週間後、マクロンはニュネスをDGSI長官に任命。フィリップ政府の発足と同時期であることは偶然ではない：マクロンは就任当初から治安装置全体を再編した。`,
        },
        {
          titre: "黄色いベスト運動の弾圧 — フィリップの武装した翼",
          contenu: `2018年10月16日、ニュネスはクリストフ・カスタネール内務大臣の下でフィリップ第2次政府に内務副大臣として入閣。タイミングは重要で、1か月後の11月17日に黄色いベスト運動が勃発した。

カスタネール・ニュネスのタンデム：表向きはカスタネールが大臣、ニュネスが副官。しかし実際には、リベラシオンとル・モンドによれば「ボヴォーで実際に指揮を執っているのは彼[ニュネス]だ」。

ゴム弾の擁護（2019年3月、BFMTV）：「LBDなしには、都市型ゲリラ状況での逮捕は不可能だ」。2019年3月には過度に寛容とされたドゥルプーシュ知事の解任に加担し、ラールマン体制下での最も厳しい弾圧段階を開いた。`,
        },
        {
          titre: "ENAの三角形：ニュネス–ボンパール–コーベル",
          contenu: `構造的発見：ニュネスとアレクサンドル・ボンパールはENAのシラノ・ド・ベルジュラック期の同期生（1997年～1999年）。1999年4月19日の政令（Légifrance、JORFTEXT000000211140）がこれを確認する。ボンパールは4位で卒業し財務監察院を選択；ニュネスは内務省へ。

アレクサンドル・ボンパールの妻シャルロット・コーベル（法曹、Sciences Po）は2017年5月にマティニョンのエドゥアール・フィリップ内閣に司法顧問として任命された。3年間（2017年～2020年）在職し、司法部門長となった。ニュネスはENA同期の妻と同じ行政府で働いたことになる。

シャルロット・コーベルはオリゾン党の党員。マティニョン後：PJJ局長（2020年～2022年）、ボルネ政府の児童担当国務長官（2022年～2024年）、パリ副検事（2025年8月）。夫アレクサンドル・ボンパールはカルフール（2024年売上高860億ユーロ、パリ2024オリンピック公式パートナー）を率いる。`,
        },
        {
          titre: "MAS分析 — 国家執行エージェント",
          contenu: `マルチエージェントシステムの観点から、ローラン・ニュネスは「国家執行者」型の専門化エージェントである。その忠誠はマクロンに直接向けられ — マクロンが彼を各要職（DGSI、CNRLT、警察本部、省）に個人的に任命する — フィリップではない。

アタリやマンク（促進者エージェント）とは異なり、ニュネスは安全保障の状態空間においてセントロイドの決定を実装する。彼は有機的忠誠なしにフィリップの実務的部下（2018年～2020年）であった。

両者の絆は共同責任：黄色いベスト運動の弾圧への問いかけは、フィリップ（政治的責任）とニュネス（実務的執行）を同時に巻き込む。`,
        },
        {
          titre: "論争 — BRAV-M、ナエル・メルズーク、サント＝ソリーヌ",
          contenu: `BRAV-Mと年金改革（2023年）：彼の国務長官任期中（2019年）に創設されたBRAV-M旅団は、2023年の年金改革抗議中に7件の重傷に関与した。ニュネスは彼らを擁護し、部署の反対を押し切って弁護士費用を支払った。

ナエル・メルズーク事件（2023年～2024年）：2024年2月、ニュネスはナエルを殺害した警察官の希望する警察署への異動に「特に好意的な」意見を発した — 警察の不処罰の制度化として批判された。

サント＝ソリーヌ（2023年～2025年）：警察映像が違法な「低弾道」手榴弾発射を明らかにした。ニュネスは「警察による暴力」という言葉を拒否したが、行政調査を要求した。

対照的に、パリ2024オリンピックの管理は主要な治安成功として満場一致で認められ、彼にレジオン・ドヌール勲章コマンドゥール位をもたらした。`,
        },
      ],
    },
    ru: {
      titre: "Лоран Нюнез — Вооружённое крыло макронистских репрессий",
      sousTitre: "DGSI • «Жёлтые жилеты» • BRAV-M • Олимпиада 2024 • Правительство Лекорню II",
      resume:
        "Лоран Нюнез был оперативным исполнителем репрессий против «жёлтых жилетов» (2 500 пострадавших) в правительстве Филиппа II. Директор DGSI, госсекретарь МВД, координатор разведки в Елисейском дворце, префект парижской полиции, затем министр внутренних дел (правительство Лекорню II). Ключевое открытие: треугольник ЭНА Нюнез–Бомпар–Кобель связывает его выпуск (Сирано де Бержерак, 1997-99) с кабинетом Филиппа и партией Horizons.",
      parties: [
        {
          titre: "Префектурная карьера — становление аппарата безопасности",
          contenu: `Лоран Нюнез-Белда (родился 19 февраля 1964 года в Бурже) происходит из семьи пье-нуаров испанского происхождения, репатриированных в 1962 году. После магистратуры по управлению местными органами власти он стал налоговым инспектором в Берси, а затем поступил в ЭНА по внутреннему конкурсу в 1997 году (выпуск «Сирано де Бержерак», 1997-1999).

Каждая должность ставила его в центр крупных кризисов: руководитель кабинета префекта парижской полиции (теракты «Шарли Эбдо»/Hyper Cacher, 2015), префект полиции Буш-дю-Рон — где он применял силы правопорядка и водомёты против забастовщиков в Фос-сюр-Мер в 2016 году.

22 июня 2017 года, через пять недель после назначения Филиппа в Матиньон, Макрон назначил Нюнеза директором DGSI. Одновременность с формированием правительства Филиппа не случайна: Макрон реорганизовал весь аппарат безопасности в первые недели своего мандата.`,
        },
        {
          titre: "Репрессии «жёлтых жилетов» — вооружённое крыло Филиппа",
          contenu: `16 октября 2018 года Нюнез вошёл в правительство Филиппа II в качестве государственного секретаря МВД при министре Кристофе Кастанере. Выбор момента был критическим: движение «жёлтых жилетов» вспыхнуло месяц спустя, 17 ноября 2018 года.

Тандем Кастанер-Нюнез: официально Кастанер был министром, а Нюнез — его заместителем. В действительности, по данным Libération и Le Monde, «именно он [Нюнез] реально держит бразды» в Бово.

Защита резиновых пуль (март 2019, BFMTV): «Без LBD мы не в состоянии задерживать людей в условиях городской герильи». Он участвовал в отстранении префекта Делпюш в марте 2019 года, что открыло самую жёсткую фазу репрессий при Лальмане.`,
        },
        {
          titre: "Треугольник ЭНА: Нюнез–Бомпар–Кобель",
          contenu: `Структурное открытие: Нюнез и Александр Бомпар были однокурсниками выпуска «Сирано де Бержерак» ЭНА (1997-1999). Указ от 19 апреля 1999 года (Légifrance, JORFTEXT000000211140) это подтверждает. Бомпар закончил четвёртым и выбрал Инспекцию финансов; Нюнез поступил в МВД.

Жена Александра Бомпара, Шарлотт Кобель (судья, Sciences Po), была назначена советником по юстиции в кабинет Эдуара Филиппа в Матиньон в мае 2017 года. Она проработала там три года (2017-2020), став начальником отдела юстиции. Таким образом, Нюнез служил в том же исполнительном органе, что и жена его однокурсника по ЭНА.

Шарлотт Кобель является членом партии Horizons. После Матиньона: директор PJJ (2020-2022), государственный секретарь по правам детей при Борн (2022-2024), заместитель прокурора Парижа (август 2025). Её муж Александр Бомпар возглавляет Carrefour (оборот 2024: 86 млрд €), официальный партнёр Олимпийских игр в Париже 2024.

Этот треугольник напрямую связывает выпуск ЭНА Нюнеза с ядром кабинета Филиппа и партией Horizons.`,
        },
        {
          titre: "Анализ МАС — Государственный исполнительный агент",
          contenu: `С точки зрения мультиагентных систем, Лоран Нюнез является специализированным агентом типа «государственный исполнитель». Его лояльность направлена непосредственно Макрону — который лично назначает его на каждую ключевую должность (DGSI, CNRLT, префектура полиции, министерство) — а не Филиппу.

В отличие от Аттали или Манка (агенты-посредники), Нюнез реализует решения центроидов в пространстве состояний безопасности. Он был оперативным подчинённым Филиппа (2018-2020) без органической лояльности.

Их связь — это совместная ответственность: любое оспаривание репрессий «жёлтых жилетов» одновременно затрагивает Филиппа (политическая ответственность) и Нюнеза (оперативное исполнение).`,
        },
        {
          titre: "Противоречия — BRAV-M, Наэль Мерзук, Сент-Солин",
          contenu: `BRAV-M и пенсионная реформа (2023): бригада BRAV-M, созданная при его государственном секретариате (2019), была причастна к семи тяжёлым ранениям во время протестов против пенсионной реформы 2023 года. Нюнез защищал их и оплатил их судебные издержки вопреки мнению своих служб.

Дело Наэля Мерзука (2023-2024): в феврале 2024 года Нюнез дал «особо благоприятное» заключение о переводе офицера, убившего Наэля, в отделение полиции по его выбору — решение, осуждённое как институционализация полицейской безнаказанности.

Сент-Солин (2023-2025): полицейские съёмки выявили незаконные «настильные выстрелы» гранатами. Нюнез отверг термин «полицейское насилие», но потребовал административного расследования.

Напротив, его управление Олимпийскими играми в Париже 2024 было единогласно признано крупным успехом в сфере безопасности, принеся ему звание командора ордена Почётного легиона.`,
        },
      ],
    },
    zh: {
      titre: "洛朗·尼涅斯 — 马克龙主义镇压的武装翼",
      sousTitre: "DGSI • 黄背心运动 • BRAV-M • 巴黎2024 • 勒科尔尼第二届政府",
      resume:
        "洛朗·尼涅斯是菲利普第二届政府中黄背心运动镇压（2500人受伤）的行动执行者。历任DGSI局长、内政部国务秘书、爱丽舍宫情报协调员、巴黎警察局长，后任内政部长（勒科尔尼第二届政府）。核心发现：ENA三角形尼涅斯–邦帕尔–科贝尔将其毕业届（贝尔热拉克的西哈诺届，1997-99年）与菲利普内阁和地平线党相连接。",
      parties: [
        {
          titre: "地方长官生涯 — 安全机构的崛起",
          contenu: `洛朗·尼涅斯-贝尔达（1964年2月19日生于布尔日）出身于1962年回国的西班牙裔黑脚族家庭。获得地方政府管理高等学位后，在贝尔西担任税务督察，1997年通过内部竞争考试进入ENA（贝尔热拉克的西哈诺届，1997-1999年）。

每个职位都将他置于重大危机的中心：巴黎警察总局局长办公室主任（查理周刊/Hyper Cacher袭击，2015年），布什-杜-罗讷警察长官——2016年在福斯-苏尔-梅尔对罢工工人部署防暴警察和水炮。

2017年6月22日，菲利普入驻马提尼翁五周后，马克龙任命尼涅斯为DGSI局长。与菲利普政府成立的同步性并非偶然：马克龙在就任最初几周就重组了整个安全机构。`,
        },
        {
          titre: "镇压黄背心运动 — 菲利普的武装翼",
          contenu: `2018年10月16日，尼涅斯以克里斯托夫·卡斯塔内内政部长的国务秘书身份加入菲利普第二届政府。时机至关重要：黄背心运动于一个月后的11月17日爆发。

卡斯塔内-尼涅斯组合：表面上卡斯塔内是部长，尼涅斯是副手。但实际上，据《解放报》和《世界报》报道，"是他[尼涅斯]真正掌控"博沃内政部。

为橡皮子弹辩护（2019年3月，BFMTV）："没有LBD，我们无法在城市游击战场景中逮捕人员。"他参与了2019年3月德尔普奇警察长官的撤职，开启了拉勒曼体制下最为严酷的镇压阶段。`,
        },
        {
          titre: "ENA三角形：尼涅斯–邦帕尔–科贝尔",
          contenu: `结构性发现：尼涅斯与亚历山大·邦帕尔是ENA贝尔热拉克的西哈诺届同学（1997-1999年）。1999年4月19日的法令（法国官方公报，JORFTEXT000000211140）证实了这一点。邦帕尔以第4名毕业并选择财务督察总署；尼涅斯进入内政部。

亚历山大·邦帕尔的妻子夏洛特·科贝尔（法官，政治学院）于2017年5月被任命为马提尼翁爱德华·菲利普内阁的司法顾问。她任职三年（2017-2020年），成为司法部门主任。因此尼涅斯与他的ENA同学之妻在同一行政机构任职。

夏洛特·科贝尔是地平线党成员。马提尼翁之后：PJJ局长（2020-2022年），博尔内政府儿童国务秘书（2022-2024年），巴黎副检察官（2025年8月）。其夫亚历山大·邦帕尔领导家乐福（2024年营业额860亿欧元），巴黎2024奥运会官方合作伙伴。

这个三角形将尼涅斯的ENA届次直接与菲利普内阁核心和地平线党相连接。`,
        },
        {
          titre: "MAS分析 — 国家执行代理人",
          contenu: `从多智能体系统角度来看，洛朗·尼涅斯是"国家执行者"类型的专业化代理人。他的忠诚直接指向马克龙——马克龙亲自将其任命到每个关键职位（DGSI、CNRLT、警察总局、部级）——而非菲利普。

与阿塔利或明克（促进者代理人）不同，尼涅斯在安全状态空间中实施中心节点的决策。他是菲利普（2018-2020年）的行动下属，没有有机忠诚。

他们的联系是共同责任：对黄背心运动镇压的任何质疑同时涉及菲利普（政治责任）和尼涅斯（行动执行）。在勒科尔尼第二届政府中，他与地平线党成员的共存为与菲利普政治圈的间接联系增添了新维度。`,
        },
        {
          titre: "争议 — BRAV-M、纳埃尔·梅尔祖克、圣索利纳",
          contenu: `BRAV-M与养老金改革（2023年）：在其国务秘书任期内（2019年）创建的BRAV-M旅在2023年养老金改革抗议活动中造成7名重伤者。尼涅斯为他们辩护，并不顾下属建议为其支付律师费。

纳埃尔·梅尔祖克案（2023-2024年）：2024年2月，尼涅斯对杀死纳埃尔的警察调至其所选警察局发表"特别有利"意见——此举被谴责为将警察不受处罚制度化。

圣索利纳（2023-2025年）：警察录像揭示了非法的"平射"手榴弹投掷。尼涅斯拒绝使用"警察暴力"一词，但要求进行行政调查。

相比之下，他对巴黎2024奥运会的管理被一致认可为重大安全成功，为他赢得荣誉军团勋章司令级别。`,
        },
      ],
    },
  },

  "leakid-forward-global": {
    fr: {
      titre: "LeakID & Forward Global — Intelligence économique, désinformation et réseaux macronistes",
      sousTitre: "De iStrat à Bridgepoint : l'ascension d'un groupe d'influence dans la sphère du pouvoir",
      resume:
        "Forward Global (ex-Avisa Partners, ex-iStrat) est un groupe d'intelligence économique valorisé à plus de 200 M€ en 2024, organisateur du FIC et client du CAC 40. Sa connexion avec la sphère macroniste est documentée : Olivia Grégoire (secrétaire d'État 2021-2024) y était directrice associée (2013-2014) ; Sylvain Fort (rédacteur des discours de Macron 2017-2019) en était associé (2020-2022). L'enquête révèle aussi un « nettoyage de réputation » après les scandales de désinformation 2022-23 (faux articles dans des médias nationaux, manipulation Wikipédia, clients autoritaires, tensions DGSI/DGSE), et la dissolution juridique de l'entité LeakID au 1er janvier 2025.",
      parties: [
        {
          titre: "Forward Global (ex-Avisa Partners) : du nettoyage de réputation à la valorisation 200 M€",
          contenu: "Forward Global est fondé en 2010 sous le nom d'iStrat par Matthieu Creux, 23 ans, Sciences Po Paris, ancien collaborateur parlementaire de Valérie Pécresse. Le groupe agrège cybersécurité offensive (Lexfo, 80 ingénieurs, 2 accréditations ANSSI), intelligence économique (CEIS), anti-piratage (LeakID, Rivendell — 800 M d'URLs signalées à Google), investigation (Uncovery) et communication stratégique. En 2022-2023, Avisa Partners est touché par des scandales documentés par Mediapart et Politico : journalistes payés pour écrire de faux contenus dans les espaces participatifs de Mediapart, L'Express, HuffPost, AgoraVox, Les Échos ; manipulations clandestines de Wikipédia ; conseils à des régimes autoritaires (Égypte, Turquie, Kazakhstan, Qatar, RDC, Tchad) ; accusations des ministères de l'Intérieur et des Armées d'opérations contraires aux intérêts français. En juin 2023, le groupe se rebaptise Forward Global et cède les activités d'influence digitale à Arnaud Dassier pour 5 M€. En novembre 2024, un LBO conduit par Bridgepoint Development Capital valorise Forward Global à plus de 200 M€.",
        },
        {
          titre: "Les connexions macronistes : Grégoire et Fort",
          contenu: "Olivia Grégoire (secrétaire d'État déléguée à la Consommation 2021-2024, Renaissance) était directrice associée d'iStrat de 2013 à 2014 — la période où Macron entre au gouvernement Hollande. Sylvain Fort (normalien, agrégé de lettres, directeur de la communication de l'Élysée puis rédacteur des discours de Macron 2017-2019) est associé d'Avisa Partners de 2020 à 2022 — juste avant les scandales. Ces deux connexions placent Forward Global à l'intersection du pouvoir exécutif macroniste et d'une industrie de l'influence qui opère dans une zone grise entre intelligence légitime et désinformation documentée. L'enquête ne démontre pas d'implication de Grégoire ou Fort dans les pratiques controversées — ils sont partis avant les scandales — mais leur présence dessine l'écosystème de recrutement du groupe.",
        },
        {
          titre: "LeakID SAS : dissolution et héritage technologique",
          contenu: "LeakID a été fondée en 2007 par Hervé Lemaire (ex-Head of Digital chez Virgin/EMI). Pionnière française du Notice & Takedown, elle a créé Rivendell en 2013, devenant le premier émetteur mondial de demandes DMCA à Google — plus de 800 millions d'URLs signalées. Acquise par Avisa Partners en juin 2022, LeakID SAS est dissoute sans liquidation le 1er janvier 2025, par décision de l'associé unique Forward Global. Une controverse technique : la stratégie de notification préemptive de Rivendell (signaler des URLs avant indexation) gonfle artificiellement les statistiques — TorrentFreak estime que plus de 50 % des URLs signalées n'existaient pas dans l'index Google au moment du signalement.",
        },
      ],
    },
    en: {
      titre: "LeakID & Forward Global — Economic Intelligence, Disinformation and Macronist Networks",
      sousTitre: "From iStrat to Bridgepoint: the rise of an influence group in the sphere of power",
      resume:
        "Forward Global (ex-Avisa Partners, ex-iStrat) is an economic intelligence group valued at over €200M in 2024, organiser of the FIC and client of the CAC 40. Its connection with the Macronist sphere is documented: Olivia Grégoire (Secretary of State 2021-2024) was an associate director there (2013-2014); Sylvain Fort (Macron's speechwriter 2017-2019) was an associate (2020-2022). The investigation also reveals a 'reputation laundering' operation following the 2022-23 disinformation scandals (fake articles in national media, Wikipedia manipulation, authoritarian clients, DGSI/DGSE tensions), and the legal dissolution of the LeakID entity on 1 January 2025.",
      parties: [
        {
          titre: "Forward Global (ex-Avisa Partners): from reputation laundering to €200M valuation",
          contenu: "Forward Global was founded in 2010 as iStrat by Matthieu Creux, 23, Sciences Po Paris, former parliamentary aide to Valérie Pécresse. The group brings together offensive cybersecurity (Lexfo, 80 engineers, 2 ANSSI accreditations), economic intelligence (CEIS), anti-piracy (LeakID, Rivendell — 800M URLs reported to Google), investigation (Uncovery) and strategic communications. In 2022-2023, Avisa Partners was hit by scandals documented by Mediapart and Politico: journalists paid to write fake content in participatory spaces of national media; clandestine Wikipedia manipulation; advice to authoritarian regimes (Egypt, Turkey, Kazakhstan, Qatar, DRC, Chad); accusations from the Interior and Armed Forces ministries of operations contrary to French interests. In June 2023, the group rebranded as Forward Global and sold the digital influence activities to Arnaud Dassier for €5M. In November 2024, a LBO led by Bridgepoint Development Capital valued Forward Global at over €200M.",
        },
        {
          titre: "The Macronist connections: Grégoire and Fort",
          contenu: "Olivia Grégoire (Secretary of State for Consumer Affairs 2021-2024, Renaissance) was associate director at iStrat from 2013 to 2014 — the period when Macron joined the Hollande government. Sylvain Fort (normalien, agrégé in literature, director of Élysée communications then Macron's chief speechwriter 2017-2019) was an associate at Avisa Partners from 2020 to 2022 — just before the scandals. These two connections place Forward Global at the intersection of Macronist executive power and an influence industry operating in a grey zone between legitimate intelligence and documented disinformation. The investigation does not demonstrate Grégoire or Fort's involvement in the controversial practices — they left before the scandals — but their presence maps the group's recruitment ecosystem.",
        },
        {
          titre: "LeakID SAS: dissolution and technological legacy",
          contenu: "LeakID was founded in 2007 by Hervé Lemaire (ex-Head of Digital at Virgin/EMI). A French pioneer in Notice & Takedown, it created Rivendell in 2013, becoming the world's largest DMCA notice sender to Google — over 800 million URLs reported. Acquired by Avisa Partners in June 2022, LeakID SAS was dissolved without liquidation on 1 January 2025, by decision of its sole shareholder Forward Global. A technical controversy: Rivendell's pre-emptive notification strategy (reporting URLs before indexation) artificially inflates statistics — TorrentFreak estimates over 50% of reported URLs did not exist in Google's index at the time of reporting.",
        },
      ],
    },
    de: {
      titre: "LeakID & Forward Global — Wirtschaftsgeheimdienst, Desinformation und Macronisten-Netzwerke",
      sousTitre: "Von iStrat zu Bridgepoint: der Aufstieg einer Einflussfirma in die Machtsphäre",
      resume:
        "Forward Global (ex-Avisa Partners, ex-iStrat) ist eine Wirtschaftsgeheimdienstgruppe, die 2024 mit über 200 Mio. € bewertet wurde, Organisator des FIC und Kunde des CAC 40. Die Verbindungen zur Macronisten-Sphäre sind dokumentiert: Olivia Grégoire (Staatssekretärin 2021-2024) war dort von 2013 bis 2014 Direktorin; Sylvain Fort (Macrons Redenschreiber 2017-2019) war von 2020 bis 2022 Partner. Die Untersuchung enthüllt auch eine 'Reputationswäsche' nach den Desinformationsskandalen 2022-23 und die juristische Auflösung der Einheit LeakID am 1. Januar 2025.",
      parties: [
        {
          titre: "Forward Global (ex-Avisa Partners): von der Reputationswäsche zur 200-Mio.-€-Bewertung",
          contenu: "Forward Global wurde 2010 als iStrat von Matthieu Creux, 23 Jahre alt, Sciences Po Paris, ehemaliger Parlamentsmitarbeiter von Valérie Pécresse, gegründet. Die Gruppe vereint offensive Cybersicherheit (Lexfo), Wirtschaftsgeheimdienst (CEIS), Urheberrechtsschutz (LeakID, Rivendell — 800 Mio. URLs an Google gemeldet), Ermittlungen (Uncovery) und strategische Kommunikation. In 2022-2023 wurde Avisa Partners von Desinformationsskandalen erschüttert: bezahlte Journalisten schrieben Fake-Inhalte, Wikipedia-Manipulationen, Beratung autoritärer Regime, Vorwürfe der Ministerien. Im Juni 2023 umbenennung zu Forward Global, Verkauf der Einflussaktivitäten an Dassier für 5 Mio. €. Im November 2024 LBO mit Bridgepoint, Bewertung über 200 Mio. €.",
        },
        {
          titre: "Die Macronisten-Verbindungen: Grégoire und Fort",
          contenu: "Olivia Grégoire (Staatssekretärin 2021-2024, Renaissance) war von 2013 bis 2014 Direktorin bei iStrat. Sylvain Fort (Normalien, Macrons Chefredner 2017-2019) war von 2020 bis 2022 Partner bei Avisa Partners. Diese beiden Verbindungen positionieren Forward Global an der Schnittstelle zwischen Macronistischer Exekutivmacht und einer Einflussbranche, die in einer Grauzone zwischen legitimer Nachrichtenbeschaffung und dokumentierter Desinformation operiert.",
        },
        {
          titre: "LeakID SAS: Auflösung und technologisches Erbe",
          contenu: "LeakID wurde 2007 von Hervé Lemaire gegründet. Französischer Pionier im Notice & Takedown-Bereich, schuf Rivendell 2013 und wurde zum weltgrößten DMCA-Absender an Google — über 800 Millionen gemeldete URLs. Nach der Übernahme durch Avisa Partners 2022 wurde LeakID SAS am 1. Januar 2025 ohne Liquidation aufgelöst. Technische Kontroverse: Rivendells präventive Meldestrategien blasen Statistiken künstlich auf — laut TorrentFreak existierten über 50 % der gemeldeten URLs nicht im Google-Index.",
        },
      ],
    },
    es: {
      titre: "LeakID & Forward Global — Inteligencia económica, desinformación y redes macronistas",
      sousTitre: "De iStrat a Bridgepoint: el ascenso de un grupo de influencia en la esfera del poder",
      resume:
        "Forward Global (ex-Avisa Partners, ex-iStrat) es un grupo de inteligencia económica valorado en más de 200 M€ en 2024, organizador del FIC y cliente del CAC 40. Su conexión con la esfera macronista está documentada: Olivia Grégoire (secretaria de Estado 2021-2024) fue directora asociada (2013-2014); Sylvain Fort (redactor de discursos de Macron 2017-2019) fue socio (2020-2022). La investigación también revela un 'lavado de reputación' tras los escándalos de desinformación 2022-23 y la disolución jurídica de LeakID el 1 de enero de 2025.",
      parties: [
        {
          titre: "Forward Global (ex-Avisa Partners): del lavado de reputación a la valoración de 200 M€",
          contenu: "Forward Global fue fundada en 2010 como iStrat por Matthieu Creux, Sciences Po París, ex-colaborador parlamentario de Valérie Pécresse. El grupo reúne ciberseguridad ofensiva (Lexfo), inteligencia económica (CEIS), antipiratería (LeakID, Rivendell — 800 M de URLs notificadas a Google), investigación (Uncovery) y comunicación estratégica. En 2022-2023, escándalos de desinformación: periodistas pagados para escribir contenidos falsos, manipulación de Wikipedia, asesoramiento a regímenes autoritarios, acusaciones ministeriales. En junio 2023, rebautizada como Forward Global, venta de actividades de influencia a Dassier por 5 M€. En noviembre 2024, LBO con Bridgepoint, valoración superior a 200 M€.",
        },
        {
          titre: "Las conexiones macronistas: Grégoire y Fort",
          contenu: "Olivia Grégoire (secretaria de Estado 2021-2024, Renaissance) fue directora asociada de iStrat de 2013 a 2014. Sylvain Fort (normalien, redactor jefe de discursos de Macron 2017-2019) fue socio de Avisa Partners de 2020 a 2022. Estas dos conexiones sitúan a Forward Global en la intersección del poder ejecutivo macronista y una industria de la influencia que opera en una zona gris entre la inteligencia legítima y la desinformación documentada.",
        },
        {
          titre: "LeakID SAS: disolución y legado tecnológico",
          contenu: "LeakID fue fundada en 2007 por Hervé Lemaire. Pionera francesa del Notice & Takedown, creó Rivendell en 2013, convirtiéndose en el mayor emisor mundial de solicitudes DMCA a Google — más de 800 millones de URLs notificadas. Tras la adquisición por Avisa Partners en 2022, LeakID SAS fue disuelta sin liquidación el 1 de enero de 2025. Controversia técnica: la estrategia de notificación preemptiva de Rivendell infla artificialmente las estadísticas.",
        },
      ],
    },
    ru: {
      titre: "LeakID & Forward Global — Экономическая разведка, дезинформация и макронистские сети",
      sousTitre: "От iStrat к Bridgepoint: восхождение группы влияния в сферу власти",
      resume:
        "Forward Global (бывший Avisa Partners, бывший iStrat) — группа экономической разведки, оценённая в более чем 200 млн € в 2024 году, организатор FIC и клиент CAC 40. Её связь с макронистской сферой задокументирована: Оливия Грегуар (государственный секретарь 2021-2024) была там директором (2013-2014); Сильвен Фор (спичрайтер Макрона 2017-2019) был партнёром (2020-2022). Расследование также выявляет 'отмывание репутации' после скандалов с дезинформацией 2022-23 и юридическую ликвидацию LeakID 1 января 2025 года.",
      parties: [
        {
          titre: "Forward Global (бывший Avisa Partners): от отмывания репутации к оценке 200 млн €",
          contenu: "Forward Global основана в 2010 году как iStrat Matthieu Creux, Sciences Po Paris, бывшим парламентским помощником Валери Пекрес. Группа объединяет наступательную кибербезопасность (Lexfo), экономическую разведку (CEIS), антипиратство (LeakID, Rivendell — 800 млн URL в Google), расследования (Uncovery) и стратегические коммуникации. В 2022-2023 годах скандалы с дезинформацией: оплачиваемые журналисты с фейками, манипуляции в Википедии, консультирование авторитарных режимов, обвинения министерств. В июне 2023 года переименована в Forward Global, продажа активностей Dassier за 5 млн €. В ноябре 2024 года LBO с Bridgepoint, оценка свыше 200 млн €.",
        },
        {
          titre: "Макронистские связи: Грегуар и Фор",
          contenu: "Оливия Грегуар (государственный секретарь 2021-2024, Renaissance) была директором iStrat с 2013 по 2014 год. Сильвен Фор (нормалист, главный спичрайтер Макрона 2017-2019) был партнёром Avisa Partners с 2020 по 2022 год. Эти две связи помещают Forward Global на пересечение макронистской исполнительной власти и индустрии влияния.",
        },
        {
          titre: "LeakID SAS: ликвидация и технологическое наследие",
          contenu: "LeakID основана в 2007 году Эрве Лемером. Французский пионер Notice & Takedown, создала Rivendell в 2013 году, став крупнейшим в мире отправителем требований DMCA в Google — свыше 800 млн URL. После поглощения Avisa Partners в 2022 году LeakID SAS была ликвидирована без банкротства 1 января 2025 года. Техническая полемика: стратегия Rivendell по превентивным уведомлениям искусственно раздувает статистику.",
        },
      ],
    },
    ja: {
      titre: "LeakID & Forward Global — 経済情報、偽情報、マクロン派ネットワーク",
      sousTitre: "iStratからBridgepointへ：権力の圏域における影響力グループの台頭",
      resume:
        "Forward Global（旧Avisa Partners、旧iStrat）は2024年に2億ユーロ超と評価された経済情報グループで、FICの主催者でありCAC40の顧客。マクロン派との繋がりが記録されている：Olivia Grégoire（国務長官2021-2024）が取締役（2013-2014）を務め；Sylvain Fort（マクロン演説ライター2017-2019）がパートナー（2020-2022）だった。調査は2022-23年の偽情報スキャンダル後の「評判洗浄」と2025年1月1日のLeakID解散も明らかにする。",
      parties: [
        {
          titre: "Forward Global（旧Avisa Partners）：評判洗浄から2億ユーロ評価へ",
          contenu: "Forward Globalは2010年にMatthieu Creux（Sciences Po、元Pécresse議員秘書）によってiStratとして設立。攻撃的サイバーセキュリティ（Lexfo）、経済情報（CEIS）、著作権保護（LeakID、Rivendell — 8億件URL）、調査（Uncovery）、戦略的コミュニケーションを統合。2022-23年に偽情報スキャンダル：偽記事、Wikipedia操作、権威主義政権への助言、省庁からの告発。2023年6月にForward Globalに改称、影響力活動をDassierに500万ユーロで売却。2024年11月にBridgepointのLBOで2億ユーロ超に評価。",
        },
        {
          titre: "マクロン派との繋がり：GregoireとFort",
          contenu: "Olivia Grégoire（国務長官2021-2024、Renaissance）は2013-2014年にiStrat取締役を務めた。Sylvain Fort（高師卒、マクロン首席スピーチライター2017-2019）は2020-2022年にAvisa Partnersパートナーを務めた。この2つの繋がりはForward Globalをマクロン派行政権力と影響力産業の交差点に位置付ける。",
        },
        {
          titre: "LeakID SAS：解散と技術的遺産",
          contenu: "LeakIDは2007年にHervé Lemaire（元Virgin/EMI）により設立。フランスのNotice & Takedown先駆者、2013年にRivendellを創設し世界最大のGoogleへのDMCA通報者となった（8億件超）。2022年のAvisa Partners買収後、LeakID SASは2025年1月1日に清算なし解散。技術的論争：RivendellのURL先行通報戦略が統計を水増し、TorrentFreakによると通報URLの50%超がGoogle索引に存在しなかった。",
        },
      ],
    },
    it: {
      titre: "LeakID & Forward Global — Intelligence economica, disinformazione e reti macroniste",
      sousTitre: "Da iStrat a Bridgepoint: l'ascesa di un gruppo di influenza nella sfera del potere",
      resume:
        "Forward Global (ex-Avisa Partners, ex-iStrat) è un gruppo di intelligence economica valutato a oltre 200 milioni di euro nel 2024, organizzatore del FIC e cliente del CAC 40. I suoi legami con la sfera macronista sono documentati: Olivia Grégoire (Segretaria di Stato 2021-2024) vi era direttrice associata (2013-2014); Sylvain Fort (speechwriter di Macron 2017-2019) ne era socio (2020-2022). L'indagine rivela anche una 'pulizia della reputazione' dopo gli scandali di disinformazione 2022-23 e la dissoluzione giuridica di LeakID il 1° gennaio 2025.",
      parties: [
        {
          titre: "Forward Global (ex-Avisa Partners): dalla pulizia della reputazione alla valutazione di 200 milioni di euro",
          contenu: "Forward Global è stata fondata nel 2010 come iStrat da Matthieu Creux, Sciences Po Parigi, ex-collaboratore parlamentare di Valérie Pécresse. Il gruppo riunisce cybersicurezza offensiva (Lexfo), intelligence economica (CEIS), antipirateria (LeakID, Rivendell — 800 milioni di URL segnalate a Google), investigazioni (Uncovery) e comunicazione strategica. Nel 2022-2023, scandali di disinformazione: giornalisti pagati per scrivere contenuti falsi, manipolazione di Wikipedia, consulenze a regimi autoritari, accuse ministeriali. Nel giugno 2023, ribattezzata Forward Global, vendita delle attività di influenza a Dassier per 5 milioni di euro. Nel novembre 2024, LBO con Bridgepoint, valorazione superiore a 200 milioni di euro.",
        },
        {
          titre: "Le connessioni macroniste: Grégoire e Fort",
          contenu: "Olivia Grégoire (Segretaria di Stato 2021-2024, Renaissance) era direttrice associata di iStrat dal 2013 al 2014. Sylvain Fort (normalien, principale speechwriter di Macron 2017-2019) era socio di Avisa Partners dal 2020 al 2022. Queste due connessioni collocano Forward Global all'intersezione del potere esecutivo macronista e di un'industria dell'influenza che opera in una zona grigia.",
        },
        {
          titre: "LeakID SAS: dissoluzione e eredità tecnologica",
          contenu: "LeakID è stata fondata nel 2007 da Hervé Lemaire. Pioniera francese nel Notice & Takedown, ha creato Rivendell nel 2013, diventando il più grande mittente mondiale di richieste DMCA a Google — oltre 800 milioni di URL segnalate. Dopo l'acquisizione da Avisa Partners nel 2022, LeakID SAS è stata sciolta senza liquidazione il 1° gennaio 2025. Controversia tecnica: la strategia di notifica preventiva di Rivendell gonfia artificialmente le statistiche.",
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
