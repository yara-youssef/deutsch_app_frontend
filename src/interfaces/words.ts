// import {word_type , word_gender} from '../words/WordsInterface'


// // export const words1 = [
// //     {
// //       "word": "veranstalten",
// //       "type": "verb",
// //       "translation": "to organize/arrange",
// //       "example": "Wir veranstalten nächste Woche eine Konferenz.",
// //       "example_EN": "We are organizing a conference next week."
// //     },
// //     {
// //       "word": "leiten",
// //       "type": "verb",
// //       "translation": "to lead",
// //       "example": "Er leitet das Projektteam.",
// //       "example_EN": "He leads the project team."
// //     },
// //     {
// //       "word": "anleiten",
// //       "type": "verb",
// //       "translation": "to instruct/guide",
// //       "example": "Der Lehrer leitet die Schüler bei ihrer Arbeit an.",
// //       "example_EN": "The teacher instructs the students in their work."
// //     },
// //     {
// //       "word": "vorhin",
// //       "type": "adverb",
// //       "translation": "a moment ago",
// //       "example": "Ich habe ihn vorhin gesehen.",
// //       "example_EN": "I saw him a moment ago."
// //     },
// //     {
// //       "word": "einfließen lassen",
// //       "type": "verb",
// //       "translation": "to incorporate/include",
// //       "example": "Wir sollten diese Informationen in unseren Bericht einfließen lassen.",
// //       "example_EN": "We should incorporate this information into our report."
// //     },
// //     {
// //       "word": "Ansatz",
// //       "type": "noun",
// //       "translation": "approach/method",
// //       "example": "Wir müssen einen neuen Ansatz für das Problem finden.",
// //       "example_EN": "We need to find a new approach to the problem."
// //     },
// //     {
// //       "word": "verfassen",
// //       "type": "verb",
// //       "translation": "to compose/write",
// //       "example": "Er hat einen Artikel für die Zeitung verfasst.",
// //       "example_EN": "He wrote an article for the newspaper."
// //     },
// //     {
// //       "word": "Verlag",
// //       "type": "noun",
// //       "translation": "publishing house",
// //       "example": "Mein Buch wurde von einem renommierten Verlag veröffentlicht.",
// //       "example_EN": "My book was published by a renowned publishing house."
// //     },
// //     {
// //       "word": "Erstellungsphase",
// //       "type": "noun",
// //       "translation": "creation phase",
// //       "example": "Wir befinden uns derzeit in der Erstellungsphase des Projekts.",
// //       "example_EN": "We are currently in the creation phase of the project."
// //     },
// //     {
// //       "word": "benennen",
// //       "type": "verb",
// //       "translation": "to name",
// //       "example": "Können Sie den Autor des Buches benennen?",
// //       "example_EN": "Can you name the author of the book?"
// //     },
// //     {
// //       "word": "Erschließung",
// //       "type": "noun",
// //       "translation": "development/exploitation",
// //       "example": "Die Erschließung neuer Märkte ist für das Unternehmen wichtig.",
// //       "example_EN": "The development of new markets is important for the company."
// //     },
// //     {
// //       "word": "nähert sich an",
// //       "type": "verb",
// //       "translation": "to approach",
// //       "example": "Der Zug nähert sich dem Bahnhof.",
// //       "example_EN": "The train is approaching the station."
// //     },
// //     {
// //       "word": "eingeben",
// //       "type": "verb",
// //       "translation": "to enter/input",
// //       "example": "Bitte geben Sie Ihr Passwort ein.",
// //       "example_EN": "Please enter your password."
// //     },
// //     {
// //       "word": "allerwichtigste",
// //       "type": "adjective",
// //       "translation": "most important",
// //       "example": "Das allerwichtigste ist, dass wir pünktlich ankommen.",
// //       "example_EN": "The most important thing is that we arrive on time."
// //     },
// //     {
// //       "word": "erschlossen",
// //       "type": "adjective",
// //       "translation": "developed/explored",
// //       "example": "Das Land wurde erst kürzlich touristisch erschlossen.",
// //       "example_EN": "The country has only recently been developed for tourism."
// //     },
// //     {
// //       "word": "ausgewertet werden",
// //       "type": "verb",
// //       "translation": "to be evaluated/analyzed",
// //       "example": "Die Daten müssen noch ausgewertet werden.",
// //       "example_EN": "The data still needs to be analyzed."
// //     },
// //     {
// //       "word": "anpassen",
// //       "type": "verb",
// //       "translation": "to adapt/adjust",
// //       "example": "Wir müssen unsere Pläne an die neuen Bedingungen anpassen.",
// //       "example_EN": "We need to adapt our plans to the new conditions."
// //     },
// //     {
// //       "word": "beschaffen",
// //       "type": "verb",
// //       "translation": "to procure/obtain",
// //       "example": "Wir müssen die benötigten Materialien beschaffen.",
// //       "example_EN": "We need to procure the necessary materials."
// //     },
// //     {
// //       "word": "versorgen",
// //       "type": "verb",
// //       "translation": "to supply/provide",
// //       "example": "Die Hilfsorganisation versorgt die Flüchtlinge mit Nahrungsmitteln.",
// //       "example_EN": "The aid organization supplies the refugees with food."
// //     },
// //     {
// //       "word": "abhaken",
// //       "type": "verb",
// //       "translation": "to tick/check off",
// //       "example": "Wir können diesen Punkt von der Liste abhaken.",
// //       "example_EN": "We can tick this item off the list."
// //     },
// //     {
// //       "word": "aufbewahren",
// //       "type": "verb",
// //       "translation": "to store/keep",
// //       "example": "Bitte bewahren Sie die Dokumente sicher auf.",
// //       "example_EN": "Please keep the documents safe."
// //     },
// //     {
// //       "word": "vorhanden",
// //       "type": "adjective",
// //       "translation": "existing/present",
// //       "example": "Sind alle erforderlichen Unterlagen vorhanden?",
// //       "example_EN": "Are all the necessary documents present?"
// //     },
// //     {
// //       "word": "relevant sein sollte",
// //       "type": "verb",
// //       "translation": "should be relevant",
// //       "example": "Es ist fraglich, ob diese Information relevant sein sollte.",
// //       "example_EN": "It's questionable whether this information should be relevant."
// //     },
// //     {
// //       "word": "räumlichkeiten",
// //       "type": "noun",
// //       "translation": "premises/spaces",
// //       "example": "Die Veranstaltung findet in den Räumlichkeiten des Hotels statt.",
// //       "example_EN": "The event takes place in the hotel's premises."
// //     },
// //         {
// //           "word": "allerkurze",
// //           "type": "adjective",
// //           "translation": "very short",
// //           "example": "Ich habe eine allerkurze Frage.",
// //           "example_EN": "I have a very short question."
// //         },
// //         {
// //           "word": "genau",
// //           "type": "adverb",
// //           "translation": "exactly/precisely",
// //           "example": "Bitte geben Sie genau an, was passiert ist.",
// //           "example_EN": "Please specify exactly what happened."
// //         },
// //         {
// //           "word": "abonieren",
// //           "type": "verb",
// //           "translation": "to subscribe",
// //           "example": "Sie können unseren Newsletter abonnieren, um auf dem Laufenden zu bleiben.",
// //           "example_EN": "You can subscribe to our newsletter to stay updated."
// //         },
// //         {
// //           "word": "anclicken",
// //           "type": "verb",
// //           "translation": "to click on",
// //           "example": "Bitte anklicken, um fortzufahren.",
// //           "example_EN": "Please click on to proceed."
// //         },
// //         {
// //           "word": "erheben",
// //           "type": "verb",
// //           "translation": "to raise/collect/gather",
// //           "example": "Die Regierung erhebt Steuern von den Bürgern.",
// //           "example_EN": "The government collects taxes from citizens."
// //         },
// //         {
// //           "word": "nachnutzen",
// //           "type": "verb",
// //           "translation": "to reuse",
// //           "example": "Wir sollten versuchen, diese Ressource zu nachnutzen, um Kosten zu sparen.",
// //           "example_EN": "We should try to reuse this resource to save costs."
// //         },
// //         {
// //           "word": "bestehenden Daten",
// //           "type": "noun phrase",
// //           "translation": "existing data",
// //           "example": "Die Analyse basiert auf den bestehenden Daten.",
// //           "example_EN": "The analysis is based on existing data."
// //         },
// //         {
// //           "word": "etabliert",
// //           "type": "adjective",
// //           "translation": "established",
// //           "example": "Das Unternehmen ist als führender Anbieter in der Branche etabliert.",
// //           "example_EN": "The company is established as a leading provider in the industry."
// //         },
// //         {
// //           "word": "nachvollziehbarkeit",
// //           "type": "noun",
// //           "translation": "comprehensibility",
// //           "example": "Die Nachvollziehbarkeit des Berichts ist entscheidend.",
// //           "example_EN": "The comprehensibility of the report is crucial."
// //         },
// //         {
// //           "word": "annähren",
// //           "type": "verb",
// //           "translation": "to approach",
// //           "example": "Die beiden Parteien nähern sich langsam einer Einigung.",
// //           "example_EN": "The two parties are slowly approaching an agreement."
// //         },
// //         {
// //           "word": "ablegen",
// //           "type": "verb",
// //           "translation": "to deposit/store",
// //           "example": "Bitte legen Sie Ihre Jacke dort ab.",
// //           "example_EN": "Please store your jacket there."
// //         },
// //         {
// //           "word": "verstoßen",
// //           "type": "verb",
// //           "translation": "to violate",
// //           "example": "Das Verhalten verstößt gegen die Regeln.",
// //           "example_EN": "The behavior violates the rules."
// //         },
// //         {
// //           "word": "abraten",
// //           "type": "verb",
// //           "translation": "to advise against",
// //           "example": "Ich rate dir ab, diesen Weg zu gehen.",
// //           "example_EN": "I advise you against taking this path."
// //         },
// //         {
// //           "word": "zwingend",
// //           "type": "adjective",
// //           "translation": "mandatory/compulsory",
// //           "example": "Die Vorlage des Ausweises ist zwingend erforderlich.",
// //           "example_EN": "Presenting the ID is mandatory."
// //         },
// //         {
// //           "word": "gewährleisten",
// //           "type": "verb",
// //           "translation": "to guarantee/ensure",
// //           "example": "Wir müssen die Sicherheit unserer Kunden gewährleisten.",
// //           "example_EN": "We need to ensure the safety of our customers."
// //         },
// //         {
// //           "word": "erklimmern",
// //           "type": "verb",
// //           "translation": "to climb",
// //           "example": "Die Bergsteiger versuchen, den Gipfel zu erklimmen.",
// //           "example_EN": "The climbers are trying to climb the summit."
// //         },
// //         {
// //           "word": "anregen",
// //           "type": "verb",
// //           "translation": "to stimulate/encourage",
// //           "example": "Diese Maßnahme soll Innovationen in der Region anregen.",
// //           "example_EN": "This measure is intended to stimulate innovation in the region."
// //         },
// //         {
// //           "word": "ansprechpartner",
// //           "type": "noun",
// //           "translation": "contact person",
// //           "example": "Bei Fragen wenden Sie sich bitte an Ihren Ansprechpartner.",
// //           "example_EN": "If you have any questions, please contact your contact person."
// //         },
// //         {
// //           "word": "anschaffung",
// //           "type": "noun",
// //           "translation": "acquisition/purchase",
// //           "example": "Die Anschaffung neuer Geräte ist geplant.",
// //           "example_EN": "The acquisition of new equipment is planned."
// //         },
// //         {
// //           "word": "schüchtern",
// //           "type": "adjective",
// //           "translation": "shy",
// //           "example": "Er ist ein schüchterner Junge.",
// //           "example_EN": "He is a shy boy."
// //         },
// //         {
// //           "word": "entschlagen",
// //           "type": "verb",
// //           "translation": "to defeat",
// //           "example": "Der Held entschlug den Drachen und rettete das Königreich.",
// //           "example_EN": "The hero defeated the dragon and saved the kingdom."
// //         },
// //         {
// //           "word": "zugänglich",
// //           "type": "adjective",
// //           "translation": "accessible",
// //           "example": "Die Informationen sind für alle zugänglich.",
// //           "example_EN": "The information is accessible to everyone."
// //         }
      
// // ];

// // export const words2 = [
// //     {
// //       "word": "vertreten",
// //       "type": "verb",
// //       "translation": "to represent",
// //       "example": "Der Anwalt wird Sie vor Gericht vertreten.",
// //       "example_EN": "The lawyer will represent you in court."
// //     },
// //     {
// //       "word": "begleiten",
// //       "type": "verb",
// //       "translation": "to accompany",
// //       "example": "Ich werde dich zum Arzt begleiten.",
// //       "example_EN": "I will accompany you to the doctor."
// //     },
// //     {
// //       "word": "beauftragte",
// //       "type": "noun",
// //       "translation": "representative/agent",
// //       "example": "Der Beauftragte des Kunden wird uns morgen besuchen.",
// //       "example_EN": "The customer's representative will visit us tomorrow."
// //     },
// //     {
// //       "word": "verbindlich",
// //       "type": "adjective",
// //       "translation": "binding/obligatory",
// //       "example": "Die Unterschrift unter dem Vertrag ist verbindlich.",
// //       "example_EN": "The signature on the contract is binding."
// //     },
// //     {
// //       "word": "Anbindung",
// //       "type": "noun",
// //       "translation": "connection/link",
// //       "example": "Die Anbindung an das öffentliche Verkehrsnetz ist hier sehr gut.",
// //       "example_EN": "The connection to the public transport network is very good here."
// //     },
// //     {
// //       "word": "umsetzen",
// //       "type": "verb",
// //       "translation": "to implement",
// //       "example": "Wir müssen diese Ideen in die Praxis umsetzen.",
// //       "example_EN": "We need to implement these ideas in practice."
// //     },
// //     {
// //       "word": "vorstand",
// //       "type": "noun",
// //       "translation": "board of directors",
// //       "example": "Der Vorstand des Unternehmens trifft sich einmal im Monat.",
// //       "example_EN": "The company's board of directors meets once a month."
// //     },
// //     {
// //       "word": "sparen / einsparen",
// //       "type": "verb",
// //       "translation": "to save",
// //       "example": "Wir müssen Geld sparen, um unsere Ziele zu erreichen.",
// //       "example_EN": "We need to save money to achieve our goals."
// //     },
// //     {
// //       "word": "richten",
// //       "type": "verb",
// //       "translation": "to direct/align",
// //       "example": "Bitte richten Sie sich nach den Anweisungen.",
// //       "example_EN": "Please align yourselves with the instructions."
// //     },
// //     {
// //       "word": "beeintragen",
// //       "type": "verb",
// //       "translation": "to contribute",
// //       "example": "Die Mitarbeiter beeintragen zum Erfolg des Projekts bei.",
// //       "example_EN": "The employees contribute to the success of the project."
// //     },
// //     {
// //       "word": "abgewiegelt",
// //       "type": "adjective",
// //       "translation": "downplayed",
// //       "example": "Die Gefahr wurde vom Experten als abgewiegelt betrachtet.",
// //       "example_EN": "The expert downplayed the danger."
// //     },
// //     {
// //       "word": "ruhestand",
// //       "type": "noun",
// //       "translation": "retirement",
// //       "example": "Nach 40 Jahren im Unternehmen geht er in den Ruhestand.",
// //       "example_EN": "After 40 years in the company, he is retiring."
// //     },
// //     {
// //       "word": "vorhanden",
// //       "type": "adjective",
// //       "translation": "existing/present",
// //       "example": "Sind alle erforderlichen Unterlagen vorhanden?",
// //       "example_EN": "Are all the necessary documents present?"
// //     },
// //     {
// //       "word": "fleißig",
// //       "type": "adjective",
// //       "translation": "diligent/hardworking",
// //       "example": "Die Studenten arbeiten fleißig an ihren Projekten.",
// //       "example_EN": "The students are diligently working on their projects."
// //     },
// //     {
// //       "word": "entsprechend",
// //       "type": "adverb",
// //       "translation": "accordingly",
// //       "example": "Wir werden die Anfrage entsprechend Ihrer Bedürfnisse bearbeiten.",
// //       "example_EN": "We will process the request according to your needs."
// //     },
// //     {
// //       "word": "aufarbeiten",
// //       "type": "verb",
// //       "translation": "to process/work on",
// //       "example": "Wir müssen die Daten aufarbeiten, bevor wir sie analysieren können.",
// //       "example_EN": "We need to process the data before we can analyze it."
// //     },
// //     {
// //       "word": "vereidigt",
// //       "type": "adjective",
// //       "translation": "sworn in",
// //       "example": "Der neue Präsident wurde gestern vereidigt.",
// //       "example_EN": "The new president was sworn in yesterday."
// //     },
// //     {
// //       "word": "hirsch",
// //       "type": "noun",
// //       "translation": "deer",
// //       "example": "Der Jäger hat einen Hirsch im Wald gesehen.",
// //       "example_EN": "The hunter saw a deer in the forest."
// //     },
// //     {
// //       "word": "verteilen",
// //       "type": "verb",
// //       "translation": "to distribute",
// //       "example": "Wir müssen die Flugblätter im ganzen Stadtgebiet verteilen.",
// //       "example_EN": "We need to distribute the flyers throughout the city."
// //     },
// //     {
// //       "word": "teilen",
// //       "type": "verb",
// //       "translation": "to share",
// //       "example": "Er hat seine Sorgen mit mir geteilt.",
// //       "example_EN": "He shared his worries with me."
// //     },
// //     {
// //       "word": "anteil",
// //       "type": "noun",
// //       "translation": "share/portion",
// //       "example": "Die Aktionäre erhalten einen Anteil am Gewinn des Unternehmens.",
// //       "example_EN": "The shareholders receive a share of the company's profits."
// //     },
// //     {
// //       "word": "vorheben",
// //       "type": "verb",
// //       "translation": "to emphasize",
// //       "example": "Wir müssen die wichtigsten Punkte in unserem Bericht vorheben.",
// //       "example_EN": "We need to emphasize the key points in our report."
// //     },
// //     {
// //       "word": "heben",
// //       "type": "verb",
// //       "translation": "to lift/raise",
// //       "example": "Der Kran kann schwere Lasten heben.",
// //       "example_EN": "The crane can lift heavy loads."
// //     },
// //     {
// //       "word": "erschließung",
// //       "type": "noun",
// //       "translation": "development/exploitation",
// //       "example": "Die Erschließung neuer Märkte ist für das Unternehmen wichtig.",
// //       "example_EN": "The development of new markets is important for the company."
// //     },
// //     {
// //         "word": "umsprechen",
// //         "type": "verb",
// //         "translation": "to discuss around",
// //         "example": "Lass uns das Thema umsprechen und verschiedene Perspektiven betrachten.",
// //         "example_EN": "Let's discuss the topic around and consider different perspectives."
// //       },
// //       {
// //         "word": "ansprechen",
// //         "type": "verb",
// //         "translation": "to address/mention",
// //         "example": "Der Redner wird wichtige Themen in seiner Rede ansprechen.",
// //         "example_EN": "The speaker will address important topics in his speech."
// //       },
// //       {
// //         "word": "fortsetzung",
// //         "type": "noun",
// //         "translation": "continuation/sequel",
// //         "example": "Der Film hat eine interessante Fortsetzung.",
// //         "example_EN": "The movie has an interesting sequel."
// //       },
// //       {
// //         "word": "bescheinen",
// //         "type": "verb",
// //         "translation": "to certify/attest",
// //         "example": "Das Zeugnis bescheint ihre guten Leistungen.",
// //         "example_EN": "The certificate attests to her good performance."
// //       },
// //       {
// //         "word": "verstetigt",
// //         "type": "adjective",
// //         "translation": "stabilized/regularized",
// //         "example": "Die verstetigten Arbeitsabläufe verbesserten die Effizienz des Unternehmens.",
// //         "example_EN": "The stabilized workflows improved the efficiency of the company."
// //       },
// //       {
// //         "word": "entwurf",
// //         "type": "noun",
// //         "translation": "draft",
// //         "example": "Der Architekt präsentierte den Entwurf des neuen Gebäudes.",
// //         "example_EN": "The architect presented the draft of the new building."
// //       },
// //       {
// //         "word": "entwerfen",
// //         "type": "verb",
// //         "translation": "to design",
// //         "example": "Der Designer wird das Logo für unsere Firma entwerfen.",
// //         "example_EN": "The designer will design the logo for our company."
// //       },
// //       {
// //         "word": "auffördern",
// //         "type": "verb",
// //         "translation": "to encourage/promote",
// //         "example": "Die Regierung wird Programme auffördern, die die Integration fördern.",
// //         "example_EN": "The government will promote programs that encourage integration."
// //       },
// //       {
// //         "word": "fördern",
// //         "type": "verb",
// //         "translation": "to promote/support",
// //         "example": "Die Stiftung fördert Projekte im Bereich Bildung und Gesundheit.",
// //         "example_EN": "The foundation supports projects in the fields of education and health."
// //       },
// //       {
// //         "word": "vorlagen",
// //         "type": "noun",
// //         "translation": "templates",
// //         "example": "Wir verwenden standardisierte Vorlagen für unsere Präsentationen.",
// //         "example_EN": "We use standardized templates for our presentations."
// //       },
// //       {
// //         "word": "aufforderung",
// //         "type": "noun",
// //         "translation": "request/demand",
// //         "example": "Die Aufforderung zur Einreichung von Vorschlägen wurde veröffentlicht.",
// //         "example_EN": "The request for proposal submissions has been published."
// //       },
// //       {
// //         "word": "übergreifen",
// //         "type": "verb",
// //         "translation": "to spread/extend",
// //         "example": "Das Feuer griff auf die benachbarten Gebäude über.",
// //         "example_EN": "The fire spread to the neighboring buildings."
// //       },
// //       {
// //         "word": "holen",
// //         "type": "verb",
// //         "translation": "to fetch/get",
// //         "example": "Kannst du mir bitte eine Tasse Kaffee holen?",
// //         "example_EN": "Can you please get me a cup of coffee?"
// //       },
// //       {
// //         "word": "einholen",
// //         "type": "verb",
// //         "translation": "to catch up/overtake",
// //         "example": "Er versucht, seinen Rückstand auf die anderen Läufer einzuholen.",
// //         "example_EN": "He is trying to catch up with the other runners."
// //       },
// //       {
// //         "word": "suchbegriffe",
// //         "type": "noun",
// //         "translation": "search terms",
// //         "example": "Die Suchbegriffe erleichtern es den Benutzern, die gewünschten Informationen zu finden.",
// //         "example_EN": "The search terms make it easier for users to find the desired information."
// //       },
// //       {
// //         "word": "herauspicken",
// //         "type": "verb",
// //         "translation": "to pick out/select",
// //         "example": "Er konnte die wichtigsten Informationen aus dem Text herauspicken.",
// //         "example_EN": "He was able to pick out the key information from the text."
// //       },
// //       {
// //         "word": "heraus",
// //         "type": "adverb",
// //         "translation": "out",
// //         "example": "Die Katze ist heraus aus dem Karton gekommen.",
// //         "example_EN": "The cat came out of the box."
// //       },
// //       {
// //         "word": "auslaufen",
// //         "type": "verb",
// //         "translation": "to expire/run out",
// //         "example": "Der Vertrag läuft nächsten Monat aus.",
// //         "example_EN": "The contract expires next month."
// //       },
// //       {
// //         "word": "annehmen",
// //         "type": "verb",
// //         "translation": "to assume/accept",
// //         "example": "Er nahm das Angebot des Unternehmens an.",
// //         "example_EN": "He accepted the company's offer."
// //       },
// //       {
// //         "word": "herausfinden",
// //         "type": "verb",
// //         "translation": "to find out/discover",
// //         "example": "Wir müssen herausfinden, wer für das Projekt verantwortlich ist.",
// //         "example_EN": "We need to find out who is responsible for the project."
// //       },
// //       {
// //         "word": "zugang / zugriff",
// //         "type": "noun",
// //         "translation": "access",
// //         "example": "Für den Zugang zu den Daten benötigen Sie einen Zugriffsschlüssel.",
// //         "example_EN": "You need an access key for accessing the data."
// //       },
// //       {
// //         "word": "hoffen / erhoffen",
// //         "type": "verb",
// //         "translation": "to hope",
// //         "example": "Wir hoffen auf gutes Wetter für das Wochenende.",
// //         "example_EN": "We hope for good weather for the weekend."
// //       },
// //       {
// //         "word": "urteilen / beurteilen",
// //         "type": "verb",
// //         "translation": "to judge/assess",
// //         "example": "Man sollte nicht voreilig urteilen, ohne alle Fakten zu kennen.",
// //         "example_EN": "One should not judge hastily without knowing all the facts."
// //       },
// //       {
// //         "word": "abdecken / decken",
// //         "type": "verb",
// //         "translation": "to cover",
// //         "example": "Das Regendach deckt den Picknicktisch ab.",
// //         "example_EN": "The rain cover protects the picnic table."
// //       },
// //       {
// //         "word": "zurückgekehrt",
// //         "type": "adjective",
// //         "translation": "returned",
// //         "example": "Nach seinem Urlaub ist er zurückgekehrt und hat sofort wieder mit der Arbeit begonnen.",
// //         "example_EN": "After his vacation, he returned and immediately resumed work."
// //       },
// //       {
// //         "word": "umgekehrt",
// //         "type": "adverb",
// //         "translation": "vice versa",
// //         "example": "Der Lehrer erklärte zuerst die Theorie und zeigte dann, wie sie in der Praxis angewendet wird, oder umgekehrt.",
// //         "example_EN": "The teacher first explained the theory and then showed how it is applied in practice, or vice versa."
// //       }
// // ];

// // export const words3 = [
// //     {
// //       "word": "datenerhebung",
// //       "type": "noun",
// //       "translation": "data collection",
// //       "example": "Die Datenerhebung ist ein wichtiger Schritt in der Forschung.",
// //       "example_EN": "Data collection is an important step in research."
// //     },
// //     {
// //       "word": "vermute",
// //       "type": "verb",
// //       "translation": "to assume/suspect",
// //       "example": "Ich vermute, dass er heute nicht zur Arbeit kommen wird.",
// //       "example_EN": "I suspect he won't come to work today."
// //     },
// //     {
// //       "word": "betrachten",
// //       "type": "verb",
// //       "translation": "to consider/view",
// //       "example": "Man sollte das Problem aus verschiedenen Blickwinkeln betrachten.",
// //       "example_EN": "One should consider the problem from different perspectives."
// //     },
// //     {
// //       "word": "beteiligung",
// //       "type": "noun",
// //       "translation": "participation/involvement",
// //       "example": "Die Beteiligung der Bürger ist entscheidend für den Erfolg des Projekts.",
// //       "example_EN": "Citizen participation is crucial for the success of the project."
// //     },
// //     {
// //       "word": "Anforderung",
// //       "type": "noun",
// //       "translation": "requirement/demand",
// //       "example": "Die Anforderungen an die Bewerber sind hoch.",
// //       "example_EN": "The requirements for applicants are high."
// //     },
// //     {
// //       "word": "Aufforderung",
// //       "type": "noun",
// //       "translation": "request/prompt",
// //       "example": "Die Aufforderung zur Teilnahme am Workshop wurde an alle Mitarbeiter gesendet.",
// //       "example_EN": "The request to participate in the workshop was sent to all employees."
// //     },
// //     {
// //       "word": "leiten",
// //       "type": "verb",
// //       "translation": "to lead/manage",
// //       "example": "Er leitet das Projektteam.",
// //       "example_EN": "He leads the project team."
// //     },
// //     {
// //       "word": "betreiben",
// //       "type": "verb",
// //       "translation": "to operate/run",
// //       "example": "Sie betreiben ein erfolgreiches Geschäft.",
// //       "example_EN": "They run a successful business."
// //     },
// //     {
// //       "word": "aufstellen",
// //       "type": "verb",
// //       "translation": "to set up/establish",
// //       "example": "Die Firma hat neue Richtlinien aufgestellt.",
// //       "example_EN": "The company has established new guidelines."
// //     },
// //     {
// //       "word": "erheben",
// //       "type": "verb",
// //       "translation": "to raise/collect/gather",
// //       "example": "Die Regierung erhebt Steuern von den Bürgern.",
// //       "example_EN": "The government collects taxes from citizens."
// //     },
// //     {
// //       "word": "Zeitlupentempo",
// //       "type": "noun",
// //       "translation": "slow motion",
// //       "example": "Die Szene wurde im Zeitlupentempo gezeigt.",
// //       "example_EN": "The scene was shown in slow motion."
// //     },
// //     {
// //       "word": "ausgerechnet",
// //       "type": "adverb",
// //       "translation": "precisely/just",
// //       "example": "Ausgerechnet heute hat er seinen Autoschlüssel verloren.",
// //       "example_EN": "Just today he lost his car keys."
// //     },
// //     {
// //       "word": "regelricht",
// //       "type": "adjective",
// //       "translation": "normally correct",
// //       "example": "Der Vorgang verläuft regelricht.",
// //       "example_EN": "The process is proceeding normally."
// //     },
// //     {
// //       "word": "Gestaltet sein",
// //       "type": "verb",
// //       "translation": "to be shaped",
// //       "example": "Der Erfolg des Projekts wird davon gestaltet sein, wie gut wir zusammenarbeiten.",
// //       "example_EN": "The success of the project will be shaped by how well we collaborate."
// //     },
// //     {
// //       "word": "vorgefertige",
// //       "type": "adjective",
// //       "translation": "prefabricated",
// //       "example": "Die Möbel sind vorgefertigt und müssen nur noch zusammengebaut werden.",
// //       "example_EN": "The furniture is prefabricated and only needs to be assembled."
// //     },
// //     {
// //       "word": "Leinwand",
// //       "type": "noun",
// //       "translation": "canvas/screen",
// //       "example": "Der Künstler malte ein Bild auf eine Leinwand.",
// //       "example_EN": "The artist painted a picture on a canvas."
// //     },
// //     {
// //       "word": "ausreizen",
// //       "type": "verb",
// //       "translation": "to push to the limit",
// //       "example": "Er versuchte, seine Fähigkeiten vollständig auszureizen.",
// //       "example_EN": "He tried to push his abilities to the limit."
// //     },
// //     {
// //       "word": "ansprechend",
// //       "type": "adjective",
// //       "translation": "appealing/attractive",
// //       "example": "Das neue Design ist sehr ansprechend.",
// //       "example_EN": "The new design is very appealing."
// //     },
// //     {
// //       "word": "Schweigen",
// //       "type": "noun",
// //       "translation": "silence",
// //       "example": "Nach seinem Vortrag herrschte Schweigen im Raum.",
// //       "example_EN": "There was silence in the room after his presentation."
// //     },
// //     {
// //       "word": "projiziert",
// //       "type": "adjective",
// //       "translation": "projected",
// //       "example": "Die Umsatzzahlen wurden auf die Leinwand projiziert.",
// //       "example_EN": "The revenue figures were projected onto the screen."
// //     },
// //     {
// //       "word": "Anschreiben",
// //       "type": "noun",
// //       "translation": "cover letter",
// //       "example": "Das Anschreiben sollte Ihre Motivation für die Stelle erklären.",
// //       "example_EN": "The cover letter should explain your motivation for the position."
// //     },
// //     {
// //       "word": "Vermerkten Sie sich",
// //       "type": "verb",
// //       "translation": "to make a note",
// //       "example": "Bitte vermerken Sie sich die wichtigsten Punkte aus dem Meeting.",
// //       "example_EN": "Please make a note of the key points from the meeting."
// //     },
// //     {
// //       "word": "Helden",
// //       "type": "noun",
// //       "translation": "heroes",
// //       "example": "Die Feuerwehrmänner wurden als Helden gefeiert.",
// //       "example_EN": "The firefighters were celebrated as heroes."
// //     },
// //     {
// //         "word": "er nickt",
// //         "type": "verb",
// //         "translation": "he nods",
// //         "example": "Er nickt zustimmend während der Besprechung.",
// //         "example_EN": "He nods in agreement during the meeting."
// //       },
// //       {
// //         "word": "bereitgestellt",
// //         "type": "adjective",
// //         "translation": "provided/made available",
// //         "example": "Die Informationen wurden rechtzeitig bereitgestellt.",
// //         "example_EN": "The information was provided in a timely manner."
// //       },
// //       {
// //         "word": "sich anrichten",
// //         "type": "verb",
// //         "translation": "to prepare oneself",
// //         "example": "Sie müssen sich auf das Vorstellungsgespräch anrichten.",
// //         "example_EN": "You need to prepare yourself for the job interview."
// //       },
// //       {
// //         "word": "Luftig",
// //         "type": "adjective",
// //         "translation": "airy/spacious",
// //         "example": "Die Wohnung ist schön luftig.",
// //         "example_EN": "The apartment is nicely spacious."
// //       },
// //       {
// //         "word": "bespricht der Referent",
// //         "type": "verb",
// //         "translation": "the speaker discusses",
// //         "example": "Der Referent bespricht die aktuellen Trends auf dem Markt.",
// //         "example_EN": "The speaker discusses the current trends in the market."
// //       },
// //       {
// //         "word": "Bestandteile",
// //         "type": "noun",
// //         "translation": "components/parts",
// //         "example": "Die Bestandteile des Produkts müssen sorgfältig ausgewählt werden.",
// //         "example_EN": "The components of the product must be carefully chosen."
// //       },
// //       {
// //         "word": "zuständigen",
// //         "type": "adjective",
// //         "translation": "responsible",
// //         "example": "Bitte wenden Sie sich an die zuständige Abteilung.",
// //         "example_EN": "Please contact the responsible department."
// //       },
// //       {
// //         "word": "anschaulich",
// //         "type": "adjective",
// //         "translation": "illustrative/descriptive",
// //         "example": "Der Lehrer erklärte das Thema auf anschauliche Weise.",
// //         "example_EN": "The teacher explained the topic in an illustrative manner."
// //       },
// //       {
// //         "word": "anhand",
// //         "type": "preposition",
// //         "translation": "by means of/using",
// //         "example": "Wir werden das Problem anhand von Beispielen erklären.",
// //         "example_EN": "We will explain the problem using examples."
// //       },
// //       {
// //         "word": "bewerbungsmappe",
// //         "type": "noun",
// //         "translation": "application folder/portfolio",
// //         "example": "Die Bewerbungsmappe sollte alle relevanten Dokumente enthalten.",
// //         "example_EN": "The application folder should contain all relevant documents."
// //       },
// //       {
// //         "word": "Personaler",
// //         "type": "noun",
// //         "translation": "HR staff/recruiters",
// //         "example": "Die Personaler werden die Bewerbungen sorgfältig prüfen.",
// //         "example_EN": "The HR staff will carefully review the applications."
// //       },
// //       {
// //         "word": "Kreis",
// //         "type": "noun",
// //         "translation": "circle/group",
// //         "example": "Die Diskussion fand im kleinen Kreis statt.",
// //         "example_EN": "The discussion took place in a small group."
// //       }
  
// // ];

// // export const words4 = [
// //     {
// //     "word": "vorkommen",
// //     "type": "verb",
// //     "translation": "to occur",
// //     "example": "Solche Fehler sollten nicht vorkommen.",
// //     "example_EN": "Such mistakes should not occur."
// //   },
// //   {
// //     "word": "Einschlägige Berufserfahrung",
// //     "type": "noun",
// //     "translation": "relevant work experience",
// //     "example": "Für diese Stelle ist einschlägige Berufserfahrung erforderlich.",
// //     "example_EN": "Relevant work experience is required for this position."
// //   },
// //   {
// //     "word": "Kontaktfreude",
// //     "type": "noun",
// //     "translation": "sociability",
// //     "example": "Für den Vertrieb ist Kontaktfreude eine wichtige Eigenschaft.",
// //     "example_EN": "For sales, sociability is an important trait."
// //   },
// //   {
// //     "word": "Rechtschreibung",
// //     "type": "noun",
// //     "translation": "spelling",
// //     "example": "Eine gute Rechtschreibung ist in vielen Berufen wichtig.",
// //     "example_EN": "Good spelling is important in many professions."
// //   },
// //   {
// //     "word": "auskennen",
// //     "type": "verb",
// //     "translation": "to be familiar with",
// //     "example": "Er kennt sich gut mit Computern aus.",
// //     "example_EN": "He is familiar with computers."
// //   },
// //   {
// //     "word": "gezögert",
// //     "type": "adjective",
// //     "translation": "hesitated",
// //     "example": "Er hat nicht lange gezögert, bevor er die Entscheidung traf.",
// //     "example_EN": "He didn't hesitate long before making the decision."
// //   },
// //   {
// //     "word": "abgegeben",
// //     "type": "verb",
// //     "translation": "submitted/handed in",
// //     "example": "Die Bewerbung wurde fristgerecht abgegeben.",
// //     "example_EN": "The application was submitted on time."
// //   },
// //   {
// //     "word": "agil",
// //     "type": "adjective",
// //     "translation": "agile",
// //     "example": "Ein agiles Unternehmen kann schnell auf Veränderungen reagieren.",
// //     "example_EN": "An agile company can respond quickly to changes."
// //   },
// //   {
// //     "word": "einbringen",
// //     "type": "verb",
// //     "translation": "to bring in/contribute",
// //     "example": "Die Mitarbeiter können ihre Ideen in das Projekt einbringen.",
// //     "example_EN": "Employees can bring their ideas into the project."
// //   },
// //   {
// //     "word": "verbringen",
// //     "type": "verb",
// //     "translation": "to spend (time)",
// //     "example": "Sie verbringt viel Zeit damit, Musik zu hören.",
// //     "example_EN": "She spends a lot of time listening to music."
// //   },
// //   {
// //     "word": "schwager",
// //     "type": "noun",
// //     "translation": "brother-in-law",
// //     "example": "Mein Schwager kommt heute zu Besuch.",
// //     "example_EN": "My brother-in-law is coming to visit today."
// //   },
// //   {
// //     "word": "Eigenschaften",
// //     "type": "noun",
// //     "translation": "qualities/attributes",
// //     "example": "Zu den wichtigsten Eigenschaften eines Managers gehören Führungsstärke und Kommunikationsfähigkeit.",
// //     "example_EN": "Leadership and communication skills are among the most important qualities of a manager."
// //   },
// //   {
// //     "word": "ansprechen",
// //     "type": "verb",
// //     "translation": "to address",
// //     "example": "Der Vortrag wird verschiedene Themen ansprechen.",
// //     "example_EN": "The presentation will address various topics."
// //   },
// //   {
// //     "word": "geldverkehr",
// //     "type": "noun",
// //     "translation": "financial transactions",
// //     "example": "Die Bank ist verantwortlich für den Geldverkehr ihrer Kunden.",
// //     "example_EN": "The bank is responsible for its customers' financial transactions."
// //   },
// //   {
// //     "word": "kaum",
// //     "type": "adverb",
// //     "translation": "hardly/barely",
// //     "example": "Er hat kaum Zeit für ein Mittagessen.",
// //     "example_EN": "He hardly has time for lunch."
// //   },
// //   {
// //     "word": "reiseverkehr",
// //     "type": "noun",
// //     "translation": "travel traffic",
// //     "example": "Während der Ferienzeit ist der Reiseverkehr besonders stark.",
// //     "example_EN": "During the holiday season, travel traffic is particularly heavy."
// //   },
// //   {
// //     "word": "bisherigen",
// //     "type": "adjective",
// //     "translation": "previous",
// //     "example": "Der Kandidat hat gute Bewertungen von seinen bisherigen Arbeitgebern erhalten.",
// //     "example_EN": "The candidate received good reviews from his previous employers."
// //   },
// //   {
// //     "word": "abwechslung",
// //     "type": "noun",
// //     "translation": "variety",
// //     "example": "Ein Job mit viel Abwechslung kann sehr interessant sein.",
// //     "example_EN": "A job with a lot of variety can be very interesting."
// //   },
// //   {
// //     "word": "vergleichbar",
// //     "type": "adjective",
// //     "translation": "comparable",
// //     "example": "Die beiden Produkte sind vergleichbar in Qualität und Preis.",
// //     "example_EN": "The two products are comparable in quality and price."
// //   },
// //   {
// //     "word": "gegeben",
// //     "type": "adjective",
// //     "translation": "given",
// //     "example": "Unter den gegebenen Umständen war es die beste Entscheidung.",
// //     "example_EN": "Under the given circumstances, it was the best decision."
// //   },
// //   {
// //     "word": "kollegial",
// //     "type": "adjective",
// //     "translation": "collegial",
// //     "example": "Die Arbeitsatmosphäre ist sehr kollegial.",
// //     "example_EN": "The working atmosphere is very collegial."
// //   },
// //   {
// //     "word": "wiederspruch",
// //     "type": "noun",
// //     "translation": "contradiction",
// //     "example": "Es gibt einen Widerspruch zwischen seinen Worten und seinen Taten.",
// //     "example_EN": "There is a contradiction between his words and his actions."
// //   },
// //   {
// //     "word": "reiseleiter",
// //     "type": "noun",
// //     "translation": "tour guide",
// //     "example": "Der Reiseleiter zeigte den Touristen die Sehenswürdigkeiten der Stadt.",
// //     "example_EN": "The tour guide showed the tourists the sights of the city."
// //   },
// //   {
// //     "word": "und zwar",
// //     "type": "phrase",
// //     "translation": "specifically/namely",
// //     "example": "Ich habe zwei Lieblingsspeisen, und zwar Pizza und Sushi.",
// //     "example_EN": "I have two favorite foods, namely pizza and sushi."
// //   },
// //   {
// //     "word": "verschlechtern",
// //     "type": "verb",
// //     "translation": "to worsen/deteriorate",
// //     "example": "Die Situation hat sich in den letzten Monaten verschlechtert.",
// //     "example_EN": "The situation has worsened over the last few months."
// //   },
// //   {
// //     "word": "entgegen",
// //     "type": "preposition",
// //     "translation": "against/towards",
// //     "example": "Die Entscheidung steht den Interessen des Unternehmens entgegen.",
// //     "example_EN": "The decision goes against the interests of the company."
// //   },
// //   {
// //     "word": "schaltern",
// //     "type": "noun",
// //     "translation": "counter/switch",
// //     "example": "Sie können Ihre Fahrkarten am Schalter kaufen.",
// //     "example_EN": "You can buy your tickets at the counter."
// //   },
// //   {
// //     "word": "das Essensgeldzuschuss",
// //     "type": "noun",
// //     "translation": "meal allowance",
// //     "example": "Manche Arbeitgeber bieten einen Essensgeldzuschuss für ihre Mitarbeiter an.",
// //     "example_EN": "Some employers provide a meal allowance for their employees."
// //   },
// //   {
// //     "word": "enthalten",
// //     "type": "verb",
// //     "translation": "to contain/include",
// //     "example": "Das Paket enthält alle notwendigen Dokumente.",
// //     "example_EN": "The package contains all the necessary documents."
// //   },
// //   {
// //     "word": "gemusst",
// //     "type": "verb",
// //     "translation": "had to",
// //     "example": "Er hat gestern Abend arbeiten gemusst.",
// //     "example_EN": "He had to work last night."
// //   },
// //   {
// //     "word": "Arbeit am katalog",
// //     "type": "noun",
// //     "translation": "work on the catalog",
// //     "example": "Sie arbeitet am Katalog für die neue Produktreihe.",
// //     "example_EN": "She is working on the catalog for the new product line."
// //   },
// //   {
// //     "word": "zufall",
// //     "type": "noun",
// //     "translation": "coincidence",
// //     "example": "Es war reiner Zufall, dass sie sich getroffen haben.",
// //     "example_EN": "It was pure coincidence that they met."
// //   },
// //   {
// //     "word": "abgemacht",
// //     "type": "adjective",
// //     "translation": "agreed/settled",
// //     "example": "Gut, abgemacht! Wir treffen uns morgen um 9 Uhr.",
// //     "example_EN": "Okay, it's settled! We'll meet tomorrow at 9 a.m."
// //   }
// // ];

// // export const words5 = [
// //     {
// //       "word": "erheblich",
// //       "type": "adjective",
// //       "translation": "considerable/significant",
// //       "example": "Die Kosten für das Projekt sind erheblich gestiegen.",
// //       "example_EN": "The costs for the project have risen significantly."
// //     },
// //     {
// //       "word": "entspricht",
// //       "type": "verb",
// //       "translation": "corresponds",
// //       "example": "Das Ergebnis entspricht nicht unseren Erwartungen.",
// //       "example_EN": "The result does not correspond to our expectations."
// //     },
// //     {
// //       "word": "dann",
// //       "type": "adverb",
// //       "translation": "then",
// //       "example": "Wir treffen uns um 10 Uhr, und dann gehen wir zum Mittagessen.",
// //       "example_EN": "We'll meet at 10 a.m., and then we'll go to lunch."
// //     },
// //     {
// //       "word": "annehmen",
// //       "type": "verb",
// //       "translation": "to assume",
// //       "example": "Wir können nicht einfach annehmen, dass alles gut gehen wird.",
// //       "example_EN": "We can't just assume that everything will go well."
// //     },
// //     {
// //       "word": "befürchten",
// //       "type": "verb",
// //       "translation": "to fear",
// //       "example": "Ich befürchte, dass es morgen regnen wird.",
// //       "example_EN": "I fear that it will rain tomorrow."
// //     },
// //     {
// //       "word": "fürchten",
// //       "type": "verb",
// //       "translation": "to be afraid",
// //       "example": "Die Kinder fürchten sich vor dem Dunkeln.",
// //       "example_EN": "The children are afraid of the dark."
// //     },
// //     {
// //       "word": "wohl oder übel",
// //       "type": "phrase",
// //       "translation": "whether one likes it or not",
// //       "example": "Ich muss wohl oder übel mit dem Zug fahren, da mein Auto kaputt ist.",
// //       "example_EN": "Whether I like it or not, I have to take the train because my car is broken."
// //     },
// //     {
// //       "word": "fruchtbar",
// //       "type": "adjective",
// //       "translation": "fruitful/productive",
// //       "example": "Die Diskussion war sehr fruchtbar und führte zu neuen Ideen.",
// //       "example_EN": "The discussion was very fruitful and led to new ideas."
// //     },
// //     {
// //       "word": "einige dazu nicht",
// //       "type": "phrase",
// //       "translation": "some do not",
// //       "example": "Einige waren damit einverstanden, aber einige dazu nicht.",
// //       "example_EN": "Some agreed with it, but some do not."
// //     },
// //     {
// //       "word": "wann wirst du gelobt",
// //       "type": "phrase",
// //       "translation": "when will you be praised",
// //       "example": "Wann wirst du für deine harte Arbeit gelobt?",
// //       "example_EN": "When will you be praised for your hard work?"
// //     },
// //     {
// //       "word": "Ansporn",
// //       "type": "noun",
// //       "translation": "incentive/motivation",
// //       "example": "Die Aussicht auf eine Beförderung war ein Ansporn für ihn, hart zu arbeiten.",
// //       "example_EN": "The prospect of a promotion was an incentive for him to work hard."
// //     },
// //     {
// //       "word": "mehr anzugehen",
// //       "type": "phrase",
// //       "translation": "to tackle more",
// //       "example": "Wir müssen entscheiden, wie wir das Projekt angehen und was wir noch mehr angehen müssen.",
// //       "example_EN": "We need to decide how to approach the project and what more to tackle."
// //     },
// //     {
// //       "word": "hervorheben",
// //       "type": "verb",
// //       "translation": "to emphasize/highlight",
// //       "example": "Es ist wichtig, die Vorteile dieses Produkts hervorzuheben.",
// //       "example_EN": "It's important to emphasize the benefits of this product."
// //     },
// //     {
// //       "word": "untersuchen",
// //       "type": "verb",
// //       "translation": "to investigate/examine",
// //       "example": "Die Polizei untersucht den Vorfall.",
// //       "example_EN": "The police are investigating the incident."
// //     },
// //     {
// //       "word": "überschwänglich",
// //       "type": "adjective",
// //       "translation": "effusive/excessive",
// //       "example": "Seine überschwängliche Freude über den Sieg war offensichtlich.",
// //       "example_EN": "His effusive joy over the victory was evident."
// //     },
// //     {
// //       "word": "verunsicherung",
// //       "type": "noun",
// //       "translation": "insecurity/uncertainty",
// //       "example": "Die Verunsicherung der Anleger führte zu einem Rückgang der Aktienkurse.",
// //       "example_EN": "Investor uncertainty led to a decline in stock prices."
// //     },
// //     {
// //       "word": "schmeicheln",
// //       "type": "verb",
// //       "translation": "to flatter",
// //       "example": "Es schmeichelt mir, dass du an mich gedacht hast.",
// //       "example_EN": "It flatters me that you thought of me."
// //     },
// //     {
// //       "word": "aufrichtig",
// //       "type": "adjective",
// //       "translation": "sincere",
// //       "example": "Sie sprach mit aufrichtiger Bewunderung über ihre Leistungen.",
// //       "example_EN": "She spoke with sincere admiration for her achievements."
// //     },
// //     {
// //       "word": "Darüber hinaus",
// //       "type": "phrase",
// //       "translation": "furthermore/moreover",
// //       "example": "Die Website bietet Informationen über die Produkte. Darüber hinaus gibt es Tipps zur Verwendung.",
// //       "example_EN": "The website provides information about the products. Furthermore, it offers usage tips."
// //     },
// //     {
// //       "word": "gliedern",
// //       "type": "verb",
// //       "translation": "to structure",
// //       "example": "Die Präsentation ist klar gegliedert und leicht verständlich.",
// //       "example_EN": "The presentation is well-structured and easy to understand."
// //     },
// //     {
// //       "word": "angemessen",
// //       "type": "adjective",
// //       "translation": "appropriate/suitable",
// //       "example": "Die Maßnahmen zur Sicherheit sind angemessen und wirksam.",
// //       "example_EN": "The safety measures are appropriate and effective."
// //     },
// //         {
// //           "word": "wahrnehmen",
// //           "type": "verb",
// //           "translation": "to perceive/notice",
// //           "example": "Es ist wichtig, die Bedürfnisse der Kunden wahrzunehmen.",
// //           "example_EN": "It's important to perceive the needs of the customers."
// //         },
// //         {
// //           "word": "fraglich",
// //           "type": "adjective",
// //           "translation": "questionable/doubtful",
// //           "example": "Es ist fraglich, ob er seine Versprechen einhalten wird.",
// //           "example_EN": "It is doubtful whether he will keep his promises."
// //         },
// //         {
// //           "word": "nachschlagen",
// //           "type": "verb",
// //           "translation": "to look up/refer to",
// //           "example": "Wenn Sie ein unbekanntes Wort finden, können Sie es im Wörterbuch nachschlagen.",
// //           "example_EN": "If you come across an unfamiliar word, you can look it up in the dictionary."
// //         },
// //         {
// //           "word": "laissez-faire",
// //           "type": "adjective/noun",
// //           "translation": "laissez-faire",
// //           "example": "Der Chef bevorzugt einen laissez-faire Führungsstil.",
// //           "example_EN": "The boss prefers a laissez-faire leadership style."
// //         },
// //         {
// //           "word": "locker",
// //           "type": "adjective",
// //           "translation": "casual/easy-going",
// //           "example": "Die Atmosphäre im Büro ist sehr locker und freundlich.",
// //           "example_EN": "The atmosphere in the office is very casual and friendly."
// //         },
// //         {
// //           "word": "sachlich",
// //           "type": "adjective",
// //           "translation": "objective/factual",
// //           "example": "Die Diskussion verlief sachlich und konstruktiv.",
// //           "example_EN": "The discussion was objective and constructive."
// //         },
// //         {
// //           "word": "befielt",
// //           "type": "verb",
// //           "translation": "commanded/ordered",
// //           "example": "Der General befahl seinen Truppen, sich zurückzuziehen.",
// //           "example_EN": "The general commanded his troops to retreat."
// //         },
// //         {
// //           "word": "befehlen",
// //           "type": "verb",
// //           "translation": "to command/to order",
// //           "example": "Der Lehrer befiehlt den Schülern, ruhig zu sein.",
// //           "example_EN": "The teacher commands the students to be quiet."
// //         },
// //         {
// //           "word": "gerecht",
// //           "type": "adjective",
// //           "translation": "fair/just",
// //           "example": "Die Entscheidung war gerecht und wurde von allen akzeptiert.",
// //           "example_EN": "The decision was fair and accepted by all."
// //         },
// //         {
// //           "word": "führungsstil",
// //           "type": "noun",
// //           "translation": "leadership style",
// //           "example": "Der autoritäre Führungsstil hat oft eine geringe Mitarbeiterzufriedenheit zur Folge.",
// //           "example_EN": "The authoritarian leadership style often results in low employee satisfaction."
// //         },
// //         {
// //           "word": "geworden",
// //           "type": "adjective",
// //           "translation": "become",
// //           "example": "Er ist zu einem angesehenen Experten auf seinem Gebiet geworden.",
// //           "example_EN": "He has become a respected expert in his field."
// //         }
// // ];

// // export const words6 = [
// //     {
// //       "word": "gebraulich",
// //       "type": "adjective",
// //       "translation": "usable/practical",
// //       "example": "Dieses Werkzeug ist sehr gebraulich und vielseitig einsetzbar.",
// //       "example_EN": "This tool is very usable and versatile."
// //     },
// //     {
// //       "word": "vertraut",
// //       "type": "adjective",
// //       "translation": "familiar",
// //       "example": "Das Thema ist mir vertraut, da ich bereits darüber gelesen habe.",
// //       "example_EN": "The topic is familiar to me as I have already read about it."
// //     },
// //     {
// //       "word": "einbringen",
// //       "type": "verb",
// //       "translation": "to bring in/contribute",
// //       "example": "Die neue Mitarbeiterin wird frischen Wind in das Team einbringen.",
// //       "example_EN": "The new employee will bring fresh ideas to the team."
// //     },
// //     {
// //       "word": "verbergern",
// //       "type": "verb",
// //       "translation": "to conceal/hide",
// //       "example": "Er versucht, seine wahren Absichten zu verbergen.",
// //       "example_EN": "He tries to conceal his true intentions."
// //     },
// //     {
// //       "word": "Aufbau",
// //       "type": "noun",
// //       "translation": "structure/building",
// //       "example": "Der Aufbau des neuen Gebäudes ist fast abgeschlossen.",
// //       "example_EN": "The construction of the new building is almost completed."
// //     },
// //     {
// //       "word": "regle über Erfahrung",
// //       "type": "phrase",
// //       "translation": "rule over experience",
// //       "example": "Die Entscheidungen sollten nicht nur auf Regeln, sondern auch auf Erfahrung basieren.",
// //       "example_EN": "Decisions should be based not only on rules but also on experience."
// //     },
// //     {
// //       "word": "verfüge über Erfahrung",
// //       "type": "phrase",
// //       "translation": "have experience",
// //       "example": "Sie verfügt über langjährige Erfahrung in der Softwareentwicklung.",
// //       "example_EN": "She has many years of experience in software development."
// //     },
// //     {
// //       "word": "Abwechslung",
// //       "type": "noun",
// //       "translation": "variety",
// //       "example": "Ein Job mit viel Abwechslung kann motivierend sein.",
// //       "example_EN": "A job with a lot of variety can be motivating."
// //     },
// //     {
// //       "word": "Freude",
// //       "type": "noun",
// //       "translation": "joy",
// //       "example": "Die Arbeit macht mir große Freude.",
// //       "example_EN": "I take great joy in my work."
// //     },
// //     {
// //       "word": "tatkräftig",
// //       "type": "adjective",
// //       "translation": "energetic/dynamic",
// //       "example": "Er ist ein tatkräftiger Mitarbeiter und bringt immer neue Ideen ein.",
// //       "example_EN": "He is an energetic employee and always brings in new ideas."
// //     },
// //     {
// //       "word": "ratlos",
// //       "type": "adjective",
// //       "translation": "puzzled/perplexed",
// //       "example": "Nach dem Gespräch war er ratlos und wusste nicht, was er tun sollte.",
// //       "example_EN": "After the conversation, he was puzzled and didn't know what to do."
// //     },
// //     {
// //       "word": "praxisfern",
// //       "type": "adjective",
// //       "translation": "theoretical/detached from reality",
// //       "example": "Seine Vorschläge sind oft praxisfern und lassen sich schwer umsetzen.",
// //       "example_EN": "His suggestions are often theoretical and difficult to implement."
// //     },
// //     {
// //       "word": "feste",
// //       "type": "adjective",
// //       "translation": "fixed/set",
// //       "example": "Die Termine stehen bereits fest und können nicht mehr geändert werden.",
// //       "example_EN": "The dates are already fixed and cannot be changed anymore."
// //     },
// //     {
// //       "word": "gewinn",
// //       "type": "noun",
// //       "translation": "profit/gain",
// //       "example": "Das Unternehmen hat im letzten Quartal einen hohen Gewinn erzielt.",
// //       "example_EN": "The company made a significant profit last quarter."
// //     },
// //     {
// //       "word": "abschnitte",
// //       "type": "noun",
// //       "translation": "sections/segments",
// //       "example": "Das Buch ist in verschiedene Abschnitte unterteilt.",
// //       "example_EN": "The book is divided into different sections."
// //     },
// //     {
// //       "word": "entspricht",
// //       "type": "verb",
// //       "translation": "corresponds to/meets",
// //       "example": "Dieses Angebot entspricht genau meinen Vorstellungen.",
// //       "example_EN": "This offer meets exactly my expectations."
// //     },
// //     {
// //       "word": "wochenendarbeitzeit",
// //       "type": "noun",
// //       "translation": "weekend working time",
// //       "example": "Die Wochenendarbeitzeit wird zusätzlich vergütet.",
// //       "example_EN": "Weekend working time is paid extra."
// //     },
// //     {
// //       "word": "Zeit",
// //       "type": "noun",
// //       "translation": "time",
// //       "example": "Die Zeit für das Projekt ist knapp.",
// //       "example_EN": "Time for the project is tight."
// //     },
// //     {
// //       "word": "im Betrieb",
// //       "type": "phrase",
// //       "translation": "at work/in operation",
// //       "example": "Die Maschine befindet sich derzeit im Betrieb.",
// //       "example_EN": "The machine is currently in operation."
// //     },
// //     {
// //       "word": "ausschließlich",
// //       "type": "adverb",
// //       "translation": "exclusively/solely",
// //       "example": "Diese Veranstaltung richtet sich ausschließlich an Mitglieder.",
// //       "example_EN": "This event is exclusively for members."
// //     },
// //     {
// //       "word": "erledigt",
// //       "type": "adjective",
// //       "translation": "completed/finished",
// //       "example": "Die Aufgabe ist erledigt und kann abgeschlossen werden.",
// //       "example_EN": "The task is completed and can be closed."
// //     },
// //     {
// //       "word": "sogar",
// //       "type": "adverb",
// //       "translation": "even",
// //       "example": "Er hat sogar am Wochenende gearbeitet.",
// //       "example_EN": "He even worked on the weekend."
// //     },
// //     {
// //       "word": "wege",
// //       "type": "noun",
// //       "translation": "ways/methods",
// //       "example": "Es gibt verschiedene Wege, um das Problem zu lösen.",
// //       "example_EN": "There are different ways to solve the problem."
// //     },
// //     {
// //       "word": "umfeld",
// //       "type": "noun",
// //     "translation": "environment/surroundings",
// //     "example": "Das Arbeitsumfeld beeinflusst die Produktivität der Mitarbeiter.",
// //     "example_EN": "The work environment affects the productivity of the employees."
// //   },
// //   {
// //     "word": "Lage",
// //     "type": "noun",
// //     "translation": "situation/position",
// //     "example": "Die Lage des Hotels ist sehr zentral.",
// //     "example_EN": "The situation of the hotel is very central."
// //   },
// //   {
// //     "word": "Arbeitsbereich",
// //     "type": "noun",
// //     "translation": "work area",
// //     "example": "Mein Arbeitsbereich ist sauber und gut organisiert.",
// //     "example_EN": "My work area is clean and well-organized."
// //   },
// //   {
// //     "word": "Arbeitseisatz",
// //     "type": "noun",
// //     "translation": "work deployment",
// //     "example": "Der Arbeitseinsatz der Mitarbeiter wurde für das Wochenende geplant.",
// //     "example_EN": "The work deployment of the employees has been planned for the weekend."
// //   },
// //   {
// //     "word": "Tagesabschnitte",
// //     "type": "noun",
// //     "translation": "segments of the day",
// //     "example": "Die Tagesabschnitte sind klar strukturiert.",
// //     "example_EN": "The segments of the day are clearly structured."
// //   },
// //   {
// //     "word": "erheblich",
// //     "type": "adjective",
// //     "translation": "considerable/significant",
// //     "example": "Die Kosten sind erheblich gestiegen.",
// //     "example_EN": "The costs have increased significantly."
// //   },
// //   {
// //     "word": "Hut",
// //     "type": "noun",
// //     "translation": "hat",
// //     "example": "Er setzte seinen Hut auf und ging nach draußen.",
// //     "example_EN": "He put on his hat and went outside."
// //   },
// //   {
// //     "word": "Arbeit auf Abruf",
// //     "type": "phrase",
// //     "translation": "on-call work",
// //     "example": "Arbeit auf Abruf kann flexibel sein, aber auch zu ungewissen Arbeitszeiten führen.",
// //     "example_EN": "On-call work can be flexible, but it can also lead to uncertain working hours."
// //   },
// //   {
// //     "word": "Gleitzeit",
// //     "type": "noun",
// //     "translation": "flexible working hours",
// //     "example": "Die Gleitzeit ermöglicht es den Mitarbeitern, ihre Arbeitszeiten flexibel zu gestalten.",
// //     "example_EN": "Flextime allows employees to adjust their working hours flexibly."
// //   },
// //   {
// //     "word": "erfordert",
// //     "type": "verb",
// //     "translation": "requires",
// //     "example": "Dieser Job erfordert viel Geduld und Organisationstalent.",
// //     "example_EN": "This job requires a lot of patience and organizational skills."
// //   },
// //   {
// //     "word": "Auftragslage",
// //     "type": "noun",
// //     "translation": "order situation",
// //     "example": "Die Auftragslage des Unternehmens ist derzeit sehr gut.",
// //     "example_EN": "The company's order situation is currently very good."
// //   },
// //   {
// //     "word": "Vergütung",
// //     "type": "noun",
// //     "translation": "compensation/remuneration",
// //     "example": "Die Vergütung für Überstunden ist im Arbeitsvertrag festgelegt.",
// //     "example_EN": "The compensation for overtime is specified in the employment contract."
// //   },
// //   {
// //     "word": "geleisteten",
// //     "type": "adjective",
// //     "translation": "provided/performed",
// //     "example": "Die geleisteten Überstunden werden im nächsten Monat ausbezahlt.",
// //     "example_EN": "The performed overtime will be paid out next month."
// //   },
// //   {
// //     "word": "vornherein",
// //     "type": "adverb",
// //     "translation": "from the outset",
// //     "example": "Von vornherein war klar, dass das Projekt eine Herausforderung sein würde.",
// //     "example_EN": "From the outset, it was clear that the project would be a challenge."
// //   },
// //   {
// //     "word": "feststeht",
// //     "type": "verb",
// //     "translation": "is certain",
// //     "example": "Es steht fest, dass wir nächste Woche umziehen werden.",
// //     "example_EN": "It is certain that we will move next week."
// //   },
// //   {
// //     "word": "Kern",
// //     "type": "noun",
// //     "translation": "core",
// //     "example": "Das Problem liegt im Kern der Sache.",
// //     "example_EN": "The problem lies at the core of the issue."
// //   },
// //   {
// //     "word": "Einteilung",
// //     "type": "noun",
// //     "translation": "classification/arrangement",
// //     "example": "Die Einteilung der Aufgaben war nicht optimal.",
// //     "example_EN": "The arrangement of tasks was not optimal."
// //   },
// //   {
// //     "word": "aufgeführt",
// //     "type": "adjective",
// //     "translation": "listed",
// //     "example": "Alle wichtigen Informationen sind im Handbuch aufgeführt.",
// //     "example_EN": "All important information is listed in the manual."
// //   },
// //   {
// //     "word": "Regelarbeitszeit",
// //     "type": "noun",
// //     "translation": "regular working hours",
// //     "example": "Die Regelarbeitszeit beträgt 40 Stunden pro Woche.",
// //     "example_EN": "The regular working hours are 40 hours per week."
// //   },
// //   {
// //     "word": "Uhrzeit",
// //     "type": "noun",
// //     "translation": "time (on the clock)",
// //     "example": "Die Uhrzeit des Treffens ist um 10 Uhr.",
// //     "example_EN": "The time of the meeting is at 10 o'clock."
// //   },
// //   {
// //     "word": "erfordert",
// //     "type": "verb",
// //     "translation": "requires",
// //     "example": "Dieser Job erfordert viel Einsatz und Engagement.",
// //     "example_EN": "This job requires a lot of effort and dedication."
// // }
// // ];

// // export const words7 = [
// //     {
// //       "word": "Spurwachsel",
// //       "type": "noun",
// //       "translation": "lane change",
// //       "example": "Beim Autofahren ist es wichtig, den Spurwechsel rechtzeitig anzuzeigen.",
// //       "example_EN": "When driving, it is important to indicate the lane change in time."
// //     },
// //     {
// //       "word": "Schlepper",
// //       "type": "noun",
// //       "translation": "tractor/tugboat",
// //       "example": "Der Bauer benutzt den Schlepper, um die Felder zu pflügen.",
// //       "example_EN": "The farmer uses the tractor to plow the fields."
// //     },
// //     {
// //       "word": "bewahren",
// //       "type": "verb",
// //       "translation": "to preserve/to keep",
// //       "example": "Es ist wichtig, unsere Umwelt zu bewahren.",
// //       "example_EN": "It is important to preserve our environment."
// //     },
// //     {
// //       "word": "ablehnen",
// //       "type": "verb",
// //       "translation": "to reject/to decline",
// //       "example": "Er hat das Angebot höflich abgelehnt.",
// //       "example_EN": "He politely declined the offer."
// //     },
// //     {
// //       "word": "Beifall",
// //       "type": "noun",
// //       "translation": "applause",
// //       "example": "Das Publikum spendete Beifall nach der Vorstellung.",
// //       "example_EN": "The audience applauded after the performance."
// //     },
// //     {
// //       "word": "insofern",
// //       "type": "conjunction/adverb",
// //       "translation": "insofar/as far as",
// //       "example": "Insofern bin ich mit den Ergebnissen zufrieden.",
// //       "example_EN": "Insofar as I am satisfied with the results."
// //     },
// //     {
// //       "word": "abwehren",
// //       "type": "verb",
// //       "translation": "to fend off/to repel",
// //       "example": "Die Armee konnte den Angriff erfolgreich abwehren.",
// //       "example_EN": "The army successfully repelled the attack."
// //     },
// //     {
// //       "word": "beschlossen",
// //       "type": "adjective",
// //       "translation": "decided",
// //       "example": "Das Team hat beschlossen, die Strategie zu ändern.",
// //       "example_EN": "The team decided to change the strategy."
// //     },
// //     {
// //       "word": "Geschosse",
// //       "type": "noun",
// //       "translation": "projectiles",
// //       "example": "Die Soldaten feuerten Geschosse auf den Feind.",
// //       "example_EN": "The soldiers fired projectiles at the enemy."
// //     },
// //     {
// //       "word": "jene",
// //       "type": "pronoun",
// //       "translation": "those",
// //       "example": "Jene Probleme müssen dringend gelöst werden.",
// //       "example_EN": "Those problems need to be solved urgently."
// //     },
// //     {
// //       "word": "werden würden",
// //       "type": "verb",
// //       "translation": "would become",
// //       "example": "Die Bemühungen wurden würden erfolgreich sein.",
// //       "example_EN": "The efforts would become successful."
// //     },
// //     {
// //       "word": "betragen",
// //       "type": "verb",
// //       "translation": "to amount to/to be",
// //       "example": "Die Gesamtkosten betragen mehrere Millionen Euro.",
// //       "example_EN": "The total costs amount to several million euros."
// //     },
// //     {
// //       "word": "anheben",
// //       "type": "verb",
// //       "translation": "to raise/to lift",
// //       "example": "Der Chef wird die Gehälter im nächsten Monat anheben.",
// //       "example_EN": "The boss will raise the salaries next month."
// //     },
// //     {
// //       "word": "werden sollen",
// //       "type": "verb",
// //       "translation": "are to become",
// //       "example": "Die Änderungen werden sollen das Problem lösen.",
// //       "example_EN": "The changes are to become the solution to the problem."
// //     },
// //     {
// //       "word": "es wurde nicht kompenziert",
// //       "type": "phrase",
// //       "translation": "it was not compensated",
// //       "example": "Die Überstunden wurden nicht kompensiert.",
// //       "example_EN": "The overtime was not compensated."
// //     },
// //     {
// //       "word": "beziffern",
// //       "type": "verb",
// //       "translation": "to quantify/to estimate",
// //       "example": "Es ist schwierig, den genauen Wert dieser Sammlung zu beziffern.",
// //       "example_EN": "It's difficult to quantify the exact value of this collection."
// //     },
// //     {
// //       "word": "erläutern",
// //       "type": "verb",
// //       "translation": "to explain/to elaborate",
// //       "example": "Der Professor wird das Konzept genauer erläutern.",
// //       "example_EN": "The professor will explain the concept in more detail."
// //     },
// //     {
// //       "word": "leisten",
// //       "type": "verb",
// //       "translation": "to accomplish/to achieve",
// //       "example": "Das Unternehmen hat viel für die Gemeinschaft geleistet.",
// //       "example_EN": "The company has accomplished a lot for the community."
// //     },
// //     {
// //       "word": "vermögen",
// //       "type": "verb",
// //       "translation": "to be able to/can",
// //       "example": "Sie vermag es, große Herausforderungen zu bewältigen.",
// //       "example_EN": "She can handle big challenges."
// //     },
// //     {
// //       "word": "verfassungsbruch",
// //       "type": "noun",
// //       "translation": "breach of the constitution",
// //       "example": "Ein Verfassungsbruch kann schwerwiegende Konsequenzen haben.",
// //       "example_EN": "A breach of the constitution can have serious consequences."
// //     },
// //     {
// //       "word": "Nachbeschafung",
// //       "type": "noun",
// //       "translation": "procurement",
// //       "example": "Die Nachbeschaffung von Ersatzteilen kann einige Zeit dauern.",
// //       "example_EN": "The procurement of spare parts may take some time."
// //     },
// //     {
// //       "word": "Eisatzbereitschaft",
// //       "type": "noun",
// //       "translation": "operational readiness",
// //       "example": "Die Einsatzbereitschaft der Truppen wurde erhöht.",
// //       "example_EN": "The operational readiness of the troops has been increased."
// //     },
// //     {
// //       "word": "Ampelkoalition",
// //       "type": "noun",
// //       "translation": "traffic light coalition",
// //       "example": "In Deutschland bildete sich eine Ampelkoalition.",
// //       "example_EN": "A traffic light coalition formed in Germany."
// //     },
// //         {
// //           "word": "Verteidigung",
// //           "type": "noun",
// //           "translation": "defense",
// //           "example": "Die Verteidigung des Landes ist eine Priorität für die Regierung.",
// //           "example_EN": "The defense of the country is a priority for the government."
// //         },
// //         {
// //           "word": "grausam",
// //           "type": "adjective",
// //           "translation": "cruel",
// //           "example": "Die grausamen Handlungen des Diktators wurden international verurteilt.",
// //           "example_EN": "The cruel actions of the dictator were condemned internationally."
// //         },
// //         {
// //           "word": "Wehretat",
// //           "type": "noun",
// //           "translation": "defense budget",
// //           "example": "Der Wehretat wird jedes Jahr im Parlament diskutiert.",
// //           "example_EN": "The defense budget is discussed in parliament every year."
// //         },
// //         {
// //           "word": "gekürzt",
// //           "type": "adjective",
// //           "translation": "reduced",
// //           "example": "Aufgrund der Finanzkrise wurden die Budgets gekürzt.",
// //           "example_EN": "Due to the financial crisis, budgets were reduced."
// //         },
// //         {
// //           "word": "gesteigert auf",
// //           "type": "phrase",
// //           "translation": "increased to",
// //           "example": "Die Produktion wurde auf das Doppelte gesteigert.",
// //           "example_EN": "Production was increased to double."
// //         },
// //         {
// //           "word": "Ausbruch",
// //           "type": "noun",
// //           "translation": "outbreak",
// //           "example": "Der Ausbruch einer Epidemie führte zu drastischen Maßnahmen.",
// //           "example_EN": "The outbreak of an epidemic led to drastic measures."
// //         },
// //         {
// //           "word": "Einreden",
// //           "type": "noun",
// //           "translation": "persuasion",
// //           "example": "Seine Einreden hatten wenig Einfluss auf ihre Entscheidung.",
// //           "example_EN": "His persuasions had little influence on her decision."
// //         },
// //         {
// //           "word": "vorkam",
// //           "type": "verb",
// //           "translation": "occurred",
// //           "example": "Es vorkam während der Präsentation zu einem Zwischenfall.",
// //           "example_EN": "An incident occurred during the presentation."
// //         },
// //         {
// //           "word": "zutrauen",
// //           "type": "verb",
// //           "translation": "to trust/to attribute",
// //           "example": "Ich traue ihm zu, dass er die Aufgabe erfolgreich erledigt.",
// //           "example_EN": "I trust him to complete the task successfully."
// //         },
// //         {
// //           "word": "wesentliche",
// //           "type": "adjective",
// //           "translation": "essential",
// //           "example": "Die wesentlichen Merkmale des Plans müssen berücksichtigt werden.",
// //           "example_EN": "The essential features of the plan must be taken into account."
// //         },
// //         {
// //           "word": "einsetzen",
// //           "type": "verb",
// //           "translation": "to use/to deploy",
// //           "example": "Die Regierung wird alle verfügbaren Ressourcen einsetzen, um das Problem zu lösen.",
// //           "example_EN": "The government will use all available resources to solve the problem."
// //         },
// //         {
// //           "word": "Etat",
// //           "type": "noun",
// //           "translation": "budget",
// //           "example": "Der Etat für das kommende Jahr wurde bereits genehmigt.",
// //           "example_EN": "The budget for the coming year has already been approved."
// //         },
// //         {
// //           "word": "lustloser",
// //           "type": "adjective",
// //           "translation": "apathetic/disinterested",
// //           "example": "Er wirkte in letzter Zeit lustloser als üblich.",
// //           "example_EN": "Lately, he has seemed more apathetic than usual."
// //         },
// //         {
// //           "word": "abdenkbar",
// //           "type": "adjective",
// //           "translation": "conceivable",
// //           "example": "Eine solche Möglichkeit ist kaum abdenkbar.",
// //           "example_EN": "Such a possibility is hardly conceivable."
// //         },
// //         {
// //           "word": "aufgewandt",
// //           "type": "adjective",
// //           "translation": "spent/invested",
// //           "example": "Die aufgewandten Mittel haben sich gelohnt.",
// //           "example_EN": "The funds invested have paid off."
// //         },
// //         {
// //           "word": "beschlaunigen",
// //           "type": "verb",
// //           "translation": "to accelerate",
// //           "example": "Wir müssen die Entwicklung des Projekts beschleunigen.",
// //           "example_EN": "We need to accelerate the development of the project."
// //         },
// //         {
// //           "word": "Schuss",
// //           "type": "noun",
// //           "translation": "shot",
// //           "example": "Ein lauter Schuss durchbrach die Stille der Nacht.",
// //           "example_EN": "A loud shot broke the silence of the night."
// //         },
// //         {
// //           "word": "Marschflügkörper",
// //           "type": "noun",
// //           "translation": "cruise missile",
// //           "example": "Der Marschflugkörper traf sein Ziel präzise.",
// //           "example_EN": "The cruise missile hit its target precisely."
// //         },
// //         {
// //           "word": "Irrsinn",
// //           "type": "noun",
// //           "translation": "madness/nonsense",
// //           "example": "Die Idee, ohne Vorbereitung in den Wettbewerb zu gehen, ist reiner Irrsinn.",
// //           "example_EN": "The idea of entering the competition without preparation is sheer madness."
// //         }
      
// // ];

// // export const words8 = [
// //     {
// //       "word": "aufpassen",
// //       "type": "verb",
// //       "translation": "to pay attention",
// //       "example": "Bitte pass auf den Verkehr auf, wenn du die Straße überquerst.",
// //       "example_EN": "Please pay attention to the traffic when crossing the street."
// //     },
// //     {
// //       "word": "prägt",
// //       "type": "verb",
// //       "translation": "shapes",
// //       "example": "Die Kindheit prägt oft das spätere Leben.",
// //       "example_EN": "Childhood often shapes later life."
// //     },
// //     {
// //       "word": "untergeordnet",
// //       "type": "adjective",
// //       "translation": "subordinate",
// //       "example": "Der Bereich Marketing ist untergeordnet der Abteilung Vertrieb.",
// //       "example_EN": "The marketing department is subordinate to the sales department."
// //     },
// //     {
// //       "word": "verarbeitung",
// //       "type": "noun",
// //       "translation": "processing",
// //       "example": "Die Datenverarbeitung erfolgt automatisch.",
// //       "example_EN": "Data processing is done automatically."
// //     },
// //     {
// //       "word": "beziehbare",
// //       "type": "adjective",
// //       "translation": "relatable",
// //       "example": "Die Inhalte des Buches sind auf viele Situationen beziehbar.",
// //       "example_EN": "The contents of the book are relatable to many situations."
// //     },
// //     {
// //       "word": "beitragen",
// //       "type": "verb",
// //       "translation": "to contribute",
// //       "example": "Jeder kann zum Umweltschutz beitragen.",
// //       "example_EN": "Everyone can contribute to environmental protection."
// //     },
// //     {
// //       "word": "Person beziehbare Daten",
// //       "type": "phrase",
// //       "translation": "personal identifiable data",
// //       "example": "Die Person beziehbaren Daten müssen gemäß den Datenschutzrichtlinien geschützt werden.",
// //       "example_EN": "Personal identifiable data must be protected according to data protection regulations."
// //     },
// //     {
// //       "word": "Person bezogene Daten",
// //       "type": "phrase",
// //       "translation": "personal data",
// //       "example": "Personenbezogene Daten dürfen nur für bestimmte Zwecke verwendet werden.",
// //       "example_EN": "Personal data may only be used for specific purposes."
// //     },
// //     {
// //       "word": "entsprechende",
// //       "type": "adjective",
// //       "translation": "corresponding",
// //       "example": "Bitte bringen Sie die entsprechenden Unterlagen zum Termin mit.",
// //       "example_EN": "Please bring the corresponding documents to the appointment."
// //     },
// //     {
// //       "word": "ausreicht",
// //       "type": "verb",
// //       "translation": "is sufficient",
// //       "example": "Ein einziger Hinweis ausreicht, um die Identität zu bestätigen.",
// //       "example_EN": "A single clue is sufficient to confirm the identity."
// //     },
// //     {
// //       "word": "vermichten",
// //       "type": "verb",
// //       "translation": "to mix",
// //       "example": "Beim Backen vermichten wir die Zutaten gründlich.",
// //       "example_EN": "When baking, we thoroughly mix the ingredients."
// //     },
// //     {
// //       "word": "die Daten heben",
// //       "type": "phrase",
// //       "translation": "to lift the data",
// //       "example": "Es ist wichtig, die Daten ordnungsgemäß zu heben.",
// //       "example_EN": "It is important to lift the data properly."
// //     },
// //     {
// //       "word": "vorlagung",
// //       "type": "noun",
// //       "translation": "presentation/submission",
// //       "example": "Die Vorlagung des Berichts erfolgt nächste Woche.",
// //       "example_EN": "The submission of the report will take place next week."
// //     },
// //     {
// //       "word": "ausgearbeitet",
// //       "type": "adjective",
// //       "translation": "elaborated",
// //       "example": "Der Plan wurde ausgearbeitet und steht zur Umsetzung bereit.",
// //       "example_EN": "The plan has been elaborated and is ready for implementation."
// //     },
// //     {
// //       "word": "verweisen",
// //       "type": "verb",
// //       "translation": "to refer",
// //       "example": "Im Text wird auf weitere Informationen verweisen.",
// //       "example_EN": "The text will refer to further information."
// //     },
// //     {
// //       "word": "führend",
// //       "type": "adjective",
// //       "translation": "leading",
// //       "example": "Das Unternehmen ist führend in der Entwicklung neuer Technologien.",
// //       "example_EN": "The company is a leading developer of new technologies."
// //     },
// //     {
// //         "word": "Zwischenfazit",
// //         "type": "noun",
// //         "translation": "interim conclusion",
// //         "example": "Bevor wir weitermachen, machen wir ein Zwischenfazit.",
// //         "example_EN": "Before we proceed, let's make an interim conclusion."
// //       },      
// //         {
// //           "word": "Begriffe",
// //           "type": "noun",
// //           "translation": "terms",
// //           "example": "Es ist wichtig, die technischen Begriffe zu verstehen.",
// //           "example_EN": "It's important to understand the technical terms."
// //         },
// //         {
// //           "word": "Einwillung",
// //           "type": "noun",
// //           "translation": "consent",
// //           "example": "Für die Verwendung der Daten benötigen wir Ihre Einwilligung.",
// //           "example_EN": "We need your consent for the use of the data."
// //         },
// //         {
// //           "word": "wegschließen",
// //           "type": "verb",
// //           "translation": "to lock away",
// //           "example": "Bitte schließen Sie die sensiblen Daten weg.",
// //           "example_EN": "Please lock away the sensitive data."
// //         },
// //         {
// //           "word": "betreiben",
// //           "type": "verb",
// //           "translation": "to operate",
// //           "example": "Das Unternehmen betreibt mehrere Fabriken weltweit.",
// //           "example_EN": "The company operates several factories worldwide."
// //         },
// //         {
// //           "word": "merkmal",
// //           "type": "noun",
// //           "translation": "feature/characteristic",
// //           "example": "Zu den Merkmalen dieses Produkts gehört seine Langlebigkeit.",
// //           "example_EN": "One of the features of this product is its durability."
// //         },
// //         {
// //           "word": "sinnhaft",
// //           "type": "adjective",
// //           "translation": "meaningful",
// //           "example": "Die Diskussion sollte sinnhaft sein und zu Lösungen führen.",
// //           "example_EN": "The discussion should be meaningful and lead to solutions."
// //         },
// //         {
// //           "word": "gelautern",
// //           "type": "verb",
// //           "translation": "to purify",
// //           "example": "Das Wasser wird durch die Filter gelautert.",
// //           "example_EN": "The water is purified through the filters."
// //         },
// //         {
// //           "word": "in gewissen",
// //           "type": "phrase",
// //           "translation": "to a certain extent",
// //           "example": "Die Methode ist in gewissen Situationen nützlich.",
// //           "example_EN": "The method is useful to a certain extent."
// //         },
// //         {
// //           "word": "üblich",
// //           "type": "adjective",
// //           "translation": "common/usual",
// //           "example": "Es ist üblich, vor einem Meeting die Tagesordnung zu verschicken.",
// //           "example_EN": "It is common to send the agenda before a meeting."
// //         },
// //         {
// //           "word": "betrifft mich",
// //           "type": "phrase",
// //           "translation": "concerns me",
// //           "example": "Diese Entscheidung betrifft mich direkt.",
// //           "example_EN": "This decision concerns me directly."
// //         },
// //             {
// //               "word": "gerfährt",
// //               "type": "Noun",
// //               "translation": "experience",
// //               "example": "Er hat viel Gerfährt in diesem Bereich.",
// //               "example_EN": "He has a lot of experience in this field."
// //             },
// //             {
// //               "word": "bewährt",
// //               "type": "Adjective",
// //               "translation": "proven",
// //               "example": "Dies ist eine bewährte Methode, um das Problem zu lösen.",
// //               "example_EN": "This is a proven method to solve the problem."
// //             },
// //             {
// //               "word": "drunherum",
// //               "type": "Adverb",
// //               "translation": "around/about",
// //               "example": "Lass uns das Problem von allen Seiten betrachten, drunherum.",
// //               "example_EN": "Let's consider the problem from all sides, about."
// //             },
// //             {
// //               "word": "übertragbar",
// //               "type": "Adjective",
// //               "translation": "transferable",
// //               "example": "Die Fähigkeiten, die du hier lernst, sind auf andere Bereiche übertragbar.",
// //               "example_EN": "The skills you learn here are transferable to other areas."
// //             },
// //             {
// //               "word": "Aufwandentschädigung",
// //               "type": "Noun",
// //               "translation": "compensation for expenses",
// //               "example": "Die Reisekosten werden als Aufwandentschädigung erstattet.",
// //               "example_EN": "Travel expenses are reimbursed as compensation for expenses."
// //             },
// //             {
// //               "word": "sensible Daten",
// //               "type": "Phrase",
// //               "translation": "sensitive data",
// //               "example": "Der Zugriff auf sensible Daten ist streng reguliert.",
// //               "example_EN": "Access to sensitive data is strictly regulated."
// //             },
// //             {
// //               "word": "unterfallen Daten",
// //               "type": "Phrase",
// //               "translation": "subsumed data",
// //               "example": "Diese Informationen unterfallen personenbezogenen Daten.",
// //               "example_EN": "This information is subsumed under personal data."
// //             },
// //             {
// //               "word": "ausdrücklich",
// //               "type": "Adverb/Adjective",
// //               "translation": "explicitly",
// //               "example": "Er hat ausdrücklich gesagt, dass er nicht kommen wird.",
// //               "example_EN": "He explicitly said he won't come."
// //             },
// //             {
// //               "word": "einsichtfähigkeit",
// //               "type": "Noun",
// //               "translation": "insightfulness",
// //               "example": "Die Einsichtfähigkeit ist ein wichtiger Aspekt der Führungskompetenz.",
// //               "example_EN": "Insightfulness is an important aspect of leadership competence."
// //             },
// //             {
// //               "word": "reinlaufen",
// //               "type": "Verb",
// //               "translation": "to walk/run into",
// //               "example": "Er ist versehentlich in die Tür reinlaufen.",
// //               "example_EN": "He accidentally walked into the door."
// //             },
// //     {
// //         "word": "aufklären",
// //         "type": "verb",
// //         "translation": "to enlighten / to clarify",
// //         "example": "Der Lehrer wird die Schüler über das Thema aufklären.",
// //         "example_EN": "The teacher will enlighten the students about the topic."
// //     },
// //     {
// //         "word": "hinkriegen",
// //         "type": "verb",
// //         "translation": "to manage / to pull off",
// //         "example": "Ich bin sicher, dass wir das Projekt hinkriegen können.",
// //         "example_EN": "I'm sure we can manage to pull off the project."
// //     },
// //     {
// //         "word": "krieg",
// //         "type": "noun",
// //         "translation": "war",
// //         "example": "Der krieg hat viele Menschenleben gefordert.",
// //         "example_EN": "The war has claimed many lives."
// //     },
// //     {
// //         "word": "kriegen",
// //         "type": "verb",
// //         "translation": "to get / to receive",
// //         "example": "Kann ich ein Glas Wasser kriegen?",
// //         "example_EN": "Can I get a glass of water?"
// //     },
// //     {
// //         "word": "lockdaten",
// //         "type": "noun",
// //         "translation": "bait data",
// //         "example": "Die Lockdaten wurden verwendet, um den Angreifer zu identifizieren.",
// //         "example_EN": "The bait data was used to identify the attacker."
// //     },
// //     {
// //         "word": "nachvollziehen",
// //         "type": "verb",
// //         "translation": "to comprehend / to understand",
// //         "example": "Ich kann seine Entscheidung nicht nachvollziehen.",
// //         "example_EN": "I can't comprehend his decision."
// //     },
// //     {
// //         "word": "vorsetzende",
// //         "type": "adjective",
// //         "translation": "preceding",
// //         "example": "Die vorsetzenden Maßnahmen haben zu positiven Ergebnissen geführt.",
// //         "example_EN": "The preceding measures have led to positive results."
// //     },
// //     {
// //         "word": "wozu",
// //         "type": "adverb",
// //         "translation": "what for / to what end",
// //         "example": "Wozu brauchst du das Geld?",
// //         "example_EN": "What do you need the money for?"
// //     },
// //     {
// //         "word": "auftrag hatten",
// //         "type": "phrase",
// //         "translation": "were instructed",
// //         "example": "Die Mitarbeiter hatten den klaren Auftrag, die Daten zu sichern.",
// //         "example_EN": "The employees were instructed to secure the data."
// //     },
// //     {
// //         "word": "verbrechen zu vermeiden",
// //         "type": "phrase",
// //         "translation": "to avoid crime",
// //         "example": "Die Polizei setzt Maßnahmen ein, um Verbrechen zu vermeiden.",
// //         "example_EN": "The police take measures to avoid crime."
// //     },
// //     {
// //         "word": "durchführen",
// //         "type": "verb",
// //         "translation": "to carry out / to conduct",
// //         "example": "Das Unternehmen wird eine Umfrage durchführen, um das Feedback der Kunden zu erhalten.",
// //         "example_EN": "The company will conduct a survey to gather customer feedback."
// //     },
// //     {
// //         "word": "gerauchen",
// //         "type": "verb",
// //         "translation": "to smoke",
// //         "example": "In dieser Zone ist das Gerauchen verboten.",
// //         "example_EN": "Smoking is prohibited in this area."
// //     },
// //     {
// //         "word": "zustande kommt",
// //         "type": "phrase",
// //         "translation": "comes about",
// //         "example": "Ein Kompromiss zustande kommt, wenn beide Parteien Zugeständnisse machen.",
// //         "example_EN": "A compromise comes about when both parties make concessions."
// //     },
// //     {
// //         "word": "hingewiesen",
// //         "type": "adjective",
// //         "translation": "pointed out / indicated",
// //         "example": "Der Lehrer hat uns auf die Fehler in unseren Aufgaben hingewiesen.",
// //         "example_EN": "The teacher pointed out the mistakes in our assignments."
// //     },
// //     {
// //         "word": "beleuchten",
// //         "type": "verb",
// //         "translation": "to illuminate / to shed light on",
// //         "example": "In dieser Präsentation werden wir verschiedene Aspekte des Themas beleuchten.",
// //         "example_EN": "In this presentation, we will illuminate various aspects of the topic."
// //     },
// //     {
// //         "word": "solchen",
// //         "type": "adjective",
// //         "translation": "such",
// //         "example": "In solchen Situationen ist es wichtig, ruhig zu bleiben.",
// //         "example_EN": "In such situations, it's important to remain calm."
// //     },
// //     {
// //         "word": "abgeleitet",
// //         "type": "adjective",
// //         "translation": "derived",
// //         "example": "Diese Regel wurde von einem früheren Gesetz abgeleitet.",
// //         "example_EN": "This rule was derived from a previous law."
// //     },
// //     {
// //         "word": "abwägung",
// //         "type": "noun",
// //         "translation": "weighing up / consideration",
// //         "example": "Die Abwägung der Vor- und Nachteile ist entscheidend.",
// //         "example_EN": "Weighing up the pros and cons is crucial."
// //     },
// //     {
// //         "word": "Einschränkung",
// //         "type": "noun",
// //         "translation": "restriction / limitation",
// //         "example": "Die Einschränkung der Bewegungsfreiheit war notwendig.",
// //         "example_EN": "The restriction of freedom of movement was necessary."
// //     },
// //     {
// //         "word": "zwingen",
// //         "type": "verb",
// //         "translation": "to force / to compel",
// //         "example": "Die Umstände zwangen sie, eine Entscheidung zu treffen.",
// //         "example_EN": "The circumstances forced them to make a decision."
// //     },
// //     {
// //         "word": "Befangenheit",
// //         "type": "noun",
// //         "translation": "bias / partiality",
// //         "example": "Es ist wichtig, jegliche Befangenheit in der Beurteilung zu vermeiden.",
// //         "example_EN": "It's important to avoid any bias in judgment."
// //     },
// //     {
// //         "word": "Auswirkung",
// //         "type": "noun",
// //         "translation": "impact / effect",
// //         "example": "Die Auswirkungen der Entscheidung sind noch nicht absehbar.",
// //         "example_EN": "The impact of the decision is not yet foreseeable."
// //     },                 

// //     {
// //         "word": "Aufwandsentschädigung",
// //         "type": "noun",
// //         "translation": "expense reimbursement",
// //         "example": "Die Aufwandsentschädigung deckt die Kosten für die Dienstreise.",
// //         "example_EN": "The expense reimbursement covers the costs of the business trip."
// //     },
// //     {
// //         "word": "Angewiesen sind",
// //         "type": "phrase",
// //         "translation": "are dependent",
// //         "example": "Die Mitarbeiter sind angewiesen, pünktlich zu erscheinen.",
// //         "example_EN": "The employees are dependent on arriving on time."
// //     },
// //     {
// //         "word": "eingeführt wird",
// //         "type": "phrase",
// //         "translation": "is being introduced",
// //         "example": "Ein neues System eingeführt wird, um den Prozess zu verbessern.",
// //         "example_EN": "A new system is being introduced to improve the process."
// //     },
// //     {
// //         "word": "begegnen",
// //         "type": "verb",
// //         "translation": "to encounter / to meet",
// //         "example": "Man sollte jedem mit Respekt begegnen.",
// //         "example_EN": "One should treat everyone with respect."
// //     },
// //     {
// //         "word": "Abwägung",
// //         "type": "noun",
// //         "translation": "weighing / consideration",
// //         "example": "Die Abwägung zwischen Kosten und Nutzen ist wichtig.",
// //         "example_EN": "The weighing of costs and benefits is important."
// //     },
// //     {
// //         "word": "gegebenenfalls",
// //         "type": "adverb",
// //         "translation": "if necessary / possibly",
// //         "example": "Gegebenenfalls müssen weitere Maßnahmen ergriffen werden.",
// //         "example_EN": "If necessary, further measures may need to be taken."
// //     },
// //     {
// //         "word": "jeweilige Gruppe",
// //         "type": "phrase",
// //         "translation": "respective group",
// //         "example": "Die jeweilige Gruppe ist für ihre eigenen Projekte verantwortlich.",
// //         "example_EN": "The respective group is responsible for its own projects."
// //     },
// //     {
// //         "word": "geringbildungstand",
// //         "type": "noun",
// //         "translation": "low educational level",
// //         "example": "Der geringe Bildungsstand führt oft zu geringeren Karrierechancen.",
// //         "example_EN": "Low educational level often leads to lower career opportunities."
// //     },
// //     {
// //         "word": "Zielsetzung",
// //         "type": "noun",
// //         "translation": "objective / goal setting",
// //         "example": "Die Zielsetzung für das nächste Quartal ist gesteckt.",
// //         "example_EN": "The objective for the next quarter has been set."
// //     },
// //     {
// //         "word": "Aufwand",
// //         "type": "noun",
// //         "translation": "effort / expenditure",
// //         "example": "Die Aufwand für die Entwicklung des Projekts war enorm.",
// //         "example_EN": "The effort for developing the project was enormous."
// //     },
// //     {
// //         "word": "Ausnahme",
// //         "type": "noun",
// //         "translation": "exception",
// //         "example": "In diesem Fall machen wir eine Ausnahme.",
// //         "example_EN": "In this case, we'll make an exception."
// //     },
// //     {
// //         "word": "Täuschung",
// //         "type": "noun",
// //         "translation": "deception / fraud",
// //         "example": "Die Täuschung der Kunden führte zu rechtlichen Konsequenzen.",
// //         "example_EN": "Deception of the customers led to legal consequences."
// //     },
// //     {
// //         "word": "Sicherstellung",
// //         "type": "noun",
// //         "translation": "ensuring / seizure",
// //         "example": "Die Sicherstellung der Beweismittel war von entscheidender Bedeutung.",
// //         "example_EN": "Ensuring the evidence was crucial."
// //     },
// //     {
// //         "word": "nötig",
// //         "type": "adjective",
// //         "translation": "necessary",
// //         "example": "Es ist nötig, die Situation sofort zu klären.",
// //         "example_EN": "It's necessary to clarify the situation immediately."
// //     },
// //     {
// //         "word": "vorenthalten",
// //         "type": "verb",
// //         "translation": "to withhold",
// //         "example": "Er hat wichtige Informationen vorenthalten.",
// //         "example_EN": "He has withheld important information."
// //     },
// //     {
// //         "word": "Schulhof",
// //         "type": "noun",
// //         "translation": "schoolyard",
// //         "example": "Die Schüler spielen in der Pause auf dem Schulhof.",
// //         "example_EN": "The students play on the schoolyard during break."
// //     },
// //     {
// //         "word": "hergeben",
// //         "type": "verb",
// //         "translation": "to give away",
// //         "example": "Ich werde mein altes Auto nicht hergeben.",
// //         "example_EN": "I won't give away my old car."
// //     },
// //     {
// //         "word": "bis hierher",
// //         "type": "phrase",
// //         "translation": "until now / up to this point",
// //         "example": "Wir haben bis hierher gute Fortschritte gemacht.",
// //         "example_EN": "We have made good progress up to this point."
// //     },
// //     {
// //         "word": "bis hier",
// //         "type": "phrase",
// //         "translation": "up to here",
// //         "example": "Der Weg führt bis hier, dann biegen wir links ab.",
// //         "example_EN": "The path leads up to here, then we turn left."
// //     },
// //     {
// //         "word": "bis her",
// //         "type": "phrase",
// //         "translation": "up to now",
// //         "example": "Ich habe bis her noch keine Antwort erhalten.",
// //         "example_EN": "I haven't received a response up to now."
// //     },
// //     {
// //         "word": "Erhebungen",
// //         "type": "noun",
// //         "translation": "surveys / investigations",
// //         "example": "Die Erhebungen zeigen, dass die Mehrheit der Befragten zufrieden ist.",
// //         "example_EN": "The surveys show that the majority of respondents are satisfied."
// //     },
// //     {
// //         "word": "erheben",
// //         "type": "verb",
// //         "translation": "to raise / to collect",
// //         "example": "Die Regierung wird Steuern erheben, um das Gesundheitssystem zu finanzieren.",
// //         "example_EN": "The government will raise taxes to finance the healthcare system."
// //     },
// //     {
// //         "word": "Klassenkamerand",
// //         "type": "noun",
// //         "translation": "classmate",
// //         "example": "Mein Klassenkamerand hilft mir immer bei den Hausaufgaben.",
// //         "example_EN": "My classmate always helps me with homework."
// //     },
// //     {
// //         "word": "Zufallsfunden",
// //         "type": "noun",
// //         "translation": "random findings / chance discoveries",
// //         "example": "Die Forscher machten interessante Zufallsfunden während ihrer Studie.",
// //         "example_EN": "The researchers made interesting chance discoveries during their study."
// //     },
// //     {
// //         "word": "bedänklich",
// //         "type": "adjective",
// //         "translation": "questionable / dubious",
// //         "example": "Die Aussagen des Zeugen sind bedänklich und müssen überprüft werden.",
// //         "example_EN": "The witness's statements are questionable and need to be verified."
// //     },
// //     {
// //         "word": "hingehört",
// //         "type": "adjective",
// //         "translation": "relevant / pertinent",
// //         "example": "Die hingehört Information wurde bei der Entscheidungsfindung berücksichtigt.",
// //         "example_EN": "The pertinent information was taken into account during the decision-making process."
// //     },
// //     {
// //         "word": "auftreten",
// //         "type": "verb",
// //         "translation": "to occur / to appear",
// //         "example": "Komplikationen können während der Operation auftreten.",
// //         "example_EN": "Complications can occur during the surgery."
// //     },
// //     {
// //         "word": "Vorab-Voten",
// //         "type": "noun",
// //         "translation": "preliminary votes",
// //         "example": "Die Vorab-Voten geben einen ersten Eindruck von der Meinung der Teilnehmer.",
// //         "example_EN": "The preliminary votes provide an initial impression of the participants' opinions."
// //     },
// //     {
// //         "word": "berührungspunkte",
// //         "type": "noun",
// //         "translation": "points of contact / common ground",
// //         "example": "Trotz ihrer Unterschiede haben sie einige berührungspunkte.",
// //         "example_EN": "Despite their differences, they have some points of contact."
// //     },
// //     {
// //         "word": "Begutachtung",
// //         "type": "noun",
// //         "translation": "assessment / evaluation",
// //         "example": "Die Begutachtung des Projekts wird einige Zeit in Anspruch nehmen.",
// //         "example_EN": "The evaluation of the project will take some time."
// //     },
// //     {
// //         "word": "vorhaden",
// //         "type": "adjective",
// //         "translation": "existent / available",
// //         "example": "Die benötigte Software ist bereits vorhaden.",
// //         "example_EN": "The required software is already available."
// //     },
// //     {
// //         "word": "Rufschädigung",
// //         "type": "noun",
// //         "translation": "damage to reputation",
// //         "example": "Die falschen Behauptungen führten zu einer Rufschädigung des Unternehmens.",
// //         "example_EN": "The false allegations led to damage to the company's reputation."
// //     },
// //     {
// //         "word": "Vorstandsbeschluss",
// //         "type": "noun",
// //         "translation": "board decision",
// //         "example": "Der Vorstandsbeschluss wurde einstimmig angenommen.",
// //         "example_EN": "The board decision was unanimously accepted."
// //     },
// //     {
// //         "word": "Vorsitzende",
// //         "type": "noun",
// //         "translation": "chairperson / president",
// //         "example": "Die Vorsitzende leitete die Sitzung.",
// //         "example_EN": "The chairperson presided over the meeting."
// //     },
// //     {
// //         "word": "Überarbeitungsschleife",
// //         "type": "noun",
// //         "translation": "revision loop / iteration",
// //         "example": "Die Überarbeitungsschleife ist ein wichtiger Bestandteil des Entwicklungsprozesses.",
// //         "example_EN": "The revision loop is an important part of the development process."
// //     },
// //     {
// //         "word": "Etwurf des Votums",
// //         "type": "noun",
// //         "translation": "draft of the vote",
// //         "example": "Der Etwurf des Votums muss noch überarbeitet werden, bevor wir darüber abstimmen.",
// //         "example_EN": "The draft of the vote needs to be revised before we vote on it."
// //       },
// //       {
// //         "word": "Umlaufverfahren",
// //         "type": "noun",
// //         "translation": "circulation procedure / circulation process",
// //         "example": "Die Entscheidung wurde durch ein Umlaufverfahren unter den Vorstandsmitgliedern getroffen.",
// //         "example_EN": "The decision was made through a circulation procedure among the board members."
// //       },
// //       {
// //         "word": "nützliche",
// //         "type": "adjective",
// //         "translation": "useful",
// //         "example": "Diese nützliche Information hat uns bei der Lösung des Problems geholfen.",
// //         "example_EN": "This useful information helped us solve the problem."
// //       },
// //       {
// //         "word": "Anmerkung",
// //         "type": "noun",
// //         "translation": "note / remark / comment",
// //         "example": "Bitte fügen Sie Ihrer Bewerbung eine Anmerkung hinzu, wenn Sie weitere Informationen haben.",
// //         "example_EN": "Please add a note to your application if you have additional information."
// //       }
  
// // ];

// // export const words9 = [
// //     {
// //         "word": "umgekehren",
// //         "type": "verb",
// //         "translation": "to reverse / to invert",
// //         "example": "Sie müssen die Richtung umgekehren, um zum Ausgangspunkt zurückzukehren.",
// //         "example_EN": "You need to reverse the direction to return to the starting point."
// //     },
// //     {
// //         "word": "vorgaben",
// //         "type": "noun",
// //         "translation": "specifications / guidelines",
// //         "example": "Die Vorgaben für das Projekt müssen noch festgelegt werden.",
// //         "example_EN": "The specifications for the project still need to be determined."
// //     },
// //     {
// //         "word": "sonst",
// //         "type": "adverb",
// //         "translation": "otherwise / else",
// //         "example": "Wir müssen jetzt gehen, sonst verpassen wir den Zug.",
// //         "example_EN": "We have to leave now, otherwise we'll miss the train."
// //     },
// //     {
// //         "word": "einsigtzte",
// //         "type": "noun",
// //         "translation": "insight",
// //         "example": "Sie hatte eine tiefe Einsicht in das Problem und konnte eine Lösung finden.",
// //         "example_EN": "She had a deep insight into the problem and was able to find a solution."
// //     },
// //     {
// //         "word": "schalter",
// //         "type": "noun",
// //         "translation": "switch / lever",
// //         "example": "Der Schalter befindet sich neben der Tür.",
// //         "example_EN": "The switch is located next to the door."
// //     },
// //     {
// //         "word": "eingeführt",
// //         "type": "adjective",
// //         "translation": "introduced / implemented",
// //         "example": "Die neue Technologie wurde erfolgreich eingeführt.",
// //         "example_EN": "The new technology was successfully implemented."
// //     },
// //     {
// //         "word": "mitgekriegt",
// //         "type": "verb",
// //         "translation": "to get / to receive (informal)",
// //         "example": "Hast du mitgekriegt, was er gesagt hat?",
// //         "example_EN": "Did you get what he said?"
// //     },
// //     {
// //         "word": "zugang",
// //         "type": "noun",
// //         "translation": "access / entrance",
// //         "example": "Der Zugang zum Gebäude erfolgt über die Haupttür.",
// //         "example_EN": "Access to the building is through the main door."
// //     },
// //     {
// //         "word": "Glatteis",
// //         "type": "noun",
// //         "translation": "black ice",
// //         "example": "Vorsicht, auf der Straße ist Glatteis!",
// //         "example_EN": "Be careful, there's black ice on the road!"
// //     },
// //     {
// //         "word": "glatt",
// //         "type": "adjective",
// //         "translation": "smooth / slippery",
// //         "example": "Die Straße ist glatt nach dem Regen.",
// //         "example_EN": "The road is slippery after the rain."
// //     },
// //     {
// //         "word": "durchnitlich",
// //         "type": "adjective",
// //         "translation": "average",
// //         "example": "Die Leistung des Teams liegt über dem durchnitlichen Wert.",
// //         "example_EN": "The team's performance is above average."
// //     },
// //     {
// //         "word": "erleben",
// //         "type": "verb",
// //         "translation": "to experience / to undergo",
// //         "example": "Ich möchte gerne eine Safari erleben.",
// //         "example_EN": "I would like to experience a safari."
// //     },
// //     {
// //         "word": "früst",
// //         "type": "adjective",
// //         "translation": "sly / cunning",
// //         "example": "Er ist ein früster Geschäftsmann und weiß, wie er gute Deals machen kann.",
// //         "example_EN": "He's a sly businessman and knows how to make good deals."
// //     },
// //     {
// //         "word": "herausfinden",
// //         "type": "verb",
// //         "translation": "to find out / to discover",
// //         "example": "Sie müssen herausfinden, wer für das Projekt verantwortlich ist.",
// //         "example_EN": "You need to find out who is responsible for the project."
// //     },
// //     {
// //         "word": "ankündigen",
// //         "type": "verb",
// //         "translation": "to announce / to declare",
// //         "example": "Der Bürgermeister wird heute Abend eine wichtige Ankündigung machen.",
// //         "example_EN": "The mayor will make an important announcement tonight."
// //     },
// //     {
// //         "word": "niedrigschwällig",
// //         "type": "adjective",
// //         "translation": "low-threshold",
// //         "example": "Das Angebot richtet sich an Menschen mit niedrigschwelligem Zugang zu Bildung.",
// //         "example_EN": "The offer is aimed at people with low-threshold access to education."
// //     },
// //     {
// //         "word": "Witz",
// //         "type": "noun",
// //         "translation": "joke",
// //         "example": "Der Witz hat alle zum Lachen gebracht.",
// //         "example_EN": "The joke made everyone laugh."
// //     },
// //     {
// //         "word": "behaupten",
// //         "type": "verb",
// //         "translation": "to claim / to assert",
// //         "example": "Sie behauptet, sie habe den Diebstahl nicht begangen.",
// //         "example_EN": "She claims she didn't commit the theft."
// //     },
// //     {
// //         "word": "überverschlägt",
// //         "type": "verb",
// //         "translation": "to be overwhelmed",
// //         "example": "Die Menge der Aufgaben überverschlägt sie manchmal.",
// //         "example_EN": "The amount of tasks sometimes overwhelms her."
// //     },
// //     {
// //         "word": "pass auf",
// //         "type": "phrase",
// //         "translation": "watch out / be careful",
// //         "example": "Pass auf, die Straße ist glatt!",
// //         "example_EN": "Watch out, the road is slippery!"
// //     },
// //     {
// //         "word": "bewundern",
// //         "type": "verb",
// //         "translation": "to admire",
// //         "example": "Ich bewundere ihre Entschlossenheit und ihren Mut.",
// //         "example_EN": "I admire her determination and courage."
// //     },
// //     {
// //         "word": "armut",
// //         "type": "noun",
// //         "translation": "poverty",
// //         "example": "Die Regierung kämpft gegen die Armut im Land.",
// //         "example_EN": "The government is fighting against poverty in the country."
// //     },
// //     {
// //         "word": "aufgelöst",
// //         "type": "adjective",
// //         "translation": "dissolved / resolved",
// //         "example": "Das Problem wurde aufgelöst und die Situation ist wieder unter Kontrolle.",
// //         "example_EN": "The problem has been resolved and the situation is back under control."
// //     }
// // ];

// export const miroWords = [
//   //Frame 10
//   {
//     "word": "eindeutig",
//     "type": "adjective",
//     "translation": "clear",
//     "example": "Die Vorgaben des Projekts sind eindeutig und genau.",
//     "example_EN": "The specifications of the project are clear and precise."
//   },
//   {
//     "word": "zurückführen",
//     "type": "verb",
//     "translation": "trace????",
//     "example": "",
//     "example_EN": ""
//   },
  
//   {
//     "word": "geistig",
//     "type": "adjective",
//     "translation": "mental / cognitive / intellectual",
//     "example": "Die Buchübersetzung bleibt das geistige Eigentum des Autors.",
//     "example_EN": "The book translation remains the intellectual property of the author."
//   },
//   {
//     "word": "Tätigkeit",
//     "type": "noun",
//     "gender": "f",
//     "translation": "activity",
//     "example": "Unsere Recherche zeigt, dass Fahrradfahren eine gesunde Tätigkeit ist.",
//     "example_EN": "Our research shows that cycling is a healthy activity."
//   },
//   {
//     "word": "betreten etw + Akk",
//     "type": "verb",
//     "translation": "enter sth.",
//     "example": "Nachdem alles vorbereitet war, betraten die Gäste den Speisesaal.",
//     "example_EN": "After everything was prepared, the guests entered the dining room."
//   },
//   {
//     "word": "Vorschrift",
//     "type": "noun",
//     "gender": "f",
//     "translation": "regulation",
//     "example": "Die neuen Vorschriften sind vollkommen umsetzbar.",
//     "example_EN": "The new regulations are perfectly viable."
//   },
//   {
//     "word": "befolgen etw + Akk",
//     "type": "verb",
//     "translation": "follow / comply with",
//     "example": "Er befolgte die Anweisungen gewissenhaft.",
//     "example_EN": "He carefully followed the instructions."
//   },
//   {
//     "word": "unumgänglich",
//     "type": "adjective",
//     "translation": "inevitable",
//     "example": "Die Auferlegung von Regulierungsmaßnahmen ist unumgänglich.",
//     "example_EN": "The imposition of regulatory procedures is inevitable."
//   },
//   {
//     "word": "bestreben",
//     "type": "verb",
//     "translation": "strive",
//     "example": "Ihr größtes Bestreben ist es, die Goldmedaille zu gewinnen.",
//     "example_EN": "Winning the gold medal is her biggest aspiration."
//   },
//   {
//     "word": "imstande sein",
//     "type": "verb",
//     "translation": "be able",
//     "example": "",
//     "example_EN": ""
//   },
//   {
//     "word": "übrig",
//     "type": "adjective",
//     "translation": "left / remaining",
//     "example": "Nimm dir ein weiteres Stück Kuchen, zwei sind noch übrig.",
//     "example_EN": "Have another slice of the cake, there are two left."
//   },
//   {
//     "word": "Absicht",
//     "type": "noun",
//     "gender": "f",
//     "translation": "intention",
//     "example": "Es war nicht meine Absicht, etwas zu zerbrechen.",
//     "example_EN": "It was not my intent to break something."
//   },
//   {
//     "word": "zwingen jdn/etw + Akk",
//     "type": "verb",
//     "translation": "force / oblige",
//     "example": "Ich war gezwungen, mit dem Bus zu fahren, da kein Taxi frei war.",
//     "example_EN": "I was forced to take the bus because no taxi was available."
//   },
//   {
//     "word": "vermögen",
//     "type": "verb",
//     "translation": "be able / be capable",
//     "example": "Ich vermag diese Aufgabe nicht zu lösen.",
//     "example_EN": "I am unable to solve this task."
//   },
//   {
//     "word": "Vermögen",
//     "type": "noun",
//     "gender": "n",
//     "translation": "assets",
//     "example": "Meine Kinder werden mein ganzes Vermögen erben.",
//     "example_EN": "My children will inherit all my assets."
//   },
//   {
//     "word": "vorhaben etw + Akk",
//     "type": "verb",
//     "translation": "plan / intend",
//     "example": "Wir haben eine Reise nach Paris vor. / Sie hat vor, eines Tages Astronautin zu werden.",
//     "example_EN": "We are planning a trip to Paris. / She intends to become an astronaut one day."
//   },
//   {
//     "word": "erforderlich",
//     "type": "adjective",
//     "translation": "necessary",
//     "example": "Ich lege die erforderlichen Formulare bei.",
//     "example_EN": "I enclose the necessary forms."
//   },
  
//   {
//     "word": "verpflichten jdn",
//     "type": "verb",
//     "translation": "oblige",
//     "example": "Das Gesetz verpflichtet Arbeitgeber, für eine sichere Arbeitsumgebung zu sorgen.",
//     "example_EN": "The law obliges employers to ensure a safe work environment."
//   },
//   {
//     "word": "verschaffen etw + Akk",
//     "type": "verb",
//     "translation": "provide sth.",
//     "example": "Das Dokument verschafft einen Überblick über die Finanzlage.",
//     "example_EN": "The document provides an overview of the financial status."
//   },
//   {
//     "word": "Geisteskraft",
//     "type": "noun",
//     "gender": "f",
//     "translation": "mental strength",
//     "example": "",
//     "example_EN": ""
//   },
//   {
//     "word": "Merkfähigkeit",
//     "type": "noun",
//     "gender": "f",
//     "translation": "memory / retentiveness ",
//     "example": "",
//     "example_EN": ""
//   },
//   {
//     "word": "beabsichtigen etw + Akk",
//     "type": "verb",
//     "translation": "intend  / plan",
//     "example": "Ich beabsichtige, heute Abend auszugehen.",
//     "example_EN": "I plan to go out tonight."
//   },
//   {
//     "word": "Vorstellungsvermögen",
//     "type": "noun",
//     "gender": "n",
//     "translation": "imagination",
//     "example": "",
//     "example_EN": ""
//   },
//   {
//     "word": "abseits",
//     "type": "adverb",
//     "translation": "apart from",
//     "example": "",
//     "example_EN": ""
//   },
//   {
//     "word": "umfangreich",
//     "type": "adjective",
//     "translation": "extensive",
//     "example": "Der neue Manager hat umfangreiche Erfahrung in der Industrie.",
//     "example_EN": "The new manager has extensive experience in the industry."
//   },
//   {
//     "word": "Vorfahre",
//     "type": "noun",
//     "gender": "m",
//     "translation": "ancestor",
//     "example": "Die Geschichte meiner Vorfahren ist interessant.",
//     "example_EN": "The history of my ancestors is interesting."
//   },
  
//   {
//     "word": "Wesen",
//     "type": "",
//     "gender": "",
//     "translation": "beings",
//     "example": "",
//     "example_EN": ""
//   },
//   {
//     "word": "allmählich",
//     "type": "adjective",
//     "translation": "gradual / progressive",
//     "example": "Ich bemerke eine allmähliche Verbesserung meiner französischen Aussprache.",
//     "example_EN": "I am noticing a gradual improvement in my French pronunciation."
//   },
//   {
//     "word": "anschaulich",
//     "type": "adjective",
//     "translation": "vivid / clear / graphic",
//     "example": "Der Roman bietet eine anschauliche Darstellung des ländlichen Lebens.",
//     "example_EN": "The novel gives a vivid description of rural life."
//   },
//   {
//     "word": "schlau",
//     "type": "adjective",
//     "translation": "sharp / clever",
//     "example": "Der Junge ist schlau, er lernt schnell.",
//     "example_EN": "The boy is sharp, he learns quickly."
//   },
//   {
//     "word": "sich Akk ansiedeln",
//     "type": "verb",
//     "translation": "settle",
//     "example": "",
//     "example_EN": ""
//   },
//   {
//     "word": "züchten etw + Akk",
//     "type": "verb",
//     "translation": "breed / grow sth.",
//     "example": "Der Fischer züchtete Austern, um sie zu verkaufen.",
//     "example_EN": "The fisherman grew oysters to sell them."
//   },
//   {
//     "word": "Urgeschichte",
//     "type": "noun",
//     "gender": "f",
//     "translation": "prehistory",
//     "example": "",
//     "example_EN": ""
//   },
//   {
//     "word": "Zerstörer",
//     "type": "noun",
//     "gender": "m",
//     "translation": "destroyer",
//     "example": "",
//     "example_EN": ""
//   },
//   {
//     "word": "Feld",
//     "type": "noun",
//     "gender": "n",
//     "translation": "field",
//     "example": "Der Bauer hat auf dem Feld gearbeitet. / Ich habe bei meinem Antrag alle Felder ausgefüllt.",
//     "example_EN": "The farmer worked in the field. / I filled in all the boxes on my application."
//   },
//   // Frame 9
//   {
//     "word": "Vielfalt",
//     "type": "noun",
//     "gender": "f",
//     "translation": "variety / diversity",
//     "example": "Unser Bürgermeister liebt die kulturelle Vielfalt.",
//     "example_EN": "Our mayor is fond of cultural diversity."
//   },
//   {
//     "word": "Eckpfeiler",
//     "type": "noun",
//     "gender": "m",
//     "translation": "cornerstone",
//     "example": "Zusammenarbeit ist der Eckpfeiler unseres Erfolgs.",
//     "example_EN": "Cooperation is the cornerstone of our success."
//   },
//   {
//     "word": "gestehen etw. + Akk",
//     "type": "verb",
//     "translation": "confess / admit (sth.)",
//     "example": "Nachdem die Polizei den Dieb gefangen hatte, gestand er sofort.",
//     "example_EN": "After the police caught the thief, he confessed immediately."
//   },
//   {
//     "word": "sich Akk an jdn./etw. Akk richten",
//     "type": "verb",
//     "translation": "be addressed to sb./sth.",
//     "example": "",
//     "example_EN": ""
//   },
//   {
//     "word": "munkeln",
//     "type": "verb",
//     "translation": "rumor",
//     "example": "Es wird gemunkelt, dass es in der Höhle spukt.",
//     "example_EN": "It is rumored that the cave is haunted."
//   },
//   {
//     "word": "hauptsächlich",
//     "type": "adjective",
//     "translation": "main  / primary",
//     "example": "Unser hauptsächliches Anliegen ist es, die Umwelt zu schützen.",
//     "example_EN": "Our main concern is to protect the environment."
//   },
//   {
//     "word": "genügen etw. + Dat",
//     "type": "verb",
//     "translation": "be enough / fulfill sth.",
//     "example": "Ein kurzer Druck auf den Knopf genügt, um die automatische Tür zu öffnen.",
//     "example_EN": "A short push on the button is enough to open the automatic door."
//   },
//   {
//     "word": "genügend",
//     "type": "adverb",
//     "translation": "enough",
//     "example": "Man sollte nicht nur gesund essen, sondern auch genügend trinken.",
//     "example_EN": "One should not only eat healthily but also drink enough."
//   },
//   {
//     "word": "Gelder",
//     "type": "noun",
//     "gender": "p",
//     "translation": "funds",
//     "example": "Das Unternehmen teilt Gelder für Forschungsprojekte zu.",
//     "example_EN": "The company allocates funds for research projects."
//   },
//   {
//     "word": "handfest",
//     "type": "adjective",
//     "translation": "tangible",
//     "example": "",
//     "example_EN": ""
//   },
//   {
//     "word": "fordern etw. + Akk",
//     "type": "verb",
//     "translation": "demand (sth.)",
//     "example": "Die Gewerkschaft hat höhere Löhne gefordert.",
//     "example_EN": "The trade union demanded higher wages."
//   },
//   {
//     "word": "zeitlich",
//     "type": "adjective",
//     "translation": "temporal / chronological",
//     "example": "",
//     "example_EN": ""
//   },
//   {
//     "word": "übereinstimmen",
//     "type": "verb",
//     "translation": "match",
//     "example": "Die Ware muss mit den Mustern übereinstimmen. / Die Berichte stimmen mit dem überein, was wir gesehen haben.",
//     "example_EN": "The goods have to match the samples. / The reports correspond to what we have seen."
//   },
//   {
//     "word": "Vorhandensein",
//     "type": "noun",
//     "gender": "n",
//     "translation": "presence / existence",
//     "example": "",
//     "example_EN": ""
//   },
//   {
//     "word": "Rechtschreibung ",
//     "type": "noun",
//     "gender": "f",
//     "translation": "spelling",
//     "example": "Ich überprüfe immer die Rechtschreibung, wenn ich einen Brief schreibe.",
//     "example_EN": "I always check the spelling when I write a letter."
//   },
//   {
//     "word": "etw. Akk erlernen",
//     "type": "verb", 
//     "translation": "learn / acquire sth.",
//     "example": "Wir wissen nicht, ob musikalische Fähigkeiten angeboren oder erlernt sind.",
//     "example_EN": "We do not know whether musical ability is innate or acquired."
//   },
//   {
//     "word": "geschweige",
//     "type": "conjunction",
//     "translation": "let alone",
//     "example": "",
//     "example_EN": ""
//   },
//   {
//     "word": "etw. Akk bejahen",
//     "type": "verb",
//     "translation": "affirm sth.",
//     "example": "",
//     "example_EN": ""
//   },
//   {
//     "word": "geschweige",
//     "type": "conjunction",
//     "translation": "let alone",
//     "example": "",
//     "example_EN": ""
//   },
  
//   {
//     "word": "hinaussehen",
//     "type": "verb",
//     "translation": "look out",
//     "example": "",
//     "example_EN": ""
//   },
//   {
//     "word": "hinstellen etw. + Akk",
//     "type": "verb",
//     "translation": "put down",
//     "example": "",
//     "example_EN": ""
//   },

//   // Frame 6

//   {
//     "word": "sich Akk anstrengen",
//     "type": "verb",
//     "translation": "strain / make an effort",
//     "example": "Ich muss mich anstrengen, um die gesamte Arbeit rechtzeitig zu erledigen.",
//     "example_EN": "I need to make an effort to get all the work done in time."
//   },
//   {
//     "word": "schwinden",
//     "type": "verb",
//     "translation": "fade away/ disappear",
//     "example": "Die Fluten schwanden schnell, als es aufhörte zu regnen.",
//     "example_EN": "The flood water quickly receded when the rain stopped."
//   },
//   {
//     "word": "einst",
//     "type": "adverb",
//     "translation": "once / at one time",
//     "example": "Unser Haus war einst eine Bäckerei. / Einst formten die beiden Kontinente eine einzige riesige Landmasse.",
//     "example_EN": "Our house was once a bakery. / At one time, the two continents formed a single huge land mass."
//   },
//   {
//     "word": "Jagd",
//     "type": "noun",
//     "gender":"f",
//     "translation": "hunt",
//     "example": "Er ließ die Hunde frei, und die Jagd begann.",
//     "example_EN": "He loosed the dogs, and the hunt began."
//   },
//   {
//     "word": "vererben etw. + Akk",
//     "type": "verb",
//     "translation": "leave sth. / transmit sth.",
//     "example": "Sie hat ihre Allergien nicht an ihre Kinder vererbt.",
//     "example_EN": "She did not transmit her allergies to her children."
//   },
//   {
//     "word": "abwärts",
//     "type": "adverb",
//     "translation": "down / downwards",
//     "example": "",
//     "example_EN": ""
//   },
//   {
//     "word": "sesshaft",
//     "type": "adjective",
//     "translation": "settled / sedentary",
//     "example": "",
//     "example_EN": ""
//   },
//   {
//     "word": "füttern etw. + Akk",
//     "type": "verb", 
//     "translation": "feed sb./sth",
//     "example": "Er hat seine Katze oft mit Fisch gefüttert.",
//     "example_EN": "He frequently fed fish to his cat."
//   },
//   {
//     "word": "glänzen",
//     "type": "verb",
//     "translation": "shine / glitter",
//     "example": "Die Augen meines Sohnes glänzten, als er das Geschenk sah.",
//     "example_EN": "My son's eyes were shining when he saw the present."
//   },
//   {
//     "word": "etw. Akk zücken ",
//     "type": "verb",
//     "translation": "pull sth. out",
//     "example": "",
//     "example_EN": ""
//   },
//   {
//     "word": "begreifen etw. + Akk",
//     "type": "verb",
//     "translation": "understand sth / grasp",
//     "example": "Sie kann komplexe Probleme begreifen und sie schnell lösen.",
//     "example_EN": "She can grasp complex problems and solve them quickly."
//   },
//   {
//     "word": "eigenständig",
//     "type": "adjective",
//     "translation": "independent",
//     "example": "Eine eigenständige Person ist von niemandem abhängig.",
//     "example_EN": "An autonomous person is not dependent on anyone."
//   },
//   {
//     "word": "wiederum",
//     "type": "adverb",
//     "translation": "again / in turn",
//     "example": "Sie mochte die Idee. Ihr Bruder wiederum war dagegen.",
//     "example_EN": "She liked the idea. Her brother, in turn, was against it."
//   },
//   {
//     "word": "erlegen etw. Akk",
//     "type": "verb",
//     "translation": "shoot / succumbed (adjective)",
//     "example": "",
//     "example_EN": ""
//   },
//   {
//     "word": "unbedingt",
//     "type": "adjective",
//     "translation": "absolute / imperative",
//     "example": "",
//     "example_EN": ""
//   },
//   {
//     "word": "unbedingt",
//     "type": "adverb",
//     "translation": "absolutely / necessarily",
//     "example": "Es ist unbedingt notwendig, sich die Hände mit Seife zu waschen.",
//     "example_EN": "It is absolutely necessary to wash hands with soap."
//   },
//   {
//     "word": "einstellen (jdn./etw.Akk)",
//     "type": "verb",
//     "translation": "set / adjust / stop sth. / hire (sb.)",
//     "example": "Sie können mit dieser Taste die Lautstärke einstellen.",
//     "example_EN": "You can adjust the volume with this button."
//   },
//   {
//     "word": "hingegen",
//     "type": "conjunction",
//     "translation": "whereas / on the contrary",
//     "example": "Ich liebe Pizza; meine Schwester hingegen mag lieber Pasta.",
//     "example_EN": "I love pizza, whereas my sister prefers pasta."
//   },
//   {
//     "word": "auffrischen (etw.Akk ~)",
//     "type": "verb",
//     "translation": "refresh sth. / freshen up",
//     "example": "Ich muss meine Programmierkenntnisse auffrischen.",
//     "example_EN": "I have to brush up on my programming skills."
//   },
//   {
//     "word": "aufgreifen (jdn./etw.Akk)",
//     "type": "verb",
//     "translation": "pick sth. up / take up",
//     "example": "Er greift einige interessante Themen in seinem neuen Buch auf.",
//     "example_EN": "He takes up some interesting subjects in his new book."
//   },
//   {
//     "word": "sich Akk auskennen",
//     "type": "verb",
//     "translation": "be well informed",
//     "example": "",
//     "example_EN": ""
//   },
//   {
//     "word": "beurteilen (etw.Akk ~)",
//     "type": "verb",
//     "translation": "assess sb./sth.",
//     "example": "Der Arzt beurteilte die Schwere meiner Krankheit.",
//     "example_EN": "The doctor assessed the severity of my illness."
//   },
//   {
//     "word": "scheitern",
//     "type": "verb",
//     "translation": "fail",
//     "example": "Wenn man scheitert, muss man es erneut versuchen.",
//     "example_EN": "If you fail, you need to try again."
//   },
//   {
//     "word": "sich Akk mit etw. Dat vertraut machen",
//     "type": "verb",
//     "translation": "familiarize oneself with sth. ",
//     "example": "",
//     "example_EN": ""
//   },
//   {
//     "word": "Gedicht",
//     "type": "noun",
//     "gender": "n",
//     "translation": "poem",
//     "example": "Der kleine Junge sprach das Gedicht nach.",
//     "example_EN": "The little boy repeated the poem."
//   },
//   {
//     "word": "vielseitig",
//     "type": "adjective",
//     "translation": "versatile",
//     "example": "Die Musikerin ist vielseitig und kann verschiedene Instrumente spielen.",
//     "example_EN": "The musician is versatile and can play various instruments."
//   },
//   {
//     "word": "vielfältig",
//     "type": "adjective",
//     "translation": "diverse",
//     "example": "Die Speisekarte des neuen Restaurants ist sehr vielfältig.",
//     "example_EN": "The menu of the new restaurant is very diverse."
//   },
//   {
//     "word": "ehrgeizig",
//     "type": "adjective",
//     "translation": "ambitious / competitive",
//     "example": "Ich bin ehrgeizig, ich strebe danach, alle meine Ziele zu erreichen.",
//     "example_EN": "I am ambitious, I strive to achieve all of my aims."
//   },
//   {
//     "word": "knifflig",
//     "type": "adjective",
//     "translation": "tricky",
//     "example": "Das ist eine knifflige Frage und nicht leicht zu beantworten.",
//     "example_EN": "That is a tricky question and not easy to answer."
//   },
//   {
//     "word": "Erläuterung",
//     "gender":"f",
//     "type": "noun",
//     "translation": "explanation",
//     "example": "Die Erläuterung des Graphen befindet sich auf der nächsten Seite.",
//     "example_EN": "The explanation of the graph is on the next page."
//   },
//   {
//     "word": "Epoche",
//     "type": "noun",
//     "gender": "f",
//     "translation": "era / period",
//     "example": "Der Untergang des Römischen Reiches war der Beginn einer neuen Epoche.",
//     "example_EN": "The demise of the Roman Empire was the start of a new era."
//   },
//   {
//     "word": "Jäger",
//     "type": "noun",
//     "gender": "m",
//     "translation": "hunter",
//     "example": "Die Jäger gingen zur Jagd.",
//     "example_EN": "The hunters went out for a shoot."
//   },
//   {
//     "word": "Erleichterung",
//     "gender": word_gender.f,
//     "type": word_type.noun,
//     "translation": "relief / facilitation",
//     "example": "Es war eine Erleichterung, zu erfahren, dass es meinem Bruder gut ging.",
//     "example_EN": "It was a relief to hear that my brother was all right."
//   },
//   {
//     "word": "Fertigkeit",
//     "type": word_type.noun,
//     "gender": word_gender.f,
//     "translation": "skill",
//     "example": "Der Spieler schoss den Ball mit vollendeter Fertigkeit.",
//     "example_EN": "The player shot the ball with consummate skill."
//   },
//   {
//     "word": "Tierresten",
//     "type": word_type.noun,
//     "gender": word_gender.p,
//     "translation": "Animal remains",
//     "example": "",
//     "example_EN": ""
//   },  
//   {
//     "word": "Horde",
//     "type": word_type.noun,
//     "gender": word_gender.f,
//     "translation": "horde",
//     "example": "Eine Horde Fußballfans strömte ins Stadion.",
//     "example_EN": "A horde of football fans surged into the stadium."
//   },  {
//     "word": "Aufzucht",
//     "type": word_type.noun,
//     "gender": word_gender.f,
//     "translation": "breeding",
//     "example": "",
//     "example_EN": ""
//   },  {
//     "word": "Nähnadel",
//     "type": word_type.noun,
//     "gender": word_gender.f,
//     "translation": "needle",
//     "example": "",
//     "example_EN": ""
//   },  {
//     "word": "umschreiben (etw.Akk ~)",
//     "type": word_type.verb,
//     "translation": "describe / rewrite smth.",
//     "example": "",
//     "example_EN": ""
//   },  {
//     "word": "Anhieb",
//     "type": word_type.noun,
//     "gender": word_gender.f,
//     "translation": "Bait ???????",
//     "example": "",
//     "example_EN": ""
//   },  {
//     "word": "Speer",
//     "type": word_type.noun,
//     "gender": word_gender.m,
//     "translation": "spear",
//     "example": "Er stieß den Speer mit aller Kraft vorwärts.",
//     "example_EN": "He thrust the spear forward with all his might."
//   },  {
//     "word": "Pfeil",
//     "type": word_type.noun,
//     "gender": word_gender.m,
//     "translation": "arrow",
//     "example": "Sie kann einen Pfeil aus großer Entfernung direkt in die Zielscheibe schießen.",
//     "example_EN": "She can shoot an arrow straight into the target from a great distance."
//   },  {
//     "word": "Bogen",
//     "type": word_type.noun,
//     "gender": word_gender.m,
//     "translation": "bow",
//     "example": "Ein Bogen wird zum Abschießen von Pfeilen verwendet.",
//     "example_EN": "A bow is used for shooting arrows."
//   },  {
//     "word": "abwechslungsreich",
//     "type": word_type.adjective,
//     "translation": "varied",
//     "example": "",
//     "example_EN": ""
//   },  {
//     "word": "Raubtier",
//     "type": word_type.noun,
//     "gender": word_gender.n,
//     "translation": "predator",
//     "example": "Tiger und Löwen sind Raubtiere.",
//     "example_EN": "Tigers and lions are predators."
//   },  {
//     "word": "Kälte",
//     "type": word_type.noun,
//     "gender": word_gender.f,
//     "translation": "cold",
//     "example": "Die Kälte brachte mich zum Zittern.",
//     "example_EN": "The cold made me shiver."
//   },
//   {
//     "word": "roh",
//     "type": word_type.adjective,
//     "translation": "raw",
//     "example": "Das Essen ist noch nicht fertig, weil das Huhn noch roh ist.",
//     "example_EN": "Dinner is not ready yet because the chicken is still raw."
//   },
//   {
//     "word": "Knochen",
//     "type": word_type.noun,
//     "gender": word_gender.m,
//     "translation": "bone",
//     "example": "Der Hund grub den Knochen im Garten ein.",
//     "example_EN": "The dog buried the bone in the garden."
//   },
//   {
//     "word": "Fell",
//     "type": word_type.noun,
//     "gender": word_gender.n,
//     "translation": "fur",
//     "example": "Das Futter des Mantels ist aus Fell gefertigt.",
//     "example_EN": "The lining of the coat is made of fur."
//   },
//   {
//     "word": "Leder",
//     "type": word_type.noun,
//     "gender": word_gender.n,
//     "translation": "leather",
//     "example": "Die Tasche besteht aus echtem Leder.",
//     "example_EN": "The bag is made of genuine leather."
//   },
//   {
//     "word": "Sehnen",
//     "type": word_type.noun,
//     "gender": word_gender.p,
//     "translation": "tendons?????",
//     "example": "",
//     "example_EN": ""
//   },
//   {
//     "word": "Innereien",
//     "type": word_type.noun,
//     "gender": word_gender.p,
//     "translation": "offal",
//     "example": "Manche Leute essen gerne Innereien wie Leber und Nieren.",
//     "example_EN": "Some people enjoy eating offal, such as liver and kidneys."
//   },

//   // Frame 5, 4, 3, 2, 1
//   {
//     "word": "",
//     "type": word_type.noun,
//     "gender": word_gender.f,
//     "translation": "",
//     "example": "",
//     "example_EN": ""
//   },
//   {
//     "word": "",
//     "type": word_type.noun,
//     "gender": word_gender.f,
//     "translation": "",
//     "example": "",
//     "example_EN": ""
//   },
//   {
//     "word": "",
//     "type": word_type.noun,
//     "gender": word_gender.f,
//     "translation": "",
//     "example": "",
//     "example_EN": ""
//   },
// ];