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

let pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/e4t0lnfaPEw:APA91bESio2tbaQikjtnL-lyszu58HDEPg4mtqyLaRETx-HDzfcpQnJPA2LEs3rIFMt-xSW_PRlgKiFsne6CKJHmWj8oaLOQJgAlIDNPtM5Jf4J9JQAvaVUAvlCsLqLNkXp67Vk6Nlzp","expirationTime":null,"keys":{"p256dh":"BOBFhrnitNNDTh8NzvFQrBK1ApxdJxqOOLBwzD01lRIyiGQLHl42askBSZ5j9i9szr1Hea15A5AgKO0BDRIK5L8","auth":"HdYQbxphtau6MWMnfZy1kg"}}

push.sendNotification(pushSubscription, 'Your Push Payload Text');