# Beskrivning

I detta obligatoriska projektarbetet visar du att du besitter kunskap inom koncept som tagits
upp under kursen.
# Inlämning
När du är klar med uppgiften och verifierat att samtliga kriterier för Godkänd (G)
alternativt Väl Godkänd (VG) är uppfyllda, skapa en Zip- eller RAR-fil innehållandes
samtliga projektfiler och ladda upp denna till Ping Pong (Examinering > Projektarbete).
Därefter sätter du upp dig för redovisning.
Inlämning sker senast fredag 3/6 kl 8:30. Missar du inlämningstiden kontaktar du
utbildningsledaren.<br>
Betygsättning 
Du kan erhålla betyg Godkänd (G) samt Väl Godkänd (VG) på projektarbetet.
Instruktioner
Du har möjlighet att välja ett fördefinierat projekt, alternativt ta fram ett eget. Instruktioner för
vardera alternativ hittar du nedan.
Fördefinierat projekt
# Godkänd (G)
För att erhålla betygsnivå Godkänd (G) krävs följande:
● Ska finnas webb-API med följande endpoints:
[] inte klar 
○ Hämta samtliga spel (GET /api/games)
■ Returnerar "200 OK" samt lista med spel (samtliga attribut).
■ Finns inga spel returneras tom array.
○ Söka efter spel (GET /api/games?title={title})
■ Returnerar "200 OK" samt lista med spel (samtliga attribut) filtrerade
på titel.
■ Finns inga spel, returneras tom array.
○ Hämta spel (GET /api/games/tetris)
■ Returnerar "200 OK" samt spelet (samtliga attribut), baserat på
URL-slug.
■ Finns inte spelet returneras "404 Not Found".
○ Lägga till spel (POST /api/games)
■ Returnerar "201 Created" om det gick att skapa spelet
● Representation av spelet skickas med i body (samtliga
attribut).
● Location-headern är satt att peka på nya resursen (t.ex.
"/api/games/tetris").
■ Returnerar "400 Bad Request" om
● Spelets titel, beskrivning, imageUrl, eller genre saknas..
○ Radera spel (DELETE /api/games/{urlslug})
■ Returnerar "204 No Content" (oavsett om resursen finns att radera
eller ej).
○ Hämta globala highscores (GET /api/scores/highscores)
■ Returnerar "200 OK" samt lista med globala highscores (score + game
- dvs. det som behövs för att visa dessa på startsidan)
■ Finns inga score returneras tom array.
○ Hämta highscores per spel (GET /api/games/{urlSlug}/highscores)
■ Returnerar "200 OK" samt lista med highscores för spelet.
■ Finns inga score returneras tom array.
○ Registrera highscore (POST /api/scores)
■ Returnerar "201 Created", representation av score som precis skickas
med i body.
■ Returnerar "400 Bad Request" om information saknas eller är felaktig,
t.ex. poäng saknas.
● Generera dokumentation av webb-API automatiskt med Open API.
● Skriva minst 1 test för valfri webb-API endpoint.
● Muntligt förhör
● Beskriv vad REST är
● Beskriv hur versionering av API fungerar
○ Förklara varför det kan vara nödvändigt att versionera API
○ Ge exempel på hur man kan versionera API
● Ge exempel på ett par säkerhetshot relaterade till webbapplikationer
# Väl Godkänd (VG)
För att erhålla betygsnivå Väl Godkänd (VG) krävs följande:
● Uppnått kriterier för betyg Godkänd (G) (se ovan).
● Följande webb API ska exponeras av backend:
○ Uppdatera spel (PUT/PATCH /api/games/{urlslug})
■ Returnerar "204 No Content" om det gick att ersätta/uppdatera.
■ Returnerar "404 Not Found" om spelet inte finns.
○ Skapa token (POST /api/auth)
■ Returnera "200 OK", genererad token skickas tillbaka.
■ Returnera "401 Unauthorized" om användarnamn/lösenord är fel.
● Skydda följande endpoints (kräver giltig JWT-token för att anropa dom):
○ Lägga till spel (POST /api/games)
○ Radera spel (DELETE /api/games/{urlslug})
○ Uppdatera spel (PUT/PATCH /api/games/{urlslug})
○ Registrera highscore (POST /api/scores)
● Samtliga endpoints har tester
● Lämna in rapport
# Eget projekt
Du har även möjlighet att ta fram eget projekt. I detta fall behöver projektet inkludera
momenten som listas ovan, för eftersträvad betygsnivå. Boka tid med läraren senast tis
17/5 för att presentera din projektidé.
