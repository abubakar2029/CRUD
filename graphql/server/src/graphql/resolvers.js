// const User = require("../models/User");
// var jwt = require("jsonwebtoken");

module.exports = {
  Query: {
    async users() {
      const users = [
        {
          _id: "602777777777777777777777",
          name: "John",
          email: "john@gmail.com",
        },
        {
          _id: "602777777777777777777777",
          name: "Sarah",
          email: "sarah@gmail.com",
        },
      ];
      return users;
    },
    async test() {
      console.log("Request Query test");
      return 22;
    },
  },
  Mutation: {
    async createUser(_, { name, email }) {
      const newUser = { name, email, _id: 1185 };
      return newUser;
    },
    async signup(_, { data }) {
      try {
        console.log("Signup Data", data);
        const newPerson = new User(data);
        const response = await newPerson.save();
        console.log("New User Created", response);

        // let jwtToken;
        // await jwt.sign(
        //   { email: response.email },
        //   "monday",
        //   {
        //     expiresIn: "2h",
        //   },
        //   (err, token) => {
        //     if (err) {
        //       console.log(err);
        //     } else {
        //       console.log(token);
        //       jwtToken = token;
        //     }
        //   }
        // );

        console.log("response.emailData.email", response.emailData.email);

        try {
          let token = await jwt.sign(
            { email: response.emailData.email },
            "monday",
            {
              expiresIn: "2h",
            }
          );
        } catch (e) {}

        // const jwtToken = await new Promise((resolve, reject) => {
        //   jwt.sign(
        //     { email: response.emailData.email },
        //     "monday",
        //     {
        //       expiresIn: "2h",
        //     },
        //     (err, token) => {
        //       if (err) {
        //         reject(err);
        //       } else {
        //         resolve(token);
        //       }
        //     }
        //   );
        // });

        console.log("jwtToken : ", jwtToken);
        return { user: newPerson, token: jwtToken };
      } catch (error) {
        console.log(error.message);
        throw new Error("Error adding a new person", error);
      }
    },
  },
};
