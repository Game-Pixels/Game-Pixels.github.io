gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.idToCallbackMap = new Map();
gdjs.Untitled_32sceneCode.GDEmailObjects1_1final = [];

gdjs.Untitled_32sceneCode.GDNicknameObjects1_1final = [];

gdjs.Untitled_32sceneCode.GDageObjects1_1final = [];

gdjs.Untitled_32sceneCode.GDnameObjects1_1final = [];

gdjs.Untitled_32sceneCode.GDpasswordObjects1_1final = [];

gdjs.Untitled_32sceneCode.GDscoolObjects1_1final = [];

gdjs.Untitled_32sceneCode.GDNewTextObjects1= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects2= [];
gdjs.Untitled_32sceneCode.GDnameObjects1= [];
gdjs.Untitled_32sceneCode.GDnameObjects2= [];
gdjs.Untitled_32sceneCode.GDpasswordObjects1= [];
gdjs.Untitled_32sceneCode.GDpasswordObjects2= [];
gdjs.Untitled_32sceneCode.GDEmailObjects1= [];
gdjs.Untitled_32sceneCode.GDEmailObjects2= [];
gdjs.Untitled_32sceneCode.GDNicknameObjects1= [];
gdjs.Untitled_32sceneCode.GDNicknameObjects2= [];
gdjs.Untitled_32sceneCode.GDNewText2Objects1= [];
gdjs.Untitled_32sceneCode.GDNewText2Objects2= [];
gdjs.Untitled_32sceneCode.GDscoolObjects1= [];
gdjs.Untitled_32sceneCode.GDscoolObjects2= [];
gdjs.Untitled_32sceneCode.GDthingObjects1= [];
gdjs.Untitled_32sceneCode.GDthingObjects2= [];
gdjs.Untitled_32sceneCode.GDSquareWhiteToggleObjects1= [];
gdjs.Untitled_32sceneCode.GDSquareWhiteToggleObjects2= [];
gdjs.Untitled_32sceneCode.GDgamesObjects1= [];
gdjs.Untitled_32sceneCode.GDgamesObjects2= [];
gdjs.Untitled_32sceneCode.GDageObjects1= [];
gdjs.Untitled_32sceneCode.GDageObjects2= [];
gdjs.Untitled_32sceneCode.GDemaileddObjects1= [];
gdjs.Untitled_32sceneCode.GDemaileddObjects2= [];
gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDdemoObjects1= [];
gdjs.Untitled_32sceneCode.GDdemoObjects2= [];
gdjs.Untitled_32sceneCode.GDupdatesObjects1= [];
gdjs.Untitled_32sceneCode.GDupdatesObjects2= [];
gdjs.Untitled_32sceneCode.GDupdateObjects1= [];
gdjs.Untitled_32sceneCode.GDupdateObjects2= [];
gdjs.Untitled_32sceneCode.GDnopeObjects1= [];
gdjs.Untitled_32sceneCode.GDnopeObjects2= [];
gdjs.Untitled_32sceneCode.GDtyObjects1= [];
gdjs.Untitled_32sceneCode.GDtyObjects2= [];
gdjs.Untitled_32sceneCode.GDversionObjects1= [];
gdjs.Untitled_32sceneCode.GDversionObjects2= [];
gdjs.Untitled_32sceneCode.GDcmonObjects1= [];
gdjs.Untitled_32sceneCode.GDcmonObjects2= [];
gdjs.Untitled_32sceneCode.GDstatus_9595serverObjects1= [];
gdjs.Untitled_32sceneCode.GDstatus_9595serverObjects2= [];


gdjs.Untitled_32sceneCode.asyncCallback10470228 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("status_server"), gdjs.Untitled_32sceneCode.GDstatus_9595serverObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDstatus_9595serverObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDstatus_9595serverObjects2[i].getBehavior("Text").setText("Server status: " + runtimeScene.getScene().getVariables().getFromIndex(10).getAsString());
}
}
gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.idToCallbackMap.set(10470228, gdjs.Untitled_32sceneCode.asyncCallback10470228);
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(runtimeScene.getScene().getVariables().getFromIndex(9).getAsNumber()), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback10470228(runtimeScene, asyncObjectsList)), 10470228, asyncObjectsList);
}
}

}


};gdjs.Untitled_32sceneCode.asyncCallback10475020 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("ty"), gdjs.Untitled_32sceneCode.GDtyObjects2);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtyObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtyObjects2[i].getBehavior("Text").setText("Sign up sucsessful!");
}
}
gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.idToCallbackMap.set(10475020, gdjs.Untitled_32sceneCode.asyncCallback10475020);
gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
for (const obj of gdjs.Untitled_32sceneCode.GDtyObjects1) asyncObjectsList.addObject("ty", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(runtimeScene.getScene().getVariables().getFromIndex(9).getAsNumber()), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback10475020(runtimeScene, asyncObjectsList)), 10475020, asyncObjectsList);
}
}

}


};gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

};gdjs.Untitled_32sceneCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("nope"), gdjs.Untitled_32sceneCode.GDnopeObjects1);
gdjs.copyArray(runtimeScene.getObjects("ty"), gdjs.Untitled_32sceneCode.GDtyObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDnopeObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDnopeObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtyObjects1[i].hide();
}
}
{gdjs.evtTools.firebaseTools.firestore.getField("Accounts", "Server Status", "Status", runtimeScene.getScene().getVariables().getFromIndex(10), gdjs.VariablesContainer.badVariable);
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteSquareDecoratedButton"), gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButtonObjects1[k] = gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(5).getChild("email").getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(5).getChild("Password").getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(5).getChild("Age").getAsBoolean();
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Email"), gdjs.Untitled_32sceneCode.GDEmailObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.Untitled_32sceneCode.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Nickname"), gdjs.Untitled_32sceneCode.GDNicknameObjects1);
gdjs.copyArray(runtimeScene.getObjects("SquareWhiteToggle"), gdjs.Untitled_32sceneCode.GDSquareWhiteToggleObjects1);
/* Reuse gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("age"), gdjs.Untitled_32sceneCode.GDageObjects1);
gdjs.copyArray(runtimeScene.getObjects("demo"), gdjs.Untitled_32sceneCode.GDdemoObjects1);
gdjs.copyArray(runtimeScene.getObjects("emailedd"), gdjs.Untitled_32sceneCode.GDemaileddObjects1);
gdjs.copyArray(runtimeScene.getObjects("games"), gdjs.Untitled_32sceneCode.GDgamesObjects1);
gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.Untitled_32sceneCode.GDnameObjects1);
gdjs.copyArray(runtimeScene.getObjects("password"), gdjs.Untitled_32sceneCode.GDpasswordObjects1);
gdjs.copyArray(runtimeScene.getObjects("scool"), gdjs.Untitled_32sceneCode.GDscoolObjects1);
gdjs.copyArray(runtimeScene.getObjects("thing"), gdjs.Untitled_32sceneCode.GDthingObjects1);
gdjs.copyArray(runtimeScene.getObjects("ty"), gdjs.Untitled_32sceneCode.GDtyObjects1);
gdjs.copyArray(runtimeScene.getObjects("update"), gdjs.Untitled_32sceneCode.GDupdateObjects1);
gdjs.copyArray(runtimeScene.getObjects("updates"), gdjs.Untitled_32sceneCode.GDupdatesObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtyObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtyObjects1[i].getBehavior("Text").setText("Signing up");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(8).getChild("Name").setString((( gdjs.Untitled_32sceneCode.GDnameObjects1.length === 0 ) ? "" :gdjs.Untitled_32sceneCode.GDnameObjects1[0].getBehavior("Text").getText()));
}
{runtimeScene.getScene().getVariables().getFromIndex(8).getChild("Password").setString((( gdjs.Untitled_32sceneCode.GDpasswordObjects1.length === 0 ) ? "" :gdjs.Untitled_32sceneCode.GDpasswordObjects1[0].getBehavior("Text").getText()));
}
{runtimeScene.getScene().getVariables().getFromIndex(8).getChild("Email").setString((( gdjs.Untitled_32sceneCode.GDEmailObjects1.length === 0 ) ? "" :gdjs.Untitled_32sceneCode.GDEmailObjects1[0].getBehavior("Text").getText()));
}
{runtimeScene.getScene().getVariables().getFromIndex(8).getChild("Nickname").setString((( gdjs.Untitled_32sceneCode.GDNicknameObjects1.length === 0 ) ? "" :gdjs.Untitled_32sceneCode.GDNicknameObjects1[0].getBehavior("Text").getText()));
}
{runtimeScene.getScene().getVariables().getFromIndex(8).getChild("School").setString((( gdjs.Untitled_32sceneCode.GDscoolObjects1.length === 0 ) ? "" :gdjs.Untitled_32sceneCode.GDscoolObjects1[0].getBehavior("Text").getText()));
}
{runtimeScene.getScene().getVariables().getFromIndex(8).getChild("Age").setString((( gdjs.Untitled_32sceneCode.GDageObjects1.length === 0 ) ? "" :gdjs.Untitled_32sceneCode.GDageObjects1[0].getBehavior("Text").getText()));
}
{runtimeScene.getScene().getVariables().getFromIndex(8).getChild("FNAV_Demo").setString(runtimeScene.getScene().getVariables().getFromIndex(2).getAsString());
}
{runtimeScene.getScene().getVariables().getFromIndex(8).getChild("FNAV_Demo").setString(runtimeScene.getScene().getVariables().getFromIndex(3).getAsString());
}
{runtimeScene.getScene().getVariables().getFromIndex(8).getChild("New_games").setString(runtimeScene.getScene().getVariables().getFromIndex(4).getAsString());
}
{runtimeScene.getScene().getVariables().getFromIndex(8).getChild("Suggestion").setString((( gdjs.Untitled_32sceneCode.GDthingObjects1.length === 0 ) ? "" :gdjs.Untitled_32sceneCode.GDthingObjects1[0].getBehavior("Text").getText()));
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDnameObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDpasswordObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDpasswordObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEmailObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEmailObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNicknameObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNicknameObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDscoolObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDscoolObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDthingObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDthingObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDageObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDageObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewText2Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSquareWhiteToggleObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSquareWhiteToggleObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDdemoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDdemoObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButtonObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDupdateObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDupdateObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDemaileddObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDemaileddObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDupdatesObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDupdatesObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDgamesObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDgamesObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.firebaseTools.firestore.writeDocument("Accounts", (( gdjs.Untitled_32sceneCode.GDnameObjects1.length === 0 ) ? "" :gdjs.Untitled_32sceneCode.GDnameObjects1[0].getBehavior("Text").getText()), runtimeScene.getScene().getVariables().getFromIndex(8), gdjs.VariablesContainer.badVariable);
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("demo"), gdjs.Untitled_32sceneCode.GDdemoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDdemoObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDdemoObjects1[i].IsChecked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDdemoObjects1[k] = gdjs.Untitled_32sceneCode.GDdemoObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDdemoObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setBoolean(true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("demo"), gdjs.Untitled_32sceneCode.GDdemoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDdemoObjects1.length;i<l;++i) {
    if ( !(gdjs.Untitled_32sceneCode.GDdemoObjects1[i].IsChecked(null)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDdemoObjects1[k] = gdjs.Untitled_32sceneCode.GDdemoObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDdemoObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setBoolean(false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("update"), gdjs.Untitled_32sceneCode.GDupdateObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDupdateObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDupdateObjects1[i].IsChecked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDupdateObjects1[k] = gdjs.Untitled_32sceneCode.GDupdateObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDupdateObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("update"), gdjs.Untitled_32sceneCode.GDupdateObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDupdateObjects1.length;i<l;++i) {
    if ( !(gdjs.Untitled_32sceneCode.GDupdateObjects1[i].IsChecked(null)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDupdateObjects1[k] = gdjs.Untitled_32sceneCode.GDupdateObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDupdateObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SquareWhiteToggle"), gdjs.Untitled_32sceneCode.GDSquareWhiteToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDSquareWhiteToggleObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDSquareWhiteToggleObjects1[i].IsChecked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDSquareWhiteToggleObjects1[k] = gdjs.Untitled_32sceneCode.GDSquareWhiteToggleObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDSquareWhiteToggleObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).setBoolean(true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SquareWhiteToggle"), gdjs.Untitled_32sceneCode.GDSquareWhiteToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDSquareWhiteToggleObjects1.length;i<l;++i) {
    if ( !(gdjs.Untitled_32sceneCode.GDSquareWhiteToggleObjects1[i].IsChecked(null)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDSquareWhiteToggleObjects1[k] = gdjs.Untitled_32sceneCode.GDSquareWhiteToggleObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDSquareWhiteToggleObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).setBoolean(false);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("age"), gdjs.Untitled_32sceneCode.GDageObjects1);
gdjs.copyArray(runtimeScene.getObjects("password"), gdjs.Untitled_32sceneCode.GDpasswordObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(gdjs.evtTools.string.strLen((( gdjs.Untitled_32sceneCode.GDpasswordObjects1.length === 0 ) ? "" :gdjs.Untitled_32sceneCode.GDpasswordObjects1[0].getBehavior("Text").getText())));
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(gdjs.evtTools.common.toNumber((( gdjs.Untitled_32sceneCode.GDageObjects1.length === 0 ) ? "" :gdjs.Untitled_32sceneCode.GDageObjects1[0].getBehavior("Text").getText())));
}
}

}


{



}


{


gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() >= 8);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10485004);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(5).getChild("Password").setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() < 8);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10485820);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(5).getChild("Password").setBoolean(false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() < 30);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10487332);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(5).getChild("Age").setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() < 0);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() > 30);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10488468);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(5).getChild("Age").setBoolean(false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Email"), gdjs.Untitled_32sceneCode.GDEmailObjects1);
gdjs.copyArray(runtimeScene.getObjects("Nickname"), gdjs.Untitled_32sceneCode.GDNicknameObjects1);
gdjs.copyArray(runtimeScene.getObjects("age"), gdjs.Untitled_32sceneCode.GDageObjects1);
gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.Untitled_32sceneCode.GDnameObjects1);
gdjs.copyArray(runtimeScene.getObjects("password"), gdjs.Untitled_32sceneCode.GDpasswordObjects1);
gdjs.copyArray(runtimeScene.getObjects("scool"), gdjs.Untitled_32sceneCode.GDscoolObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDnameObjects1[i].getBehavior("Text").getText() != "" ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDnameObjects1[k] = gdjs.Untitled_32sceneCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDnameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDpasswordObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDpasswordObjects1[i].getBehavior("Text").getText() != "" ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDpasswordObjects1[k] = gdjs.Untitled_32sceneCode.GDpasswordObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDpasswordObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDEmailObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDEmailObjects1[i].getBehavior("Text").getText() != "" ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDEmailObjects1[k] = gdjs.Untitled_32sceneCode.GDEmailObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDEmailObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDNicknameObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDNicknameObjects1[i].getBehavior("Text").getText() != "" ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDNicknameObjects1[k] = gdjs.Untitled_32sceneCode.GDNicknameObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDNicknameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDscoolObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDscoolObjects1[i].getBehavior("Text").getText() != "" ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDscoolObjects1[k] = gdjs.Untitled_32sceneCode.GDscoolObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDscoolObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDageObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDageObjects1[i].getBehavior("Text").getText() != "" ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDageObjects1[k] = gdjs.Untitled_32sceneCode.GDageObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDageObjects1.length = k;
}
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(5).getChild("Values").setBoolean(true);
}
}

}


{

gdjs.Untitled_32sceneCode.GDEmailObjects1.length = 0;

gdjs.Untitled_32sceneCode.GDNicknameObjects1.length = 0;

gdjs.Untitled_32sceneCode.GDageObjects1.length = 0;

gdjs.Untitled_32sceneCode.GDnameObjects1.length = 0;

gdjs.Untitled_32sceneCode.GDpasswordObjects1.length = 0;

gdjs.Untitled_32sceneCode.GDscoolObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Untitled_32sceneCode.GDEmailObjects1_1final.length = 0;
gdjs.Untitled_32sceneCode.GDNicknameObjects1_1final.length = 0;
gdjs.Untitled_32sceneCode.GDageObjects1_1final.length = 0;
gdjs.Untitled_32sceneCode.GDnameObjects1_1final.length = 0;
gdjs.Untitled_32sceneCode.GDpasswordObjects1_1final.length = 0;
gdjs.Untitled_32sceneCode.GDscoolObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.Untitled_32sceneCode.GDnameObjects2);
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDnameObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDnameObjects2[i].getBehavior("Text").getText() == "" ) {
        isConditionTrue_1 = true;
        gdjs.Untitled_32sceneCode.GDnameObjects2[k] = gdjs.Untitled_32sceneCode.GDnameObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDnameObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDnameObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDnameObjects1_1final.indexOf(gdjs.Untitled_32sceneCode.GDnameObjects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDnameObjects1_1final.push(gdjs.Untitled_32sceneCode.GDnameObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("password"), gdjs.Untitled_32sceneCode.GDpasswordObjects2);
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDpasswordObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDpasswordObjects2[i].getBehavior("Text").getText() == "" ) {
        isConditionTrue_1 = true;
        gdjs.Untitled_32sceneCode.GDpasswordObjects2[k] = gdjs.Untitled_32sceneCode.GDpasswordObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDpasswordObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDpasswordObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDpasswordObjects1_1final.indexOf(gdjs.Untitled_32sceneCode.GDpasswordObjects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDpasswordObjects1_1final.push(gdjs.Untitled_32sceneCode.GDpasswordObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Email"), gdjs.Untitled_32sceneCode.GDEmailObjects2);
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDEmailObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDEmailObjects2[i].getBehavior("Text").getText() == "" ) {
        isConditionTrue_1 = true;
        gdjs.Untitled_32sceneCode.GDEmailObjects2[k] = gdjs.Untitled_32sceneCode.GDEmailObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDEmailObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDEmailObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDEmailObjects1_1final.indexOf(gdjs.Untitled_32sceneCode.GDEmailObjects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDEmailObjects1_1final.push(gdjs.Untitled_32sceneCode.GDEmailObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Nickname"), gdjs.Untitled_32sceneCode.GDNicknameObjects2);
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDNicknameObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDNicknameObjects2[i].getBehavior("Text").getText() == "" ) {
        isConditionTrue_1 = true;
        gdjs.Untitled_32sceneCode.GDNicknameObjects2[k] = gdjs.Untitled_32sceneCode.GDNicknameObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDNicknameObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDNicknameObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDNicknameObjects1_1final.indexOf(gdjs.Untitled_32sceneCode.GDNicknameObjects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDNicknameObjects1_1final.push(gdjs.Untitled_32sceneCode.GDNicknameObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("scool"), gdjs.Untitled_32sceneCode.GDscoolObjects2);
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDscoolObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDscoolObjects2[i].getBehavior("Text").getText() == "" ) {
        isConditionTrue_1 = true;
        gdjs.Untitled_32sceneCode.GDscoolObjects2[k] = gdjs.Untitled_32sceneCode.GDscoolObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDscoolObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDscoolObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDscoolObjects1_1final.indexOf(gdjs.Untitled_32sceneCode.GDscoolObjects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDscoolObjects1_1final.push(gdjs.Untitled_32sceneCode.GDscoolObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("age"), gdjs.Untitled_32sceneCode.GDageObjects2);
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDageObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDageObjects2[i].getBehavior("Text").getText() == "" ) {
        isConditionTrue_1 = true;
        gdjs.Untitled_32sceneCode.GDageObjects2[k] = gdjs.Untitled_32sceneCode.GDageObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDageObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDageObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDageObjects1_1final.indexOf(gdjs.Untitled_32sceneCode.GDageObjects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDageObjects1_1final.push(gdjs.Untitled_32sceneCode.GDageObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDEmailObjects1_1final, gdjs.Untitled_32sceneCode.GDEmailObjects1);
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDNicknameObjects1_1final, gdjs.Untitled_32sceneCode.GDNicknameObjects1);
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDageObjects1_1final, gdjs.Untitled_32sceneCode.GDageObjects1);
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDnameObjects1_1final, gdjs.Untitled_32sceneCode.GDnameObjects1);
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDpasswordObjects1_1final, gdjs.Untitled_32sceneCode.GDpasswordObjects1);
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDscoolObjects1_1final, gdjs.Untitled_32sceneCode.GDscoolObjects1);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(5).getChild("Values").setBoolean(false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Email"), gdjs.Untitled_32sceneCode.GDEmailObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDEmailObjects1.length;i<l;++i) {
    if ( (gdjs.Untitled_32sceneCode.GDEmailObjects1[i].getBehavior("Text").getText()).includes("@") ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDEmailObjects1[k] = gdjs.Untitled_32sceneCode.GDEmailObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDEmailObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDEmailObjects1.length;i<l;++i) {
    if ( (gdjs.Untitled_32sceneCode.GDEmailObjects1[i].getBehavior("Text").getText()).includes(".") ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDEmailObjects1[k] = gdjs.Untitled_32sceneCode.GDEmailObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDEmailObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10491956);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(5).getChild("email").setBoolean(true);
}
}

}


{

gdjs.Untitled_32sceneCode.GDEmailObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Untitled_32sceneCode.GDEmailObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Email"), gdjs.Untitled_32sceneCode.GDEmailObjects2);
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDEmailObjects2.length;i<l;++i) {
    if ( !((gdjs.Untitled_32sceneCode.GDEmailObjects2[i].getBehavior("Text").getText()).includes("@")) ) {
        isConditionTrue_1 = true;
        gdjs.Untitled_32sceneCode.GDEmailObjects2[k] = gdjs.Untitled_32sceneCode.GDEmailObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDEmailObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDEmailObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDEmailObjects1_1final.indexOf(gdjs.Untitled_32sceneCode.GDEmailObjects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDEmailObjects1_1final.push(gdjs.Untitled_32sceneCode.GDEmailObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Email"), gdjs.Untitled_32sceneCode.GDEmailObjects2);
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDEmailObjects2.length;i<l;++i) {
    if ( !((gdjs.Untitled_32sceneCode.GDEmailObjects2[i].getBehavior("Text").getText()).includes(".")) ) {
        isConditionTrue_1 = true;
        gdjs.Untitled_32sceneCode.GDEmailObjects2[k] = gdjs.Untitled_32sceneCode.GDEmailObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDEmailObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDEmailObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDEmailObjects1_1final.indexOf(gdjs.Untitled_32sceneCode.GDEmailObjects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDEmailObjects1_1final.push(gdjs.Untitled_32sceneCode.GDEmailObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDEmailObjects1_1final, gdjs.Untitled_32sceneCode.GDEmailObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10495556);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(5).getChild("email").setBoolean(false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsString() == "NULL");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Email"), gdjs.Untitled_32sceneCode.GDEmailObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.Untitled_32sceneCode.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Nickname"), gdjs.Untitled_32sceneCode.GDNicknameObjects1);
gdjs.copyArray(runtimeScene.getObjects("SquareWhiteToggle"), gdjs.Untitled_32sceneCode.GDSquareWhiteToggleObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteSquareDecoratedButton"), gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("age"), gdjs.Untitled_32sceneCode.GDageObjects1);
gdjs.copyArray(runtimeScene.getObjects("cmon"), gdjs.Untitled_32sceneCode.GDcmonObjects1);
gdjs.copyArray(runtimeScene.getObjects("demo"), gdjs.Untitled_32sceneCode.GDdemoObjects1);
gdjs.copyArray(runtimeScene.getObjects("emailedd"), gdjs.Untitled_32sceneCode.GDemaileddObjects1);
gdjs.copyArray(runtimeScene.getObjects("games"), gdjs.Untitled_32sceneCode.GDgamesObjects1);
gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.Untitled_32sceneCode.GDnameObjects1);
gdjs.copyArray(runtimeScene.getObjects("nope"), gdjs.Untitled_32sceneCode.GDnopeObjects1);
gdjs.copyArray(runtimeScene.getObjects("password"), gdjs.Untitled_32sceneCode.GDpasswordObjects1);
gdjs.copyArray(runtimeScene.getObjects("scool"), gdjs.Untitled_32sceneCode.GDscoolObjects1);
gdjs.copyArray(runtimeScene.getObjects("thing"), gdjs.Untitled_32sceneCode.GDthingObjects1);
gdjs.copyArray(runtimeScene.getObjects("update"), gdjs.Untitled_32sceneCode.GDupdateObjects1);
gdjs.copyArray(runtimeScene.getObjects("updates"), gdjs.Untitled_32sceneCode.GDupdatesObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDnameObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDpasswordObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDpasswordObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEmailObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEmailObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNicknameObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNicknameObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDscoolObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDscoolObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDthingObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDthingObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDageObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDageObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewText2Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSquareWhiteToggleObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSquareWhiteToggleObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDdemoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDdemoObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButtonObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDupdateObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDupdateObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDemaileddObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDemaileddObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDupdatesObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDupdatesObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDgamesObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDgamesObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcmonObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcmonObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDnopeObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDnopeObjects1[i].hide(false);
}
}
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDNewTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDnameObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDnameObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDpasswordObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDpasswordObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDEmailObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDEmailObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNicknameObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNicknameObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewText2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewText2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDscoolObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDscoolObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDthingObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDthingObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSquareWhiteToggleObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSquareWhiteToggleObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDgamesObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDgamesObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDageObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDageObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDemaileddObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDemaileddObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDdemoObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDdemoObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDupdatesObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDupdatesObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDupdateObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDupdateObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDnopeObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDnopeObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDtyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDtyObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDversionObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDversionObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDcmonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDcmonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDstatus_9595serverObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDstatus_9595serverObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList3(runtimeScene);
gdjs.Untitled_32sceneCode.GDNewTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDnameObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDnameObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDpasswordObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDpasswordObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDEmailObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDEmailObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNicknameObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNicknameObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewText2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewText2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDscoolObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDscoolObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDthingObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDthingObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSquareWhiteToggleObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSquareWhiteToggleObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDgamesObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDgamesObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDageObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDageObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDemaileddObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDemaileddObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDdemoObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDdemoObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDupdatesObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDupdatesObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDupdateObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDupdateObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDnopeObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDnopeObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDtyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDtyObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDversionObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDversionObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDcmonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDcmonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDstatus_9595serverObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDstatus_9595serverObjects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
