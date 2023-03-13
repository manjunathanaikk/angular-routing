export class AuthService {
  isLoggedIn: boolean = false;
  login() {
    this.isLoggedIn = true;
  }
  logout() {
    this.isLoggedIn = false;
  }
  isAuthenticated() {
    return this.isLoggedIn;
    new Promise((reslove, reject) => {
      setTimeout(() => {
        reslove(this.isLoggedIn);
      }, 1000);
    });
  }
}
