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
1. Pagina de start cu login
![image](https://user-images.githubusercontent.com/83916304/117867786-81acdb00-b2a1-11eb-9857-6a6e44a71309.png)

2. Login Prompt
![image](https://user-images.githubusercontent.com/83916304/117868027-c46eb300-b2a1-11eb-8b91-286f7a217efe.png)

3. Validare Google Login
![image](https://user-images.githubusercontent.com/83916304/117868063-cfc1de80-b2a1-11eb-83e4-05b5608894ba.png)

4. Main Page
![image](https://user-images.githubusercontent.com/83916304/117868085-d94b4680-b2a1-11eb-96b4-59971edf4937.png)

5. Search
![image](https://user-images.githubusercontent.com/83916304/117868154-eec07080-b2a1-11eb-9ae3-ea75b2b8fa7a.png)

6. Book card cu informații despre carte
![image](https://user-images.githubusercontent.com/83916304/117868192-fb44c900-b2a1-11eb-9c2a-d2affa03c942.png)
![image](https://user-images.githubusercontent.com/83916304/117868224-03046d80-b2a2-11eb-9aeb-aff6b79c5a1e.png)

7. Redirecționare către preview-ul cărții
![image](https://user-images.githubusercontent.com/83916304/117868257-0ac41200-b2a2-11eb-855d-3f7e503b853c.png)
![image](https://user-images.githubusercontent.com/83916304/117868272-10b9f300-b2a2-11eb-9de6-2e5d0e64292d.png)

Link Alternativ către screenshots în Google Drive:
https://drive.google.com/drive/folders/1NDL5qGc2GNqfsDIX_y3nwzMWQEUt4k4_?usp=sharing
