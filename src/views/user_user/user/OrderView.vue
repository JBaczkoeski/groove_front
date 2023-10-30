<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-3 col-md-2 p-0">
        <SideBarUser />
      </div>
      <div class="col-12 col-sm-9 mt-5 mb-4 ms-4">
        <div class="row">
          <div class="col-12 mt-2 text-center border-bottom border-3">
            <h2>Zamówienie nr 12312412412</h2>
          </div>
          <div class="col-12 mt-5 px-5">
            <div class="row mb-3 border-bottom border-3">
              <div class="col-12 col-sm-5 ms-5">
                <h4 class="mb-3">Dane Klienta:</h4>
                <p><strong>Imię:</strong> Jan Kowalski</p>
                <p><strong>Email:</strong> jan.kowalski@example.com</p>
                <p><strong>Telefon:</strong> 123-456-789</p>
              </div>
              <div class="col-12 col-sm-5 text-end me-5">
                <h4 class="mb-3">Adres dostawy:</h4>
                <p><strong>Ulica:</strong> Aleja Kwiatowa 12</p>
                <p><strong>Kod pocztowy:</strong> 00-123</p>
                <p><strong>Miasto:</strong> Warszawa</p>
              </div>
            </div>
            <div class="row mb-3 border-bottom border-3">
              <div class="col-12">
                <h4 class="mb-3 text-center">Produkty</h4>
                <ul class="list-unstyled">
                  <li><strong>Produkt 1</strong> - 100 zł</li>
                  <li><strong>Produkt 2</strong> - 50 zł</li>
                </ul>
              </div>
            </div>
            <div class="row">
              <div class="col-12 text-end">
                <h4><strong>Suma:</strong> 150 zł</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBarUser from "@/components/SideBarUser.vue";

export default {
  components: {
    SideBarUser,
  },
};
</script>
