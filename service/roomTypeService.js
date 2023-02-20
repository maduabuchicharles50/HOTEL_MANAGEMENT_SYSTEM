const RoomType = require("../models/roomTypes");

class RoomTypeService {
  async addRoomType(data) {
    return await RoomType.create(data);
  }

  async getAllRoomType(filter) {
     return await RoomType.find(filter);

  }

  async getRoomTypeById(id) {
    return await RoomType.findById(id)

  }

  async update(id, updateData) {
    const roomType = await RoomType.findOneAndUpdate({ _id: id }, updateData, {
      new: true,
      runValidators: true,
    });

    return roomType;
  }

  async delete(id) {
    const roomType = await RoomType.findByIdAndRemove(id);
    return roomType;
  }
}

module.exports = new RoomTypeService();
