module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, read } = deployments;
  const { deployer } = await getNamedAccounts();

  const uniswap = await deploy("Uniswap", {
    from: deployer,
  });

  const common = await deploy("Common", {
    from: deployer,
    args: [uniswap.address],
  });

  const data = await read("Common", "getValue");
  console.log("\n", data.toString(), "\n");
};
