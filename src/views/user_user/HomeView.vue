<template>
  <div class="container-fluid">
    <div>
      <div class="banner-container p-2">
        <img src="@/assets/baner.jpg" class="img-fluid w-100 rounded-5" alt="Szeroki baner">
      </div>
    </div>
    <div class="container-fluid row col-12 py-3 text-center d-flex justify-content-center">
      <div class="col-12 col-sm-6 pt-5">
        <div class="mb-3">
          <h2> Dowiedz się więcej o naszych funkcjach</h2>
        </div>
        <div>
          <p>Pragniemy, aby nasza aplikacja muzyczna była nie tylko miejscem odkrywania nowych brzmień, ale także
            platformą, która dostosowuje się do Twoich potrzeb. Niezależnie od tego, czy jesteś miłośnikiem muzyki,
            artystą szukającym ekspozycji czy studiem nagraniowym, nasze funkcje są zaprojektowane, aby umożliwić Ci
            pełne
            wykorzystanie naszej aplikacji.</p>
        </div>
      </div>
    </div>

    <div class="container-fluid row col-12 text-center py-3 border-home mid-back-color">
      <div class="col-12 col-sm-6 pt-5 mt-4">
        <h2>Baza albumów</h2>
        <p>Odkryj niezliczone tytuły i gatunki muzyczne w naszej aplikacji, która oferuje dostęp do ogromnej bazy
          albumów. Bez względu na Twoje preferencje muzyczne, znajdziesz tu coś dla siebie. Poszerz swoje muzyczne
          horyzonty i odkrywaj nowe dźwięki każdego dnia!</p>
      </div>
      <div class="col-12 col-sm-5 m-5">
        <img src="@/assets/baner.jpg" alt="baner" class="img-fluid">
      </div>
    </div>

    <div class="container-fluid row col-12 text-center">
      <div class="row">
        <div class="col-12 col-sm-6 pt-5">
          <img src="@/assets/register.png" alt="baner" class="img-fluid">
        </div>
        <div class="col-12 col-sm-5 mt-5 p-5">
          <h2>Możliwość rejestracji jako studio, artysta lub użytkownik</h2>
          <p>Dołącz do społeczności muzyków, słuchaczy i entuzjastów naszej aplikacji! Zarejestruj się jako studio
            muzyczne, artysta lub po prostu jako pasjonat muzyki. Otwórz sobie drzwi do różnorodnych funkcji, które
            dostosowane są do Twoich potrzeb w świecie muzycznym.</p>
        </div>
      </div>
    </div>

    <div class="container-fluid row col-12 text-center border-home mid-back-color">
      <div class="col-12 col-sm-6 pt-5 mt-4 mb-5">
        <h2>Intuicyjny wygląd</h2>
        <p>Nasza aplikacja oferuje intuicyjny i estetyczny interfejs, który sprawia, że korzystanie z niej jest
          przyjemne i proste. Z łatwością nawiguj przez funkcje i treści, bez zbędnego zamieszania. Przejrzystość i
          prostota to nasze motto, abyś mógł cieszyć się muzyką bez dodatkowych przeszkód.</p>
      </div>
      <div class="col-12 col-sm-5 mt-5">
        <img src="@/assets/logo_name.png" alt="baner" class="img-fluid mt-5">
      </div>
    </div>

    <div class="container-fluid row col-12 text-center py-3">
      <div class="col-12 col-sm-6 pt-5">
        <img src="@/assets/player.png" alt="baner" class="img-fluid mt-5">
      </div>
      <div class="col-12 col-sm-5 mt-5">
        <h2>Wbudowany player</h2>
        <p>Odtwarzaj ulubione utwory bez przerywania. Nasz wbudowany odtwarzacz umożliwia słuchanie muzyki bez przerw,
          gdziekolwiek jesteś w aplikacji. Reguluj głośność i ciesz się doskonałą jakością
          dźwięku - wszystko w jednym miejscu.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

p {
  font-size: 20px;
}

* {
  font-family: 'Poppins', sans-serif;
}

.container-fluid {
  padding: 0;
}

.row {
  margin-right: 0;
  margin-left: 0;
}
</style>