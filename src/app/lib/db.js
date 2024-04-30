const {user,passkey} = process.env;

export const connectionStr = `mongodb+srv://${user}:${passkey}@cluster0.gt0yp6c.mongodb.net/restoDB?retryWrites=true&w=majority&appName=Cluster0`;

// console.log(process.env.user)