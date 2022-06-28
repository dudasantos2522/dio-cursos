function getAdmins(map) {
    let admins = [];

    for ([key, value] of map) {
        if (value === "Admin") admins.push(key);
    }

    return admins;
}

const users = new Map();

users.set("Luiz", "User");
users.set("Maria", "Admin");
users.set("Stephany", "Admin");
users.set("Natália", "Admin");

console.log(getAdmins(users));