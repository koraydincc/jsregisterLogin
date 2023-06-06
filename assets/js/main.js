const Commonjs = {
    users: localStorage.getItem('users')
    ? JSON.parse(localStorage.getItem('users'))
    : [],
    registerFormItem: {
        ad: document.getElementById('ad'),
        soyad: document.getElementById('soyad'),
        email: document.getElementById('email'),
        password: document.getElementById('password')
    },
    loginFormItem: {
        email: document.getElementById('email'),
        password: document.getElementById('password')
    },
    handleRegisterForm: function () {
         
        event.preventDefault();
        
        let alreadyUser = this.handleAlreadyUser();
        if (alreadyUser) return false;

        this.users.push({
            ad: this.registerFormItem.ad.value,
            soyad: this.registerFormItem.soyad.value,
            email: this.registerFormItem.email.value,
            password: this.registerFormItem.password.value
    
        });
        
        this.registerFormCleaner();
        this.successMessage('Kayıt Başarılı!')

        console.log(this.users);
        
        
    },
    handleLoginForm: function () {


        
    },
    handleAlreadyUser: function () {
      let alreadyUser = false;
      
      this.users.forEach((item, i) => {
          if (this.registerFormItem.email.value == item.email) {
            alreadyUser = true
          }
        
      });
      if (alreadyUser) {
        this.warningMessage('Bu email ile daha önceden kayıt olunmuştur !')
        this.registerFormCleaner();
        return true
      }
      return false;
      
    },
    successMessage: function (message) {
        Swal.fire('Kayıt Başarılı!',message,'success');
    },
    warningMessage: function (message) {
        Swal.fire('Uyarı !',message, 'warning');
    },
    registerFormCleaner: function () {
        this.registerFormItem.ad.value = '',
        this.registerFormItem.soyad.value = '';
        this.registerFormItem.email.value = '';
        this.registerFormItem.password.value = '';
        
    }
    

    
}   


