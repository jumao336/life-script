"use client"

import { useEffect, useRef } from 'react'

export default function StarryBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;
    
    // 清空容器
    container.innerHTML = '';
    
    // 星座组
    const constellationGroup = document.createElement('div');
    constellationGroup.className = 'constellation-group';
    constellationGroup.style.position = 'absolute';
    constellationGroup.style.width = '100%';
    constellationGroup.style.height = '100%';
    constellationGroup.style.opacity = '1';
    container.appendChild(constellationGroup);
    
    // 简化版 - 只创建背景星星
    createBackgroundStars(constellationGroup, containerWidth, containerHeight);
    
    // 添加一个简单的星座
    createSimpleConstellation(constellationGroup, containerWidth, containerHeight);
    
    // 一秒后开始星星闪烁动画
    setTimeout(() => {
      const stars = container.querySelectorAll('.star');
      stars.forEach(star => {
        (star as HTMLElement).style.opacity = '';
      });
      
      const mainStars = container.querySelectorAll('.main-star');
      mainStars.forEach(star => {
        (star as HTMLElement).style.opacity = '';
      });
    }, 500);
    
  }, []);
  
  // 创建背景星星
  function createBackgroundStars(container: HTMLElement, width: number, height: number) {
    // 减少星星数量，使页面看起来更简洁
    const smallStarCount = Math.floor(width * height / 6000);
    
    for (let i = 0; i < smallStarCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      // 随机位置
      const x = Math.random() * width;
      const y = Math.random() * height;
      
      // 随机大小 (2px - 4px)
      const size = Math.random() * 2 + 2;
      
      // 随机亮度
      const brightness = Math.random() * 0.4 + 0.6;
      
      // 随机动画持续时间
      const duration = Math.random() * 5 + 3;
      
      // 随机延迟
      const delay = Math.random() * 5;
      
      // 设置星星样式
      star.style.position = 'absolute';
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.borderRadius = '50%';
      star.style.opacity = '0';
      
      // 随机选择星星颜色 - 蓝白色调
      const starColors = [
        'rgba(220, 235, 255, 0.9)',
        'rgba(200, 220, 255, 0.9)',
        'rgba(180, 210, 255, 0.9)',
        'rgba(240, 245, 255, 0.9)'
      ];
      star.style.backgroundColor = starColors[Math.floor(Math.random() * starColors.length)];
      star.style.boxShadow = '0 0 5px 1px rgba(135, 206, 250, 0.6)';
      
      // 设置动画
      star.style.setProperty('--brightness', brightness.toString());
      star.style.setProperty('--duration', `${duration}s`);
      star.style.setProperty('--delay', `${delay}s`);
      star.style.animation = `twinkle var(--duration) infinite var(--delay)`;
      
      container.appendChild(star);
    }
    
    // 添加一些大星星 (4px - 6px)
    const largeStarCount = Math.floor(smallStarCount * 0.1); 
    
    for (let i = 0; i < largeStarCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      // 随机位置
      const x = Math.random() * width;
      const y = Math.random() * height;
      
      // 大星星
      const size = Math.random() * 2 + 4;
      
      // 更高亮度
      const brightness = Math.random() * 0.2 + 0.8;
      
      // 随机动画持续时间
      const duration = Math.random() * 6 + 4;
      
      // 随机延迟
      const delay = Math.random() * 5;
      
      // 设置星星样式
      star.style.position = 'absolute';
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.borderRadius = '50%';
      star.style.opacity = '0';
      
      // 随机选择大星星颜色 - 蓝白色调
      const bigStarColors = [
        'rgba(220, 240, 255, 1)',
        'rgba(190, 225, 255, 1)',
        'rgba(160, 210, 255, 1)'
      ];
      star.style.backgroundColor = bigStarColors[Math.floor(Math.random() * bigStarColors.length)];
      star.style.boxShadow = '0 0 8px 3px rgba(135, 206, 250, 0.7)';
      
      // 设置动画
      star.style.setProperty('--brightness', brightness.toString());
      star.style.setProperty('--duration', `${duration}s`);
      star.style.setProperty('--delay', `${delay}s`);
      star.style.animation = `twinkle var(--duration) infinite var(--delay)`;
      
      container.appendChild(star);
    }
  }
  
  // 创建一个简单的星座
  function createSimpleConstellation(container: HTMLElement, width: number, height: number) {
    // 天秤座位置在右上角
    const starPositions = [
      { x: 0.78, y: 0.25, size: 4 },
      { x: 0.83, y: 0.2, size: 3 },
      { x: 0.88, y: 0.25, size: 3 },
      { x: 0.83, y: 0.3, size: 4 },
      { x: 0.78, y: 0.35, size: 3 },
      { x: 0.88, y: 0.35, size: 3 }
    ];
    
    const lines = [[0,1], [1,2], [1,3], [3,4], [3,5]];
    
    // 创建星星
    starPositions.forEach((pos, index) => {
      const star = document.createElement('div');
      star.classList.add('main-star');
      
      const x = pos.x * width;
      const y = pos.y * height;
      const size = pos.size * 1.5;
      
      star.style.position = 'absolute';
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.borderRadius = '50%';
      star.style.backgroundColor = 'rgba(245, 235, 185, 1)';
      star.style.boxShadow = '0 0 15px 5px rgba(212, 175, 55, 0.9)';
      star.style.zIndex = '2';
      star.style.opacity = '0';
      
      const duration = Math.random() * 3 + 4;
      const delay = Math.random() * 2;
      
      star.style.setProperty('--duration', `${duration}s`);
      star.style.setProperty('--delay', `${delay}s`);
      star.style.animation = `mainStarTwinkle var(--duration) infinite var(--delay)`;
      
      container.appendChild(star);
    });
    
    // 创建连线
    lines.forEach(link => {
      const pos1 = starPositions[link[0]];
      const pos2 = starPositions[link[1]];
      
      const x1 = pos1.x * width;
      const y1 = pos1.y * height;
      const x2 = pos2.x * width;
      const y2 = pos2.y * height;
      
      const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      const angle = Math.atan2(y2 - y1, x2 - x1);
      
      const line = document.createElement('div');
      line.classList.add('constellation-line');
      
      line.style.position = 'absolute';
      line.style.width = `${length}px`;
      line.style.height = '1.5px';
      line.style.left = `${x1}px`;
      line.style.top = `${y1}px`;
      line.style.transformOrigin = '0 0';
      line.style.transform = `rotate(${angle}rad)`;
      line.style.background = 'linear-gradient(90deg, rgba(212, 175, 55, 0), rgba(212, 175, 55, 0.7), rgba(212, 175, 55, 0))';
      line.style.boxShadow = '0 0 5px 1px rgba(212, 175, 55, 0.5)';
      line.style.animation = `lineTwinkle 5s infinite`;
      
      container.appendChild(line);
    });
  }

  return (
    <div 
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full bg-black z-0"
    ></div>
  )
} 