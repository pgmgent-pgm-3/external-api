# External APIs

# Introductie
In deze oefening maak je gebruik van een aantal externe APIs en resources:
- [randomuserme](https://randomuser.me/): een externe api die willekeurige profielen aanmakt.
- [fakerjs](https://github.com/marak/Faker.js/): om fake data aan te maken en te seeden
- [popper](https://popper.js.org/): om tooltips aan te maken
- [dicebear](http://dicebear.com/): om alternatieve avatars aan te maken
- [dayjs](https://day.js.org/): om een datum te parsen en formatteren.

# Oefening
Je maakt een overzicht van een aantal werknemers op een teams pagina.

![Random User Me pagina](./.assets/randomuserme.png?raw=true)

1. Vraag een aantal willekeurige profielen op met randomuserme en render ze uit in je pagina. De CSS werd al aangemaakt, bekijk wat je tot je beschikking hebt.
2. Maak een module waarmee je fake data genereert met fakerjs, gelijkaardig aan de data die je krijgt van randomuserme. Je modeleert enkel de velden die je nodig hebt (id, gender, name, email, dob & picture). Je vervangt de avatar urls door alternatieve avatars van Dicebear. *LET OP*: de huidige versie van fakerjs haalt normaal gezien de avatars op van uifaces.com, deze service is niet meer beschikbaar.
![Dicebear pagina](./.assets/dicebear.png?raw=true)
3. Gebruik popper om een tooltip te tonen. Je toont de naam en de voornaam van elke persoon, inclusief zijn/haar geboortedatum.De geboortedatum formatteer je met dayjs.
4. Voeg een serviceworker toen aan je pagina. Wanneer er data wordt opgevraagd van randomuser.me vervang je deze door de fake data die je maakte in stap 2. *LET OP*: een service worker kan geen modules gebruiken die je in de browser thread zou gebruiken. Gebruik de importScripts() syntax om faker in te laden.