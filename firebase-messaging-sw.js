importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyAMg_moui8v0a6yXu6NtjUQ6qUwE_VjdD8',
  authDomain: 'ujian-madrasah-d1516.firebaseapp.com',
  projectId: 'ujian-madrasah-d1516',
  storageBucket: 'ujian-madrasah-d1516.firebasestorage.app',
  messagingSenderId: '570387450267',
  appId: '1:570387450267:web:8785290958bfc88e5fb93e',
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notification = payload.notification || {};
  const title = notification.title || 'Notifikasi admin';
  const options = {
    body: notification.body || '',
    icon: '/icons/Icon-192.png',
    data: payload.data || {},
  };

  self.registration.showNotification(title, options);
});