async function main() {
  const Anchor = await ethers.getContractFactory("Anchor");
  const anchor = await Anchor.deploy();
  await anchor.deployed();

  console.log("Anchor deployed to:", anchor.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

