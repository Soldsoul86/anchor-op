async function main() {
  const Anchor = await ethers.getContractFactory("Anchor");
  const anchor = await Anchor.deploy();

  await anchor.waitForDeployment();

  console.log("Anchor deployed to:", await anchor.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


