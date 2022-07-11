export class UserInfo {
    constructor(nameProfile, professionProfile, avatarProfile) {
        this._nameElement = document.querySelector(nameProfile)
        this._jobElement = document.querySelector(professionProfile)
        this._avatarElement = document.querySelector(avatarProfile)
    }

    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            discription: this._jobElement.textContent
        }
    }

    setUserInfo({name, about, avatar}) {
        this._nameElement.textContent = name;
        this._jobElement.textContent = about;
        this._avatarElement.style.backgroundImage = `url(${avatar})`;
    }
}   