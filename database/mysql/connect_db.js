import Sequelize from "sequelize";
const data = new Sequelize("bcbod7azi9fn4ivko5cq", "udsulhnqss6nmisk", "Hxx3Kp9ozVY1WrJowQkG", {
  host: "bcbod7azi9fn4ivko5cq-mysql.services.clever-cloud.com",
  dialect: "mysql",
});
data
  .authenticate()
  .then(() => {
    console.log("Kết nối thành công đến cơ sở dữ liệu.");
  })
  .catch((err) => {
    console.error("Không thể kết nối đến cơ sở dữ liệu:", err);
  });

export default data;
