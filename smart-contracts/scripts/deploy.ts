import { ethers } from "hardhat";
const fs = require("fs");

async function main() {
  const Profile = await ethers.getContractFactory("Profile");
  const profile = await Profile.deploy();
  await profile.deployed();
  console.log("Profile deployed to:", profile.address);

  const Tweet = await ethers.getContractFactory("Tweet");
  const tweet = await Tweet.deploy();
  await tweet.deployed();
  console.log("Tweet deployed to:", tweet.address);

  const config = `
  export const profileContractAddress = "${profile.address}"
  export const tweetContractAddress = "${tweet.address}"
  `;

  const data = JSON.stringify(config);
  fs.writeFileSync("contract.config.js", JSON.parse(data));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
