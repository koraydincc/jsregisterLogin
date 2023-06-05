const CommonJs = {
    users: localStorage.getItem('users') 
        ? JSON.parse(localStorage.getItem("users"))
        : [],

    loginFormItem: {
        email: document.getElementById('email'),
        password: document.getElementById('password'),
        registerBtn: document.getElementById('registerBtn'),
    },
    registerFormItem: {
        ad: document.getElementById('ad'),
        soyad: document.getElementById('soyad'),
        email: document.getElementById('email'),
        password: document.getElementById('password'),
    },

    GoToPage: function(page) {
        location.href = page;
    },

    registerFormCleaner: function() {
        this.registerFormItem.ad.value = '';
        this.registerFormItem.soyad.value = '';
        this.registerFormItem.email.value = '';
        this.registerFormItem.password.value = '';
    },

    handleRegisterForm: function() {
        event.preventDefault();

        this.users.push({
            ad: this.registerFormItem.ad.value,
            soyad: this.registerFormItem.soyad.value,
            email: this.registerFormItem.email.value,
            password: this.registerFormItem.password.value,
        });

        this.registerFormCleaner();
        this.goToPage("../pages/index.html");

        console.log(this.users);

        localStorage.setItem('users', JSON.stringify(this.users));
    },

    registerFormValidation: function() {
        let formItem = [
            {
                ad: 'name',
                message: 'Lütfen isim alanını doldurunuz.',
            },
            {
                soyad: 'soyad',
                message: 'Soyad alanını doldurunuz',
            },
            {
                email: 'email',
                message: 'Email alanını doldurunuz',
            },
            {
                password: 'password',
                message: 'Parola alanını doldurunuz',
            },
        ];
        let formDolumu = true;
    },

    goToPage: function(page) {
        localStorage.setItem('users', JSON.stringify(this.users));
        this.users = JSON.parse(localStorage.getItem('users'));
        location.href = page;
    },
    

    loginHandle: function() {
        event.preventDefault();

        let user = this.users.filter((item) => {
            return (
              item.email == this.loginFormItem.email.value &&
              item.password == this.loginFormItem.password.value
            );
        })
        console.log(this.users)
    },
    InitializeEvents: function () {},
    Init: function () {
        this.InitializeEvents();
      },
};
window.onload = function () {
    CommonJs.Init();
};
  