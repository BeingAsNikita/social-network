const SEND_MESSAGE = 'SEND_MESSAGE';

export const sendMessageActionCreator = (message) => ({ type: SEND_MESSAGE, payload: message })


let initialState = {
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

    ]
}

const dialogsReduser = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.payload;

            return {
                ...state,
                message: [...state.message, {id: 8, text: body}]
            }

// eslint-disable-next-line

        default:
            return state
    }

}

export default dialogsReduser;