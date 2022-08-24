/*
 * @Author: LittleQ
 * @Date: 2022-08-16 21:42:29
 * @LastEditTime: 2022-08-24 22:09:19
 * @LastEditors: LittleQ
 * @Description: 轨迹动画
 * @FilePath: \ol_plugins\src\trajectory\trajectoryAnimation.ts
 */

const defaultOptions = {};

export default class TrajectoryAnimation {
  constructor(opts: { map?: object }) {
    const { map, ...otherOptions } = opts;
    const options = Object.assign({}, defaultOptions, {
      ...otherOptions,
    });
    (this as any).map = map;
    (this as any).options = options;
  }
  public add(a: number, b: number): number {
    return a + b;
  }
}
