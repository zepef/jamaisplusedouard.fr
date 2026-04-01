// Translations for conflict-of-interest chains
// Each maillon array index corresponds to the same index in the source

export type ConflitTranslation = {
  titre: string;
  resume: string;
  domaine: string;
  consequence: string;
  maillons: { role: string; lienSuivant: string }[];
};

export const conflitsTranslations: Record<string, Record<string, ConflitTranslation>> = {
  en: {
    "philippe-macron-kohler-cmacgm": {
      titre: "Philippe → Macron → Kohler → CMA CGM",
      resume:
        "The Secretary-General of the Élysée, Alexis Kohler, has family ties to the Aponte-Saadé shipping dynasty. Philippe, mayor of CMA CGM's top French port, was appointed by Macron whose right-hand man is compromised with the same shipping company.",
      domaine: "Maritime transport / Port of Le Havre",
      consequence:
        "The mayor of France's largest port is appointed Prime Minister by a president whose right-hand man is under formal investigation for his ties to the maritime industry. Port, customs, and urban planning decisions for Le Havre are made within this ecosystem. CMA CGM (Saadé) subsequently acquired BFM TV, becoming owner of the country's top rolling-news channel — a complete power-port-media loop.",
      maillons: [
        {
          role: "Mayor of Le Havre — CMA CGM's top French port",
          lienSuivant:
            "Appointed Prime Minister by Macron in 2017. Both are Young Leaders (2011 and 2012).",
        },
        {
          role: "President of the Republic — Young Leader 2012",
          lienSuivant:
            "Appoints Alexis Kohler as Secretary-General of the Élysée, the most powerful position in the presidency.",
        },
        {
          role: "Secretary-General of the Élysée — placed under formal investigation for conflicts of interest",
          lienSuivant:
            "Family ties to the Aponte family (MSC). Oversaw decisions involving MSC and the maritime sector from Bercy then the Élysée.",
        },
        {
          role: "The two largest shipping companies operating at Le Havre",
          lienSuivant: "",
        },
      ],
    },

    "philippe-atos-80kmh-radars": {
      titre: "Philippe → 80 km/h → Atos → automated speed cameras",
      resume:
        "Philippe imposed the 80 km/h speed limit against Macron's advice, mechanically generating a surge in traffic offences. He then joined the board of Atos, the company that processes automated speed-camera data.",
      domaine: "Road safety / Digital data",
      consequence:
        "The Prime Minister who imposed a measure generating more offences joined the board of the company processing those offences two years later (~€70,000/year). The Philippe-Atos relationship dates back to 2006, well before Matignon. The temporal sequence — public decision then private benefit — is a textbook case of deferred conflict of interest.",
      maillons: [
        {
          role: "Prime Minister — personally championed the 80 km/h limit",
          lienSuivant:
            "Imposed the 80 km/h measure on 1 July 2018, against Macron's wishes and public opinion.",
        },
        {
          role: "The most unpopular measure of Philippe's tenure",
          lienSuivant:
            "The speed reduction mechanically generates more offences, hence more data to be processed by automated speed cameras.",
        },
        {
          role: "Automated enforcement system — an expanding market",
          lienSuivant:
            "Processing of road-offence data is handled by Atos, under contracts with the State.",
        },
        {
          role: "IT group — Philippe has been a board member since 2020",
          lienSuivant: "",
        },
      ],
    },

    "philippe-areva-recapitalisation": {
      titre: "Philippe → Areva (lobbying) → Matignon → €5 bn recapitalisation",
      resume:
        "Philippe was Areva's lobbyist from 2007 to 2010. After becoming Prime Minister in 2017, he oversaw the recapitalisation of Areva/Orano by the State to the tune of €5 billion.",
      domaine: "Nuclear industry / Public funds",
      consequence:
        "The former Areva lobbyist rescued his former employer with public money upon taking power. The €3.6 billion loss on UraMin occurred in 2007, the very year Philippe joined Areva as Director of Public Affairs. The Prime Minister who restructured France's nuclear industry is the former PR chief of the group in difficulty.",
      maillons: [
        {
          role: "Director of Public Affairs at Areva (2007-2010)",
          lienSuivant:
            "Left Areva for the mayor's office in Le Havre. Maintained his network in the nuclear industry.",
        },
        {
          role: "Multinational nuclear company — €3.6 bn loss on UraMin",
          lienSuivant:
            "The UraMin scandal (2007, during Philippe's tenure) precipitated the group's financial crisis.",
        },
        {
          role: "2017 recapitalisation — €5 billion in public funds",
          lienSuivant:
            "The Philippe government approved the restructuring and recapitalisation of Areva, renamed Orano.",
        },
        {
          role: "French taxpayer — ultimate payer of €5 billion",
          lienSuivant: "",
        },
      ],
    },

    "philippe-legoff-cmacgm-havre-drogue": {
      titre: "Philippe → Le Goff (YL 2011) → CMA CGM → Le Havre → drug trafficking",
      resume:
        "Philippe and Le Goff (CMA CGM's security chief) are both Young Leaders 2011. Le Havre, Philippe's stronghold, is Europe's top cocaine entry point.",
      domaine: "Port security / Drug trafficking",
      consequence:
        "The mayor of Europe's largest cocaine entry port and the security chief of that port's largest shipping company know each other personally through a transatlantic elite network. The point is not to accuse them of complicity, but to highlight the structural convergence: port security in the face of drug trafficking is an issue where the interests of the mayor, the shipowner and the FAF intersect in opacity.",
      maillons: [
        {
          role: "Mayor of Le Havre since 2010 — Young Leader 2011",
          lienSuivant:
            "Same FAF 2011 cohort as Yann Le Goff. Two five-day seminars together.",
        },
        {
          role: "CMA CGM security chief — Young Leader 2011",
          lienSuivant:
            "Responsible for the security of CMA CGM operations, including container security at Le Havre.",
        },
        {
          role: "Largest shipowner at Le Havre — Asia/Latin America routes",
          lienSuivant:
            "Its vessels account for a major share of containerised traffic at Le Havre. Routes from Colombia, Brazil, Ecuador.",
        },
        {
          role: "Europe's top cocaine entry point — 18 tonnes seized in 2023",
          lienSuivant: "",
        },
      ],
    },

    "philippe-ribadeau-fcf-chine-havre": {
      titre: "Philippe → Ribadeau-Dumas → FCF → China → Le Havre",
      resume:
        "Philippe's chief of staff at Matignon has been a member of the France China Foundation since 2013. The FCF's co-creator is Philippe's diplomatic advisor. Philippe is mayor of France's main Chinese import gateway.",
      domaine: "Economic diplomacy / Chinese influence",
      consequence:
        "The Prime Minister is surrounded by people embedded in Chinese influence networks while simultaneously being mayor of France's main Chinese import port. Diplomatic and port decisions made at Matignon directly impact Le Havre. The chief of staff negotiating with Beijing is the same person administering his political boss's port.",
      maillons: [
        {
          role: "Prime Minister / Mayor of Le Havre",
          lienSuivant:
            "Appoints Ribadeau-Dumas as chief of staff and Lenain as diplomatic advisor.",
        },
        {
          role: "Chief of Staff at Matignon — ENA Marc-Bloch — FCF member since 2013",
          lienSuivant:
            "Member of the France China Foundation since 2013, a Franco-Chinese influence network.",
        },
        {
          role: "Franco-Chinese network — co-created by Lenain (Philippe's advisor)",
          lienSuivant:
            "The FCF connects French elites to Chinese decision-makers, in a context where China is investing in European ports.",
        },
        {
          role: "Sino-French trade → Le Havre — gateway for Chinese imports into France",
          lienSuivant: "",
        },
      ],
    },

    "philippe-barroux-echos-couverture": {
      titre: "Philippe → Barroux (YL 2011) → Les Échos (LVMH) → favourable coverage",
      resume:
        "Philippe and Barroux (editor-in-chief of Les Échos) are from the same Young Leaders 2011 cohort. The newspaper is owned by Bernard Arnault (LVMH), who is close to Macron.",
      domaine: "Media / Editorial coverage",
      consequence:
        "A presidential candidate and the editor-in-chief of France's leading financial daily come from the same cohort of an elite network. The newspaper belongs to the world's largest luxury group, whose chairman maintains close relations with the president who appointed the candidate as Prime Minister.",
      maillons: [
        {
          role: "Presidential candidate — Young Leader 2011",
          lienSuivant:
            "Same FAF 2011 cohort as David Barroux. Joint seminars in 2011-2012.",
        },
        {
          role: "Editor-in-chief of Les Échos — Young Leader 2011",
          lienSuivant:
            "Shapes the editorial line of France's leading financial daily.",
        },
        {
          role: "Financial daily — owned by Bernard Arnault",
          lienSuivant:
            "Arnault is Macron's closest oligarchic ally. LVMH is France's largest advertiser.",
        },
        {
          role: "Favourable coverage — positive editorial treatment of Philippe's reforms",
          lienSuivant: "",
        },
      ],
    },

    "philippe-bfm-cmacgm-media": {
      titre: "Philippe → Le Havre → CMA CGM (Saadé) → BFM TV → favourable coverage",
      resume:
        "CMA CGM (whose top French port Philippe is mayor of) acquired BFM TV in 2024. BFM subsequently gave Philippe 25 minutes of airtime without a single question about the CMA CGM/Le Havre connection.",
      domaine: "Media / Media concentration",
      consequence:
        "The port operator of the candidate's stronghold owns the media that covers him most. This is a textbook conflict of interest: CMA CGM has a direct interest in maintaining good relations with the mayor/candidate of Le Havre, and simultaneously owns the media that shapes public opinion on that candidate.",
      maillons: [
        {
          role: "Mayor of Le Havre — CMA CGM's top French port",
          lienSuivant:
            "Le Havre is a major CMA CGM hub. Municipal decisions directly impact the shipowner's activity.",
        },
        {
          role: "France's largest shipowner — fortune >€40 bn",
          lienSuivant:
            "Saadé acquires BFM TV (formerly Altice/Drahi) in 2024, becoming owner of the country's top rolling-news channel.",
        },
        {
          role: "Top rolling-news channel — owned by CMA CGM",
          lienSuivant:
            "BFM gave Philippe 25 minutes of airtime without a question about the CMA CGM/Le Havre links.",
        },
        {
          role: "Public opinion — biased information, media conflict of interest",
          lienSuivant: "",
        },
      ],
    },

    "philippe-macron-veil-franceinter": {
      titre: "Philippe → Macron → Sibyle Veil (ENA) → France Inter → compliant coverage",
      resume:
        "The president of Radio France is Macron's classmate from ENA. France Inter is France's top radio station. Philippe's interviews systematically avoid sensitive topics.",
      domaine: "Public media / Appointment",
      consequence:
        "The president of France's top public radio station is a classmate of the president who appointed Philippe. This chain of appointments creates an indirect channel of influence between the Élysée and the editorial line of public radio.",
      maillons: [
        {
          role: "Former Prime Minister under Macron — Young Leader 2011",
          lienSuivant:
            "Appointed by Macron, with whom he shares the Young Leaders network and the circle of power.",
        },
        {
          role: "President — indirect influence over public broadcasting appointments",
          lienSuivant:
            "Arcom appoints the heads of public broadcasting. Macron indirectly influences governance.",
        },
        {
          role: "President of Radio France — ENA Senghor 2004 (same cohort as Macron)",
          lienSuivant:
            "Macron's ENA classmate. Runs France Inter, France's top radio station.",
        },
        {
          role: "France's top radio station — most listened-to morning show",
          lienSuivant: "",
        },
      ],
    },
  },

  de: {
    "philippe-macron-kohler-cmacgm": {
      titre: "Philippe → Macron → Kohler → CMA CGM",
      resume:
        "Der Generalsekretär des Élysée, Alexis Kohler, ist familiär mit der Schifffahrtsdynastie Aponte-Saadé verbunden. Philippe, Bürgermeister des wichtigsten französischen CMA-CGM-Hafens, wurde von Macron ernannt, dessen engster Vertrauter in Verbindung mit demselben Schifffahrtsunternehmen kompromittiert ist.",
      domaine: "Schifffahrt / Hafen Le Havre",
      consequence:
        "Der Bürgermeister des größten französischen Hafens wird von einem Präsidenten zum Premierminister ernannt, dessen engster Mitarbeiter wegen seiner Verbindungen zur Schifffahrtsindustrie offiziell untersucht wird. Hafen-, Zoll- und Stadtplanungsentscheidungen für Le Havre werden in diesem Ökosystem getroffen. CMA CGM (Saadé) erwarb anschließend BFM TV und wurde damit Eigentümer des meistgesehenen Nachrichtenkanals — ein vollständiger Macht-Hafen-Medien-Kreislauf.",
      maillons: [
        {
          role: "Bürgermeister von Le Havre — wichtigster französischer CMA-CGM-Hafen",
          lienSuivant:
            "2017 von Macron zum Premierminister ernannt. Beide sind Young Leaders (2011 bzw. 2012).",
        },
        {
          role: "Präsident der Republik — Young Leader 2012",
          lienSuivant:
            "Ernennt Alexis Kohler zum Generalsekretär des Élysée, der mächtigsten Position der Präsidentschaft.",
        },
        {
          role: "Generalsekretär des Élysée — offiziell wegen Interessenkonflikten untersucht",
          lienSuivant:
            "Familiäre Verbindungen zur Familie Aponte (MSC). Überwachte von Bercy und dem Élysée aus Entscheidungen, die MSC und den Seefahrtsektor betrafen.",
        },
        {
          role: "Die beiden größten in Le Havre tätigen Reedereien",
          lienSuivant: "",
        },
      ],
    },

    "philippe-atos-80kmh-radars": {
      titre: "Philippe → 80 km/h → Atos → automatische Blitzer",
      resume:
        "Philippe setzte das Tempolimit von 80 km/h gegen Macrons Rat durch und löste damit mechanisch eine Welle von Verkehrsverstößen aus. Anschließend trat er dem Verwaltungsrat von Atos bei, dem Unternehmen, das die Daten der automatischen Blitzer verarbeitet.",
      domaine: "Straßenverkehrssicherheit / Digitale Daten",
      consequence:
        "Der Premierminister, der eine Maßnahme durchsetzte, die mehr Verstöße generierte, trat zwei Jahre später dem Verwaltungsrat des Unternehmens bei, das diese Verstöße verarbeitet (~70.000 €/Jahr). Die Beziehung zwischen Philippe und Atos geht auf das Jahr 2006 zurück, lange vor Matignon. Die zeitliche Abfolge — öffentliche Entscheidung, dann privater Vorteil — ist ein Lehrbuchbeispiel für einen aufgeschobenen Interessenkonflikt.",
      maillons: [
        {
          role: "Premierminister — treibende Kraft hinter dem 80-km/h-Limit",
          lienSuivant:
            "Setzt die 80-km/h-Maßnahme am 1. Juli 2018 durch, gegen Macrons Willen und die öffentliche Meinung.",
        },
        {
          role: "Die unbeliebteste Maßnahme von Philippes Amtszeit",
          lienSuivant:
            "Die Geschwindigkeitssenkung generiert mechanisch mehr Verstöße, also mehr von automatischen Blitzern zu verarbeitende Daten.",
        },
        {
          role: "Automatisches Kontrollsystem — ein wachsender Markt",
          lienSuivant:
            "Die Verarbeitung der Verkehrsverstoßdaten wird von Atos im Rahmen von Staatsverträgen übernommen.",
        },
        {
          role: "IT-Konzern — Philippe seit 2020 Verwaltungsratsmitglied",
          lienSuivant: "",
        },
      ],
    },

    "philippe-areva-recapitalisation": {
      titre: "Philippe → Areva (Lobbying) → Matignon → 5-Mrd.-€-Rekapitalisierung",
      resume:
        "Philippe war von 2007 bis 2010 Lobbyist von Areva. Als er 2017 Premierminister wurde, überwachte er die staatliche Rekapitalisierung von Areva/Orano in Höhe von 5 Milliarden Euro.",
      domaine: "Atomindustrie / Öffentliche Mittel",
      consequence:
        "Der ehemalige Areva-Lobbyist rettete seinen früheren Arbeitgeber mit öffentlichen Mitteln, als er an die Macht kam. Der Verlust von 3,6 Milliarden Euro durch UraMin ereignete sich 2007, genau in dem Jahr, in dem Philippe als Direktor für öffentliche Angelegenheiten zu Areva wechselte. Der Premierminister, der die französische Atomindustrie umstrukturierte, ist der frühere PR-Chef des strauchelnden Konzerns.",
      maillons: [
        {
          role: "Direktor für öffentliche Angelegenheiten bei Areva (2007-2010)",
          lienSuivant:
            "Verlässt Areva für das Bürgermeisteramt in Le Havre. Behält sein Netzwerk in der Atomindustrie.",
        },
        {
          role: "Multinationaler Atomkonzern — 3,6-Mrd.-€-Verlust durch UraMin",
          lienSuivant:
            "Der UraMin-Skandal (2007, während Philippes Anwesenheit) beschleunigte die Finanzkrise des Konzerns.",
        },
        {
          role: "Rekapitalisierung 2017 — 5 Milliarden Euro aus öffentlichen Mitteln",
          lienSuivant:
            "Die Regierung Philippe genehmigt die Umstrukturierung und Rekapitalisierung von Areva, das zu Orano wurde.",
        },
        {
          role: "Französische Steuerzahler — letztendliche Zahler von 5 Milliarden Euro",
          lienSuivant: "",
        },
      ],
    },

    "philippe-legoff-cmacgm-havre-drogue": {
      titre: "Philippe → Le Goff (YL 2011) → CMA CGM → Le Havre → Drogenhandel",
      resume:
        "Philippe und Le Goff (Sicherheitschef von CMA CGM) gehören beide der Young-Leaders-Kohorte 2011 an. Le Havre, Philippes Hochburg, ist Europas wichtigster Kokaineintrittspunkt.",
      domaine: "Hafensicherheit / Drogenhandel",
      consequence:
        "Der Bürgermeister von Europas größtem Kokaineintrittspunkt und der Sicherheitschef der größten Reederei dieses Hafens kennen sich persönlich durch ein transatlantisches Elitennetzwerk. Es geht nicht darum, sie der Komplizenschaft zu beschuldigen, sondern die strukturelle Konvergenz aufzuzeigen: Hafensicherheit angesichts des Drogenhandels ist ein Thema, bei dem sich die Interessen des Bürgermeisters, der Reederei und der FAF im Verborgenen überschneiden.",
      maillons: [
        {
          role: "Bürgermeister von Le Havre seit 2010 — Young Leader 2011",
          lienSuivant:
            "Gleiche FAF-Kohorte 2011 wie Yann Le Goff. Zwei gemeinsame fünftägige Seminare.",
        },
        {
          role: "Sicherheitschef von CMA CGM — Young Leader 2011",
          lienSuivant:
            "Verantwortlich für die Sicherheit der CMA-CGM-Operationen, einschließlich der Containersicherheit in Le Havre.",
        },
        {
          role: "Größte Reederei in Le Havre — Routen nach Asien und Lateinamerika",
          lienSuivant:
            "Ihre Schiffe machen einen Großteil des Containerverkehrs in Le Havre aus. Routen aus Kolumbien, Brasilien, Ecuador.",
        },
        {
          role: "Europas wichtigster Kokaineintrittspunkt — 18 Tonnen beschlagnahmt im Jahr 2023",
          lienSuivant: "",
        },
      ],
    },

    "philippe-ribadeau-fcf-chine-havre": {
      titre: "Philippe → Ribadeau-Dumas → FCF → China → Le Havre",
      resume:
        "Philippes Kabinettschef in Matignon ist seit 2013 Mitglied der France China Foundation. Der Mitgründer der FCF ist sein diplomatischer Berater. Philippe ist Bürgermeister des wichtigsten französischen chinesischen Importdrehkreuzes.",
      domaine: "Wirtschaftsdiplomatie / Chinesischer Einfluss",
      consequence:
        "Der Premierminister ist von Menschen umgeben, die in chinesische Einflussnetzwerke eingebettet sind, während er gleichzeitig Bürgermeister des wichtigsten chinesischen Importhafens Frankreichs ist. Diplomatische und Hafenentscheidungen in Matignon wirken sich direkt auf Le Havre aus. Der Kabinettschef, der mit Peking verhandelt, ist derselbe, der den Hafen seines politischen Chefs verwaltet.",
      maillons: [
        {
          role: "Premierminister / Bürgermeister von Le Havre",
          lienSuivant:
            "Ernennt Ribadeau-Dumas zum Kabinettschef und Lenain zum diplomatischen Berater.",
        },
        {
          role: "Kabinettschef in Matignon — ENA Marc-Bloch — FCF-Mitglied seit 2013",
          lienSuivant:
            "Mitglied der France China Foundation seit 2013, einem französisch-chinesischen Einflussnetzwerk.",
        },
        {
          role: "Französisch-chinesisches Netzwerk — mitgegründet von Lenain (Philippes Berater)",
          lienSuivant:
            "Die FCF verbindet französische Eliten mit chinesischen Entscheidungsträgern in einem Kontext, in dem China in europäische Häfen investiert.",
        },
        {
          role: "Chinesisch-französischer Handel → Le Havre — Eintrittspunkt für chinesische Importe nach Frankreich",
          lienSuivant: "",
        },
      ],
    },

    "philippe-barroux-echos-couverture": {
      titre: "Philippe → Barroux (YL 2011) → Les Échos (LVMH) → wohlwollende Berichterstattung",
      resume:
        "Philippe und Barroux (Chefredakteur von Les Échos) stammen aus derselben Young-Leaders-Kohorte 2011. Die Zeitung gehört Bernard Arnault (LVMH), der Macron nahesteht.",
      domaine: "Medien / Redaktionelle Berichterstattung",
      consequence:
        "Ein Präsidentschaftskandidat und der Chefredakteur der führenden Wirtschaftszeitung Frankreichs stammen aus derselben Kohorte eines Elitenetzwerks. Die Zeitung gehört dem weltgrößten Luxuskonzern, dessen Vorsitzender enge Beziehungen zu dem Präsidenten unterhält, der den Kandidaten zum Premierminister ernannte.",
      maillons: [
        {
          role: "Präsidentschaftskandidat — Young Leader 2011",
          lienSuivant:
            "Gleiche FAF-Kohorte 2011 wie David Barroux. Gemeinsame Seminare 2011-2012.",
        },
        {
          role: "Chefredakteur von Les Échos — Young Leader 2011",
          lienSuivant:
            "Bestimmt die Redaktionslinie der führenden französischen Wirtschaftszeitung.",
        },
        {
          role: "Wirtschaftszeitung — Eigentum von Bernard Arnault",
          lienSuivant:
            "Arnault ist Macrons engster oligarchischer Verbündeter. LVMH ist Frankreichs größter Werbetreibender.",
        },
        {
          role: "Wohlwollende Berichterstattung — positive redaktionelle Behandlung von Philippes Reformen",
          lienSuivant: "",
        },
      ],
    },

    "philippe-bfm-cmacgm-media": {
      titre: "Philippe → Le Havre → CMA CGM (Saadé) → BFM TV → wohlwollende Berichterstattung",
      resume:
        "CMA CGM (dessen wichtigsten französischen Hafen Philippe als Bürgermeister leitet) übernahm BFM TV im Jahr 2024. BFM gewährte Philippe anschließend 25 Minuten Sendezeit ohne eine einzige Frage zu den Verbindungen CMA CGM/Le Havre.",
      domaine: "Medien / Medienkonzentration",
      consequence:
        "Der Hafenbetreiber der Hochburg des Kandidaten besitzt das Medium, das ihn am meisten abdeckt. Dies ist ein Lehrbuchbeispiel für Interessenkonflikt: CMA CGM hat ein direktes Interesse daran, gute Beziehungen zum Bürgermeister/Kandidaten von Le Havre aufrechtzuerhalten, und besitzt gleichzeitig das Medium, das die öffentliche Meinung über diesen Kandidaten formt.",
      maillons: [
        {
          role: "Bürgermeister von Le Havre — wichtigster französischer CMA-CGM-Hafen",
          lienSuivant:
            "Le Havre ist ein wichtiges CMA-CGM-Drehkreuz. Kommunale Entscheidungen wirken sich direkt auf die Aktivitäten der Reederei aus.",
        },
        {
          role: "Frankreichs größte Reederei — Vermögen >40 Mrd. €",
          lienSuivant:
            "Saadé erwirbt BFM TV (ehemals Altice/Drahi) im Jahr 2024 und wird damit Eigentümer des meistgesehenen Nachrichtenkanals.",
        },
        {
          role: "Meistgesehener Nachrichtenkanal — Eigentum von CMA CGM",
          lienSuivant:
            "BFM gewährte Philippe 25 Minuten Sendezeit ohne Fragen zu den CMA-CGM/Le-Havre-Verbindungen.",
        },
        {
          role: "Öffentliche Meinung — verzerrte Information, medialer Interessenkonflikt",
          lienSuivant: "",
        },
      ],
    },

    "philippe-macron-veil-franceinter": {
      titre: "Philippe → Macron → Sibyle Veil (ENA) → France Inter → gefällige Berichterstattung",
      resume:
        "Die Präsidentin von Radio France ist Macrons ENA-Kommilitonin. France Inter ist Frankreichs meistgehörter Radiosender. Philippes Interviews vermeiden systematisch heikle Themen.",
      domaine: "Öffentliche Medien / Ernennung",
      consequence:
        "Die Präsidentin des wichtigsten öffentlichen Radiosenders Frankreichs ist eine Kommilitonin des Präsidenten, der Philippe ernannte. Diese Ernennungskette schafft einen indirekten Einflusskanal zwischen dem Élysée und der Redaktionslinie des öffentlichen Rundfunks.",
      maillons: [
        {
          role: "Ehemaliger Premierminister unter Macron — Young Leader 2011",
          lienSuivant:
            "Von Macron ernannt, mit dem er das Young-Leaders-Netzwerk und den Machtzirkel teilt.",
        },
        {
          role: "Präsident — indirekter Einfluss auf Ernennungen im öffentlichen Rundfunk",
          lienSuivant:
            "Arcom ernennt die Leiter des öffentlichen Rundfunks. Macron beeinflusst indirekt die Governance.",
        },
        {
          role: "Präsidentin von Radio France — ENA Senghor 2004 (gleicher Jahrgang wie Macron)",
          lienSuivant:
            "Macrons ENA-Kommilitonin. Leitet France Inter, Frankreichs meistgehörten Radiosender.",
        },
        {
          role: "Frankreichs meistgehörter Radiosender — meistgehörte Morgensendung",
          lienSuivant: "",
        },
      ],
    },
  },

  es: {
    "philippe-macron-kohler-cmacgm": {
      titre: "Philippe → Macron → Kohler → CMA CGM",
      resume:
        "El secretario general del Élysée, Alexis Kohler, tiene vínculos familiares con la dinastía naviera Aponte-Saadé. Philippe, alcalde del principal puerto francés de CMA CGM, fue nombrado por Macron, cuyo hombre de confianza está comprometido con la misma naviera.",
      domaine: "Transporte marítimo / Puerto de El Havre",
      consequence:
        "El alcalde del principal puerto francés es nombrado Primer Ministro por un presidente cuyo mano derecha está bajo investigación formal por sus vínculos con la industria marítima. Las decisiones portuarias, aduaneras y urbanísticas de El Havre se toman en este ecosistema. CMA CGM (Saadé) adquirió posteriormente BFM TV, convirtiéndose en propietaria del canal de noticias líder — un círculo completo poder-puerto-medios.",
      maillons: [
        {
          role: "Alcalde de El Havre — principal puerto francés de CMA CGM",
          lienSuivant:
            "Nombrado Primer Ministro por Macron en 2017. Ambos son Young Leaders (2011 y 2012).",
        },
        {
          role: "Presidente de la República — Young Leader 2012",
          lienSuivant:
            "Nombra a Alexis Kohler secretario general del Élysée, el cargo más poderoso de la presidencia.",
        },
        {
          role: "Secretario general del Élysée — bajo investigación formal por conflictos de intereses",
          lienSuivant:
            "Vínculos familiares con la familia Aponte (MSC). Supervisó decisiones que implicaban a MSC y al sector marítimo desde Bercy y luego el Élysée.",
        },
        {
          role: "Las dos principales navieras que operan en El Havre",
          lienSuivant: "",
        },
      ],
    },

    "philippe-atos-80kmh-radars": {
      titre: "Philippe → 80 km/h → Atos → radares automáticos",
      resume:
        "Philippe impuso el límite de velocidad de 80 km/h contra el consejo de Macron, generando mecánicamente un auge de infracciones de tráfico. Luego se incorporó al consejo de administración de Atos, empresa que procesa los datos de los radares automáticos.",
      domaine: "Seguridad vial / Datos digitales",
      consequence:
        "El Primer Ministro que impuso una medida que generaba más infracciones se incorporó dos años después al consejo de administración de la empresa que procesa dichas infracciones (~70.000 €/año). La relación Philippe-Atos se remonta a 2006, mucho antes de Matignon. La secuencia temporal — decisión pública y luego beneficio privado — es un caso de libro de conflicto de intereses diferido.",
      maillons: [
        {
          role: "Primer Ministro — impulsor personal del límite de 80 km/h",
          lienSuivant:
            "Impone la medida del 80 km/h el 1 de julio de 2018, contra la voluntad de Macron y la opinión pública.",
        },
        {
          role: "La medida más impopular del mandato de Philippe",
          lienSuivant:
            "La reducción de velocidad genera mecánicamente más infracciones, es decir, más datos que procesar por los radares automáticos.",
        },
        {
          role: "Sistema de control automatizado — un mercado en expansión",
          lienSuivant:
            "El procesamiento de los datos de infracciones viales lo gestiona Atos, mediante contratos con el Estado.",
        },
        {
          role: "Grupo informático — Philippe es consejero desde 2020",
          lienSuivant: "",
        },
      ],
    },

    "philippe-areva-recapitalisation": {
      titre: "Philippe → Areva (lobbying) → Matignon → recapitalización de 5.000 M€",
      resume:
        "Philippe fue lobbyista de Areva de 2007 a 2010. Al convertirse en Primer Ministro en 2017, supervisó la recapitalización de Areva/Orano por parte del Estado por valor de 5.000 millones de euros.",
      domaine: "Industria nuclear / Fondos públicos",
      consequence:
        "El ex lobbyista de Areva rescató a su antiguo empleador con dinero público al llegar al poder. La pérdida de 3.600 millones de euros con UraMin se produjo en 2007, el mismo año en que Philippe se incorporó a Areva como director de asuntos públicos. El Primer Ministro que reestructuró la industria nuclear francesa es el ex jefe de comunicación del grupo en dificultades.",
      maillons: [
        {
          role: "Director de Asuntos Públicos de Areva (2007-2010)",
          lienSuivant:
            "Abandona Areva para ser alcalde de El Havre. Mantiene su red en la industria nuclear.",
        },
        {
          role: "Multinacional nuclear — pérdida de 3.600 M€ con UraMin",
          lienSuivant:
            "El escándalo UraMin (2007, durante la presencia de Philippe) precipitó la crisis financiera del grupo.",
        },
        {
          role: "Recapitalización 2017 — 5.000 millones de euros de fondos públicos",
          lienSuivant:
            "El gobierno Philippe aprueba la reestructuración y recapitalización de Areva, renombrada Orano.",
        },
        {
          role: "Contribuyente francés — pagador final de 5.000 millones de euros",
          lienSuivant: "",
        },
      ],
    },

    "philippe-legoff-cmacgm-havre-drogue": {
      titre: "Philippe → Le Goff (YL 2011) → CMA CGM → El Havre → narcotráfico",
      resume:
        "Philippe y Le Goff (jefe de seguridad de CMA CGM) son ambos Young Leaders 2011. El Havre, feudo de Philippe, es el principal punto de entrada de cocaína en Europa.",
      domaine: "Seguridad portuaria / Narcotráfico",
      consequence:
        "El alcalde del principal punto de entrada de cocaína en Europa y el jefe de seguridad de la mayor naviera de ese mismo puerto se conocen personalmente a través de una red de élite transatlántica. No se trata de acusarles de complicidad, sino de señalar la convergencia estructural: la seguridad portuaria frente al narcotráfico es un asunto donde los intereses del alcalde, la naviera y la FAF se entrecruzan en la opacidad.",
      maillons: [
        {
          role: "Alcalde de El Havre desde 2010 — Young Leader 2011",
          lienSuivant:
            "Misma promoción FAF 2011 que Yann Le Goff. Dos seminarios conjuntos de cinco días.",
        },
        {
          role: "Jefe de seguridad de CMA CGM — Young Leader 2011",
          lienSuivant:
            "Responsable de la seguridad de las operaciones de CMA CGM, incluida la seguridad de los contenedores en El Havre.",
        },
        {
          role: "Mayor naviera en El Havre — rutas hacia Asia y América Latina",
          lienSuivant:
            "Sus buques representan una parte importante del tráfico de contenedores en El Havre. Rutas desde Colombia, Brasil, Ecuador.",
        },
        {
          role: "Principal punto de entrada de cocaína en Europa — 18 toneladas incautadas en 2023",
          lienSuivant: "",
        },
      ],
    },

    "philippe-ribadeau-fcf-chine-havre": {
      titre: "Philippe → Ribadeau-Dumas → FCF → China → El Havre",
      resume:
        "El jefe de gabinete de Philippe en Matignon es miembro de la France China Foundation desde 2013. El cofundador de la FCF es su asesor diplomático. Philippe es alcalde del principal puerto de importación chino de Francia.",
      domaine: "Diplomacia económica / Influencia china",
      consequence:
        "El Primer Ministro está rodeado de personas insertas en redes de influencia chinas mientras es simultáneamente alcalde del principal puerto de importación china de Francia. Las decisiones diplomáticas y portuarias tomadas en Matignon impactan directamente en El Havre. El jefe de gabinete que negocia con Pekín es el mismo que administra el puerto de su jefe político.",
      maillons: [
        {
          role: "Primer Ministro / Alcalde de El Havre",
          lienSuivant:
            "Nombra a Ribadeau-Dumas jefe de gabinete y a Lenain asesor diplomático.",
        },
        {
          role: "Jefe de gabinete en Matignon — ENA Marc-Bloch — miembro de la FCF desde 2013",
          lienSuivant:
            "Miembro de la France China Foundation desde 2013, una red de influencia franco-china.",
        },
        {
          role: "Red franco-china — cofundada por Lenain (asesor de Philippe)",
          lienSuivant:
            "La FCF conecta a las élites francesas con los decisores chinos, en un contexto en el que China invierte en puertos europeos.",
        },
        {
          role: "Comercio sino-francés → El Havre — puerta de entrada de las importaciones chinas a Francia",
          lienSuivant: "",
        },
      ],
    },

    "philippe-barroux-echos-couverture": {
      titre: "Philippe → Barroux (YL 2011) → Les Échos (LVMH) → cobertura favorable",
      resume:
        "Philippe y Barroux (director de redacción de Les Échos) provienen de la misma promoción Young Leaders 2011. El periódico es propiedad de Bernard Arnault (LVMH), cercano a Macron.",
      domaine: "Medios de comunicación / Cobertura editorial",
      consequence:
        "Un candidato a la presidencia y el director de redacción del principal diario económico de Francia provienen de la misma promoción de una red de élite. El periódico pertenece al mayor grupo de lujo del mundo, cuyo presidente mantiene relaciones estrechas con el presidente que nombró a ese candidato Primer Ministro.",
      maillons: [
        {
          role: "Candidato a la presidencia — Young Leader 2011",
          lienSuivant:
            "Misma promoción FAF 2011 que David Barroux. Seminarios conjuntos en 2011-2012.",
        },
        {
          role: "Director de redacción de Les Échos — Young Leader 2011",
          lienSuivant:
            "Determina la línea editorial del principal diario económico francés.",
        },
        {
          role: "Diario económico — propiedad de Bernard Arnault",
          lienSuivant:
            "Arnault es el aliado oligárquico más cercano de Macron. LVMH es el mayor anunciante de Francia.",
        },
        {
          role: "Cobertura favorable — tratamiento editorial positivo de las reformas de Philippe",
          lienSuivant: "",
        },
      ],
    },

    "philippe-bfm-cmacgm-media": {
      titre: "Philippe → El Havre → CMA CGM (Saadé) → BFM TV → cobertura favorable",
      resume:
        "CMA CGM (cuyo principal puerto francés gobierna Philippe) adquirió BFM TV en 2024. BFM le concedió entonces a Philippe 25 minutos de plató sin una sola pregunta sobre los vínculos CMA CGM/El Havre.",
      domaine: "Medios de comunicación / Concentración mediática",
      consequence:
        "El operador portuario del feudo del candidato posee el medio que más le cubre. Es un caso de libro de conflicto de intereses mediático: CMA CGM tiene un interés directo en mantener buenas relaciones con el alcalde/candidato de El Havre, y posee simultáneamente el medio que forma la opinión pública sobre ese candidato.",
      maillons: [
        {
          role: "Alcalde de El Havre — principal puerto francés de CMA CGM",
          lienSuivant:
            "El Havre es un hub fundamental de CMA CGM. Las decisiones municipales impactan directamente en la actividad de la naviera.",
        },
        {
          role: "Mayor naviera francesa — fortuna >40.000 M€",
          lienSuivant:
            "Saadé adquiere BFM TV (ex-Altice/Drahi) en 2024, convirtiéndose en propietario del principal canal de noticias continuas.",
        },
        {
          role: "Principal canal de noticias continuas — propiedad de CMA CGM",
          lienSuivant:
            "BFM concedió 25 minutos de plató a Philippe sin preguntas sobre los vínculos CMA CGM/El Havre.",
        },
        {
          role: "Opinión pública — información sesgada, conflicto de intereses mediático",
          lienSuivant: "",
        },
      ],
    },

    "philippe-macron-veil-franceinter": {
      titre: "Philippe → Macron → Sibyle Veil (ENA) → France Inter → cobertura complaciente",
      resume:
        "La presidenta de Radio France es compañera de promoción de ENA de Macron. France Inter es la primera radio de Francia. Las entrevistas a Philippe evitan sistemáticamente los temas sensibles.",
      domaine: "Medios públicos / Nombramiento",
      consequence:
        "La presidenta de la primera radio pública de Francia es compañera de promoción del presidente que nombró a Philippe. Esta cadena de nombramientos crea un canal de influencia indirecto entre el Élysée y la línea editorial de la radio pública.",
      maillons: [
        {
          role: "Ex Primer Ministro de Macron — Young Leader 2011",
          lienSuivant:
            "Nombrado por Macron, con quien comparte la red Young Leaders y el círculo de poder.",
        },
        {
          role: "Presidente — influencia indirecta sobre los nombramientos del audiovisual público",
          lienSuivant:
            "Arcom nombra a los presidentes del audiovisual público. Macron influye indirectamente en la gobernanza.",
        },
        {
          role: "Presidenta de Radio France — ENA Senghor 2004 (misma promoción que Macron)",
          lienSuivant:
            "Compañera de promoción de ENA de Macron. Dirige France Inter, la primera radio de Francia.",
        },
        {
          role: "Primera radio de Francia — el matinal más escuchado",
          lienSuivant: "",
        },
      ],
    },
  },

  ru: {
    "philippe-macron-kohler-cmacgm": {
      titre: "Филипп → Макрон → Колер → CMA CGM",
      resume:
        "Генеральный секретарь Élysée Алексис Колер связан семейными узами с судоходной династией Апонте-Саадé. Филипп, мэр главного французского порта CMA CGM, был назначен Макроном, чей ближайший соратник скомпрометирован связями с той же судоходной компанией.",
      domaine: "Морской транспорт / Порт Гавра",
      consequence:
        "Мэр крупнейшего французского порта назначается премьер-министром президентом, чей правая рука находится под официальным следствием за связи с судоходной отраслью. Портовые, таможенные и градостроительные решения по Гавру принимаются в этой экосистеме. CMA CGM (Саадé) впоследствии приобрела BFM TV, став владельцем ведущего новостного канала — завершённый круг власть-порт-медиа.",
      maillons: [
        {
          role: "Мэр Гавра — главный французский порт CMA CGM",
          lienSuivant:
            "Назначен премьер-министром Макроном в 2017 году. Оба — Young Leaders (2011 и 2012).",
        },
        {
          role: "Президент Республики — Young Leader 2012",
          lienSuivant:
            "Назначает Алексиса Колера генеральным секретарём Élysée — самой влиятельной должностью в президентуре.",
        },
        {
          role: "Генеральный секретарь Élysée — под официальным следствием за конфликт интересов",
          lienSuivant:
            "Семейные связи с семьёй Апонте (MSC). Курировал решения, затрагивавшие MSC и морской сектор, сначала из Берси, затем из Élysée.",
        },
        {
          role: "Две крупнейшие судоходные компании, работающие в Гавре",
          lienSuivant: "",
        },
      ],
    },

    "philippe-atos-80kmh-radars": {
      titre: "Филипп → 80 км/ч → Atos → автоматические радары",
      resume:
        "Филипп ввёл ограничение скорости 80 км/ч вопреки советам Макрона, механически спровоцировав рост числа нарушений. Затем он вошёл в совет директоров Atos — компании, обрабатывающей данные автоматических дорожных камер.",
      domaine: "Безопасность дорожного движения / Цифровые данные",
      consequence:
        "Премьер-министр, введший меру, генерирующую больше нарушений, два года спустя вошёл в совет директоров компании, обрабатывающей эти нарушения (~70 000 €/год). Отношения Филиппа с Atos восходят к 2006 году — задолго до Matignon. Временна́я последовательность — публичное решение, затем частная выгода — является классической схемой отложенного конфликта интересов.",
      maillons: [
        {
          role: "Премьер-министр — лично продвигал ограничение 80 км/ч",
          lienSuivant:
            "Вводит меру 80 км/ч 1 июля 2018 года вопреки позиции Макрона и общественному мнению.",
        },
        {
          role: "Самая непопулярная мера мандата Филиппа",
          lienSuivant:
            "Снижение скорости механически порождает больше нарушений, а значит, больше данных для обработки автоматическими камерами.",
        },
        {
          role: "Система автоматического контроля — растущий рынок",
          lienSuivant:
            "Обработку данных о дорожных нарушениях ведёт Atos по контрактам с государством.",
        },
        {
          role: "IT-группа — Филипп входит в совет директоров с 2020 года",
          lienSuivant: "",
        },
      ],
    },

    "philippe-areva-recapitalisation": {
      titre: "Филипп → Areva (лоббизм) → Matignon → рекапитализация на 5 млрд €",
      resume:
        "С 2007 по 2010 год Филипп был лоббистом Areva. Став премьер-министром в 2017 году, он курировал государственную рекапитализацию Areva/Orano на сумму 5 миллиардов евро.",
      domaine: "Атомная промышленность / Государственные средства",
      consequence:
        "Бывший лоббист Areva спасает своего прежнего работодателя государственными деньгами, придя к власти. Убыток в 3,6 миллиарда евро по UraMin пришёлся на 2007 год — тот самый год, когда Филипп пришёл в Areva директором по публичным делам. Премьер-министр, реструктурировавший французскую атомную отрасль, — это бывший PR-директор испытывавшего трудности концерна.",
      maillons: [
        {
          role: "Директор по публичным делам в Areva (2007-2010)",
          lienSuivant:
            "Уходит из Areva на должность мэра Гавра. Сохраняет связи в атомной отрасли.",
        },
        {
          role: "Многонациональная атомная компания — убыток 3,6 млрд € по UraMin",
          lienSuivant:
            "Скандал с UraMin (2007, в период работы Филиппа) ускорил финансовый кризис группы.",
        },
        {
          role: "Рекапитализация 2017 года — 5 миллиардов евро из государственных средств",
          lienSuivant:
            "Правительство Филиппа одобряет реструктуризацию и рекапитализацию Areva, переименованной в Orano.",
        },
        {
          role: "Французский налогоплательщик — конечный плательщик 5 миллиардов евро",
          lienSuivant: "",
        },
      ],
    },

    "philippe-legoff-cmacgm-havre-drogue": {
      titre: "Филипп → Ле Гофф (YL 2011) → CMA CGM → Гавр → наркоторговля",
      resume:
        "Филипп и Ле Гофф (начальник службы безопасности CMA CGM) оба являются Young Leaders 2011. Гавр, вотчина Филиппа, — главная точка ввоза кокаина в Европу.",
      domaine: "Портовая безопасность / Наркоторговля",
      consequence:
        "Мэр крупнейшего в Европе пункта ввоза кокаина и начальник службы безопасности крупнейшей судоходной компании этого же порта лично знакомы через трансатлантическую элитную сеть. Речь идёт не о том, чтобы обвинить их в соучастии, но о структурной конвергенции: портовая безопасность перед лицом наркоторговли — это область, где интересы мэра, судовладельца и FAF пересекаются в непрозрачности.",
      maillons: [
        {
          role: "Мэр Гавра с 2010 года — Young Leader 2011",
          lienSuivant:
            "Та же группа FAF 2011, что и у Янна Ле Гоффа. Два совместных пятидневных семинара.",
        },
        {
          role: "Начальник службы безопасности CMA CGM — Young Leader 2011",
          lienSuivant:
            "Отвечает за безопасность операций CMA CGM, включая безопасность контейнеров в Гавре.",
        },
        {
          role: "Крупнейшая судоходная компания в Гавре — маршруты в Азию и Латинскую Америку",
          lienSuivant:
            "Её суда составляют значительную долю контейнерного трафика в Гавре. Маршруты из Колумбии, Бразилии, Эквадора.",
        },
        {
          role: "Главная точка ввоза кокаина в Европу — 18 тонн изъято в 2023 году",
          lienSuivant: "",
        },
      ],
    },

    "philippe-ribadeau-fcf-chine-havre": {
      titre: "Филипп → Рибадо-Дюма → FCF → Китай → Гавр",
      resume:
        "Руководитель кабинета Филиппа в Matignon является членом France China Foundation с 2013 года. Сооснователь FCF — его дипломатический советник. Филипп — мэр главного французского порта для китайского импорта.",
      domaine: "Экономическая дипломатия / Китайское влияние",
      consequence:
        "Премьер-министр окружён людьми, встроенными в китайские сети влияния, одновременно будучи мэром главного французского порта для китайского импорта. Дипломатические и портовые решения Matignon напрямую затрагивают Гавр. Руководитель кабинета, ведущий переговоры с Пекином, — тот же человек, что управляет портом своего политического шефа.",
      maillons: [
        {
          role: "Премьер-министр / Мэр Гавра",
          lienSuivant:
            "Назначает Рибадо-Дюма руководителем кабинета, а Ленена — дипломатическим советником.",
        },
        {
          role: "Руководитель кабинета в Matignon — ENA Marc-Bloch — член FCF с 2013 года",
          lienSuivant:
            "Член France China Foundation с 2013 года — сети франко-китайского влияния.",
        },
        {
          role: "Французско-китайская сеть — сооснована Лененом (советником Филиппа)",
          lienSuivant:
            "FCF связывает французские элиты с китайскими лицами, принимающими решения, в контексте, когда Китай инвестирует в европейские порты.",
        },
        {
          role: "Китайско-французская торговля → Гавр — ворота для китайского импорта во Францию",
          lienSuivant: "",
        },
      ],
    },

    "philippe-barroux-echos-couverture": {
      titre: "Филипп → Барру (YL 2011) → Les Échos (LVMH) → благожелательное освещение",
      resume:
        "Филипп и Барру (главный редактор Les Échos) принадлежат к одной группе Young Leaders 2011. Газета принадлежит Бернару Арно (LVMH), близкому к Макрону.",
      domaine: "СМИ / Редакционное освещение",
      consequence:
        "Кандидат в президенты и главный редактор ведущей экономической газеты Франции вышли из одной когорты элитной сети. Газета принадлежит крупнейшей в мире компании по производству предметов роскоши, председатель которой поддерживает тесные отношения с президентом, назначившим этого кандидата премьер-министром.",
      maillons: [
        {
          role: "Кандидат в президенты — Young Leader 2011",
          lienSuivant:
            "Та же группа FAF 2011, что и у Давида Барру. Совместные семинары в 2011-2012 годах.",
        },
        {
          role: "Главный редактор Les Échos — Young Leader 2011",
          lienSuivant:
            "Определяет редакционную линию ведущей французской экономической газеты.",
        },
        {
          role: "Деловая газета — принадлежит Бернару Арно",
          lienSuivant:
            "Арно — ближайший олигархический союзник Макрона. LVMH — крупнейший рекламодатель Франции.",
        },
        {
          role: "Благожелательное освещение — позитивная редакционная подача реформ Филиппа",
          lienSuivant: "",
        },
      ],
    },

    "philippe-bfm-cmacgm-media": {
      titre: "Филипп → Гавр → CMA CGM (Саадé) → BFM TV → благожелательное освещение",
      resume:
        "CMA CGM (главный французский порт которой возглавляет Филипп) приобрела BFM TV в 2024 году. После этого BFM предоставила Филиппу 25 минут эфира без единого вопроса о связях CMA CGM/Гавр.",
      domaine: "СМИ / Медиаконцентрация",
      consequence:
        "Портовый оператор вотчины кандидата владеет СМИ, которое освещает его больше всего. Это хрестоматийный случай медийного конфликта интересов: CMA CGM прямо заинтересована в поддержании хороших отношений с мэром/кандидатом Гавра и одновременно владеет СМИ, формирующим общественное мнение об этом кандидате.",
      maillons: [
        {
          role: "Мэр Гавра — главный французский порт CMA CGM",
          lienSuivant:
            "Гавр — ключевой хаб CMA CGM. Муниципальные решения напрямую влияют на деятельность судовладельца.",
        },
        {
          role: "Крупнейшая французская судоходная компания — состояние >40 млрд €",
          lienSuivant:
            "Саадé приобретает BFM TV (бывшая Altice/Drahi) в 2024 году, становясь владельцем ведущего новостного канала.",
        },
        {
          role: "Ведущий новостной канал — собственность CMA CGM",
          lienSuivant:
            "BFM предоставила Филиппу 25 минут эфира без вопросов о связях CMA CGM/Гавр.",
        },
        {
          role: "Общественное мнение — искажённая информация, медийный конфликт интересов",
          lienSuivant: "",
        },
      ],
    },

    "philippe-macron-veil-franceinter": {
      titre: "Филипп → Макрон → Сибиль Вейль (ENA) → France Inter → соглашательское освещение",
      resume:
        "Президент Radio France — однокурсница Макрона по ENA. France Inter — первая радиостанция Франции. Интервью с Филиппом систематически обходят стороной чувствительные темы.",
      domaine: "Общественные СМИ / Назначение",
      consequence:
        "Президент крупнейшей публичной радиостанции Франции — однокурсница президента, назначившего Филиппа. Эта цепочка назначений создаёт косвенный канал влияния между Élysée и редакционной линией государственного радио.",
      maillons: [
        {
          role: "Бывший премьер-министр при Макроне — Young Leader 2011",
          lienSuivant:
            "Назначен Макроном, с которым разделяет сеть Young Leaders и круг власти.",
        },
        {
          role: "Президент — косвенное влияние на назначения в общественном телерадиовещании",
          lienSuivant:
            "Arcom назначает руководителей общественного телерадиовещания. Макрон косвенно влияет на управление.",
        },
        {
          role: "Президент Radio France — ENA Senghor 2004 (та же группа, что и Макрон)",
          lienSuivant:
            "Однокурсница Макрона по ENA. Руководит France Inter — первой радиостанцией Франции.",
        },
        {
          role: "Первая радиостанция Франции — самая слушаемая утренняя программа",
          lienSuivant: "",
        },
      ],
    },
  },

  ja: {
    "philippe-macron-kohler-cmacgm": {
      titre: "フィリップ → マクロン → コレール → CMA CGM",
      resume:
        "エリゼ宮事務総長のアレクシス・コレールは、海運王朝アポンテ＝サーデ家と親族関係にある。フランス最大のCMA CGM港の市長であるフィリップは、同じ海運会社との関係で問題視されている腹心を持つマクロンによって任命された。",
      domaine: "海上輸送 / ル・アーブル港",
      consequence:
        "フランス最大の港の市長は、海運業界との関係で正式な捜査対象となった側近を持つ大統領によって首相に任命された。ル・アーブルの港湾、税関、都市計画に関する決定はこのエコシステムの中で行われている。CMA CGM（サーデ）はその後BFM TVを買収し、国内最大の24時間ニュースチャンネルのオーナーとなった——権力・港・メディアが完結する構造。",
      maillons: [
        {
          role: "ル・アーブル市長 — フランス最大のCMA CGM港",
          lienSuivant:
            "2017年にマクロンによって首相に任命。両者はYoung Leaders（2011年・2012年）。",
        },
        {
          role: "共和国大統領 — Young Leader 2012",
          lienSuivant:
            "アレクシス・コレールをエリゼ宮事務総長（大統領府最高の役職）に任命。",
        },
        {
          role: "エリゼ宮事務総長 — 利益相反により正式捜査中",
          lienSuivant:
            "アポンテ家（MSC）との親族関係。ベルシーそしてエリゼ宮からMSCおよび海運セクターに関わる決定を監督した。",
        },
        {
          role: "ル・アーブルで活動する2大海運会社",
          lienSuivant: "",
        },
      ],
    },

    "philippe-atos-80kmh-radars": {
      titre: "フィリップ → 時速80km → Atos → 自動速度取締カメラ",
      resume:
        "フィリップはマクロンの反対を押し切って時速80km規制を導入し、機械的に交通違反件数の増加を招いた。その後、自動速度取締カメラのデータを処理するAtos社の取締役会に加わった。",
      domaine: "道路安全 / デジタルデータ",
      consequence:
        "より多くの違反を生む措置を導入した首相は、2年後にそれらの違反を処理する企業の取締役会に加わった（年約7万ユーロ）。フィリップとAtosの関係は2006年に遡り、マティニョンより遥か以前のことである。公的決定の後に私的利益が生じる時系列は、遅延型利益相反の典型的なパターンである。",
      maillons: [
        {
          role: "首相 — 時速80km規制を自ら主導",
          lienSuivant:
            "マクロンの意向と世論に反して、2018年7月1日に時速80km措置を導入。",
        },
        {
          role: "フィリップ政権で最も不人気だった措置",
          lienSuivant:
            "速度制限の引き下げは機械的に違反件数を増やし、自動速度取締カメラが処理するデータを増大させる。",
        },
        {
          role: "自動取締システム — 拡大する市場",
          lienSuivant:
            "道路違反データの処理は、国との契約のもとAtosが担っている。",
        },
        {
          role: "ITグループ — フィリップは2020年から取締役",
          lienSuivant: "",
        },
      ],
    },

    "philippe-areva-recapitalisation": {
      titre: "フィリップ → Areva（ロビイスト）→ マティニョン → 50億ユーロ再資本化",
      resume:
        "フィリップは2007年から2010年までArevaのロビイストだった。2017年に首相に就任後、国家によるAreva/Oranoへの50億ユーロの再資本化を監督した。",
      domaine: "原子力産業 / 公共資金",
      consequence:
        "元Arevaロビイストは権力の座に就くと、公金で元の雇用主を救済した。UraMinによる36億ユーロの損失は2007年に発生した——フィリップが広報部長としてArevaに入社した同じ年である。フランスの原子力産業を再編した首相は、経営難に陥ったグループの元PR責任者だった。",
      maillons: [
        {
          role: "Areva広報部長（2007-2010）",
          lienSuivant:
            "Arevaを離れてル・アーブル市長に就任。原子力業界でのネットワークを維持。",
        },
        {
          role: "多国籍原子力企業 — UraMinで36億ユーロの損失",
          lienSuivant:
            "UraMinスキャンダル（2007年、フィリップ在任中）がグループの財政危機を加速させた。",
        },
        {
          role: "2017年の再資本化 — 50億ユーロの公的資金",
          lienSuivant:
            "フィリップ政権がAreva（Oranoに改称）の再編と再資本化を承認。",
        },
        {
          role: "フランス納税者 — 50億ユーロの最終負担者",
          lienSuivant: "",
        },
      ],
    },

    "philippe-legoff-cmacgm-havre-drogue": {
      titre: "フィリップ → ル・ゴフ（YL 2011）→ CMA CGM → ル・アーブル → 麻薬密輸",
      resume:
        "フィリップとル・ゴフ（CMA CGMセキュリティ責任者）はともにYoung Leaders 2011の同期生である。フィリップの地盤であるル・アーブルは、ヨーロッパ最大のコカイン流入地点だ。",
      domaine: "港湾セキュリティ / 麻薬密輸",
      consequence:
        "ヨーロッパ最大のコカイン流入港の市長と、同港最大の海運会社のセキュリティ責任者は、大西洋を跨ぐエリートネットワークを通じて個人的に知り合っている。共謀を訴えるのではなく、構造的な収束を指摘することが重要だ——麻薬密輸に直面した港湾セキュリティは、市長・船主・FAFの利益が不透明に交差する領域である。",
      maillons: [
        {
          role: "2010年以来のル・アーブル市長 — Young Leader 2011",
          lienSuivant:
            "ヤン・ル・ゴフと同じFAF 2011期。5日間のセミナーを2回共に受講。",
        },
        {
          role: "CMA CGMセキュリティ責任者 — Young Leader 2011",
          lienSuivant:
            "ル・アーブルでのコンテナセキュリティを含むCMA CGM業務のセキュリティを担当。",
        },
        {
          role: "ル・アーブル最大の船会社 — アジア・中南米航路",
          lienSuivant:
            "その船舶はル・アーブルのコンテナ輸送の大部分を占める。コロンビア、ブラジル、エクアドルからの航路。",
        },
        {
          role: "ヨーロッパ最大のコカイン流入地点 — 2023年に18トン押収",
          lienSuivant: "",
        },
      ],
    },

    "philippe-ribadeau-fcf-chine-havre": {
      titre: "フィリップ → リバドー＝デュマ → FCF → 中国 → ル・アーブル",
      resume:
        "マティニョンでのフィリップの官房長は2013年からFrance China Foundationのメンバーだ。FCFの共同創設者は彼の外交顧問である。フィリップはフランス最大の中国輸入玄関口の市長でもある。",
      domaine: "経済外交 / 中国の影響",
      consequence:
        "首相は中国の影響力ネットワークに組み込まれた人々に囲まれながら、同時にフランス最大の中国輸入港の市長でもある。マティニョンでの外交・港湾決定はル・アーブルに直接影響する。北京と交渉する官房長は、政治的上司の港を管理する同一人物である。",
      maillons: [
        {
          role: "首相 / ル・アーブル市長",
          lienSuivant:
            "リバドー＝デュマを官房長に、ルナンを外交顧問に任命。",
        },
        {
          role: "マティニョン官房長 — ENA Marc-Bloch卒 — FCFメンバー（2013年〜）",
          lienSuivant:
            "仏中影響力ネットワーク「France China Foundation」の2013年からのメンバー。",
        },
        {
          role: "仏中ネットワーク — ルナン（フィリップ顧問）が共同創設",
          lienSuivant:
            "FCFは中国が欧州の港に投資する文脈の中で、フランスのエリートを中国の意思決定者と結びつける。",
        },
        {
          role: "日中貿易 → ル・アーブル — 中国輸入品のフランスへの玄関口",
          lienSuivant: "",
        },
      ],
    },

    "philippe-barroux-echos-couverture": {
      titre: "フィリップ → バル（YL 2011）→ Les Échos（LVMH）→ 好意的な報道",
      resume:
        "フィリップとバル（Les Échos編集長）は同じYoung Leaders 2011の同期生だ。この新聞はマクロンと親密なベルナール・アルノー（LVMH）が所有している。",
      domaine: "メディア / 論調",
      consequence:
        "大統領候補とフランス有数の経済紙の編集長がエリートネットワークの同期生である。この新聞は世界最大の高級品グループに属しており、その会長はこの候補を首相に任命した大統領と緊密な関係を保っている。",
      maillons: [
        {
          role: "大統領候補 — Young Leader 2011",
          lienSuivant:
            "ダヴィッド・バルと同じFAF 2011期。2011〜2012年に共同セミナーに参加。",
        },
        {
          role: "Les Échos編集長 — Young Leader 2011",
          lienSuivant:
            "フランス有数の経済紙の編集方針を決定。",
        },
        {
          role: "経済紙 — ベルナール・アルノー所有",
          lienSuivant:
            "アルノーはマクロンの最も近いオリガルヒ的同盟者。LVMHはフランス最大の広告主。",
        },
        {
          role: "好意的報道 — フィリップの改革に対するポジティブな論調",
          lienSuivant: "",
        },
      ],
    },

    "philippe-bfm-cmacgm-media": {
      titre: "フィリップ → ル・アーブル → CMA CGM（サーデ）→ BFM TV → 好意的な報道",
      resume:
        "CMA CGM（フィリップが市長を務めるフランス最大の港を擁する）は2024年にBFM TVを買収した。BFMはその後、CMA CGM/ル・アーブルの関係について一切質問しないまま、フィリップに25分間の生放送時間を与えた。",
      domaine: "メディア / メディア集中",
      consequence:
        "候補者の地盤の港湾オペレーターが、その候補者を最も多く報じるメディアを所有している。これは教科書的なメディア利益相反だ：CMA CGMはル・アーブルの市長・候補者との良好な関係を維持することに直接的な利害を持ち、同時にその候補者についての世論を形成するメディアを所有している。",
      maillons: [
        {
          role: "ル・アーブル市長 — フランス最大のCMA CGM港",
          lienSuivant:
            "ル・アーブルはCMA CGMの主要ハブ。市の決定が船会社の業務に直接影響する。",
        },
        {
          role: "フランス最大の海運会社 — 資産400億ユーロ超",
          lienSuivant:
            "サーデは2024年にBFM TV（旧Altice/Drahi）を買収し、国内最大の24時間ニュースチャンネルのオーナーとなる。",
        },
        {
          role: "最大の24時間ニュースチャンネル — CMA CGM所有",
          lienSuivant:
            "BFMはCMA CGM/ル・アーブルの関係について質問せずにフィリップに25分の生放送枠を提供した。",
        },
        {
          role: "世論 — 偏った情報、メディア利益相反",
          lienSuivant: "",
        },
      ],
    },

    "philippe-macron-veil-franceinter": {
      titre: "フィリップ → マクロン → シビル・ヴェイユ（ENA）→ France Inter → 馴れ合い報道",
      resume:
        "Radio France会長はマクロンのENA同期生だ。France Interはフランス最大のラジオ局である。フィリップへのインタビューは、繰り返しセンシティブな話題を体系的に避けている。",
      domaine: "公共放送 / 任命",
      consequence:
        "フランス最大の公共ラジオ局の会長は、フィリップを任命した大統領の同期生だ。この任命の連鎖は、エリゼ宮と公共ラジオの編集方針の間に間接的な影響チャネルを生み出している。",
      maillons: [
        {
          role: "マクロン政権下の元首相 — Young Leader 2011",
          lienSuivant:
            "マクロンによって任命され、Young Leadersネットワークと権力の輪を共有する。",
        },
        {
          role: "大統領 — 公共放送人事への間接的影響力",
          lienSuivant:
            "Arcomが公共放送の幹部を任命する。マクロンはガバナンスに間接的に影響を与えている。",
        },
        {
          role: "Radio France会長 — ENA Senghor 2004（マクロンと同期）",
          lienSuivant:
            "マクロンのENA同期生。フランス最大のラジオ局France Interを統括。",
        },
        {
          role: "フランス最大のラジオ局 — 最も聴かれている朝の番組",
          lienSuivant: "",
        },
      ],
    },
  },

  it: {
    "philippe-macron-kohler-cmacgm": {
      titre: "Philippe → Macron → Kohler → CMA CGM",
      resume:
        "Il segretario generale dell'Élysée, Alexis Kohler, ha legami familiari con la dinastia armatoriale Aponte-Saadé. Philippe, sindaco del principale porto francese di CMA CGM, è stato nominato da Macron, il cui braccio destro è compromesso con la stessa compagnia di navigazione.",
      domaine: "Trasporto marittimo / Porto di Le Havre",
      consequence:
        "Il sindaco del principale porto francese viene nominato Primo Ministro da un presidente il cui braccio destro è sotto inchiesta formale per i suoi legami con l'industria marittima. Le decisioni portuali, doganali e urbanistiche per Le Havre vengono prese all'interno di questo ecosistema. CMA CGM (Saadé) ha successivamente acquisito BFM TV, diventando proprietaria del principale canale d'informazione continua — un cerchio completo potere-porto-media.",
      maillons: [
        {
          role: "Sindaco di Le Havre — principale porto francese di CMA CGM",
          lienSuivant:
            "Nominato Primo Ministro da Macron nel 2017. Entrambi sono Young Leaders (2011 e 2012).",
        },
        {
          role: "Presidente della Repubblica — Young Leader 2012",
          lienSuivant:
            "Nomina Alexis Kohler segretario generale dell'Élysée, la posizione più influente della presidenza.",
        },
        {
          role: "Segretario generale dell'Élysée — sotto inchiesta formale per conflitti di interessi",
          lienSuivant:
            "Legami familiari con la famiglia Aponte (MSC). Ha supervisionato decisioni riguardanti MSC e il settore marittimo da Bercy e poi dall'Élysée.",
        },
        {
          role: "Le due principali compagnie di navigazione che operano a Le Havre",
          lienSuivant: "",
        },
      ],
    },

    "philippe-atos-80kmh-radars": {
      titre: "Philippe → 80 km/h → Atos → autovelox automatici",
      resume:
        "Philippe ha imposto il limite di velocità di 80 km/h contro il parere di Macron, generando meccanicamente un aumento delle infrazioni stradali. Si è poi unito al consiglio di amministrazione di Atos, l'azienda che elabora i dati degli autovelox automatici.",
      domaine: "Sicurezza stradale / Dati digitali",
      consequence:
        "Il Primo Ministro che ha imposto una misura generando più infrazioni è entrato due anni dopo nel consiglio di amministrazione dell'azienda che elabora tali infrazioni (~70.000 €/anno). Il rapporto Philippe-Atos risale al 2006, ben prima di Matignon. La sequenza temporale — decisione pubblica poi beneficio privato — è uno schema classico di conflitto di interessi differito.",
      maillons: [
        {
          role: "Primo Ministro — personalmente promotore del limite di 80 km/h",
          lienSuivant:
            "Impone la misura degli 80 km/h il 1° luglio 2018, contro la volontà di Macron e l'opinione pubblica.",
        },
        {
          role: "La misura più impopolare del mandato Philippe",
          lienSuivant:
            "La riduzione della velocità genera meccanicamente più infrazioni, quindi più dati da elaborare dagli autovelox automatici.",
        },
        {
          role: "Sistema di controllo automatizzato — un mercato in espansione",
          lienSuivant:
            "L'elaborazione dei dati sulle infrazioni stradali è gestita da Atos, tramite contratti con lo Stato.",
        },
        {
          role: "Gruppo informatico — Philippe è nel consiglio di amministrazione dal 2020",
          lienSuivant: "",
        },
      ],
    },

    "philippe-areva-recapitalisation": {
      titre: "Philippe → Areva (lobbying) → Matignon → ricapitalizzazione da 5 mld €",
      resume:
        "Philippe è stato lobbista di Areva dal 2007 al 2010. Diventato Primo Ministro nel 2017, ha supervisionato la ricapitalizzazione di Areva/Orano da parte dello Stato per 5 miliardi di euro.",
      domaine: "Industria nucleare / Fondi pubblici",
      consequence:
        "L'ex lobbista di Areva salva il suo ex datore di lavoro con il denaro pubblico arrivato al potere. La perdita di 3,6 miliardi su UraMin è avvenuta nel 2007, lo stesso anno in cui Philippe è entrato in Areva come direttore degli affari pubblici. Il Primo Ministro che ha ristrutturato l'industria nucleare francese è l'ex responsabile delle pubbliche relazioni del gruppo in difficoltà.",
      maillons: [
        {
          role: "Direttore degli affari pubblici di Areva (2007-2010)",
          lienSuivant:
            "Lascia Areva per la carica di sindaco di Le Havre. Mantiene la sua rete nell'industria nucleare.",
        },
        {
          role: "Multinazionale nucleare — perdita di 3,6 mld € su UraMin",
          lienSuivant:
            "Lo scandalo UraMin (2007, durante la presenza di Philippe) ha precipitato la crisi finanziaria del gruppo.",
        },
        {
          role: "Ricapitalizzazione 2017 — 5 miliardi di euro di fondi pubblici",
          lienSuivant:
            "Il governo Philippe approva la ristrutturazione e la ricapitalizzazione di Areva, rinominata Orano.",
        },
        {
          role: "Contribuente francese — pagatore finale di 5 miliardi di euro",
          lienSuivant: "",
        },
      ],
    },

    "philippe-legoff-cmacgm-havre-drogue": {
      titre: "Philippe → Le Goff (YL 2011) → CMA CGM → Le Havre → narcotraffico",
      resume:
        "Philippe e Le Goff (responsabile della sicurezza di CMA CGM) sono entrambi Young Leaders 2011. Le Havre, feudo di Philippe, è il principale punto di ingresso della cocaina in Europa.",
      domaine: "Sicurezza portuale / Narcotraffico",
      consequence:
        "Il sindaco del principale porto di ingresso della cocaina in Europa e il responsabile della sicurezza del principale armatore di quello stesso porto si conoscono personalmente attraverso una rete d'élite transatlantica. Non si tratta di accusarli di complicità, ma di evidenziare la convergenza strutturale: la sicurezza portuale di fronte al narcotraffico è una questione in cui gli interessi del sindaco, dell'armatore e della FAF si intrecciano nell'opacità.",
      maillons: [
        {
          role: "Sindaco di Le Havre dal 2010 — Young Leader 2011",
          lienSuivant:
            "Stessa promozione FAF 2011 di Yann Le Goff. Due seminari di cinque giorni insieme.",
        },
        {
          role: "Responsabile della sicurezza di CMA CGM — Young Leader 2011",
          lienSuivant:
            "Responsabile della sicurezza delle operazioni di CMA CGM, inclusa la sicurezza dei container a Le Havre.",
        },
        {
          role: "Principale armatore a Le Havre — rotte verso Asia e America Latina",
          lienSuivant:
            "Le sue navi rappresentano una quota importante del traffico containerizzato a Le Havre. Rotte dalla Colombia, dal Brasile, dall'Ecuador.",
        },
        {
          role: "Principale punto di ingresso della cocaina in Europa — 18 tonnellate sequestrate nel 2023",
          lienSuivant: "",
        },
      ],
    },

    "philippe-ribadeau-fcf-chine-havre": {
      titre: "Philippe → Ribadeau-Dumas → FCF → Cina → Le Havre",
      resume:
        "Il capo di gabinetto di Philippe a Matignon è membro della France China Foundation dal 2013. Il co-fondatore della FCF è il suo consigliere diplomatico. Philippe è sindaco del principale porto francese per le importazioni cinesi.",
      domaine: "Diplomazia economica / Influenza cinese",
      consequence:
        "Il Primo Ministro è circondato da persone inserite nelle reti di influenza cinesi mentre è contemporaneamente sindaco del principale porto francese per le importazioni dalla Cina. Le decisioni diplomatiche e portuali prese a Matignon hanno un impatto diretto su Le Havre. Il capo di gabinetto che negozia con Pechino è lo stesso che amministra il porto del suo capo politico.",
      maillons: [
        {
          role: "Primo Ministro / Sindaco di Le Havre",
          lienSuivant:
            "Nomina Ribadeau-Dumas capo di gabinetto e Lenain consigliere diplomatico.",
        },
        {
          role: "Capo di gabinetto a Matignon — ENA Marc-Bloch — membro FCF dal 2013",
          lienSuivant:
            "Membro della France China Foundation dal 2013, rete di influenza franco-cinese.",
        },
        {
          role: "Rete franco-cinese — co-fondata da Lenain (consigliere di Philippe)",
          lienSuivant:
            "La FCF connette le élite francesi ai decisori cinesi, in un contesto in cui la Cina investe nei porti europei.",
        },
        {
          role: "Commercio sino-francese → Le Havre — porta d'ingresso delle importazioni cinesi in Francia",
          lienSuivant: "",
        },
      ],
    },

    "philippe-barroux-echos-couverture": {
      titre: "Philippe → Barroux (YL 2011) → Les Échos (LVMH) → copertura favorevole",
      resume:
        "Philippe e Barroux (caporedattore di Les Échos) provengono dalla stessa promozione Young Leaders 2011. Il giornale è di proprietà di Bernard Arnault (LVMH), vicino a Macron.",
      domaine: "Media / Copertura editoriale",
      consequence:
        "Un candidato alla presidenza e il caporedattore del principale quotidiano economico di Francia provengono dalla stessa promozione di una rete d'élite. Il giornale appartiene al più grande gruppo del lusso al mondo, il cui presidente intrattiene rapporti stretti con il presidente che ha nominato questo candidato Primo Ministro.",
      maillons: [
        {
          role: "Candidato alla presidenza — Young Leader 2011",
          lienSuivant:
            "Stessa promozione FAF 2011 di David Barroux. Seminari comuni nel 2011-2012.",
        },
        {
          role: "Caporedattore di Les Échos — Young Leader 2011",
          lienSuivant:
            "Determina la linea editoriale del principale quotidiano economico francese.",
        },
        {
          role: "Quotidiano economico — di proprietà di Bernard Arnault",
          lienSuivant:
            "Arnault è il più stretto alleato oligarchico di Macron. LVMH è il primo inserzionista pubblicitario di Francia.",
        },
        {
          role: "Copertura favorevole — trattamento editoriale positivo delle riforme di Philippe",
          lienSuivant: "",
        },
      ],
    },

    "philippe-bfm-cmacgm-media": {
      titre: "Philippe → Le Havre → CMA CGM (Saadé) → BFM TV → copertura favorevole",
      resume:
        "CMA CGM (il cui principale porto francese è governato da Philippe) ha acquisito BFM TV nel 2024. BFM ha poi concesso a Philippe 25 minuti di diretta senza una sola domanda sui legami CMA CGM/Le Havre.",
      domaine: "Media / Concentrazione mediatica",
      consequence:
        "L'operatore portuale del feudo del candidato possiede il media che lo copre maggiormente. È un caso da manuale di conflitto di interessi mediatico: CMA CGM ha un interesse diretto a mantenere buone relazioni con il sindaco/candidato di Le Havre e possiede simultaneamente il media che forma l'opinione pubblica su quel candidato.",
      maillons: [
        {
          role: "Sindaco di Le Havre — principale porto francese di CMA CGM",
          lienSuivant:
            "Le Havre è un hub fondamentale di CMA CGM. Le decisioni comunali influiscono direttamente sull'attività dell'armatore.",
        },
        {
          role: "Principale armatore francese — patrimonio >40 mld €",
          lienSuivant:
            "Saadé acquisisce BFM TV (ex Altice/Drahi) nel 2024, diventando proprietario del principale canale d'informazione continua.",
        },
        {
          role: "Principale canale d'informazione continua — di proprietà di CMA CGM",
          lienSuivant:
            "BFM ha concesso 25 minuti in diretta a Philippe senza domande sui legami CMA CGM/Le Havre.",
        },
        {
          role: "Opinione pubblica — informazione distorta, conflitto di interessi mediatico",
          lienSuivant: "",
        },
      ],
    },

    "philippe-macron-veil-franceinter": {
      titre: "Philippe → Macron → Sibyle Veil (ENA) → France Inter → copertura compiacente",
      resume:
        "La presidente di Radio France è compagna di promozione ENA di Macron. France Inter è la prima radio di Francia. Le interviste a Philippe evitano sistematicamente i temi sensibili.",
      domaine: "Media pubblici / Nomina",
      consequence:
        "La presidente della principale radio pubblica di Francia è una compagna di promozione del presidente che ha nominato Philippe. Questa catena di nomine crea un canale di influenza indiretto tra l'Élysée e la linea editoriale della radio pubblica.",
      maillons: [
        {
          role: "Ex Primo Ministro di Macron — Young Leader 2011",
          lienSuivant:
            "Nominato da Macron, con cui condivide la rete Young Leaders e il circolo del potere.",
        },
        {
          role: "Presidente — influenza indiretta sulle nomine dell'audiovisivo pubblico",
          lienSuivant:
            "Arcom nomina i presidenti dell'audiovisivo pubblico. Macron influenza indirettamente la governance.",
        },
        {
          role: "Presidente di Radio France — ENA Senghor 2004 (stessa promozione di Macron)",
          lienSuivant:
            "Compagna di promozione ENA di Macron. Dirige France Inter, la prima radio di Francia.",
        },
        {
          role: "Prima radio di Francia — la rassegna stampa mattutina più ascoltata",
          lienSuivant: "",
        },
      ],
    },
  },

  zh: {
    "philippe-macron-kohler-cmacgm": {
      titre: "菲利普 → 马克龙 → 科勒 → CMA CGM",
      resume:
        "爱丽舍宫秘书长亚历克西斯·科勒与航运王朝阿庞特-萨德家族存在家族联系。菲利普是CMA CGM在法国最大港口的市长，由马克龙任命，而马克龙的左右手正因与同一航运公司的关联而受到质疑。",
      domaine: "海运 / 勒阿弗尔港",
      consequence:
        "法国最大港口的市长被一位总统任命为总理，而该总统的心腹正因其与海运业的关联而受到正式调查。勒阿弗尔港务、海关和城市规划决策均在这一生态系统中作出。CMA CGM（萨德）随后收购了BFM TV，成为全国头号滚动新闻频道的所有者——权力-港口-媒体的闭合循环。",
      maillons: [
        {
          role: "勒阿弗尔市长 — CMA CGM法国最大港口",
          lienSuivant:
            "2017年由马克龙任命为总理。两人均为Young Leaders（分别为2011年和2012年）。",
        },
        {
          role: "共和国总统 — Young Leader 2012",
          lienSuivant:
            "任命亚历克西斯·科勒为爱丽舍宫秘书长，这是总统府最有权势的职位。",
        },
        {
          role: "爱丽舍宫秘书长 — 因利益冲突被正式立案调查",
          lienSuivant:
            "与阿庞特家族（MSC）存在家族联系。先后在财政部和爱丽舍宫监督了涉及MSC和海运领域的相关决策。",
        },
        {
          role: "在勒阿弗尔运营的两大航运公司",
          lienSuivant: "",
        },
      ],
    },

    "philippe-atos-80kmh-radars": {
      titre: "菲利普 → 时速80公里 → Atos → 自动测速摄像头",
      resume:
        "菲利普不顾马克龙的反对强行推行时速80公里限速，机械性地导致交通违规数量激增。此后他加入了处理自动测速摄像头数据的Atos公司董事会。",
      domaine: "道路安全 / 数字数据",
      consequence:
        "这位推行导致更多违规行为的首相，两年后加入了处理这些违规数据的公司董事会（年薪约7万欧元）。菲利普与Atos的关系可追溯至2006年，远早于马提农时期。公共决策在先、私人获益在后的时序，是延迟型利益冲突的典型模式。",
      maillons: [
        {
          role: "总理 — 时速80公里限速的亲身推动者",
          lienSuivant:
            "不顾马克龙的意愿和公众舆论，于2018年7月1日推行时速80公里措施。",
        },
        {
          role: "菲利普任期内最不受欢迎的措施",
          lienSuivant:
            "限速降低机械性地产生更多违规行为，即自动测速摄像头需处理的数据更多。",
        },
        {
          role: "自动执法系统 — 持续扩张的市场",
          lienSuivant:
            "道路违规数据的处理由Atos通过与国家签订的合同承担。",
        },
        {
          role: "IT集团 — 菲利普自2020年起担任董事",
          lienSuivant: "",
        },
      ],
    },

    "philippe-areva-recapitalisation": {
      titre: "菲利普 → Areva（游说）→ 马提农 → 50亿欧元增资",
      resume:
        "菲利普在2007年至2010年间担任Areva的说客。2017年就任总理后，他监督了国家对Areva/Orano高达50亿欧元的增资重组。",
      domaine: "核工业 / 公共资金",
      consequence:
        "这位Areva前说客在上台后用公款拯救了昔日的雇主。UraMin亏损36亿欧元发生在2007年——菲利普以公共事务总监身份加入Areva的同一年。主导法国核工业重组的总理，正是那家陷入困境集团的前公关负责人。",
      maillons: [
        {
          role: "Areva公共事务总监（2007-2010）",
          lienSuivant:
            "离开Areva出任勒阿弗尔市长。在核工业中保留其人脉网络。",
        },
        {
          role: "跨国核企业 — UraMin亏损36亿欧元",
          lienSuivant:
            "UraMin丑闻（2007年，菲利普任职期间）加速了集团的财务危机。",
        },
        {
          role: "2017年增资 — 50亿欧元公共资金",
          lienSuivant:
            "菲利普政府批准对更名为Orano的Areva进行重组和增资。",
        },
        {
          role: "法国纳税人 — 50亿欧元的最终买单者",
          lienSuivant: "",
        },
      ],
    },

    "philippe-legoff-cmacgm-havre-drogue": {
      titre: "菲利普 → 勒戈夫（YL 2011）→ CMA CGM → 勒阿弗尔 → 毒品走私",
      resume:
        "菲利普与勒戈夫（CMA CGM安保负责人）同为Young Leaders 2011届成员。菲利普的大本营勒阿弗尔是欧洲最大的可卡因入境点。",
      domaine: "港口安全 / 毒品走私",
      consequence:
        "欧洲最大可卡因入境港的市长与同一港口最大航运公司的安保负责人，通过一个跨大西洋精英网络相互熟识。这并非要指控二人同谋，而是要指出结构性的汇聚：面对毒品走私的港口安全问题，是市长、船东和FAF的利益在不透明中交织的议题。",
      maillons: [
        {
          role: "2010年起任勒阿弗尔市长 — Young Leader 2011",
          lienSuivant:
            "与扬·勒戈夫同属FAF 2011届。共同参加过两次为期五天的研讨会。",
        },
        {
          role: "CMA CGM安保负责人 — Young Leader 2011",
          lienSuivant:
            "负责CMA CGM运营安全，包括勒阿弗尔的集装箱安保。",
        },
        {
          role: "勒阿弗尔最大航运公司 — 亚洲/拉丁美洲航线",
          lienSuivant:
            "其船舶占勒阿弗尔集装箱运输的重要份额。航线来自哥伦比亚、巴西、厄瓜多尔。",
        },
        {
          role: "欧洲最大可卡因入境点 — 2023年查获18吨",
          lienSuivant: "",
        },
      ],
    },

    "philippe-ribadeau-fcf-chine-havre": {
      titre: "菲利普 → 里巴多-迪马 → FCF → 中国 → 勒阿弗尔",
      resume:
        "菲利普在马提农的内阁主任自2013年起是法中基金会成员。FCF的联合创始人是他的外交顾问。菲利普是法国对华进口最大门户港口的市长。",
      domaine: "经济外交 / 中国影响力",
      consequence:
        "这位总理周围都是嵌入中国影响力网络的人物，同时他还是法国最大对华进口港口的市长。马提农的外交和港务决策直接影响勒阿弗尔。与北京谈判的内阁主任，正是管理其政治老板港口的同一人。",
      maillons: [
        {
          role: "总理 / 勒阿弗尔市长",
          lienSuivant:
            "任命里巴多-迪马为内阁主任，任命勒南为外交顾问。",
        },
        {
          role: "马提农内阁主任 — ENA Marc-Bloch毕业 — 2013年起任FCF成员",
          lienSuivant:
            "自2013年起为法中影响力网络法中基金会成员。",
        },
        {
          role: "法中网络 — 由勒南（菲利普顾问）联合创立",
          lienSuivant:
            "在中国投资欧洲港口的背景下，FCF将法国精英与中国决策者相连接。",
        },
        {
          role: "中法贸易 → 勒阿弗尔 — 中国商品进入法国的门户",
          lienSuivant: "",
        },
      ],
    },

    "philippe-barroux-echos-couverture": {
      titre: "菲利普 → 巴鲁（YL 2011）→ Les Échos（LVMH）→ 有利报道",
      resume:
        "菲利普与巴鲁（Les Échos主编）同属Young Leaders 2011届。该报属于与马克龙关系密切的贝尔纳·阿尔诺（LVMH）所有。",
      domaine: "媒体 / 编辑立场",
      consequence:
        "一位总统候选人与法国主要财经日报的主编出自同一精英网络届次。该报属于全球最大奢侈品集团，其主席与任命该候选人为总理的总统关系密切。",
      maillons: [
        {
          role: "总统候选人 — Young Leader 2011",
          lienSuivant:
            "与大卫·巴鲁同属FAF 2011届。2011-2012年共同参加研讨会。",
        },
        {
          role: "Les Échos主编 — Young Leader 2011",
          lienSuivant:
            "主导法国主要财经日报的编辑方向。",
        },
        {
          role: "财经日报 — 贝尔纳·阿尔诺旗下",
          lienSuivant:
            "阿尔诺是马克龙最亲近的寡头盟友。LVMH是法国最大广告主。",
        },
        {
          role: "有利报道 — 对菲利普改革的正面编辑处理",
          lienSuivant: "",
        },
      ],
    },

    "philippe-bfm-cmacgm-media": {
      titre: "菲利普 → 勒阿弗尔 → CMA CGM（萨德）→ BFM TV → 有利报道",
      resume:
        "CMA CGM（菲利普担任其法国最大港口市长）于2024年收购了BFM TV。此后BFM为菲利普提供了25分钟直播时间，全程未提及CMA CGM/勒阿弗尔之间的关联。",
      domaine: "媒体 / 媒体集中",
      consequence:
        "候选人大本营的港口运营商拥有报道他最多的媒体。这是教科书式的媒体利益冲突：CMA CGM对维持与勒阿弗尔市长/候选人的良好关系有直接利益，同时拥有塑造公众对该候选人看法的媒体。",
      maillons: [
        {
          role: "勒阿弗尔市长 — CMA CGM法国最大港口",
          lienSuivant:
            "勒阿弗尔是CMA CGM的主要枢纽。市政决策直接影响航运公司的业务。",
        },
        {
          role: "法国最大航运公司 — 资产逾400亿欧元",
          lienSuivant:
            "萨德于2024年收购BFM TV（原Altice/Drahi），成为全国头号滚动新闻频道所有者。",
        },
        {
          role: "全国头号滚动新闻频道 — CMA CGM旗下",
          lienSuivant:
            "BFM为菲利普提供25分钟直播，未就CMA CGM/勒阿弗尔关联提问。",
        },
        {
          role: "公众舆论 — 信息失真，媒体利益冲突",
          lienSuivant: "",
        },
      ],
    },

    "philippe-macron-veil-franceinter": {
      titre: "菲利普 → 马克龙 → 西比尔·韦伊（ENA）→ France Inter → 讨好式报道",
      resume:
        "Radio France主席是马克龙的ENA同届同学。France Inter是法国收听率最高的广播电台。对菲利普的采访系统性地回避敏感话题。",
      domaine: "公共媒体 / 任命",
      consequence:
        "法国最大公共广播电台的负责人，是任命菲利普的总统的ENA同学。这条任命链在爱丽舍宫与公共广播编辑立场之间创造了一条间接影响渠道。",
      maillons: [
        {
          role: "马克龙政府前总理 — Young Leader 2011",
          lienSuivant:
            "由马克龙任命，共享Young Leaders网络与权力圈。",
        },
        {
          role: "总统 — 对公共广播任命的间接影响力",
          lienSuivant:
            "Arcom任命公共广播负责人。马克龙间接影响治理。",
        },
        {
          role: "Radio France主席 — ENA Senghor 2004届（与马克龙同届）",
          lienSuivant:
            "马克龙的ENA同届同学。掌管法国最大广播电台France Inter。",
        },
        {
          role: "法国最大广播电台 — 收听率最高的早间节目",
          lienSuivant: "",
        },
      ],
    },
  },
};
