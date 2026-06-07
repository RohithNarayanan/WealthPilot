const FinancialProfile = require(
  "../models/FinancialProfile"
);

const createProfile = async (
  req,
  res
) => {
  try {
    const profile =
      await FinancialProfile.create({
        user: req.user.id,

        monthlyIncome:
          req.body.monthlyIncome,

        monthlyExpenses:
          req.body.monthlyExpenses,

        savings: req.body.savings,

        investments:
          req.body.investments,

        emi: req.body.emi,

        riskLevel:
          req.body.riskLevel,
      });

    res.status(201).json(profile);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getProfile = async (
  req,
  res
) => {
  try {
    const profile =
      await FinancialProfile.findOne({
        user: req.user.id,
      });

    if (!profile) {
      return res.status(404).json({
        message: "Profile not found",
      });
    }

    res.json(profile);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createProfile,
  getProfile,
};