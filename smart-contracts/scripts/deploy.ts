import { ethers } from "hardhat";

async function main() {
  const Profile = await ethers.getContractFactory("Profile");
  const profile = await Profile.deploy();
  await profile.deployed();
  console.log("Profile deployed to:", profile.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
