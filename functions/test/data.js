//! Initialize Firebase Admin to App
const admin = require('firebase-admin');

let serviceAccount = require('../asset/serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();
//---------------------------------------------------------------------//
//! Test Section
// getData()

// // async function getData() {
// //     let groupAllData = await fetchGroupData()
// //     let secAllData = await fetchSecData(groupAllData)
// //     console.log(secAllData)
// // }

// // async function fetchGroupData() {
// //     var groupAllData = []
// //     var groupSnapshot = db.collection('groups').get()
// //     for (const groupDoc of (await groupSnapshot).docs) {
// //         groupAllData.push(groupDoc.data())
// //     }
// //     return groupAllData
// // }

// // async function fetchSecData(groupAllData = []) {
// //     for (var index = 0; index < groupAllData.length; index++) {
// //         const secSnapshot = await checkSecData(groupAllData[index].Sec)        
// //         if (secSnapshot.exists){
// //             groupAllData[index].Sec = secSnapshot.data()        
// //         }        
// //     }
// //     return groupAllData
// // }

// // async function checkSecData(secId) {    
// //     let secDoc = db.collection('secs').doc(secId).get()
// //     return secDoc
// // }

// var studentAllData = [];
// var secId = '5ca99695-7f1f-47ba-98f6-4b6c0fa15fbe'

// let secRef = db.collection('secs').doc(secId).collection('students').get()
//     .then((snapshot) => {
//         snapshot.forEach((doc) => {
//             studentAllData.push(doc.data());
//         });
//         console.log(studentAllData)
//     })
//     .catch((err) => {
//         console.log(err)
//     });

testLength()

async function testLength() {
    try{
        var groupAllData = await getDataSnapshot();
        console.log(groupAllData)
    }

    catch (err){
        console.log(err)
    }

    async function getDataSnapshot() {
        var dataIndex = 0
        var allData = 0
        var dataSnapshot = db.collection('admins').get()
        for (const dataDoc of (await dataSnapshot).docs) {
            dataIndex++
            allData = dataIndex         
        }    
        return allData
    }
}