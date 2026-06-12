export type QuartettArgument = {
  id: number;
  category: string;
  argument: string;
  objection: string;
};

export const argumentsList: QuartettArgument[] = [
  {
    id: 1,
    category: "Philosophische Argumente",
    argument: "Pflanzen haben auch Gefühle.",
    objection: "Pflanzen haben kein Nervensystem. Zudem verbraucht Tierhaltung aktuell mehr Pflanzen.",
  },
  {
    id: 2,
    category: "Philosophische Argumente",
    argument: "Ein Veganer mehr oder weniger ändert nichts.",
    objection: "Durchschnittlich 9+ Leben pro Jahr machen durchaus einen Unterschied.",
  },
  {
    id: 3,
    category: "Philosophische Argumente",
    argument: "Die große Mehrheit der Menschen isst Tierprodukte.",
    objection: "In der Geschichte waren sich Mehrheit und Moral oft uneinig. Zudem sind Tiere in der Mehrheit.",
  },
  {
    id: 4,
    category: "Philosophische Argumente",
    argument: "Das Fleisch im Supermarkt ist ja bereits tot.",
    objection: "Schon mal von Angebot und Nachfrage gehört?",
  },
  {
    id: 5,
    category: "Philosophische Argumente",
    argument: "Wir schenken Tieren das Leben, also dürfen wir es auch nehmen.",
    objection: "Laut dieser Logik dürften menschliche Eltern ihre Kinder schlachten und essen.",
  },
  {
    id: 6,
    category: "Philosophische Argumente",
    argument: "Man lebt nur einmal, also gönn dir!",
    objection: "Das Tier lebt auch nur einmal.",
  },
  {
    id: 7,
    category: "Philosophische Argumente",
    argument: "Alles in Maßen, einmal die Woche ist okay.",
    objection: "Das ist nicht weniger grausam, nur weniger oft grausam.",
  },
  {
    id: 8,
    category: "Philosophische Argumente",
    argument: "Auf einer einsamen Insel würdest du auch Tiere essen.",
    objection: "Vielleicht, aber würdest du Tiere essen, wenn es eigentlich nicht nötig wäre?",
  },
  {
    id: 9,
    category: "Philosophische Argumente",
    argument: "Vielleicht spüren Tiere gar keinen Schmerz.",
    objection: "Wir sehen nicht die Gefühle anderer, aber sie verhalten sich bezüglich Leidvermeidung wie wir.",
  },

  {
    id: 10,
    category: "Natur, Kultur & Religion",
    argument: "Es ist Tradition. Menschen haben schon immer Tierprodukte gegessen.",
    objection: "Eine lange Tradition rechtfertigt nichts, sonst gäbe es auch heute noch überall Sklaverei.",
  },
  {
    id: 11,
    category: "Natur, Kultur & Religion",
    argument: "Veganismus gefährdet meine Kultur und Identität.",
    objection: "Kultur und Identität besteht mehr aus den Menschen, mit denen wir essen, als aus dem Essen selbst.",
  },
  {
    id: 12,
    category: "Natur, Kultur & Religion",
    argument: "Fleischkonsum ist natürlich.",
    objection: "Krankheit, Tod und Gewalt sind natürlich, aber nicht gut.",
  },
  {
    id: 13,
    category: "Natur, Kultur & Religion",
    argument: "Der Mensch steht an der Spitze der Nahrungskette.",
    objection: "Das ist eine Beschreibung der Zustände, aber inwiefern rechtfertigt das die Zustände?",
  },
  {
    id: 14,
    category: "Natur, Kultur & Religion",
    argument: "Menschen sind Allesfresser, also sollen sie auch alles essen dürfen.",
    objection: "Fähigsein ist kein Synonym für gerechtfertigt sein.",
  },
  {
    id: 15,
    category: "Natur, Kultur & Religion",
    argument: "Die Tiere sterben ja sowieso irgendwann.",
    objection: "Menschen sterben auch irgendwann.",
  },
  {
    id: 16,
    category: "Natur, Kultur & Religion",
    argument: "Löwen essen auch Fleisch. Sie sind sogar darauf angewiesen.",
    objection: "Warum trägst du Kleidung, wenn du doch so ein Löwe bist?",
  },
  {
    id: 17,
    category: "Natur, Kultur & Religion",
    argument: "Mein Gott erlaubt es mir, (gewisses) Fleisch zu essen.",
    objection: "Erlaubnis bedeutet nicht Gebot. Außerdem wird der Himmel oft als vegan beschrieben.",
  },
  {
    id: 18,
    category: "Natur, Kultur & Religion",
    argument: "Tiere sind zum Essen da. Dafür wurden sie erschaffen.",
    objection: "Wieso würde Gott Tieren dann die Fähigkeit geben, Emotionen und Schmerzen zu spüren?",
  },

  {
    id: 19,
    category: "Dammbruchargumente",
    argument: "Tiere würden uns auch essen, wenn sie könnten.",
    objection: "Oh nein, mein schlimmster Alptraum ist es, von einer Kuh gejagt und gegessen zu werden.",
  },
  {
    id: 20,
    category: "Dammbruchargumente",
    argument: "Tiere würden sich unkontrolliert vermehren, wenn wir sie nicht essen.",
    objection: "Tiere werden künstlich gezüchtet. Bei sinkender Nachfrage wird das runtergeregelt.",
  },
  {
    id: 21,
    category: "Dammbruchargumente",
    argument: "Wenn alle vegan werden, würden Landwirte ihren Job verlieren.",
    objection: "Die Welt wird nicht von heute auf morgen vegan und der Wandel bringt neue Jobs mit sich.",
  },
  {
    id: 22,
    category: "Dammbruchargumente",
    argument: "Konsequente Veganer dürften ihr Haus nicht verlassen, da sonst Tiere sterben.",
    objection: "Diese Kleintiere werden auch dann sterben, wenn ich Zuhause bleibe.",
  },
  {
    id: 23,
    category: "Dammbruchargumente",
    argument: "Wenn ich vegan werde, ende ich schwach, blass und untergewichtig.",
    objection: "Google mal nach veganen Athletinnen und Athleten.",
  },
  {
    id: 24,
    category: "Dammbruchargumente",
    argument: "Ich kannte mal einen Veganer und der ist gestorben!",
    objection: "Das sind bloß Anekdoten. Zahlreiche Studien zeigen jedoch ein anderes Bild.",
  },
  {
    id: 25,
    category: "Dammbruchargumente",
    argument: "Wenn alle vegan werden würden, gäbe es nicht genug Essen für alle.",
    objection: "Tiere verwandeln nur einen Bruchteil ihres Futters zu Fleisch.",
  },
  {
    id: 26,
    category: "Dammbruchargumente",
    argument: "Wir müssen jagen, um Ökosysteme im Gleichgewicht zu halten.",
    objection: "Wieso werden Wildbestände vor der Jagd-Saison oft künstlich hochgeregelt?",
  },
  {
    id: 27,
    category: "Dammbruchargumente",
    argument: "Als nächstes schreibst du mir vor, was ich denken oder wen ich lieben soll!",
    objection: "Äh, nein?",
  },

  {
    id: 28,
    category: "Praktikabilität, Gesellschaft & Politik",
    argument: "Viele Anbauflächen sind nur für Tierhaltung nutzbar.",
    objection: "Oder für Wohnflächen, oder für Renaturierung …",
  },
  {
    id: 29,
    category: "Praktikabilität, Gesellschaft & Politik",
    argument: "Wir brauchen Tiere für Dünger.",
    objection: "Tierfutterproduktion verbraucht auch Dünger. Ohne Massentierhaltung hätten wir genug Dünger.",
  },
  {
    id: 30,
    category: "Praktikabilität, Gesellschaft & Politik",
    argument: "Fleischkonsum ist legal, daher kann es nicht so schlimm sein.",
    objection: "Gesetze ändern sich oft, Moral nicht.",
  },
  {
    id: 31,
    category: "Praktikabilität, Gesellschaft & Politik",
    argument: "Vegane Alternativen sind viel teurer als Tierprodukte.",
    objection: "Das stimmt nur, wenn man die billigsten Tierprodukte mit den teuersten Alternativen vergleicht.",
  },
  {
    id: 32,
    category: "Praktikabilität, Gesellschaft & Politik",
    argument: "Wir sollten erst menschliches Leid lösen.",
    objection: "Menschliches Leid wird es immer geben, aber wieso kann man nicht beides gleichzeitig angehen?",
  },
  {
    id: 33,
    category: "Praktikabilität, Gesellschaft & Politik",
    argument: "Der Anbau von Soja zerstört den Regenwald.",
    objection: "Der Großteil dieses Sojas wird an Tiere verfüttert.",
  },
  {
    id: 34,
    category: "Praktikabilität, Gesellschaft & Politik",
    argument: "Es ist eine persönliche Entscheidung, ob jemand Tierprodukte unterstützt.",
    objection: "Sobald es auf Kosten anderer geht, ist es nicht mehr eine persönliche Entscheidung.",
  },
  {
    id: 35,
    category: "Praktikabilität, Gesellschaft & Politik",
    argument: "Vegane Alternativen schmecken mir einfach nicht.",
    objection: "Geschmack passt sich sehr schnell an. Außerdem werden vegane Produkte immer besser.",
  },
  {
    id: 36,
    category: "Praktikabilität, Gesellschaft & Politik",
    argument: "Die Politik trägt die Verantwortung.",
    objection: "Politiker vertreten uns. Wenn wir keine Verantwortung übernehmen, dann auch nicht sie.",
  },

  {
    id: 37,
    category: "Gesundheit, Umwelt & Gesellschaft",
    argument: "Veganern mangelt es oft an Proteinen, Vitamin B12, Kalzium und so weiter.",
    objection: "In einer ausgewogenen veganen Ernährung fehlen diese Nährstoffe nicht, nur B12 muss supplementiert werden.",
  },
  {
    id: 38,
    category: "Gesundheit, Umwelt & Gesellschaft",
    argument: "Unsere Körper können pflanzliche Nährstoffe oft schlechter aufnehmen.",
    objection: "Wenn Menschenfleisch die beste Bioverfügbarkeit hätte, würde das Kanibalismus rechtfertigen?",
  },
  {
    id: 39,
    category: "Gesundheit, Umwelt & Gesellschaft",
    argument: "Warum supplementieren, wenn es auch mit Tierprodukten geht?",
    objection: "Wieso durch ein Tier jagen, wenn wir Supplemente auch direkt nehmen können?",
  },
  {
    id: 40,
    category: "Gesundheit, Umwelt & Gesellschaft",
    argument: "Gerade Kinder, Schwangere, Stillende und Ältere sollten Tierprodukte essen.",
    objection: "Auch für diese Gruppen kann man gut geplante vegan leben.",
  },
  {
    id: 41,
    category: "Gesundheit, Umwelt & Gesellschaft",
    argument: "Manche Menschen haben besondere Krankheiten, die Veganismus erschweren.",
    objection: "Für die wenigen Betroffenen gibt es vegane Ernährungsberatung.",
  },
  {
    id: 42,
    category: "Gesundheit, Umwelt & Gesellschaft",
    argument: "Vegane Ersatzprodukte sind oft hochverarbeitet.",
    objection: "Also isst Du keine Wurst oder Käse, richtig? Außerdem sind viele vegane Produkte kaum verarbeitet.",
  },
  {
    id: 43,
    category: "Gesundheit, Umwelt & Gesellschaft",
    argument: "Avokados und Mandeln sind schlimmer für die Umwelt als Fleisch.",
    objection: "Selbst wasserintensive Pflanzen verursachen sind oft deutlich nachhaltiger als Tierprodukte.",
  },
  {
    id: 44,
    category: "Gesundheit, Umwelt & Gesellschaft",
    argument: "Regionale Bio-Fleischproduktion ist nachhaltig.",
    objection: "Ist es dem Tier wichtig, ob es vom Mensch nebenan oder weit weg gegessen wird?",
  },
  {
    id: 45,
    category: "Gesundheit, Umwelt & Gesellschaft",
    argument: "Pestizide zerstören die Umwelt.",
    objection: "Für Tierprodukte werden zusätzlich große Mengen Futtermittel angebaut, die ebenfalls oft Pestizide verwenden.",
  },

  {
    id: 46,
    category: "Veganerinnen & Veganer",
    argument: "Veganer sind militant und missionieren ein extremes, absolutistisches Weltbild.",
    objection: "Für einen Permazid Rechenschaft zu ziehen ist nicht extrem.",
  },
  {
    id: 47,
    category: "Veganerinnen & Veganer",
    argument: "Veganer lügen und zeigen immer nur die schlimmsten Zustände der Industrie.",
    objection: "Und komischerweise werden ständig überall immer nur diese „schlimmsten Zustände“ erfasst?",
  },
  {
    id: 48,
    category: "Veganerinnen & Veganer",
    argument: "Veganer hassen Bauern und lieben Tiere mehr als Menschen.",
    objection: "Veganer stellen Tiere nicht über Menschen, sie fordern nur klare Grundrechte für Tiere.",
  },
  {
    id: 49,
    category: "Veganerinnen & Veganer",
    argument: "Veganer halten sich für was besseres und für moralisch überlegen.",
    objection: "Das stimmt häufig. Aber das ist eine Konsequenz des veganen Lebensstils, keine Motivation dafür.",
  },
  {
    id: 50,
    category: "Veganerinnen & Veganer",
    argument: "Veganer sind Heuchler, da sie SUVs fahren und jedes Jahr ein neues Handy haben.",
    objection: "Wieso sollten wir uns die Botschaftler anschauen und nicht die Botschaft?",
  },
  {
    id: 51,
    category: "Veganerinnen & Veganer",
    argument: "Veganer sind privilegiert und realitätsfern.",
    objection: "Anekdoten gibt es zu Genüge auch auf der Gegenseite.",
  },
  {
    id: 52,
    category: "Veganerinnen & Veganer",
    argument: "Hitler war Vegetarier.",
    objection: "Hitler hat auch geatmet.",
  },
  {
    id: 53,
    category: "Veganerinnen & Veganer",
    argument: "Warum lassen Veganer ihr Essen aussehen und schmecken wie Tierprodukte?",
    objection: "Weil Videospiele zocken, wenn man auch in Echt Leute abknallen und überfahren kann?",
  },
  {
    id: 54,
    category: "Veganerinnen & Veganer",
    argument: "Vegane Landwirtschaft tötet auch Tiere, zum Beispiel bei der Ernte.",
    objection: "„Nicht perfekt sein zu können“, rechtfertigt und nicht darin, gewaltsam zu sein.",
  },
];