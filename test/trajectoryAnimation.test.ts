/*
 * @Author: LittleQ
 * @Date: 2022-08-20 23:08:06
 * @LastEditTime: 2022-08-20 23:09:46
 * @LastEditors: LittleQ
 * @Description:
 * @FilePath: \ol_plugins\test\trajectoryAnimation.test.ts
 */
import TrajectoryAnimation from "../src/trajectory/trajectoryAnimation";

/**
 * Dummy test
 */
describe("TrajectoryAnimation test", () => {
  it("works if true is truthy", () => {
    expect(true).toBeTruthy();
  });

  it("TrajectoryAnimation is instantiable", () => {
    expect(new TrajectoryAnimation({})).toBeInstanceOf(TrajectoryAnimation);
  });
});
