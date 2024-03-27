const w = window;
const doc = document;
let lastType = "";

const types = {
    "info": {
        "message": "infoMessage",
        "id": "notifyInfo",
    },
};

const codes = {
    "~r~": "red",
    "~b~": "#378cbf",
    "~g~": "green",
    "~y~": "yellow",
    "~p~": "purple",
    "~c~": "grey",
    "~m~": "#212121",
    "~u~": "black",
    "~o~": "orange",
};

w.addEventListener("message", (event) => {
    const data = event.data;
    if (data.action === "show") {
        if (lastType) {
            hideLastNotification();
            showNotification(data.type, data.message);
        } else {
            showNotification(data.type, data.message);
        }
    } else if (data.action === "hide") {
        if (lastType !== "") {
            hideLastNotification();
        } else {
            console.log("There isn't a textUI displaying!?");
        }
    }
});

const replaceColors = (str, obj) => {
    let strToReplace = str;

    for (let id in obj) {
        strToReplace = strToReplace.split(id).join(`<span style="color: ${obj[id]}">`);
    }

    return strToReplace.split("~s~").join("</span>");
};

const hideLastNotification = () => {
    doc.getElementById(lastType).style.display = "none";
};

const showNotification = (type, message) => {
    for (let color in codes) {
        if (message.includes(color)) {
            let objArr = {};
            objArr[color] = codes[color];
            objArr["~s~"] = "</span>";

            let newStr = replaceColors(message, objArr);

            message = newStr;
        }
    }

    doc.getElementById(types[type].id).style.display = "block";
    lastType = types[type].id;
    doc.getElementById(types[type].message).innerHTML = message;
};
