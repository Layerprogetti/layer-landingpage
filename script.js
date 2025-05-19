<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Design your Business" />
  <title>Progetto – LAYER Retail Design</title>
  <link rel="icon" type="image/svg+xml" href="images/favicon.svg" />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;500&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <!-- Header -->
  <header>
    <img src="images/layer logo bandiera.svg" alt="Logo" class="logo" />
    <nav>
      <a href="index.html" class="menu-link">Home</a>
      <a href="about.html" class="menu-link">About</a>
      <a href="#footer" class="menu-link">Contatti</a>
    </nav>
  </header>

  <!-- Galleria progetto -->
  <main>
    <section class="project-gallery">
      <div class="project-image" onclick="openImage('images/immagine demo.jpg', 'Nome Progetto')">
        <img src="images/immagine demo.jpg" alt="Dettaglio progetto 1" />
      </div>
      <div class="project-image" onclick="openImage('images/immagine demo.jpg', 'Nome Progetto')">
        <img src="images/immagine demo.jpg" alt="Dettaglio progetto 2" />
      </div>
      <div class="project-image" onclick="openImage('images/immagine demo.jpg', 'Nome Progetto')">
        <img src="images/immagine demo.jpg" alt="Dettaglio progetto 3" />
      </div>
      <h2>Nome Progetto – Luogo</h2>
      <p>Descrizione dettagliata del progetto, materiali utilizzati, obiettivi progettuali e soluzioni adottate.</p>
    </section>
  </main>

  <!-- Footer -->
  <footer id="footer">
    <p>LAYER Retail Design è Main Designer per COSPE</p>
    <div class="contatti">
      <div><img src="images/posizione.svg" alt="Posizione" /> Indirizzo</div>
      <div><img src="images/mail.svg" alt="Email" /> email@example.com</div>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>
