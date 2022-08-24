/*
 * @Author: LittleQ
 * @Date: 2022-08-16 21:42:29
 * @LastEditTime: 2022-08-24 23:29:12
 * @LastEditors: LittleQ
 * @Description: 轨迹动画
 * @FilePath: \ol_plugins\src\trajectory\trajectoryAnimation.ts
 */

/**
 * 默认参数
 */
const defaultOptions = {};

import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";

export default class TrajectoryAnimation {
  private historyPathLayer: any = null;
  private historyPathLayerSource: any = null;
  private realPathLayer: any = null;
  private realPathLayerSource: any = null;

  constructor(opts: { map?: object }) {
    const { map, ...otherOptions } = opts;
    const options = Object.assign({}, defaultOptions, {
      ...otherOptions,
    });
    (this as any).map = map;
    (this as any).options = options;
    this.initVectorLayer();
  }

  private initVectorLayer(): void {
    this.historyPathLayer = new VectorLayer();
    this.historyPathLayerSource = new VectorSource();

    this.realPathLayer = new VectorLayer();
    this.realPathLayerSource = new VectorSource();
  }

  /**
   * 播放暂停
   */
  public paused(): void {}

  /**
   * 提高播放速度
   */
  public improveSpeed(): void {}
  /**
   * 降低播放速度
   */
  public reduceSpeed(): void {}
}
