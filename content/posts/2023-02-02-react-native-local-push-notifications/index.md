---
title: 'Getting Started with React Native Local Push Notifications in React Native'
image: /images/thumbnails/posts/2023-02-02-react-native-local-push-notifications.png
publishedOn: '2023-01-06'
description: 'Learn the basics of React Native Local Push Notifications in React Native. In this tutorial, we will be learning how to set up and use local push notifications in React Native.'
category: React Native
tags:
  - React Native
  - React Native Local Push Notifications
  - React Native Push Notifications
  - React Native Local Notifications
  - React Native Push Notifications Tutorial
  - React Native Local Notifications Tutorial
  - React Native Push Notifications Example
  - React Native Local Notifications Example
  - React Native Push Notifications Example Github
  - React Native Local Notifications Example Github
  - React Native Push Notifications Example Github
  - React Native Local Notifications Example Github

keywords: 'React Native Local Push Notifications, React Native Push Notifications, React Native Local Notifications, React Native Push Notifications Tutorial, React Native Local Notifications Tutorial, React Native Push Notifications Example, React Native Local Notifications Example, React Native Push Notifications Example Github, React Native Local Notifications Example Github, React Native Push Notifications Example Github, React Native Local Notifications Example Github'
author: Saad
---

import VideoPlayer from '../../../src/components/shared/VideoPlayer/VideoPlayer';

As an app developer one of the most important things to consider is how to keep your users engaged. Push notifications are a great way to do that. There are two types of push notifications, local and remote. In this tutorial, we will be learning step by step how to set up and use local push notifications in React Native.

## What are Local Push Notifications?

Local push notifications are notifications that are sent from your app to the user's device. They are not sent from a server. You do not need to worry about setting up a backend server to send notifications to your users. There are many examples of local push notifications. For example, an alarm app will send a notification to the user when the alarm is set to go off. Another example is a reminder app. A reminder app will send a notification to the user when the reminder is set to go off.

## Setting up our project

As always we will be showing a real-life example of how to use local push notifications in React Native. We will be building a simple reminder app that will send a notification to the user when the reminder is set by the users. You can grab the starter code from the Github repo [here](https://github.com/notJust-dev/rn-local-push-notifications).

1. Clone the repo.

```bash

git clone https://github.com/notJust-dev/rn-local-push-notifications

```

2. Checkout the `starter-code` branch.

```bash

git checkout starter-code

```

3. Run `yarn` to install the dependencies

```bash

yarn

```

4. Go to `ios` folder and run `pod install`

```bash

cd ios && pod install

```

5. Run `yarn ios` to run the app on iOS

```bash

yarn ios

```

## Understanding the sample app

We will create a simple reminder app to learn local push notifications. Our app will have two screens.

In the home screen, the user has two inputs. One is a `TextInput` to enter the reminder and the other is a `DatePicker` to set the date and time for the reminder. When the user clicks on the `Save` button, we will save the reminder in our local storage and show the saved reminders in the home screen. For the brevity of this tutorial we will be just saving a single reminder.

<VideoPlayer height={500}  url="/videos/posts/2023-02-02-react-native-local-push-notifications/screen-one.mp4" />

Inside the second screen, we will be showing the reminder that the user has set. We will also be showing a button to delete the reminder. When the user clicks on the delete button, we will be deleting the reminder from the local storage and go back to the home screen. Once the users go back to `Home` they should see that the reminder is no longer there.

<VideoPlayer height={500}  url="/videos/posts/2023-02-02-react-native-local-push-notifications/screen-two.mp4" />

## What do we want to achieve?

Great! Our app is up and running. Here comes the juicy part that we all want to learn today. We want achieve the following tasks now in order to learn local push notifications in React Native:

1. When the user saves a reminder, we want to send a notification to the user when the reminder is set to go off.
2. When the user clicks on the notification, we want to open the app and show the detail screen of the reminder.
3. When the user deletes the reminder, we want to cancel the notification that was set for that reminder.

## Integrate the Notifee library

With the above tasks in mind, let's first set up the local push notification. We will be using the [Notifee](https://notifee.app/) library. Notifee is a very well maintained library and it has been recently open sourced. It is a great library to use for local push notifications in React Native. Let's install the library first.

```bash

yarn add @notifee/react-native

```

Now we need to link the library to our project. We can do that by running the following command.

```bash

cd ios && pod install

```

Awesome, now we have the amazing notifee library installed in our project. Let's start using it!

## Set up the Notification Class

In order to work with notification we want to create a class that will handle all the notification related tasks. We will be creating a `Notification` class in the `src` folder. I will first give you the code for the `Notification` class and then we will go through together -

```ts
import notifee, {
  AuthorizationStatus,
  EventType,
  Notification,
} from '@notifee/react-native';

class Notifications {
  constructor() {
    // Bootstrap method is called when the app is launched from a notification
    this.bootstrap();

    // Listen for events
    // This is called when the app is in the foreground
    notifee.onForegroundEvent(({ type, detail }) => {
      switch (type) {
        case EventType.DISMISSED:
          console.log('User dismissed notification', detail.notification);
          break;
        case EventType.PRESS:
          console.log('User pressed notification', detail.notification);
          break;
      }
    });

    // This is called when the app is in the background
    notifee.onBackgroundEvent(async ({ type, detail }) => {
      const { notification } = detail;
      console.log('Notification received: background', type, detail);
      if (notification) {
        this.handleNotificationOpen(notification);
      }
    });
  }

  // This method deals with what what happens when the user clicks on the notification
  public handleNotificationOpen(notification: Notification) {
    const { data } = notification;
    console.log('Notification Opened', data);
  }

  // This method is called when the app is launched from a notification
  public async bootstrap() {
    const initialNotification = await notifee.getInitialNotification();
    if (initialNotification) {
      this.handleNotificationOpen(initialNotification.notification);
    }
  }

  // This method is called to check if the user has granted permission to send notifications
  public async checkPermissions() {
    const settings = await notifee.requestPermission();

    if (settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED) {
      console.log('Permission settings:', settings);
      return true;
    } else {
      console.log('User declined permissions');
      return false;
    }
  }
}

// Exporting an instance of the class
export default new Notifications();
```

Let's go through the code together.

1. First, we import the necessary modules from the `@notifee/react-native` library.

2. We create a class called `Notifications` and we export an instance of the class at end of this file. We will be using the instance of the class to call the methods. So whenever we import this class, we will be getting the instance of the class. Our whole project will only have one instance of the class. This is also known as a singleton class.

3. We create a constructor for the class. In the constructor, we call the bootstrap method. We will be using this method to get the initial notification when the app is opened from a notification. We also have 2 event listeners. One for the foreground event and the other for the background event. If the app is on the foreground and the user clicks on the notification, we will be using the foreground event listener to get the notification. If the app is in the background and the user clicks on the notification, we will be using the background event listener to get the notification.

4. The `handleNotificationOpen` method is responsible for handling the notification when the user clicks on it. We will send the notification details to this method and add our own logic to handle the notification.

5. Finally the `checkPermissions` method is responsible for checking if the user has granted the permission to send notifications to the device.

## Task 1: Schedule a notification when the user saves a reminder

Awesome, so far we have the barebone code for our notification class. Now we will connect this class to our reminder app. Let's create a method to schedule a notification when user saves a reminder in our home screen. I will add a new method called `scheduleNotification` in the `Notifcation` class.

```ts

import notifee, {
  AuthorizationStatus,
  EventType,
  Notification,
  TimestampTrigger,
  TriggerType,
} from '@notifee/react-native';

public async scheduleNotification({
    reminder,
    date,
  }: {
    reminder: string;
    date: Date;
  }) {
    // Check if the user has granted the permission to send notifications
    const hasPermissions = await this.checkPermissions();

    // If the user has granted the permission, schedule the notification
    if (hasPermissions) {
      // Create a timestamp trigger for the notification
      const trigger: TimestampTrigger = {
        type: TriggerType.TIMESTAMP, // This is the type of trigger, we have other types of triggers as well
        timestamp: +date, // +date converts the date to timestamp
      };

      // Create the notification details
      const notificationDetails = {
          id: '1',
          title: `🔔 You asked for this reminder -  ${reminder}`,
          body: 'Tap on it to check',
          android: {
            channelId: 'reminder',
            pressAction: {
              id: 'default',
            },
          },
          data: {
            id: '1',
            action: 'reminder',
            details: {
              name: reminder,
              date: date.toString(),
            },
          },
        },

      // Schedule the notification
      await notifee.createTriggerNotification(
        notificationDetails,
        trigger,
      );
    }
  }

```

Okay, let's go through the code together now.

1. We first check if the user has granted the permission to send notifications to the device. If the user has granted the permission, we will schedule the notification. If the user has not granted the permission, we will not schedule the notification.

2. Notifee library has a method called `createTriggerNotification` which can be used to schedule a notification. This method needs 2 parameters. The first parameter is the notification details and the second parameter is the trigger.

3. The first parameter is the notification details. We will be passing the notification title, body, and data. The data is the data that we want to send to the notification when the user clicks on it. Later this data can be used to handle the notification.

4. The second parameter is the trigger. We will be using the `TimestampTrigger` type. This trigger will be used to schedule the notification. In order to set a time, we will use the timestamp.

Let's now call this method in the `saveReminder` method. Because we are saving the reminder in this method and at the same time we want to schedule the notification. Go to `Home` and modify the `saveReminder` method.

```jsx

const saveReminder = async () => {
    const reminderObject = {
      name: reminder,
      date: date.toString(),
    };
    ....
    ....
    ....
    // Schedule the notification
    // Here we are passing the reminder string and date to the scheduleNotification method
    Notification.scheduleNotification({reminder, date: date});
  };
g
```

Amazing! We will now test if the notification is working or not. Let's run the app and save a reminder. If everything is working fine, we should get a notification on the device.

<VideoPlayer height={600}  url="/videos/posts/2023-02-02-react-native-local-push-notifications/trigger-fast.mp4" />

## Task 2: Handle the notification when the user clicks on it

Our next task is to show the reminder details when the user clicks on the notification. We will be using the `data` property of the notification to get the reminder details.

There are few scenarios when the user clicks on the notification. They are the following:

1. Your app is in the foreground and the user clicks on the notification.
2. Your app is in the background and the user clicks on the notification.
3. Your app is not running and the user clicks on the notification.

We will be handling all these scenarios in our app. Let's start with the first scenario. When the app is in the foreground and the user clicks on the notification, we will be using the `onForegroundEvent` event listener. Go to the `Notifications` class and modify the `constructor` method.

```tsx
import notifee, {
  AuthorizationStatus,
  EventType,
  Notification,
  TimestampTrigger,
  TriggerType,
} from '@notifee/react-native';

constructor() {
    ....
    // This event listener will be called when the app is in the foreground and the user clicks on the notification
    // detail contains the notification details
    notifee.onForegroundEvent(({type, detail}) => {
      switch (type) {
        case EventType.DISMISSED:
          // we don't care about this event
          break;
        case EventType.PRESS:
          // Our data is in the detail.notification.data property
          // we pass the notification to the handleNotificationOpen method
          this.handleNotificationOpen(detail.notification);
          break;
      }
    });
    ...
    ...
  }
```

Secondly, when the app is in the background and the user clicks on the notification, we will be using the `onBackgroundEvent` event listener. Go to the `Notifications` class and modify the `constructor` method.

```tsx
constructor() {
    ....
    // This event listener will be called when the app is in the background and the user clicks on the notification
    // detail contains the notification details
    notifee.onBackgroundEvent(async ({type, detail}) => {
      const {notification} = detail;
      if (notification) {
        this.handleNotificationOpen(notification);
      }
    });
    ...
    ...
  }
```

Finally, when the app is not running and the user clicks on the notification, we will be using the `getInitialNotification` method. `getInitialNotification` is triggered that gets called when the app is not running and the user clicks on the notification.

```tsx
  constructor() {
    this.bootstrap();
    ...
    ...
    ...
  }
  ...
  ...
  public async bootstrap() {
    const initialNotification = await notifee.getInitialNotification();
    if (initialNotification) {
      this.handleNotificationOpen(initialNotification.notification);
    }
  }
```

Great, we are handling all the scenarios of user clicking on the notification. Now what do we want to do when the user clicks on the notification? We want to do the following:

1. Get the reminder details from the notification data.
2. Navigate to the `Detail` screen and pass the reminder details to it.
3. Show the reminder details on the `Detail` screen.

From all the above cases, we should have already noticed that we are calling the `handleNotificationOpen` method and passing the notification to it. We already have all the details. We just need to navigate to the detail screen and pass the detail as params. However, our `Notification` class can not handle navigation. It does not know what is the navigation object. Thanks to the `react-navigation`, we can also use `Navigation` object outside the screens or components. We will need to add a few lines of code to make this work.

First create a new file called `RootNavigation.js` in the `src` folder. Add the following code to the file.

```tsx
import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
```

Then import this `navigationRef` in the `App` component and pass it to the `NavigationContainer` component.

```tsx
...
...
import {navigationRef} from './RootNavigation';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer ref={navigationRef}>
      ...
      ...
    </NavigationContainer>
  );
}
```

With that out of the way, we can now import `RootNavigation` and use the navigate method to navigate to the detail screen. Go to the `Notifications` class and modify the `handleNotificationOpen` method.

```tsx
  import * as RootNavigation from './RootNavigation';
  public handleNotificationOpen(notification: Notification) {
    const {data} = notification;
    RootNavigation.navigate('Detail', {savedReminder: data?.details});
  }
```

Wohoo! We are done. Let's test it out. Run the app and save a reminder. Then click on the notification. You should see the reminder details on the `Detail` screen.

<VideoPlayer height={600}  url="/videos/posts/2023-02-02-react-native-local-push-notifications/navigate.mp4" />

## Task 3: Cancel the notification when the user deletes the reminder

Our last task is to cancel the notification when the user deletes the reminder. Why do we want to cancel the notification if the user deletes the reminder? If we don't cancel the notification, the user will still get the notification even if the reminder is deleted. We will be using the `cancelNotification` method of the `notifee` library to cancel the notification. First, we will create a new method called `cancelNotification` in the `Notifications` class.

```tsx
  public cancelNotification() {
    // for now we are just cancelling the notification with id 1 to keep the example easy.
    notifee.cancelNotification("1");
  }
```

Then we will call this method from the `Detail` screen when the user deletes the reminder. Go to the `Detail` screen and modify the `onPress` method of the `Delete Reminder` button.

```tsx
<Button
  title="Delete Reminder"
  onPress={() => {
    AsyncStorage.removeItem('reminder');
    Notification.cancelNotification();
    navigation.navigate('Home', { refresh: true });
  }}
/>
```

Now when the user deletes the reminder, he or she will not see any push notification!

So far we have been testing on the iOS simulator. But it should work the same for the Android device as well.

## Conclusion

In this tutorial, we have covered the basics of local push notifications in React Native. We have created a simple app that allows the user to save a reminder and get a push notification when the reminder is due. We have also covered how to handle the notification when the user clicks on it. At the same time we also covered how to cancel the notification when the user deletes the reminder. I hope you enjoyed reading it and this tutorial will help you in your future projects.

## Get the code

You can get the code for this tutorial from [GitHub repository](https://github.com/notJust-dev/rn-local-push-notifications).
