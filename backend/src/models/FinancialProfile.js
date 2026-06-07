const mongoose = require("mongoose");

const financialProfileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    monthlyIncome: {
      type: Number,
      default: 0,
    },

    monthlyExpenses: {
      type: Number,
      default: 0,
    },

    savings: {
      type: Number,
      default: 0,
    },

    investments: {
      type: Number,
      default: 0,
    },

    emi: {
      type: Number,
      default: 0,
    },

    riskLevel: {
      type: String,
      default: "Moderate",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "FinancialProfile",
  financialProfileSchema
);