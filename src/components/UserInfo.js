export class UserInfo {
    constructor({nameProfile, professionProfile}) {
        this._nameElement = document.querySelector(nameProfile);
        this._jobElement = document.querySelector(professionProfile);
    }

    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            job: this._jobElement.textContent
        }
    }

    setUserInfo(title, job) {
        this._nameElement.textContent = title;
        this._jobElement.textContent = job;
    }

}