import mongoose from "mongoose";

const UserCountSchema = mongoose.Schema({
  count: { required: true, type: Number },
});

const UserCountModel = mongoose.model("UserCount", UserCountSchema);

export default UserCountModel;
