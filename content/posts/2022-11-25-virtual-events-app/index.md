---
title: Virtual Events app with React Native (notJust.Hack Workshop)
image: /images/thumbnails/posts/2022-11-25-virtual-events-app.png
publishedOn: '2022-11-24T17:48:30.556Z'
description: 'Learn how to build a Virtual Events App with React Native with our workshops from notJust.Hack'
category: React Native
tags:
  - React Native CLI
  - React Native
  - Expo
keywords: react native, expo, react native cli, stepzen
author: vadim
---

import YoutubeVideo from "../../../src/components/shared/YoutubeVideo/YoutubeVideo";
import OptInForm from '../../../src/components/shared/OptInForm/OptInForm';

Let’s build a Virtual Event Application with React Native. Shall we?

You can follow this build in video format here:

<YoutubeVideo id="hyllpWCGSgI" title={frontmatter.title} />

If you want to follow along, and build this application yourself, make sure to download the Asset bundle that contains all the dummy data, pre-defined components, PDF presentation and more.

<OptInForm formId={"45af57eb50"} formSrc={"https://awesome-teacher-1065.ck.page/45af57eb50/index.js"} title="Download the Asset Bundle 👇">To get the Source Code, PDF guide, dummy data, images, etc. </OptInForm>

## Context

This project is part of the [notJust.Hack](https://www.notjust.dev/hack) event, and the goal is to show you that it is possible to build a functional application in just 3 days.

For that reason, I will approach this project in a similar way you would approach a Hackathon project.

**The Problem**:<br />
Organizing a multi day event such as notJust.Hack, I encounter the problem of sharing the schedule of the event, so that attendees will know what to expect when.

**The Solution:**<br />
A mobile app that will display information about a Virtual Event, will show a clear schedule and let people RSPV to the sessions that they are interested in.

Attendees will have the possibility to chat and network in the application.

## Let’s initialize the App using expo

```bash
npx create-expo-app VirtualEvents --template tabs
```

- Start the development server

```bash
npm start
```

- Run the applicaton by pressing `i` to run on iOS device/emulator or `a` to run on android device/simulator.
- You can also scan the QR code using Expo Go App on your physical device

## Calendar

For the calendar view, we will use the React Native Calendar library. Check out the docs [here](https://wix.github.io/react-native-calendars/)

1. Install

```bash
npx expo install react-native-calendars
```

1. Render an `Agenda` inside the `screens/TabOneScreen..tsx`

```
import { Alert, Pressable, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import {
  Agenda,
  AgendaEntry,
  AgendaSchedule,
  DateData,
} from "react-native-calendars";
import { useState } from "react";
import events from "../assets/data/events.json";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [items, setItems] = useState<AgendaSchedule>({});

  const loadItems = (day: DateData) => {
    setItems(events);
  };

  const renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  };

  const renderItem = (reservation: AgendaEntry, isFirst: boolean) => {
    const fontSize = isFirst ? 16 : 14;
    const color = isFirst ? "black" : "#43515c";

    return (
      <Pressable
        style={[styles.item, { height: reservation.height }]}
        onPress={() => Alert.alert(reservation.name)}
      >
        <Text style={{ fontSize, color }}>{reservation.name}</Text>
      </Pressable>
    );
  };
  return (
    <View style={styles.container}>
      <Agenda
        items={items}
        selected={"2022-11-25"}
        renderItem={renderItem}
        renderEmptyDate={renderEmptyDate}
        loadItemsForMonth={loadItems}
        // showOnlySelectedDayItems
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});
```

## Event detailed page

Let’s display the details of the event in a Modal. For that, we can use the existing `screens/ModalScreen.tsx`

- Open the modal when we press on an item in the Agenda List

```bash
onPress={() => navigation.navigate("Modal", {id: event.id})}
```

- Now, let’s Render the deatils of the event

```bash
import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Image } from "react-native";

import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../types";
import CustomButton from "../components/CustomButton";
import users from "../assets/data/users.json";
import event from "../assets/data/event.json";

export default function ModalScreen({
  route,
  navigation,
}: RootStackScreenProps<"Modal">) {
  const id = route.params.id;
  console.log("Rendering event ", id);

  const onJoin = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{event.name}</Text>
      <Text style={styles.time}>
        <AntDesign name="calendar" size={24} color={"black"} />
        {"  | "}
        {new Date(event.date).toDateString()}
      </Text>

      <View style={styles.footer}>
        <Text style={styles.subtitle}>Attendees</Text>
        <View style={styles.users}>
          {users?.map((user, i) => (
            <Image
              source={{ uri: user.avatarUrl }}
              style={[
                styles.userAvatar,
                { transform: [{ translateX: -15 * i }] },
              ]}
              key={user.id}
            />
          ))}
          <View
            style={[
              styles.userAvatar,
              {
                transform: [{ translateX: -15 * users.length }],
              },
            ]}
          >
            <Text>+{users.length}</Text>
          </View>
        </View>

        <CustomButton text="Join the event" onPress={onJoin} />
      </View>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  time: {
    fontSize: 20,
  },
  footer: {
    marginTop: "auto",
  },
  users: {
    flexDirection: "row",
    marginVertical: 10,
  },
  userAvatar: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 30,
    margin: 2,
    borderColor: "white",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gainsboro",
  },
});
```

## Render Users

- Create a new component `components/UserListItem.tsx`

```jsx
import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

type UserListItemProps = {
  user: any,
};

const UserListItem = ({ user }: UserListItemProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatarUrl }} style={styles.image} />
      <Text style={styles.name}>{user.displayName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    margin: 5,
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  image: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 50,
  },
  name: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default UserListItem;
```

- Create a new Screen `screens/UsersScreen.tsx`

```jsx
import users from '../assets/data/users.json';
import { FlatList } from 'react-native';
import UserListItem from '../components/UserListItem';

const UsersScreen = () => {
  return (
    <FlatList
      data={users}
      renderItem={({ item }) => <UserListItem user={item} />}
    />
  );
};

export default UsersScreen;
```

- Add the screen as a Modal in the `navigation/index.ts`
- Link the header button from the TabOneScreen to open the Users modal

## My Account

Let’s use `screens/TabTwoScreen` as our Profile Page.

```bash
import { StyleSheet, Image } from "react-native";

import { Text, View } from "../components/Themed";
import CustomButton from "../components/CustomButton";
import users from "../assets/data/users.json";

const user = users[0];

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: user?.avatarUrl }} style={styles.avatar} />
      <Text style={styles.name}>{user?.displayName}</Text>
      <View style={{ marginTop: "auto" }}>
        <CustomButton
          onPress={() => {}}
          text="Sign out"
          type="TERTIARY"
          fgColor="crimson"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  avatar: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
  },
  name: {
    fontWeight: "bold",
    fontSize: 22,
    marginVertical: 15,
    color: "dimgray",
  },
});
```

## Authentication Screens

For the authentication screens, we will re-use the Auth Screens that we have build in [this playlist](https://www.youtube.com/watch?v=_Fi86az2OV4&list=PLY3ncAV1dSVDl6ln8DoZo3DHnSHgpaaCr).

- Install `react-hook-form`

```jsx
npx expo install react-hook-form
```

- From the Asset Bundle, add `AuthScreens` inside our `screens` folder
- Add the `SignIn` and `SignOut` screens in our `RootNavigator`

```jsx
const isAuthenticated = false;

if (!isAuthenticated) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ title: "Sign in", headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ title: "Create an account" }}
      />
    </Stack.Navigator>
  );
}

return (...)
```

## Next steps

Check out the next part of this project, where we implement the backend of this application using [Nhost](http://bit.ly/3hMq836)

✅  Authentications<br />
✅  Database & GraphQL API<br />
✅  Storage<br />
✅  Apollo Client

Watch it live on youtube:

<YoutubeVideo id="INLnagMFShw" title="Virtual Events App [React Native | Nhost]"/>
