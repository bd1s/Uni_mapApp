# Uni_map_app

Academic project - Android application for the University of Chouaib Doukkali new students. The application is a map of the university with the location of the different buildings and services. It also contains a list of the different departments and their contact information.

# Development

The application is developed using React native and Expo. The map is implemented using the react-native-maps library.

To start with the project, first clone the repository:

```bash
git clone https://github.com/bd1s/Uni_mapApp.git
```

Then open the project folder and install the dependencies:

```bash
cd Uni_mapApp/uni_map

npm install
```

To run the application, use the following command:

```bash
npx expo start
```

```bash
› Press s │ switch to development build

› Press a │ open Android
› Press w │ open web

› Press j │ open debugger
› Press r │ reload app
› Press m │ toggle menu
› Press o │ open project code in your editor

› Press ? │ show all commands
```

To preview the app on android, you need to have the Expo Go app installed on your android device, then scan the QR code that appears in the terminal, add the expo URL manually, or just connect your device to your computer with a USB cable and press `a` in the terminal.

To preview the app on the web, you need to install `react-native-web` `react-dom` `@expo/metro-runtime`:

```bash
npx expo install react-native-web react-dom @expo/metro-runtime
```

Then press `w` in the terminal.

> [!NOTE]  
> When installing new packages, you will need to stop the server and start it again using `npx expo start` to apply the changes.
