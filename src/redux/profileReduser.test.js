import profileReduser, { addPostActionCreator, deletePostActionCreator } from "./profileReduser";

let initialState = {
  profile: null,
  status: '',
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

}

it('Length of posts should be incremented', () => {
  let action = addPostActionCreator('testim')
  let initialState = {
    profile: null,
    status: '',
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
  
  }
  let newState = profileReduser(initialState, action)

  expect(newState.posts.length).toBe(5) ;
});

it('New text of post added', () => {
  let action = addPostActionCreator('New message')
  let initialState = {
    profile: null,
    status: '',
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
  
  }
  let newState = profileReduser(initialState, action)

  expect(newState.posts[4].message).toBe('New message') ;
});

it('Length after deleting', () => {
  let action = deletePostActionCreator(1)
  let initialState = {
    profile: null,
    status: '',
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
  
  }
  let newState = profileReduser(initialState, action)

  expect(newState.posts.length).toBe(3);
});