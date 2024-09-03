//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "2348100835767";
global.owner = process.env.OWNER_NUMBER || "2348100835767";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/Y0pLkKX.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUlScFpwdDhKUjV4dXJyamZtWkpYSEhXcmt1eHV3cmswZWFPdGt4YWJIRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibnJ4N2Nmb3NXWlNubGhLUmZMT3hFajJBNHIwN0xnSHpZMThMWjhJNWFHOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIySWtaOFllRXVtbjR4d2tUdmJ3ZFEvbWRxZ2p2Q2pwUllYQWkvd0E5TTNNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzT25jNExvdGhtTWJGM2F4VFpjVXo4Mm5wRGg3VXNEUW1HT2k1NzF1YkNFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1QYXlnSFRnMTB0NVkybVFYcG1mZFduUk82MWRtekpQK1F0VTIwbFYvMVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRKVzFGNmlIVGFOV1drNExWNzhTQnhYZmJORUhQT05xWkJKKzNHbG1JMVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibURpeTBhU1FDZkwvbGpndlQrMng4S2F6MnhvdmNmTkx0N2QzZC9xaUNFUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVQweHdKejlXOE1rSVJ1QUwraTBTZXpTZU9hUExpUSsrN29ITm5kb3dUVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjV6RFAyZzVxSHNDNWtJQnh4NFB6ankrU1RuR29xNERCblpLS3hyaGdhd0JGenZSYjdqcGlqb3I0ZnFvWjh3SnhmTXdQM3IxMUhsYnBISVAyUGpjSWhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM3LCJhZHZTZWNyZXRLZXkiOiI5RnpobHRqNFVWUDJ0eGwvWE9BRkh0eC9YN1VXZGZib2pneDZ2eVQ5bjZRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxNjkzNzk1MzFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMzQ4MzU0QTI5RDUxMEI2Njg3MjU0QjJDRkRENzVDNzQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNDg1MzM3N31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoib3AwM1pwWU9RLUM2LTdkT0dEcXc3dyIsInBob25lSWQiOiIxMjU3MTg5Mi1hYTcyLTRjYWYtYTBkMS0zZTUxMzlhMzVjZDIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTlkzc0ZWOFdUTDlmc0tzMXgzYWJqZlIvWW1rPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZIZVVudFA2SlhaNkxmM0VJUW52SmRhQjlCND0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJBU1JaMjhKUiIsIm1lIjp7ImlkIjoiMjM0ODE2OTM3OTUzMToxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkTDhVLDglkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09yamhNWUZFUERZdkxZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im5vQlBVVjZJU2NCMHNrR3JDNWo0Y2Z3aUFFbllPOHNIemNld3VvVU14bkU9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im1IdWVCb1BMSGdoVzNFallYRHhUYmV5bDNycFlFOU5TVjQ0clJRRlFxM2kySkRCK0tia3dXYms3UUltZzVoRzJjKzVYVnB0eFlkLzhkcHd1d0pKL0NnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJiQ3FnM0crYjNBVnZROE15c2g3QWZIMDIrRWdIVXQ4RVhrNHdPRWtoS3dmNEhQcEZBREFjQnVMU1VHZVkyRUJSWXlGd3dzK0J4MDFMdmJTTVVlVjRpdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxNjkzNzk1MzE6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaNkFUMUZlaUVuQWRMSkJxd3VZK0hIOElnQkoyRHZMQjgzSHNMcUZETVp4In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI0ODUzMzczLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUx3UyJ9"
module.exports = {
  githubToken: process.env.GITHUB_TOKEN || "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",
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-qxpQpJ-Mq1E6PIJ0q10PMNpQ2dZHJLIpNuLxv_SXdgT3BlbkFJuJuesP4lz39WGcqglcdoYDxTRUrkvHZGeNX_-klnsA",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
