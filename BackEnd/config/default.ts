const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
export default {
    port:3000,
    dbUrl:`mongodb+srv://${dbUser}:${dbPassword}@apicluster.jbocyvi.mongodb.net/DB_Birds?retryWrites=true&w=majority`,
    env: "development"
}