import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Booking = sequelize.define('bookings', {
    name: { type: DataTypes.STRING,  allowNull: false  }
}, {
    timestamps: true,
    freezeTableName: true
})

export default Booking
