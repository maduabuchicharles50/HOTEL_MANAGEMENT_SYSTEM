const roomTypeService = require("../service/roomTypeService");

class RoomTypeController {
    
  async create(req, res) {

  //   const checkRoomType = roomTypeService.getAllRoomType({codeName: req.body.codeName.toLowerCase()});

  //   if(checkRoomType) return res.status(403).json({
  //     success: false,
  //     message: 'Room Type already exist'
  // })
      
      const newRoomType = await roomTypeService.addRoomType(req.body);
      
      return res.status(201).send({
        success: true,
        message: "created room type",
        data: newRoomType,
      });
    } 

    // Get all Room Type
    async getRoomTypes(req, res) {
      const roomType = await roomTypeService.getAllRoomType({});
  
      if (!roomType) {
        return res.status(404).send({
          success: false,
          message: "Room not found",
        });
      }
  
      return res.status(200).send({
        success: true,
        message: "Room type found",
        data: roomType,
      });
    }
      

  // Find One
  async getRoomType(req, res) {
    const roomType = await roomTypeService.getRoomTypeById(req.params.id);

    if (!roomType) {
      return res.status(404).send({
        success: false,
        message: "Room not found",
      });
    }

    return res.status(200).send({
      success: true,
      message: "Room type found",
      data: roomType,
    });
  }

  async update(req, res) {
    const roomType = await roomTypeService.update(req.params.id, req.body);
    if (!roomType) {
      return res.status(404).send({
        success: false,
        message: "Room not found",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Room type updated successfully",
      data: roomType,
    });
  }

  async delete(req, res) {
    const roomType = await roomTypeService.delete(req.params.id);

    return res.status(200).send({
      success: true,
      message: "Room type deleted successfully",
    });
  }
}

module.exports = new RoomTypeController();
