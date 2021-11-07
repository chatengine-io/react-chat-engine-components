export const attachment = {
  id: 10,
  file: 'https://chat-engine-assets.s3.amazonaws.com/tutorials/my-face-min.png',
  created: '2021-08-03T00:16:52.633778Z',
};

export const fileAttachment = {
  id: 11,
  file: 'https://chat-engine-assets.s3.amazonaws.com/click.mp3',
  created: '2021-08-03T00:16:59.633778Z',
};

export const message = {
  id: 1000,
  created: '2021-07-14 01:18:24.567443+00:00',
  attachments: [],
  sender_username: 'Adam_La_Morre',
  text: '<p>Hello there world!</p>',
  custom_json: '',
};

export const messagePlusImage = {
  id: 1000,
  created: '2021-07-14 01:18:24.567443+00:00',
  attachments: [attachment],
  sender_username: 'Adam_La_Morre',
  text: '<p>This is me in London!</p>',
  custom_json: '',
};

export const messagePlusFile = {
  id: 1000,
  created: '2021-07-14 01:18:24.567443+00:00',
  attachments: [fileAttachment],
  sender_username: 'Adam_La_Morre',
  text: '<p>Hey check out this audio effect.</p>',
  custom_json: '',
};

export const adam = {
  username: 'adam_lamorre',
  first_name: 'Adam',
  last_name: 'La Morre',
  avatar: '',
  custom_json: '',
  is_online: true,
};

export const chats = [
  {
    id: 201,
    title: 'First Chat ☝️',
    is_direct_chat: false,
    created: '2021-01-28T02:41:48.826706Z',
    custom_json: {},
    attachments: [],
    people: [
      {
        last_read: 1000,
        person: adam,
        chat_updated: '',
      },
    ],
    last_message: message,
  },
  {
    id: 202,
    title: 'Chat Two ✌️ ',
    is_direct_chat: false,
    created: '2021-01-27T02:41:48.826706Z',
    custom_json: {},
    attachments: [],
    people: [],
    last_message: {
      created: '',
      attachments: [],
      sender_username: '',
      text: '',
      custom_json: '',
    },
  },
  {
    id: 203,
    title: 'Direct Message w/ Adam',
    is_direct_chat: true,
    created: '2021-01-26T02:41:48.826706Z',
    custom_json: {},
    attachments: [],
    people: [],
    last_message: {
      created: '',
      attachments: [],
      sender_username: '',
      text: '',
      custom_json: '',
    },
  },
];
