const hre = require("hardhat");

async function main() {
  const ANCHOR_ADDRESS = "0x85fe66F9BaE368dC03547BDdd40d35F6e1bE452E";

  const [signer] = await hre.ethers.getSigners();

  console.log("Using signer:", signer.address);

  const tx = await signer.sendTransaction({
    to: ANCHOR_ADDRESS,
    value: hre.ethers.parseEther("0.001"),
  });

  console.log("Commit tx sent:", tx.hash);

  await tx.wait();

  console.log("✅ ETH successfully committed to Anchor");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

