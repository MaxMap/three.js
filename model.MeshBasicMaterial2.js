/*
 * @Author: “MaxMap” 975106543@qq.com
 * @Date: 2023-05-16 19:35:23
 * @LastEditors: “MaxMap” 975106543@qq.com
 * @LastEditTime: 2023-05-24 20:39:12
 * @FilePath: \init01\model.MeshBasicMaterial2.js
 * @Description: 三角形概念 实现矩形效果
 */
import * as THREE from 'three';

// 自定义几何体
const geometry = new THREE.BufferGeometry()

//类型化数组创建顶点数据
const vertices = new Float32Array([
    0, 0, 0, //顶点1坐标
    50, 0, 0, //顶点2坐标
    0, 100, 0, //顶点3坐标
    50, 0, 0, //顶点4坐标
    50, 100, 0, //顶点5坐标
    0, 100, 0, //顶点6坐标
]);
// 创建属性缓冲区对象
//3个为一组，表示一个顶点的xyz坐标
const attribue = new THREE.BufferAttribute(vertices, 3); 
geometry.attributes.position = attribue;
// 点渲染模式 基础网格材质
const material = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    side:THREE.DoubleSide, //两面可见 BackSide 背面可见 FrontSide正面可见
    size: 10.0 //点对象像素尺寸
}); 
const mesh = new THREE.Mesh(geometry, material);// 非连续线条
export default mesh
