export class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _checkRes(res) {
        if (!res.ok) {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
      }

    // _checkRes(res) {
    //     if (res.ok) {
    //         return res.json();
    //     }
    //   return Promise.reject(`Ошибка: ${res.status}`)
    // }

    getCards() {
        return fetch(`${this._baseUrl}/cards`, {
            method: "GET",
            headers: this._headers
        })
        .then(this._checkRes);
    }
    
     getUserInfo() {
         return fetch(`${this._baseUrl}/users/me`, {
             method: "GET",
             headers: this._headers,
         })
         .then(this._checkRes);
     }

    //  getUserInfo() {
    //      return fetch(`${this._baseUrl}/users/me`, {
    //        headers: this._headers,
    //      }).then((res) => {
    //        return this._checkRes(res);
    //      });
    //    }


    changeProfileUser({ name, discription }) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                about: discription
              }),
        })
        .then(this._checkRes);
    }

    
    addCard({ title, discription }) {
        return fetch(`${this._baseUrl}/cards`, {
          method: "POST",
          headers: this._headers,
          body: JSON.stringify({
            name: title,
            link: discription,
          }),
        })
        .then((res) => {
            return this._checkRes(res);
          });
      }


    addLike(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
            method: "PUT",
            headers: this._headers,
        })
        .then(this._checkRes);
    }

     deleteLike(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
            method: "DELETE",
            headers: this._headers,
        })
        .then(this._checkRes);
     }

     changeAvatarUser({ avatar }) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: avatar,
              }),
        })
        .then(this._checkRes);
     }

     deleteCard(id) {
        return fetch(`${this._baseUrl}/cards/${id}`, {
            method: "DELETE",
            headers: this._headers,
        })
        .then(this._checkRes);
     }
}
