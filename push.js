var push = require('web-push');

// VAPID keys should only be generated only once.
let vapidKeys = {
    publicKey: 'BPOo3YMDNtRo9jE91F8m45QxDwOjNq91UQU2oFbmdrvZPiCtLrh5zZ9txE6S9uGj8xfubJb_LOAgGXw1lz2VutA',
  privateKey: 'QNhZ-_YLc4dp2N_8D4kYFoS77sIlW1VIUcL3kCiWFZU'
}


push.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

let pushSubscription = {
  
};

push.sendNotification(pushSubscription, 'Your Push Payload Text');