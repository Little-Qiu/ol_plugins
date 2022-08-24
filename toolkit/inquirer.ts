/*
 * @Author: LittleQ
 * @Date: 2022-08-20 16:03:02
 * @LastEditTime: 2022-08-20 17:14:00
 * @LastEditors: LittleQ
 * @Description:
 * @FilePath: \ol_plugins\toolkit\inquirer.ts
 */
import inquirer from "inquirer";

export const inquireVersion = async () => {
  const { version } = await inquirer.prompt({
    type: "list",
    name: "version",
    message: "Please select the release version from list",
    default: "patch",
    choices: ["major", "minor", "patch"],
  });
  return version;
};
