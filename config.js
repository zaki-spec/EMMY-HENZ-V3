//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Calabar, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Calabar";
global.github = process.env.GITHUB || "https://github.com/EMMYHENZ-TECH";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.devs = "https://t.me/EmmyHenz";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "https://t.me/EmmyHenz";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "2349121785627,2349125042727";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUJWVGRYSEQvT2I3ZmNQeE96UTBXKzY5YnhqdXFWOXlCT1pqcHVHZWptUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0gvbDBSZCs3U2FZTEhGbXJoRUZucklwcU5HU084THNjUkVGdjM5YTN6ST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3T2VCWWdBSnRkOGhkL1BYK0FpVWdHTFJ0YzdOTUFLU1B1R3JrejVXejMwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0N1VvN2tMUllXNnJxdndPK2M2aDRieVlveE5vYUlrZnJIYU9LZHdDNG53PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFLaEp3c0dtY3hLNG9oNWNRUW0vbExua3BibUlKeldqZkRKdlJ6dVZmVUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikk5aHRPSmhaclp6OVpCaWJQWW1YTUdLa0RuS0Zick5aYjFCNi9MamhZa0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FRYWs1RDRYSURaSUlqbTdRUytqZmIyTVdMV25wcVBIMkx1cWdLWGpWbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTjE1TzNxYVZHYStqT25MQlJXUjRJcEJYOEM1WGZSQjJ4QnVpK0xUWnp5VT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkUxZ3F6dlpjZklzYlJBRjIrQVhiL1dwSjFJbU5ZRURoS0V1Tlo4ai9jYTZxZHRhNFRzVG1yS21oRXRXb2lyNE1PMGNsVWNreVpxenlYY1FLMW9BSURRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIxLCJhZHZTZWNyZXRLZXkiOiJia1gwUTVZYWVoaHFwY2VKclo5QWlyOUpEVHNKSHBNa1JXUE5tZC9BazdnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJBRmxkNGotWVFLaUY2LW5pdm5tOTlnIiwicGhvbmVJZCI6ImMwNjE2YTI3LTQ5YWQtNDJmYy1iNTVhLTE0MGQ3OTM3MTU1ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRUDJMbUpMNHRLVHVMbjkyWVo0d1FNV0pQZVU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZXA5ZVNTWFQ1ajBISCtUeUJadFBLcEY5OFNvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjlUSDJNUU1DIiwibWUiOnsiaWQiOiIyMzQ4MTI2Njk5ODU0OjE4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlBFVEVSIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJMmNxZmtERUt2SXJMa0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ1VDNIRkZsYk9kL2UrVG5FMVBSVmtXdm1Ka3VDa1ZwY0hUdytxMDNqM1dRPSIsImFjY291bnRTaWduYXR1cmUiOiI2L1pWNzZRUmlZRDVoUGFMdHFhK1dnUEdzaG5OZk1QMlNsUUlUaTRMczlmS05kUVhIU084NnRlTCtwcThGVFpCbEc0elkvZGZndEw0WUlmdWswYXdEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQklRY21tNDFvc1RiVUN1RkJITG1lbUZVUVhTbm1JOFdFM25oR1FwZG9PU0FlbUR4d0JyZkJuOGZWcGlqUDgvRWxLUmI1RDZzL0JsSWNNVTZGMlI2RGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTI2Njk5ODU0OjE4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJrOXh4UlpXem5mM3ZrNXhOVDBWWkZyNWlaTGdwRmFYQjA4UHF0TjQ5MWsifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzA4ODA1NzB9
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUJWVGRYSEQvT2I3ZmNQeE96UTBXKzY5YnhqdXFWOXlCT1pqcHVHZWptUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0gvbDBSZCs3U2FZTEhGbXJoRUZucklwcU5HU084THNjUkVGdjM5YTN6ST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3T2VCWWdBSnRkOGhkL1BYK0FpVWdHTFJ0YzdOTUFLU1B1R3JrejVXejMwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0N1VvN2tMUllXNnJxdndPK2M2aDRieVlveE5vYUlrZnJIYU9LZHdDNG53PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFLaEp3c0dtY3hLNG9oNWNRUW0vbExua3BibUlKeldqZkRKdlJ6dVZmVUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikk5aHRPSmhaclp6OVpCaWJQWW1YTUdLa0RuS0Zick5aYjFCNi9MamhZa0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FRYWs1RDRYSURaSUlqbTdRUytqZmIyTVdMV25wcVBIMkx1cWdLWGpWbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTjE1TzNxYVZHYStqT25MQlJXUjRJcEJYOEM1WGZSQjJ4QnVpK0xUWnp5VT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkUxZ3F6dlpjZklzYlJBRjIrQVhiL1dwSjFJbU5ZRURoS0V1Tlo4ai9jYTZxZHRhNFRzVG1yS21oRXRXb2lyNE1PMGNsVWNreVpxenlYY1FLMW9BSURRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIxLCJhZHZTZWNyZXRLZXkiOiJia1gwUTVZYWVoaHFwY2VKclo5QWlyOUpEVHNKSHBNa1JXUE5tZC9BazdnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJBRmxkNGotWVFLaUY2LW5pdm5tOTlnIiwicGhvbmVJZCI6ImMwNjE2YTI3LTQ5YWQtNDJmYy1iNTVhLTE0MGQ3OTM3MTU1ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRUDJMbUpMNHRLVHVMbjkyWVo0d1FNV0pQZVU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZXA5ZVNTWFQ1ajBISCtUeUJadFBLcEY5OFNvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjlUSDJNUU1DIiwibWUiOnsiaWQiOiIyMzQ4MTI2Njk5ODU0OjE4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlBFVEVSIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJMmNxZmtERUt2SXJMa0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ1VDNIRkZsYk9kL2UrVG5FMVBSVmtXdm1Ka3VDa1ZwY0hUdytxMDNqM1dRPSIsImFjY291bnRTaWduYXR1cmUiOiI2L1pWNzZRUmlZRDVoUGFMdHFhK1dnUEdzaG5OZk1QMlNsUUlUaTRMczlmS05kUVhIU084NnRlTCtwcThGVFpCbEc0elkvZGZndEw0WUlmdWswYXdEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQklRY21tNDFvc1RiVUN1RkJITG1lbUZVUVhTbm1JOFdFM25oR1FwZG9PU0FlbUR4d0JyZkJuOGZWcGlqUDgvRWxLUmI1RDZzL0JsSWNNVTZGMlI2RGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTI2Njk5ODU0OjE4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJrOXh4UlpXem5mM3ZrNXhOVDBWWkZyNWlaTGdwRmFYQjA4UHF0TjQ5MWsifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzA4ODA1NzB9"
module.exports = {
  menu: process.env.MENU || "3",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "`EMMY_HENZ-V3™`",
  author: process.env.PACK_AUTHER || "EMMY_HENZ-V3",
  packname: process.env.PACK_NAME || "E M M Y",
  botname: process.env.BOT_NAME || "EMMY_HENZ-V3",
  ownername: process.env.OWNER_NAME || "Emmanuel Henshaw",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "E M M Y").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
