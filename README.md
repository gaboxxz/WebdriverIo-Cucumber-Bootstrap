
To run you will need: 
- Appium installed: http://appium.io/ (Gui is recomended for the inspecting tool).
- Appium-doctor https://www.npmjs.com/package/appium-doctor . Install and run Appium-doctor in console to check what is missing 
- Node
- If you want to run on emulators, Android Studio and Xcode

To run:
yarn install
yarn android.app
yarn ios.app


To generate and open test report:
yarn report:generate
yarn repor:open

