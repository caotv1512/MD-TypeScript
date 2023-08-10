const users = [{
        id: 142,
        first_name: "Dewie",
        last_name: "L' Estrange",
        email: "dlestrange3x@marketwatch.com",
        gender: "Male",
        age: 85,
        salary: 14561,
    },
    {
        id: 143,
        first_name: "Eziechiele",
        last_name: "Buxsy",
        email: "ebuxsy3y@linkedin.com",
        gender: "Male",
        age: 62,
        salary: 18808,
    },
];

const test = users.forEach((item, index) => {
    for (key in item) {
        if (key.split("")[0] === "/_([a-z])/g") {}
    }
    console.log(item);
});