<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Design your Business" />
  <title>Progetto Aperto – LAYER Retail Design</title>
  <link rel="icon" type="image/svg+xml" href="images/favicon.svg" />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;500&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="style.css" />
  <style>
    .lightbox {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px;
      position: relative;
    }
    .lightbox-img {
      max-width: 90vw;
      max-height: 80vh;
      margin-bottom: 20px;
    }
    .project-title {
      font-weight: 500;
      margin-top: 10px;
    }
    .close-btn {
      position: absolute;
      top: 20px;
      right: 20px;
      background: black;
      color: white;
      border: none;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      font-size: 20px;
      line-height: 32px;
      text-align: center;
      cursor: pointer;
    }
    .close-btn:hover {
      background: #444;
    }
  </style>
</head>
<body class="progetto-aperto">
  <div class="lightbox">
    <button class="close-btn" onclick="window.history.back()">×</button>
    <img src="images/immagine demo.jpg" alt="Progetto" class="lightbox-img" />
    <h2 class="project-title">Nome Progetto</h2>
  </div>
</body>
</html>
