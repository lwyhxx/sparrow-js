import {Sparrow} from '../../../../source/scripts/sparrow_es.js'

console.log(process.env)
const SPARROW_BASE_URL = process.env.VUE_APP_SPARROW_BASE_URL;
const CONSUMER_BASE_URL = process.env.VUE_APP_CONSUMER_BASE_URL;
console.log(CONSUMER_BASE_URL);
console.log(SPARROW_BASE_URL);

var tokenConfig = {};
tokenConfig[SPARROW_BASE_URL] = {
    'Token': function () {
        return localStorage.getItem('token')
    }
};
tokenConfig[CONSUMER_BASE_URL] = {
    'X-Sugar-Token': function () {
        return localStorage.getItem('token')
    }
};

Sparrow.ajax.tokenConfig = tokenConfig;

var db = new Sparrow.indexedDB({
    name: 'sparrow',
    version: "5.0",
    tableNames: [{"name": "contact", "key": "userId"}, {"name": "session", "key": "sessionKey"}, {
        "name": "qun",
        "key": "qunId"
    }]
});


const ChatApi = {
    getSessionFromLocal: function (sessionKey) {
        console.log("getSessionFromLocal:" + sessionKey);
        return db.init().then(function () {
            console.log(" indexedDB init success")
            return db.get('session', sessionKey).then(function (data) {
                console.log("indexedDB get success:" + data);
                return data;
            }, function (error) {
                console.log("indexedDB get fail:" + error);
                return null;
            });
        }, function (error) {
            console.log("indexedDB init fail:" + error);
        });
    },
    getSession: function getSession(token) {
        const data = 'token=' + token;
        return Sparrow.http.post(SPARROW_BASE_URL + "/sessions", data);
    },
    getContacts:async function getFrinedList(token) {
        const data = 'token=' + token;
        return await Sparrow.http.post(SPARROW_BASE_URL + "/contacts", data);
    },
    setRead: function setRead(chatType, sessionKey, token) {
        const params = {
            chatType: chatType,
            sessionKey: sessionKey,
            token: token
        };
        return Sparrow.http.post(SPARROW_BASE_URL + "/session/read", params);
    },
    cancelMsg: function cancelMsg(chatType, sessionKey, token, clientSendTime) {
        const params = {
            chatType: chatType,
            sessionKey: sessionKey,
            token: token,
            clientSendTime: clientSendTime,
        };
        return Sparrow.http.post(SPARROW_BASE_URL + "/cancel", params);
    },

    login: function (code, mobile, password) {
        const params = {
            code: code,
            mobile: mobile,
            password: password,
        };
        return Sparrow.http.post(CONSUMER_BASE_URL + "/app/authMember/loginByCode", params);
    },
    getUserByPhone: function (mobile) {
        const params = "mobile=" + mobile;
        return Sparrow.http.get(CONSUMER_BASE_URL + "/app/message/userDetail?" + params);
    },
    getUserById: async function (id,userMap) {
        if(userMap!=null&&userMap[id]!=null){
            return userMap[id];
        }
        const params = "id=" + id;
        return await Sparrow.http.get(CONSUMER_BASE_URL + "/app/message/findById?" + params).then(function (res) {
            return res.data;
        });
    },
    getUserListByIds:async  function (idArr, userMap) {
        if (Array.isArray(idArr) || idArr.length === 0) {
            return null;
        }
      try {
          for (var i = 0; i < idArr.length; i++) {
              if (userMap[idArr[i]] != null) {
                  idArr.splice(i, 1);
                  i--;
              }
          }
          return  Promise.resolve(data);
          const params = {
              idArr: idArr,
          };
          //var a=await Sparrow.http.post(CONSUMER_BASE_URL + "/app/message/userDetailList", params);
          if(a.code!=200){
              return Promise.reject(a);
          }
      }
      catch (e){
          return null;
      }
    },
    addFriendById: function (id) {
        const params = "id=" + id;
        return Sparrow.http.post(CONSUMER_BASE_URL + "/app/message/addFriend", params);
    },
    removeFriend: function (id) {
        const params = "id=" + id;
        return Sparrow.http.post(CONSUMER_BASE_URL + "/app/message/removeFriend", params);
    },
    newFriendList: function (id) {
        const params = "id=" + id;
        return Sparrow.http.get(CONSUMER_BASE_URL + "/app/message/newFriend?" + params);
    },
    auditFriend: function (id, status) {
        const params = "id=" + id + "&status=" + status;
        return Sparrow.http.post(CONSUMER_BASE_URL + "/app/message/userFriendAudit", params);
    },
    existGroup: function (id) {
        const params = "groupId=" + id;
        return Sparrow.http.post(CONSUMER_BASE_URL + "/app/message/removeGroup", params);
    },
    modifyGroup: function (id, name, avatar) {
        const params = "groupId=" + id + "&name=" + name + "&avatar=" + avatar;
        return Sparrow.http.post(CONSUMER_BASE_URL + "/app/message/changeGroup", params);
    },
    systemNotice: function () {
        return Sparrow.http.get(CONSUMER_BASE_URL + "/app/message/systemInform");
    },
    customList: function () {
        return Sparrow.http.get(CONSUMER_BASE_URL + "/app/message/customList");
    }
}
export {ChatApi};
