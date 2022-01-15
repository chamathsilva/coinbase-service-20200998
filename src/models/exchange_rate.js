/* eslint-disable func-names */
/* eslint-disable no-magic-numbers */
export default function (sequelize, DataTypes) {
  const attributes = {
    exchange_rate_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'exchange_rate_id',
    },
    coin: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      field: 'coin',
    },
    value: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      field: 'value',
    }
  };
  const options = {
    tableName: 'exchange_rate',
    comment: '',
    indexes: [],
    timestamps: false,
  };
  const ExchangeRateModel = sequelize.define('exchangeRateModel', attributes, options);
  return ExchangeRateModel;
}
