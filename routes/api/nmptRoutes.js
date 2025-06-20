const router = require("express").Router();
const nmptController = require("../../controllers/nmptController");

router
  .route("/send-email")
  .post(nmptController.sendEmail);

router
  .route("/set-email-verification-token")
  .post(nmptController.setEmailVerficationToken)

router
  .route("/create-account")
  .post(nmptController.createAccount); 

router
  .route("/check-existing-account-emails")
  .post(nmptController.checkExistingAccountEmails);

router
  .route("/reset-password-request")
  .post(nmptController.resetPasswordRequest);

router
  .route("/check-email-and-reset-token")
  .post(nmptController.checkEmailAndToken);

router
  .route("/reset-password")
  .post(nmptController.resetPassword);

router
  .route("/reset-login")
  .post(nmptController.login);

router
  .route("/set-session-access-token")
  .post(nmptController.setSessionAccessToken);

router
  .route("/fetch-account-details")
  .post(nmptController.fetchAccountDetails);

router
  .route("/test-backend-token")
  .post(nmptController.testBackendToken);

module.exports = router;
