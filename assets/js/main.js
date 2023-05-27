const Commonjs = {
  users: localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [],
  registerFormItem: {
    name: document.getElementById("name"),
    lastname: document.getElementById("lastname"),
    email: document.getElementById("email"),
    password: document.getElementById("password"),
    repassword: document.getElementById("repassword"),
  },
  loginFormItem: {
    email: document.getElementById("email"),
    password: document.getElementById("password"),
  },

  registerFormValidation: function () {
    let formItem = [
      {
        name: "name",
        message: "Lütfen isim alanını doldurunuz",
      },
      {
        name: "lastname",
        message: "Soyad isim alanını doldurunuz",
      },
      {
        name: "email",
        message: "E Posta isim alanını doldurunuz",
      },
      {
        name: "password",
        message: "Password isim alanını doldurunuz",
      },
      {
        name: "name",
        message: "Lütfen isim alanını doldurunuz",
      },
      {
        name: "repassword",
        message: "repassword isim alanını doldurunuz",
      },
    ];

    let formDolumu = true;

    formItem.forEach((item) => {
      if (this.registerFormItem[item.name].value == "") {
        document.getElementById(item.name + "-message").innerHTML =
          item.message;
        formDolumu = false;
      } else {
        document.getElementById(item.name + "-message").innerHTML = "";
      }
    });

    return formDolumu;
  },
  registerFormClenaer: function () {
    this.registerFormItem.name.value = "";
    this.registerFormItem.lastname.value = "";
    this.registerFormItem.email.value = "";
    this.registerFormItem.password.value = "";
    this.registerFormItem.repassword.value = "";
  },
  handleAlreadyUser: function () {
    // bu kullanıcı daha önceden eklenmiş mi
    let alreadyUser = false;

    this.users.forEach((item, i) => {
      if (this.registerFormItem.email.value == item.email) {
        alreadyUser = true;
      }
    });

    if (alreadyUser) {
      this.WarningMessage("Bu kullanıcı daha önceden eklenmiştir");
      this.registerFormClenaer();
      return true;
    }

    return false;
  },
  handeRegisterForm: function () {
    event.preventDefault();

    /**
     * validation
     */
    let validation = this.registerFormValidation();
    if (validation == false) return false;

    /**
     * Eğer böyle bir kullanıcı varsa eklenmesini engelle
     */
    let alreadyUser = this.handleAlreadyUser();
    if (alreadyUser) return false;

    this.users.push({
      name: this.registerFormItem.name.value,
      lastname: this.registerFormItem.lastname.value,
      email: this.registerFormItem.email.value,
      password: this.registerFormItem.password.value,
    });

    localStorage.setItem("users", JSON.stringify(this.users));

    this.registerFormClenaer();
    this.SuccessMessage(
      `${this.registerFormItem.name.value} başarıyla eklendi`
    );

    this.GoToPage("./pages/login.html");
  },
  SuccessMessage: (message) => {
    Swal.fire("İşlem Başarılı", message, "success");
  },
  WarningMessage: (message) => {
    Swal.fire("Uyarı !", message, "warning");
  },
  GoToPage: function (page) {
    location.href = page;
  },
  /**
   * Login Forms
   */
  loginHandle: function () {
      event.preventDefault();
      

      /**
       * FİLTER 
       * MAP
       * FİND
       * SEARCH
       */

   let user = this.users.filter((item) => {
          return (
            item.email == this.loginFormItem.email.value &&
            item.password == this.loginFormItem.password.value
          );
      })
      
      if (user.length > 0) {
          // kullanıcı var 
          this.SuccessMessage('Kullanıcı var')
      } else {
          this.WarningMessage('Kullanıcı Yok')
      }
     



    // console.log(this.users);
  },

  // Sayfa açılır açılmaz yapılacak işlemler
  InitializeEvents: function () {},

  Init: function () {
    this.InitializeEvents();
  },
};

// Sayfa yüklenir yüklenmez çalışacak fonksiyon
window.onload = function () {
  Commonjs.Init();
};
