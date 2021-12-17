# bugDemo
This demo shows the combination of redux and react-navigation, but there is a bug in it. 

![avatar](/src/img/bug.jpg)

And I doubt that the bug exists in the method below:

AppNavigator.router.getStateForAction(initAction, null); // you can find this sentence in the "reducer.js" of react-navigation-redux-helpers(the third node_module)

Above method will be called when createNavigationReducer() called at row 21 of "./src/store/index.js"
