import { ethers, network } from "hardhat";
import { Greeter, Greeter__factory } from "../typechain-types";

async function main() {

  const [owner, addr1] = await ethers.getSigners();
  console.log("Network = ",network.name);

  const Greeter:Greeter__factory = await ethers.getContractFactory("Greeter");
  const greeter:Greeter = await Greeter.deploy("Hello Optimism");
  await greeter.deployed();

  console.log("Optimism deployed to:", greeter.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
