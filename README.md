# Aplicație Books from Google

## Introducere și descrierea problemei

Această aplicație simplă are rol de a ajuta utilizatorii să găsească rapid si simplu cele mai relevante cărți pentru nevoile lor, în librăria Google Books. Dată fiind creșterea în popularitate a cărților în format electornic (e-books sau audiobooks) din ultimii ani și revenirea cititului printre hobby-urile ceva mai populare în timpul pandemiei de COVID-19, o astfel de librărie online devine o resursă importantă, fiind foarte simplu să găsim acolo cărți din toate ariile de interes. 

Astfel, aplicația Node.js+React creată facilitează accesul la librărie pentru utilizatorii Google, fiind un mijloc simplu de căutare. Funcția de autentificare folosind un cont Google permite accesul imediat la conținuturile Google Books și la toate funcțiile oferite pentru utilizatori de către Google, oferind de asemenea o descriere scurtă pentru fiecare carte și posibilitatea de redirecționare către Preview-urile stil PDF ale cărților, direct în Google Books.

După realizarea aplicației, aceasta a fost publicată în Cloud-ul Microsoft Azure, utilizând o subscripție Enterprise, folosind un Resource Group și Azure App Service cu deploy în regiunea West Europe (între cele mai apropiate de România). Pentru deployment-ul efectiv am utilizat extensia Azure App Service din Visual Studio Code.

## Descriere APIs

### Google Auth
API-ul pentru autentificare este oferit de Google, pentru care cheia OAuth a fost obținută cu ajutorul unui proiect în Google Cloud Platform folosind contul Google de student. Astfel am putut implementa pe pagina inițială un buton de Google Login, care deschide o fereastră de autentificare, ce redirecționează utilizatorii către pagina principală de search a aplicației.

### Books API v1
Pentru căutarea efectivă a cărților am utilizat Books API, parte a suitei de Google APIs, către care aplicația face un GET request pentru a returna rezultatele căutării inițiate, utilizând de asemenea parametri referitori la numărul maxim de rezultate de afișat și un index de start.

Documentație Books API: https://developers.google.com/books/docs/v1/using#WorkingVolumes

## Flux de date

La deschiderea link-ului aplicației, utilizatorul este nevoit să se autentifice cu un cont Google (folosind Google OAuth 2.0) pentru a accesa aplicația. Se face un request către serverul Google și un redirect către mainpage odată ce autentificarea este reușită. Urmează requestul de GET către Books API, realizat prin introducerea de text pentru căutare de către utilizator. De asemenea, se poate regla numărul maxim de rezultate afișate.

### Capturi de ecran

