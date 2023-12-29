# Beskrivning
I detta obligatoriska projektarbetet visar du att du besitter kunskap inom koncept som tagits
upp under kursen.
# Inlämning
När du är klar med uppgiften och verifierat att samtliga kriterier för Godkänd (G)
alternativt Väl Godkänd (VG) är uppfyllda, skapa en Zip- eller RAR-fil innehållandes
samtliga projektfiler och ladda upp denna till Ping Pong (Examinering > Projektarbete).
Därefter sätter du upp dig för redovisning.
Inlämning sker senast fredag 3/6 kl 8:30. Missar du inlämningstiden kontaktar du
utbildningsledaren. 
Betygsättning 
Du kan erhålla betyg Godkänd (G) samt Väl Godkänd (VG) på projektarbetet.
Instruktioner
Du har möjlighet att välja ett fördefinierat projekt, alternativt ta fram ett eget. Instruktioner för
vardera alternativ hittar du nedan.
Fördefinierat projekt
# Godkänd (G)
För att erhålla betygsnivå Godkänd (G) krävs följande:
 Ska finnas webb-API med följande endpoints:
 1. [x] Hämta samtliga spel (GET /api/games)
 2. [ ] Returnerar "200 OK" samt lista med spel (samtliga attribut).
 3. [ ] Finns inga spel returneras tom array. 
 # Söka efter spel (GET /api/games?title={title})
 4. [ ] Returnerar "200 OK" samt lista med spel (samtliga attribut) filtrerade  på titel.
 5. [ ] Finns inga spel, returneras tom array.
 # Hämta spel (GET /api/games/tetris)
 6. [ ] Returnerar "200 OK" samt spelet (samtliga attribut), baserat på
URL-slug
7. [ ] Finns inte spelet returneras "404 Not Found".
# Lägga till spel (POST /api/games)
8. [ ] Returnerar "201 Created" om det gick att skapa spelet
9. [ ] Representation av spelet skickas med i body (samtliga
attribut).
10. [ ] Location-headern är satt att peka på nya resursen (t.ex.
"/api/games/tetris").
11. [ ] Returnerar "400 Bad Request" om
 Spelets titel, beskrivning, imageUrl, eller genre saknas..
 # Radera spel (DELETE /api/games/{urlslug})
12. [ ] Returnerar "204 No Content" (oavsett om resursen finns att radera
eller ej).
# Hämta globala highscores (GET /api/scores/highscores)
13. [ ] Returnerar "200 OK" samt lista med globala highscores (score + game
- dvs. det som behövs för att visa dessa på startsidan)
14. [ ] Finns inga score returneras tom array
# Hämta highscores per spel (GET /api/games/{urlSlug}/highscores) 
15. [ ]Returnerar "200 OK" samt lista med highscores för spelet.
16. [ ] Finns inga score returneras tom array
# Registrera highscore (POST /api/scores)
17. [ ]Returnerar "201 Created", representation av score som precis skickas
med i body.
18. [ ]Returnerar "400 Bad Request" om information saknas eller är felaktig,
t.ex. poäng saknas.
19. [ ]Generera dokumentation av webb-API automatiskt med Open API.
20. [ ]Skriva minst 1 test för valfri webb-API endpoint
# Beskriv vad REST är
Beskriv hur versionering av API fungerar
Förklara varför det kan vara nödvändigt att versionera API
 Ge exempel på hur man kan versionera API
 Ge exempel på ett par säkerhetshot relaterade till webbapplikationer
