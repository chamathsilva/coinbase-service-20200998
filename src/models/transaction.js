/* eslint-disable func-names */
/* eslint-disable no-magic-numbers */
export default function (sequelize, DataTypes) {
  const attributes = {
    transaction_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'transaction_id',
    },
    coin: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      field: 'coin',
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      field: 'amount',
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      field: 'user_id',
    },
    type: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      field: 'type',
    }
  };
  const options = {
    tableName: 'transaction',
    comment: '',
    indexes: [],
    timestamps: false,
  };
  const TransactionModel = sequelize.define('transactionModel', attributes, options);
  return TransactionModel;
}
