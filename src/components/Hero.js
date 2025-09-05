"use client";

import { useState, useEffect } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);

  // 鼠标移动跟踪
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 100;
      const y = (e.clientY / window.innerHeight - 0.5) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 眨眼动画
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 3000 + Math.random() * 2000); // 随机间隔3-5秒

    return () => clearInterval(blinkInterval);
  }, []);

  // 计算人物转身方向
  const getCharacterRotation = () => {
    const rotationIntensity = mousePosition.x * 0.3; // 增加转身幅度
    return {
      // 左右转身 - 鼠标向左时人物向左转身
      rotateY: rotationIntensity,
      // 上下点头
      rotateX: -mousePosition.y * 0.1,
      // 身体倾斜
      rotateZ: mousePosition.x * 0.05,
      // 移动位置
      translateX: mousePosition.x * 0.5,
      translateY: mousePosition.y * 0.3
    };
  };

  const rotation = getCharacterRotation();

  return (
    <div className="w-full max-w-[1440px] h-[960px] relative mx-auto overflow-hidden pt-40">
      {/* Background */}
      <div className="w-full left-0 top-0 absolute bg-primary-gray" />
      
      {/* WEB - 在人物后面 (z-index 更低) */}
      <div className="left-[200px] top-[250px] absolute text-primary-orange font-bold font-mango z-10" style={{ fontSize: '350px', lineHeight: '350px', letterSpacing: '0.01em', transform: 'scaleY(0.65)' }}>
        WEB
      </div>
      
      {/* 3D 人物图像 - 在WEB前面 */}
      <div className="absolute left-[400px] top-[150px] z-20">
        <div 
          className="relative transition-transform duration-700 ease-out character-3d floating"
          style={{
            transform: `
              perspective(1200px) 
              rotateY(${rotation.rotateY}deg) 
              rotateX(${rotation.rotateX}deg)
              rotateZ(${rotation.rotateZ}deg)
              translateX(${rotation.translateX}px)
              translateY(${rotation.translateY}px)
              translateZ(30px)
            `,
            transformOrigin: 'center bottom', // 以脚部为旋转中心
            transformStyle: 'preserve-3d'
          }}
        >
          {/* 人物主体 */}
          <div 
            className="relative"
            style={{
              transform: `
                scaleX(${mousePosition.x < 0 ? 1 : 1}) 
                ${mousePosition.x < -20 ? 'scaleX(-1)' : ''}
              `,
              transition: 'transform 0.5s ease-out'
            }}
          >
            <img 
              className="w-[600px] h-[810px] object-cover filter drop-shadow-2xl"
              src="/chloechu.png" 
              alt="Portfolio Character" 
              style={{
                objectPosition: 'center top',
                transform: `
                  translateX(${mousePosition.x * 0.2}px) 
                  translateY(${mousePosition.y * 0.1}px)
                `,
                transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            />
          </div>
          {/* 眨眼覆盖层 - 更精确的位置 */}
          {isBlinking && (
            <div className="absolute inset-0 pointer-events-none eye-blink">
              {/* 左眼 */}
              <div 
                className="absolute w-3 h-1 bg-black rounded-full opacity-80"
                style={{ 
                  top: '30%', 
                  left: '42%',
                  transform: `
                    translateX(${mousePosition.x * 0.1}px)
                    rotateY(${rotation.rotateY * 0.5}deg)
                  `
                }}
              ></div>
              {/* 右眼 */}
              <div 
                className="absolute w-3 h-1 bg-black rounded-full opacity-80"
                style={{ 
                  top: '30%', 
                  left: '52%',
                  transform: `
                    translateX(${mousePosition.x * 0.1}px)
                    rotateY(${rotation.rotateY * 0.5}deg)
                  `
                }}
              ></div>
            </div>
          )}
          
          {/* 头发动效层 - 跟随转身 */}
          <div 
            className="absolute top-0 left-0 w-full h-full pointer-events-none hair-sway"
            style={{
              transform: `
                translateX(${mousePosition.x * 0.6}px) 
                translateY(${mousePosition.y * 0.3}px)
                rotateY(${rotation.rotateY * 0.3}deg)
                rotateZ(${mousePosition.x * 0.03}deg)
              `,
              transition: 'transform 0.8s cubic-bezier(0.23, 1, 0.320, 1)',
              transformOrigin: 'center top'
            }}
          >
            {/* 头发阴影效果 */}
            <div className="absolute top-[10%] left-[35%] w-[30%] h-[25%] bg-black opacity-5 rounded-full blur-sm"></div>
          </div>
          
          {/* 人物阴影 - 跟随转身变化 */}
          <div 
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] h-8 bg-black opacity-20 rounded-full blur-md"
            style={{
              transform: `
                translateX(${-50 + mousePosition.x * 0.2}%) 
                translateY(${mousePosition.y * 0.1}px)
                scaleX(${1 + Math.abs(mousePosition.x) * 0.002})
                rotateZ(${rotation.rotateY * 0.1}deg)
              `,
              transition: 'transform 0.5s ease-out'
            }}
          ></div>
        </div>
      </div>
      
      {/* UI/UX - 左侧 */}
      <div className="left-[65px] top-[450px] absolute text-primary-orange font-bold font-mango z-30" style={{ fontSize: '350px', lineHeight: '350px', letterSpacing: '0.01em', transform: 'scaleY(0.65)' }}>
        UI/UX
      </div>
      
      {/* Arrow under UI/UX */}
      <div className="left-[65px] top-[680px] absolute z-30">
        <div className="w-28 h-36 relative overflow-hidden">
          <div className="w-28 h-36 left-0 top-0 absolute bg-primary-orange" />
        </div>
      </div>
      
      {/* DESIGNER - 右下 */}
      <div className="left-[700px] top-[600px] absolute text-primary-orange font-bold font-mango z-30" style={{ fontSize: '350px', lineHeight: '350px', letterSpacing: '0.01em', transform: 'scaleY(0.65)' }}>
        DESIGNER
      </div>
      
      {/* Side Content */}
      <div className="w-80 h-32 left-[1085px] top-[250px] absolute text-primary-orange font-bold font-['Inter'] leading-loose z-30" style={{ fontSize: '20px', lineHeight: '32px' }}>
        I transform ideas into bold and luxurious digital brands & websites — designed to stand out, sell smart, and scale beautifully.
      </div>
      
      <a 
        href="#contact" 
        className="left-[1085px] top-[480px] absolute text-primary-orange font-bold font-mango cursor-pointer hover:opacity-80 transition-opacity z-30"
        style={{ fontSize: '72px', lineHeight: '72px' }}
      >
        START A PROJECT
      </a>
      
      <div className="w-80 h-4 left-[1085px] top-[560px] absolute bg-primary-orange z-30" />
      
      {/* Decorative Element */}
      <div className="w-28 h-36 left-[20px] top-[750px] absolute overflow-hidden z-30">
        <div className="w-28 h-36 left-0 top-0 absolute bg-primary-orange" />
      </div>
    </div>
  );
}
