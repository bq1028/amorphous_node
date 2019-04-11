'use strict';

const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const returnGoodsSchema = new Schema({
  castId: Number,// 机组编号
  // 重卷录入信息
  furnace: String,// 制带炉号 06-20181120-01/01
  ribbonTypeName: String,//材质名称
  ribbonWidth: Number,//带宽
  castDate: Date, //生产日期
  caster: String, //喷带手
  coilNumber: Number, // 盘号 1, 2, 3
  diameter: Number, // 外径
  coilWeight: Number, // 单盘重量,kg
  coilNetWeight: Number, //单盘净重,kg
  laminationFactor: Number, //叠片系数 0.80
  laminationLevel: String, //叠片等级 不合格, 0, 1, 2, 3, 4
  // 检测录入信息
  realRibbonWidth: Number,//实际带宽
  ribbonThickness1: Number, //带材厚度点1, μm
  ribbonThickness2: Number, //带材厚度点2, μm
  ribbonThickness3: Number, //带材厚度点3, μm
  ribbonThickness4: Number, //带材厚度点4, μm
  ribbonThickness5: Number, //带材厚度点5, μm
  ribbonThickness6: Number, //带材厚度点6, μm
  ribbonThickness7: Number, //带材厚度点7, μm
  ribbonThickness8: Number, //带材厚度点8, μm
  ribbonThickness9: Number, //带材厚度点9, μm
  ribbonThicknessDeviation: Number, // 带材横向偏差, μm
  ribbonThickness: Number, // 带材平均厚度, μm
  ribbonThicknessLevel: Number, // 带材厚度级别
  ribbonToughness: String, //带材韧性
  ribbonToughnessLevel: String, //带材韧性等级
  appearence: String, //带材外观
  appearenceLevel: String, //带材外观等级
  ribbonTotalLevel: String, //带材综合级别
  isMeasureConfirmed: { type: Number, default: 0 }, // 检测是否确认可入库：1-是，0-否
  isStored: { type: Number, default: 3 }, // 是否入库：1-计划内入库，2-计划外入库，3-否, 4-退货入库
  unStoreReason: '', //不入库原因
  clients: Array, //去向 德国，法国
  measureDate: {type: Date, default: null}, //检测日期
  // 库房信息
  inStoreDate: {type: Date, default: null}, //入库日期
  outStoreDate: {type: Date, default: null}, //出库日期
  remainWeight: Number, //结余
  takeBy: String, //领走的部门 辊剪，顺义，固安，回炉/置换，粉末厂
  place: String, //储存的仓位 1-15-2
  shipRemark: String, //发货备注
}, {
	collection: 'ReturnGoods',
	timestamps: true,
	autoIndex: false
});

returnGoodsSchema.index({furnace: 1});

const ReturnGoods = mongoose.model('ReturnGoods', returnGoodsSchema);

module.exports = ReturnGoods;