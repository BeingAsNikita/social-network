
import dialogsReduser from './dialogsReduser';
import profileReduser from './profileReduser';

let store = {
  _state: {
    dialogs: {
      users: [
        {
            id: 1,
            name: 'Никита',
            message: 'Во сколько встретимся?',
        },
        {
            id: 2,
            name: 'Юра',
            message: 'Захвати плед',
        },
        {
            id: 3,
            name: 'Марго',
            message: 'Короче. Щас скину. Вопрос в том как сделать чтобы картинка машины не прибивалась к правому краю',
        },
        {
            id: 4,
            name: 'Поля',
            message: 'Мартин покакал',
        },
        {
          id: 5,
          name: 'Morgenshtern',
          message: 'Ты думал бует басс?? НАЕБАЛ!!',
        },
        {
          id: 6,
          name: 'Я',
          message: 'Ты теперь мои заметки!',
        },
      ],
      message: [
        {
          id: 1,
          date: '12.04.20 12:47',
          text: 'Мартин задолбал есть и свинячить!',
        },
        {
          id: 2,
          date: '12.04.20 10:42',
          text: 'Погнали в маунтэнблейд!!!!',
        },
        {
          id: 3,
          date: '12.04.20 11:02',
          text: 'Я НЕ КРЫЫЫСАА!!!Короче она такая. Мощный ход Никита спрашивает: почему Она такая: ну это весьма непопулярное мнение',
        },
        {
          id: 4,
          date: '12.04.20 12:21',
          text: 'Я летаю словно рыс!',
        },
        {
          id: 5,
          date: '12.04.20 12:21',
          text: 'Я',
        },
        
      ],
      newMessageText: ''
    },

    profile: {
      posts: [
        {
          id: 1,
          name: 'Morgenshtern',
          message: 'Здарова, ублюдки!',
          url: 'https://i.pinimg.com/736x/ed/16/b9/ed16b9f0a63be6e6ab3a35da48031fb9.jpg'
        },
        {
          id: 2,
          name: 'Юра',
          message: 'Погнали в маунтэнблейд!!!!',
          url: 'https://sun9-31.userapi.com/c849020/v849020113/195ec6/dm8KtRenxiQ.jpg'
        },
        {
          id: 3,
          name: 'Марго',
          message: 'Я НЕ КРЫЫЫСАА!!!',
          url: 'https://sun9-2.userapi.com/c855620/v855620606/2bb8b/G1QRRFVfHhs.jpg'
        },
        {
          id: 4,
          name: 'Никита',
          message: 'Я летаю словно рыс!',
          url: 'https://scontent-hel2-1.cdninstagram.com/v/t51.2885-19/s150x150/83175097_608160346627556_1983433867435966464_n.jpg?_nc_ht=scontent-hel2-1.cdninstagram.com&_nc_ohc=I6kC_JJCgZIAX_qJjLq&oh=732502044e9338ee2b5b63e7f40b23d4&oe=5EB726D1'
        },
      ],
      newPostText: ''
    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('state was changed')
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {

    this._state.profile = profileReduser(this._state.profile, action);
    this._state.dialogs = dialogsReduser(this._state.dialogs, action);

    this._callSubscriber(this._state)
    
  }

}





/* export default store;  */