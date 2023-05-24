import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls"
import Stats from 'three/addons/libs/stats.module.js'//性能监视器


const stats = new Stats()
document.body.appendChild(stats.domElement)

// 创建三维场景
const scene = new THREE.Scene();
// 定义一个几何体 =》 长方体
const geometry = new THREE.BoxGeometry(30, 30, 30);
// MeshBasicMaterial 不受光照影响
// MeshLambertMaterial 受光照影响

const material = new THREE.MeshLambertMaterial({
    color: 0xff1122,
    // transparent: true,//开启透明
    // opacity: 0.8
});

// 点光源
const light = new THREE.PointLight(0xff0000, 1);
light.position.set(60, 60, 50);
scene.add(light);
// 环境光会均匀的照亮场景中的所有物体。
const AmbientLight = new THREE.AmbientLight(0x404040); // soft white light
scene.add(AmbientLight);

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
mesh.position.set(0, 0, 0);

// 创建三维坐标轴
const axesHelper = new THREE.AxesHelper(150);
scene.add(axesHelper)

// 创建一个虚拟的球形网格 Mesh 的辅助对象来模拟 点光源 PointLight
const sphereSize = 2;
const pointLightHelper = new THREE.PointLightHelper(light, sphereSize);
scene.add(pointLightHelper);
// 平行光
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(50, 80, 60)
scene.add(directionalLight);
// 平行光 DirectionalLight 的辅助对象.
const helper = new THREE.DirectionalLightHelper(directionalLight, 2, 0xffffff);
scene.add(helper);

// const width = 800;
// const height = 500;
let width = innerWidth;
let height = innerHeight;
// 设置相机的四个参数
const fov = 60; // 摄像机视锥体垂直视野角度,简单来说：你看物体的上下夹角
let aspect = width / height; // 摄像机视锥体长宽比
const near = 0.1; // 摄像机视锥体近端面,近距离
const far = 3000; // 摄像机视锥体远端面,远距离

// 创建一个透视相机
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
// 相机位置
camera.position.set(100, 100, 100);
// 相机的视线 观察目标点的目标
camera.lookAt(0, 0, 0); //坐标原点
camera.lookAt(mesh.position); //指向网格模型

// 创建渲染器
const renderer = new THREE.WebGLRenderer();
// 将输出canvas的大小
renderer.setSize(width, height);
// 摄像机把场景拍下来
renderer.render(scene, camera);
document.body.appendChild(renderer.domElement);


// 创建相机控件
const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', () => {
    // console.log(' camera.position', camera.position)
    // renderer.render(scene, camera);//执行渲染结果
})
// 渲染函数
function render() {
    stats.update();
    renderer.render(scene, camera); //执行渲染操作
    mesh.rotateY(0.01);//每次绕y轴旋转0.01弧度
    requestAnimationFrame(render);//请求再次执行渲染函数render，渲染下一帧
}
render();
// 动态更新画布大小
window.onresize = function () {
    width = innerWidth;
    height = innerHeight;
    renderer.setSize(width, height);
    aspect = width / height;
    camera.updateProjectionMatrix()//更新摄像机投影矩阵。在任何参数被改变以后必须被调用。
}
