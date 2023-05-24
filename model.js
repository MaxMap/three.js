/*
 * @Author: “MaxMap” 975106543@qq.com
 * @Date: 2023-05-16 19:35:23
 * @LastEditors: “MaxMap” 975106543@qq.com
 * @LastEditTime: 2023-05-24 20:17:33
 * @FilePath: \init01\model.js
 * @Description: 点模型，线模型
 */
import * as THREE from 'three';

// 自定义几何体
const geometry = new THREE.BufferGeometry()

//类型化数组创建顶点数据
const vertices = new Float32Array([
    0, 0, 0, //顶点1坐标
    50, 0, 0, //顶点2坐标
    0, 100, 0, //顶点3坐标
    0, 0, 10, //顶点4坐标
    0, 0, 100, //顶点5坐标
    50, 0, 10, //顶点6坐标
]);
// 创建属性缓冲区对象
//3个为一组，表示一个顶点的xyz坐标
const attribue = new THREE.BufferAttribute(vertices, 3); 
geometry.attributes.position = attribue;
// 点渲染模式
const material = new THREE.PointsMaterial({
    color: 0xffff00,
    size: 10.0 //点对象像素尺寸
}); 
//点模型对象
// const points = new THREE.Points(geometry, material); 
// 创建线模型对象
// const line = new THREE.Line(geometry, material);
// const line = new THREE.LineLoop(geometry, material);//闭合线条
const line = new THREE.LineSegments(geometry, material);// 非连续线条
export default line
