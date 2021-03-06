const Sequelize = require('sequelize')

module.exports = (sequelize) => {
  const companyGroup = sequelize.define('companyGroup', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },

    groupName: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },

    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  })

  return companyGroup
}
