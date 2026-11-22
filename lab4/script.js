class UserAuth 
{
    constructor(login, password, isAgreed) 
    {
        this.login = login;
        this.password = password;
        this.isAgreed = isAgreed;
    }

    printToConsole() 
    {
        console.log(`=== Данные отправленной формы ===`);
        console.log(`Логин пользователя: ${this.login}`);
        console.log(`Пароль: ${this.password}`);
        console.log(`Согласие на обработку: ${this.isAgreed ? 'Да' : 'Нет'}`);
    }
}

const form = document.getElementById('authForm');

form.addEventListener('submit', (event) => 
    {
    event.preventDefault();

    const loginValue = document.getElementById('login').value;
    const passwordValue = document.getElementById('password').value;
    const consentValue = document.getElementById('consent').checked;

    const userObject = new UserAuth(loginValue, passwordValue, consentValue);

    userObject.printToConsole();
    });